import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Hero } from '../components'
import { Page404, Layout, LayoutAdmin } from '../layouts'
import { SITE, SITES, SITE_PATHS } from '../src/graphql/site.query'
import { Children, ISite, Section0, Section1 } from '../src/interfaces'
import { graphQLClientS } from '../src/swr/graphQLClient'

interface Props {
  site: ISite
  data: ISite
}

const Home: FC<Props> = ({ site, data }) => {
  const { asPath, query, pathname } = useRouter()
  let url = asPath.substring(1).split('/')
  // console.log(site);
  return (
      <Layout
        title={site.data.title}
        pageDescription='StartUp de Tecnologia'
        site= {site}
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
      )),
    ]
  ))
  const paths = path.flat(10).map((data: { slug: string[] }) => (
    {
      params: data
    }
  ))

  return {
    paths,
    fallback: 'blocking'
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = [] } = params as { slug: string[] }
  // console.log('slug', slug);
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })
  return {
    props: { site }, // will be passed to the page component as props
    revalidate: 10,
  }
}
export default Home
