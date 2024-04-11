import React,{useState}from 'react'
import axios from axios;

function Read(){
    const [serverData,setServerData]=useState("")

    useEffect(()=>{
        const fetchData=async()=>{
        try{
            const response=await axios.get("http://localhost:8080/read/readfromserver")
            const dataFromserver=response.data.message;
            setServerData(dataFromServer)
        }
        catch(error){
            console.log("Error fetchinh data:",error)
        }
        fetchData();
    }
},[])
return(
    <div>
        {serverData}
    </div>
)
}
export default Read;