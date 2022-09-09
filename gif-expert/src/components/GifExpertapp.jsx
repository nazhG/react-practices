import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertapp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (cat) => {
    if (categories.indexOf(cat) === -1) {
      setCategories([cat, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExpertapp</h1>

      <AddCategory onNewCategory={(cat) => onAddCategory(cat)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
