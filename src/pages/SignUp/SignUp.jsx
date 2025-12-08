import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { imageUpload, saveOrUpdateUser } from "../../utils";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch hook removed
  } = useForm();
  
  // const passwordValue = watch("password", ""); // Line removed

  const onSubmit = async (data) => {
    console.log("Full form data:", data);
    const { name, image, email, password, role } = data;

    if (!role) {
      toast.error("Please select a role");
      return;
    }
    
    // Check if the user selected an image before attempting to access image[0]
    if (image.length === 0) {
        toast.error("Please upload a profile image or choose a placeholder");
        return;
    }

    const imageFile = image[0];

    // Password validation (Ensuring assignment rules are applied)
    const uppercasePattern = /(?=.*[A-Z])/;
    const lowercasePattern = /(?=.*[a-z])/;
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!uppercasePattern.test(password)) {
      toast.error("Password must have at least one uppercase letter");
      return;
    }
    if (!lowercasePattern.test(password)) {
      toast.error("Password must have at least one lowercase letter");
      return;
    }

    try {
      const imageURL = await imageUpload(imageFile);

      // 1. Create user
      const result = await createUser(email, password);

      // 2. Save/update user in database
      await saveOrUpdateUser({ name, email, image: imageURL, role });
      console.log(role)
      // 3. Update Firebase profile
      await updateUserProfile(name, imageURL);

      navigate(from, { replace: true });
      toast.success("Signup Successful");
      console.log(result);
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      // For Google Sign-In, the role is automatically set to 'borrower'
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
    <div className="bg-base-100 dark:bg-base-300 min-h-screen flex items-center justify-center py-12 px-4 transition-colors duration-300">
  <div className="w-full max-w-lg p-8 lg:p-10 bg-white dark:bg-neutral-900/90 rounded-2xl shadow-2xl dark:shadow-[0_0_20px_rgba(251,191,36,0.1)] border border-gray-200 dark:border-amber-400/30 relative z-10">
    
    <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-3">
      Create Your Account
    </h2>
    <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
      Join LoanLink and get instant microloans
    </p>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full px-12 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 border-gray-300 dark:border-neutral-700 transition-colors duration-200"
          {...register("name", {
            required: "Name is required",
            maxLength: { value: 30, message: "Name cannot exceed 30 characters" },
          })}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Profile Image */}
      <div>
        <label htmlFor="image" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">PhotoURL</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="file-input file-input-ghost file-input-md w-full text-sm rounded-xl bg-gray-50 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 focus:border-amber-500 focus:outline-none dark:text-white"
          {...register("image")}
        />
        <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">PNG, JPG, JPEG (Upload profile picture)</p>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-12 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 border-gray-300 dark:border-neutral-700 transition-colors duration-200"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" },
          })}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Role Dropdown */}
      <div>
        <label htmlFor="role" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Role</label>
        <select
          id="role"
          defaultValue=""
          className="w-full px-12 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 border-gray-300 dark:border-neutral-700 transition-colors duration-200 h-11 appearance-none"
          {...register("role", { required: "Role is required" })}
        >
          <option value="" disabled>Select your role</option>
          <option value="borrower">Borrower</option>
          <option value="manager">Manager</option>
        </select>
        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Minimum 6 characters"
          className="w-full px-12 py-3 border rounded-xl bg-gray-50 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 border-gray-300 dark:border-neutral-700 transition-colors duration-200"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z]).*$/, message: 'Must contain uppercase and lowercase letters' },
          })}
        />
        <div className="mt-2 text-xs font-medium text-red-500 dark:text-red-400">
          <p>⚠️ Password Requirements:</p>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">
            <li>Length must be at least 6 characters</li>
            <li>Must have an Uppercase letter</li>
            <li>Must have a Lowercase letter</li>
          </ul>
          {errors.password?.message && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 mt-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white dark:text-gray-900 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/30 transition-all duration-300 ease-in-out flex items-center justify-center"
      >
        {loading ? <TbFidgetSpinner className="animate-spin h-6 w-6" /> : "Sign Up"}
      </button>
    </form>

    {/* OR Divider */}
    <div className="flex items-center my-6">
      <hr className="flex-1 border-gray-300 dark:border-neutral-700" />
      <span className="mx-3 text-gray-400 dark:text-gray-500 text-sm font-medium">OR</span>
      <hr className="flex-1 border-gray-300 dark:border-neutral-700" />
    </div>

    {/* Google Sign In */}
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={loading}
      className={`w-full flex items-center justify-center space-x-3 py-3 rounded-xl font-medium border border-gray-300 dark:border-neutral-700 transition-all duration-200 ${
        !loading ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800" : "cursor-not-allowed bg-gray-100 dark:bg-neutral-700/50"
      } text-gray-700 dark:text-gray-300`}
    >
      <FcGoogle size={24} />
      <span>Continue with Google</span>
    </button>

    {/* Login Link */}
    <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
      Already have an account?{" "}
      <Link to="/login" className="text-amber-600 dark:text-amber-400 hover:underline font-semibold transition-colors">
        Login
      </Link>
    </p>

  </div>
</div>

  );
};

export default SignUp;