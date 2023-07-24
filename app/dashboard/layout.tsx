import Sidebar from "@/components/ui/sidebar"
import * as React from 'react';
import { Toaster } from "@/components/ui/toaster"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
    <Sidebar></Sidebar>
    <div className="lg:ml-72 md:ml-72 ">
            <div className="p-6">
    {children}
            </div>
        </div>
        <Toaster />

        </body>
    </html>
  )
}
