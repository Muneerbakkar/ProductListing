"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [os, setOs] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, category, type, os }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-3xl mx-auto"
    >
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="category"
      />
      <input
        onChange={(e) => setType(e.target.value)}
        value={type}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="type"
      />
      <input
        onChange={(e) => setOs(e.target.value)}
        value={os}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="os"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Product
      </button>
    </form>
  );
}
