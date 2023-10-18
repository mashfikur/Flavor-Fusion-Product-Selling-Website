import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const Faq = () => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <div
      className={` min-h-[80vh] ${
        darkTheme
          ? "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900"
          : ""
      }   flex flex-col items-center justify-center `}
    >
      <div className="py-12 container mx-auto">
        <h3
          className={`text-center ${
            darkTheme && "text-white"
          }  mb-12 text-5xl font-semibold`}
        >
          Frequently Asked Questions
        </h3>

        <div className="flex lg:flex-row flex-col-reverse p-4 md:p-8  xl:p-0 items-center gap-8">
          <div className="flex-1">
            <div className="space-y-2">
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What is Flavor Fusion?
                </div>
                <div className="collapse-content">
                  <p>
                    Flavor Fusion is an online platform dedicated to
                    international food and beverages. We offer a diverse
                    selection of products from around the world, allowing you to
                    explore and savor global flavors from the comfort of your
                    home.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  How do I place an order?
                </div>
                <div className="collapse-content">
                  <p>
                    Ordering is simple! Just browse our product catalog, select
                    the items you want, and add them to your cart. When{" "}
                    {"you're"} ready, proceed to the checkout, where you can
                    review your order and complete the purchase
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  What payment methods do you accept?
                </div>
                <div className="collapse-content">
                  <p>
                    We accept a variety of payment methods, including major
                    credit cards, debit cards, and secure online payment
                    options. You can choose the one that suits you best during
                    the checkout process.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Is there a return policy?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, we have a return policy in place. If {"you're"} not
                    satisfied with your order, please refer to our Returns &
                    Refunds page for detailed information on our policies and
                    procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="https://i.ibb.co/3MSVZDb/faq-concept-illustration-people-looking-through-magnifying-glass-at-interrogation-point-searching-so.png"
              alt=""
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Faq;
