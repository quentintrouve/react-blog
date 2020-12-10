import React, { Component } from 'react'

import './PostModale.css'

class PostModale extends Component {

    render() {

        return (
            this.props.id ?
                <div className="PostComplet">
                    <h1>Titre</h1>
                    <p>Contenu</p>

                    <button className="btn btn-danger my-3 btnPost" onClick={this.props.clickCloseModal}>Fermer</button>

                </div>
                : null
        )


    }
}

export default PostModale;
