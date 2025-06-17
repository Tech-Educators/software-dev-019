import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Staff app",
  description: "All the data about staff is in here",
  //openGraph sets how metadata will show on social media previews
  openGraph: {
    title: "Staff app",
    description:
      "All the data about staff is in here. Click to know more! No clickbait, I promise!",
    type: "website",
    url: "#",
    images: ["imageURL 1", "imageURL 2"],
    //store your images in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
