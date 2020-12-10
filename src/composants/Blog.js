import React, { Component } from 'react'
import axios from 'axios'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
import Post from './Post/Post'

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const articles = response.data.slice(0, 4);
                const postWithAuthor = articles.map(article => {
                    return {
                        ...article,
                        author: 'Hugo'
                    }

                })
                this.setState({
                    posts: postWithAuthor
                })
            });
    }

    render() {

        return (
            <div>
                <section>
                    <NvPost />
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale />
                <section className="Posts">
                    {this.state.posts.map(post => {
                        return <Post title={post.title} author={post.author} key={post.id} />
                    })}
                </section>

            </div>
        );
    }
}

export default Blog;