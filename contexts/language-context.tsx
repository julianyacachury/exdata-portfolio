"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.technologies": "Technologies",
    "nav.team": "Team",
    "nav.contact": "Contact Us",

    // Home page
    "home.hero.title": "Advanced Analytics &",
    "home.hero.subtitle": "Problem-Solving Expertise",
    "home.hero.description":
      "Exdata combines deep analytical expertise with cutting-edge AI to solve complex problems and drive innovation across industries.",
    "home.services.title": "Our Services",
    "home.services.description": "Leveraging our expertise in science and AI to deliver innovative solutions.",
    "home.services.button": "View All Services",
    "home.projects.title": "Featured Projects",
    "home.projects.description":
      "Explore our recent work and discover how we've helped organizations solve complex problems.",
    "home.projects.button1": "View All Projects",
    "home.projects.button2": "Explore Our Tech Stack",
    "home.about.title": "About Exdata",
    "home.about.description1":
      "Founded by a team of experts with a passion for solving complex problems, Exdata specializes in advanced analytics and AI-driven solutions that transform how organizations approach challenges.",
    "home.about.description2":
      "Our unique approach combines rigorous analytical methodology with cutting-edge AI techniques to deliver solutions that are both innovative and reliable.",
    "home.about.button": "Learn More About Us",
    "home.cta.title": "Ready to transform your data?",
    "home.cta.description":
      "Let's discuss how our analytical expertise and AI solutions can help you solve complex problems and drive innovation.",
    "home.cta.button": "Get in Touch",

    // About page
    "about.hero.title": "About Exdata",
    "about.hero.description1":
      "Founded by a team of experts with a passion for analytics and machine learning, Exdata specializes in solving complex problems through data-driven approaches and advanced AI techniques.",
    "about.hero.description2":
      "Our mission is to leverage our deep understanding of analytical methods to create AI solutions that are not just powerful, but also interpretable, reliable, and grounded in practical business needs.",
    "about.story.title": "Our Story",
    "about.story.description1":
      "Exdata was born from a shared vision among a group of scientists who saw the untapped potential at the intersection of science, advanced analytics, and artificial intelligence. Having worked on complex problems in various industries, we recognized that many of the analytical frameworks we used daily could enhance modern AI systems.",
    "about.story.description2":
      "We formed Exdata as a collaborative enterprise, bringing together experts with backgrounds in science and a common interest in machine learning and AI. Our goal was to create a company where analytical rigor meets practical innovation.",
    "about.story.description3":
      "Our team combines diverse expertise in data science, AI engineering, and math to deliver comprehensive solutions that address complex challenges. We've worked with organizations across industries, from healthcare to finance to retail, helping them harness the power of AI with the precision of advanced analytics.",
    "about.story.description4":
      "Today, Exdata stands at the forefront of AI, continuing to push the boundaries of what's possible when scientific expertise guides technological innovation.",
    "about.values.title": "Our Values",
    "about.values.description":
      "These core principles guide our work and define our approach to AI and machine learning.",
    "about.values.analytical": "Analytical Rigor",
    "about.values.analytical.description":
      "We approach every problem with the same methodical precision that defines scientific inquiry and analytical thinking.",
    "about.values.ethical": "Ethical Innovation",
    "about.values.ethical.description":
      "We believe that technological advancement must be guided by strong ethical principles.",
    "about.values.learning": "Continuous Learning",
    "about.values.learning.description":
      "We are committed to ongoing education and staying at the forefront of AI research.",
    "about.team.title": "Our Team",
    "about.team.description": "Meet the scientists and AI specialists behind Exdata.",
    "about.team.button": "View Full Team",

    // Services page
    "services.hero.title": "Our Services",
    "services.hero.description1":
      "We offer a range of AI and machine learning services, all enhanced by our deep expertise in analytics and problem-solving methodologies.",
    "services.hero.description2":
      "Our unique approach combines rigorous analytical methodology with cutting-edge AI techniques to deliver solutions that are both innovative and reliable.",
    "services.offer.title": "What We Offer",
    "services.offer.description":
      "Our services combine science expertise with AI innovation to solve complex problems across industries.",
    "services.analytics.title": "Advanced Analytics",
    "services.analytics.description":
      "Transforming complex data into actionable insights through sophisticated analytical techniques.",
    "services.analytics.details":
      "We develop custom analytics solutions that extract meaningful patterns and insights from your data. Our approach combines statistical analysis, machine learning, and domain expertise to provide a comprehensive understanding of your business challenges.",
    "services.dataStrategy.title": "Data Strategy",
    "services.dataStrategy.description":
      "Developing comprehensive data strategies that align with your business objectives and drive growth.",
    "services.dataStrategy.details":
      "Our data strategy services help organizations identify, collect, and leverage the right data to achieve their goals. We work with you to create a roadmap for data governance, quality, integration, and utilization that maximizes the value of your data assets.",
    "services.predictive.title": "Predictive Modeling",
    "services.predictive.description":
      "Building robust predictive models that help you anticipate trends and make informed decisions.",
    "services.predictive.details":
      "Our predictive modeling solutions combine statistical techniques with machine learning to forecast future outcomes. This approach is particularly valuable for demand forecasting, risk assessment, customer behavior prediction, and resource optimization.",
    "services.bi.title": "Business Intelligence",
    "services.bi.description":
      "Creating interactive dashboards and reports that provide real-time insights into your business performance.",
    "services.bi.details":
      "We design and implement business intelligence solutions that transform raw data into visual insights. Our dashboards and reports enable stakeholders at all levels to monitor KPIs, identify trends, and make data-driven decisions quickly and confidently.",
    "services.ai.title": "AI Implementation",
    "services.ai.description":
      "Integrating AI solutions into your existing systems and workflows to enhance efficiency and capabilities.",
    "services.ai.details":
      "We help organizations design and implement AI solutions that solve specific business problems. Our expertise includes natural language processing, computer vision, recommendation systems, and automated decision-making systems.",
    "services.consulting.title": "Analytics Consulting",
    "services.consulting.description":
      "Expert guidance on implementing data-driven solutions for complex business problems.",
    "services.consulting.details":
      "Our consulting services provide organizations with the expertise they need to successfully implement analytics and AI solutions. We offer guidance on problem framing, solution design, technology selection, and implementation strategies.",
    "services.approach.title": "Our Approach",
    "services.approach.description": "How we tackle each project to ensure analytical rigor and practical results.",
    "services.approach.step1": "Discovery",
    "services.approach.step1.description":
      "We begin by thoroughly understanding your problem, data, and objectives. This includes identifying domain knowledge that could enhance the AI solution.",
    "services.approach.step2": "Analysis & Design",
    "services.approach.step2.description":
      "Our team analyzes your data and designs a solution that integrates domain constraints with appropriate AI techniques. We create a detailed plan that outlines the approach, technologies, and expected outcomes.",
    "services.approach.step3": "Development",
    "services.approach.step3.description":
      "We develop the solution using our scientific approach to AI methodology. This phase includes model training, validation, and refinement to ensure optimal performance and scientific accuracy.",
    "services.approach.step4": "Implementation & Testing",
    "services.approach.step4.description":
      "The solution is implemented in your environment and thoroughly tested against real-world data. We verify that it meets both technical requirements and scientific standards.",
    "services.approach.step5": "Knowledge Transfer",
    "services.approach.step5.description":
      "We provide comprehensive documentation and training to ensure your team understands how to use, maintain, and potentially extend the solution.",
    "services.cta.title": "Ready to get started?",
    "services.cta.description":
      "Contact us to discuss how our scientific approach to AI solutions can address your specific challenges.",
    "services.cta.button": "Get in Touch",

    // Projects page
    "projects.hero.title": "Our Projects",
    "projects.hero.description1":
      "Explore our portfolio of projects that demonstrate our expertise in applying AI to solve complex problems across various industries.",
    "projects.hero.description2":
      "Each project showcases our unique approach of combining scientific principles with cutting-edge AI techniques.",
    "projects.filter.all": "All",
    "projects.cta.title": "Interested in working with us?",
    "projects.cta.description":
      "Let's discuss how our scientific approach to AI can help solve your specific challenges.",
    "projects.cta.button1": "Contact Us",
    "projects.cta.button2": "Explore Our Services",

    // Project details
    "projects.roof.title": "Roof Detection System",
    "projects.roof.category": "Growth",
    "projects.roof.description":
      "Computer vision system for roof detection in satellite images, area measurement, and shape classification.",
    "projects.roof.challenge":
      "A roof repair company needed to efficiently identify potential clients by analyzing satellite imagery to detect roofs requiring maintenance.",
    "projects.roof.solution":
      "We developed a computer vision system that automatically detects roofs in satellite images, measures their area, and classifies their shapes and conditions.",
    "projects.roof.results":
      "The system increased the company's lead generation by 45% while reducing the time spent on manual property assessment by 70%.",

    "projects.pharma.title": "Pharmaceutical Distribution Chatbot",
    "projects.pharma.category": "Healthcare",
    "projects.pharma.description":
      "AI-powered chatbot for answering questions about pharmaceutical shipments and purchases.",
    "projects.pharma.challenge":
      "A pharmaceutical distributor needed to handle a high volume of customer inquiries about shipments and purchases efficiently.",
    "projects.pharma.solution":
      "We created an intelligent chatbot using large language models that could accurately answer questions about order status, shipping details, and product information.",
    "projects.pharma.results":
      "The chatbot reduced response time from hours to seconds, handling 85% of routine inquiries without human intervention and improving customer satisfaction scores by 32%.",

    // Technologies page
    "tech.hero.title": "Our Technology Stack",
    "tech.hero.description":
      "We leverage cutting-edge technologies to deliver powerful, scalable, and efficient solutions.",
    "tech.languages.title": "Languages & Backend",
    "tech.ai.title": "AI & LLMs",
    "tech.ml.title": "Machine Learning & Deep Learning",
    "tech.deployment.title": "Deployment & Data",
    "tech.expertise.title": "Our Technical Expertise",
    "tech.expertise.description": "Core areas where we excel:",
    "tech.expertise.ai.title": "AI Solutions",
    "tech.expertise.ai.description":
      "Specialized in RAG (Retrieval Augmented Generation) systems and Question Answering applications that leverage LLMs for domain-specific use cases.",
    "tech.expertise.cv.title": "Computer Vision",
    "tech.expertise.cv.description":
      "Expertise in image processing, object detection, classification, and visual analysis for industries ranging from construction to healthcare.",
    "tech.expertise.api.title": "API Development",
    "tech.expertise.api.description":
      "Building robust, scalable APIs that make AI capabilities accessible to your applications and systems with clear documentation and security.",
    "tech.expertise.mlops.title": "Machine Learning & MLOps",
    "tech.expertise.mlops.description":
      "End-to-end ML model development with robust MLOps practices for deployment, monitoring, and maintenance in production environments.",

    // Technology descriptions
    "tech.python.description": "Primary language for data science, ML, and backend",
    "tech.fastapi.description": "High-performance API framework",
    "tech.flask.description": "Lightweight web application framework",
    "tech.langchain.description": "Framework for LLM-powered applications",
    "tech.pydantic.description": "Data validation using Python type annotations",
    "tech.openai.description": "Integration with OpenAI's API services",
    "tech.anthropic.description": "Integration with Anthropic's Claude models",
    "tech.multivendor.description": "Compatible with all major LLM providers",
    "tech.sklearn.description": "Traditional ML algorithms and data analysis",
    "tech.tensorflow.description": "End-to-end ML platform",
    "tech.pytorch.description": "Deep learning framework for research and production",
    "tech.docker.description": "Containerization platform",
    "tech.aws.description": "Cloud infrastructure and serverless",
    "tech.azure.description": "Managed container services",
    "tech.databases.description": "Relational and NoSQL databases",
    "tech.redis.description": "In-memory data store and cache",

    // Team page
    "team.hero.title": "Our Team",
    "team.hero.description":
      "Meet the scientists and AI specialists behind Exdata. Our team combines expertise in physics, data science, and AI engineering to deliver innovative solutions to complex problems.",
    "team.expertise": "Areas of Expertise",
    "team.join.title": "Join Our Team",
    "team.join.description":
      "We're always looking for talented scientists, AI researchers, and engineers to join our team. If you're passionate about the intersection of science and AI, we'd love to hear from you.",

    // Team member profiles
    "team.facundo.role": "Data Scientist",
    "team.facundo.bio":
      "Data Scientist with 3 years of experience in diverse projects. Facundo combines his physics background with data science expertise to extract meaningful insights from complex datasets and develop innovative solutions for clients across various industries.",
    "team.facundo.expertise.1": "Data Science",
    "team.facundo.expertise.2": "Machine Learning",
    "team.facundo.expertise.3": "Statistical Analysis",
    "team.facundo.expertise.4": "Python",

    "team.agustin.role": "AI Engineer",
    "team.agustin.bio":
      "AI Engineer with 3 years of experience building products from the ground up. Agustin specializes in developing end-to-end AI solutions, from concept to deployment, with a focus on creating practical, scalable applications that solve real-world problems.",
    "team.agustin.expertise.1": "AI Development",
    "team.agustin.expertise.2": "Product Engineering",
    "team.agustin.expertise.3": "Deep Learning",
    "team.agustin.expertise.4": "MLOps",

    "team.emiliano.role": "Physicist & ML Specialist",
    "team.emiliano.bio":
      "Physicist with 1 year of experience training ML models. Emiliano applies his strong theoretical physics background to machine learning, specializing in developing and optimizing models that incorporate statistics principles to improve performance and interpretability.",
    "team.emiliano.expertise.1": "Machine Learning",
    "team.emiliano.expertise.2": "Model Training",
    "team.emiliano.expertise.3": "Data Analysis",

    "team.andres.role": "Physicist & Backend Developer",
    "team.andres.bio":
      "Physicist and backend developer with 1 year of experience. Andres combines his knowledge with software engineering skills to build robust backend systems that power our AI applications, ensuring they're scalable, efficient, and reliable.",
    "team.andres.expertise.1": "Backend Development",
    "team.andres.expertise.2": "API Design",
    "team.andres.expertise.3": "Database Management",

    // Contact page
    "contact.hero.title": "Get in Touch",
    "contact.hero.description":
      "Have a question or interested in working with us? We'd love to hear from you. Fill out the form below or use our contact information.",
    "contact.form.title": "Send Us a Message",
    "contact.form.firstName": "First name",
    "contact.form.lastName": "Last name",
    "contact.form.email": "Email",
    "contact.form.company": "Company (Optional)",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.button": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.location": "Our Location",
    "contact.info.email": "Email Us",
    "contact.info.call": "Call Us",
    "contact.info.hours": "Monday-Friday, 9am-6pm UTC-3",
    "contact.info.mapAlt": "Map location",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.q1": "What industries do you work with?",
    "contact.faq.a1":
      "We work with a wide range of industries including healthcare, finance, retail, manufacturing, and more. Our analytical approach is applicable to any field that involves complex data and business challenges.",
    "contact.faq.q2": "Do you offer consulting services?",
    "contact.faq.a2":
      "Yes, we offer analytics consulting services for organizations looking to implement data-driven solutions for complex business problems. Our team can provide guidance on problem framing, solution design, and implementation strategies.",
    "contact.faq.q3": "How long does a typical project take?",
    "contact.faq.a3":
      "Project timelines vary depending on the scope and complexity. A small-scale proof of concept might take 4-6 weeks, while a comprehensive solution could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    "contact.faq.q4": "Do you offer training for our team?",
    "contact.faq.a4":
      "Yes, we provide comprehensive training and knowledge transfer to ensure your team understands how to use, maintain, and potentially extend the solutions we develop. We believe in empowering our clients with the knowledge they need.",
    "contact.faq.q5": "Can you work with our existing systems and data?",
    "contact.faq.a5":
      "Absolutely. We design our solutions to integrate with your existing infrastructure and data sources. We have experience working with various data formats, databases, and legacy systems.",

    // Footer
    "footer.description":
      "Combining analytical expertise with AI innovation to solve complex problems and drive technological advancement.",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.ourTeam": "Our Team",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.services": "Services",
    "footer.copyright": "All rights reserved.",

    // Service names
    "service.analytics": "Advanced Analytics",
    "service.dataStrategy": "Data Strategy",
    "service.predictive": "Predictive Modeling",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.technologies": "Tecnologías",
    "nav.team": "Equipo",
    "nav.contact": "Contáctanos",

    // Home page
    "home.hero.title": "Analítica avanzada &",
    "home.hero.subtitle": "Resolución de problemas",
    "home.hero.description":
      "Exdata combina experiencia analítica profunda con IA de vanguardia para resolver problemas complejos e impulsar la innovación en todas las industrias.",
    "home.services.title": "Servicios",
    "home.services.description":
      "Aprovechando nuestra experiencia en ciencia e IA para ofrecer soluciones innovadoras.",
    "home.services.button": "Todos los servicios",
    "home.projects.title": "Proyectos destacados",
    "home.projects.description":
      "Explora nuestro trabajo reciente y descubre cómo hemos ayudado a organizaciones a resolver problemas complejos.",
    "home.projects.button1": "Todos los proyectos",
    "home.projects.button2": "Explorar nuestra tecnología",
    "home.about.title": "Sobre Exdata",
    "home.about.description1":
      "Fundada por un equipo de expertos con pasión por resolver problemas complejos, Exdata se especializa en análisis avanzados y soluciones impulsadas por IA que transforman cómo las organizaciones abordan los desafíos.",
    "home.about.description2":
      "Nuestro enfoque único combina metodología analítica rigurosa con técnicas de IA de vanguardia para ofrecer soluciones que son tanto innovadoras como confiables.",
    "home.about.button": "Conocenos",
    "home.cta.title": "¿Listo para transformar tus datos?",
    "home.cta.description":
      "Hablemos sobre cómo nuestra experiencia analítica y soluciones de IA pueden ayudarte a resolver problemas complejos e impulsar la innovación.",
    "home.cta.button": "Contactanos",

    // About page
    "about.hero.title": "Sobre Exdata",
    "about.hero.description1":
      "Fundada por un equipo de expertos con pasión por la analítica y el aprendizaje automático, Exdata se especializa en resolver problemas complejos a través de enfoques basados en datos y técnicas avanzadas de IA.",
    "about.hero.description2":
      "Nuestra misión es aprovechar nuestra profunda comprensión de los métodos analíticos para crear soluciones de IA que no solo sean potentes, sino también interpretables, confiables y fundamentadas en necesidades empresariales prácticas.",
    "about.story.title": "Nuestra historia",
    "about.story.description1":
      "Exdata nació de una visión compartida entre un grupo de científicos que vieron el potencial sin explotar en la intersección de la ciencia, la analítica avanzada y la inteligencia artificial. Habiendo trabajado en problemas complejos en varias industrias, reconocimos que muchos de los marcos analíticos que usábamos diariamente podrían mejorar los sistemas modernos de IA.",
    "about.story.description2":
      "Formamos Exdata como una empresa colaborativa, reuniendo expertos con antecedentes en ciencia y un interés común en aprendizaje automático e IA. Nuestro objetivo era crear una empresa donde el rigor analítico se encuentra con la innovación práctica.",
    "about.story.description3":
      "Nuestro equipo combina diversa experiencia en ciencia de datos, ingeniería de IA y matemáticas para ofrecer soluciones integrales que abordan desafíos complejos. Hemos trabajado con organizaciones en diversas industrias, desde salud hasta finanzas y retail, ayudándoles a aprovechar el poder de la IA con la precisión de la analítica avanzada.",
    "about.story.description4":
      "Hoy, Exdata está a la vanguardia de la IA, continuando empujando los límites de lo posible cuando la experiencia científica guía la innovación tecnológica.",
    "about.values.title": "Nuestros valores",
    "about.values.description":
      "Estos principios fundamentales guían nuestro trabajo y definen nuestro enfoque hacia la IA y el aprendizaje automático.",
    "about.values.analytical": "Rigor analítico",
    "about.values.analytical.description":
      "Abordamos cada problema con la misma precisión metódica que define la investigación científica y el pensamiento analítico.",
    "about.values.ethical": "Innovación ética",
    "about.values.ethical.description":
      "Creemos que el avance tecnológico debe estar guiado por principios éticos sólidos.",
    "about.values.learning": "Aprendizaje continuo",
    "about.values.learning.description":
      "Estamos comprometidos con la educación continua y mantenernos a la vanguardia de la investigación en IA.",
    "about.team.title": "Nuestro equipo",
    "about.team.description": "Conoce a los científicos y especialistas en IA detrás de Exdata.",
    "about.team.button": "Ver equipo completo",

    // Services page
    "services.hero.title": "Nuestros servicios",
    "services.hero.description1":
      "Ofrecemos una gama de servicios de IA y aprendizaje automático, todos mejorados por nuestra profunda experiencia en analítica y metodologías de resolución de problemas.",
    "services.hero.description2":
      "Nuestro enfoque único combina metodología analítica rigurosa con técnicas de IA de vanguardia para ofrecer soluciones que son tanto innovadoras como confiables.",
    "services.offer.title": "Lo que ofrecemos",
    "services.offer.description":
      "Nuestros servicios combinan experiencia científica con innovación en IA para resolver problemas complejos en diversas industrias.",
    "services.analytics.title": "Analítica avanzada",
    "services.analytics.description":
      "Transformando datos complejos en insights accionables a través de técnicas analíticas sofisticadas.",
    "services.analytics.details":
      "Desarrollamos soluciones analíticas personalizadas que extraen patrones e insights significativos de tus datos. Nuestro enfoque combina análisis estadístico, aprendizaje automático y experiencia en el dominio para proporcionar una comprensión integral de tus desafíos empresariales.",
    "services.dataStrategy.title": "Estrategia de datos",
    "services.dataStrategy.description":
      "Desarrollando estrategias de datos integrales que se alinean con tus objetivos empresariales e impulsan el crecimiento.",
    "services.dataStrategy.details":
      "Nuestros servicios de estrategia de datos ayudan a las organizaciones a identificar, recopilar y aprovechar los datos correctos para lograr sus objetivos. Trabajamos contigo para crear una hoja de ruta para la gobernanza, calidad, integración y utilización de datos que maximiza el valor de tus activos de datos.",
    "services.predictive.title": "Modelado predictivo",
    "services.predictive.description":
      "Construyendo modelos predictivos robustos que te ayudan a anticipar tendencias y tomar decisiones informadas.",
    "services.predictive.details":
      "Nuestras soluciones de modelado predictivo combinan técnicas estadísticas con aprendizaje automático para pronosticar resultados futuros. Este enfoque es particularmente valioso para la previsión de demanda, evaluación de riesgos, predicción del comportamiento del cliente y optimización de recursos.",
    "services.bi.title": "Inteligencia de negocios",
    "services.bi.description":
      "Creando dashboards interactivos e informes que proporcionan insights en tiempo real sobre el rendimiento de tu negocio.",
    "services.bi.details":
      "Diseñamos e implementamos soluciones de inteligencia de negocios que transforman datos brutos en insights visuales. Nuestros dashboards e informes permiten a los stakeholders en todos los niveles monitorear KPIs, identificar tendencias y tomar decisiones basadas en datos de manera rápida y confiada.",
    "services.ai.title": "Implementación de IA",
    "services.ai.description":
      "Integrando soluciones de IA en tus sistemas y flujos de trabajo existentes para mejorar la eficiencia y las capacidades.",
    "services.ai.details":
      "Ayudamos a las organizaciones a diseñar e implementar soluciones de IA que resuelven problemas empresariales específicos. Nuestra experiencia incluye procesamiento de lenguaje natural, visión por computadora, sistemas de recomendación y sistemas automatizados de toma de decisiones.",
    "services.consulting.title": "Consultoría analítica",
    "services.consulting.description":
      "Orientación experta en la implementación de soluciones basadas en datos para problemas empresariales complejos.",
    "services.consulting.details":
      "Nuestros servicios de consultoría proporcionan a las organizaciones la experiencia que necesitan para implementar con éxito soluciones de analítica e IA. Ofrecemos orientación sobre la formulación de problemas, diseño de soluciones, selección de tecnología y estrategias de implementación.",
    "services.approach.title": "Nuestro enfoque",
    "services.approach.description":
      "Cómo abordamos cada proyecto para garantizar rigor analítico y resultados prácticos.",
    "services.approach.step1": "Descubrimiento",
    "services.approach.step1.description":
      "Comenzamos comprendiendo a fondo tu problema, datos y objetivos. Esto incluye identificar conocimiento del dominio que podría mejorar la solución de IA.",
    "services.approach.step2": "Análisis y diseño",
    "services.approach.step2.description":
      "Nuestro equipo analiza tus datos y diseña una solución que integra restricciones del dominio con técnicas de IA apropiadas. Creamos un plan detallado que describe el enfoque, las tecnologías y los resultados esperados.",
    "services.approach.step3": "Desarrollo",
    "services.approach.step3.description":
      "Desarrollamos la solución utilizando nuestro enfoque científico para la metodología de IA. Esta fase incluye entrenamiento del modelo, validación y refinamiento para garantizar un rendimiento óptimo y precisión científica.",
    "services.approach.step4": "Implementación y pruebas",
    "services.approach.step4.description":
      "La solución se implementa en tu entorno y se prueba exhaustivamente con datos del mundo real. Verificamos que cumpla tanto con los requisitos técnicos como con los estándares científicos.",
    "services.approach.step5": "Transferencia de conocimiento",
    "services.approach.step5.description":
      "Proporcionamos documentación integral y capacitación para asegurar que tu equipo comprenda cómo usar, mantener y potencialmente extender la solución.",
    "services.cta.title": "¿Listo para comenzar?",
    "services.cta.description":
      "Contáctanos para discutir cómo nuestro enfoque científico para soluciones de IA puede abordar tus desafíos específicos.",
    "services.cta.button": "Ponte en Contacto",

    // Projects page
    "projects.hero.title": "Nuestros proyectos",
    "projects.hero.description1":
      "Explora nuestro portafolio de proyectos que demuestran nuestra experiencia en aplicar IA para resolver problemas complejos en diversas industrias.",
    "projects.hero.description2":
      "Cada proyecto muestra nuestro enfoque único de combinar principios científicos con técnicas de IA de vanguardia.",
    "projects.filter.all": "Todos",
    "projects.cta.title": "¿Interesado en trabajar con nosotros?",
    "projects.cta.description":
      "Hablemos sobre cómo nuestro enfoque científico para la IA puede ayudar a resolver tus desafíos específicos.",
    "projects.cta.button1": "Contáctanos",
    "projects.cta.button2": "Explorar nuestros servicios",

    // Project details
    "projects.roof.title": "Detección de techos",
    "projects.roof.category": "Crecimiento",
    "projects.roof.description":
      "Sistema de visión por computadora para la detección de techos en imágenes satelitales, medición de áreas y clasificación de formas.",
    "projects.roof.challenge":
      "Una empresa de reparación de techos necesitaba identificar eficientemente a clientes potenciales analizando imágenes satelitales para detectar techos que requieren mantenimiento.",
    "projects.roof.solution":
      "Desarrollamos un sistema de visión por computadora que detecta automáticamente techos en imágenes satelitales, mide su área y clasifica sus formas y condiciones.",
    "projects.roof.results":
      "El sistema aumentó la generación de leads de la empresa en un 45% mientras reducía el tiempo dedicado a la evaluación manual de propiedades en un 70%.",

    "projects.pharma.title": "Chatbot para distribución farmacéutica",
    "projects.pharma.category": "Salud",
    "projects.pharma.description":
      "Chatbot impulsado por IA para responder preguntas sobre envíos y compras farmacéuticas.",
    "projects.pharma.challenge":
      "Un distribuidor farmacéutico necesitaba manejar eficientemente un alto volumen de consultas de clientes sobre envíos y compras.",
    "projects.pharma.solution":
      "Creamos un chatbot inteligente utilizando modelos de lenguaje grandes que podía responder con precisión preguntas sobre el estado de pedidos, detalles de envío e información de productos.",
    "projects.pharma.results":
      "El chatbot redujo el tiempo de respuesta de horas a segundos, manejando el 85% de las consultas rutinarias sin intervención humana y mejorando las puntuaciones de satisfacción del cliente en un 32%.",

    // Technologies page
    "tech.hero.title": "Nuestro Stack Tecnológico",
    "tech.hero.description":
      "Aprovechamos tecnologías de vanguardia para ofrecer soluciones potentes, escalables y eficientes.",
    "tech.languages.title": "Lenguajes y Backend",
    "tech.ai.title": "IA y LLMs",
    "tech.ml.title": "Aprendizaje automático",
    "tech.deployment.title": "Despliegue y datos",
    "tech.expertise.title": "Nuestra experiencia técnica",
    "tech.expertise.description": "Áreas principales donde sobresalimos:",
    "tech.expertise.ai.title": "Soluciones de IA",
    "tech.expertise.ai.description":
      "Especializados en sistemas RAG (Generación Aumentada por Recuperación) y aplicaciones de Respuesta a Preguntas que aprovechan LLMs para casos de uso específicos del dominio.",
    "tech.expertise.cv.title": "Visión por computadora",
    "tech.expertise.cv.description":
      "Experiencia en procesamiento de imágenes, detección de objetos, clasificación y análisis visual para industrias que van desde la construcción hasta la salud.",
    "tech.expertise.api.title": "Desarrollo de APIs",
    "tech.expertise.api.description":
      "Construyendo APIs robustas y escalables que hacen que las capacidades de IA sean accesibles para tus aplicaciones y sistemas con documentación clara y seguridad.",
    "tech.expertise.mlops.title": "Aprendizaje automático y MLOps",
    "tech.expertise.mlops.description":
      "Desarrollo de modelos de ML de extremo a extremo con prácticas robustas de MLOps para despliegue, monitoreo y mantenimiento en entornos de producción.",

    // Technology descriptions
    "tech.python.description": "Lenguaje principal para ciencia de datos, ML y backend",
    "tech.fastapi.description": "Framework de API de alto rendimiento",
    "tech.flask.description": "Framework de aplicación web ligero",
    "tech.langchain.description": "Framework para aplicaciones potenciadas por LLM",
    "tech.pydantic.description": "Validación de datos usando anotaciones de tipo Python",
    "tech.openai.description": "Integración con servicios API de OpenAI",
    "tech.anthropic.description": "Integración con modelos Claude de Anthropic",
    "tech.multivendor.description": "Compatible con todos los principales proveedores de LLM",
    "tech.sklearn.description": "Algoritmos tradicionales de ML y análisis de datos",
    "tech.tensorflow.description": "Plataforma ML de extremo a extremo",
    "tech.pytorch.description": "Framework de aprendizaje profundo para investigación y producción",
    "tech.docker.description": "Plataforma de contenedorización",
    "tech.aws.description": "Infraestructura en la nube y serverless",
    "tech.azure.description": "Servicios de contenedores gestionados",
    "tech.databases.description": "Bases de datos relacionales y NoSQL",
    "tech.redis.description": "Almacén de datos en memoria y caché",

    // Team page
    "team.hero.title": "Nuestro equipo",
    "team.hero.description":
      "Conoce a los científicos y especialistas en IA detrás de Exdata. Nuestro equipo combina experiencia en física, ciencia de datos e ingeniería de IA para ofrecer soluciones innovadoras a problemas complejos.",
    "team.expertise": "Áreas de experiencia",
    "team.join.title": "Únete a nuestro equipo",
    "team.join.description":
      "Siempre estamos buscando científicos talentosos, investigadores de IA e ingenieros para unirse a nuestro equipo. Si te apasiona la intersección de la ciencia y la IA, nos encantaría saber de ti.",

    // Team member profiles
    "team.facundo.role": "Científico de Datos",
    "team.facundo.bio":
      "Científico de datos con 3 años de experiencia en proyectos diversos. Facundo combina su formación en física con experiencia en ciencia de datos para extraer información significativa de conjuntos de datos complejos y desarrollar soluciones innovadoras para clientes en diversas industrias.",
    "team.facundo.expertise.1": "Ciencia de datos",
    "team.facundo.expertise.2": "Aprendizaje automático",
    "team.facundo.expertise.3": "Análisis estadístico",
    "team.facundo.expertise.4": "Python",

    "team.agustin.role": "Ingeniero de IA",
    "team.agustin.bio":
      "Ingeniero de IA con 3 años de experiencia construyendo productos desde cero. Agustín se especializa en desarrollar soluciones de IA de extremo a extremo, desde el concepto hasta la implementación, con un enfoque en crear aplicaciones prácticas y escalables que resuelvan problemas del mundo real.",
    "team.agustin.expertise.1": "Desarrollo de IA",
    "team.agustin.expertise.2": "Ingeniería de productos",
    "team.agustin.expertise.3": "Aprendizaje profundo",
    "team.agustin.expertise.4": "MLOps",

    "team.emiliano.role": "Físico y Especialista en ML",
    "team.emiliano.bio":
      "Físico con 1 año de experiencia entrenando modelos de ML. Emiliano aplica su sólida formación en física teórica al aprendizaje automático, especializándose en desarrollar y optimizar modelos que incorporan principios estadísticos para mejorar el rendimiento y la interpretabilidad.",
    "team.emiliano.expertise.1": "Aprendizaje Automático",
    "team.emiliano.expertise.2": "Entrenamiento de modelos",
    "team.emiliano.expertise.3": "Análisis de datos",

    "team.andres.role": "Físico y Desarrollador Backend",
    "team.andres.bio":
      "Físico y desarrollador backend con 1 año de experiencia. Andrés combina su conocimiento con habilidades de ingeniería de software para construir sistemas backend robustos que impulsan nuestras aplicaciones de IA, asegurando que sean escalables, eficientes y confiables.",
    "team.andres.expertise.1": "Desarrollo Backend",
    "team.andres.expertise.2": "Diseño de APIs",
    "team.andres.expertise.3": "Gestión de bases de datos",

    // Contact page
    "contact.hero.title": "Ponte en contacto",
    "contact.hero.description":
      "¿Tienes una pregunta o estás interesado en trabajar con nosotros? Nos encantaría saber de ti. Completa el formulario a continuación o utiliza nuestra información de contacto.",
    "contact.form.title": "Envíanos un mensaje",
    "contact.form.firstName": "Nombre",
    "contact.form.lastName": "Apellido",
    "contact.form.email": "Correo electrónico",
    "contact.form.company": "Empresa (Opcional)",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.button": "Enviar mensaje",
    "contact.info.title": "Información de contacto",
    "contact.info.location": "Nuestra ubicación",
    "contact.info.email": "Envíanos un correo",
    "contact.info.call": "Llámanos",
    "contact.info.hours": "Lunes a Viernes, 9am-6pm UTC-3",
    "contact.info.mapAlt": "Ubicación en el mapa",
    "contact.faq.title": "Preguntas frecuentes",
    "contact.faq.q1": "¿Con qué industrias trabajan?",
    "contact.faq.a1":
      "Trabajamos con una amplia gama de industrias incluyendo salud, finanzas, retail, manufactura y más. Nuestro enfoque analítico es aplicable a cualquier campo que involucre datos complejos y desafíos empresariales.",
    "contact.faq.q2": "¿Ofrecen servicios de consultoría?",
    "contact.faq.a2":
      "Sí, ofrecemos servicios de consultoría analítica para organizaciones que buscan implementar soluciones basadas en datos para problemas empresariales complejos. Nuestro equipo puede proporcionar orientación sobre la formulación de problemas, diseño de soluciones y estrategias de implementación.",
    "contact.faq.q3": "¿Cuánto tiempo toma un proyecto típico?",
    "contact.faq.a3":
      "Los plazos del proyecto varían según el alcance y la complejidad. Una prueba de concepto a pequeña escala puede tomar de 4 a 6 semanas, mientras que una solución integral podría tomar de 3 a 6 meses. Proporcionaremos un cronograma detallado durante nuestra consulta inicial.",
    "contact.faq.q4": "¿Ofrecen capacitación para nuestro equipo?",
    "contact.faq.a4":
      "Sí, proporcionamos capacitación integral y transferencia de conocimientos para asegurar que su equipo comprenda cómo usar, mantener y potencialmente extender las soluciones que desarrollamos. Creemos en empoderar a nuestros clientes con el conocimiento que necesitan.",
    "contact.faq.q5": "¿Pueden trabajar con nuestros sistemas y datos existentes?",
    "contact.faq.a5":
      "Absolutamente. Diseñamos nuestras soluciones para integrarse con su infraestructura y fuentes de datos existentes. Tenemos experiencia trabajando con varios formatos de datos, bases de datos y sistemas heredados.",

    // Footer
    "footer.description":
      "Combinando experiencia analítica con innovación en IA para resolver problemas complejos e impulsar el avance tecnológico.",
    "footer.company": "Empresa",
    "footer.aboutUs": "Sobre nosotros",
    "footer.ourTeam": "Nuestro equipo",
    "footer.careers": "Carreras",
    "footer.contact": "Contacto",
    "footer.services": "Servicios",
    "footer.copyright": "Todos los derechos reservados.",

    // Service names
    "service.analytics": "Analítica avanzada",
    "service.dataStrategy": "Estrategia de datos",
    "service.predictive": "Modelado predictivo",
  },
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize state with a default value
  const [language, setLanguageState] = useState<Language>("en")

  // Load language preference from localStorage on component mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
        setLanguageState(savedLanguage)
      }
    } catch (error) {
      console.error("Error loading language from localStorage:", error)
    }
  }, [])

  // Function to update language and save to localStorage
  const setLanguage = (newLanguage: Language) => {
    try {
      setLanguageState(newLanguage)
      localStorage.setItem("language", newLanguage)
      // Force a re-render by updating the document language
      document.documentElement.lang = newLanguage
    } catch (error) {
      console.error("Error saving language to localStorage:", error)
    }
  }

  // Translation function
  const t = (key: string): string => {
    try {
      return translations[language][key] || key
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key
    }
  }

  // Provide the language context to children
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

