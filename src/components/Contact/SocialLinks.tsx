import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/Simransahu51',
    label: 'GitHub',
    color: 'hover:text-blue-400'
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:text-blue-500'
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://twitter.com',
    label: 'Twitter',
    color: 'hover:text-blue-400'
  }
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-2 rounded-full bg-white/5 backdrop-blur-sm
                    border border-gray-200 dark:border-gray-700
                    ${link.color} transition-all duration-200`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}