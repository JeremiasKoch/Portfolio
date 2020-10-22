import React from "react";

function Tecnologias() {
  return (
    <div
      id="div-proyectos"
      className="absolute -bottom-100 top-0 w-full  box-border text-white opacity-0 px-24 openHover"
    >
      <div className="pt-10 text-center">
        <h1 className="text-7xl opacity-100">Skills</h1>
      </div>
      <div className="h-auto mt-16 flex flex-col">
        <div className="border-purple-800 bg-purple-700 bg-opacity-75 border-2 p-4 rounded-lg float-left text-white flex flex-col max-w-3/4">
          <h2 className="text-5xl inline-block text-left float-left">
            Lenguajes
          </h2>
          <div className="text-3xl flex">
            <p className="pr-4">JavaScript</p>
            <p className="pr-4">HTML</p>
            <p className="pr-4">Css</p>
          </div>
        </div>
        <div className=" border-purple-800 bg-purple-700 bg-opacity-75 border-2 p-4 rounded-lg max-w-3/4  text-white flex flex-col mt-16 self-end">
          <h2 className="text-5xl text-right inline-block float-right">
            Librerias
          </h2>
          <div className="text-3xl flex justify-end">
            <p className="pr-4">React</p>
            <p className="pr-4">Redux</p>
            <p className="pr-4">TailWind</p>
            <p className="pr-4">Material-Ui</p>
            <p className="pr-4">Formik</p>
            <p className="pr-4">Node.js</p>
            <p>express</p>
          </div>
        </div>
        <div className=" border-purple-800 bg-purple-700 bg-opacity-75 border-2 p-4 max-w-3/4 rounded-lg w-auto float-left mt-16">
          <div className="text-white">
            <h2 className="text-5xl text-left">Extras</h2>
            <div className="text-3xl flex">
              <p className="pr-4">GitHub</p>
              <p className="pr-4">Adobe Photoshop</p>
              <p className="pr-4">Adobe Illustrator</p>
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
