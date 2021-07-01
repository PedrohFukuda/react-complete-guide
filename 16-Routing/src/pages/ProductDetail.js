import { useParams } from "react-router";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product details</h1>
      <h1>{params.productId}</h1>
    </section>
  );
};

export default ProductDetail;
