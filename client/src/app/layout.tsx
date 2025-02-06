"use client";

import { AuthProvider } from "../features/auth/context/AuthProvider";
import RootLayoutClient from "./RootLayoutClient"; // Ваш клиентский лэйаут

export default function RootLayout({
  children = null,
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
