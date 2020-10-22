import React from "react";
import "../../index.css";
import Experiencia from "../Experiencia/index";
import Tecnologias from "../tecnologias/index";

function Home() {
  return (
    <React.Fragment>
      <ul className="absolute top-0 left-0 w-full h-screen bg-gray-900 m-0 p-0 ">
        <li className="imgHome01 experienciaClass list-none relative w-1/6  h-full border-r border-gray-900 float-left box-border text-center hover:w-3/5 duration-500 overflow-hidden ">
          <div
            id="div-perfil"
            className="absolute -bottom-100 top-0 w-full box-border text-white opacity-0 "
          >
            <Experiencia />
          </div>
        </li>
        <li className="multiply-bg  openHover list-none relative w-1/6  h-full border-r border-gray-900 float-left box-border hover:w-3/5 duration-500 overflow-hidden ">
          <Tecnologias />
        </li>
        <li className="list-none h-full flex flex-wrap justify-center relative text-center overflow-hidden profile">
          <div id="div-home" className="">
            <div className="text-white text-center pt-12 bg-gray-900 bg-opacity-50">
              <div>
                <h1 className="text-7xl">Jeremias</h1>
                <h1 className="text-7xl">David Koch</h1>
              </div>
              <div className="text-3xl p-12">
                <p>
                  Soy un desarrollador front-end dando sus primeros pasos en la
                  industria, con experiencia en diseño e ilustracion digital. Mi
                  objetivo no es solo que sea vea y funcione bien, sino entender
                  las verdaderas necesidades del usuario y responder a ellas.
                </p>
              </div>
            </div>
            <div className="text-gray-300  text-6xl w-full flex justify-evenly  p-32">
              <a
                href="https://www.linkedin.com/in/jeremias-koch/"
                target="_blank"
                className="hover:text-gray-500 "
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:jeremiaskoch.92@gmail.com?subject=Solicitud de contacto"
                className="hover:text-gray-500"
              >
                <i class="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/JeremiasKoch"
                target="_blank"
                className="hover:text-gray-500"
              >
                <i class="fab fa-github-square"></i>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Home;
