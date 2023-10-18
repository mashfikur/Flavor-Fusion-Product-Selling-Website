const AddProduct = () => {
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
    console.log(productInfo);
  };

  return (
    <div className="bg-base-200 py-10">
      <div className="text-center  z-50 relative lg:text-center">
        <h1 className="text-3xl mb-20 lg:mb-12 xl:mb-0 lg:text-5xl font-bold ">
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
                    name="brand_name"
                    className="select select-bordered focus:outline-none  w-full"
                  >
                    <option disabled selected>
                      Select Your Brand
                    </option>
                    <option>Coca-Cola</option>
                    <option>Starbucks</option>
                    <option>{"McDonald's"}</option>
                    <option>PepsiCo</option>
                    <option>{"Kellogg's"}</option>
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
                    name="type"
                    className="select select-bordered focus:outline-none  w-full"
                  >
                    <option disabled selected>
                      Select Product Type
                    </option>
                    <option>Breverage</option>
                    <option>Burger</option>
                    <option>Coffee</option>
                    <option>Soft Drinks</option>
                    <option>Snacks</option>
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
                <button className="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
