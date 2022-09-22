import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsToUse, setItemsToUse] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    console.log("handle search: ", event.target.value)
    const inputValue = event.target.value
    if(!inputValue){
      setItemsToUse(items)
    }else{
      const matchedVals = items.filter(item => item.name.includes(event.target.value))
      setItemsToUse(matchedVals)
    }
  }

  function onItemFormSubmit(newItem){
    setItemsToUse([...itemsToUse, newItem])
  }

  const itemsToDisplay = itemsToUse.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
