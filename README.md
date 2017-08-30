# E-Commerce site

Create an E-commerce Mock Site.

## Getting Started

- To get started you will need to use create-react-app to quickly scaffold a project. You should migrate your components into a components folder in the src directory and the styles into a styles folder in the src directory. Link up all pages to make sure they working and test using npm run start in the console, use Ctrl+c to exit.

- You will need use npm install --save react-router-dom in the terminal to save React Router 4 to your project dependencies and make it available for import.

- In your index.js file, you will need to import { BrowserRouter, Route, Switch } from react-router-dom.

- You should have a <BaseLayout> component that wraps the entire application as seen in the previous two assignments - it should contain a navigation bar using NavLink components.

- Your app should contain at least seven different components. The makeup and style of them are up to you but they should reflect at least 3 different categories of the e-store, along with an about page, and contact form.

- You should employee the use of <Link> components in at least three of the components.

- The 3 different category component should have pictures, descriptions and prices for items (at least 3 items per page). Store the data in a separate data folder and import it into the proper component.

- The final project should have a professional feel with attractive styling.

## Hard mode

- Add a cart component to your program, link each item from the website's different pages to be able to be purchased and stored in state and passed as props.

- Add the cart contents to local storage to save a user's choices.

- Be able to remove and change the quantity of the item in the cart.

## Results

Mockup in public main directory.
