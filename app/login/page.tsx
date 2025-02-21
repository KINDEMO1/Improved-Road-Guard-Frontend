"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";

// ShadCN components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLengthValid = password.length >= 8;

    return hasUpperCase && hasLowerCase && hasNumber && isLengthValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value)
          ? ""
          : "Please enter a valid email address",
      }));
    }

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: validatePassword(value)
          ? ""
          : "Password must be at least 8 characters and contain uppercase, lowercase, and numbers",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Form submitted:", formData);
    }, 2000);
  };

  const isFormValid =
    validateEmail(formData.email) && validatePassword(formData.password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md space-y-8 bg-white rounded-xl shadow-lg p-8">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-900">
            Welcome Back
          </CardTitle>
          <p className="text-center text-gray-600">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={errors.email ? "true" : "false"}
                className={errors.email ? "border-red-300" : "border-gray-300"}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  aria-invalid={errors.password ? "true" : "false"}
                  className={errors.password ? "border-red-300" : "border-gray-300"}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </button>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>

            <Button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isFormValid ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>

            <div className="mt-6">
              <Separator />
              <div className="text-center text-sm text-gray-500">Or continue with</div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FaGoogle className="w-5 h-5 text-red-500" />
                  <span className="ml-2">Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FaFacebook className="w-5 h-5 text-blue-600" />
                  <span className="ml-2">Facebook</span>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>

        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Create new account
          </a>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
