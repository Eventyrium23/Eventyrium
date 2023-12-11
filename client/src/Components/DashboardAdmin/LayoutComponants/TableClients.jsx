import axios from "axios";
import { useEffect, useState } from "react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
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

function TableClients() {
    const [data, setData] = useState([]);


    const [currentData, setCurrentData] = useState([]);
    const [limitPage, setLimitPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        async function fetchData() {
            try {
                const usersData = await axios.get('http://localhost:8080/user/getAll');
                setData(usersData);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);



    useEffect(() => {
        handelLimitData();
        setLimitPage(Math.ceil(data.length / itemsPerPage));
    }, [currentPage]);


    function handelLimitData() {
        const newData = data
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
    const tabHead = ["Client", "Phone", "Item", "Price", "Date", "Edit"]



    return (
        <Card className="flex h-full w-full mt-20 m-auto  md:mt-24  max-w-6xl">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Clients List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Users
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button onClick={() => setTab("all")} variant="outlined" size="sm">
                            view all
                        </Button>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader >

                            <Tab onClick={() => window.location.reload()}>
                                &nbsp;&nbsp;ALL&nbsp;&nbsp;
                            </Tab>

                        </TabsHeader>
                    </Tabs>

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

                        {/* {currentData.map(
                            ({ userName, email, phone, date }, index) => {
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
                        )} */}
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

export default TableClients;




function Organization() {



}
