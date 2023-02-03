import { List, ListItem } from "@mui/material";

const { default: Link } = require("next/link")

const Header = () => {
    return (
        <nav>
            <List>
                <ListItem><Link href="/">Home</Link></ListItem>
                <ListItem><Link href="/all-posts">All Posts</Link></ListItem>
                <ListItem><Link href="/new-post">Add new post</Link></ListItem>
            </List>
        </nav>
    )
}

export default Header;