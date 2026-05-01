import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodEx Dev Portfolio App",
  description: "One of the best animated porfolio pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Body div removed to place this TransitionProvider component */}
        {/* <TransitionProvider children={children}></TransitionProvider> */}
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
