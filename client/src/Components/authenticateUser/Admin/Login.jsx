import { Link, useNavigate } from "react-router-dom";
import LOGO from "../../../assets/LOGO.png";
import "react-international-phone/style.css";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
function Login() {
  const mainColor = " #9ca38a";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/login",
        data
      );
      const Token = response.data;
      window.localStorage.setItem("Token", Token);
      navigate(`/`);
    } catch (err) {
      console.log(err);
    }
    ClearData();
  };

  const ClearData = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login  ">
      <div className="container grid grid-cols-1 auto-rows-auto	 items-center	h-screen w-screen md:px-20 md:grid-cols-2		">
        <div className="logo max-w-fit col-span-1  justify-self-center		">
          <img className="w-62 md:w-3/3 " src={LOGO} alt="" />
        </div>
        <Card
          className="justify-self-center"
          color="transparent"
          shadow={false}
        >
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to Login.
          </Typography>
          <form
            method="POST"
            onSubmit={Submit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                style={{ color: { mainColor } }}
                className="-mb-3"
              >
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <Typography
                variant="h6"
                style={{ color: { mainColor } }}
                className="-mb-3"
              >
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              style={{ background: mainColor }}
              type="submit"
              className="mt-6 "
              fullWidth
            >
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account yet ?{" "}
              <Link to="/user/register" className="font-medium text-gray-900">
                Register now
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
