import {Form,Link}  from "react-router-dom"
import {FormInput,SubmitBtn} from "../components"

function Login() {
  return (
    <div className="h-screen grid place-content-center">
  <Form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"  method="post">
    <div className="form-control">
      <h4 className="text-3xl font-bold text-center mb-4">Login</h4>
      <FormInput 
      type="email" 
      label="Email:"
      name="email"  
      defaultavlue ="test@gmail.com" 
      />
    </div>
      <FormInput 
      type="password" 
      label="Password:"
      name="password" 
      defaultavlue ="secret"
      />
    <div className="form-control mt-4">
       <SubmitBtn text="Login"/>
    </div>
      <button type="button" className="btn btn-secondary btn-block">Guset User</button>
        <p className="text-center">Not a member yet? 
          <Link className="link link-hover capitalize  text-blue-600" to="/register"> 
          {" "}
          Register
        </Link>
        </p>
  </Form>
</div>
)
}

export default Login