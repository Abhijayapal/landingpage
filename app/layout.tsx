import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "REDACT: A revolutionised Redaction Tool",
    description: "Generated by create next app",
    icons: {
        icon: '/favicon.ico'
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <header className="sticky top-0 z-50">
                    <Navbar></Navbar>
                </header>
                <div className="relative">
                    {children}
                </div>
            </body>
        </html>
    );
}