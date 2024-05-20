import { Link,Form, useActionData } from "react-router-dom";
import { FormInput,SubmitBtn } from "../components";

import {useRegister} from "../hooks/userRegister";
import { useEffect } from "react";

export const action =async({request})=>{
  let formData =await request.formData();
  let displayName =formData.get("displayName");
  let photoURL =formData.get("photoURL");
  let email =formData.get("email");
  let password =formData.get("password");


  return {displayName,photoURL,email,password};
}

function Register() {
  const data =useActionData();
  const {register} =useRegister();

  useEffect(()=>{
    if(data){
      register(data);
    }
  },[data]);
  return(
    <div className="h-screen grid place-content-center">
    <Form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"  method="post">
      <div className="form-control">
        <h4 className="text-3xl font-bold text-center mb-4">Register</h4>
        <FormInput 
        type="text" 
        label="Username:"
        name="username"
        // defaultvalue="user" 
        />
         <FormInput 
        type="url" 
        label="Photo URL:"
        name="photoURL"
        // defaultvalue="https://..." 
        />
        <FormInput 
        type="email" 
        label="Email:"
        name="email"  
        defaultavlue ="test@gmail.com"
         />
        <FormInput 
        type="password" 
        label="Password:"
        name="password"  
        defaultavlue ="secret"
         />
      </div>
      <div className="form-control mt-4">
         <SubmitBtn text="register"/>
      </div>
          <p className="text-center">Already a member? 
            <Link className="link link-hover capitalize  text-blue-600" to="/login"> 
            {" "}
            Login
          </Link>
          </p>
    </Form>
  </div>  
  )
 }
  
  export default Register