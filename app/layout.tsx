import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Digital Marketing | Results-Driven Marketing Agency",
  description:
    "Apex Digital Marketing delivers data-driven SEO, PPC, social media, content marketing, email campaigns, and analytics solutions that accelerate your business growth.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "PPC management",
    "social media marketing",
    "content marketing",
    "email marketing",
    "analytics",
    "marketing agency",
  ],
  authors: [{ name: "Apex Digital Marketing" }],
  creator: "Apex Digital Marketing",
  metadataBase: new URL("https://marketing-agency-three-xi.vercel.app"),
  alternates: {
    canonical: "https://marketing-agency-three-xi.vercel.app",
  },
  openGraph: {
    title: "Apex Digital Marketing | Results-Driven Marketing Agency",
    description:
      "Data-driven digital marketing solutions — SEO, PPC, Social Media, Content, Email & Analytics. Let's grow your brand together.",
    url: "https://marketing-agency-three-xi.vercel.app",
    siteName: "Apex Digital Marketing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apex Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Digital Marketing | Results-Driven Marketing Agency",
    description:
      "Data-driven digital marketing solutions that accelerate business growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Apex Digital Marketing",
    description:
      "Results-driven digital marketing agency specializing in SEO, PPC, social media, content marketing, email campaigns, and analytics.",
    url: "https://marketing-agency-three-xi.vercel.app",
    telephone: "+1-555-0192",
    email: "hello@apexdigital.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive, Suite 400",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2672,
      longitude: -97.7431,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://twitter.com/apexdigital",
      "https://linkedin.com/company/apexdigital",
      "https://instagram.com/apexdigital",
    ],
    priceRange: "$$",
    image: "/og-image.png",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
