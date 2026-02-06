// import { Eye, EyeOff } from 'lucide-react';
// import React,{useState}from 'react';
// import { Link, useNavigate } from 'react-router-dom';


// const Login = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         email:'',
//         password:''
//     });
//     const [error,setError]= useState(false);
//     const[showPassword,setShowPassword]= useState(false);
    
//     const handleChange = (e) => {
//          setFormData =({
//             ...formData,
//             [e.target.name]:e.target.value
//          })
//          if(error) setError('');
//     }
//     const handleSubmit =(e) => {
//         e.preventDefault();

//         const existingUsers = JSON.parse(localStorage.getItem('users' )|| ['']);
//         const user = existingUsers.find(u => u.email === formData.email && u.pasword === formData.password)
        

//         if(user){
//             localStorage.setItem('currentUser',JSON.stringify(user));
//             window.dispatchEvent(new Event ('auth-change'))
//             navigate('/');
//         }
//             else{
//                 setError('Invalid email or password')
//             }
//     }
//   return (
//     <div className='min-h-screen flex items-center justify-center bg-linear-to-r from-sky-100 to-sky-300 '>
//       <div className='bg-sky-300 p-8 rounded-lg shadow-lg w-full max-w-md border-gray-300'>
//     <h2 className='text-3xl font-bold text-black mb-6 text-center'>Welcome back</h2>
     
//      {error && (
//         <div className='bg-gray-900 border border-gray-200 text-gray-200 p-3 rounded mb-4 text-sm'>
//          {error}
//         </div>
//      )}
//      <form onSubmit={{handleSubmit}} className='space-y-6'
//      action="">
//         <div>
//         <label className='block text-gray-800 text-sm font-medium mb-2' htmlFor="email"></label>
//       <input type="email"
//       id='email'
//       name='email'
//       value={formData.email}
//       onChange={handleChange}
//       className='w-full bg-sky-300 border-gray-300 rounded-md py-2 px-3'
//       placeholder='ghgh@gmail.com'
//       required
      
//       />
//       </div>
//       <div>
//           <label className='block text-gray-800 text-sm font-medium mb-2' htmlFor="password"></label>
//     <div className='relative'>
//     <input type={showPassword ? "text" : "password"}
//     id="password"
//     name='password'
//     value={formData.password}
//     onChange={handleChange}
//      className='w-full bg-sky-300 border-gray-300 rounded-md py-2 px-3'
//     placeholder='enter password'
//      />
//      <button
//       type="button"
//       onClick={()=> setShowPassword(!showPassword)}
//       className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white'
//      >
//         {showPassword ? <EyeOff size= {20} /> : <Eye size={20} />}

//      </button>
//      </div>
//       </div>
//      <button className='text-gray-200 bg-sky-300 rounded-xl'>
//    sign In
//      </button>

//      </form>
//    <div className='mt-6 text-center text-sm text-gray-500'>
//             Don't have an account?
//             <Link to='/signup'className="text-blue-400 hover:text-blue-300 transition-colors">
//             </Link>
//    </div>

//       </div>
//     </div>
//   )
// }

// export default Login



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login logic
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
        <div className="min-h-screen flex items-center justify-center bg-black pt-20">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

                {error && (  
                    <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-10"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                   
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
