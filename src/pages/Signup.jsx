'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            router.push('/Home');
            console.log('Signup form submitted:', formData);
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient position-relative overflow-hidden">
            {/* Background Image */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-cover opacity-10" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}></div>

            {/* Main Content */}
            <div className="relative z-10 col-12 col-sm-6 p-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-5"
                >
                    {/* Logo and Title */}
                    <div className="text-center mb-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="d-inline-flex justify-content-center align-items-center bg-white rounded-circle mb-4"

                        >
                            <svg
                                className="text-primary"
                                style={{ width: '2rem', height: '2rem' }}
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
                        <h2 className="text-white">Create Account</h2>

                    </div>

                    {/* Signup Form */}
                    <form onSubmit={handleSubmit}>
                        {/* First Name */}
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label text-light">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                className="form-control  border-0  rounded-1 "
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                            {errors.firstName && <div className="text-danger small mt-1">{errors.firstName}</div>}
                        </div>

                        {/* Last Name */}
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label text-light">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                className="form-control  border-0  rounded-1 "
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                            {errors.lastName && <div className="text-danger small mt-1">{errors.lastName}</div>}
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-light">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control  border-0  rounded-1 "
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-light">Password</label>
                            <div className="position-relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-control  border-0  rounded-1 "
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="position-absolute top-50 end-0 translate-middle-y btn btn-link text-light p-0"
                                >
                                    {showPassword ? (
                                        <i className="bi bi-eye-slash"></i>
                                    ) : (
                                        <i className="bi bi-eye"></i>
                                    )}
                                </button>
                            </div>
                            {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label text-light">Confirm Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                className="form-control  border-0  rounded-1 "
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                            {errors.confirmPassword && <div className="text-danger small mt-1">{errors.confirmPassword}</div>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="btn btn-primary w-100 py-2"
                        >
                            Sign Up
                        </motion.button>

                        <div className="text-center text-light mt-3 ">
                            Already have an account? <Link href="/Login" className="text-info">Sign In</Link>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
