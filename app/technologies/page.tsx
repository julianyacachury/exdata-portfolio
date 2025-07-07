"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Cpu,
  Cloud,
  Database,
  Server,
  Brain,
  Bot,
  FileJson,
  Layers,
  LineChart,
  Atom,
  Container,
  Share2,
  FlaskConical,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

export default function TechnologiesPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("languages")

  const techCategories = [
    {
      id: "languages",
      title: t("tech.languages.title"),
      icon: <Code className="h-10 w-10 text-brand-crimson" />,
      technologies: [
        {
          name: "Python",
          description: t("tech.python.description") || "Primary language for data science, ML, and backend",
          icon: <FileJson className="h-5 w-5 text-blue-500" />,
        },
        {
          name: "FastAPI",
          description: t("tech.fastapi.description") || "High-performance API framework",
          icon: <Server className="h-5 w-5 text-green-500" />,
        },
        {
          name: "Flask",
          description: t("tech.flask.description") || "Lightweight web application framework",
          icon: <FlaskConical className="h-5 w-5 text-gray-600" />,
        },
      ],
    },
    {
      id: "ai",
      title: t("tech.ai.title"),
      icon: <Cpu className="h-10 w-10 text-brand-crimson-dark" />,
      technologies: [
        {
          name: "LangChain",
          description: t("tech.langchain.description") || "Framework for LLM-powered applications",
          icon: <Layers className="h-5 w-5 text-yellow-500" />,
        },
        {
          name: "Pydantic AI",
          description: t("tech.pydantic.description") || "Data validation using Python type annotations",
          icon: <FileJson className="h-5 w-5 text-indigo-500" />,
        },
        {
          name: "OpenAI SDK",
          description: t("tech.openai.description") || "Integration with OpenAI's API services",
          icon: <Brain className="h-5 w-5 text-green-600" />,
        },
        {
          name: "Anthropic SDK",
          description: t("tech.anthropic.description") || "Integration with Anthropic's Claude models",
          icon: <Bot className="h-5 w-5 text-purple-500" />,
        },
        {
          name: "Multi-Vendor Support",
          description: t("tech.multivendor.description") || "Compatible with all major LLM providers",
          icon: <Share2 className="h-5 w-5 text-blue-400" />,
        },
      ],
    },
    {
      id: "ml",
      title: t("tech.ml.title"),
      icon: <Cpu className="h-10 w-10 text-brand-crimson-light" />,
      technologies: [
        {
          name: "Scikit-Learn",
          description: t("tech.sklearn.description") || "Traditional ML algorithms and data analysis",
          icon: <LineChart className="h-5 w-5 text-orange-500" />,
        },
        {
          name: "TensorFlow",
          description: t("tech.tensorflow.description") || "End-to-end ML platform",
          icon: <Atom className="h-5 w-5 text-orange-600" />,
        },
        {
          name: "PyTorch",
          description: t("tech.pytorch.description") || "Deep learning framework for research and production",
          icon: <Atom className="h-5 w-5 text-red-500" />,
        },
      ],
    },
    {
      id: "deployment",
      title: t("tech.deployment.title"),
      icon: <Cloud className="h-10 w-10 text-brand-red-light" />,
      technologies: [
        {
          name: "Docker",
          description: t("tech.docker.description") || "Containerization platform",
          icon: <Container className="h-5 w-5 text-blue-500" />,
        },
        {
          name: "AWS (ECS, EC2, Lambda)",
          description: t("tech.aws.description") || "Cloud infrastructure and serverless",
          icon: <Cloud className="h-5 w-5 text-yellow-600" />,
        },
        {
          name: "Azure Containers",
          description: t("tech.azure.description") || "Managed container services",
          icon: <Cloud className="h-5 w-5 text-blue-400" />,
        },
        {
          name: "PostgreSQL & MongoDB",
          description: t("tech.databases.description") || "Relational and NoSQL databases",
          icon: <Database className="h-5 w-5 text-indigo-500" />,
        },
        {
          name: "Redis",
          description: t("tech.redis.description") || "In-memory data store and cache",
          icon: <Database className="h-5 w-5 text-red-500" />,
        },
      ],
    },
  ]

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red to-brand-red-light px-4 py-16 text-white md:px-6 lg:px-8">
        <motion.div
          className="container mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("tech.hero.title")}</h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">{t("tech.hero.description")}</p>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white px-4 py-12 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Tabs
            defaultValue="languages"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            {/* Technology category selector - optimized for different screen sizes */}
            <div className="mb-8">
              {/* Mobile view - vertical stacked buttons for very small screens */}
              <div className="flex flex-col space-y-3 sm:hidden">
                {techCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center justify-center space-x-3 rounded-md p-4 text-sm font-medium transition-colors
                      ${
                        selectedCategory === category.id
                          ? "bg-brand-blue text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                  >
                    <span className="flex items-center justify-center">
                      {React.cloneElement(category.icon, { className: "h-5 w-5 mr-3 flex-shrink-0" })}
                      <span className="text-center">{category.title}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Tablet view - horizontal scrollable tabs */}
              <div className="hidden sm:block md:hidden">
                <div className="overflow-x-auto">
                  <div className="inline-flex w-auto rounded-lg bg-slate-100 p-1.5">
                    {techCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap mx-0.5
                          ${
                            selectedCategory === category.id
                              ? "bg-brand-blue text-white shadow-sm"
                              : "bg-transparent text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                          }`}
                      >
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={iconVariants}
                          className="flex-shrink-0 mr-2.5"
                        >
                          {React.cloneElement(category.icon, { className: "h-5 w-5" })}
                        </motion.div>
                        <span>{category.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop view - expanded tabs that fill available space */}
              <div className="hidden md:block">
                <div className="flex w-full rounded-lg bg-slate-100 p-1.5">
                  {techCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex flex-1 items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors mx-0.5
                        ${
                          selectedCategory === category.id
                            ? "bg-brand-red text-white shadow-sm"
                            : "bg-transparent text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={iconVariants}
                        className="flex-shrink-0 mr-2.5"
                      >
                        {React.cloneElement(category.icon, { className: "h-5 w-5" })}
                      </motion.div>
                      <span>{category.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {techCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
                  <div className="mb-6 flex items-center">
                    <motion.div className="mr-4" variants={iconVariants}>
                      {category.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          variants={itemVariants}
                          layout
                          whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <Card className="border-none shadow-md h-full">
                            <CardContent className="p-5">
                              <div className="flex items-center mb-3">
                                <motion.div
                                  className="mr-3 flex-shrink-0"
                                  initial={{ rotate: -10, opacity: 0 }}
                                  animate={{ rotate: 0, opacity: 1 }}
                                  transition={{ delay: 0.2 + techIndex * 0.1 }}
                                >
                                  {tech.icon}
                                </motion.div>
                                <h3 className="font-bold text-slate-900">{tech.name}</h3>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">{tech.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-slate-50 px-4 py-12 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">{t("tech.expertise.title")}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">{t("tech.expertise.description")}</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: t("tech.expertise.ai.title"),
                description: t("tech.expertise.ai.description"),
                icon: <Brain className="h-6 w-6 text-brand-crimson mb-2" />,
              },
              {
                title: t("tech.expertise.cv.title"),
                description: t("tech.expertise.cv.description"),
                icon: <Bot className="h-6 w-6 text-brand-crimson-dark mb-2" />,
              },
              {
                title: t("tech.expertise.api.title"),
                description: t("tech.expertise.api.description"),
                icon: <Server className="h-6 w-6 text-brand-red mb-2" />,
              },
              {
                title: t("tech.expertise.mlops.title"),
                description: t("tech.expertise.mlops.description"),
                icon: <Cpu className="h-6 w-6 text-brand-red-light mb-2" />,
              },
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardHeader className="pb-2 px-6 pt-6">
                    <div className="flex items-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="mr-3 flex-shrink-0"
                      >
                        {expertise.icon}
                      </motion.div>
                      <CardTitle className="text-xl">{expertise.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{expertise.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

