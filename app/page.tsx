"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"

export default function HomePage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/julianyacachury/ecommerce",
      liveUrl: "https://your-ecommerce-demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/julianyacachury/taskmanager",
      liveUrl: "https://your-taskmanager-demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts",
      technologies: ["Vue.js", "API Integration", "Chart.js"],
      githubUrl: "https://github.com/julianyacachury/weather",
      liveUrl: "https://your-weather-demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const skills = [
    {
      name: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["React", "Next.js", "Vue.js", "TypeScript"],
    },
    {
      name: "Backend",
      icon: <Database className="h-6 w-6" />,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      name: "DevOps",
      icon: <Code className="h-6 w-6" />,
      technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 to-red-400 px-4 py-24 text-white md:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Julian</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-100 sm:text-2xl">
            Full-Stack Developer passionate about creating beautiful, functional web applications
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground">
              I'm a passionate full-stack developer with over 5 years of experience building web applications. I love
              turning complex problems into simple, beautiful designs and creating seamless user experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-muted/50 px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Let's Work Together</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <a href="mailto:julian@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/julianyacachury" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 px-4 py-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">© 2024 Julian Yacachury. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
