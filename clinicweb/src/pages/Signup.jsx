import React , {useState} from 'react';
import {Link,useNavigate}  from 'react-router-dom'
import { Eye, EyeOff, Check, X } from 'lucide-react';



const Signup = () =>{
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        fullName='',
        email:'',
        password:'',
        confirmPassword:''
    });
    const [error,setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRequirements = [
    {met:formData.password.length>=8, text:'At least8 characters'},
    {met:/[a-z]/.test(formData.password)&& /[A-Z]/.test(formData.password),text:'Upper & lowercase letters'},
    {met:/\d/.test(formData.password),text:'Contains a number'},
    {met:/[^a-zA-Z0-9]/.test(formData.password),text:'Special Character'}

  ];
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    if(error) setError('')
  } 
const handleSubmit = (e) =>{
    e.preventDefault();
    if(!formData.fullName.trim()){
        setError('Please enter your full name');
        return;
    }
    if(!formData.email.includes('@')){
        setError('please enter a valid emailaddress')
        return;
    }
}
if(!formData.confirmPassword.length<8){
    setError('password must be at least 8 characters long')
    return;
}
if(formData.password!== formData.confirmPassword){
    setError('passwords do not match');
    return;
}

const existingUsers = JSON.parse(localStorage.getItem('users')||'[]');
const emailExists = existingUsers.some(u => u.email === formData.email);
if(emailExists){
    setError('Email already registered. please try again login instead')
    return;
}

const newUser = {
    id:Date.now().toString(),
    fullName:formData.fullName,
    email: formData.email,
    password:formData.password,
    createdAt: new Date().toISOString()
};
const updatedUsers  =[...existingUsers,newUser];
localStorage.setItem('users',JSON.stringify(updatedUsers));
localStorage.setItem('currentUser',JSON.stringify(newUser));

window.dispatchEvent(new Event('authchange'))

navigate('/')



return(
<div className='min-h-screen flex items-center justify-center bg-black pt-20 pb-10 px-4'>
<div className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800'>
    <p className='text-gray-400 text-center mb-6 text-sm'>come and get started</p>
   {
    error && (
        <div className='bg-red-500 border-red-500 text-red-500 p-3 rounded mb-4 text-sm'>
           {error}
        </div>
    )
   }
   <form onSubmit={handleSubmit} className='space-y-5'>
 <div>
    <label className='block text-gray-400 text-sm font-medium mb-2' htmlFor='fullName'>
        full Name
    </label>
    <input type="text"
    id='fullName'
    name='fullname'
    value={formData.fullName}
    onChange={handleChange}
    className='w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-3 text-white focus:border-transparent transition-colors ' 
    placeholder='john doe'
    required
    />
 </div>

 <div>
    <label className='block text-gray-400 text-sm font-medium mb-2' htmlFor="email"></label>
    Email Address
 </div>
 <input type="email"
 id='email'
 name='email'
 value={formData.email}
 onChange={handleChange}
 className='w-full bg-gray-800 border border-gray-800 rounded-md py-3 px-4 text-white' 
 placeholder="you@example.com"
 required/>
   </form>
</div>
<div>
    <label className='block text-gray-400 text-sm font-medium mb-2'htmlFor="passwors">
        password
    </label>
    <div className='relative'>
      <input type={showPassword ? "text" : 'password'}
      id="password"
      value={form.password}
      onChange={handleChange}
      className='w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-whitte focus:outline-none transition-colors pr-10' 
      placeholder='.........'
      required
      />
      <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white'>
      {showPassword ? <EyeOff size={20} />:<Eye size={20}/>}
      </button>
      
    </div>

    {formData.password &&(
        <div className='mt-3 space-y-1'>
       {passwordRequirements.map((req,index)=> (
        <div key={index} className='flex items-center gap-2 text-xs'>
          {req.met ? (
            <Check size={14} className='text-green-500'/>
          ):(
            <X size={14} className='text-gray-500'/>
          )}
          <span className={req.met ? ''}>

          </span>
        </div>

       ))}
        </div>
    )}
</div>
</div>
)
}