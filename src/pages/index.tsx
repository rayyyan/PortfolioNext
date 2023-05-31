import {
  About,
  BallCanvas,
  Hero,
  ComputersCanvas,
  Contact,
  EarthCanvas,
  Experience,
  Feedbacks,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components"
import Link from "next/link"

const Home = () => {
  return (
    <div className="relative z-0 bg-primary overflow-hidden">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center block">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />

      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}
export default Home
