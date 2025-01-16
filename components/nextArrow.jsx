import { FaArrowRight } from "react-icons/fa";

export const NextArrow = ({onClick}) => {
  return (
    <div className=" absolute right-0 -bottom-16 " onClick={onClick} >
        <div className=" bg-gray10 hover:bg-gray15 h-[40px] md:h-[50px] w-[40px] md-w-[50px] rounded-full grid place-items-center cursor-pointer">
            <FaArrowRight color="#fff"/>
        </div>
    </div>
  )
}
