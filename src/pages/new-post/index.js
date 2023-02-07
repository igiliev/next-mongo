import { Button, TextField, TextareaAutosize } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

const NewPost = () => {
    const titleRef = useRef();
    const bodyRef = useRef();
    const [ titleValue, setTitleValue ] = useState('');
    
    //Ref on the title input doesn't work for some reason
    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        const title = titleValue; 
        const body = bodyRef.current.value;
        const combineData = { 
            title,
            body
         }

        axios.post('http://localhost:3001/create', combineData);
    }

    return (
        <>
            <p>Add a new post here baby</p>
            <form onSubmit={handleSubmit}>
                <div className="form-row m-10">
                    <label htmlFor="title">Title of the post</label>
                    <TextField
                        ref={titleRef} 
                        id="title" 
                        onChange={handleTitleChange}
                        variant="outlined" />
                </div>

                <div className="form-row m-10">
                    <label htmlFor="content">Add the content of the post here</label>
                    <TextareaAutosize
                        ref={bodyRef}
                        style={{ width: 400, height: 150 }}
                        id="content" />
                </div>

                <div className="form-row">
                    <Button type="submit" variant="contained">Submit post</Button>
                </div>
            </form>
        </>
    )
}

export default NewPost;
