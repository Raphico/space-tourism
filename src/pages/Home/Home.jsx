import "./home.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"

function Home() {
  return (
    <motion.div {...fadeIn} className="home even-columns">
      <div className="space">
        <p className="fs-500 text-accent uppercase ff-barlow-condensed letter-spacing-3">
          so, you want to travel to
        </p>
        <h1 className="fs-900 uppercase">Space</h1>
        <p className="text-accent">
          Let’s face it; if you want to go to space, 
          you might as well genuinely go to outer space 
          and not hover kind of on the edge of it. 
          Well sit back, and relax because we’ll 
          give you a truly out of this world experience!
        </p>
      </div>

      <div>
        <Link to="#"
        className="explore bg-secondary text-primary fs-600 uppercase letter-spacing-1">explore</Link>
      </div>
    </motion.div>
  )
}

export default Home