import moonImg from "../assets/image-moon.webp"
import marsImg from "../assets/image-mars.webp"
import europaImg from "../assets/image-europa.webp"
import titanImg from "../assets/image-titan.webp"
import douglasImg from "../assets/image-douglas-hurley.webp"
import markImg from "../assets/image-mark-shuttleworth.webp"
import victorImg from "../assets/image-victor-glover.webp"
import anoushehImg from "../assets/image-anousheh-ansari.webp"
import launchImg from "../assets/image-launch-vehicle-landscape.jpg"
import spaceSportImg from "../assets/image-spaceport-landscape.jpg"
import spaceCapsuleImg from "../assets/image-space-capsule-landscape.jpg"

export default (path) => {
  const img = {
    "image-moon": moonImg,
    "image-mars": marsImg,
    "image-europa": europaImg,
    "image-titan": titanImg,
    "image-douglas-hurley": douglasImg,
    "image-mark-shuttleworth": markImg,
    "image-victor-glover": victorImg,
    "image-anousheh-ansari": anoushehImg,
    "image-launch-vehicle-landscape": launchImg,
    "image-spaceport-landscape": spaceSportImg,
    "image-space-capsule-landscape": spaceCapsuleImg
  }

  return img[path.split('/').pop().split('.')[0]]
}