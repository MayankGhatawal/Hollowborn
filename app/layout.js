import "./globals.css";

const description =
  "The moss walks while the bell sleeps. On a rain-soaked hill drawn in text, find what the bell has lost. Free in your desktop browser.";

export const metadata = {
  title: "Hollowborn: an ASCII soulslike",
  description,
  alternates: {
    canonical: "https://souls.theroboticsstack.com/",
  },
  openGraph: {
    type: "website",
    url: "https://souls.theroboticsstack.com/",
    title: "Hollowborn: an ASCII soulslike",
    description,
    images: [
      {
        url: "https://ascii-souls.pages.dev/hero.jpg",
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
