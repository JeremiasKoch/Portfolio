import React from "react";
import Slider from "../slider/index";
import imgCommerce01 from "../../img/commerce01.png";
import imgCommerce02 from "../../img/commerce02.png";
import imgCommerce03 from "../../img/commerce03.png";
import imgCommerce04 from "../../img/commerce04.png";
import imgApp01 from "../../img/app01.png";
import imgApp02 from "../../img/app02.png";
import imgApp03 from "../../img/app03.png";
import imgApp04 from "../../img/app04.png";

function Experiencia() {
  return (
    <div className="relative w-full h-screen overflow-auto container ">
      <div
        id="homeExperiencia"
        className="relative w-full h-full section px-24"
      >
        <div>
          <h1 className="text-7xl pt-10">Experiencias</h1>
        </div>
        <div className="h-auto mt-16 flex flex-col">
          <a href="#eCommerceId">
            <div className="border-red-800 bg-red-700 hover:bg-red-500 hover:bg-opacity-75 bg-opacity-75 border-2 p-4 rounded-lg float-left text-white flex flex-col max-w-3/4">
              <h2 className="text-5xl inline-block text-left float-left">
                E-commerce
              </h2>
              <div className="text-3xl flex">
                <p className="pr-4">React</p>
                <p className="pr-4">Redux</p>
                <p className="pr-4">Boostrap</p>
                <p className="pr-4">Node.js</p>
                <p className="pr-4">Express</p>
                <p className="pr-4">PostgreSQL</p>
                <p className="pr-4">Passport</p>
              </div>
            </div>
          </a>
          <a href="#henryAppId">
            <div className=" border-red-800 bg-red-700 hover:bg-red-500 hover:bg-opacity-75 bg-opacity-75 border-2 p-4 rounded-lg max-w-2/3 float-right text-white flex flex-col mt-16 self-end">
              <h2 className="text-5xl text-right inline-block float-right">
                Henry App
              </h2>
              <div className="text-3xl flex justify-end">
                <p className="pr-4">React</p>
                <p className="pr-4">Redux</p>
                <p className="pr-4">Material-Ui</p>
                <p className="pr-4">Formik</p>
                <p className="pr-4">Express</p>
                <p className="pr-4">PostgreSQL</p>
                <p className="pr-4">Passport</p>
              </div>
            </div>
          </a>
          <a href="#digiChangeId">
            <div className=" border-red-800 bg-red-700 hover:bg-red-500 hover:bg-opacity-75 bg-opacity-75 border-2 p-4 max-w-3/4 rounded-lg w-auto float-left mt-16">
              <div className="text-white">
                <h2 className="text-5xl text-left">Freelance</h2>
                <div className="text-3xl flex">
                  <p>Segun el proyecto es la tecnologia a usar.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-end bottom-0 right-0 absolute ">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-24 transform rotate-90 pr-5 iconScroll">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h2 className="text-2xl">scrollea para ver mis trabajos</h2>
          </div>
        </div>
      </div>
      <div id="eCommerceId" className="relative w-full h-full section px-24">
        <div>
          <h1 className="text-7xl pt-10">E-Commerce</h1>
        </div>
        <div className="text-2xl pt-5  bg-gray-900 bg-opacity-50 rounded-lg">
          <p>
            E-commerce realizado en equipo como parte de instancia evaluativa en
            Soy Henry en el lapso de 1 mes.
          </p>
          <p> Estuve a cargo del Front End con: react, boostrap.</p>
        </div>
        <div className="flex justify-center pt-20">
          <Slider
            img01={imgCommerce01}
            img02={imgCommerce02}
            img03={imgCommerce03}
            img04={imgCommerce04}
          />
        </div>
      </div>
      <div id="henryAppId" className="relative w-full h-full section px-24 ">
        <div>
          <h1 className="text-7xl pt-10">Henry App</h1>
        </div>
        <div className="text-2xl pt-5  bg-gray-900 bg-opacity-50 rounded-lg">
          <p>
            Desarrollado con el objetivo de mejorar los canales administrativos
            de la comunidad de Henry, desarrollado en el lapso de 1 mes.
          </p>
          <p>
            Estuve a cargo del Front End con: React, Redux, Material-ui, Formik.
          </p>
        </div>
        <div className="flex justify-center pt-20">
          <Slider
            img01={imgApp01}
            img02={imgApp02}
            img03={imgApp03}
            img04={imgApp04}
          />
        </div>
      </div>
      <div id="digiChangeId" className="relative w-full h-full section px-24 ">
        <div>
          <h1 className="text-7xl pt-10">Freelance</h1>
          <p className="text-2xl">Trabajos hechos por encargue</p>
        </div>

        <div className="text-2xl mt-10  bg-gray-900 bg-opacity-50 rounded-lg pt-3 pb-3">
          <h2 className="text-5xl ">DigiChange</h2>
          <p>
            Creacion de componentes a pedido del cliente utilizando: React,
            Formik, React-Data-Table
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
