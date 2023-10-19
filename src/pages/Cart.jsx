import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const loadedCartData = useLoaderData();

  const [cart, setCart] = useState(loadedCartData);
  const [totalPrice, setToatalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((cartItem) => {
      price += parseInt(cartItem.price);

      if (price) {
        setToatalPrice(price);
      }
    });
  }, [cart]);

  const handleDelete = (_id) => {
    const remaining = loadedCartData.filter((cartItem) => cartItem._id !== _id);
    setCart(remaining);
  };

  return (
    <div className="bg-base-200">
      <div className=" pb-12 min-h-[80vh] flex flex-col  justify-center container mx-auto">
        <h3 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-600 py-5 to-orange-400 font-semibold mb-12 text-5xl">
          My Cart
        </h3>
        <div className=" bg-white shadow-2xl border -mt-5  rounded-lg py-8 px-4 lg:px-20">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>Price ($) </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem, idx) => (
                  <tr className="font-semibold text-base" key={cartItem._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <img
                        className="w-16 h-16 rounded-lg"
                        src={cartItem.prodImg}
                        alt=""
                      />
                    </td>
                    <td>{cartItem.prodName}</td>
                    <td>{cartItem.brandName.toUpperCase()}</td>
                    <td>{cartItem.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(cartItem._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <p className="text-center mt-5 font-bold bg-green-600 px-2 py-3 rounded-lg text-white ">
              Total Price : $ {totalPrice}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
