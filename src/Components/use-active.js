import { useState } from "react";

const useActive=({name})=>{
const[active,setactive]=useState(name)
const handlechange=(name)=>{
    setactive(name)
}
return{
    active,
    handlechange
}
}
export default useActive;