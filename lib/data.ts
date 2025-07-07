// Shared project data to be used across the site
export const projects = [
  {
    id: "roof",
    title: "Roof Detection System",
    category: "Growth",
    image: "/placeholder.svg?height=300&width=600",
    description:
      "Computer vision system for roof detection in satellite images, area measurement, and shape classification.",
    challenge:
      "A roof repair company needed to efficiently identify potential clients by analyzing satellite imagery to detect roofs requiring maintenance.",
    solution:
      "We developed a computer vision system that automatically detects roofs in satellite images, measures their area, and classifies their shapes and conditions.",
    results:
      "The system increased the company's lead generation by 45% while reducing the time spent on manual property assessment by 70%.",
    technologies: ["TensorFlow", "Python", "Computer Vision", "Google Earth", "AWS EC2"],
  },
  {
    id: "pharma",
    title: "Pharmaceutical Distribution Chatbot",
    category: "Healthcare",
    image: "/placeholder.svg?height=300&width=600",
    description: "AI-powered chatbot for answering questions about pharmaceutical shipments and purchases.",
    challenge:
      "A pharmaceutical distributor needed to handle a high volume of customer inquiries about shipments and purchases efficiently.",
    solution:
      "We created an intelligent chatbot using large language models that could accurately answer questions about order status, shipping details, and product information.",
    results:
      "The chatbot reduced response time from hours to seconds, handling 85% of routine inquiries without human intervention and improving customer satisfaction scores by 32%.",
    technologies: ["LLMs", "Flask", "MS SQL", "Python", "Natural Language Processing"],
  },
]

