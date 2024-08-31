import React, { useState } from "react";
import model from "../assets/glassesImage/model.jpg";
import arrGlass from "../assets/arrGrass";
import "./model.scss";

const Model = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(arrGlass[0]);

  return (
    
    <>
      <h1 className="text-center text-write py-5">TRY GLASSES APP ONLINE</h1>

      <div className=" flex justify-between glass gap-10">
        <div className="glass-content ">
          <img src={model} className="glass-model" alt="Model" />
          <div className="glass-select">
            <img
              src={selectedGlasses.url}
              className="glass-img"
              alt={selectedGlasses.name}
            />
            <div className="glass-des bg-orange-200">
              <span className="glass-name">
                Name Glass: {selectedGlasses.name}
              </span>
              <p className="glass-text"> {selectedGlasses.desc}</p>
              <p className="glass-price">Price: ${selectedGlasses.price}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 glass-item">
          {arrGlass.map((item) => {
            return (
              <div key={item.id} onClick={() => setSelectedGlasses(item)}>
                <img
                  src={item.url}
                  alt={item.name}
                  className="cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Model;
