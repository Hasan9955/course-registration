/* eslint-disable react/prop-types */
import Cart from "./Cart";

const Carts = ({cartData}) => {
    return (
        <div>
            <h4 className="text-xl mb-5 font-bold">Course Name</h4>
            {
                cartData.map((data, ind) => (<Cart
                key={ind}
                data={data}
                ></Cart>))
            }
        </div>
    );
};

export default Carts;