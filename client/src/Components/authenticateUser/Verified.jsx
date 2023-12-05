import { Link, useNavigate, useParams } from "react-router-dom";
import verified from "../../assets/verified.png";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import axios from "axios";

function Verified() {
  const navigate = useNavigate();
  const { token } = useParams();
  const verif = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/user/confirm/${token}`
      );

      navigate(`/user/confirm/${token}`);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    verif();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col	h-screen">
      <img className="w-40" src={verified} alt="" />
      <Link className="text-7xl flex" to="/user/login">
        Welcome <CursorArrowRippleIcon className="w-20" />{" "}
      </Link>
    </div>
  );
}

export default Verified;
