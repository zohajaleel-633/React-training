import React from "react";
import burger3 from "../assets/upbun.jpg";
import burger2 from "../assets/downbun.jpg";
import Lettuce from "./ingredients/Lettuce";
import Bacon from "./ingredients/Bacon";
import Cheese from "./ingredients/Cheese";
import Meat from "./ingredients/Meat";
import "../assets/stylesheets/Burger.css";

const Burger = ({ menu }) => {
  const items = menu.map((item) => {
    const itemQuantities = {};
    Object.entries(item).forEach(([name, data]) => {
      itemQuantities[name] = data.quantity;
    });
    return itemQuantities;
  });

  const lettuceQuantities = items.map((item) => item.lettuce);
  const baconQuantities = items.map((item) => item.bacon);
  const cheeseQuantities = items.map((item) => item.cheese);
  const meatQuantities = items.map((item) => item.meat);

  const handleIngredient = (ingredient, quantity) => {
    const ingredients = [];

    for (let i = 0; i < quantity; i++) {
      let Component;

      switch (ingredient) {
        case "lettuce":
          Component = Lettuce;
          break;
        case "bacon":
          Component = Bacon;
          break;
        case "cheese":
          Component = Cheese;
          break;
        case "meat":
          Component = Meat;
          break;
        default:
          Component = null;
      }

      if (Component) {
        ingredients.push(<Component key={i} />);
      }
    }

    return ingredients;
  };

  return (
    <>
      <div>
        <img src={burger3} alt="" />
      </div>
      <div>{handleIngredient("lettuce", lettuceQuantities[0])}</div>
      <div>{handleIngredient("bacon", baconQuantities[0])}</div>
      <div>{handleIngredient("cheese", cheeseQuantities[0])}</div>
      <div>{handleIngredient("meat", meatQuantities[0])}</div>
      <div>
        <img src={burger2} alt="" />
      </div>
    </>
  );
};

export default Burger;
