import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Header } from "../components";
import { HeaderWear } from "../components/headerWear";
import { ISite } from "../src/interfaces";

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: React.ReactNode;
	site: ISite
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl,
	site
}) => {
	const router = useRouter()
  const { pathname } = router
  const p = pathname.substring(1).split('/')
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
      <HeaderWear data={site.data} />
			{/* <Header /> */}
			{/* <Search01 /> */}
			<main>
					{children}
			</main>
			{/* <Footer /> */}
			
			</>
	);
};
