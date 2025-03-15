import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, token, loadCreditsData, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Purchase",
      description: "Credits Purchase",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + '/api/user/verify', response,
            { headers: { token } })
          if (data.success) {
            loadCreditsData();
            navigate('/')
            toast.success('Credit added')
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }

  const paymentHandler = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }
      const { data } = await axios.post(
        backendUrl + "/api/user/pay",
        {
          planId,
        },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 bg-white hover:bg-gray-100 transition-colors duration-300">
        Our Plans
      </button>
      <h1 className="text-center text-4xl font-bold mb-6 sm:mb-10 text-gray-800">
        Choose the plan
      </h1>

      <div className="flex flex-wrap justify-center gap-8 text-left px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-lg border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500 w-full sm:w-96"
          >
            <img width={40} src={assets.product_icon} alt="" className="mb-4" />
            <p className="mt-3 mb-1 font-semibold text-xl text-gray-800">{plan.id}</p>
            <p className="text-sm text-gray-500">{plan.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium text-gray-800">${plan.price}</span> /{" "}
              <span className="text-gray-500">{plan.credits} credits</span>
            </p>
            <button
              onClick={() => paymentHandler(plan.id)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-8 text-sm rounded-md py-3 min-w-52 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;