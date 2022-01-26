import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class movieContainer extends Component {

    render() {
        return (<div className="movieContainer">
            <div className="movieTitle">{this.props.title}</div>
            <br/>
            <div className="movieDescription"> {this.props.content}</div>
        </div>)

    }
}

export default movieContainer;
