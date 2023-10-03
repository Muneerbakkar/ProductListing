"use client";

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useState } from "react";

export default function Product({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <nav className="flex items-center mt-[-2%] bg-slate-800 px-8 py-3 text-white">
        {categories.map((c) => (
          <button
            onClick={() => handleCategoryClick(c.category)}
            className="mr-2"
          >
            {c.category}
          </button>
        ))}
      </nav>

      {[
        ...new Set(
          products
            .filter(
              (p) =>
                selectedCategory === null || p.category === selectedCategory
            )
            .map((p) => p.type)
        ),
      ].map(
        (type, index) =>
          selectedCategory !== null && (
            <button
              onClick={() => handleCategoryClick(type)}
              key={index}
              className="mr-2 underline"
            >
              {type}
            </button>
          )
      )}

      {[
        ...new Set(
          products
            .filter(
              (p) => selectedCategory === null || p.type === selectedCategory
            )
            .map((p) => p.os)
        ),
      ].map(
        (os, index) =>
          selectedCategory !== null && (
            <button
              onClick={() => handleCategoryClick(os)}
              key={index}
              className="mr-2 underline"
            >
              {os}
            </button>
          )
      )}

      {products
        .filter(
          (p) =>
            selectedCategory === null ||
            p.category === selectedCategory ||
            p.type === selectedCategory ||
            p.os === selectedCategory 
        )
        .map((p) => (
          <>
            <div
              key={p._id}
              className="max-w-3xl mt-8 mx-auto p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
            >
              <div>
                <h2 className="font-bold text-2xl">{p.name}</h2>
              </div>

              <div className="flex gap-2">
                <RemoveBtn id={p._id} />
                <Link href={`/editProduct/${p._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          </>
        ))}
    </>
  );
}
