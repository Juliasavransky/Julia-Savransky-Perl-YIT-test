import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import UpdateGenerator from './components/UpdateGenerator';

/* A. Create a component like in a sketch folder that includes:
            1. component with fixed height and width. Add box shadow to your component (you can see an example example2904.png)
            2. image, with fixed height and width,  should be with zoom animation on hover
            3. category name - with dynamic width due to the length of the text
            4. title - with dynamic height due to the length of the text, maximum 2 rows
            5. sub title - with dynamic height due to the length of the text, maximum 3 rows
            6. author name - with dynamic width due to the length of the text

In the example (test-absolute.html) all divs in component are in position absolute, just so you can use the placements and sizes.
You need to make it more dynamic and flexible.

  B.  Create div with fields for updating component:
        1. input to edit category name
        2. dropdown select to choose a background color of category name.
*/

function App() {
  const [selectedColor, setSelectedColor] = useState("#ed1c24");
  const [category, setCategory] = useState("אוכל");

  return (
    <div className="mainPage">
      <Card
        selectedColor={selectedColor}
        category={category}
      />
      <UpdateGenerator
        setSelectedColor={setSelectedColor}
        setCategory={setCategory}
      />
    </div>
  );
}

export default App;