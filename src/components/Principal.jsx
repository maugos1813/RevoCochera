import React from "react";
import Clock from "./Clock";


export const Principal = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-center text-[8vw] mt-[2vh]">Bitácora de Cochera</h1>

      <div className="">
        <div className="flex gap-2 items-center justify-center mt-[3vh] mx-2">
          <div className="">
            <label htmlFor="placa"></label>
            <input
              type="text"
              id="placa"
              placeholder="Placa o DNI"
              className="h-[6vh] w-full border border-black p-2 rounded-xl text-center"
              required
            />
          </div>
          <div className="">
            <label htmlFor="marca"></label>
            <input
              type="text"
              id="marca"
              placeholder="Marca"
              className="h-[6vh] w-full border border-black p-2 rounded-xl text-center"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-5">
        <h2 className="text-[30px]">Tipo:</h2>
        <div className="">
          <label htmlFor="tipo"></label>
          <select
            id="tipo"
            placeholder="Tipo: A, C o M"
            className="h-[6vh] w-full border border-black p-2 rounded-xl"
            required
          >
            <option value="" disabled>Selecciona el tipo de vehículo</option>
            <option value="auto">Auto</option>
            <option value="camioneta">Camioneta</option>
            <option value="camion">Camión</option>
            <option value="moto">Moto</option>
            <option value="motoE">Moto Eléctrica</option>
          </select>
        </div>
      </div>
      <Clock/>

      <div className="flex justify-evenly">
        <button className="h-[6vh] border border-red-500 w-[100px] rounded-xl text-red-400">Cancelar</button>
        <button className="h-[6vh] border border-black w-[100px] rounded-xl text-white bg-black">Aceptar</button>
      </div>
    </div>
  );
};
