import React, { Component } from 'react'
import axios from 'axios'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
import Post from './Post/Post'

class Blog extends Component {
    state = {
        posts: [],
        idSelected: null,
        postSelected: []
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

    handleClick = id => {
        const postSelected = this.state.posts.filter(post =>
            post.id === id
        )
        console.log(postSelected)
        this.setState({
            idSelected: id,
            postSelected: postSelected
        })
    }

    handleCloseModal = () => {
        this.setState({ idSelected: null })
    }

    render() {

        return (
            <div>
                <section>
                    <NvPost />
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale
                    id={this.state.idSelected}
                    clickCloseModal={this.handleCloseModal} />
                <section className="Posts">
                    {this.state.posts.map(post => {
                        return <Post title={post.title}
                            author={post.author}
                            key={post.id}
                            clicked={() => this.handleClick(post.id)} />
                    })}
                </section>

            </div>
        );
    }
}

export default Blog;