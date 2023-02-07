import { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import { getPosts } from "../api/services";

export const getStaticProps = async () => {
    const fetchStaticPosts = await getPosts("https://jsonplaceholder.typicode.com/posts");
    return {
        props: {
            data: fetchStaticPosts
        }
    }
}

const AllPosts = (props) => {
    const [ storeMongoPosts, setStoreMongoPosts ] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            return await getPosts('http://localhost:3001/mongoPosts').then( response => setStoreMongoPosts(response) );
        } 
        return fetchData;
    }, []);

    const mapPosts = props.data.concat(storeMongoPosts).map( item => (
        <>
            <ListItem className="all-posts-list-item" key={item.id}><strong>Title:</strong> {item.title} </ListItem>
            <ListItem className="all-posts-list-item" key={item.id + 101}><strong>Description:</strong> {item.body}</ListItem>
        </>
    ) ); 

    return (
        <>
        <h1>All the posts</h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                { mapPosts }
            </List>
        </>
    )
}

export default AllPosts;
