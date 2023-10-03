import EditProductForm from "@/components/EditProductForm";

const getProductsById = async (id) => {
const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/products/${id}`,{
      cache:"no-store"
    })

    if(!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function EditProduct({params}) {
  const {id} = params;
  const {product} = await getProductsById(id);
  const {name,category} = product;
  return <EditProductForm id={id} name={name} category={category}/>;
}
