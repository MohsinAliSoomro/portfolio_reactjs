import React from 'react'
import Layout from '../../components/Layout';
import './style.css'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';

export default function Email() {
    

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVER_ID, process.env.REACT_APP_TEMPLETE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text)
          Swal.fire({
            title: 'Thanks for contact us we are come to you as soon as possible!',
            text: 'Great!',
            icon: 'success',            
          })
      }, (error) => {
        console.log(error.text)
          Swal.fire({
            title: 'Oopp... There is something error in newtwork please try again!',
            text: 'sorry for inconvient!',
            icon: 'error',            
          })
      });
        
    }
    return (
        <Layout>
            <div className="form-container">
                <h3 style={{textAlign:"center"}}>Email Me</h3>
                <form onSubmit={sendEmail}>
                    <div className="input-container">
                        <input type="text" name="from_name" placeholder="Your Name" />
                    </div>
                    <div className="input-container">
                        <input type="email" name="email_address" placeholder="Email Address" />
                    </div>
                    <div className="input-container">
                        <textarea rows="3" name="message" cols="50" placeholder="Write Message" />
                    </div>
                    <div className="button-container">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
