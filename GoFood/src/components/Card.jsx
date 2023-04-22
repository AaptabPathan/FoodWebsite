import React from "react";

function Card(props) {
  let options = props.foodOptions;
  let priceOptions = Object.keys(options);

  return (
    <div>
      <div
        className="card bg-dark text-white  mt-4"
        style={{
          width: "17rem",
          margin: "20px",
          maxHeight: "430px",
          boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <img
          src={props.foodImg}
          className="card-img-top card-img"
          style={{
            objectFit: "cover !important",
            objectPosition: "center",
            overflow: "hidden",
          }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">{props.foodDesc}</p>
          <div className="container">
            <select className="bg-success m-3 text-white rounded" name="" id="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="bg-success m-1 text-white rounded" name="" id="">
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <br />
            <div className="d-inline h-100 fs-6">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
