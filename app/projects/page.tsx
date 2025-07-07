"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects as projectsData } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()

  // Apply translations to projects
  const getTranslatedProjects = () => {
    return projectsData.map((project) => ({
      ...project,
      title: t(`projects.${project.id}.title`) || project.title,
      category: t(`projects.${project.id}.category`) || project.category,
      description: t(`projects.${project.id}.description`) || project.description,
      challenge: t(`projects.${project.id}.challenge`) || project.challenge,
      solution: t(`projects.${project.id}.solution`) || project.solution,
      results: t(`projects.${project.id}.results`) || project.results,
    }))
  }

  const translatedProjects = getTranslatedProjects()

  // Dynamically generate categories from projects
  const allCategories = translatedProjects.map((project) => project.category)
  const uniqueCategories = [t("projects.filter.all"), ...new Set(allCategories)].sort()

  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState(t("projects.filter.all"))

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.1,
      },
    },
  }

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.2,
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
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">{t("projects.hero.title")}</h1>
              <p className="mb-6 text-lg text-slate-300">{t("projects.hero.description1")}</p>
              <p className="text-lg text-slate-300">{t("projects.hero.description2")}</p>
            </div>
            <motion.div
              className="relative h-[300px] overflow-hidden rounded-lg bg-slate-700 sm:h-[400px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.img
                src="/placeholder.svg?height=400&width=600"
                alt="Project visualization"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-8 overflow-x-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Mobile view - vertical stacked buttons for very small screens */}
            <div className="flex flex-col space-y-3 sm:hidden">
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center justify-center rounded-md p-4 text-sm font-medium transition-colors
                    ${
                      selectedCategory === category
                        ? "bg-brand-blue text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                >
                  <span className="text-center">{category}</span>
                </button>
              ))}
            </div>

            {/* Tablet and Desktop view - horizontal tabs */}
            <div className="hidden sm:block">
              <div className="inline-flex w-full rounded-lg bg-slate-100 p-1.5">
                {uniqueCategories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex flex-1 items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors mx-0.5
                      ${
                        selectedCategory === category
                          ? "bg-brand-red text-white shadow-sm"
                          : "bg-transparent text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                      }`}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {category}
                    </motion.span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="wait">
              {translatedProjects
                .filter(
                  (project) => selectedCategory === t("projects.filter.all") || project.category === selectedCategory,
                )
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={cardVariants}
                    layout
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="h-48 overflow-hidden">
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover"
                          variants={imageVariants}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <CardHeader>
                        <div className="mb-2">
                          <motion.span
                            className="rounded-full bg-brand-crimson/20 px-3 py-1 text-xs font-medium text-brand-red"
                            variants={tagVariants}
                          >
                            {project.category}
                          </motion.span>
                        </div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + techIndex * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("projects.cta.title")}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">{t("projects.cta.description")}</p>
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-brand-red text-white hover:bg-brand-red-light">
                <Link href="/contact">
                  {t("projects.cta.button1")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red/10">
                <Link href="/services">{t("projects.cta.button2")}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

