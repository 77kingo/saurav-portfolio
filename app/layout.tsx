import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Saurav Singh | Full Stack Developer",
  description:
    "Saurav Singh is a Full Stack Developer building scalable, high-performance web applications using React and Next.js.",
  openGraph: {
    title: "Saurav Singh | Full Stack Developer",
    description:
      "Modern portfolio showcasing projects, skills and experience.",
    url: "https://your-vercel-url.vercel.app",
    siteName: "Saurav Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Analytics (Optional) */}
        {/* Replace G-XXXXXXX with your ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
