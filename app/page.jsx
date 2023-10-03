import Product from "@/components/Products";

const getProducts = async () => {
const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/products` ,{
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products", error);
    return { products: [] }; 
  }
};

const getCategories = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/categories`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading categories", error);
    return { categories: [] }; 
  }
};

export default async function ProductList() {
  const { products } = await getProducts();
  const { categories } = await getCategories();

  return (
    <>
      <Product products={products} categories={categories} />
    </>
  );
}
