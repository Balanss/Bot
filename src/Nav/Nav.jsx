import useLogo from "../Comp/Images/useLogo.png";

export default function Nav() {
  return (
    <img
      onClick={() => {
        localStorage.setItem("password", "");
        setTimeout(() => {
          window.location.href = "/#/";
        }, 1000);
      }}
      src={useLogo}
      className="w-[100px] mt-4 ml-4 hover:scale-105  cursor-pointer"
    />
  );
}
