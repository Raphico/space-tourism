import { useLayoutEffect, useState } from "react"
import NumberedTitle from "../../components/NumberedTitle"
import { destinations } from "../../constants"
import "./destination.css"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"

function Destination() {
  const firstDestination = destinations[0].name
  const [currentDestination, setCurrentDestination] = useState(firstDestination)
  const [destinationInfo, setDestinationInfo] = useState({
    image: "",
    description: "",
    distance: "",
    travel: ""
  })

  const { image, description, distance, travel } = destinationInfo

  const destinationNavigation = destinations.map(({ name }) => 
    <li 
      className={`destination ff-barlow-condensed 
      letter-spacing-2 uppercase text-accent ${
        name === currentDestination && "current"
      }`}
      key={name}
      onClick={() => setCurrentDestination(name)}
    >
      {name}
    </li>
  )

  useLayoutEffect(() => {
    destinations.forEach(async({ name, images, description, distance, travel }) => {
      if (name !== currentDestination) return
      setDestinationInfo({
        image: images.webp,
        description,
        distance,
        travel
      })
    })
  }, [currentDestination])

  return (
    <motion.div 
      {...fadeIn}
      className="destinations even-columns"
    >
      <div className="flow">
        <div className="title">
          <NumberedTitle 
            number="01"
            title="pick your destination" 
          />
        </div>

        <div className="destination-img">
          <img src={image} alt={`${currentDestination} image`} />
        </div>
      </div>

      <div className="destination-content flow">
        <div>
          <ul className="destination-navigation flex" role="list">
            {destinationNavigation}
          </ul>

          <h2 className="fs-800 uppercase">
            {currentDestination}
          </h2>

          <p className="description text-accent">{description}</p>
        </div>

        <div className="bar"></div>

        <div className="details flex">
          <div>
            <p className="distance-travel letter-spacing-1">
              avg. distance
            </p>
            <p className="fs-500">{distance}</p>
          </div>

          <div>
            <p className="distance-travel letter-spacing-1">
              est. travel time
            </p>
            <p className="fs-500">{travel}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Destination