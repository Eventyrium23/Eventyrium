import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
function OurTeam() {
    const { admins } = useContext(MyContext)
    return (
        <div className="flex lg:py-10 flex-wrap justify-center items-center gap-10">
            {admins.map((admin) => (
                <Card className="w-86" key={admin.id}>
                    <CardHeader floated={false} className="object-contain h-96">
                        <img src={admin.image} alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {admin.adminName}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            {admin.description}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient> <span className="font-bold">
                            {admin.projects}  </span></Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <Tooltip content="Like">
                            <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
                                <i className="fab fa-facebook" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
                                <i className="fab fa-twitter" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
                                <i className="fab fa-instagram" />
                            </Typography>
                        </Tooltip>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );

}

export default OurTeam;