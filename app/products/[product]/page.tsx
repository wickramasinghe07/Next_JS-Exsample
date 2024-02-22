export default function ProductDetails({
    params,
}: {
    params:{ productID: string };
}) {
  return <h1>Contact {params.productID}</h1>;
}
