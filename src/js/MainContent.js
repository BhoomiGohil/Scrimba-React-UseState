import React from "react";

export default function MainContent() {
  // Initializing state with default value "Yes"
  const [isImportant, setIsImportant] = React.useState("Yes");

  // Function to update the state to "No" when clicked
  function handleClick() {
    setIsImportant("No");
  }

  // Rendering the content with a clickable area that displays the current state
  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isImportant}</h1> {/* Displaying the current state */}
      </div>
    </div>
  );
}
