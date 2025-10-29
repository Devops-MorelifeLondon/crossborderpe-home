"use client";

import Head from "next/head";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight,
    Award,
    Clock,
    CheckCircle,
    Github,
    Globe,
    Headphones,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Shield,
    Twitter,
    User,
    Zap,
    XCircle,
} from "lucide-react";

// --- Data for Page Sections --- (unchanged)
const heroFeatures = [
    { icon: Zap, title: "Fast Response Times" },
    { icon: Shield, title: "Secure Communication" },
    { icon: Globe, title: "Global Support Team" },
    { icon: Award, title: "Dedicated Specialists" }
];

const contactMethods = [
    {
        icon: Headphones,
        title: "Live Chat Support",
        description: "Get instant help with your cross-border payments.",
        contact: "Available 24/7",
        availability: "Average response: 30 seconds",
        action: "Start Chat",
        href: "#" 
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "Send us your detailed inquiries for a swift response.",
        contact: "info@crossborderpe.com",
        availability: "Response within 2 hours",
        action: "Send Email",
        href: "mailto:info@crossborderpe.com"
    },
];

const companyStats = [
    { value: "$25B+", label: "Annual Volume" },
    { value: "50K+", label: "Active Businesses" },
    { value: "200+", label: "Countries" },
    { value: "99.99%", label: "Uptime" },
];

const officeLocations = [
    { region: "Americas", cities: "New York • Toronto • Mexico City" },
    { region: "Europe", cities: "London • Zurich • Frankfurt" },
    { region: "Asia Pacific", cities: "Singapore • Hong Kong • Tokyo" },
];

const ContactPage = () => {
    const formRef = useRef(null);
    
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ 
        success: false, 
        error: false, 
        message: '',
        submissionID: null 
    });

    // Form data state to avoid event dependency
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // Auto-hide success/error message after 5 seconds
    useEffect(() => {
        if (submitStatus.success || submitStatus.error) {
            const timer = setTimeout(() => {
                setSubmitStatus({ success: false, error: false, message: '', submissionID: null });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        setIsLoading(true);
        setSubmitStatus({ success: false, error: false, message: '' });

        // Use state data instead of FormData to avoid event.currentTarget
        const data = {
            fullName: formData.fullName?.trim() || '',
            contactNumber: formData.contactNumber?.trim() || '',
            email: formData.email?.trim() || '',
            message: formData.message?.trim() || ''
        };

        // Client-side validation
        if (!data.fullName || !data.contactNumber || !data.email || !data.message) {
            setSubmitStatus({ 
                success: false, 
                error: true, 
                message: 'Please fill in all fields with valid information.' 
            });
            setIsLoading(false);
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            setSubmitStatus({ 
                success: false, 
                error: true, 
                message: 'Please enter a valid email address.' 
            });
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/jotform', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    // Don't cache this request
                    'Cache-Control': 'no-cache',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log('API Response:', result);

            if (response.ok && result.success) {
                setSubmitStatus({ 
                    success: true, 
                    error: false, 
                    message: 'Thank you! Your message has been sent successfully. Our team will contact you within 24 hours.',
                    submissionID: result.submissionID 
                });
                
                // Reset form data state and clear inputs manually
                setFormData({
                    fullName: '',
                    contactNumber: '',
                    email: '',
                    message: ''
                });

                // Also clear the form using ref as backup
                if (formRef.current) {
                    // Clear all input values manually
                    const inputs = formRef.current.querySelectorAll('input, textarea');
                    inputs.forEach(input => {
                        input.value = '';
                    });
                    
                    // Trigger reset on the form
                    formRef.current.reset();
                }
                
            } else {
                const errorMessage = result.error || 
                    (typeof result.details === 'string' ? result.details : 
                     (result.details?.message || 'Submission failed. Please try again.'));
                
                setSubmitStatus({ 
                    success: false, 
                    error: true, 
                    message: errorMessage 
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({ 
                success: false, 
                error: true, 
                message: 'Sorry, something went wrong. Please check your connection and try again.' 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us | Let's Start a Conversation</title>
                <meta name="description" content="Have a question, a project idea, or need expert support? Reach out to our team of specialists for timely and effective solutions for your payment needs." />
            </Head>

            <div className="bg-gradient-to-b from-slate-50 to-white">
                {/* ===== Hero Section ===== */}
                <section className="w-full pt-24 pb-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                            
                            {/* --- Left Column: Content --- */}
                            <div className="max-w-xl">
                                <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-6 border border-blue-100 shadow-sm">
                                    <MessageSquare className="w-5 h-5 mr-3 text-blue-600" />
                                    We're Here to Help You Succeed
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                                    Let's Start a <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Conversation</span>
                                </h1>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                    Have a question, a project idea, or need expert support? Fill out the form, and one of our payment specialists will get back to you shortly.
                                </p>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-12">
                                    {heroFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <feature.icon className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-slate-200 my-10"></div>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Business Hours</h3>
                                        <div className="flex items-start space-x-3 text-slate-600">
                                            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                                                <p className="text-sm text-slate-500">We typically respond within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Follow Us</h3>
                                        <div className="flex items-center space-x-5">
                                            <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                                <span className="sr-only">Twitter</span>
                                                <Twitter className="w-6 h-6" />
                                            </Link>
                                            <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                                <span className="sr-only">LinkedIn</span>
                                                <Linkedin className="w-6 h-6" />
                                            </Link>
                                            <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">
                                                <span className="sr-only">GitHub</span>
                                                <Github className="w-6 h-6" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Right Column: Contact Form --- */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl transform -rotate-2"></div>
                                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                                    <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex space-x-1.5">
                                                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                                                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                                                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                                            </div>
                                            <span className="text-slate-600 text-sm font-medium">Send a Secure Message</span>
                                        </div>
                                    </div>
                                    <div className="p-6 sm:p-8">
                                        {/* Enhanced Success/Error Messages */}
                                        {submitStatus.message && (
                                            <div className={`mb-6 p-4 rounded-xl border-l-4 shadow-sm transition-all duration-300 ${
                                                submitStatus.success 
                                                    ? 'bg-green-50 border-green-500 text-green-800' 
                                                    : 'bg-red-50 border-red-500 text-red-800'
                                            }`}>
                                                <div className="flex items-start space-x-3">
                                                    {submitStatus.success ? (
                                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    ) : (
                                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                    )}
                                                    <div className="flex-1">
                                                        <p className="font-medium">{submitStatus.message}</p>
                                                        {submitStatus.success && submitStatus.submissionID && (
                                                            <p className="text-sm mt-1 opacity-80">
                                                                Reference ID: <span className="font-mono bg-green-100 px-2 py-1 rounded text-xs">{submitStatus.submissionID}</span>
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Form with controlled inputs */}
                                        <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-5">
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                                                <div className="relative rounded-md shadow-sm">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <User className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                                    </div>
                                                    <input 
                                                        type="text" 
                                                        name="fullName" 
                                                        id="fullName" 
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        required 
                                                        disabled={isLoading}
                                                        className="block w-full rounded-lg border-slate-300 pl-10 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:bg-slate-50 disabled:cursor-not-allowed sm:text-sm" 
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="contactNumber" className="block text-sm font-medium text-slate-700 mb-1.5">Contact Number *</label>
                                                <div className="relative rounded-md shadow-sm">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <Phone className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                                    </div>
                                                    <input 
                                                        type="tel" 
                                                        name="contactNumber" 
                                                        id="contactNumber" 
                                                        value={formData.contactNumber}
                                                        onChange={handleInputChange}
                                                        required 
                                                        disabled={isLoading}
                                                        className="block w-full rounded-lg border-slate-300 pl-10 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:bg-slate-50 disabled:cursor-not-allowed sm:text-sm" 
                                                        placeholder="+91 0000000000"
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Work Email *</label>
                                                <div className="relative rounded-md shadow-sm">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <Mail className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                                    </div>
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        id="email" 
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required 
                                                        disabled={isLoading}
                                                        className="block w-full rounded-lg border-slate-300 pl-10 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:bg-slate-50 disabled:cursor-not-allowed sm:text-sm" 
                                                        placeholder="you@company.com" 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                                                <div className="relative">
                                                    <textarea 
                                                        name="message" 
                                                        id="message" 
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows={4}
                                                        required 
                                                        disabled={isLoading}
                                                        className="block w-full rounded-lg border-slate-300 py-2.5 px-3.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:bg-slate-50 disabled:cursor-not-allowed sm:text-sm resize-none" 
                                                        placeholder="How can we help you achieve your goals?"
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="pt-2">
                                                <button 
                                                    type="submit" 
                                                    disabled={isLoading}
                                                    className="group disabled:opacity-50 disabled:cursor-not-allowed w-full flex justify-center items-center px-6 py-3.5 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl transition-all disabled:shadow-none"
                                                >
                                                    {isLoading ? (
                                                        <>
                                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Send Inquiry</span>
                                                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                        
                                        {/* Privacy note */}
                                        <div className="mt-6 pt-4 border-t border-slate-200">
                                            <p className="text-xs text-slate-500 text-center">
                                                Your information is secure and will only be used to respond to your inquiry. 
                                                We respect your privacy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* ===== Rest of sections remain unchanged ===== */}
                <section>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">Other Ways to Connect</h2>
                            <p className="mt-4 text-lg text-slate-600">We're available through multiple channels. Choose the one that works best for you.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {contactMethods.map((method, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all flex flex-col">
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 w-fit mx-auto mb-6">
                                        <method.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h3>
                                    <p className="text-slate-600 mb-4 flex-grow">{method.description}</p>
                                    <div className="space-y-2 mb-6">
                                        <div className="font-semibold text-slate-900">{method.contact}</div>
                                        <div className="text-sm text-slate-500">{method.availability}</div>
                                    </div>
                                    <Link href={method.href} className="mt-auto w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-all">
                                        {method.action}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose CrossborderPe</h3>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {companyStats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                        <div className="text-sm text-slate-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-50 rounded-lg p-6">
                                <div className="flex items-center space-x-3 mb-3">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                    <span className="font-semibold text-slate-900">Enterprise Security</span>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    Bank-grade security with PCI DSS Level 1 compliance, ensuring your transactions are always protected.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                            <div className="flex items-center space-x-3 mb-6">
                                <Globe className="w-6 h-6 text-blue-600" />
                                <h3 className="text-2xl font-bold text-slate-900">Global Presence</h3>
                            </div>
                            <div className="space-y-4">
                                {officeLocations.map((loc, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-slate-900">{loc.region}</div>
                                            <div className="text-sm text-slate-600">{loc.cities}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="pb-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl">
                                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Global Payments?</h3>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Join thousands of businesses who trust CrossborderPe for their international payment needs.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Link href="#" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg">
                                        Open Account
                                    </Link>
                                    <Link href="#" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
                                        Schedule Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactPage;
