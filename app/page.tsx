"use client"

import { Button } from "@/components/ui/button"
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
      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)" // Blue connections
      ctx.lineWidth = 1

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = ((150 - distance) / 150) * 0.2
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = "rgba(59, 130, 246, 0.4)" // Blue nodes
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
      style={{ background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)" }}
    />
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
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Neural Network Background */}
        <NeuralNetworkBackground />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block mb-2">Advanced Analytics &</span>
            <span className="text-blue-400 block">Problem-Solving Expertise</span>
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
