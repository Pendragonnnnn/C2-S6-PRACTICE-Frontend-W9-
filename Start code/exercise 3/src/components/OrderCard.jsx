import React from "react";

export default function OrderCard({list, sendUpdate}) {
  
  return (
    <div className="order">
      <div>
        {
          list.map((item, index) => (
            <div key={index}>
              <div>
              <h3>{item.product}</h3>
              <small>$ {item.price}</small>
              </div>
              <div>
              <div className="order-quantity">
                <div className="order-button" style={ {backgroundColor: item.quantity <= 0 ? "#bfbfbf" : ""} } onClick={item.quantity <= 0 ? () => undefined : () => sendUpdate(-1,index) }>-</div>
                      <h3>{item.quantity}</h3>
                <div className="order-button" onClick={() => sendUpdate(1,index)}>+</div>
                </div>
              </div>
            </div>

          ))}
      
      </div>

      
    </div>
  );
}
