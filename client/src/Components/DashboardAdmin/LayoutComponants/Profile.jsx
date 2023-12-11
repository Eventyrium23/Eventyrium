import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import AhmedImage from '../../../assets/AdminsPic/Bohmid.jpg';
=======
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Profile() {
    const [data, setData] = useState(null);
<<<<<<< HEAD
    const [admin, setAdmin] = useState(AhmedImage);
=======
    const [adminImg, setAdminImg] = useState("");
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    useEffect(() => {
        const getAdminProfile = async () => {
            try {
<<<<<<< HEAD
                const token = window.localStorage.getItem("adminToken");
                const { adminName } = jwtDecode(token);
                const response = await axios.get(`http://localhost:8080/admin/getAdmin/${adminName}`);
=======
                const token = window.localStorage.getItem("AdminToken");
                const { id } = jwtDecode(token);
                const response = await axios.get(`http://localhost:8080/admin/getAdmin/${id}`);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };
<<<<<<< HEAD

=======
console.log(data);
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
        getAdminProfile();

    }, []);

    useEffect(() => {
        if (data) {
            setName(data.adminName || "");
            setEmail(data.email || "");
            setMobile(data.phone || "");
<<<<<<< HEAD
=======
            setAdminImg(data.image || "");
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
        }
    }, [data]);

    const backgroundImageUrl = "https://w0.peakpx.com/wallpaper/324/258/HD-wallpaper-wild-goose-island-mountains-forest-montana-glacier-national-park-trees.jpg";

    return (
        <div className="profile w-screen">
            <div className="container flex w-full flex-col justify-center items-center">
                <div
                    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                    className="mt-10 bg-cover m-auto bg-center brightness-50 justify-items-center w-screen h-64 max-w-[100%] rounded-lg shadow-md overflow-hidden"
                ></div>
                <div
                    className="adminInfo flex-col items-center justify-center relative top-[-30px] shadow-2xl rounded-3xl p-10 bg-[#e8e8e8] w-full max-w-5xl"
                >
                    <div className="md:flex flex-col gap-10">
                        <div className="rounded-full w-20 h-20 bg-cover shadow-2xl"
<<<<<<< HEAD
                            style={{ backgroundImage: `url(${admin})` }}>
=======
                            style={{ backgroundImage: `url(${adminImg})` }}>
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
                        </div>
                        <div className="">
                            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                            <p className="text-sm text-gray-700 mt-2 text-md">Role: CEO / Co-Founder</p>
                        </div>
                    </div>
                    <div className="info md:flex flex-col  mt-6">
                        <div className="profile">
                            <h3 className="font-bold mb-4 text-xl">Profile Information</h3>
                            <p className="max-w-lg w-full">
<<<<<<< HEAD
                                Hi, I'm Ahmed Haddada, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)
=======
                                Hi, I'm {name}, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
                            </p>
                        </div>
                        <div className="info flex gap-5 flex-col mt-2">
                            <p><strong>Mobile: </strong>{mobile}</p>
                            <p><strong>Email: </strong>{email}</p>
                            <p><strong>Location: </strong>Tunisia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
