import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarInline } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from 'clsx';

export default function RateableSkill({ direction, text, rating = 0, ofMax = 5 }: { direction: string, text: string, rating: number, ofMax?: number }) {
  {/* {children} */ }
  const isDirectionRight = direction == "right";

  return <div className="flex gap-4 group w-full max-w-full items-center">
    <span className={ clsx("truncate", !isDirectionRight && "order-2", !isDirectionRight && "ml-auto" )}>{text}</span>
    <div className={ clsx("flex", isDirectionRight && "ml-auto -scale-x-100") }>
        {
          Array.from(Array(Math.floor(rating)), (e, i) => {
            return <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 group-hover:motion-safe:animate-bounce" />
          })
        }
        {
          !Number.isInteger(rating) && <FontAwesomeIcon icon={faStarHalfStroke} className="text-yellow-500 group-hover:motion-safe:animate-bounce" />
        }   
        {
          Array.from(Array(Math.floor(ofMax - rating)), (e, i) => {
            return <FontAwesomeIcon key={i} icon={faStarInline} className="text-yellow-500 group-hover:motion-safe:animate-bounce" />
          })
        }   
      </div>
    
  </div>
}