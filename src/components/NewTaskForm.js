// import React from "react";

// function NewTaskForm() {
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
