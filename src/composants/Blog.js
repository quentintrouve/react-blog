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
        toggle: false
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
        this.setState({ idSelected: id, })
        this.setState({ toggle: true })
    }

    handleCloseModal = () => {
        this.setState({ toggle: false })
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
                    toggle={this.state.toggle}
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