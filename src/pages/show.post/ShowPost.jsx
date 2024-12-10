import style from "./Show.post.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function ShowPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const BASE_URI = "http://localhost:3000";
    const navigate = useNavigate();
    function fetchData() {
        axios
            .get(`${BASE_URI}/posts/${id}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.error(err.message);
                setPost(null);
            });
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
            {post ? (
                <>
                    <h1>Dettagli del post {post.id}</h1>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.content}</p>
                    <button onClick={() => navigate(-1)}>Back</button>
                </>
            ) : (
                <div>Post non trovato</div>
            )}
        </div>
    );
}
