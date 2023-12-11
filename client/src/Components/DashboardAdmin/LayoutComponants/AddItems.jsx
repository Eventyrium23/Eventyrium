import "react-international-phone/style.css";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import axios from "axios";

function AddItems({ addItemForm }) {
    const mainColor = "#9ca38a";
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [max_guests, setMax_guests] = useState("");
    const [description, setDescription] = useState("");

    // --------------------------------Cloudinary
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

    // ---------------------------- Posssssste

    const Submit = async (e) => {
        e.preventDefault();
        let urlPath;
        let data;

        switch (category) {
            case "packs":
                urlPath = "addPack";
                data = {
                    name: name,
                    image: image,
                    price: price,
                    max_guests: max_guests,
                    description: description,
                    location: location,
                };
                break;
            case "places":
                urlPath = "addPlace";
                data = {
                    name: name,
                    image: image,
                    price: price,
                    description: description,
                    location: location,
                };
                break;
            case "foods":
                urlPath = "addFood";
                data = {
                    name: name,
                    image: image,
                    price: price,
                    specialite: specialite,
                };
                break;
            case "decorations":
                urlPath = "addDeco";
                data = {
                    name: name,
                    image: image,
                    price: price,
                    stock: stock,
                };
                break;
            default:
                break;
        }

        try {
            const response = await axios.post(
                `http://localhost:8080/${category}/${urlPath}`,
                data
            );
            window.location.reload();
        } catch (err) {
            console.log(err);
        }

        ClearData();
    };

    const ClearData = () => {
        setName("");
        setImage("");
        setCategory("");
        setDescription("");
        setMax_guests("");
        setPrice("");
        setSpecialite("");
        setStock("");
        setLocation("");
        setCategory("");
    };

    return (
        addItemForm.addItemV && (
            <div className="addItems absolute z-40 shadow-xl rounded-lg top-14 md:top-[-5%] left-2/4 translate-x-[-50%] ">
                <IoMdClose
                    onClick={() => {
                        addItemForm.setAddItemV(false);
                        ClearData();
                    }}
                    className="cursor-pointer text-3xl top-[-15px] bg-white rounded-full absolute right-[-10px]"
                />
                <div className="p-5 bg-white">
                    <Card
                        className="justify-self-center"
                        color="transparent"
                        shadow={false}
                    >
                        <Typography variant="h4" color="blue-gray" className="text-center uppercase">
                            Add Items
                        </Typography>

                        <form
                            method="POST"
                            onSubmit={Submit}
                            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                        >
                            <div className="mb-1 flex flex-col gap-6">

                                {category && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Img
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
                                )}

                                <Typography
                                    variant="h6"
                                    style={{ color: mainColor }}
                                    className="-mb-3"
                                >
                                    Category
                                </Typography>
                                <div className="w-72">
                                    <Select label="Select Version" onChange={(e) => setCategory(e)}>
                                        <Option value="packs">Packs</Option>
                                        <Option value="places">Places</Option>
                                        <Option value="foods">Foods</Option>
                                        <Option value="decorations">Decorations</Option>
                                    </Select>
                                </div>

                                {category && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Name
                                        </Typography>
                                        <Input
                                            size="lg"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                        />
                                    </>
                                )}

                                {(category === "packs" || category === "places") && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Description
                                        </Typography>
                                        <Input
                                            type="text"
                                            size="lg"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setDescription(e.target.value)}
                                            value={description}
                                        />
                                    </>
                                )}

                                {(category === "packs" || category === "places") && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Location
                                        </Typography>
                                        <Input
                                            type="text"
                                            size="lg"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setLocation(e.target.value)}
                                            value={location}
                                        />
                                    </>
                                )}

                                {category === "packs" && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Max Guests
                                        </Typography>
                                        <Input
                                            type="number"
                                            size="lg"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setMax_guests(e.target.value)}
                                            value={max_guests}
                                        />
                                    </>
                                )}

                                {category === "foods" && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Specialite
                                        </Typography>
                                        <Input
                                            type="text"
                                            size="lg"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setSpecialite(e.target.value)}
                                            value={specialite}
                                        />
                                    </>
                                )}

                                {category === "decorations" && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Stock
                                        </Typography>
                                        <Input
                                            type="number"
                                            size="lg"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setStock(e.target.value)}
                                            value={stock}
                                        />
                                    </>
                                )}

                                {category && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            style={{ color: mainColor }}
                                            className="-mb-3"
                                        >
                                            Price
                                        </Typography>
                                        <Input
                                            type="number"
                                            size="lg"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            onChange={(e) => setPrice(e.target.value)}
                                            value={price}
                                        />
                                    </>
                                )}
                            </div>

                            <Button
                                style={{ background: mainColor }}
                                type="submit"
                                className="mt-6"
                                fullWidth
                            >
                                Add
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        )
    );
}

export default AddItems;
