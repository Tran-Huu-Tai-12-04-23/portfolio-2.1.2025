/* eslint-disable react/prop-types */

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Code2, Layers, Network, Rocket, Star, Zap } from "lucide-react"
import { useRef } from "react"

// Meteor animation component
const Meteor = ({ delay = 0, duration = 1.5, size = 1, top, left, opacity = 0.5 }) => (
  <motion.div
    className="absolute"
    style={{ top: `${top}%`, left: `${left}%` }}
    initial={{ opacity: 0, x: "0%", y: "0%" }}
    animate={{
      opacity: [0, opacity, 0],
      x: ["0%", "150%"],
      y: ["0%", "150%"],
    }}
    transition={{
      duration,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: Math.random() * 10 + 5,
    }}
  >
    <div
      className="h-px bg-gradient-to-r from-cyan-500 to-transparent"
      style={{
        width: `${size * 150}px`,
        transform: "rotate(-45deg)",
        boxShadow:
          "0 0 10px rgba(34, 211, 238, 0.7), 0 0 20px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.3)",
      }}
    />
  </motion.div>
)

// Timeline node component
const TimelineNode = ({ active, completed }) => (
  <motion.div
    className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center
      ${
        completed
          ? "bg-gradient-to-r from-cyan-500 to-blue-500"
          : active
            ? "bg-gradient-to-r from-blue-500 to-purple-500"
            : "bg-gray-800"
      }`}
    initial={{ scale: 0.8, opacity: 0.5 }}
    animate={{
      scale: active ? 1.2 : completed ? 1 : 0.8,
      opacity: active ? 1 : completed ? 0.9 : 0.5,
    }}
    transition={{ duration: 0.5 }}
  >
    {completed && <Zap className="w-3 h-3 text-white" />}
    {active && <Star className="w-3 h-3 text-white animate-pulse" />}
  </motion.div>
)

// Experience card component
const ExperienceCard = ({ title, company, period, description, icon: Icon, index, active, alignment }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  return (
    <div className="relative" ref={cardRef}>
      {/* Timeline connector */}
      <div
        className={`absolute top-0 bottom-0 ${alignment === "left" ? "right-0 mr-3" : "left-0 ml-3"} w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent`}
      />

      {/* Timeline node */}
      <div className={`absolute top-12 ${alignment === "left" ? "right-0 mr-[1px]" : "left-0 ml-[1px]"} z-10`}>
        <TimelineNode active={active} completed={index < active} />
      </div>

      {/* Card with animation */}
      <motion.div
        className={`group relative overflow-hidden w-full md:w-[90%] ${alignment === "left" ? "mr-8" : "ml-8"}`}
        initial={{ opacity: 0, x: alignment === "left" ? 50 : -50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : alignment === "left" ? 50 : -50,
        }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
      >
        {/* Glass morphism effect */}
        <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

        {/* Animated gradient border */}
        <div
          className={`absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500 ${active ? "opacity-70" : ""}`}
        />

        <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
          {/* Floating icon with pulse effect */}
          <div className="relative mb-6">
            <div
              className={`absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 transition-all duration-500 ${active ? "animate-pulse" : ""}`}
            />
            <Icon
              className={`w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300 ${active ? "animate-bounce" : ""}`}
            />
          </div>

          {/* Content with improved typography */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h3>
            <div className="flex justify-between items-center text-gray-300">
              <span className="font-semibold text-blue-400">{company}</span>
              <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">{period}</span>
            </div>
            <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">{description}</p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20">
            <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
            <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
          </div>
          <div className="absolute bottom-4 left-4 w-20 h-20">
            <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
            <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
          </div>
        </div>
      </motion.div>

      {/* Year marker */}
      <motion.div
        className={`absolute top-12 ${alignment === "left" ? "right-10" : "left-10"} text-sm font-bold text-cyan-400 bg-gray-900/80 px-2 py-1 rounded-full border border-cyan-500/30 shadow-lg shadow-cyan-500/20`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        {period.split(" - ")[0]}
      </motion.div>
    </div>
  )
}

const Experience = () => {
  const experiences = [
    {
      icon: Network,
      title: "WordPress Developer",
      company: "Fiverr",
      period: "2019 - 2020",
      description: "Worked on developing and customizing WordPress websites for clients globally.",
    },
    {
      icon: Layers,
      title: "Junior Frontend Developer",
      company: "Sera Programmer",
      period: "2021 - 2023",
      description:
        "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
    },
    {
      icon: Code2,
      title: "JavaScript Developer",
      company: "OlovJS (Sera Programmer)",
      period: "2023 - Present",
      description: "Contributed to developing JavaScript libraries and enhancing framework functionalities.",
    },
     {
      icon: Code2,
      title: "JavaScript Developer",
      company: "OlovJS (Sera Programmer)",
      period: "2023 - Present",
      description: "Contributed to developing JavaScript libraries and enhancing framework functionalities.",
    },
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Generate meteors with random positions
  const meteors = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: Math.random() * 2 + 1,
    size: Math.random() * 2 + 0.5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.3,
  }))

  // Active timeline node (for demo purposes, set to the last item)
  const activeNodeIndex = 2

  return (
    <div id="experience" className="relative">
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20" ref={containerRef}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90" />

        {/* Meteor animations */}
        {meteors.map((meteor) => (
          <Meteor
            key={meteor.id}
            delay={meteor.delay}
            duration={meteor.duration}
            size={meteor.size}
            top={meteor.top}
            left={meteor.left}
            opacity={meteor.opacity}
          />
        ))}

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <motion.div className="relative container mx-auto px-6 mt-10" style={{ opacity, scale }}>
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <motion.div
              className="relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Cosmic Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              "Navigating through the stars of my professional universe"
            </motion.p>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <Rocket className="w-12 h-12 text-cyan-400 animate-bounce" />
              <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full" />
            </motion.div>
          </div>

          {/* Timeline with alternating layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central timeline line for mobile */}
            <div className="absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent md:hidden" />

            {/* Experience cards */}
            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  {...exp}
                  index={index}
                  active={index === activeNodeIndex}
                  alignment={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>

            {/* Future indicator */}
            <motion.div
              className="mt-12 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent" />
              <div className="p-3 rounded-full bg-gray-800/80 border border-blue-500/30 shadow-lg shadow-blue-500/20">
                <Star className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <p className="mt-4 text-blue-400 font-mono text-sm">Future Awaits</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  )
}

export default Experience

