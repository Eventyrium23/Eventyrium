import { useState,useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { MyContext } from "../../../MyContext.jsx";
import axios from "axios"; 
const MakeInv = ()=>{
    const context = useContext(MyContext)
    const [user,setUser]=useState(jwtDecode(JSON.stringify(window.localStorage.getItem('Token'))))
    const [friend, setFriend] = useState()
    const sendInv =   ()=>{
        
        const newInvitation = {
            receiver:friend ,
            sender: user.userName,
            avenue: context.placeChecked,
            status: 'pending'
          };
          axios.post('http://localhost:8080/invite/make',newInvitation).then((res)=>{
          console.log(res);})
    }

   const  handleFriend = (e)=>{
     setFriend(e.target.value)
    }
    return (
        
    <div>

        <form class=" w-[200px] mx-auto relative right-10 " >
            <h1>Send To</h1>
            <input placeholder="Choose a friend" onChange={handleFriend}/>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
         dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        <button onClick={sendInv} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium
         text-gray-900 focus:outline-none bg-[#a2a794] rounded-lg border border-gray-200 hover:bg-[#32342c]
          hover:text-white-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800
           dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Send</button>

      </form>
     
</div>
   

        
    )
}

export default MakeInv