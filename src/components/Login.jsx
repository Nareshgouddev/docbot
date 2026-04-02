import React, { useState } from "react";
import { FileText, ArrowLeft, LogIn, Eye, EyeOff } from "lucide-react";
import {
  getFirebaseFriendlyError,
  loginWithEmailPassword,
} from "../services/firebaseAuth";

const Login = ({
  onNavigateToLanding,
  onNavigateToRegister,
  onLoginSuccess,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setIsSubmitting(true);
      await loginWithEmailPassword(formData.email.trim(), formData.password);
      onLoginSuccess();
    } catch (authError) {
      setError(getFirebaseFriendlyError(authError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-vintage-white bg-paper flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-diagonal-lines"></div>

      <div className="relative z-10 w-full max-w-md card p-6 sm:p-8 animate-scale-in">
        <button
          type="button"
          onClick={onNavigateToLanding}
          className="btn-ghost mb-4 inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 w-10 h-10 rounded-lg bg-vintage-black text-vintage-white flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="heading-md text-vintage-black">Welcome Back</h1>
          <p className="text-vintage-gray-600 text-sm mt-1">
            Log in to continue your document conversations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-vintage-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="input-primary"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-vintage-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                className="input-primary pr-10"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-vintage-gray-500 hover:text-vintage-gray-700"
                disabled={isSubmitting}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            <LogIn className="w-4 h-4" />
            {isSubmitting ? "Signing In..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-vintage-gray-600 text-center mt-5">
          New here?{" "}
          <button
            type="button"
            onClick={onNavigateToRegister}
            className="font-medium text-vintage-black hover:underline"
            disabled={isSubmitting}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
