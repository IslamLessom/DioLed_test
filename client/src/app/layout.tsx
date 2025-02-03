"use client";

import { AuthProvider } from "../features/Auth/context/AuthProvider";
import RootLayoutClient from "./RootLayoutClient"; // Ваш клиентский лэйаут

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <RootLayoutClient>{children}</RootLayoutClient>
        </AuthProvider>
      </body>
    </html>
  );
}
