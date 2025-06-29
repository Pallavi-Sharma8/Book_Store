import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.Price}</div>
            <div className="badge badge-outline hover:bg-pink-500 cursor-pointer py-3 px-2">Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
