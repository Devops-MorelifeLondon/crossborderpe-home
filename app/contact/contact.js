"use client";

import Head from "next/head";
import Link from 'next/link';
import React from 'react';
import {
    ArrowRight,
    Award,
    Clock,
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
} from "lucide-react";

// --- Data for Page Sections ---

// Features for the hero section
const heroFeatures = [
    { icon: Zap, title: "Fast Response Times" },
    { icon: Shield, title: "Secure Communication" },
    { icon: Globe, title: "Global Support Team" },
    { icon: Award, title: "Dedicated Specialists" }
];

// Data for the alternative contact methods section
const contactMethods = [
    {
        icon: Headphones,
        title: "Live Chat Support",
        description: "Get instant help with your cross-border payments.",
        contact: "Available 24/7",
        availability: "Average response: 30 seconds",
        action: "Start Chat",
        href: "#" // Replace with your live chat link
    },
    {
        icon: Phone,
        title: "Phone Support",
        description: "Speak directly with our payment specialists.",
        contact: "+1 (800) 123-4567",
        availability: "24/7 Multi-language support",
        action: "Call Now",
        href: "tel:+18001234567"
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "Send us your detailed inquiries for a swift response.",
        contact: "support@crossborderpe.com",
        availability: "Response within 2 hours",
        action: "Send Email",
        href: "mailto:support@crossborderpe.com"
    },
];

// Data for the "Why Choose Us" section
const companyStats = [
    { value: "$25B+", label: "Annual Volume" },
    { value: "50K+", label: "Active Businesses" },
    { value: "200+", label: "Countries" },
    { value: "99.99%", label: "Uptime" },
];

// Data for office locations
const officeLocations = [
    { region: "Americas", cities: "New York • Toronto • Mexico City" },
    { region: "Europe", cities: "London • Zurich • Frankfurt" },
    { region: "Asia Pacific", cities: "Singapore • Hong Kong • Tokyo" },
];


const ContactPage = () => {
    
    // Handle form submission logic here
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Implement your form submission logic, e.g., API call to JotForm or your backend.
        console.log("Form submitted!");
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
                                    We’re Here to Help You Succeed
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                                    Let&apos;s Start a <br />
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
                                            {/* Replace '#' with your actual social media links */}
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
                                        <form onSubmit={handleFormSubmit} method="POST" className="space-y-5">
                                            <div>
                                                <label htmlFor="full-name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                                <div className="mt-1.5 relative rounded-md shadow-sm">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <User className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                                    </div>
                                                    <input type="text" name="full-name" id="full-name" required className="block w-full rounded-lg border-slate-300 pl-10 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm" placeholder="John Doe"/>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work Email</label>
                                                <div className="mt-1.5 relative rounded-md shadow-sm">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <Mail className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                                    </div>
                                                    <input type="email" name="email" id="email" required className="block w-full rounded-lg border-slate-300 pl-10 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm" placeholder="you@company.com" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                                <div className="mt-1.5">
                                                    <textarea rows={4} name="message" id="message" required className="block w-full rounded-lg border-slate-300 py-2.5 px-3.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm" placeholder="How can we help you achieve your goals?"/>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <button type="submit" className="group w-full flex justify-center items-center px-6 py-3.5 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl transition-all">
                                                    <span>Send Inquiry</span>
                                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* ===== Contact Methods Section ===== */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">Other Ways to Connect</h2>
                            <p className="mt-4 text-lg text-slate-600">We're available through multiple channels. Choose the one that works best for you.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                {/* ===== Why Choose Us & Global Presence Section ===== */}
                <section className="py-20">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* --- Stats and Security --- */}
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

                        {/* --- Office Locations --- */}
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
                
                {/* ===== CTA Section ===== */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl">
                                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Global Payments?</h3>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Join thousands of businesses who trust CrossborderPe for their international payment needs.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                    {/* Replace '#' with your registration/demo links */}
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
