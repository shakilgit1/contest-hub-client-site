import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const item = useLoaderData();
    // console.log(item);
    return (
        <div>
            <h2 className="text-center text-4xl mb-4">Register Now</h2>
            <div>
                <Elements stripe={stripePromise}>
                 <CheckOutForm item={item}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;