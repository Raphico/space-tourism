import { useEffect, useState } from "react"
import NumberedTitle from "../../components/NumberedTitle"
import { technologies } from "../../constants"
import "./technology.css"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"

function Technology() {
  const firstTechnology = technologies[0].name
  const [currentTechnology, setCurrentTechnology] = useState(firstTechnology)
  const [technologyInfo, setTechnologyInfo] = useState({
    name: "",
    img: "",
    description: ""
  })

  const { name, img, description } = technologyInfo

  const numberedButtons = technologies.map(({ name, number }) => 
    <button 
      key={number}
      className={`numbered-button fs-600 text-secondary ${
        name === currentTechnology && "current"
      }`}
      onClick={() => setCurrentTechnology(name)}
    >
      {number}
    </button>
  )

  useEffect(() => {
    technologies.forEach(async({ name, images, description }) => {
      if (name !== currentTechnology) return
      
      const mediaQuery = "(min-width: 52em)"
      const imgSrc = await import(`${images[window.matchMedia(mediaQuery).matches ? 'portrait' : 'landscape']}/* @vite-ignore */`);

      setTechnologyInfo({
        name,
        img: imgSrc.default,
        description
      })
    })
  }, [currentTechnology])
  
  return (
    <motion.div {...fadeIn} className="technologies">
      <div>
        <div className="title">
          <NumberedTitle 
            number="03"
            title="space launch 101"
          />
        </div>

        <div className="technology-content even-columns">
          <div className="technology-info flex">
            <div className="flex numbered-buttons">
              {numberedButtons}
            </div>

            <div className="even-columns">
              <div>
                <p className="technology-title fs-barlow-condensed text-accent letter-spacing-2 uppercase">
                  the technology...
                </p>
                <h2 className="fs-800">{name}</h2>
              </div>
              <p className="description text-accent">{description}</p>
            </div>
          </div>

          <div className="technology-img-container">
            <img src={img} alt={`${currentTechnology} image`} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Technology
