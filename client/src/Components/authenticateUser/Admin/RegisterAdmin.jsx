import { Link, useNavigate } from "react-router-dom";
import LOGO from "../../../assets/AdminsPic/LOGO.png";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";



function RegisterAdmin() {
  const mainColor = " #9ca38a";
  const [phone, setPhone] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // --------------------------------------Cloudinary
  const [image, setImage] = useState('');

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  };

  const UploadImg = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    axios.post("http://localhost:8080/uploadImg", { image: base64 })
      .then(res => { setImage(res.data) })
      .catch(err => { console.log(err); });
  };

  // ---------------------------------
  const Submit = async (e) => {
    e.preventDefault();
    const data = {
      phone,
      adminName,
      email,
      password,
      image
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/register",
        data
      );
    } catch (err) {
      toast.error("Register failed. Please check your information.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    ClearData();
  };
  const ClearData = () => {
    setEmail("");
    setPassword("");
    setPhone("");
    setAdminName("");
  };
  return (
    <div className="register  ">
      <div className="container grid grid-cols-1 auto-rows-auto	 items-center	 h-screen w-screen md:px-20 md:grid-cols-2		">
        <div className="logo max-w-fit col-span-1  justify-self-center		">
          <img className="w-62 md:w-3/3 " src={LOGO} alt="" />
        </div>
        <Card
          className="justify-self-center"
          color="transparent"
          shadow={false}
        >
          <Typography variant="h4" color="blue-gray">
            Admin Register
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            method="POST"
            onSubmit={Submit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >





            <div className="mb-1 flex flex-col gap-6">



              <>
                <Typography
                  variant="h6"
                  style={{ color: mainColor }}
                  className="-mb-3"
                >
                  Your Image
                </Typography>
                <Input
                  type="file"
                  size="lg"
                  onChange={UploadImg}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </>





              <Typography
                variant="h6"
                style={{ color: { mainColor } }}
                className="-mb-3"
              >
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Your Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setAdminName(e.target.value)}
                value={adminName}
              />
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
                Your Phone
              </Typography>

              <PhoneInput
                defaultCountry="tn"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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

            <Button
              style={{ background: mainColor }}
              type="submit"
              className="mt-6 "
              fullWidth
            >
              sign up
            </Button>

          </form>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterAdmin;
