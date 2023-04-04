import "./crew.css"
import NumberedTitle from "../../components/NumberedTitle"
import { useLayoutEffect, useState } from "react"
import { crews } from "../../constants"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"

function Crew() {
  const firstCrew = crews[0].name
  const [currentCrew, setCurrentCrew] = useState(firstCrew)
  const [crewInfo, setCrewInfo] = useState({
    name: "",
    image: "",
    role: "",
    bio: ""
  })

  const { name, image, role, bio } = crewInfo

  const dottedButtons = crews.map(({ name }) => 
    <button 
      className={`dotted-button ${
        currentCrew === name && "current"
      }`} 
      key={name} 
      onClick={() => setCurrentCrew(name)}
    >
    </button>
  )

  useLayoutEffect(() => {
    crews.forEach(async({ name, images, role, bio }) => {
      if (name !== currentCrew) return 
      setCrewInfo({
        name,
        image: images.webp,
        role,
        bio
      })
    })
  }, [currentCrew])

  return (
    <motion.div {...fadeIn} className="crews">
      <div className="title">
        <NumberedTitle
          number="02"
          title="meet your crew"        
        />
      </div>

      <div className="crew-content even-columns">
        <div className="even-columns">
          <div className="role-name-bio">
            <div className="role-name">
              <p className="role uppercase fs-600">
                {role}
              </p>  

              <h3 className="uppercase fs-700">{name}</h3>
            </div>

            <p className="bio text-accent">{bio}</p>
          </div>

          <div className="dotted-buttons flex">
            {dottedButtons}
          </div>
        </div>

        <div className="crew-img-container">
          <img src={image} alt={`${currentCrew} image`} />
          <div className="bar"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Crew