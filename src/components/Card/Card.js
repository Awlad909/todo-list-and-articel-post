import React from "react";
import "./Card.css";

const Card = ({ taskObj, index }) => {
  
    const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "rgb(235, 241, 250)",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },

    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "rgb(248, 222, 187)",
      secondaryColor: "#F3F0FD",
    },
  ];
  
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top" style={{"background-color":colors[index%5].primaryColor}} ></div>
      <div className="container task-header">
        <h4
          className="card-header" style={{"background-color":colors[index%5].secondaryColor}}>
          {taskObj.Name}
        </h4>
        <img
          style={{ width: "100%", height: "120px" }}
          src={taskObj.Image}
          alt=""
        />
        <p>{taskObj.Description}</p>
        <h6>Area Name: {taskObj.AreaName}</h6>
      </div>
    </div>
  );
};

export default Card;
