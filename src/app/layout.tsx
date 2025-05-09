import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Your welcome page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Header />
          <AuthProvider>{children}</AuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
