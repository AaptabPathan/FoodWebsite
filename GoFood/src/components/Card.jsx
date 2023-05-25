import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
  let disptach = useDispatchCart();
  let data = useCart();
  let options = props.foodOptions;
  let priceOptions = Object.keys(options);

  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItems._id) {
        food = item;

        break;
      }
    }

    if (food !== []) {
      if (food.size === size) {
        await disptach({
          type: "UPDATE",
          id: props.foodItems._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await disptach({
          type: "ADD",
          id: props.foodItems._id,
          name: props.foodItems.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
      return;
    }

    await disptach({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div
        className="card bg-dark text-white mt-4"
        style={{
          width: "17rem",
          margin: "20px",
          maxHeight: "490px",
          boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <img
          src={props.foodItems.img}
          className="card-img-top card-img"
          style={{
            objectFit: "cover !important",
            objectPosition: "center",
            overflow: "hidden",
          }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItems.name}</h5>
          <p className="card-text">{props.foodItems.description}</p>
          <hr />
          <div className="container">
            <select
              className="bg-success m-2 text-white rounded"
              name=""
              id=""
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="bg-success m-1 text-white rounded"
              ref={priceRef}
              name=""
              id=""
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 mx-2 fs-6">₹{finalPrice}</div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center  fs-6"
            onClick={handleCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
