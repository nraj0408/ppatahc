//--------------
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useHistery } from "react-router-dom"; 




//-----------------

const Login = () => {

    const [show,setshow]=useState(false);

    const handleClick= () => setshow(!show);

    const toast=useToast();

    const [email,setEmail]=useState(); 
    const [password,setPassword]=useState();  
    const [loading,setLoading]=useState(); 
    const history=useHistery() ;   












//------------------
  return (
    <div>
      
    </div>
  )
}

export default Login
