"use client"

import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("contact.faq.q1"),
      answer: t("contact.faq.a1"),
    },
    {
      question: t("contact.faq.q2"),
      answer: t("contact.faq.a2"),
    },
    {
      question: t("contact.faq.q3"),
      answer: t("contact.faq.a3"),
    },
    {
      question: t("contact.faq.q4"),
      answer: t("contact.faq.a4"),
    },
    {
      question: t("contact.faq.q5"),
      answer: t("contact.faq.a5"),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red to-brand-red-light px-4 py-20 text-white md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">{t("contact.hero.title")}</h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-300">{t("contact.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">{t("contact.form.title")}</h2>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">{t("contact.form.firstName")}</Label>
                    <Input id="first-name" placeholder={`${t("contact.form.firstName")}...`} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">{t("contact.form.lastName")}</Label>
                    <Input id="last-name" placeholder={`${t("contact.form.lastName")}...`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input id="email" type="email" placeholder={`${t("contact.form.email")}...`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t("contact.form.company")}</Label>
                  <Input id="company" placeholder={`${t("contact.form.company")}...`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                  <Input id="subject" placeholder={`${t("contact.form.subject")}...`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea id="message" placeholder={`${t("contact.form.message")}...`} className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full bg-brand-red text-white hover:bg-brand-red-light sm:w-auto">
                  {t("contact.form.button")}
                </Button>
              </form>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">{t("contact.info.title")}</h2>
              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-crimson/20">
                    <MapPin className="h-5 w-5 text-brand-crimson" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-slate-900">{t("contact.info.location")}</h3>
                    <p className="text-slate-600">
                      Ciudad Universitaria - Pabellón 1
                      <br />
                      Ciudad autónoma de Buenos Aires
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-crimson/20">
                    <Mail className="h-5 w-5 text-brand-crimson" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-slate-900">{t("contact.info.email")}</h3>
                    <p className="text-slate-600">
                      <a href="mailto:exdata.co@gmail.com" className="text-brand-red hover:text-brand-red-light">
                        exdata.co@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-crimson/20">
                    <Phone className="h-5 w-5 text-brand-crimson" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-slate-900">{t("contact.info.call")}</h3>
                    <p className="text-slate-600">
                      <a href="tel:+5491169993080" className="text-brand-red hover:text-brand-red-light">
                        +54 9 11 6999-3080
                      </a>
                      <br />
                      {t("contact.info.hours")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px] relative">
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-slate-400" />
                </div>
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt={t("contact.info.mapAlt")}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("contact.faq.title")}
          </h2>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

