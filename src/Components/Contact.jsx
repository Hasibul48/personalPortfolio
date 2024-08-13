import { Button } from 'flowbite-react'
import React, { useState } from 'react'

import emailjs from '@emailjs/browser'

function Contact() {
    const [messageStatus, setMessageStatus] = useState();
    const handleMessageSend = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.from_name.value.trim();
        const email = form.from_email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            return;
        }

        setMessageStatus(await emailjs.sendForm('service_tmw9zh5', 'template_uuc911s', form, 'Qimg0YhCTRJvY6fe4'));

        if (messageStatus) {
            alert('Message Sent Successfully!');
        }
    };

    return (

        <div className="container md:w-3/4 lg:px-28 md:border-4 md:shadow-md md:shadow-gray-500 md:border-themeColor md:py-24 rounded-3xl flex flex-col gap-5 mt-24 mx-auto px-4">
            <h3 className='text-center tracking-widest text-themeColor font-bold text-2xl'><span className='text-orange-300'>C</span>ont<span className='text-orange-300'>act m</span>e</h3>
            <form onSubmit={handleMessageSend}>
                <div className="flex flex-col">
                    <label htmlFor="name">Enter Your Name</label>
                    <input name='from_name' type="text" className='bg-transparent border-themeColor shadow-themeColor shadow-sm rounded-2xl mt-2' placeholder='Ex: John Doe' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Enter Your Email</label>
                    <input name='from_email' type="text" className='bg-transparent border-themeColor shadow-themeColor shadow-sm rounded-2xl mt-2' placeholder='Ex: example@gmail.com' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Enter Your Messege</label>
                    <input name='message' type="text" className='bg-transparent pb-20 border-themeColor shadow-themeColor shadow-sm rounded-2xl mt-2' placeholder='Ex: enter your own messege with details.....' />
                </div>
                <Button type='submit' className='w-1/2 mx-auto mt-6 rounded-full' gradientDuoTone="purpleToPink">Send Message</Button>
            </form>
        </div>
    )
}

export default Contact