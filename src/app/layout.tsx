import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JK Pipes | HDPE, PPH, PPR, PVC & Gas Pipes in Tanzania",
  description:
    "JK Pipes supplies quality HDPE, PPH, PPR, PVC and Gas Pipes with fittings for construction, farms, homes, offices, gardens and gas projects in Tanzania.",
  keywords: [
    "JK Pipes Tanzania",
    "PVC pipes Tanzania",
    "HDPE pipes Tanzania",
    "PPR pipes Tanzania",
    "PPH pipes Tanzania",
    "Gas pipes Tanzania",
    "Pipe fittings Tanzania",
    "Plastic pipes Tanzania",
    "Construction pipes Tanzania",
    "Agriculture pipes Tanzania",
  ],
  icons: {
    icon: [
      { url: "/Favicon.png", type: "image/png" },
    ],
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "JK Pipes | Quality Pipes for Every Project",
    description:
      "Durable HDPE, PPH, PPR, PVC and Gas Pipes & fittings for construction, farms, homes, offices, gardens and gas projects.",
    type: "website",
    locale: "en_TZ",
    siteName: "JK Pipes",
  },
};

export const viewport: Viewport = {
  themeColor: "#ed1c24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-jk-navy">
        {children}
      </body>
    </html>
  );
}
