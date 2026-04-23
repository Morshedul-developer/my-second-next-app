import Posts from "@/components/posts";
import { Suspense } from "react";

const PostsPage = () => {
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    return (
        <div>
            <h2>Posts</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Posts postsPromise={postsPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostsPage;