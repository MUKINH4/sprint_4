

export default function NavItem({ linkTo, title }: { linkTo: string, title: string }) {
    return (
        <li>
            <a href={linkTo}>{title}</a>
        </li>
    );
}