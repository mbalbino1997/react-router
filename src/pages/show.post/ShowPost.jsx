import style from "./Show.post.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import placeholder from "../../assets/imgs/placeholder.jpg";

export default function ShowPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const BASE_URI = "http://localhost:3000";
    const navigate = useNavigate();
    function fetchData() {
        axios
            .get(`${BASE_URI}/posts/${id}`)
            .then((res) => {
                console.log(res.data)
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
                    <div className="container">
                        <h1>Dettagli del post {post.id}</h1>
                        <h2>{post.title}</h2>
                        <img className="img-detail" src={post.image ? post.image.includes("https") ? post.image : `${BASE_URI}/${post.image}` : placeholder} alt={post.title} />
                        <p>{post.content}</p>
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>
                    <div className="flex">
                        <button onClick={() => { id > 1 && navigate(`/blog/${+id - 1}`) }}>previous</button>
                        <button onClick={() => navigate(`/blog/${+id + 1}`)}>next</button>
                    </div>
                </>

            ) : (
                <div>Post non trovato</div>
            )}
        </div>
    );
}
