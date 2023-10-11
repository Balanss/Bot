import useLogo from "../Comp/Images/useLogo.png";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => {
        localStorage.setItem("password", "");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }}
      src={useLogo}
      className="w-[100px] mt-4 ml-4 hover:scale-105  cursor-pointer"
    />
  );
}
