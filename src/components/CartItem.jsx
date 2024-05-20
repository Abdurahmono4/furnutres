import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem } from "../features/cart/cartSlice";


function CartItem({cardItem}) {
    const dispatch =useDispatch();
    const {cartID,title,price,image,amount,company,productColor}=cardItem;
    const handleAmount =(e)=>{
        dispatch(editItem({cartID,amount:Number(e.target.value)}));
    }
    const removeItemFromTheCart =()=>{
        dispatch(removeItem({cartID}))
    };
  return (
    <article key={cardItem.cartID} className="mb-12 flex gap-y-4 sm:flex-row flex-wrap boder-b border-base-300 pb-6 last:border-b-0">
        <img src={image} alt={title} className="h-24 w-24 rounded-lg sm:h-32 lg:w-32 object-cover" />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-neutral-content">{company}</h4>
        <p className="capitalize text-sm mt-4 flex items-center gap-x-2">
            color:<span className="badge badge-sm" style={{backgroundColor:productColor}}></span>
        </p>
      </div>
     <div className="sm:ml-12">
         <div className="form-control max-w-xs  flex">
            <label className="label-text p-0">Amount</label>
         <select name="amount" id="amount" className="mt-2 select select-base select-bordered select-xs" value={amount} onChange={handleAmount}>
            {generateAmountOptions(amount+5)}
         </select>
         </div>
         <button className="mt-2 link-primary text-sm"onClick={removeItemFromTheCart}>remove</button>
     </div>
        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
     </article>
  )
}

export default CartItem