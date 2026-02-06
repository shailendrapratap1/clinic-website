import React,{useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const[formData,setFormData] = useState({
        email:'',
        password:''
    })
    const [error,setError]= useState(false);
    const[showPassword,setShowPassword]= useState(false);
    
    const handleChange = (e) => {
         setFormData =({
            ...formData,
            [e.target.name]:e.target.value
         })
         if(error) setError('');
    }
    const handleSubmit =(e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users' || ['']))
        const user = existingUsers.find(u => u.email === formData.email && u.pasword === formData.password)
        

        if(user){
            localStorage.setItem('currentUser',JSON.stringify(user));
            window.dispatchEvent(new Event ('auth-change'))
            navigate('/');
        }
            else{
                setError('Invalid email or password')
            }
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-r from-sky-100 to-sky-300 '>
      <div className='bg-sky-300 p-8 rounded-lg shadow-lg w-full max-w-md border-gray-300'>
    <h2 className='text-3xl font-bold text-black mb-6 text-center'>Welcome back</h2>
     
     {error && (
        <div className='bg-gray-900 border border-gray-200 text-gray-200 p-3 rounded mb-4 text-sm'>
         {error}
        </div>
     )}
     <form onSubmit={{handleSubmit}} className='space-y-6'
     action="">
        <div>
        <label className='block text-gray-800 text-sm font-medium mb-2' htmlFor="email"></label>
      <input type="email"
      id='email'
      name='email'
      value={formData.email}
      onChange={handleChange}
      className='w-full bg-sky-300 border-gray-300 rounded-md py-2 px-3'
      placeholder='ghgh@gmail.com'
      required
      
      />
      </div>
      


     </form>


      </div>
    </div>
  )
}

export default Login

