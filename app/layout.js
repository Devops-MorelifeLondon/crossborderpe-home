import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import ReCaptchaProviderWrapper from "@/components/ReCaptchaProviderWrapper";
import Script from "next/script";

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

        {/* ✅ Jotform (delayed load) */}
        <Script id="jotform-delayed" strategy="afterInteractive">
          {`
            setTimeout(function () {
              var s = document.createElement("script");
              s.src = "https://cdn.jotfor.ms/agent/embedjs/019a822b719976c0aca539928c8ec215fc10/embed.js";
              s.async = true;
              document.body.appendChild(s);
            }, 4000);
          `}
        </Script>

        <ReCaptchaProviderWrapper>
          <NextTopLoader height={3} color="blue" />
          <NavBar />
          {children}
          <Footer />
        </ReCaptchaProviderWrapper>
      </body>
    </html>
  );
}
