import { useLoaderData,Link } from "react-router-dom"
import {formatPrice} from "../utils"

function ProductsGrid() {
  const {products}=useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {products.map((product)=>{
            console.log(product);
            const {title,price,image}=product.attributes;
            const dollarAmount =formatPrice(price);
            return(
                <Link className="card w-full shadow hover:shadow-2xl transition duration-300 "
                  key={product.id}
                  to={`/products/${product.id}`}
                >
                 <figure className="px-4 pt-4">
                    <img className="rounded-xl h-64 md:h-48 w-full object-cover" 
                    src={image} 
                    alt={title} />
                 </figure>
                   <div className="card-body items-center text-center">
                      <h2 className="card-title capitalize tracking-wider">{title}</h2>
                      <span className="text-secondary">{dollarAmount}</span>
                   </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ProductsGrid