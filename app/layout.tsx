import type { Metadata } from "next";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ian — Software Developer",
  description:
    "Software developer focused on creating functional and intuitive websites and applications. Love simplicity and nature.",
  openGraph: {
    title: "Ian — Software Developer",
    description:
      "Software developer focused on creating functional and intuitive websites and applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <body className={`${geistMono.variable} ${ebGaramond.variable} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </Layout>
  );
}
