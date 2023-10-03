"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [category, setCategory] = useState("");

  const router = useRouter();

  const submitCategory = async (e) => {
    e.preventDefault();

    if (!category) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ category }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={submitCategory}
        className="flex flex-col gap-3 max-w-3xl mx-auto"
      >
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="category"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Category
        </button>
      </form>
    </>
  );
}
