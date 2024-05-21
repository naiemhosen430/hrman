import { Inter } from "next/font/google";
import "./globals.css";
import AuthContexProvider from "@/Contexts/AuthContex";
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Next js setup",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContexProvider>
          {children}
        </AuthContexProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
