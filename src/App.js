import React, { useReducer } from "react";
import "./App.css";
import "./assets/stylesheets/Burger.css";
import BasicNavbar from "./components/header/Navbar";
import Burger from "./components/Burger";
import More from "./components/Menu";

function App() {
  const menuReducer = (items, action) => {
    switch (action.type) {
      case "add":
        return items.map((item) => ({
          ...item,
          [action.ingredient]: {
            ...item[action.ingredient],
            quantity: item[action.ingredient].quantity + 1,
          },
        }));

      case "remove":
        return items.map((item) => ({
          ...item,
          [action.ingredient]: {
            ...item[action.ingredient],
            quantity:
              item[action.ingredient].quantity - 1 >= 0
                ? item[action.ingredient].quantity - 1
                : 0,
          },
        }));

      case "reset":
        return items.map((item) => {
          const newItem = {};
          for (const key of Object.keys(item)) {
            newItem[key] = { ...item[key], quantity: 0 };
          }
          return newItem;
        });

      default:
        throw Error("Unknown action: " + action.type);
    }
  };
  const [menu, dispatch] = useReducer(menuReducer, initialMenu);

  const totalPrices = menu.map((item) => {
    let totalPrice = 0;
    Object.entries(item).forEach(([name, data]) => {
      totalPrice += data.quantity * data.price;
    });

    return totalPrice.toFixed(2);
  });

  const handleAddIngredient = (ingredient) => {
    dispatch({ type: "add", ingredient });
  };

  const handleRemoveIngredient = (ingredient) => {
    dispatch({ type: "remove", ingredient });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <div className="App">
        <div>
          <BasicNavbar />
        </div>
        <div className="bun">
          <Burger menu={menu} />
        </div>
        <div>
          <More
            handleAddIngredient={handleAddIngredient}
            handleRemoveIngredient={handleRemoveIngredient}
            handleReset={handleReset}
            price={totalPrices}
          />
        </div>
      </div>
    </>
  );
}

const initialMenu = [
  {
    lettuce: { id: 0, price: 1.5, quantity: 0 },
    bacon: { id: 0, price: 2, quantity: 0 },
    cheese: { id: 0, price: 0.4, quantity: 0 },
    meat: { id: 0, price: 1.3, quantity: 0 },
  },
];
export default App;
