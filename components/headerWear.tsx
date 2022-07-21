import { Fragment, useState, useContext, FC } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { FolderOpenIcon, HomeIcon, LoginIcon, LogoutIcon, MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
// import { UiContext, AuthContext } from '../../src/context';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Children, Data } from '../src/interfaces';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  data: Data
  route: Children[]
}

export const HeaderWear: FC<Props> = ({ data, route }) => {
  const [open, setOpen] = useState(false)
  const { pathname, replace } = useRouter()

  // console.log('route', route);

  const p = pathname.substring(1).split('/')
  const out = () => {
    replace('/')
  }
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 py-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {p[0] === 'admin'
                  ? null
                  :
                  <>
                    <Tab.Group as="div" className="mt-2">
                      <div className="border-b border-gray-200">
                        <Tab.List className="-mb-px flex px-4 space-x-8">
                          {route.map((category: Children) => (
                            // {site.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className={({ selected }) =>
                                classNames(
                                  selected ? 'text-red-600 border-red-600' : 'text-gray-900 border-transparent',
                                  'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-xs md:text-sm font-medium capitalize'
                                )
                              }
                            >
                              {category.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>
                      <Tab.Panels as={Fragment}>
                        {[].map((category: any) => (
                          // {site.categories.map((category) => (
                          <Tab.Panel key={category.name} className="pt-5 pb-8 px-4">
                            <div className="grid grid-cols-2 gap-x-4">
                              {[].map((featured: any) => (
                                // {category.featured.slice(-2).map((featured:any) => (
                                <Link href={`/promociones/${featured.href}`} key={featured.name} className="group text-xs md:text-sm">
                                  <a >
                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-white overflow-hidden leading-none group-hover:opacity-75 li">
                                      <Image
                                        src={featured.imageSrc}
                                        alt={featured.imageAlt}
                                        height={200}
                                        width={200}
                                        objectFit={"cover"}
                                        objectPosition={'center'}
                                      />
                                    </div>
                                    <div className="mt-3 block text-xs md:text-sm font-medium text-gray-900 capitalize">
                                      <span className="z-10 inset-0" aria-hidden="true" />
                                      {featured.name}
                                    </div>
                                    <p aria-hidden="true" className="mt-1 text-xs md:text-sm">
                                      Ver Productos
                                    </p>
                                  </a>
                                </Link>
                              ))}
                            </div>
                            <div className="grid grid-cols-2 gap-x-4">
                              {[].map((section: any, i) => (
                                // {category.sections.map((section, i) => (
                                <div key={i} className="mt-6">
                                  <Link href={`/${category.href}/${section.href}`}>
                                    <a className="text-xs md:text-sm font-medium text-gray-900 capitalize">
                                      {section.name}
                                    </a>
                                  </Link>
                                  <ul
                                    role="list"
                                    className="mt-4 flex flex-col space-y-5 capitalize"
                                  >
                                    {[].map((item: any, i) => (
                                      // {section.items.slice(0,4).map((item, i) => (
                                      <li key={i} className="flow-root">
                                        <Link href={`/${category.href}/${section.href}/${item.href}`}>

                                          <a className="-m-2 p-2 block text-xs md:text-sm text-gray-500">
                                            {item.name}
                                          </a>
                                        </Link>
                                      </li>
                                    ))}
                                    {
                                      section.items.length > 3
                                        ?
                                        <li className="flow-root">
                                          <Link href={`/${category.href}/${section.href}`}>
                                            <a className="-m-2 p-2 block text-xs md:text-sm text-gray-900">
                                              Ver Todo {'>'}
                                            </a>
                                          </Link>
                                        </li>
                                        :
                                        null
                                    }
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </>
                }
                {/* Links */}


                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {[].map((page: any, i) => (
                    // {site.pages.map((page, i) => (
                    <div key={i} className="flow-root">
                      <Link href={page.href}>
                        <a className="-m-2 p-2 block font-medium text-gray-900">
                          {page.name}
                        </a>
                      </Link>

                    </div>
                  ))}
                  <div className="flow-root">
                    <Link href="/promociones">
                      <a className="-m-2 p-2 block font-medium text-gray-900 text-xs md:text-sm">
                        Promociones
                      </a>
                    </Link>
                  </div>
                </div>

                {/* {
                  isLoggedIn && user?.role === 'ADMIN_ROL' && (
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                      <div className="flow-root">
                        <Link href="/admin">
                          <a className="-m-2 p-2 block text-xs md:text-sm font-medium text-gray-900">
                            Panel de Administración
                          </a>
                        </Link>
                      </div>
                      <div className="flow-root">
                        <Link href="/admin/sites">
                          <a className="-m-2 p-2 block text-xs md:text-sm text-gray-500">
                            Sitio
                          </a>
                        </Link>
                      </div>
                      <div className="flow-root">
                        <Link href="/admin/marks">
                          <a className="-m-2 p-2 block text-xs md:text-sm text-gray-500">
                            Marcas
                          </a>
                        </Link>
                      </div>
                      <div className="flow-root">
                        <Link href="/admin">
                          <a className="-m-2 p-2 block text-xs md:text-sm text-gray-500">
                            Productos
                          </a>
                        </Link>
                      </div>
                    </div>
                  )
                }



                {p[0] === 'admin'
                  ? null
                  :
                  <>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                      {
                        isLoggedIn
                          ?
                          <div className="flow-root">
                            <Link href='/' >
                              <a className="-m-2 p-2 block text-xs md:text-sm font-medium text-gray-900  cursor-pointer" onClick={logout}>
                                Salir
                              </a>
                            </Link>
                          </div>

                          :
                          <>
                            <div className="flow-root">
                              <Link href={`/auth/login`}>
                                <a className="-m-2 p-2 block text-xs md:text-sm font-medium text-gray-900">
                                  Login
                                </a>
                              </Link>
                            </div>
                            <div className="flow-root">
                              <Link href={`/auth/register`}>
                                <a className="-m-2 p-2 block text-xs md:text-sm font-medium text-gray-900">
                                  Register
                                </a>
                              </Link>
                            </div>
                          </>
                      }
                    </div>
                  </>
                } */}


                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
                {/* {p[0] === 'admin'
                  ? <>
                    <div className="border-t border-gray-200">
                      <div className="w-full flex items-center justify-between px-6 pt-1 mb-1">
                        <div className="flex items-center">
                          {/* <Image
                      width={50}
                      height={50}
                      src={user?.image}
                      objectFit={'contain'}
                      alt=""
                    /> 
                          <img alt="profile-pic" src={user?.image} className="w-8 h-8 rounded-md" />
                          <p className=" text-xs md:text-sm text-gray-800  leading-4 ml-2 capitalize">{user?.username}</p>
                        </div>
                        <ul className="flex">
                          <div className="ml-2" onClick={out}>
                            <a className="p-2 text-xs md:text-sm text-gray-400 hover:text-gray-500 items-center flex">
                              <span className="sr-only">Logout</span>
                              <HomeIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </a>
                          </div>

                        </ul>
                      </div>
                    </div>
                  </>
                  : null

                } */}

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* <p className="bg-red-600 h-10 flex items-center justify-center text-xs md:text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Obtenga envío gratuito en pedidos superiores a $ 100
        </p> */}

        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">


              <Link href="/" className=''>
                <a className='flex items-center'>
                  {/* <span className="sr-only">Workflow</span> */}
                  <Image
                    width={110}
                    height={40}
                    src={data.logo}
                    objectFit={'contain'}
                    alt=""
                  />
                </a>
              </Link>

              {/* Flyout menus */}

              {
                <Popover.Group className="hidden z-40 lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {route.map((l0: Children) => (
                      // {site?.categories.map((category) => (

                      l0.href === 'home'
                        ?
                        null
                        :
                        <Popover key={l0.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-red-600 text-red-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-xs md:text-sm font-medium border-b-2 -mb-px pt-px capitalize'
                                  )}
                                >
                                  {l0.name}
                                </Popover.Button>
                              </div>
                              {
                                l0.children.length !== 0
                                  ?
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute top-full inset-x-0 text-xs md:text-sm text-gray-500">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                      <div className="relative bg-white">
                                        <div className="max-w-7xl mx-auto px-8">
                                          <div className="grid grid-cols-6 gap-y-10 gap-x-8 py-10">
                                            <div className="col-start-5 grid grid-cols-2 gap-x-8 col-span-4">
                                              {/* {children0.map((featured: any, i) => (
                                        // {category.featured.slice(-2).map((featured, i) => (
                                          <Link key={i} href={`/promociones/${featured.href}`} className="group text-base sm:text-xs md:text-sm">
                                            <a>
                                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-white overflow-hidden group-hover:opacity-75 leading-none">
                                              <Image
                                                src={featured.imageSrc}
                                                alt={featured.imageAlt}
                                                width='250'
                                                height='250'
                                                objectFit={"cover"}
                                                objectPosition={'center'}
                                              />
                                            </div>
                                            <div className="mt-3 block font-medium text-gray-900 capitalize">
                                              <span className="z-10 inset-0" aria-hidden="true" />
                                              {featured.name}
                                            </div>
                                            <p aria-hidden="true" className="mt-1 capitalize ">
                                              Ver Productos
                                            </p>
                                            </a>
                                          </Link>
                                        ))} */}
                                            </div>
                                            <div className="row-start-1 grid grid-cols-4 gap-y-10 gap-x-8 text-xs md:text-sm col-span-4">
                                              {l0.children.map((l1: Children, i: number) => (
                                                <div key={i}>
                                                  <Link href={`/${l0.href}/${l1.href}`}>
                                                    <a className="font-medium text-gray-900 capitalize">
                                                      {l1.name}
                                                    </a>
                                                  </Link>

                                                  {
                                                    l1.children
                                                      ?
                                                      <ul
                                                        role="list"
                                                        aria-labelledby={`${l1.name}-heading`}
                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                      >
                                                        {l1.children.map((l2: Children, i: number) => (
                                                          // {section.items.slice(0,4).map((item:any, i) => (
                                                          <li key={i} className="flex">
                                                            <Link href={`/${l0.href}/${l1.href}/${l2.href}`}>
                                                              <a className="hover:text-gray-800 capitalize">

                                                                {l2.name}
                                                              </a>
                                                            </Link>
                                                          </li>
                                                        ))}
                                                        {/* {
                                                        l1.children.length > 3
                                                          ?
                                                          <li className="flow-root">
                                                            <Link href={`/${l0.href}/${l1.href}`}>

                                                              <a className="-m-2 p-2 mb-3 block text-xs md:text-sm text-gray-900">
                                                                Ver Todo {'>'}
                                                              </a>
                                                            </Link>
                                                          </li>
                                                          :
                                                          null
                                                      } */}

                                                      </ul>
                                                      :
                                                      null
                                                  }
                                                </div>

                                              ))}
                                            </div>

                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                  :
                                  null
                              }
                            </>
                          )}
                        </Popover>

                    ))}

                    {[].map((page: any, i) => (
                      // {site.pages.map((page, i) => (
                      <Link key={i} href={page.href}>

                        <a
                          className="flex items-center text-xs md:text-sm font-medium text-gray-700 hover:text-gray-800 capitalize"
                        >
                          {page.name}
                        </a>
                      </Link>
                    ))}
                    {/* {
                    isLoggedIn && user?.role === 'ADMIN_ROL' && p[0] === 'admin' && (
                      <>
                        <Link href="/admin/sites">
                          <a
                            className="flex items-center text-xs md:text-sm font-medium text-gray-700 hover:text-gray-800 capitalize"
                          >
                            Sitio
                          </a>
                        </Link>
                        <Link href="/admin/marks">
                          <a
                            className="flex items-center text-xs md:text-sm font-medium text-gray-700 hover:text-gray-800 capitalize"
                          >
                            Marcas
                          </a>
                        </Link>
                        <Link href="/admin">
                          <a
                            className="flex items-center text-xs md:text-sm font-medium text-gray-700 hover:text-gray-800 capitalize"
                          >
                            Productos
                          </a>
                        </Link>
                      </>
                    )
                  } */}

                  </div>
                </Popover.Group>
              }




              {/* <div className="ml-auto flex items-center">
                {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link href={`/auth/login`}>
                    <a className="text-xs md:text-sm font-medium text-gray-700 hover:text-gray-800">
                      Login
                    </a>
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link href={`/auth/register`}>
                    <a className="text-xs md:text-sm font-medium text-gray-700 hover:text-gray-800">
                      Register
                    </a>
                  </Link>
                </div> */}

              {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-xs md:text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> 

                {p[0] === 'admin'
                  ? null
                  :
                  <>
                    {
                      isLoggedIn
                        ?
                        <>

                          {
                            user?.role === 'ADMIN_ROL' && (

                              <Link href="/admin">
                                <a className="lg:flex lg:ml-3 hidden">
                                  <div className="p-2 text-gray-400 hover:text-gray-500 flex">
                                    <span className="sr-only">Admin</span>
                                    <FolderOpenIcon className="w-6 h-6" aria-hidden="true" />
                                  </div>
                                </a>
                              </Link>
                            )
                          }
                          {/* <div className="lg:flex lg:ml-2 hidden" onClick={logout}>
                            <a className="p-2 text-gray-400 hover:text-gray-500 items-center flex">
                              <span className="sr-only">Logout</span>
                              <LogoutIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </a>
                          </div> 
                        </>
                        :
                        <Link href="/auth/login">

                          <div className="lg:flex lg:ml-2 hidden">
                            <a className="p-2 text-gray-400 hover:text-gray-500 items-center flex">
                              <span className="sr-only">Login</span>
                              <LoginIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </Link>
                    }
                  </>
                }



                {/* Search */}
              {/* <div className="flex lg:ml-3 items-center">
                  <div onClick={toggleSideSearch} className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div> 
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {p[0] === 'admin'
                  ? <>
                    <div className="hidden lg:flex">
                      <div className="w-full flex items-center justify-between px-6 pt-1 mb-1">
                        <div className="flex items-center">
                          {/* <img alt="profile-pic" src={user?.image} className="w-8 h-8 rounded-md" />
                          <p className=" text-gray-800 text-xs md:text-sm leading-4 ml-2 capitalize">{user?.username}</p> 
                        </div>
                        <ul className="flex">
                          <div className="ml-2" onClick={out}>
                            <a className="p-2 text-gray-400 hover:text-gray-500 items-center flex">
                              <span className="sr-only">Logout</span>
                              <HomeIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </a>
                          </div>

                        </ul>
                      </div>
                    </div>
                  </>
                  : null

                }

                {/* Cart */}
              {/* <div className="ml-4 flow-root lg:ml-3">
                  <div onClick={toggleSideCart} className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-xs md:text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div> 
              </div> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
