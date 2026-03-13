import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function updateQuantity(update, index){
    setOrders(prev => {
        const newOrder = [...prev];
        newOrder[index] = {
          ...newOrder[index],
          quantity: Math.max(0, newOrder[index].quantity + update)
        }
          return newOrder;
        }
    )
  }

  let total = 0;
  orders.forEach(element => {
    total += (element.price * element.quantity)
  });
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        <OrderCard list={orders} sendUpdate={updateQuantity}/>
      </div>

      <CheckoutButton total={total}></CheckoutButton>
    </>
  );
}
