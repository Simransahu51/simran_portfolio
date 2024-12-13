import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { FaChartBar } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Skill({ icon, title, description }: SkillProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-lg bg-opacity-10 backdrop-blur-sm
                 dark:bg-white dark:bg-opacity-5 bg-black
                 border border-gray-200 dark:border-gray-800"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <p className="text-lg text-center mb-16 text-gray-600 dark:text-gray-400">
          Simran is a skilled <strong>Data Science Engineer</strong> with
          expertise in <strong>Data visualization</strong>,{" "}
          <strong>Machine Learning</strong>, and a solid background in{" "}
          <strong>Full Stack Development</strong>
          . She specializes in creating data-driven solutions and building
          interactive visualizations to make complex data accessible. As an{" "}
          <strong>Implementation Engineer</strong>, Simran leverages her
          technical knowledge to deliver innovative, efficient solutions across
          diverse projects, driving business growth and optimizing processes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Skill
            icon={<GrAnalytics className="w-8 h-8 text-blue-500" />}
            title="Data Science"
            description="Expert in data analysis using Python, R, Pandas, and Scikit-Learn."
          />
          <Skill
            icon={<FaChartBar className="w-8 h-8 text-green-500" />}
            title="Data Visualization"
            description="Creating interactive visualizations with Tableau, Power BI, D3.js, and Matplotlib."
          />
          <Skill
            icon={<Brain className="w-8 h-8 text-purple-500" />}
            title="Machine Learning"
            description="Building predictive models with TensorFlow, Keras, PyTorch, and Scikit-Learn."
          />
        </div>
      </motion.div>
    </section>
  );
}
