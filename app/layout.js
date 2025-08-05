import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
export const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
export const metadata = {
  title: "Agentics Cloud",
  description: "Agent Layer Task Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGroteskFont.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
