import { Link } from 'react-router-dom';
import './NavbarItem.css';

interface NavbarItemProps {
    title: string;
    linkTo: string;
}

export default function NavbarItem({ title, linkTo }: NavbarItemProps) {
    return (
        <Link to={linkTo} className="NavbarItem">
            {title}
        </Link>
    );
}