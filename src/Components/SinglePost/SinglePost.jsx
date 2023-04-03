import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = ({post}) => {
    const {id,title,body}=post;
    const navigate = useNavigate();
    const handleNavigation= ()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className="post">
            <h5>ID : {id}</h5>
            <h5>{title} </h5>
            <Link to={`/post/${id}`} > Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <button onClick={handleNavigation}>with button handler</button>

        </div>
    );
};

export default SinglePost;