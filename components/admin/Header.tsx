import {Menu} from '@headlessui/react';
import {signOut, useSession} from 'next-auth/client';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

const linkClassName = {
  base: 'px-3 py-2 rounded-md text-sm font-medium',
  active: 'bg-gray-900 text-white',
  inactive: 'text-gray-300 hover:bg-gray-700 hover:text-white',
};

const Header: React.FC = () => {
  const [session] = useSession();
  const router = useRouter();

  return (
    <nav className="bg-gray-800 z-10">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a className="flex items-center text-gray-100">
                  <span className="text-xl font-bold ">Next Skeleton</span>
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/dashboard">
                  <a
                    className={`${
                      router.pathname === '/dashboard'
                        ? linkClassName.active
                        : linkClassName.inactive
                    } ${linkClassName.base}`}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/dashboard/page2">
                  <a
                    className={`${
                      router.pathname === '/dashboard/page2'
                        ? linkClassName.active
                        : linkClassName.inactive
                    } ${linkClassName.base}`}
                  >
                    Page 2
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/dashboard">
              <a className="bg-blue-600 hover:bg-blue-700 rounded-md px-4 h-8 flex items-center text-white text-xs mr-2">
                Call to action
              </a>
            </Link>
            <Menu>
              <span>
                <Menu.Button
                  aria-label="Open menu"
                  aria-haspopup="true"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <img
                    alt="user-logo"
                    className="w-8 h-8 object-cover rounded-full"
                    src={session?.user?.image}
                  />
                </Menu.Button>
              </span>
              <Menu.Items
                as="ul"
                className="origin-top-right top-12 absolute right-0 mt-2 w-48 py-1 rounded-md shadow-lg bg-white focus:outline-none overflow-hidden"
              >
                <Menu.Item as="li">
                  <Link href="/dashboard/settings">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                  </Link>
                </Menu.Item>

                <Menu.Item as="li">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
