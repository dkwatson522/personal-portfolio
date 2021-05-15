/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { DownloadIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: 'About', href: '#about', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact Me', href: '#contact', current: false },
    { name: 'Download Resume', href: '#', current: false }
  ]);

  // const [selectedNavigation, setSelectedNavigation] = useState();
  //
  // const handleNavigationSelect = (name) => {
  //   setSelectedNavigation(name)
  //   console.log(name)
  //
  // }

  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="../../DWLogo.png"
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="../../DWLogo.png"
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <div className="flex">
                          {item.name}
                          {item.name == 'Download Resume' &&
                          <a href="../../Daniel_Watson-Resume.pdf" target="_blank" rel="noreferrer" className="text-yellow-400">
                            <DownloadIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true"/>
                          </a>}
                        </div>

                      </a>

                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
