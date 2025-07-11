import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Exdata - AI & Machine Learning Powered by Physics",
  description:
    "Exdata combines deep expertise in physics with cutting-edge AI to solve complex problems and drive innovation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'