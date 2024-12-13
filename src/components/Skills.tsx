import { motion } from 'framer-motion';
import { SiPython, SiTableau, SiMysql, SiPostgresql, SiJupyter, SiPytorch, SiScikitlearn, SiFlask, SiDjango, SiHtml5, SiCss3, SiFastapi, SiAlwaysdata } from 'react-icons/si';
import { FaReact, FaJs, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { MdDataExploration } from 'react-icons/md';
import { PiMicrosoftPowerpointLogoFill } from 'react-icons/pi';

export function Skills() {

const dataScienceAndVisualizationSkills = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Data Visualization", Icon: SiAlwaysdata, color: "#E6B800" },
  { name: "Tableau", Icon: SiTableau, color: "#E6B800" },
  { name: "PowerBI", Icon: PiMicrosoftPowerpointLogoFill, color: "#009688" }, // PowerBI added
  { name: "Data Exploration", Icon: MdDataExploration, color: "#6B8E23" },
  { name: "SQL", Icon: SiMysql, color: "#00758F" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Jupyter Notebooks", Icon: SiJupyter, color: "#F37626" },
];

const machineLearningSkills = [
  { name: "Machine Learning", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
  { name: "TensorFlow", Icon: SiPython, color: "#FF6F00" },
  { name: "Deep Learning", Icon: FaReact, color: "#00B0FF" },
  { name: "Keras", Icon: FaNodeJs, color: "#FF4040" },
  { name: "NLP", Icon: SiFlask, color: "#2B2B2B" },
];

const fullstackSkills = [
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" }, // HTML added
  { name: "CSS", Icon: SiCss3, color: "#264de4" }, // CSS added
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" }, // FastAPI added
  { name: "MongoDB", Icon: SiPython, color: "#4DB33D" },
  { name: "MySQL", Icon: SiMysql, color: "#00758F" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
];


  return (
    <section id="skills" className="py-20 px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
        My Skills
      </h2>

      <div className="flex flex-col gap-12">
        {/* Data Science & Visualization Section */}
        <div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">Data Science & Visualization</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {dataScienceAndVisualizationSkills.map(({ name, Icon, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0], // Floating animation
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  style={{ color }}
                  className="text-4xl"
                >
                  <Icon />
                </motion.div>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Machine Learning Section */}
        <div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">Machine Learning</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {machineLearningSkills.map(({ name, Icon, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0], // Floating animation
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  style={{ color }}
                  className="text-4xl"
                >
                  <Icon />
                </motion.div>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Fullstack Development Section */}
        <div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">Fullstack Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {fullstackSkills.map(({ name, Icon, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0], // Floating animation
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  style={{ color }}
                  className="text-4xl"
                >
                  <Icon />
                </motion.div>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
