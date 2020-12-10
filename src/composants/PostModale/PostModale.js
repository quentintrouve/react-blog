import React, { Component } from 'react'
import axios from 'axios'

import './PostModale.css'

class PostModale extends Component {

    state = {
        post: []
    }

    componentDidUpdate() {
        if (this.props.id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then(response => {
                    this.setState({ post: response.data })
                })
        }
    }

    render() {

        return (
            this.props.id ?
                <div className="PostComplet">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>

                    <button className="btn btn-danger my-3 btnPost" onClick={this.props.clickCloseModal}>Fermer</button>

                </div>
                : null
        )


    }
}

export default PostModale;
