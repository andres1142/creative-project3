import React from "react";


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            message: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeMessage = this.handleChangeMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event) {
        this.setState({firstName: event.target.value})
    }

    handleChangeLastName(event) {
        this.setState({lastName: event.target.value})
    }

    handleChangePhone(event) {
        this.setState({phoneNumber: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.checkFilled()) {
            alert('Your message has been sent')
        } else {
            alert('Please make sure your fill all the fields before submitting.')
        }

    }

    checkFilled() {
        return !(this.state.firstName === '' || this.state.last === '' ||
            this.state.email === '' || this.state.email === '');
    }

    render() {
        return (
            <body>
                <div className={'title_holder'}>
                    <h1>Contact</h1>
                    <h3>
                        We do appreciate every suggestion and feedback. We will reach out to you as soon as possible.
                    </h3>
                </div>

                <form className={'about_form'} onSubmit={this.handleSubmit}>
                    <div className="questions_form">

                        <label className={'firstName_label'}>
                            <div className="label_field">
                                First Name:
                            </div>

                            <input className={'inputField'} type='text' value={this.state.firstName}
                                   onChange={this.handleChangeName}/>
                        </label>
                        <label className={'lastName_label'}>
                            <div className="label_field">
                                Last Name:
                            </div>
                            <input className={'inputField'} type='text' value={this.state.lastName}
                                   onChange={this.handleChangeLastName}/>
                        </label>
                        <label className={'phone_label'}>
                            <div className="label_field">
                                Phone: (Optional)
                            </div>
                            <input className={'inputField'} type='text' value={this.state.phoneNumber}
                                   onChange={this.handleChangePhone}/>
                        </label>
                        <label className={'email_label'}>
                            <div className="label_field">
                                Email:
                            </div>
                            <input className={'inputField'} type='email' value={this.state.email}
                                   onChange={this.handleChangeEmail}/>
                        </label>
                        <label className={'message_label'}>
                            <input className={'inputField'} type='text' value={this.state.message}
                                   onChange={this.handleChangeMessage}/>
                        </label>
                    </div>
                    <div className={'contact_button'}>
                        <input className={'submit_button'} type="submit" value="Contact"/>
                    </div>
                </form>
            </body>
        );
    }
}