import { Geist, Geist_Mono } from "next/font/google";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMicroscope,
  IconSchema,
} from "@tabler/icons-react";
import Link from "next/link";
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
  title: "Co-Researcher",
  description:
    "AI powered web researcher for pharmaceutical and biotechnology researches",
};

const N8NSvg = () => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="#EA4B71"
    >
      <title>n8n</title>
      <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
    </svg>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="p-2 bg-gradient-to-r from-teal-600 to-sky-600 rounded-lg">
                <IconMicroscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Co-Researcher
                </h1>
                <p className="text-sm text-gray-600">
                  Smarter Web Research, Powered by AI
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="/research"
              className="text-gray-700 hover:text-gray-900"
            >
              <div>All</div>
            </Link>
            <Link
              href="https://github.com/ashiqsultan/co-researcher/tree/main/n8n"
              className="text-gray-700 hover:text-gray-900"
            >
              <div className="flex items-center space-x-1">
                <N8NSvg />
                <span className="text-sm font-medium text-gray-700">n8n</span>
              </div>
            </Link>
            <Link
              href="https://github.com/ashiqsultan/co-researcher"
              className="text-gray-700 hover:text-gray-900"
            >
              <div className="flex items-center space-x-1">
                <IconBrandGithub size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-gradient-to-r from-teal-600 to-sky-600 rounded-lg">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <IconMicroscope className="h-6 w-6 text-white" />
              </Link>
            </div>
          </div>
          <p className="text-gray-400">
            Co-Researcher | Smarter Web Research, Powered by AI
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Co-Researcher. All rights reserved.
          </p>
          <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 text-sm text-gray-600 mt-4">
            <a
              href="https://github.com/ashiqsultan/co-researcher"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white text-white"
              aria-label="GitHub repository"
            >
              <IconBrandGithub size={20} />
              <span>GitHub</span>
            </a>
            <span aria-hidden className="text-gray-600">
              •
            </span>
            <a
              href="https://linkedin.com/in/ashiq-sultan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white text-white"
              aria-label="LinkedIn profile"
            >
              <IconBrandLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
