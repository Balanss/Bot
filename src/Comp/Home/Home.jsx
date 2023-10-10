import React from "react";
import { useState, useEffect } from "react";
import animation from "../Images/animation.gif";

export default function Home() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //create a pasw enter form with state that only allows you to enter if you have the password
  // style the button with primary color and shadow

  function handleSubmit() {
    setLoading(true);
    localStorage.setItem("password", password);

    setTimeout(() => {
      if (localStorage.getItem("password") === import.meta.env.VITE_PASW_FOOD) {
        window.location.href = "/foodbot";
      }
      if (
        localStorage.getItem("password") === import.meta.env.VITE_PASW_HEALTH
      ) {
        window.location.href = "/meds";
      } else {
        setMessage("wrong password");
      }
    }, 2000);
  }

  return (
    <div className="text-center">
      <section className="mt-10 mb-10 ml-5 text-white drop-shadow-xl ">
        <h1> </h1>
        <h1 className="text-6xl  drop-shadow-xl">
          {" "}
          Welcome To Project Aimigo{" "}
        </h1>
      </section>
      <br />

      <section className="mt-10 mb-10 ml-5 pb-10 text-white drop-shadow-xl">
        <h1 className="text-xl  drop-shadow-lg">
          {" "}
          Enter password to continue{" "}
        </h1>
        <input
          className="text-2xl text-black drop-shadow-xl mt-2"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button
          // onclick send the user to the foodbot page after 2 seconds
          className="  text-2xl text-white drop-shadow-xl mt-2 bg-sky-600 hover:bg-sky-700 rounded-xl p-2"
          onClick={handleSubmit}
        >
          {" "}
          Submit{" "}
        </button>

        <span className="text-center flex items-center justify-center mt-[20px]">
          {loading ? (
            <>
              {" "}
              <img src={animation} />{" "}
            </>
          ) : (
            ""
          )}
        </span>

        <br />
      </section>
    </div>
  );
}
