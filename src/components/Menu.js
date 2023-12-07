import React from "react";
import { Button } from "react-bootstrap";
import "../assets/stylesheets/Burger.css";
import "../assets/stylesheets/More.css";

const Menu = ({
  handleAddIngredient,
  handleRemoveIngredient,
  handleReset,
  price,
}) => {
  return (
    <>
      <div
        className="container-fluid position-absolute p-4"
        style={{
          backgroundColor: "#cf8f2e",
          bottom: "0",
        }}
      >
        <div className="d-flex flex-column align-items-center gap-3">
          <div
            className="test"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div>
              Current Price: $<b>{price}</b>
            </div>
          </div>
          <div className="test">
            <div className="text">Lettuce</div>
            <Button
              onClick={() => handleRemoveIngredient("lettuce")}
              variant="btn btn-danger"
            >
              Less
            </Button>
            <Button
              variant="btn btn-warning"
              onClick={() => handleAddIngredient("lettuce")}
            >
              More
            </Button>
          </div>
          <div className="test">
            <div className="text">Bacon</div>
            <Button
              onClick={() => handleRemoveIngredient("bacon")}
              variant="btn btn-danger"
            >
              Less
            </Button>
            <Button
              variant="btn btn-warning"
              onClick={() => handleAddIngredient("bacon")}
            >
              More
            </Button>
          </div>
          <div className="test">
            <div className="text">Cheese</div>
            <Button
              onClick={() => handleRemoveIngredient("cheese")}
              variant="btn btn-danger"
            >
              Less
            </Button>
            <Button
              variant="btn btn-warning"
              onClick={() => handleAddIngredient("cheese")}
            >
              More
            </Button>
          </div>
          <div className="test">
            <div className="text">Meat</div>
            <Button
              onClick={() => handleRemoveIngredient("meat")}
              variant="btn btn-danger"
            >
              Less
            </Button>
            <Button
              variant="btn btn-warning"
              onClick={() => handleAddIngredient("meat")}
            >
              More
            </Button>
          </div>
          <div
            className="test"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div>
              <Button
                variant="btn btn-success"
                style={{ width: "10rem" }}
                onClick={() => handleReset()}
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
