import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Science Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Led the development of a major e-commerce platform redesign",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines and testing strategies"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2019 - 2021",
    description: [
      "Developed and maintained multiple client applications",
      "Integrated third-party APIs and payment systems",
      "Optimized application performance and user experience"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartUp Co.",
    location: "Boston, MA",
    period: "2017 - 2019",
    description: [
      "Built responsive web applications using React",
      "Collaborated with designers to implement UI/UX improvements",
      "Participated in agile development processes"
    ]
  }
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