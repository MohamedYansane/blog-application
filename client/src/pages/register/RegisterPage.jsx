import React from "react";
import { Header } from "../../components/header/Header";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <div class="container shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-md p-5 gap-y-4">
        <div class="title text-xl font-bold">Formulaire</div>
        <form>
          <div class="user-informations flex flex-wrap justify-between ">
            <div class="input-box flex flex-col items-center">
              <span class="input-title text-md font-bold">Nom</span>
              <input
                type="text"
                placeholder="Enter your last name"
                formControlName="nom"
              />
            </div>
            <div class="input-box flex flex-col items-center">
              <span class="input-title text-md font-bold">Prenom</span>
              <input
                type="text"
                placeholder="Enter your first name"
                formControlName="prenom"
              />
            </div>
            <div class="input-box flex flex-col items-center">
              <span class="input-title text-md font-bold">Adresse</span>
              <input
                type="text"
                placeholder="Enter your name"
                formControlName="adresse"
              />
            </div>
            <div class="input-box flex flex-col items-center">
              <span class="input-title text-md font-bold">Email</span>
              <input
                type="text"
                placeholder="Enter your email adress"
                formControlName="email"
              />
            </div>
            <div class="input-box flex flex-col items-center">
              <span class="input-title text-md font-bold">CNI</span>
              <input
                type="text"
                placeholder="Enter your cni number"
                formControlName="cni"
              />
            </div>
            <div class="input-box flex flex-col items-center">
              <span class="input-title text-md font-bold">Phone</span>
              <input
                type="text"
                placeholder="Enter your phone number"
                formControlName="phone"
              />
            </div>
          </div>

          <div class="flex justify-between w-full mt-4">
            <a
              href="#"
              class="btn-cancel w-[48%] px-4 py-2 shadow-md rounded-md"
            >
              Fermer
            </a>
            <button
              type="submit"
              class="btn-save px-4 text-white py-2 rounded-md shadow-md"
            ></button>
          </div>
        </form>
      </div>
    </>
  );
};
