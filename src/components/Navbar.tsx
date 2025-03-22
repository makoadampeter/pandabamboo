import "./Navbar.css";
import NavbarItem from "./NavbarItem";

// The global navbar used on every page to navigate the application
export default function Navbar() {
    return (
        <div id="navbar">
            <NavbarItem title="Home" linkTo="/"></NavbarItem>
            <NavbarItem title="Recipes" linkTo="/recipes"></NavbarItem>
            <NavbarItem title="Ingredients" linkTo="/ingredients"></NavbarItem>
            <NavbarItem title="Pre-made food" linkTo="/premade"></NavbarItem>
            <NavbarItem title="Drinks" linkTo="/drinks"></NavbarItem>
            <NavbarItem title="Shopping list" linkTo="/shoppinglist"></NavbarItem>
            <NavbarItem title="Settings" linkTo="/settings"></NavbarItem>
        </div>
    );
}