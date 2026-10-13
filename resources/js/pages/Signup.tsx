import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Signup() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        post('/register'); 
    };

    return (
        <>
            <Head title="Sign Up" />

            <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto">
                <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Create an account</h1>
                        <p className="text-sm text-gray-500 mt-1">Join Emailify and start managing your workflow.</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Full Name */}
                        <div className="relative z-0 w-full group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Full Name
                            </label>
                            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                        </div>

                        {/* Email address */}
                        <div className="relative z-0 w-full group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email Address
                            </label>
                            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone Number */}
                        <div className="relative z-0 w-full group">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="phone"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone Number (e.g. 0720202424)
                            </label>
                            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                        </div>

                        {/* Password */}
                        <div className="relative z-0 w-full group">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative z-0 w-full group">
                            <input
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="password_confirmation"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Confirm Password
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition disabled:opacity-50"
                        >
                            Signup
                        </button>

                        <div className="text-center text-sm text-gray-500 mt-4">
                        Already have an account?{' '}
                        <Link href="/login" className="text-slate-600 font-medium hover:underline">
                            Login
                        </Link>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}