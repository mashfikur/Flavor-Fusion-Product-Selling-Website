import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { darkTheme } = useContext(AuthContext);

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

    const productInfo = {
      prodName,
      brandName,
      prodImg,
      type,
      price,
      rating,
      description,
    };

    // adding product to database
    fetch("https://flavor-fusion-server-sepia.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product Added Successfully");
          form.reset();
        }
      });
  };

  return (
    <div
      className={`${
        darkTheme
          ? "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900"
          : "bg-base-200"
      } py-10`}
    >
      <div className="text-center  z-10 relative lg:text-center">
        <h1
          className={`text-3xl mb-20 lg:mb-12 xl:mb-0 lg:text-6xl ${
            darkTheme &&
            "bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-gray-300 to-blue-500"
          }  font-bold `}
        >
          Add Product
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
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      Select Your Brand
                    </option>
                    <option value="Coca-Cola">Coca-Cola</option>
                    <option value="Starbucks">Starbucks</option>
                    <option value="Nestlé">Nestlé</option>
                    <option value="McDonald's">{"McDonald's"}</option>
                    <option value="PepsiCo">PepsiCo</option>
                    <option value="Kellogg's">{"Kellogg's"}</option>
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
                    defaultValue={""}
                  >
                    <option value={""} disabled>
                      Select Product Type
                    </option>
                    <option value={"Breverage"}>Breverage</option>
                    <option value={"Burger"}>Burger</option>
                    <option value={"Coffee"}>Coffee</option>
                    <option value={"Soft Drinks"}>Soft Drinks</option>
                    <option value={"Snacks"}>Snacks</option>
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
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#2257ca] hover:bg-[#2257ca] text-white ">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
