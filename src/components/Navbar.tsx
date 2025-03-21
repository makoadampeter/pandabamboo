import "./Navbar.css";
import NavbarItem from "./NavbarItem";

// The global navbar used on every page to navigate the application
export default function Navbar() {
    return (
        <>
            <div id="navbar">
                <NavbarItem title="Home"></NavbarItem>
                <NavbarItem title="Recipes"></NavbarItem>
                <NavbarItem title="Ingredients"></NavbarItem>
                <NavbarItem title="Pre-made food"></NavbarItem>
                <NavbarItem title="Drinks"></NavbarItem>
                <NavbarItem title="Shopping list"></NavbarItem>
                <NavbarItem title="Settings"></NavbarItem>
            </div>
        </>
    );
}