import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactQueryClientProvider } from "@/components/providers/ReactQueryClientProvider";
import NoticStore from "@/components/globalComponents/noticStore";
import TopNav from "@/components/globalComponents/topNav";
import MenuStore from "@/components/globalComponents/menuStore";
import HeaderStore from "@/components/globalComponents/headerStore";
import Footer from "@/components/globalComponents/footer";
import 'sweetalert2/src/sweetalert2.scss'
import DialogDetailProduct from "@/components/globalComponents/dialogDetailProduct";
import HeaderMobile from "@/components/globalComponents/headerMobile";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ReactQueryClientProvider>
          <main className="flex flex-col">
            <NoticStore />
            <TopNav />
            <HeaderStore />
            <HeaderMobile />
            <MenuStore />
            {children}
            <Footer />
          </main>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
