import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const stripePromise = loadStripe(
//   "pk_test_51PCnULP9FusDljxeRvuDQWxpAGIkSJ6bfhEOQ1XImRcjCDnyobIsCVbkiWPUbbzEIwHq8fnM980usd6GTRKXKRa700gaZKdyNE"
// );
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
