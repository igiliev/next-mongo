import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem } from "@mui/material";

const AllPosts = () => {
    const [ storePosts, setStorePosts ] = useState([]);
    const getPosts = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return axios.get( url ).then( (response) => {
            const allPosts = response.data;
            setStorePosts(allPosts);
        } );
    }
    useEffect(() => {
        getPosts();
    }, []);

    const mapPosts = storePosts.map( item => {
        return (
            <>
                <ListItem className="list-item" key={item.id}>Title: {item.title} </ListItem>
                <ListItem className="list-item" key={item.id + 101}>Description: {item.body}</ListItem>
            </>
        )
    } ); 

    return (
        <>
        <h1>All the posts</h1>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                { mapPosts }
            </List>
        </>
    )
}

export default AllPosts;
