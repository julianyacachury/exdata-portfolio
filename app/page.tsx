"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BarChart2, Brain, Code, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import DataVisualization from "@/components/data-visualization"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import { projects as projectsData } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import React from 'react'

export default function Home() {
  const { t } = useLanguage()

  // Apply translations to projects
  const getTranslatedProjects = () => {
    return projectsData.map((project) => ({
      ...project,
      title: t(`projects.${project.id}.title`) || project.title,
      category: t(`projects.${project.id}.category`) || project.category,
      description: t(`projects.${project.id}.description`) || project.description,
    }))
  }

  // Get the first 3 projects for the featured section
  const featuredProjects = getTranslatedProjects().slice(0, 3)

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

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 to-red-400 px-4 py-24 text-white md:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <DataVisualization />
        </div>
        <motion.div
          className="container relative z-10 mx-auto max-w-5x1 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("home.hero.title")}
            <br />
            <motion.span
              className="bg-gradient-to-r from-brand-crimson to-brand-crimson-light bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t("home.hero.subtitle")}
            </motion.span>
          </motion.h1>
          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t("home.hero.description")}
          </motion.p>
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-light text-white">
                <Link href="/services">{t("nav.services")}</Link>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white/10 text-slate-600">
                <Link href="/projects">{t("nav.projects")}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("home.services.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">{t("home.services.description")}</p>
          </motion.div>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="h-full">
              <ServiceCard
                icon={<Brain className="h-10 w-10 text-brand-crimson" />}
                title={t("service.analytics")}
                description={t("services.analytics.description")}
              />
            </motion.div>
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="h-full">
              <ServiceCard
                icon={<Database className="h-10 w-10 text-brand-crimson" />}
                title={t("service.dataStrategy")}
                description={t("services.dataStrategy.description")}
              />
            </motion.div>
            <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="h-full">
              <ServiceCard
                icon={<BarChart2 className="h-10 w-10 text-brand-crimson" />}
                title={t("service.predictive")}
                description={t("services.predictive.description")}
              />
            </motion.div>
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
                <Link href="/services">{t("home.services.button")}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("home.projects.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">{t("home.projects.description")}</p>
          </motion.div>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
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
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-brand-red text-brand-red hover:bg-brand-red/10 w-full sm:w-auto"
              >
                <Link href="/projects">{t("home.projects.button1")}</Link>
              </Button>
            </motion.div>
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-brand-red text-brand-red hover:bg-brand-red/10 w-full sm:w-auto"
              >
                <Link href="/technologies">{t("home.projects.button2")}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {t("home.about.title")}
              </h2>
              <p className="mb-6 text-lg text-slate-600">{t("home.about.description1")}</p>
              <p className="mb-8 text-lg text-slate-600">{t("home.about.description2")}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-brand-red hover:bg-brand-red-light text-white">
                  <Link href="/about">{t("home.about.button")}</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[400px] overflow-hidden rounded-lg bg-slate-200"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Code className="h-24 w-24 text-slate-400" />
              </motion.div>
              <motion.img
                src="/placeholder.svg?height=400&width=600"
                alt="Team collaboration"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-400 px-4 py-16 text-white md:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">{t("home.cta.title")}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">{t("home.cta.description")}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-white text-brand-red hover:bg-white/90">
              <Link href="/contact">{t("home.cta.button")}</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

