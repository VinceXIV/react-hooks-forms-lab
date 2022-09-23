import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [category, setCategory] = useState("produce")
  const [name, setName] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    props.onItemFormSubmit(
      {
        id: uuid(),
        name: name,
        category: category
      }
    )
  }


  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
