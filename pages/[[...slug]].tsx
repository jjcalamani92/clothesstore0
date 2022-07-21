import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Hero } from '../components'
import { Page404, Layout, LayoutAdmin } from '../layouts'
import { SITE, SITES, SITE_CONTENT, SITE_PATHS, SITE_PATHS_TREE } from '../src/graphql/site.query'
import { Children, ISite, Section0, Section1 } from '../src/interfaces'
import { graphQLClientS } from '../src/swr/graphQLClient'

interface Props {
  site: ISite
  tree: any
}

const Home: FC<Props> = ({ site, tree }) => {
  console.log(tree);
  
  return ( 
    <Layout
      title={site.data.title}
      pageDescription='StartUp de Tecnologia'
      site={site}
    />

  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { site } = await graphQLClientS.request(SITE_PATHS, { _id: process.env.API_SITE })
  let path = site.route.map((data0: Children) => (
    [
      {
        slug: data0.href === 'home' ? [] : [data0.href]
      },
      data0.children
        ?
        data0.children.map((data1: Children) => (
          [{
            slug: [data0.href, data1.href]
          },
          data1.children.map((data2: Children) => (
            [{
              slug: [data0.href, data1.href, data2.href]
            },
            data2.children.map((data3: Children) => ({
              slug: [data0.href, data1.href, data2.href, data3.href]
            }))
            ]
          )),
          ]
        ))
        :
        {
          slug: []
        }
    ]
  ))
  const paths = path.flat(10).map((data: { slug: string[] }) => (
    {
      params: data
    }
  ))
  // console.log(paths);

  return {
    paths,
    fallback: 'blocking'
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = [] } = params as { slug: string[] }
  // console.log('slug', slug);
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })
  const data = await graphQLClientS.request(SITE_PATHS_TREE, { _id: process.env.API_SITE })
  // console.log(data);
  let tree = data.site.route.map((data0: Children, i: number) => (
    {
      title: data0.name,
      key: `0-${i}`,
      children:
        data0.children
          ?
          data0.children.map((data1: Children, j: number) => (
            {
              title: data1.name,
              key: `0-${i}-${j}`,
              children:
              data1.children
              ?
              data1.children.map((data2:Children, k: number) => (
                {
                  title: data2.name,
                  key: `0-${i}-${j}-${k}`,
                }
              ))
              :
              {}

            }
          ))
          :
          {}
    }
    // data0.children 
    //   ?
    //   data0.children.map((data1: Children, j:number) => (
    //   [
    //     {
    //       title: data1.name,
    //       key: `0-${i}-${j}`
    //     },
    //     data1.children
    //     ?
    //     data1.children.map((data2: Children, k:number) => (
    //       {
    //         title: data2.name,
    //         key: `0-${i}-${j}-${k}`
    //       }
    //     ))
    //     : 
    //     {
    //       title: data0.name,
    //     },
    //   ]
    //   ))
    //   :
    //   {
    //     title: data0.name,
    //   },
  ))
  console.log(tree.flat(10));

  return {
    props: { site, tree }, // will be passed to the page component as props
    revalidate: 10,
  }
}
export default Home
