/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
// import useContest from "../../../hooks/useContest";

const CheckOutForm = ({ item }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  // console.log(item);

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();


  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: item?.contestPrize })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, item?.contestPrize]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
    //   console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
    //   console.log("confirm error");
      Swal.fire({
        title: 'Error!',
        text: 'Invalid card or date',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction Id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // now save payment into database
        const payment = {
          transactionId: paymentIntent.id,
          email: user?.email,
          name: user?.displayName,
          contestName: item.contestName,
          type: item.type,
          contestPrize: item.contestPrize,
          shortDescription: item.shortDescription,
          deadline: item.deadline,
          task: item.task,
          attemptedCount: item.attemptedCount,
          status: "pending",
          image: item.image,
        };
        const res = await axiosSecure.post("/payments", payment);
        // console.log("payment success", res.data);
        //  refetch();
        if (res.data?.insertedId) {
          //
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for payment",
            showConfirmButton: false,
            timer: 1500,
          });
        //   navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && (
          <p className="text-green-400">Your transaction id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
