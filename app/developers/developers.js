"use client";
import { useState } from 'react';
import Head from 'next/head';
import {
  Code, Book, Zap, Shield, CheckCircle, ArrowRight, Copy, ExternalLink, Play, Download, Globe,
  Clock, Users, Star, Terminal, FileText, Layers, Key, Database, Webhook, GitBranch, Cpu, Lock,
  Award, Headphones, MessageCircle, PhoneCall,
} from 'lucide-react';
import DevelopersHero from '@/components/DevelopersHero';

/* ------------------------------------------------------------------ */
/* Types */
const developerTabs = [
  { id: 'overview',     label: 'Overview',         icon: Globe },
  { id: 'quickstart',   label: 'Quick Start',      icon: Zap },
  { id: 'api-reference',label: 'API Reference',    icon: Book },
  { id: 'sdks',         label: 'SDKs & Libraries', icon: Code },
  { id: 'webhooks',     label: 'Webhooks',         icon: Webhook },
  { id: 'testing',      label: 'Testing',          icon: Play },
];

const codeExample = `// Initialize CrossborderPe SDK
import { CrossborderPe } from '@crossborderpe/node-sdk';

const client = new CrossborderPe({
  apiKey: 'your_api_key',
  environment: 'sandbox' // or 'production'
});

// Create a payment
const payment = await client.payments.create({
  amount: 1000,
  currency: 'USD',
  recipient: {
    name: 'John Doe',
    email: 'john@example.com',
    country: 'GB',
  },
  purpose: 'Invoice payment',
});

console.log('Payment created:', payment.id);`;

const features = [
  { icon: Shield,   title: 'Bank-Grade Security', description: 'PCI DSS Level 1 compliant APIs with end-to-end encryption' },
  { icon: Zap,      title: 'Lightning Fast',      description: 'Sub-second response times with 99.99 % uptime guarantee' },
  { icon: Globe,    title: 'Global Coverage',     description: '200+ countries and 50+ currencies supported' },
  { icon: Code,     title: 'Developer Friendly',  description: 'RESTful APIs with comprehensive documentation' },
];

const sdks = [
  { name: 'Node.js', description: 'Official Node.js SDK with TypeScript support',         version: 'v2.1.0', downloads: '50 K+', language: 'JavaScript/TypeScript' },
  { name: 'Python',  description: 'Python SDK with async/await support',                  version: 'v1.8.0', downloads: '35 K+', language: 'Python' },
  { name: 'PHP',     description: 'PHP SDK compatible with Laravel and Symfony',          version: 'v1.5.0', downloads: '28 K+', language: 'PHP' },
  { name: 'Java',    description: 'Java SDK for Spring Boot applications',                version: 'v1.3.0', downloads: '22 K+', language: 'Java' },
  { name: 'Ruby',    description: 'Ruby gem for Rails applications',                      version: 'v1.2.0', downloads: '18 K+', language: 'Ruby' },
  { name: 'Go',      description: 'Go module for high-performance applications',          version: 'v1.1.0', downloads: '15 K+', language: 'Go' },
];

const apiEndpoints = [
  { method: 'POST', endpoint: '/v1/payments',         description: 'Create a new payment',        status: 'Active' },
  { method: 'GET',  endpoint: '/v1/payments/{id}',    description: 'Retrieve payment details',    status: 'Active' },
  { method: 'GET',  endpoint: '/v1/payments',         description: 'List all payments',           status: 'Active' },
  { method: 'POST', endpoint: '/v1/recipients',       description: 'Create a recipient',          status: 'Active' },
  { method: 'GET',  endpoint: '/v1/rates',            description: 'Get exchange rates',          status: 'Active' },
  { method: 'POST', endpoint: '/v1/webhooks',         description: 'Configure webhooks',          status: 'Active' },
];

const webhookEvents = [
  { event: 'payment.created',    description: 'Triggered when a payment is created' },
  { event: 'payment.completed',  description: 'Triggered when a payment is successfully completed' },
  { event: 'payment.failed',     description: 'Triggered when a payment fails' },
  { event: 'recipient.created',  description: 'Triggered when a new recipient is added' },
];


/* ------------------------------------------------------------------ */
/* Component */
const Developers = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            <section className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Build with CrossborderPe</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Integrate powerful cross-border payment capabilities into your applications with our developer-friendly APIs and SDKs.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 w-fit mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </section>

            <section className="bg-slate-900 rounded-2xl p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Get Started in Minutes</h3>
                <button
                  onClick={() => copyToClipboard(codeExample, 'main-example')}
                  className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedCode === 'main-example' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </section>

            <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">Trusted by Developers Worldwide</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[ 
                  { value: '10 K+',  label: 'Active Developers' }, 
                  { value: '500 M+', label: 'API Calls / Month' }, 
                  { value: '99.99 %',label: 'API Uptime' }, 
                  { value: '24/7',   label: 'Developer Support' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{value}</div>
                    <div className="text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'quickstart':
        return (
          <div className="space-y-12">
            <section className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Quick Start Guide</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Get up and running with CrossborderPe APIs in just a few steps.
              </p>
            </section>
            {[
              {
                step: '1',
                title: 'Get Your API Keys',
                body: 'Sign up for a developer account and get your sandbox API keys to start testing immediately.',
                codeBlock: null,
              },
              {
                step: '2',
                title: 'Install SDK',
                body: 'Choose your preferred programming language and install our official SDK.',
                codeBlock: 'npm install @crossborderpe/node-sdk',
              },
              {
                step: '3',
                title: 'Make Your First API Call',
                body: 'Test the integration with a simple payment creation request.',
                codeBlock:
`const payment = await client.payments.create({
  amount: 100,
  currency: 'USD',
  recipient: { email: 'test@example.com' },
});`,
              },
            ].map(({ step, title, body, codeBlock }) => (
              <section key={step} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <span className="text-blue-600 font-bold text-lg">{step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                </div>
                <p className="text-slate-600">{body}</p>
                {codeBlock && (
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-green-400 text-sm whitespace-pre">{codeBlock}</code>
                  </div>
                )}
                {step === '1' && (
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Get API Keys
                  </button>
                )}
              </section>
            ))}
          </div>
        );
      case 'api-reference':
        return (
          <div className="space-y-12">
            <section className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">API Reference</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Complete reference documentation for all CrossborderPe API endpoints.
              </p>
            </section>
            <section className="space-y-6">
              {apiEndpoints.map(({ method, endpoint, description, status }, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold ${
                          method === 'GET'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {method}
                      </span>
                      <code className="text-slate-700 font-mono">{endpoint}</code>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">{status}</span>
                      <ExternalLink className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer" />
                    </div>
                  </div>
                  <p className="text-slate-600 mt-3">{description}</p>
                </div>
              ))}
            </section>
          </div>
        );
      case 'sdks':
        return (
          <div className="space-y-12">
            <section className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">SDKs & Libraries</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Official SDKs and libraries for popular programming languages.
              </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sdks.map(({ name, description, version, downloads, language }) => (
                <div key={name} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{version}</span>
                  </div>
                  <p className="text-slate-600 mb-6">{description}</p>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Language</span>
                      <span className="font-medium text-slate-700">{language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Downloads</span>
                      <span className="font-medium text-slate-700">{downloads}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Install</span>
                    </button>
                    <button className="px-4 py-3 border border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        );
      case 'webhooks':
        return (
          <div className="space-y-12">
            <section className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Webhooks</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Stay updated with real-time notifications about payment events.
              </p>
            </section>
            <section className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Events</h3>
                <div className="space-y-4">
                  {webhookEvents.map(({ event, description }) => (
                    <div key={event} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <code className="text-blue-600 font-mono font-semibold">{event}</code>
                        <p className="text-slate-600 text-sm mt-1">{description}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Example Webhook Payload</h3>
                <pre className="text-green-400 text-sm overflow-x-auto"><code>{`{
  "event": "payment.completed",
  "data": {
    "id": "pay_123456789",
    "amount": 1000,
    "currency": "USD",
    "status": "completed",
    "created_at": "2025-07-22T10:30:00Z"
  }
}`}</code></pre>
              </div>
            </section>
          </div>
        );
      case 'testing':
        return (
          <div className="space-y-12">
            <section className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Testing Environment</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Test your integration safely with our comprehensive sandbox environment.
              </p>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Sandbox Features</h3>
                {[
                  'Full API functionality',
                  'No real money transactions',
                  'Test webhook events',
                  'Simulate different scenarios',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Test Credentials</h3>
                {[
                  { label: 'API Key', value: 'sk_test_123456789' },
                  { label: 'Webhook Secret', value: 'whsec_test_987654321' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 bg-slate-50 rounded-lg mb-4">
                    <div className="text-sm text-slate-600 mb-1">{label}</div>
                    <code className="text-slate-900 font-mono">{value}</code>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      default: return null;
    }
  };

  return (
    <>
    
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
        <DevelopersHero/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
         
          {/* Tabs */}
          <nav className="bg-white rounded-3xl shadow-xl border border-slate-100 p-2 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {developerTabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex flex-col items-center space-y-3 px-4 py-6 rounded-2xl font-semibold transition-all text-center ${
                    activeTab === id
                      ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  type="button"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-bold">{label}</span>
                </button>
              ))}
            </div>
          </nav>
          {renderTabContent()}
          {/* Support */}
          <section className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center mt-20">
            <h3 className="text-3xl font-bold text-white mb-4">Need Help Getting Started?</h3>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Our developer support team is here to help you integrate CrossborderPe APIs successfully.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { Icon: Headphones, title: '24/7 Developer Support', text: 'Get help from our technical experts anytime' },
                { Icon: MessageCircle, title: 'Developer Community', text: 'Join thousands of developers building with us' },
                { Icon: Book, title: 'Comprehensive Docs', text: 'Detailed guides and API documentation' },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                  <p className="text-slate-300 text-sm">{text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl">
                Get API Keys
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-slate-900 transition-all flex items-center space-x-3">
                <MessageCircle className="w-6 h-6" />
                <span>Contact Support</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Developers;
