import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import Post from "./Post"
import { useEffect, useState } from 'react';


function Posts() {
    const [data, setData] = useState([])
    useEffect(async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
            console.log('doc: ', doc.data());
            setData(data => [data, doc.data()])
        })
    }, [])
    console.log(`data`, data)
    return (
        <div>
            {data?.map((post, index) => {
                return <Post
                    key={index}
                    name={post.name}
                    message={post.message}
                    timestamp={post.timestamp}
                    image={post.image}
                    postImage={post.postImage}
                />
            })}
        </div>
    )
}
export default Posts
