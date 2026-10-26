import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AeroShards from './components/AeroShards'

function App() {
  // Always dark — this is a space-dark themed portfolio not yet 
  const [darkMode] = useState(true)
  const [hasGpuError, setHasGpuError] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* 3D WebGPU AeroShards Interactive Background */}
      {!hasGpuError && (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
          <AeroShards
            shardColor="#0f00ffff"
            accentColor="#6900ffff"
            placement="full"
            material="glass"
            markers="plus"
            count={1300}
            depthOfField={0.75}
            vignette={0.3}
            mouseInteraction
            pulseOnClick
            holdToGather
            onError={(err) => {
              console.warn('WebGPU not supported or initialization failed, falling back to ambient CSS background:', err)
              setHasGpuError(true)
            }}
          />
        </div>
      )}

      {/* Fallback & Ambient Background effects */}
      <div className="bg-stars" />
      <div className="bg-glow-top" />
      <div className="bg-glow-bottom" />

      {/* Content */}
      <div className="relative z-10">
        <Header darkMode={darkMode} />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
