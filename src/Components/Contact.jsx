import { Button } from 'flowbite-react'
import React, { useState } from 'react'

import emailjs from '@emailjs/browser'

function Contact() {
    const [messageStatus, setMessageStatus] = useState();
    const [isLoading, setIsLoading] = useState();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleMessageSend = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        const form = e.target;
        const name = form.from_name.value.trim();
        const email = form.from_email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            setIsLoading(false);
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.')
            return;
        }

        setMessageStatus(await emailjs.sendForm('service_tmw9zh5', 'template_uuc911s', form, 'Qimg0YhCTRJvY6fe4'));

        alert("Message Sent Successfully!")
        setIsLoading(false)
    };

    return (

        <div className="container md:w-3/4 lg:px-28 md:border-4 md:shadow-md md:shadow-gray-500 md:border-themeColor md:py-24 rounded-3xl flex flex-col gap-5 mt-24 mx-auto px-4">
            <h3 className='text-center tracking-widest text-themeColor font-bold text-2xl'><span className='text-orange-300'>C</span>ont<span className='text-orange-300'>act m</span>e</h3>
            <form className='flex flex-col gap-4' onSubmit={handleMessageSend}>
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
                    <textarea name='message' className='bg-transparent h-40 border-themeColor shadow-themeColor shadow-sm rounded-2xl mt-2' placeholder='Ex: enter your own message with details.....' />
                </div>
                <Button disabled={isLoading} type='submit' className='w-1/2 mx-auto mt-6 rounded-full' gradientDuoTone="purpleToPink">{isLoading ? 'Loading...' : 'Send Message'}</Button>
            </form>
        </div>
    )
}

export default Contact