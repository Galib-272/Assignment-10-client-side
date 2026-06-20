import "@/app/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "TicketBari - Online Ticket Booking Platform",
  description: "Book bus, train, launch & flight tickets easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {/* Requirement 1a: Navbar fixed/sticky at top */}
          <Navbar />
          
          {/* Main content area with uniform padding and flex growth */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Requirement 1c: Footer always at bottom */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}