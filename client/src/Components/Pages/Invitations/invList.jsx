import React, { useEffect, useState } from "react";
import { MdOutlineInsertInvitation,MdNotifications } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const InvitationList = () =>{
  const [list,setList] = useState([])
  const {userName} = jwtDecode(JSON.stringify(window.localStorage.getItem("Token")))
useEffect(()=>{
 const getList = ()=>{
  const obj = {sender: userName}
  axios.post('http://localhost:8080/invite',obj)
  .then((res)=>{
    setList(res.data)
  }).catch(err=>{
    console.log("error happen in invitation",err);
  })
 }
 getList()
},[])
return (
<div className="relative overflow-x-auto w-[310px] right-28 p-2">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-4 py-3">
                    Status
                </th>
                <th scope="col" className="px-4 py-3">
                    Sent To
                </th>
                <th scope="col" className="px-4 py-3">
                    date
                </th>
                
            </tr>
        </thead>
        {list && list.map((e)=>{
          return (
            <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {e.status === 'pending' && <FaRegCircleDot size={40} className="bg-yellow-600 border-[10px]"/>}
                   { e.status === 'accepted' && <FaRegCircleDot size={40} className="bg-green-600 border-[10px]"/>}
                   { e.status === 'declined' && <FaRegCircleDot size={40} className="bg-red-600 border-[10px]"/>}
                </th>
                <td className="px-4 py-4">
                    {e.receiver}
                </td>
                <td className="px-4 py-4">
                    {e.createdAt.substr(0,10)}
                </td>
              
            </tr>
        </tbody>
          )
        })
        
        }
    </table>
</div>

)
}
export default InvitationList