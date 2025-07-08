"use client"

import type React from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import "./globals.css"
import ScrollToTopButton from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayoutContent>{children}</ClientLayoutContent>
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Navigation items with their paths
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Technologies", path: "/technologies" },
    { label: "Team", path: "/team" },
  ]

  // Function to check if a nav item is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="bg-slate-800 px-4 py-2 rounded text-lg font-bold text-white">Exdata</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-800"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-slate-800 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md font-medium">
              Contact Us
            </Button>
          </nav>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute left-0 right-0 top-full z-50 bg-white border-t border-gray-200 shadow-lg">
              <nav className="flex flex-col p-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-gray-600 hover:text-slate-800 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-slate-800 hover:bg-slate-700 text-white w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="bg-slate-800 px-4 py-2 rounded text-lg font-bold text-white">Exdata</span>
          </Link>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine deep analytical expertise with cutting-edge AI to solve complex problems and drive innovation
            across industries.
          </p>
        </div>
        <div className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Exdata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
