function FormInput({name,type,label,defaultvalue}){
    return (
      <div className="form-control">
           <label className="w-full">
              <div className="label">
                <span className="label-text capitalize">
                    {label}
                </span>
              </div>
              <input 
              type={type}
              name={name} 
              placeholder="Type here"
              defaultValue={defaultvalue}
              className="input input-bordered w-full"
              />
           </label>
      </div>
    )
  }
  
export default FormInput