import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>$ {item.new_price}</p>
              <p>$ {item.old_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
