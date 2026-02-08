import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = existingUsers.find(u => u.email === formData.email && u.password === formData.password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.dispatchEvent(new Event('auth-change'));
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-sky-100 to-sky-300 pt-20">
            <div className="bg-sky-300 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

                {error && (  
                    <div className="bg-gray-500 border border-gray-100 text-red-500 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sky-400 text-sm font-medium mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full  border border-gray-700 rounded-md py-2 px-3 text-black "
                            placeholder="u@ple.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type='password'
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full  border border-gray-700 rounded-md py-2 px-3 text-black "
                                placeholder="password"
                                required
                            />
                          
                        </div>
                    </div>
                        <Button type='submit' className='text-gray-200 bg-sky-600 rounded-xl  h-10 w-25 md:ml-35 text-lg font-bold cursor-pointer  hover:pb-1'>
                       sign In
     </Button>
                   
                </form>
                           
                <div className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account?
                    <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
