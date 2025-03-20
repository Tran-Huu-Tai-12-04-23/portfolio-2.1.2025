import { Braces, Code, Database, Github, Globe, Laptop, Layers, Palette, PenTool, Server } from "lucide-react"
import { useEffect } from "react"

export default function DevArtProfile() {
  // Animation for floating elements
  useEffect(() => {
    const floatingElements = document.querySelectorAll(".floating")

    floatingElements.forEach((el) => {
      // Random initial position
      const randomX = Math.random() * 10 - 5
      const randomY = Math.random() * 10 - 5
      el.setAttribute("style", `transform: translate(${randomX}px, ${randomY}px)`)

      // Animation
      let x = randomX
      let y = randomY
      let dirX = Math.random() > 0.5 ? 0.2 : -0.2
      let dirY = Math.random() > 0.5 ? 0.2 : -0.2

      const animate = () => {
        if (Math.abs(x) > 15) dirX *= -1
        if (Math.abs(y) > 15) dirY *= -1

        x += dirX
        y += dirY

        el.setAttribute("style", `transform: translate(${x}px, ${y}px) rotate(${x * 2}deg)`)
        requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    })
  }, [])

  return (
       <div className="relative w-full max-w-4xl p-6">
        {/* Main artistic background with code patterns */}
        <div className="relative  rounded-3xl p-8 overflow-hidden ">
          {/* Artistic code background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              {Array(30)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-xs text-white font-mono"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5 + 0.5,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  >
                    {`{code}`}
                  </div>
                ))}
            </div>
          </div>

          {/* Centered avatar with artistic frame */}
          <div className="relative z-10 flex justify-center items-center mb-16 mt-8">
            <div className="relative">
              {/* Glowing ring around avatar */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-lg animate-[pulse_3s_infinite]"></div>

              {/* Avatar container */}
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/50 z-20">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-full w-full flex items-center justify-center">
                  {/* Replace with actual avatar - using Image component */}
                  <img
                    src="https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/full_stack_web_developer_salary-1.jpg"
                    alt="Developer Avatar"
                    width={'100%'}
                    height={'100%'}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </div>

              {/* Floating developer tools around avatar */}
              <div className="absolute -top-8 -left-8 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-lg shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute top-12 -right-12 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg shadow-lg">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-12 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-lg shadow-lg">
                  <Braces className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -bottom-8 right-0 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-lg shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute top-0 right-16 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-lg shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -top-12 left-16 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg shadow-lg">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-12 -right-16 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg shadow-lg">
                  <Server className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-16 left-20 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-3 rounded-lg shadow-lg">
                  <Layers className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -top-16 -right-4 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 p-3 rounded-lg shadow-lg">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute top-20 -left-16 floating transition-transform duration-500 ease-in-out">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-lg shadow-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
   
        </div>
      </div>
  )
}

