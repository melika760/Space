import { useState } from "react"

const useActive=()=>{
    const[active,setactive]=useState("Moon");
    const handleChange=(name)=>{
        setactive(name)
    }
    return{
        handleChange,active
    }
}
export default useActive;