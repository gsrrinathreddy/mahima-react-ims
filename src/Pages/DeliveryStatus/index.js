import { useSelector } from "react-redux";
import VerticalStepper from "../../components/VerticalStepper";

export default function DeliveryStatus() {
  let steps = [
    {
      label: "Your order placed",
      description: "Your order is placed for",
      itemname: [],
    },
    {
      label: "dispatch warehouse",
      description: "item dispatced",
      msg: "",
    },
    {
      label: "Order Recived",
      description: "your order recived",
    },
  ];

  const cartList = useSelector((state) => state.cart.cartList);
  console.log("cart", cartList);

  if (cartList) {
    steps = steps.map((item) => {
      if (item.label === "Your order placed") {
        return {
          label: "Your order placed",
          description: "Your order is placed for",
          itemname: cartList.map((item) => {
            return item.title;
          }),
        };
      } else if (item.label === "dispatch warehouse") {
        return {
          label: "dispatch warehouse",
          description: "item dispatced",
          msg: "your order item is dispatched from warehouse",
        };
      } else {
        return item;
      }
    });
  }

  console.log("steps", steps);

  return (
    <>
      {/* <VerticalStepper steps={steps}></VerticalStepper> */}
      {console.log("item size", steps[0].itemname.length)}
      {steps[0].itemname.length >= 1 ? (
        <VerticalStepper steps={steps}></VerticalStepper>
      ) : (
        "Items are not added to cart"
      )}
    </>
  );
}
