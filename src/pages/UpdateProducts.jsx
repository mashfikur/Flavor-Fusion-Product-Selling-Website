import { useContext, useEffect } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProducts = () => {
  const { darkTheme } = useContext(AuthContext);
  const navigate = useNavigate();

  const productInfo = useLoaderData();

  const {
    _id,
    prodName,
    brandName,
    prodImg,
    type,
    price,
    rating,
    description,
  } = productInfo;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const prodName = form.name.value;
    const prodImg = form.product_image.value;
    const description = form.product_desc.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const brandName = form.brand_name.value.toLowerCase();
    const type = form.type.value;

    const updatedInfo = {
      prodName,
      brandName,
      prodImg,
      type,
      price,
      rating,
      description,
    };

    //updating info
    fetch(
      `https://flavor-fusion-server-sepia.vercel.app/products/${_id}/update`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Product Updated Successfully");
          navigate(-1);
        }
      });
  };
  return (
    <div>
      <div
        className={`${
          darkTheme
            ? "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900"
            : "bg-base-200"
        } py-10`}
      >
        <div className="text-center  z-50 relative lg:text-center">
          <h1
            className={`text-3xl mb-20 lg:mb-12 xl:mb-0 lg:text-6xl ${
              darkTheme &&
              "bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-gray-300 to-blue-500"
            }  font-bold `}
          >
            Update Product
          </h1>
        </div>
        <div className={`hero -mt-16 min-h-[90vh]`}>
          <div className="flex-col flex  lg:flex-col">
            <div className="card  w-full  shadow-2xl bg-base-100">
              <form onSubmit={handlSubmit} className="card-body">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="product name"
                      className="input input-bordered focus:outline-none"
                      required
                      name="name"
                      defaultValue={prodName}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <select
                      required
                      name="brand_name"
                      className="select select-bordered focus:outline-none  w-full"
                      defaultValue={brandName}
                    >
                      <option value="" disabled>
                        Select Your Brand
                      </option>
                      <option value="coca-cola">Coca-Cola</option>
                      <option value="starbucks">Starbucks</option>
                      <option value="nestlé">Nestlé</option>
                      <option value="mcdonald's">{"McDonald's"}</option>
                      <option value="pepsico">PepsiCo</option>
                      <option value="kellogg's">{"Kellogg's"}</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <input
                      type="text"
                      placeholder="photo URL"
                      className="input input-bordered focus:outline-none"
                      required
                      name="product_image"
                      defaultValue={prodImg}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Type</span>
                    </label>
                    <select
                      required
                      name="type"
                      className="select select-bordered focus:outline-none  w-full"
                      defaultValue={type}
                    >
                      <option value={""} disabled>
                        Select Product Type
                      </option>
                      <option value="Breverage">Breverage</option>
                      <option value="Burger">Burger</option>
                      <option value="Coffee">Coffee</option>
                      <option value="Soft Drinks">Soft Drinks</option>
                      <option value="Snacks">Snacks</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      placeholder="$0"
                      className="input input-bordered focus:outline-none"
                      required
                      name="price"
                      defaultValue={parseInt(price)}
                    />
                  </div>
                  <div className="form-control  w-full">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="number"
                      placeholder="rating"
                      max={5}
                      min={1}
                      className="input input-bordered focus:outline-none"
                      required
                      defaultValue={parseInt(rating)}
                      name="rating"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Short Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Description"
                      className="input input-bordered py-10 focus:outline-none"
                      required
                      name="product_desc"
                      defaultValue={description}
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#2257ca] hover:bg-[#2257ca] text-white ">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
