import { FC, Fragment, useState } from "react";

import { Menu, Transition, Dialog, Disclosure } from '@headlessui/react';
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, XIcon } from "@heroicons/react/solid";
import Router, { useRouter } from "next/router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface Main {
  children: React.ReactNode;
}

export const Main: FC<Main> = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
interface Button {
  content: string;
  click: () => void
  bg?: string
}
export const Button: FC<Button> = ({ content, click, bg }) => {

  return (
    <button className={`w-full px-4 py-2 font-medium tracking-wide  text-xs md:text-sm capitalize transition-colors duration-200 transform  rounded-md  focus:outline-none  
    ${bg === "none" ? 'border border-orange-500 focus:bg-orange-500 hover:bg-orange-500 bg-white    text-orange-600 hover:text-white' : 'focus:bg-orange-600 hover:bg-orange-600 bg-orange-500 text-white'}
    `} onClick={() => click()}>
      {content}
    </button>

  )
}

interface HeadingPrimary {
  title: string;
}
export const HeadingPrimary: FC<HeadingPrimary> = ({ title }) => {
  return (
    <Main>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-7xl text-center font-bold text-gray-800 leading-normal">{title}</h1>
      </div>
    </Main>
  )
}


const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

interface HeadingDashboard {
  title: string;
  url: string
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export const HeadingDashboard: FC<HeadingDashboard> = ({ title, url }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { push, pathname, query } = useRouter();

  const redirect = () => {
    push(`/${url}/new`)
  }
  return (
    <>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <Main>
        <div className="relative z-10 flex items-baseline justify-between py-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{title}</h1>

          <div className="grid grid-cols-1">
            {/* <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu> */}

            {/* <button type="button" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button> */}
            {/* <button
              type="button"
              className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              {/* <span className="sr-only">Filters</span> 
              <FilterIcon className="w-5 h-5" aria-hidden="true" />
            </button> */}
            <button className="transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 
            py-2 text-md sm:text-sm"
            onClick={() => redirect()}
            >
              <div className="hidden sm:flex">
                Crear
              </div>
              {/* <FontAwesomeIcon
                className="sm:hidden"
                icon={faCirclePlus}
              /> */}
            </button>
            {/* <Button content='nuevo' click={() => redirect()} /> */}

          </div>
        </div>
      </Main>
    </>
  )
}

interface HeadingForm {
  title: string;
}

export const HeadingForm: FC<HeadingForm> = ({ title }) => {
  const { pathname, query } = useRouter()
  Object.keys(query)

  // query[Object.keys(query)[Object.keys(query).length - 1]]
  const n = query[Object.keys(query)[Object.keys(query).length - 1]]
  // console.log(query[Object.keys(query)[Object.keys(query).length - 1]])
  const orangeirect = () => {
    // console.log('hola');
  }
  return (
    <Main>
      <div className=" z-10 flex items-baseline justify-between py-6 ">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{n === 'new' ? `Created ${title}` : `Updated ${title}`}</h1>
        {/* <div>
            <Button  content='nuevo' click={() => orangeirect()} />
          </div> */}
      </div>
    </Main>
  )
}
interface Heading {
  title: string;
}
export const Heading: FC<Heading> = ({ title }) => {
  const { pathname, query } = useRouter()
  Object.keys(query)

  // query[Object.keys(query)[Object.keys(query).length - 1]]
  const n = query[Object.keys(query)[Object.keys(query).length - 1]]
  // console.log(query[Object.keys(query)[Object.keys(query).length - 1]])
  const orangeirect = () => {
    // console.log('hola');
  }
  return (
    <Main>
      <div className=" z-10 flex items-baseline justify-between py-6 ">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{title}</h1>
        {/* <div>
            <Button  content='nuevo' click={() => orangeirect()} />
          </div> */}
      </div>
    </Main>
  )
}