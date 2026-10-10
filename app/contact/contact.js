"use client";

import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
  Shield,
  Twitter,
  User,
  Zap,
  XCircle,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";

const heroFeatures = [
  { icon: Zap, title: "Fast Response Times" },
  { icon: Shield, title: "Secure Communication" },
  { icon: Globe, title: "Global Support Team" },
  { icon: Award, title: "Dedicated Specialists" },
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your detailed inquiries for a swift response.",
    contact: "info@crossborderpe.com",
    availability: "Response within 2 hours",
    action: "Send Email",
    href: "mailto:info@crossborderpe.com",
  },
  {
    icon: Headphones,
    title: "24/7 Specialist Support",
    description: "Connect with our dedicated payment and enterprise specialists.",
    contact: "Available 24/7",
    availability: "Fast response for business inquiries",
    action: "Send Inquiry",
    href: "#inquiry-form",
  },
];

const companyStats = [
  { value: "25+", label: "Currencies" },
  { value: "150+", label: "Countries" },
  { value: "Fast", label: "Settlement" },
  { value: "Dedicated", label: "Support" },
];

const officeLocations = [
  { region: "Americas", cities: "New York • Toronto • Mexico City" },
  { region: "Europe", cities: "London • Zurich • Frankfurt" },
  { region: "Asia Pacific", cities: "Singapore • Hong Kong • Tokyo" },
];

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Let's Start a Conversation</title>
      </Head>

      <div className="bg-gradient-to-b from-slate-50 to-white">
        {/* ===== Hero Section ===== */}
        <section className="w-full pt-20 pb-10 mt-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* --- Left --- */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-800 mb-5 border border-blue-100">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                We're Here to Help You Succeed
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
                Let’s Start a <span className="text-blue-600">Conversation</span>
              </h1>
              <p className="text-slate-600 mb-8 text-lg">
                Have a question or need expert support? Fill out the form and our specialists will reach out shortly.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {heroFeatures.map((f, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <f.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right (Form) --- */}
            <div>
              <ContactForm formId="inquiry-form" />
            </div>
          </div>
        </section>

        {/* ===== Other Ways to Connect ===== */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
                Other Ways to Connect
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We're available through multiple channels. Choose the one that works best for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 w-fit mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h3>
                  <p className="text-slate-600 mb-4 flex-grow">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="font-semibold text-slate-900">{method.contact}</div>
                    <div className="text-sm text-slate-500">{method.availability}</div>
                  </div>
                  <Link
                    href={method.href}
                    className="mt-auto w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-all"
                  >
                    {method.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Why Choose + Global Presence ===== */}
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
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg"
                  >
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

        {/* ===== Final CTA ===== */}
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Global Payments?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses who trust CrossborderPe for their international
                  payment needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
             href={'https://app.crossborderpe.com'}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
                  >
                    Open Account
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
