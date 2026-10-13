import React from 'react';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/AppLayout';

export default function Login() {
    // Access flash messages or shared props from Laravel session if available
    const { flash } = usePage().props as { flash?: { success?: string; error?: string } };

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login'); // Make sure your web.php has a corresponding POST /login route
    };

    return (
        <AppLayout>
            <Head title="Log In" />

            <div className="py-12 px-4 max-w-md mx-auto">
                {/* Toast Notification for Success or Error */}
                {flash?.success && (
                    <div className="mb-4 p-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-200 shadow-sm">
                        {flash.success}
                    </div>
                )}
                {flash?.error && (
                    <div className="mb-4 p-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200 shadow-sm">
                        {flash.error}
                    </div>
                )}

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Welcome back</h1>
                    <p className="text-sm text-gray-500 mt-1">Please enter your credentials to log in.</p>
                </div>

                <form onSubmit={submit} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                    {/* Email address */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            id="floating_email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="password"
                            id="floating_password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
                    </div>

                    {/* Remember me & Forgot password link */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-600 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded border-gray-300 text-slate-600 shadow-sm focus:ring-slate-500"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>

                        <Link href="/forgot-password" className="text-slate-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition disabled:opacity-50"
                    >
                        {processing ? 'Logging in...' : 'Login'}
                    </button>

                    <div className="text-center text-sm text-gray-500 mt-4">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-slate-600 font-medium hover:underline">
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}