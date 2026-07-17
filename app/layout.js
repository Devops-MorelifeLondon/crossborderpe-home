import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import ReCaptchaProviderWrapper from "@/components/ReCaptchaProviderWrapper";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CrossborderPe – Cross-Border Payments & Global Finance Solutions",
  description:
    "Manage international payments, multi-currency accounts, and global business operations with secure, transparent, and fully compliant cross-border solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Bing / MS Site validation */}
        <meta
          name="msvalidate.01"
          content="5BC544E30D7A6B30B66C8D57F437BB43"
        />

        {/* ✅ Meta / Facebook Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3740633449513522');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3740633449513522&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* ✅ Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u5g8py0ewt");
          `}
        </Script>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R1N18JJ1JW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R1N18JJ1JW');
          `}
        </Script>



        <ReCaptchaProviderWrapper>
          <NextTopLoader height={3} color="blue" />
          <NavBar />
          {children}
          <Footer />
          <a
            href="https://wa.me/917373026003"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-6.5 h-6.5" />
            <span className="absolute right-16 bg-slate-900 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
              Chat with us
            </span>
          </a>
        </ReCaptchaProviderWrapper>
      </body>
    </html>
  );
}
