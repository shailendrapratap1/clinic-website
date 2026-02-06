// import React, { useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'
// const Login = () => {
//         const navigate = useNavigate();
//        const [formData,setFormData] = useState({
//         email: '',
//         password:''
//        })
//     //    const[error,setError] = useState('');
//     //    const[showPassword,setShowPassword] = useState(false);

//     //    const [error,setError] = useState('');
//     //    const[showPassword,setShowPassword] = useState(false);

//        const handleChange = (e) => {
//           setFormData({
//              ...formData,
//              [e.target.name]: e.target.value
//           });
//           if(error) setError('');
//        }
//       const handleSubmit = (e) => {
//         e.preventDefault();

//         const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
//         const user = existingUsers.find(u => u.email === formData.email && u.password === formData.password);
       
//         if(user) {
//             localStorage.setItem('currentUser',JSON.stringify(user));
//             window.dispatchEvent(new Event('auth-change'));
//             navigate('/');
//         }
//         else{
//             setError('invalid email or password')
//         }
        
//     }


//   return (
//          <div>
      
//     </div>
//   )
// }

export default Login
