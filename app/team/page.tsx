"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function TeamPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "Facundo Joaquin García",
      role: t("team.facundo.role") || "Data Scientist",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        t("team.facundo.bio") ||
        "Data Scientist with 3 years of experience in diverse projects. Facundo combines his physics background with data science expertise to extract meaningful insights from complex datasets and develop innovative solutions for clients across various industries.",
      expertise: [
        t("team.facundo.expertise.1") || "Data Science",
        t("team.facundo.expertise.2") || "Machine Learning",
        t("team.facundo.expertise.3") || "Statistical Analysis",
        t("team.facundo.expertise.4") || "Python",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Agustin Brusco",
      role: t("team.agustin.role") || "AI Engineer",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        t("team.agustin.bio") ||
        "AI Engineer with 3 years of experience building products from the ground up. Agustin specializes in developing end-to-end AI solutions, from concept to deployment, with a focus on creating practical, scalable applications that solve real-world problems.",
      expertise: [
        t("team.agustin.expertise.1") || "AI Development",
        t("team.agustin.expertise.2") || "Product Engineering",
        t("team.agustin.expertise.3") || "Deep Learning",
        t("team.agustin.expertise.4") || "MLOps",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emiliano Barone",
      role: t("team.emiliano.role") || "Physicist & ML Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        t("team.emiliano.bio") ||
        "Physicist with 1 year of experience training ML models. Emiliano applies his strong theoretical physics background to machine learning, specializing in developing and optimizing models that incorporate statistics principles to improve performance and interpretability.",
      expertise: [
        t("team.emiliano.expertise.1") || "Machine Learning",
        t("team.emiliano.expertise.2") || "Model Training",
        t("team.emiliano.expertise.3") || "Data Analysis",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Andres Tovar",
      role: t("team.andres.role") || "Physicist & Backend Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        t("team.andres.bio") ||
        "Physicist and backend developer with 1 year of experience. Andres combines his knowledge with software engineering skills to build robust backend systems that power our AI applications, ensuring they're scalable, efficient, and reliable.",
      expertise: [
        t("team.andres.expertise.1") || "Backend Development",
        t("team.andres.expertise.2") || "API Design",
        t("team.andres.expertise.3") || "Database Management",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const memberCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
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
        delay: 0.2,
      },
    },
  }

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
  }

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">{t("team.hero.title")}</h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-300">{t("team.hero.description")}</p>
          </div>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid gap-12 md:gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="grid gap-8 md:grid-cols-3 lg:grid-cols-4"
                variants={memberCardVariants}
              >
                <div className="md:col-span-1">
                  <motion.div
                    className="overflow-hidden rounded-lg"
                    variants={imageVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <motion.h2
                    className="mb-1 text-2xl font-bold text-slate-900"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {member.name}
                  </motion.h2>
                  <motion.p
                    className="mb-4 text-lg font-medium text-brand-mint"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    className="mb-4 text-slate-600"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {member.bio}
                  </motion.p>
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="mb-2 font-semibold text-slate-900">{t("team.expertise")}:</h3>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {member.expertise.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800"
                          variants={skillTagVariants}
                          custom={skillIndex}
                          transition={{ delay: 0.1 * skillIndex }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="flex space-x-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <Linkedin className="h-5 w-5" />,
                        href: member.social.linkedin,
                        label: `${member.name}'s LinkedIn`,
                      },
                      {
                        icon: <Twitter className="h-5 w-5" />,
                        href: member.social.twitter,
                        label: `${member.name}'s Twitter`,
                      },
                      {
                        icon: <Github className="h-5 w-5" />,
                        href: member.social.github,
                        label: `${member.name}'s GitHub`,
                      },
                      {
                        icon: <Mail className="h-5 w-5" />,
                        href: `mailto:${member.name.toLowerCase().split(" ")[0]}@exdata.com`,
                        label: `Email ${member.name}`,
                      },
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.href}
                        className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
                        aria-label={social.label}
                        variants={socialIconVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-slate-50 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("team.join.title")}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">{t("team.join.description")}</p>
        </motion.div>
      </section>
    </div>
  )
}

