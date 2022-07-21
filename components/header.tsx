/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  GlobeAltIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  ChartBarIcon,
  DesktopComputerIcon,
  CodeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Data } from '../src/interfaces'

const solutions = [
  {
    name: 'Diseño Web',
    description: 'Diseño, implementación y mantenimiento de sitios web. ',
    href: '#',
    icon: GlobeAltIcon,
  },
  {
    name: 'Seo Marketing',
    description: 'Mejoramos el posicionamiento de tu sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Alojamiento Web',
    description: "La solución completa de Web Hosting en Bolivia. Dominio, SSL y Hosting, todo incluído. ",
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'Publicidad Digital',
    description: "Trabajamos con tu marca, servicio o producto para que sea visible y genere rendimiento en internet.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Diseño De Logos',
    description: 'Nuestros diseños de logotipos son únicos; cada logotipo se crea con IA para que se adapte perfectamente a su negocio e identidad de marca. ',
    href: '#',
    icon: DesktopComputerIcon,
  },
]
const callsToAction = [
  // { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contactar con Ventas', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Centro de ayuda',
    description: 'Obtenga respuestas a todas sus preguntas en nuestros foros o comuniquese con soporte.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guias',
    description: 'Aprende a maximizar nuestra plataforma para sacarle el máximo partido.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'FAQs',
    description: 'Preguntas frecuentes.',
    href: '/FAQs',
    icon: QuestionMarkCircleIcon,
  },
  // { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

const recentPosts = [
  { id: 1, name: 'Como crear rutas en mi sitio web', href: '#' },
  { id: 2, name: 'Como crear marcas de mis productos', href: '#' },
  { id: 3, name: 'Creando mi primer producto', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  data: Data
}

export const Header:FC<Props> = ({data}) => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                {/* <span className="sr-only">Workflow</span> */}
                <CodeIcon
                  className="w-12 h-12 text-orange-500"
                  aria-hidden="true"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                    )}
                  >
                    <span>Servicios</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-100 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-orange-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/prices">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Precios
              </a>
            </Link>
            <Link href="#">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Blogs
              </a>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                    )}
                  >
                    <span>Más</span> 
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-100 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item, i) => (
                            <Link  key={i}
                            href={item.href}>
                            <a
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-orange-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Publicaciones Recientes</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-orange-500 hover:text-orange-600">
                              {' '}
                              Ver todas las publicaciones <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <a>
                    {/* <span className="sr-only">Workflow</span> */}
                    <CodeIcon
                      className="w-12 h-12 text-orange-500"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-orange-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/prices">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Precios
                  </a>
                </Link>

                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a> */}
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-500">
                    Sign in
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
