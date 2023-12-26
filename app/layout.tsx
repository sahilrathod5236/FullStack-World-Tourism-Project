import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { ToasterProvider } from "@/providers/ToasterProvider";
import { getCurrentUser } from "@/actions/get-current-user";

import { ClientOnly } from "@/components/client-only";
import { Navbar } from "@/components/navbar-items/navbar";
import { RegisterModal } from "@/components/modals/register-modal";
import { LoginModal } from "@/components/modals/login-modal";
import { RentModal } from "@/components/modals/rent-modal";
import { SearchModal } from "@/components/modals/search-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tourism",
  description: "World Tourism App created using next.js 14",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <SearchModal />
          <RentModal />
          <RegisterModal />
          <LoginModal />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
