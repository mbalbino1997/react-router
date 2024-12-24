import Card from "../../components/card/Card.jsx"
import style from "./Index.post.module.css"
import { useState, useEffect } from "react";
import axios from "axios";
export default function IndexPost() {
    const [postsArray, setPostsArray] = useState([]);

    const BASE_URI = "http://localhost:3000"


    function fetchData() {
        axios.get(`${BASE_URI}/posts`)
            .then((res) => {
                setPostsArray(res.data)
            })
            .catch((err) => {
                console.error(err.message);
            })
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="container">
            <div className={style.row}>
                {postsArray.map((post) => (
                    post.published === 1 && (
                        <div className={style.col} key={post.id}>
                            <Card
                                URI={BASE_URI}
                                title={post.title}
                                image={post.image}
                                content={post.content}
                                tags={post.tags}
                                postId={post.id}
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
