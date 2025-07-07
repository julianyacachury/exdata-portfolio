"use client"

import { motion } from "framer-motion"
import { Beaker, BookOpen, Compass, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const teamPreview = [
    {
      name: "Facundo Joaquin García",
      role: t("team.facundo.role"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Agustin Brusco",
      role: t("team.agustin.role"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emiliano Barone",
      role: t("team.emiliano.role"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Andres Tovar",
      role: t("team.andres.role"),
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red to-brand-red-light px-4 py-20 text-white md:px-6 lg:px-8">
        <motion.div className="container mx-auto max-w-5xl" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">{t("about.hero.title")}</h1>
              <p className="mb-6 text-lg text-slate-300">{t("about.hero.description1")}</p>
              <p className="text-lg text-slate-300">{t("about.hero.description2")}</p>
            </div>
            <motion.div
              className="relative h-[300px] overflow-hidden rounded-lg bg-slate-700 sm:h-[400px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Users className="h-24 w-24 text-slate-600" />
                </motion.div>
              </div>
              <motion.img
                src="/placeholder.svg?height=400&width=600"
                alt="Exdata team"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t("about.story.title")}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-6 text-lg text-slate-700">{t("about.story.description1")}</p>
              <p className="text-lg text-slate-700">{t("about.story.description2")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-6 text-lg text-slate-700">{t("about.story.description3")}</p>
              <p className="text-lg text-slate-700">{t("about.story.description4")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("about.values.title")}
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600">{t("about.values.description")}</p>
          </motion.div>
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: <Beaker className="h-8 w-8 text-brand-mint" />,
                title: t("about.values.analytical"),
                description: t("about.values.analytical.description"),
              },
              {
                icon: <Compass className="h-8 w-8 text-brand-blue-light" />,
                title: t("about.values.ethical"),
                description: t("about.values.ethical.description"),
              },
              {
                icon: <BookOpen className="h-8 w-8 text-brand-mint" />,
                title: t("about.values.learning"),
                description: t("about.values.learning.description"),
              },
            ].map((value, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -5 }}>
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <motion.div
                      className="mb-4 rounded-full bg-brand-crimson/20 p-3"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("about.team.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">{t("about.team.description")}</p>
          </motion.div>
          <motion.div
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamPreview.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div className="mb-4 h-40 w-40 overflow-hidden rounded-full" variants={imageVariants}>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <h3 className="mb-1 text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red/10">
                <Link href="/team">{t("about.team.button")}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

