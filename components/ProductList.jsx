import Product from "./Products";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products", error);
  }
};

const getCategories = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading categories", error);
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
