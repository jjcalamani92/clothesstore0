/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useContext, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { HeaderAdmin } from '../components/headerAdmin';
import { HeadingDashboard, HeadingForm } from '../components/component';
import { ISite } from '../src/interfaces';

interface Props {
  title: string
  asPath: string
  data:ISite[]
  site:ISite
}
export const LayoutAdmin:FC<Props> = ({title, asPath, data, site}) => {  
  const { query } = useRouter()
  let url = asPath.substring(1).split('/')
  console.log(url[url.length-1].length);
  // const site = data.find((data: {_id: string; }) => data._id === url[url.length-1])
  // console.log(site);
  
  return (
    <>
      <Head>
				<title>{title}</title>
				<meta name="keywords" />
			</Head>
        <HeaderAdmin />
        <main>
          {
             (query.slug?.length === 3 && url[url.length-1].length === 24) || url[url.length-1] === 'new'
             ?
             <>
              <HeadingForm title="Sitio"/>
              {/* <FormSite site={site} url={asPath}/> */}
             </>
             :
            asPath === '/dashboard/sites'
            ?
            <>
              <HeadingDashboard title='Sitio' url={asPath} />
              {/* <GridSite data={data}/> */}
            </>
            :
           
            null
          }
        </main>
    </>
  )
}
