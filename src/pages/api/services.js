import axios from "axios";

export const getPosts = ( url ) => {
    return axios.get( url ).then( (response) => {
        const allPosts = response.data ? response.data : response;
        return allPosts;
    } );
}
 