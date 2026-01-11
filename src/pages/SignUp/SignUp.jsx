import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { imageUpload, saveOrUpdateUser } from "../../utils";
import { FaCloudUploadAlt, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserTag } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false); // Password show state
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedImage = watch("image");

  const onSubmit = async (data) => {
    const { name, image, email, password, role } = data;

    try {
      let imageURL = "";
      if (image && image[0]) {
        imageURL = await imageUpload(image[0]);
      }

      const result = await createUser(email, password);

      await saveOrUpdateUser({ 
        name, 
        email, 
        image: imageURL, 
        role 
      });

      await updateUserProfile(name, imageURL);

      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "Signup failed");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: "borrower",
      });
      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="bg-base-100 dark:bg-base-300 min-h-screen flex items-center justify-center py-20 px-4 transition-colors duration-300">
      <div className="w-full max-w-md p-8 lg:p-10 bg-white dark:bg-neutral-900/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-amber-400/30 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join LoanLink and get instant microloans
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <FaUser className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Full Name"
              className={`w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <FaEnvelope className="w-4 h-4" />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'}`}
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
          </div>

          {/* Role Selection */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 z-10">
              <FaUserTag className="w-4 h-4" />
            </span>
            <select
              defaultValue=""
              className={`w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all appearance-none ${errors.role ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'}`}
              {...register("role", { required: "Please select a role" })}
            >
              <option value="" disabled>Select your role</option>
              <option value="borrower">Borrower</option>
              <option value="manager">Manager</option>
            </select>
            {errors.role && <p className="text-red-500 text-xs mt-1 ml-1">{errors.role.message}</p>}
          </div>

          {/* Image Upload */}
          <div className="relative border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-4 hover:border-amber-400 transition-all cursor-pointer bg-gray-50 dark:bg-neutral-800/50">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
              {...register("image", { required: "Profile image is required" })}
            />
            <div className="flex flex-col items-center justify-center text-gray-500">
              <FaCloudUploadAlt className="text-3xl mb-1 text-amber-500" />
              <span className="text-sm font-medium">
                {selectedImage?.[0] ? selectedImage[0].name : "Upload Profile Picture"}
              </span>
            </div>
          </div>
          {errors.image && <p className="text-red-500 text-xs mt-1 ml-1">{errors.image.message}</p>}

          {/* Password Field */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <FaLock className="w-4 h-4" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full pl-12 pr-12 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all ${errors.password ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'}`}
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
                validate: {
                  hasUpper: v => /[A-Z]/.test(v) || "Must include uppercase",
                  hasLower: v => /[a-z]/.test(v) || "Must include lowercase"
                }
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-amber-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-orange-500 shadow-lg transition-all flex justify-center items-center"
          >
            {loading ? <TbFidgetSpinner className="animate-spin text-xl" /> : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300 dark:border-neutral-700" />
          <span className="mx-3 text-gray-400 text-xs uppercase tracking-wider">OR</span>
          <hr className="flex-1 border-gray-300 dark:border-neutral-700" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center space-x-3 border border-gray-300 dark:border-neutral-700 py-2.5 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all"
        >
          <FcGoogle size={24} />
          <span className="font-medium dark:text-white">Continue with Google</span>
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-600 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;