import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AI Chatbot Assistant",
    description:
      "A conversational AI chatbot built using natural language processing techniques and GPT models.",
    image: "https://images.pexels.com/photos/1181348/pexels-photo-1181348.jpeg",
    tags: ["Python", "NLP", "GPT", "Flask"],
    github: "https://github.com/your-repo/chatbot-assistant",
    demo: "https://demo.com/ai-chatbot",
  },
  {
    title: "Image Classification System",
    description:
      "A deep learning model to classify images into multiple categories with high accuracy.",
    image: "https://images.pexels.com/photos/2582966/pexels-photo-2582966.jpeg",
    tags: ["TensorFlow", "Keras", "Python", "Computer Vision"],
    github: "https://github.com/your-repo/image-classification",
    demo: "https://demo.com/image-classification",
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing and predicting sales trends using machine learning.",
    image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg",
    tags: ["Python", "Pandas", "Scikit-learn", "Dash"],
    github: "https://github.com/your-repo/predictive-analytics",
    demo: "https://demo.com/predictive-analytics",
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="relative">
          <div className="flex items-center justify-between absolute -inset-6 px-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 sm:w-full md:w-1/2 lg:w-1/3 pb-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg min-h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          >
                            <Github className="w-5 h-5" />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
