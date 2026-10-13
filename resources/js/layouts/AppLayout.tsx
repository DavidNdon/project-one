import Auth from '@/actions/App/Http/Controllers/Auth';
import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="http://project-one.test"
            className="flex items-center space-x-3"
          >
            <span className="self-center text-xl text-gray-900 font-semibold whitespace-nowrap">
              Emailify
            </span>
          </a>
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
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-slate-600 rounded md:bg-transparent md:text-slate-600 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0"
                >
                  Services
                </a>
              </li>
            {Auth ? <div><button>Dashboard</button></div> : <div>  <li>
                <a
                  href="/signup"
                  className="md:py-3 md:px-4 bg-slate-400 text-white hover:text-slate-400 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 p-3"
                >
                  Sign up
                </a>
              </li>
              <li>
                 <a
                  href="/login"
                  className="md:py-3 md:px-4 bg-slate-200 text-green-900 hover:text-slate-400 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 p-3"
                >
                  Login
                </a>
              </li></div>}
            </ul>
          </div>
        </div>
      </nav>

      {/* Added pt-20 so the fixed navbar doesn't overlap your page contents */}
      <main className="pt-20 min-h-screen bg-gray-50">{children}</main>
    </>
  );
};

export default AppLayout;