"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, name, category }) {
  const [newName, setNewName] = useState(name);
  const [newCategory, setNewCategory] = useState(category);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newName, newCategory }),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3 max-w-3xl mx-auto">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Name"
      />
      <input
        onChange={(e) => setNewCategory(e.target.value)}
        value={newCategory}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Category"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Product
      </button>
    </form>
  );
}
