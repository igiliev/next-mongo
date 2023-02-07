import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [ htmlEl, setHtmlEl ] = useState(null);
    const handleNavClick = (event) => {
        return setHtmlEl(event.currentTarget);
    }

    return (
        <nav onClick={handleNavClick}>
            <ul className="header-list">
                <li className="header-item"><Link href="/">Home</Link></li>
                <li className="header-item"><Link href="/all-posts">All Posts</Link></li>
                <li className="header-item"><Link href="/new-post">Add new post</Link></li>
            </ul>
        </nav>
    )
}

export default Header;