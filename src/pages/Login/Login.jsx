import { Link, Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { FaLock, FaEnvelope, FaUserShield, FaUserTie, FaEye, FaEyeSlash } from "react-icons/fa"; // FaEye, FaEyeSlash যোগ করা হয়েছে
import { useState } from "react";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false); // পাসওয়ার্ড দেখার জন্য স্টেট
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace={true} />;

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signIn(email, password);
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "Invalid credentials");
    }
  };

  const handleDemoLogin = (email, password) => {
    setValue("email", email);
    setValue("password", password);
    toast.success(`${email.split('@')[0]} credentials loaded!`);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="bg-base-100 dark:bg-base-300 min-h-screen flex items-center justify-center py-12 px-4 transition-colors duration-300">
      <div className="w-full max-w-md p-8 lg:p-10 bg-white dark:bg-neutral-900/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-amber-400/30 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-3">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Sign in to continue your journey with LoanLink
        </p>

        {/* --- Demo Login Section --- */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button
            type="button"
            onClick={() => handleDemoLogin("admin1@gmail.com", "Admin1")}
            className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg border border-amber-500/50 text-amber-600 hover:bg-amber-500 hover:text-white transition-all"
          >
            <FaUserShield /> Admin Demo
          </button>
          <button
            type="button"
            onClick={() => handleDemoLogin("manager@gmail.com", "Manager")}
            className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg border border-orange-500/50 text-orange-600 hover:bg-orange-500 hover:text-white transition-all"
          >
            <FaUserTie /> Manager Demo
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <FaEnvelope className="w-5 h-5" />
              </span>
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all ${
                  errors.email ? "border-red-500" : "border-gray-200 dark:border-neutral-700"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                })}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
          </div>

          {/* Password Field with Show/Hide toggle */}
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <FaLock className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? "text" : "password"} // টাইপ পরিবর্তন হবে
                placeholder="Password"
                className={`w-full pl-12 pr-12 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all ${
                  errors.password ? "border-red-500" : "border-gray-200 dark:border-neutral-700"
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {/* Show/Hide Toggle Button */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-amber-500 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-sm font-medium text-amber-600 hover:underline transition-colors"
              onClick={() => toast("Reset link sent to your email (Demo)")}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-orange-500 shadow-lg transition-all flex justify-center items-center"
          >
            {loading ? <TbFidgetSpinner className="animate-spin text-xl" /> : "Log In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300 dark:border-neutral-700" />
          <span className="mx-3 text-gray-400 text-xs uppercase tracking-wider">OR</span>
          <hr className="flex-1 border-gray-300 dark:border-neutral-700" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center space-x-3 border border-gray-300 dark:border-neutral-700 py-2.5 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all font-medium dark:text-white"
        >
          <FcGoogle size={24} />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-yellow-600 font-bold hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;