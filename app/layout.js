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
        <meta name="msvalidate.01" content="5BC544E30D7A6B30B66C8D57F437BB43" />
        {/* ✅ Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u5g8py0ewt");
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
