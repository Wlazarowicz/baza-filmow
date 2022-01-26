import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class loginComponent extends Component {
    state = {
        account: {
            username: "", password: ""
        },
        errors: {}
    };

    handleChangeRoute = (props) => {
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Login jest wymagany!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Hasło jest wymagane!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: this.state.account.username,
                password: this.state.account.password
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Błędny Login lub hasło!';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    render() {
        return <div className="loginComponent">
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="username">Login Użytkownika</label>
                    <input value={this.state.account.username}
                           name="username"
                           onChange={this.handleChange}
                           type="text"
                           className="form-control"
                           id="username"
                           aria-describedby="emailHelp"
                           placeholder="Tomek123"/>
                    {this.state.errors.username &&
                        <div className="alert alert-danger">{this.state.errors.username}</div>}

                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input value={this.state.account.password}
                           name="password"
                           onChange={this.handleChange}
                           type="password"
                           className="form-control"
                           id="password"
                           placeholder="*****"/>
                    {this.state.errors.password &&
                        <div className="alert alert-danger">{this.state.errors.password}</div>}

                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    }
}

export default loginComponent;
