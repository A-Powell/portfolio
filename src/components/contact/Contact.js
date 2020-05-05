import React, { useState } from 'react';
import axios from 'axios';
import "./styles.css";


const Contact = () => {

    const [form, setForm] = useState({ name: '', surname: '', message: '', email: '', phone: '', buttonText: 'Submit' })


    const resetForm = () => {
        setForm({ name: '', surname: '', message: '', email: '', phone: '', buttonText: 'Message Sent' })
    }


    const formSubmit = (e) => {
        e.preventDefault()

        setForm({ buttonText: '...sending' })

        let data = {
            name: form.name,
            surname: form.surname,
            email: form.email,
            phone: form.phone,
            message: form.message
        }

        axios.post('https://immense-earth-04678.herokuapp.com/api/v1', data)
            .then(res => {
                setForm({ sent: true }, resetForm())
            })
            .catch(() => {
                console.log('Message not sent')
            })

    }

    const handleChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    return (
        <div className="container">
            <h1>Contact me</h1>

            <div className="row">

                <div className="col-lg-8 col-lg-offset-2">


                    <form id="contact-form" role="form" onSubmit={(e) => formSubmit(e)}>

                        <div className="messages"></div>

                        <div className="controls">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="form_name">First Name *</label>
                                        <input id="form_name" type="text" name="name" className="form-control" onChange={handleChanges} value={form.name} placeholder="Please enter your First Name *" required="required" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="form_lastname">Last Name *</label>
                                        <input id="form_lastname" type="text" name="surname" className="form-control" onChange={handleChanges} value={form.surname} placeholder="Please enter your Last Name *" required="required" />

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="form_email">Email *</label>
                                        <input id="form_email" type="email" name="email" className="form-control" onChange={handleChanges} value={form.email} placeholder="Please enter your email *" required="required" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="form_phone">Phone</label>
                                        <input id="form_phone" type="tel" name="phone" className="form-control" onChange={handleChanges} value={form.phone} placeholder="Please enter your phone" />

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="form_message">Message *</label>
                                        <textarea id="form_message" name="message" className="form-control" value={form.message} placeholder="Message for me *" rows="4" required onChange={handleChanges}></textarea>

                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input type="submit" className="btn btn-success btn-send" value={form.buttonText} />
                                </div>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact;