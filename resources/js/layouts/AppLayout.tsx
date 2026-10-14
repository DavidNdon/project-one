import React from 'react';
import { router, usePage, Link } from '@inertiajs/react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  // Access auth state shared from Laravel via Inertia HandleInertiaRequests middleware
  const { auth } = usePage().props as { auth?: { user?: any } };

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    router.post('/logout');
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3"
          >
            <span className="self-center text-xl text-gray-900 font-semibold whitespace-nowrap">
              Emailify
            </span>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white items-center">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-slate-600 rounded md:bg-transparent md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0"
                >
                  Services
                </Link>
              </li>

              {/* Conditional Auth Rendering */}
              {auth?.user ? (
                <div className="flex items-center space-x-3 mt-4 md:mt-0">
                  <li>
                    <Link
                      href="/dashboard"
                      className="bg-slate-400 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-slate-600"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <form onSubmit={handleLogout}>
                      <button
                        type="submit"
                        className="bg-red-400 text-white px-4 py-2 border-0 cursor-pointer rounded-xl transition-all duration-300 hover:bg-red-600"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0 items-center">
                  <li>
                    <Link
                      href="/signup"
                      className="md:py-2 md:px-4 bg-slate-400 text-white rounded-xl hover:bg-slate-600 transition p-2 block"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login"
                      className="md:py-2 md:px-4 bg-slate-200 text-green-900 rounded-xl hover:bg-slate-300 transition p-2 block"
                    >
                      Login
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <main className="pt-20 min-h-screen bg-gray-50">{children}</main>
    </>
  );
};

export default AppLayout;