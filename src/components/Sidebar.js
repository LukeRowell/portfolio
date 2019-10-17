import React from 'react';
import profileImage from '../img/profile_pic3.PNG';
import githubImage from '../img/github_icon.png';
import linkedinImage from '../img/linkedin_icon2.PNG';
import speechbubbleImage from '../img/speechbubble4.png';

require('dotenv').config();
let Recaptcha = require('react-recaptcha');

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false,
            name: "",
            email: "",
            message: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recaptchaCallback = this.recaptchaCallback.bind(this);
    }

    handleClick(event) {
        let modal = document.getElementById("myModal");

        if (event.target.id === "myModal" || event.target.id === "close" || event.target.id === "contactLink") {
            this.state.display ? modal.style.display = 'none' : modal.style.display = 'block';
            this.setState({display: !this.state.display});
        } else if (event.target.id === "goButton") {
            this.state.display ? modal.style.display = 'none' : modal.style.display = 'block';
            this.setState({display: !this.state.display});
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validateForm() {
        let error;

        if (!this.state.name) {
          error = 'Name required';
        } else if (!this.state.email) {
          error = 'Email required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
          error = 'Invalid email address';
        } else if (!this.state.message) {
          error = 'Message required';
        }

        return error;
    }

    handleSubmit(event) {
        let modal = document.getElementById("myModal");
        let error = this.validateForm();

        if (error) {
            console.log(error);
        } else {
            console.log('Form completed');
            modal.style.display = 'none';
            this.setState({display: false});    
        }

        event.preventDefault();
    }
    
    recaptchaCallback(event) {
        console.log('Checked');
    }

    render() {
        return (
            <div className="menu">
                <div className="profilePic">
                    <img src={profileImage} alt={"profile"}></img>
                </div>
                <div className="name">
                    <h1>Luke Rowell</h1>
                </div>
                <div className="bio">
                    <p>Programmer and mathematics enthusiast.</p>
                    <br />
                </div>
                <div className="technologies">
                    <h3>Proficiencies</h3>
                    <p>
                        JavaScript &bull; React &bull; Node &bull; PostgreSQL &bull; Heroku &bull; HTML5 &bull; CSS &bull; Git &bull; C/C++ &bull; Python &bull; SFML
                    </p>
                </div>
                <div className="links">
                    <div>
                        <a href="https://github.com/LukeRowell?tab=repositories">
                            <img id="github" src={githubImage} alt={"Github"}></img>
                        </a>
                    </div>
                    <div></div>
                    <div>
                        <a href="https://www.linkedin.com/in/luke-rowell-b28a60bb/">
                            <img id="linkedin" src={linkedinImage} alt={"LinkedIn"}></img>
                        </a>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="contact">
                        <a id="contactLink" onClick={this.handleClick}>
                            <img id="contactImg" src={speechbubbleImage} alt={"Contact"}></img>
                            &nbsp;Contact&nbsp;
                        </a>
                    </div>
                    <div id="myModal"
                        className="modal" 
                        onClick={this.handleClick}
                    >
                        <div className="modal-content">
                            <h1>Contact</h1>
                            <span id="close" 
                                className="close" 
                                onClick={this.handleClick}
                            >
                                &times;
                            </span>
                            <div></div>
                            <div className="emailForm">
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        Name:
                                    </label>
                                    <input id="nameField" 
                                        name="name"
                                        type="text" 
                                        onChange={this.handleChange}
                                    />
                                    <label>
                                        Email:
                                    </label>
                                    <input id="emailField" 
                                        name="email"
                                        type="text" 
                                        onChange={this.handleChange}
                                    />
                                    <label>
                                        Message:
                                    </label>
                                    <textarea id="messageField" 
                                        name="message"
                                        onChange={this.handleChange}
                                    />
                                    <h3 id="nameError">Name required</h3>
                                    <h3 id="emailError">Email required</h3>
                                    <h3 id="messageError">Message required</h3>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <label>
                                        Verification:
                                    </label>
                                    <div id="recaptcha">
                                        <Recaptcha
                                            onloadCallback={this.recaptchaCallback}
                                            sitekey="6Lesvb0UAAAAABWdLkMWZgGHMR0hVVYawNZYzUnV"
                                        />
                                    </div>
                                    <input id="submitButton"
                                        type="submit" 
                                        value="Send"
                                        onSubmit={this.handleSubmit} 
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;