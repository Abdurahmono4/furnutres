import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";

const url = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const responseData = await customFetch(url, { params });
  const products = responseData.data.data;
  const meta = responseData.data.meta;
  return { products, meta };
};
function Products() {
  return (
    <div className="align-content py-20">
      <Filters/>
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
}
export default Products;