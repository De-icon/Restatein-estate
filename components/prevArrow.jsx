import { FaArrowLeft } from "react-icons/fa";

export const PrevArrow = ({ onClick }) => {
  return (
    <div className=" absolute right-24 md:right-16 -bottom-16 " onClick={onClick} >
        <div className=" bg-gray10 hover:bg-gray15 h-[40px] md:h-[50px] w-[40px] md-w-[50px] rounded-full grid place-items-center cursor-pointer">
            <FaArrowLeft color="#fff"/>
        </div>
    </div>
  )
}
