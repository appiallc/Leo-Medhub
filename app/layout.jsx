import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Leo Medhub | Virtual Healthcare Staffing & Medical Billing",
  description: "Leo Medhub delivers comprehensive virtual healthcare staffing and medical billing solutions to unlock your practice's full potential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: inter.style.fontFamily }} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
