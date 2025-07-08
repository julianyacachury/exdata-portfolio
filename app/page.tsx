"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Animated Neural Network Background Component
function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Neural network nodes
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      connections: number[]
    }> = []

    // Create nodes
    const nodeCount = 50
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })

      // Draw connections
      ctx.strokeStyle = "rgba(56, 189, 248, 0.2)" // Light blue connections
      ctx.lineWidth = 1

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = ((150 - distance) / 150) * 0.3
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = "rgba(56, 189, 248, 0.6)" // Light blue nodes
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)" }}
    />
  )
}

// Navigation component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="bg-slate-900 text-white px-4 py-2 rounded font-bold text-lg">Exdata</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
              Services
            </a>
            <a href="#projects" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
              Projects
            </a>
            <a href="#technologies" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
              Technologies
            </a>
            <a href="#team" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
              Team
            </a>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-md font-medium">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
                Projects
              </a>
              <a href="#technologies" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
                Technologies
              </a>
              <a href="#team" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">
                Team
              </a>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-md font-medium w-fit">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Neural Network Background */}
        <NeuralNetworkBackground />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block mb-2">Advanced Analytics &</span>
            <span className="text-sky-400 block">Problem-Solving Expertise</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Exdata combines deep analytical expertise with cutting-edge AI to solve complex problems and drive
            innovation across industries.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Our Services
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-900 border-white hover:bg-slate-50 px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Additional sections */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Exdata</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of data scientists, analysts, and AI specialists dedicated to transforming complex data into
            actionable insights that drive business success across multiple industries.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Analytics</h3>
              <p className="text-slate-600">
                Advanced statistical analysis and data visualization to uncover insights.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Solutions</h3>
              <p className="text-slate-600">Custom AI and machine learning solutions for complex business problems.</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Consulting</h3>
              <p className="text-slate-600">Strategic consulting to help organizations leverage data effectively.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
