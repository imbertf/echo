import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import Layout from "@/components/shared/Layout";


import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "ECHO",
  description: "Riders on the blocks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          "h-screen w-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html >
  );
}
