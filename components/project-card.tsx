import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  image: string
  title: string
  category: string
  description: string
}

export default function ProjectCard({ image, title, category, description }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="mb-2">
          <span className="rounded-full bg-brand-crimson/20 px-3 py-1 text-xs font-medium text-brand-red">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* No footer needed */}
    </Card>
  )
}

