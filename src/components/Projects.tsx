import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import core Swiper styles
import { Navigation } from "swiper/modules"; // Import Navigation module from swiper directly
import 'swiper/css/navigation'; // Import navigation styles

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
    tags: ["Python", "NLP", "GPT", "FastAPIs"],
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
  {
    title: "Predictive Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing and predicting sales trends using machine learning.",
    image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg",
    tags: ["Python", "Pandas", "Scikit-learn", "Dash"],
    github: "https://github.com/your-repo/predictive-analytics",
    demo: "https://demo.com/predictive-analytics",
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
  return (
    <section className="py-20 px-10 bg-gray-50 dark:bg-gray-800/50">
      <motion.div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView="auto"
            loop={true} // Enables cyclic behavior
            centeredSlides={false} // Keeps the active slide centered
            navigation={{ // Enable navigation
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide per view on small screens
              },
              768: {
                slidesPerView: 2, // 2 slides per view on medium screens
              },
              1024: {
                slidesPerView: 3, // 3 slides per view on large screens
              }
            }}
            modules={[Navigation]} // Include the Navigation module
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="pb-4">
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg min-h-[500px] cursor-grab"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
                    <div className="flex gap-4 absolute bottom-10">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev absolute top-1/2 -left-11 transform -translate-y-1/2 z-10 px-8 py-11 flex items-center justify-center  rounded-full  hover:bg-gray-600/20 dark:hover:bg-gray-700/20 transition-all">
            <ChevronLeft className="w-7 h-7 opacity-0 transition-transform transform hover:scale-110" />
          </div>
          <div className="swiper-button-next absolute top-1/2 -right-11 transform -translate-y-1/2 z-10 px-8 py-11 flex items-center justify-center  rounded-full  hover:bg-gray-600/20 dark:hover:bg-gray-700/20 transition-all">
            <ChevronRight className="w-7 h-7 opacity-0 transition-transform transform hover:scale-110" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
