import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";
import LayoutProvider from "@/providers/layout-provider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "KMovie",
//   description: "Watch for free",
//   icons: "/favicon.ico"
// };
interface Props {}
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
            // images: [
            //     {
            //         url: "https://firebasestorage.googleapis.com/v0/b/poho-vn.appspot.com/o/banners%2Fimages%2Fresize%2Fbanner5_1024x1024.png?alt=media&token=7b62dbc8-b0c7-43ca-8cca-a318f5abb0f6",
            //         width: 800,
            //         height: 600,
            //         alt: "KMovie"
            //     },
            //     {
            //         url: "https://firebasestorage.googleapis.com/v0/b/poho-vn.appspot.com/o/banners%2Fimages%2Fresize%2Fbanner5_1024x1024.png?alt=media&token=7b62dbc8-b0c7-43ca-8cca-a318f5abb0f6",
            //         width: 900,
            //         height: 800,
            //         alt: "KMovie"
            //     }
            // ],
            alternateLocale: [`https://kmovie2000.netlify.app`],
        },
    };
}
// export const metadata: Metadata = {
//     title: "KMovie3",
//     description: "Watch for free",
//     icons: {
//         icon: ["/favicon.ico"],
//         apple: ["/favicon.ico"],
//     },
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* <meta name="apple-itunes-app" content="app-id=1672028419" />
                <meta name="google-play-app" content="app-id=vn.poho.poho_app" /> */}
                {/* <meta name="msApplication-ID" content="microsoft.build.App" /> */}
                <meta name="google" content="notranslate" />
                {/* <meta name="msApplication-PackageFamilyName" content="microsoft.build_8wekyb3d8bbwe" /> */}

                {/*------- Test -------*/}

                {/* ------- */}
                {/* <title>KMovie 2</title> */}
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
