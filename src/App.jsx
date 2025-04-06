import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <section className="p-10 text-center">
        <h2 className="text-xl mb-2">Computer Science @ UC Davis</h2>
        <p>Minors in Sociology and Environmental Horticulture & Urban Forestry</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:sthom954@gmail.com"><Mail /></a>
          <a href="https://github.com/smthom1" target="_blank"><Github /></a>
          <a href="https://www.linkedin.com/in/sm-thompson/" target="_blank"><Linkedin /></a>
        </div>
      </section>
    </motion.div>
  );
}

function Experience() {
  const jobs = [
    {
      title: "Data Analyst @ EcoTelesis",
      time: "Oct 2024 – Present",
      desc: `Analyzed GHG emissions from LA's recycling programs, evaluated recovery rates, and provided environmental insights.`
    },
    {
      title: "Student Researcher @ Marino Lab",
      time: "Mar 2024 – Sep 2024",
      desc: `Led projects on pistachio image recognition using YOLO and CVAT; conducted physiological/ecological fieldwork.`
    },
    {
      title: "Medical Tech @ Redwood Empire Dermatology",
      time: "Dec 2017 – Nov 2019",
      desc: `Managed secure EMRs and maintained clinical sterilization standards.`
    }
  ];
  return (
    <motion.section className="p-10" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {jobs.map((job, idx) => (
          <Card key={idx} className="shadow">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.time}</p>
              <p className="mt-2">{job.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

function Projects() {
  const projects = [
    {
      name: "Pistachio Image Recognition",
      desc: `Built ML tools to classify pistachios by shell type and split percentage using Python, YOLO, and CVAT.`
    },
    {
      name: "Agent-Based Modeling of Infection Dynamics",
      desc: `Simulated infectious diseases like COVID-19 with a custom Java-based model visualizing population dynamics.`
    }
  ];
  return (
    <motion.section className="p-10" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Card key={idx} className="shadow">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p className="mt-2">{project.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

function Skills() {
  const skills = [
    "C", "C++", "Java", "JavaScript", "Python", "SQL", "Haskell", "Prolog", "Erlang", "CSS", "R",
    "UI/UX Design", "Usability Testing", "Agile", "Project Management", "Data Visualization"
  ];
  return (
    <motion.section className="p-10" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-blue-100 dark:bg-blue-900 p-2 rounded-xl text-center">{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
        <header className="p-6 flex justify-between items-center shadow-md">
          <h1 className="text-3xl font-bold">
            <Link to="/">Sophia Thompson</Link>
          </h1>
          <div className="flex gap-4 items-center">
            <nav className="space-x-4">
              <Link to="/experience">Experience</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
            </nav>
            <Button onClick={toggleDarkMode} variant="outline">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>

        <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Sophia Thompson. Built with ❤️ using React & Tailwind.
        </footer>
      </div>
    </Router>
  );
}
