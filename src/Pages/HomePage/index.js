import { useSelector } from "react-redux";
import StepperIcon from "../../components/Stepper";
import VerticalStepper from "../../components/VerticalStepper";

export default function HomePage() {
  const cartList = useSelector((state) => state.cart.cartList);
  console.log("cart", cartList);

  return (
    <>
      This is Home Page
      {/* <StepperIcon /> */}
      {/* <VerticalStepper steps={steps}></VerticalStepper> */}
    </>
  );
}
