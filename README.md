
# React State Example

This project demonstrates a simple React application that uses state management to update the UI when the user interacts with it. The application renders a component that displays whether the state is important or not, and it updates dynamically when clicked.

## Project Structure

```
- js/
  - MainContent.js
- styles/
  - Index.css
- index.js
```

### `js/MainContent.js`

This file contains the `MainContent` component, which handles the state management and interaction. It uses React's `useState` hook to manage whether the text shows "Yes" or "No" when clicked.

```jsx
import React from "react";

export default function MainContent() {
  const [isImportant, setIsImportant] = React.useState("Yes");

  function handleClick() {
    setIsImportant("No");
  }

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}
```

- **useState**: Initializes the state with "Yes" and provides a way to update the value.
- **handleClick**: Changes the state to "No" when the element is clicked.

### `styles/Index.css`

The CSS file styles the `MainContent` component, providing basic styling for the layout.

### `index.js`

This file is the entry point of the application. It imports the `MainContent` component and renders it to the DOM using React's `createRoot` method.

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import MainContent from "./js/MainContent";
import "./styles/Index.css";

const rootElement = document.querySelector("#root");

if (!rootElement) throw new Error("Failed to find the root h1");

const root = createRoot(rootElement);

root.render(<MainContent />);
```

- **createRoot**: Used to initialize the root for rendering the React component.
- **root.render**: Renders the `MainContent` component inside the root element.

## Getting Started

### Prerequisites

- Node.js
- React

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

### Running the App

To start the application, run the following command:

```bash
npm start
```

This will launch the app in your default browser at `http://localhost:3000`.

## Key Concepts

- **React State**: The project showcases how to manage state using the `useState` hook in React.
- **Event Handling**: Clicking on the text updates the state, demonstrating how user interactions can trigger state changes.

## License

This project is licensed under the MIT License.
