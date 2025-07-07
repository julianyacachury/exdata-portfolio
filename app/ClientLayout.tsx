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
import { LanguageProvider, useLanguage } from "@/contexts/language-context"
import LanguageSelector from "@/components/language-selector"
import ScrollToTopButton from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </LanguageProvider>
  )
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { language } = useLanguage()

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang={language}>
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
  const { t } = useLanguage()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Navigation items with their paths
  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.services"), path: "/services" },
    { label: t("nav.projects"), path: "/projects" },
    { label: t("nav.technologies"), path: "/technologies" },
    { label: t("nav.team"), path: "/team" },
  ]

  // Function to check if a nav item is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className="bg-brand-red px-3 py-1 rounded text-xl font-bold text-white">Exdata</span>
        </Link>

        {/* Desktop and Mobile language selector - always visible */}
        <div className="flex items-center">
          <LanguageSelector />

          {/* Mobile menu button */}
          <button
            className="ml-2 block rounded-md p-2 text-slate-800 md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-sm font-medium transition-colors ${
                isActive(item.path) ? "text-brand-red font-semibold" : "text-slate-800 hover:text-brand-red"
              }`}
            >
              {item.label}
              {isActive(item.path) && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-brand-red" />}
            </Link>
          ))}
          <Button asChild className="bg-brand-red hover:bg-brand-red-light text-white">
            <Link href="/contact">{t("nav.contact")}</Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 z-50 border-b border-slate-200 bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(item.path)
                      ? "bg-brand-red/10 text-brand-red font-semibold"
                      : "text-slate-800 hover:bg-brand-red/10 hover:text-brand-red"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red rounded-l-md" />
                  )}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-brand-red hover:bg-brand-red-light text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contact">{t("nav.contact")}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 flex items-center">
              <span className="bg-brand-red px-3 py-1 rounded text-xl font-bold text-white">Exdata</span>
            </Link>
            <p className="mb-4 text-sm text-slate-700">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-crimson/70 hover:text-brand-crimson" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-brand-crimson/70 hover:text-brand-crimson" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-brand-crimson/70 hover:text-brand-crimson" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("footer.ourTeam")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("service.analytics")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("service.dataStrategy")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("service.predictive")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-700 hover:text-brand-red">
                  {t("nav.services")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-700">
            &copy; {new Date().getFullYear()} Exdata. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

