
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ExternalLink, Gamepad2, Github, Sparkles } from "lucide-react"
import { useRef, useState } from "react"

// Import your project images
// For this example, I'll use a placeholder
const olova = "/placeholder.svg?height=400&width=600"

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
)

const Projects = () => {
  const projects = [
    {
      title: "Olova! A Lightweight JavaScript Library",
      description:
        "Olova.js is a lightweight JavaScript library for building modern, reactive, and dynamic web applications. It features a simple, component-based architecture, enabling developers to create reusable and interactive UI elements with minimal code and overhead.",
      tags: ["JavaScript", "Reactive", "Web Development"],
      links: {
        github: "https://github.com/olovajs/olova",
        demo: "https://olova.js.org/",
      },
      image: 'https://bizflyportal.mediacdn.vn/bizflyportal/545/307/2020/07/23/22/30/nhu15954966174515.jpg',
      featured: true,
      character: {
        name: "Olova",
        class: "Mage",
        power: 85,
        speed: 90,
        special: "Reactive Spell",
      },
    },
    {
      title: "React Dashboard",
      description:
        "A comprehensive dashboard built with React, featuring real-time data visualization, user authentication, and a responsive design for all devices.",
      tags: ["React", "TypeScript", "Dashboard"],
      links: {
        github: "https://github.com/example/react-dashboard",
        demo: "https://react-dashboard-demo.com",
      },
      image: "https://cdn1585.cdn4s4.io.vn//media/articles/1126/content/website-dep-nhat-the-gioi.jpg",
      featured: false,
      character: {
        name: "Reacto",
        class: "Warrior",
        power: 90,
        speed: 75,
        special: "Component Slash",
      },
    },
    {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation tool that creates unique artwork based on text prompts using advanced machine learning algorithms.",
      tags: ["AI", "Python", "Machine Learning"],
      links: {
        github: "https://github.com/example/ai-image-gen",
        demo: "https://ai-image-generator.com",
      },
      image: "https://chonweb.vn/hsc_content/hsc_up_dinhkem/1636432825.jpg",
      featured: false,
      character: {
        name: "Pixelo",
        class: "Rogue",
        power: 70,
        speed: 95,
        special: "Neural Stealth",
      },
    },
      {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation tool that creates unique artwork based on text prompts using advanced machine learning algorithms.",
      tags: ["AI", "Python", "Machine Learning"],
      links: {
        github: "https://github.com/example/ai-image-gen",
        demo: "https://ai-image-generator.com",
      },
      image: "https://kienvuong.vn/wp-content/uploads/2021/08/mau-thiet-ke-website-ban-hang-online-dep.jpg",
      featured: false,
      character: {
        name: "Pixelo",
        class: "Rogue",
        power: 70,
        speed: 95,
        special: "Neural Stealth",
      },
    },
    ,
      {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation tool that creates unique artwork based on text prompts using advanced machine learning algorithms.",
      tags: ["AI", "Python", "Machine Learning"],
      links: {
        github: "https://github.com/example/ai-image-gen",
        demo: "https://ai-image-generator.com",
      },
      image: "https://www.congdongweb.com/wp-content/uploads/2023/03/Cong-Dong-Web-Thiet-Ke-Website-1-2.jpg",
      featured: false,
      character: {
        name: "Pixelo",
        class: "Rogue",
        power: 70,
        speed: 95,
        special: "Neural Stealth",
      },
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [isSelecting, setIsSelecting] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const audioRef = useRef(null)

  const handleSelect = (index) => {
    // Play selection sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((e) => console.log("Audio play prevented:", e))
    }

    setSelectedIndex(index)
    setIsSelecting(false)
    setTimeout(() => {
      setShowDetails(true)
    }, 500)
  }

  const handleBack = () => {
    setShowDetails(false)
    setTimeout(() => {
      setIsSelecting(true)
    }, 500)
  }

  const handleHover = (index) => {
    setHoveredIndex(index)
    // Play hover sound
    if (audioRef.current) {
      audioRef.current.volume = 0.2
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((e) => console.log("Audio play prevented:", e))
    }
  }

  // Stat bar component
  // eslint-disable-next-line react/prop-types
  const StatBar = ({ label, value, color }) => (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-medium text-slate-300">{label}</span>
        <span className="text-xs font-medium text-slate-300">{value}/100</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${value}%`, transition: "width 1s ease-in-out" }}
        ></div>
      </div>
    </div>
  )

  return (
    <div
      id="projects"
      className="pt-20 min-h-screen p-8 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100 relative overflow-hidden"
    >
      {/* Game UI overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-0 opacity-30"></div>

      {/* Audio element for game sounds */}
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3"
        preload="auto"
      ></audio>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Game title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400">
              <Gamepad2 className="inline-block mr-2 mb-1" size={40} />
              PROJECT ARCADE
            </h1>
            <p className="text-xl text-slate-300 font-mono">SELECT YOUR PROJECT TO VIEW</p>
            <div className="mt-4 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500"></div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {isSelecting ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.2 },
                  }}
                  className={`relative cursor-pointer group`}
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Character frame */}
                  <div
                    className={`
                    relative rounded-lg overflow-hidden border-[1px]
                    ${
                      selectedIndex === index
                        ? "border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.7)]"
                        : hoveredIndex === index
                          ? "border-purple-400 shadow-[0_0_15px_rgba(167,139,250,0.7)]"
                          : "border-slate-700"
                    }
                    transition-all duration-300
                  `}
                  >
                    {/* Character image */}
                    <div className="relative h-[400px] w-full bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          style={{
                          width: 600,
                          height: 400,
                          }}
                          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay with character info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex justify-between items-end">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">{project.character.name}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <span
                                  className={`
                                  px-2 py-0.5 text-xs font-bold rounded-full
                                  ${
                                    project.character.class === "Mage"
                                      ? "bg-blue-500"
                                      : project.character.class === "Warrior"
                                        ? "bg-red-500"
                                        : "bg-green-500"
                                  }
                                `}
                                >
                                  {project.character.class}
                                </span>
                                <span className="text-xs text-slate-300">LEVEL 99</span>
                              </div>
                            </div>

                            {/* Select button */}
                            <div
                              className={`
                              px-3 py-1 rounded-full text-sm font-bold
                              bg-gradient-to-r from-cyan-500 to-emerald-500
                              transform transition-all duration-300
                              group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.7)]
                            `}
                            >
                              SELECT
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Special ability */}
                      <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                        <Sparkles className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-xs font-bold text-yellow-400">{project.character.special}</span>
                      </div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-emerald-500 px-3 py-1 rounded-full">
                          <span className="text-xs font-bold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {showDetails && (
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Character stats panel */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="lg:w-1/3"
                  >
                    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/30 shadow-[0_0_15px_rgba(167,139,250,0.3)] overflow-hidden">
                      <CardHeader>
                        <MacOsButtons />
                        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                          {projects[selectedIndex].character.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <span
                            className={`
                            px-2 py-0.5 text-xs font-bold rounded-full
                            ${
                              projects[selectedIndex].character.class === "Mage"
                                ? "bg-blue-500"
                                : projects[selectedIndex].character.class === "Warrior"
                                  ? "bg-red-500"
                                  : "bg-green-500"
                            }
                          `}
                          >
                            {projects[selectedIndex].character.class}
                          </span>
                          <span className="text-xs text-slate-300">LEVEL 99</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase">Character Stats</h4>
                          <StatBar
                            label="POWER"
                            value={projects[selectedIndex].character.power}
                            color="bg-gradient-to-r from-red-500 to-orange-500"
                          />
                          <StatBar
                            label="SPEED"
                            value={projects[selectedIndex].character.speed}
                            color="bg-gradient-to-r from-blue-500 to-cyan-500"
                          />
                          <StatBar
                            label="INTELLIGENCE"
                            value={85}
                            color="bg-gradient-to-r from-purple-500 to-pink-500"
                          />
                          <StatBar
                            label="CREATIVITY"
                            value={95}
                            color="bg-gradient-to-r from-emerald-500 to-green-500"
                          />
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase">Special Ability</h4>
                          <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-500/30">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="w-5 h-5 text-yellow-400" />
                              <span className="font-bold text-yellow-400">
                                {projects[selectedIndex].character.special}
                              </span>
                            </div>
                            <p className="text-sm text-slate-300">
                              Unleashes a powerful chain of reactive components that adapt to any situation.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase">Tech Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {projects[selectedIndex].tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-slate-700 to-slate-800 text-slate-300 border border-slate-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Project details panel */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="lg:w-2/3"
                  >
                    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)] overflow-hidden">
                      <CardHeader>
                        <MacOsButtons />
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                              {projects[selectedIndex].featured ? "Featured Project" : "Project"}
                            </div>
                            <CardTitle className="text-slate-100 text-3xl font-bold">
                              {projects[selectedIndex].title}
                            </CardTitle>
                          </div>
                          <div className="flex gap-4">
                            <a
                              href={projects[selectedIndex].links.github}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={22} />
                            </a>
                            <a
                              href={projects[selectedIndex].links.demo}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={22} />
                            </a>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="mb-6 overflow-hidden rounded-lg">
                          <img
                            src={projects[selectedIndex].image || "/placeholder.svg"}
                            alt={projects[selectedIndex].title}
                            style={{
                              width: 800,
                              height: 400,
                            }}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 mb-6">
                          <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                            Project Description
                          </h3>
                          <p className="text-slate-300 text-lg leading-relaxed">
                            {projects[selectedIndex].description}
                          </p>
                        </div>

                        <div className="flex justify-between items-center">
                          <button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                          >
                            <ChevronLeft size={18} />
                            Back to Selection
                          </button>

                          <a
                            href={projects[selectedIndex].links.demo}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Launch Project
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects

