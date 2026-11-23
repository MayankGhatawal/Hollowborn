import "./globals.css";

const description =
  "The moss walks while the bell sleeps. On a rain-soaked hill drawn in text, find what the bell has lost. Free in your desktop browser.";

export const metadata = {
  title: "Hollowborn: an ASCII soulslike",
  description,
  alternates: {
    canonical: "https://hollowborn.vercel.app/",
  },
  openGraph: {
    type: "website",
    url: "https://hollowborn.vercel.app/",
    title: "Hollowborn: an ASCII soulslike",
    description,
    images: [
      {
        url: "https://res.cloudinary.com/dsli0q1hn/image/upload/v1795466067/Hollowborn__The_Sleeping_Bell_zw0rwm.png",
        width: 1200,
        height: 630,
        alt: "A knight in plate armor and a torn cloak stands in the rain on a grassy hill, looking across at a ruined chapel, a glowing lantern, and a distant bell tower.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03040a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-screen="loading">{children}</body>
    </html>
  );
}
