import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                const data = await response.json(); // Parse the response JSON
    
                if (response.ok) {
                    localStorage.setItem('isLoggedIn', 'true'); // Save logged-in state
                    localStorage.setItem('user', JSON.stringify(data.user)); // Save user details
                    router.push('/'); // Redirect to the homepage or dashboard
                    toast.success('Login successful!'); // Display success toast
                } else {
                    setErrorMessage(data.message); // Display error from server
                    setErrors({ ...errors, form: data.message });
                    toast.error(`Login failed: ${data.message}`); // Display error toast
                }
            } catch (error) {
                console.error('Error logging in:', error);
                toast.error('An error occurred while logging in'); // Handle network errors
            }
        }
    };
    
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient login-form">
            {/* Background Pattern Overlay */}
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-cover opacity-10" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }} />

            {/* Main Content */}
            <div className="position-relative mt-5 z-index-10 max-w-md p-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-light bg-opacity-10 backdrop-blur-lg rounded-4 shadow-lg p-3"
                >
                    {/* Logo and Title */}
                    <div className="text-center mb-4">
                        <h2 className="h3 text-white">Welcome Back</h2>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="form-group">
                            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                                <label htmlFor="email" className="form-label text-light">Email Address</label>
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
                            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                                <label htmlFor="password" className="form-label text-light mt-1">Password</label>
                                <div className="position-relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        className="form-control rounded-1 border-light"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                                    >
                                        {/* Toggle icon */}
                                    </button>
                                </div>
                                {errors.password && <p className="text-danger small mt-1">{errors.password}</p>}
                            </motion.div>
                        </div>

                        {errorMessage && <p className="text-danger small mt-2">{errorMessage}</p>}

                        <button type="submit" className="btn btn-primary w-100 btn-outline-dark border-0 my-2 rounded-3">Sign In</button>

                        <div className="text-center text-light mt-3">
                            <p>Do not have an account?{' '}
                                <button onClick={() => router.push('/Signup')} className="btn btn-dark text-white rounded-3 btn-outline-danger border-0">
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>

            {/* Toast container */}
            <toast-container />
        </div>
    );
};

export default Login;
