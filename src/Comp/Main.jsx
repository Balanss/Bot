import { useEffect, useState } from "react";
import Functions from "./Functions";

import Nav from "../Nav/Nav";

export default function Main() {
  const [name, setName] = useState([]);
  const [middle, setMiddle] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: import.meta.env.VITE_BOT },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
      // Introduce a small delay to ensure the widget is fully initialized
      // setTimeout(() => {
      //   window.voiceflow.chat.open();
      // }, 3000); // Adjust the delay as needed
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary
      document.body.removeChild(script);
    };
  }, []);

  const [okay, setOkay] = useState("");

  useEffect(() => {
    setOkay(localStorage.getItem("password"));
  }, []);

  return (
    <>
      <Nav />

      {okay === import.meta.env.VITE_PASW_HEALTH && (
        <div className="w-1/2 m-auto">
          <Functions name={name} setName={setName} setMiddle={setMiddle} />

          <section className="mt-10 mb-10 ml-5 text-white drop-shadow-xl ">
            <h1> </h1>
            {name.map((x, id) => (
              <h1 className="text-2xl  drop-shadow-xl" key={id}>
                {" "}
                Hello, {x.Name === 0 ? "" : x.Name}{" "}
              </h1>
            ))}
          </section>

          <br />
          <hr className="w-[50vw] border-yellow-500 border-b-4" />

          <section className="mt-10 mb-10 ml-5 pb-10 text-white drop-shadow-xl">
            {middle.map((x, id) => (
              <div key={id} className="text-2xl">
                <li className=" drop-shadow-xl">{x.Name} </li>

                <li className=" drop-shadow-xl">{x.Location}</li>

                <li className=" drop-shadow-xl">{x.description}</li>
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
}