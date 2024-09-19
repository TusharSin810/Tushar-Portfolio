import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
  { name: 'Education', href: '#', current: false },
  { name: 'Contact Me', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const userProfilePic = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 

  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex w-screen sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/images/Avatar.png"
                className="h-10 w-auto rounded-full"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#4D0011] text-[#E4E5E8] rounded-xl' : 'text-black',
                      'px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                {!isLoggedIn ? (
                  <div className='flex gap-x-3'>
                    <a
                      href="/login"
                      className="bg-[#4D0011] text-[#E4E5E8] px-3 py-2 text-sm font-medium rounded-xl"
                    >
                      Log-In
                    </a>
                    <a
                      href="/Register"
                      className="bg-[#53565A] text-[#4D0011] px-3 py-2 text-sm font-medium rounded-xl"
                    >
                      Register
                    </a>
                  </div>
                ) : (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src={userProfilePic}
                          className="h-8 w-8 rounded-full"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                    >
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Your Profile
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sign out
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                )}
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>      
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-[#53565A] bg-opacity-50">
        <div className="space-y-1 px-2 pb-3 pt-2">

      {isLoggedIn ? (
        <div className="flex items-center space-x-3 p-3">
          <img alt="Profile" className="h-8 w-8 rounded-full" />
          <span className="text-white">Hello</span>
        </div>
      ) : (
        <DisclosureButton
          as="a"
          href="/login"
          className="block w-full text-center text-white bg-[#4D0011] px-3 py-2 text-base font-medium rounded-xl"
        >
          Log-In
        </DisclosureButton>
      )}

          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-[#E4E5E8] bg-[#4D0011] rounded-xl bg-opacity-90' : 'text-white hover:bg-gray-700 hover:text-[#53565A]',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
