import axios from 'axios'
import {useForm} from 'react-hook-form'; 
import { useNavigate } from 'react-router';
const Login = () => {
      const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const nav = useNavigate();
  const onSubmit = async(data)=>{
    try {
        const res = await axios.post('http://localhost:5000/api/users/login',data);
        console.log('response',res)
        alert("Login Success")
        nav('/dashboard')
    } catch (error) {
        alert("Incorrect input")
         if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Server not responding");
      }
    } 
    
    }


  return (
    <div>
        <div className="flex min-h-full h-[80vh] flex-col  justify-center px-6 py-12  lg:px-8">
  <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold tracking-tight ">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">


    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label for="email" className="block text-sm/6 font-medium text-gray-500">Email address</label>
        <div className="mt-2">
          <input {...register("email",{required:true})} id="email" type="email" name="email" placeholder='example@gamil.com' required autocomplete="email" className="block border-gray-500 border w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-500">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input {...register('password',{required:true})} id="password" type="password" name="password" required autocomplete="current-password" className="block border-gray-500 border w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
           {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </div>
    </form>

    
  </div>
</div>
    </div>
  )
}

export default Login