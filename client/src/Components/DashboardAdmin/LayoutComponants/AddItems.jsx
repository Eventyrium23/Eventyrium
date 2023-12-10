import "react-international-phone/style.css";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

import { useState } from "react";
import axios from "axios";
import cloudinaryConfig from "../../../../cloudinaryConfig";
import { Image, Transformation, CloudinaryContext, CloudinaryUploader } from 'cloudinary-react';


function AddItems() {
    const mainColor = " #9ca38a";
    const [name, setName] = useState("");
    const [item, setItem] = useState("");
    const [category, setCategory] = useState("")

    // --------------------------------Cloudinary
    const [image, setImage] = useState('');

    const handleUpload = (info) => {
        if (info.event === 'success') {
            setImage(info.info.secure_url);
        }
    };
    // ---------------------------- Posssssste


    const Submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/admin/login",
                data
            );
            const Token = response.data;
            window.localStorage.setItem("Token", Token);
        } catch (err) {
            console.log(err);
        }
        ClearData();
    };

    const ClearData = () => {
        setName("");
        setItem("");
        setCategory("")
    };
    return (
        <div className="addItems  ">
            <div className="container grid grid-cols-1 auto-rows-auto	 items-center md:px-20 md:grid-cols-2		">

                <Card
                    className="justify-self-center"
                    color="transparent"
                    shadow={false}
                >
                    <Typography variant="h4" color="blue-gray">
                        Add Items
                    </Typography>

                    <form
                        method="POST"
                        onSubmit={Submit}
                        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                    >
                        <div className="mb-1 flex flex-col gap-6">


                            <div>
                                <CloudinaryContext {...cloudinaryConfig}>
                                    <CloudinaryUploader
                                        folder="your-upload-folder"
                                        tags={['your', 'tags']}
                                        resourceType="auto"
                                        uploadPreset="your-upload-preset"
                                        publicId="unique-public-id"
                                        onUpload={handleUpload}
                                        onError={(err) => console.log('Error:', err)}
                                        onStart={() => console.log('Upload started')}
                                    />
                                    {image && (
                                        <Image publicId={image} width="300" height="200">
                                            <Transformation crop="fill" />
                                        </Image>
                                    )}
                                </CloudinaryContext>
                            </div>




                            <div className="w-72">
                                <Select label="Select Version" onChange={(e) => setCategory(e.target.value)}>
                                    <Option value="packs">Packs</Option>
                                    <Option value="places">Places</Option>
                                    <Option value="foods">Foods</Option>
                                    <Option value="decorations">Decorations</Option>
                                </Select>
                            </div>


                            <Typography
                                variant="h6"
                                style={{ color: { mainColor } }}
                                className="-mb-3"
                            >
                                Name
                            </Typography>
                            <Input
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                                value={name}
                            />

                            <Typography
                                variant="h6"
                                style={{ color: { mainColor } }}
                                className="-mb-3"
                            >
                                description
                            </Typography>
                            <Input
                                type="text"
                                size="lg"
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
                            Add
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default AddItems;





