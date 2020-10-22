import React from "react";

function Slider({ img01, img02, img03, img04 }) {
  const [imgSeleccionada, setImgSeleccionada] = React.useState(0);
  const checkImg = (value) => {
    return setImgSeleccionada(value);
  };

  return (
    <React.Fragment>
      <div className="w-4/5 h-3/5 overflow-hidden absolute -translate-x-1/2 -translate-y-1/2 slider">
        <div className="flex w-sliderW h-full">
          {imgSeleccionada === 1 || imgSeleccionada === 0 ? (
            <div className="w-1/5 transition duration-75">
              <img src={img01} alt="" className="w-full h-full" />
            </div>
          ) : imgSeleccionada === 2 ? (
            <div className="w-1/5 transition duration-75">
              <img src={img02} alt="" className="w-full h-full" />
            </div>
          ) : imgSeleccionada === 3 ? (
            <div className="w-1/5 transition duration-75">
              <img src={img03} alt="" className="w-full h-full" />
            </div>
          ) : imgSeleccionada === 4 ? (
            <div className="w-1/5 transition duration-75">
              <img src={img04} alt="" className="w-full h-full" />
            </div>
          ) : null}

          <div className="absolute bottom-20 flex ml-2/5">
            <label
              for="r1"
              className="w-10 h-6 border-2 border-blue-500 m-2 rounded cursor-pointer transition duration-75 hover:bg-blue-700"
              onClick={() => {
                checkImg(1);
              }}
            ></label>
            <label
              for="r2"
              className="w-10 h-6 border-2 border-blue-500 m-2 rounded cursor-pointer transition duration-75 hover:bg-blue-700"
              onClick={() => {
                checkImg(2);
              }}
            ></label>
            <label
              for="r3"
              className="w-10 h-6 border-2 border-blue-500 m-2 rounded cursor-pointer transition duration-75 hover:bg-blue-700"
              onClick={() => {
                checkImg(3);
              }}
            ></label>
            <label
              for="r4"
              className="w-10 h-6 border-2 border-blue-500 m-2 rounded cursor-pointer transition duration-75  hover:bg-blue-700"
              onClick={() => {
                checkImg(4);
              }}
            ></label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slider;
