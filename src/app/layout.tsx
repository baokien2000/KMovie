import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";
import LayoutProvider from "@/providers/layout-provider";
import { NextApiResponse, NextApiRequest } from "next";

const inter = Inter({ subsets: ["latin"] });

interface Props {}
export function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Cache-Control", "private");
}
export async function generateMetadata({}: Props, parent: ResolvingMetadata): Promise<Metadata> {
    return {
        title: {
            template: "%s | KMovie",
            default: "KMovie",
        },
        description: "Watch for free",
        icons: {
            icon: ["/favicon.ico"],
            apple: ["/favicon.ico"],
        },
        openGraph: {
            type: "website",
            locale: "vi",
            url: `https://kmovie2000.netlify.app`,
            description: "Watch for free",
            siteName: "KMovie",
            alternateLocale: [`https://kmovie2000.netlify.app`],
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="google" content="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="android-touch-icon" href="/favicon.ico" />
                <link rel="windows-touch-icon" href="/favicon.ico" />
            </head>
            <body className={cn(inter.className, " bg-mainBackground min-h-screen h-full w-full ")}>
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    );
}
