"use client"

import { motion } from "framer-motion"
import { ArrowRight, Atom, BarChart2, Brain, Database, FileText, Microscope, Server } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Brain className="h-10 w-10 text-brand-crimson" />,
      title: t("services.analytics.title"),
      description: t("services.analytics.description"),
      details: t("services.analytics.details"),
    },
    {
      icon: <Database className="h-10 w-10 text-brand-red-light" />,
      title: t("services.dataStrategy.title"),
      description: t("services.dataStrategy.description"),
      details: t("services.dataStrategy.details"),
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-brand-crimson-dark" />,
      title: t("services.predictive.title"),
      description: t("services.predictive.description"),
      details: t("services.predictive.details"),
    },
    {
      icon: <Microscope className="h-10 w-10 text-green-600" />,
      title: t("services.bi.title"),
      description: t("services.bi.description"),
      details: t("services.bi.details"),
    },
    {
      icon: <Server className="h-10 w-10 text-red-600" />,
      title: t("services.ai.title"),
      description: t("services.ai.description"),
      details: t("services.ai.details"),
    },
    {
      icon: <FileText className="h-10 w-10 text-orange-600" />,
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      details: t("services.consulting.details"),
    },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  const processStepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red to-brand-red-light px-4 py-20 text-white md:px-6 lg:px-8">
        <motion.div
          className="container mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">{t("services.hero.title")}</h1>
              <p className="mb-6 text-lg text-slate-300">{t("services.hero.description1")}</p>
              <p className="text-lg text-slate-300">{t("services.hero.description2")}</p>
            </div>
            <motion.div
              className="relative flex items-center justify-center overflow-hidden rounded-lg bg-slate-700 p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    duration: 0.8,
                  },
                }}
              >
                <Atom className="h-48 w-48 animate-pulse text-brand-mint/30" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 1,
                  },
                }}
              >
                <div className="h-32 w-32 rounded-full bg-brand-mint/20 blur-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("services.offer.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">{t("services.offer.description")}</p>
          </motion.div>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants} custom={index} whileHover={{ y: -5 }}>
                <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <motion.div className="mb-4" variants={iconVariants}>
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <motion.p
                      className="text-slate-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      {service.details}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("services.approach.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">{t("services.approach.description")}</p>
          </motion.div>
          <div className="relative">
            {/* Timeline line - positioned to center of the circles */}
            <motion.div
              className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-brand-mint/30 hidden md:block"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
            ></motion.div>
            <div className="space-y-12">
              {[
                {
                  title: t("services.approach.step1"),
                  description: t("services.approach.step1.description"),
                },
                {
                  title: t("services.approach.step2"),
                  description: t("services.approach.step2.description"),
                },
                {
                  title: t("services.approach.step3"),
                  description: t("services.approach.step3.description"),
                },
                {
                  title: t("services.approach.step4"),
                  description: t("services.approach.step4.description"),
                },
                {
                  title: t("services.approach.step5"),
                  description: t("services.approach.step5.description"),
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={processStepVariants}
                  custom={index}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Circle container - ensure it's perfectly centered */}
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-md"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          delay: 0.3 + index * 0.2,
                        }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>

                    {/* Left content */}
                    <motion.div
                      className={`mt-4 md:mt-0 md:w-1/2 md:pr-8 md:text-right lg:pr-16 ${
                        index % 2 === 1 ? "md:invisible" : ""
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.2 }}
                    >
                      {index % 2 === 0 && (
                        <>
                          <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          <p className="mt-2 text-slate-600">{step.description}</p>
                        </>
                      )}
                    </motion.div>

                    {/* Right content */}
                    <motion.div
                      className={`mt-4 md:mt-0 md:w-1/2 md:pl-8 lg:pl-16 ${index % 2 === 0 ? "md:invisible" : ""}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.2 }}
                    >
                      {index % 2 === 1 && (
                        <>
                          <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          <p className="mt-2 text-slate-600">{step.description}</p>
                        </>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-red to-brand-red-light px-4 py-16 text-white md:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">{t("services.cta.title")}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">{t("services.cta.description")}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-white text-brand-red hover:bg-white/90">
              <Link href="/contact">
                {t("services.cta.button")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

