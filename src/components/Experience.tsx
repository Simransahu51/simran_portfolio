import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Knowledge Lens Pvt Ltd.",
    location: "Bangalore, IN",
    period: "July 2024 - Present",
    description: [
      "Focused on implementation and data science to drive project success",
      "Developed and optimized data science models and algorithms for business solutions",
      "Integrated SKADA systems, logbook functionality, and third-party APIs into applications",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Knowledge Lens Pvt Ltd.",
    location: "Bangalore, IN",
    period: "Jan 2024 - July 2024",
    description: [
      "Worked on frontend and backend development for multiple client applications",
      "Implemented data science models and visualizations to enhance decision-making",
      "Collaborated with cross-functional teams on project implementation and integration",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Cinet IT Solution Co.",
    location: "Odisha, IN",
    period: "Jun 2023 - Aug 2023",
    description: [
      "Performed data cleaning and preprocessing for model readiness",
      "Developed and evaluated machine learning models for predictive analysis",
      "Collaborated with cross-functional teams to derive insights from data",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {exp.company}
                </p>
                <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
