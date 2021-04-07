import React from 'react'

const ContactForm = () =>{
    return(
        <div className='contact'>
            <div className='contact-text card panel'>
                <h2>GET IN TOUCH</h2>
                <p className='contact-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus fugiat facere dolor debitis perspiciatis ullam veritatis aspernatur quos reprehenderit! Aut itaque tenetur impedit placeat deleniti. Reprehenderit, quisquam quos. Ad.</p>
            </div>
            <div className='contact-form bg-mid card panel'>
                <h3 className='form-title'>Contact Form</h3>
                <div className='row row2'>
                    <div className='input-group'>
                        <label htmlFor='contact-name'>
                            Name
                        </label>
                        <input type='text' id='contact-name'/>
                    </div>
                    <div className='input-group mail'>
                        <label htmlFor='contact-mail'>
                            Email Address
                        </label>
                        <input type='text' id='contact-mail'/>
                    </div>
                </div>
                <div className='input-group'>
                    <label htmlFor='contact-msg'>
                        Message
                    </label>
                    <textarea type='text' id='contact-msg'/>
                </div>
                <button className='clear-btn bg-accent'>Send</button>
            </div>
        </div>
    )
}

export default ContactForm