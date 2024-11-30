import { useState } from "react"

const useActive=(initialAcive,datas)=>{
    const[active,setactive]=useState(initialAcive);
    const handlechange=(name)=>{
        setactive(name)
    }
    const activeData=datas.find((data)=>data.Title===active)
    return{
        handlechange,active,activeData
    }
   
}
export default useActive;