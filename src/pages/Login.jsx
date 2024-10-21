'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem('isLoggedIn', true);
            router.push('/Home');
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient login-form">
            {/* Background Pattern Overlay */}
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-cover opacity-10" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }} />



            {/* Main Content */}
            <div className="position-relative  z-index-10 max-w-md p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-light bg-opacity-10 backdrop-blur-lg rounded-4 shadow-lg p-5"
                >
                    {/* Logo and Title */}
                    <div className="text-center mb-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{ width: '5rem', height: '5rem' }}
                        >
                            <svg
                                className="w-4 h-4 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </motion.div>
                        <h2 className="h3 text-white">Welcome Back</h2>

                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="form-group">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label htmlFor="email" className="form-label text-light">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control rounded-1 border-light"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                {errors.email && <p className="text-danger small mt-1">{errors.email}</p>}
                            </motion.div>
                        </div>

                        <div className="form-group">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label htmlFor="password" className="form-label text-light mt-1">
                                    Password
                                </label>
                                <div className="position-relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        className="form-control rounded-1  border-light"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                                    >
                                        {showPassword ? (
                                            <svg className="w-4 h-4 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && <p className="text-danger small mt-1">{errors.password}</p>}
                            </motion.div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check my-2">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label text-light" htmlFor="rememberMe">
                                    Remember me
                                </label>
                            </div>
                            <Link href="#" className="text-info small">
                                Forgot Password?
                            </Link>
                        </div>

                        <button

                            type="submit"
                            className="btn btn-primary w-100 btn-outline-dark border-0 my-2 rounded-3"
                        >
                            Sign In
                        </button>

                        {/* Sign Up Link */}
                        <div className="text-center text-light  mt-3">
                            <p>
                                Don't have an account?{' '}
                                <button
                                    onClick={() => router.push('/Signup')}
                                    className="btn btn-dark text-white rounded-3 btn-outline-danger border-0"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>

                        <div className="text-center text-light ">
                            Need help? Contact your system administrator
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
