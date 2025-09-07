import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://blogspace-five.vercel.app"),
  title: {
    default: "BlogSpace | แพลตฟอร์มบล็อกที่สวยงาม",
    template: "%s | BlogSpace",
  },
  description:
    "สร้างและแบ่งปันเรื่องราวของคุณในแบบที่สวยงาม พร้อมฟีเจอร์ครบครัน",
  keywords: [
    "บล็อก",
    "เขียนบล็อก",
    "แพลตฟอร์มบล็อก",
    "Blog",
    "Blogging",
  ],
  authors: [{ name: "BlogSpace" }],
  creator: "BlogSpace",
  publisher: "BlogSpace",
  applicationName: "BlogSpace",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: "BlogSpace",
    title: "BlogSpace | แพลตฟอร์มบล็อกที่สวยงาม",
    description:
      "สร้างและแบ่งปันเรื่องราวของคุณในแบบที่สวยงาม พร้อมฟีเจอร์ครบครัน",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlogSpace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogSpace | แพลตฟอร์มบล็อกที่สวยงาม",
    description:
      "สร้างและแบ่งปันเรื่องราวของคุณในแบบที่สวยงาม พร้อมฟีเจอร์ครบครัน",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD: Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'BlogSpace',
              url: 'https://blogspace-five.vercel.app/',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://blogspace-five.vercel.app/blogs?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
