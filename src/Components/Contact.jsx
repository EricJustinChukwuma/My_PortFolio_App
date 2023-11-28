import React, { useState } from 'react'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target;
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='' method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 wi-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input 
                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                        type='text' 
                        name='name' 
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input 
                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                        type='text' 
                        name='phone' 
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type='text' 
                    name='subject' 
                    value={formData.subject}
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea 
                    className='border-2 rounded-lg p-3 border-gray-300' 
                    rows='10' 
                    name='message' 
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button 
                className='text-center w-full bg-[#001b5e] p-4 mt-4 rounded-lg text-gray-100 font-semibold' 
                type='submit'
            >
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact