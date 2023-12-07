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





function ProfileCard() {
    const [admins, setAdmins] = useState([])
    const getAdmins = () => {
        axios.get(`http://localhost:8080/admin/getAll`).then((response) => {
            let adminData = response.data
            setAdmins(adminData)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getAdmins()
    }, []);

    {admins.map((admin)=>{
        
        return (
            <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img src={admin.image} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                   {admin.adminName}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {admin.description}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                    <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-facebook" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <i className="fab fa-twitter" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <i className="fab fa-instagram" />
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    );
})}
}










function OurTeam() {
    return (
        <>
            {ProfileCard()}
        </>
    )
}



export default OurTeam