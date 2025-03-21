import React, { useState } from 'react';

export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({
            username:'',
            email:'',
        })
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{
                maxWidth: '300px',
                margin: 'auto',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
            }}
        >
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            <button 
                type="submit"
                style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Submit
            </button>
        </form>
    )
}