import { useSelector, useDispatch } from "react-redux";
import {selectAllPosts, getPostsError, getPostsStatus, fetchPosts} from "./postsSlice";
// import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";


const PostsList = () => {
    // const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    // useEffect(()=> {
    //     if (postStatus === 'idle') {
    //         dispatch(fetchPosts())
    //     }
    // }, [postStatus, dispatch])

    // const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    // const renderedPosts = orderedPosts.map(post => (
        
    // ))

    let content;
    console.log(postStatus);
    if (postStatus==='loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus==='succeeded') {
        
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        console.log(posts);
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>
    }
    
    return (
        <section>
            {content}
        </section>
    )
}

export default PostsList 