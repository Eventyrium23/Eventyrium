import axios from "axios";
import { useEffect, useState } from "react";


import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Avatar,
    IconButton,
    Tooltip,
    Tabs,
    TabsHeader,
    Tab,
    CardFooter,
} from "@material-tailwind/react";

function Organization() {
    const [data, setData] = useState([]);
    const [placeD, setPlacesD] = useState([]);
    const [packD, setPackD] = useState([]);
    const [decorationD, setDecorationD] = useState([]);
    const [foodD, setFoodD] = useState([]);

    const [tab, setTab] = useState("all");
    const [tabHead, setTabHead] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [limitPage, setLimitPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    useEffect(() => {
        async function fetchData() {
            try {
                const placesData = await axios.get('http://localhost:8080/places/all');
                const decorationsData = await axios.get('http://localhost:8080/decorations/all');
                const foodsData = await axios.get('http://localhost:8080/foods/all');
                const packsData = await axios.get('http://localhost:8080/packs/all');
                setData([
                    ...packsData.data,
                    ...placesData.data,
                    ...decorationsData.data,
                    ...foodsData.data,
                ]);

                setPlacesD(placesData.data);
                setPackD(packsData.data);
                setFoodD(foodsData.data);
                setDecorationD(decorationsData.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const TABS = [
        { label: "All", value: "all" },
        { label: "Packs", value: "packs" },
        { label: "Places", value: "places" },
        { label: "Decorations", value: "decorations" },
        { label: "Foods", value: "foods" },
    ];

    useEffect(() => {
        switch (tab) {
            case "places":
            case "packs":
                setTabHead(["Items", "Name", "Description", "Price", "Location", "Edit"]);
                break;
            case "decorations":
                setTabHead(["Items", "Name", "Stock", "Price", "Edit"]);
                break;
            case "foods":
                setTabHead(["Items", "Name", "Specialite", "Price", "Edit"]);
                break;
            default:
                setTabHead(["Items", "Name", "Price", "Edit"]);
        }
        setLimitPage(Math.ceil(getDataForTab().length / itemsPerPage));
        setCurrentPage(1);
    }, [tab]);

    useEffect(() => {
        handelLimitData();
    }, [currentPage, tab]);

    function getDataForTab() {
        switch (tab) {
            case "all":
                return data;
            case "places":
                return placeD;
            case "packs":
                return packD;
            case "decorations":
                return decorationD;
            case "foods":
                return foodD;
            default:
                return data;
        }
    }

    function handelLimitData() {
        const newData = getDataForTab();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = newData.slice(startIndex, endIndex);

        setCurrentData(slicedData);
    }

    function handleShowMore() {
        if (currentPage < limitPage) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    }
    function handlePrevious() {
        if (currentPage != 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    }

    // --------------------------------------- 5 AM motetttttttt 10/12/2023
    async function addItem(e) {
        e.preventDefault()
        const response = await axios.post()
    }


    return (
        <Card className="flex   m-auto h-full w-full  mt-10  max-w-6xl">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Items List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all items
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button onClick={() => setTab("all")} variant="outlined" size="sm">
                            view all
                        </Button>
                        <Button className="flex items-center gap-3" size="sm" onClick={addItem}>
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add items
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader >
                            {TABS.map(({ label, value }) => (
                                <Tab onClick={() => setTab(value)} key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {tabHead.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>

                        {currentData.map(
                            ({ image, name, location, description, price, specialite, stock }, index) => {
                                return (
                                    <tr key={name}>
                                        <td className={name}>
                                            <div className="flex justify-center items-center gap-3">
                                                <Avatar src={image} alt={name} size="md" />
                                            </div>
                                        </td>

                                        <td className={name}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>

                                        {tab != "all" && <td className={name}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal "
                                            >
                                                {description || specialite || stock}
                                            </Typography>
                                        </td>
                                        }


                                        <td className={name}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {price} DT
                                            </Typography>
                                        </td>


                                        {tab != "all" && location && <td className={name}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {location}
                                            </Typography>
                                        </td>}



                                        <td className={name}>
                                            <Tooltip content="Edit Item">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>

                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {currentPage} of {limitPage}
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm" onClick={handlePrevious} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm" onClick={handleShowMore} disabled={currentPage === limitPage}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default Organization;