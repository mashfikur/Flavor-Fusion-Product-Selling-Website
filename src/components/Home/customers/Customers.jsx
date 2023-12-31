import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CustomerCard from "./CustomerCard";
import { AuthContext } from "../../../Authentication/AuthProvider";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const { darkTheme } = useContext(AuthContext);

  useEffect(() => {
    fetch("/customers.json")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div
      className={` min-h-[80vh] py-10 flex flex-col items-center justify-center  ${
        darkTheme ? "bg-gradient-to-r from-blue-400 to-emerald-400" : "bg-white"
      }`}
    >
      <h3 className="text-center text-5xl px-4 lg:-mt-12 font-semibold mb-12">
        Hear what our <span className="text-green-600">customers</span> has to
        say
      </h3>

      <Marquee pauseOnHover={false}>
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer}></CustomerCard>
        ))}
      </Marquee>
    </div>
  );
};

export default Customers;
