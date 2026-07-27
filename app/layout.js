import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dart Partner — The smarter way to run your business",
  description:
    "Run your restaurant from one powerful dashboard. Live orders, menu management, earnings, reviews, inventory, and analytics — all in one place.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "40x40" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-ink bg-background">
        {children}
      </body>
    </html>
  );
}
