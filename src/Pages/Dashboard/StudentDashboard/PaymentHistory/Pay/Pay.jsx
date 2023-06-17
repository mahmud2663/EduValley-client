import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { motion } from "framer-motion";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Pay = () => {
  const [payment, setPayment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/myClassCart/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPayment(data);
      });
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      <motion.p
        className="text-4xl text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Price: <span className="text-orange-500 font-bold">{payment.price}</span>
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <Elements stripe={stripePromise}>
          <CheckoutForm payment={payment} price={payment.price} />
        </Elements>
      </motion.div>
    </div>
  );
};

export default Pay;

