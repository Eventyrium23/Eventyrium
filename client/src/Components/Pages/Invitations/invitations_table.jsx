
import React, { useState } from "react";
import {
  Drawer,
  Button,

} from "@material-tailwind/react";
import LOGO from "../../../assets/LOGO.png"
import InvitationList from "./invList";
import MakeInv from "./makeInv";
import { MdOutlineInsertInvitation,MdNotifications } from "react-icons/md";
import { MdOutlineBackspace } from "react-icons/md";


const InvitationTable = ()=>{
    const [open, setOpen] = useState(false);
  
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false); 
    const [view,setView]= useState('drawer')
    
return (
    <React.Fragment>
    <Button onClick={openDrawer}>Invitation Table</Button>
   <Drawer open={open} onClose={closeDrawer} className="w-[300px]">
    
    <div className="grid g rid-cols-1	 items-center justify-between px-4 pb-2">
       <img src={LOGO}/>
       {view !== 'drawer' && <MdOutlineBackspace onClick={()=>setView('drawer')}/>}
       <div className="items-center grid grid-cols-1 relative  left-20 top-20 w-[100px] ">
        { view === 'drawer' &&

            <div>

       <button type="button" className="text-white bg-[#5e693f] hover:bg-[#32342c]/90 focus:ring-4 
       focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
       items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2" onClick={()=>setView('makeInv')}>
        <MdOutlineInsertInvitation size={28}/>
</button>
<h1 className="text-1xl relative left-1">Your events</h1>
       <button type="button" className="text-white bg-[#5e693f] hover:bg-[#32342c]/90 focus:ring-4 
       focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
       items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 relative top-14" onClick={()=>setView('list')}>

         <MdNotifications size={28}/> 
        
         
</button>
<h1 className="text-1xl relative left-1 top-14">Invitations</h1>
            </div>
        }
 { view === 'list' && <InvitationList/>}
 { view === 'makeInv' && <MakeInv/>}
       </div>
    </div>

    </Drawer>
  </React.Fragment> 
)

}
export default InvitationTable;