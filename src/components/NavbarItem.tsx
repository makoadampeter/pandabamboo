import './NavbarItem.css';

interface NavbarItemProps {
    title: string;
}

export default function NavbarItem({ title }: NavbarItemProps) {
    return (
        <div className="NavbarItem">
            {title}
        </div>
    );
}