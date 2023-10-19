import { removeItem } from "localforage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsCart3 } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Cart = () => {
  const loadedCartData = useLoaderData();

  const [cart, setCart] = useState(loadedCartData);
  const [totalPrice, setToatalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    if (cart.length) {
      cart.forEach((cartItem) => {
        price += parseInt(cartItem.price);

        if (price) {
          setToatalPrice(price);
        } else {
          setToatalPrice(0);
        }
      });
    } else {
      setToatalPrice(0);
    }
  }, [cart]);

  const handleDelete = (_id) => {
    //deleting user from database
    fetch(`http://localhost:5000/cart/${_id}/delete`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = cart.filter((cartItem) => cartItem._id !== _id);
          setCart(remaining);
          toast.success("Removed Item");
        }
      });
  };

  return (
    <div className="bg-base-200">
      <div className=" pb-12 min-h-[80vh] flex flex-col  justify-center container mx-auto">
        <h3 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-600 py-5 to-orange-400 font-semibold mb-12 text-5xl">
          My Cart
        </h3>
        <div className=" bg-white shadow-2xl border -mt-5  rounded-lg py-8 px-4 lg:px-20">
          {cart.length ? (
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
                      <td>
                        {" "}
                        <Link to={`/product/${cartItem.itemId}`}>
                          {cartItem.prodName}
                        </Link>{" "}
                      </td>
                      <td>{cartItem.brandName.toUpperCase()}</td>
                      <td>{cartItem.price}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(cartItem._id)}
                          className="btn btn-sm btn-error"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h3 className="text-center font-bold text-gray-400 text-4xl">
                You {"Haven't"} purchased Anything
              </h3>
            </div>
          )}

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
