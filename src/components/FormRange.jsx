import { formatPrice } from "../utils"
import { useState } from "react"

function FormRange({ name, label, size }) {
    const step = 1000
    const maxPrice = 10000
    const [selectPrice, setSelectPrice] = useState(maxPrice)
    return (
        <div className="form-control">
            <label htmlFor={name}></label>
            <input type="select" />
            <label className={`label cursor-pointer`} htmlFor={name}>
                <span className=" label-text capitalize">{label}</span>
                <span>{formatPrice(selectPrice)}</span>
            </label>
            <input type="range" name={name} min={0} max={maxPrice} step={step} value={selectPrice} onChange={(e) => setSelectPrice(e.target.value)}
                className={`range range-primary ${size}`} />
            <div className="w-full flex justify-between text-xs px-2 mt-2">
                <span className="font-bold text-md">0</span>
                <span className="font-bold text-md">Max:{formatPrice(maxPrice)}</span>
            </div>
        </div>
    )
}
export default FormRange