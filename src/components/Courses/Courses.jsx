/* eslint-disable react/prop-types */
import { FaDollarSign } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';

const Courses = ({course, handleCart}) => {
    
    const {id, title, cover_img, description, price, credit} = course;
    return (
        <div className="space-y-5 border-2 p-3 rounded-xl">
            <img src={cover_img} alt="" />
            <h1 className='text-lg font-[600]'>{title}</h1>
            <p className='font-[400] text-[#1C1B1B99]'>{description}</p>
            <div className='flex items-center gap-3'>
                <FaDollarSign></FaDollarSign>
                <p>Price: {price}</p>

                <BsBook></BsBook>
                <p>Credit: {credit}hr</p>

            </div>
            <button 
            onClick={()=>{
                handleCart(course)
                
            }}
            className="text-white font-bold
             bg-[#2F80ED] p-3 rounded-xl w-full">Select</button>
        </div>
    );
};

export default Courses;