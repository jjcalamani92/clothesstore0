import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Header } from "../components";
import Footer from "../components/footer";
import { HeaderWear } from "../components/headerWear";
import { Home } from "../components/pages/home";
import { ISite } from "../src/interfaces";
import { Page404 } from "./404";

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children?: React.ReactNode;
	site: ISite
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl,
	site
}) => {
	const { pathname, asPath } = useRouter()
  // console.log(asPath);
	// console.log(site.route);
	
	
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
				<meta property="product:price:currency" content="USD" />
				<meta property="product:price:amount" content="25" />
			</Head>
      <HeaderWear data={site.data} route={site.route} />
			{
				asPath === '/'
				?
				<Home />
				: 
				<Page404 />
			}
			<main>
					{children}
			</main>
			<Footer data={site.data} />
			</>
	);
};
