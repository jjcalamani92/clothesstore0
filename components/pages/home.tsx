import Image from "next/image";
import { FC } from "react";
import { Body, Children, Content } from "../../src/interfaces";
interface Props {
  data: Children
  body: Body
}
export const Home:FC<Props> = ({ data,  body }) => {
	const { title, caption, content, imageSrc, button, imageAlt } = body

  return (
		<section className="relative bg-white">
      <Image 
        src={imageSrc}
        alt={imageAlt}
        layout={"fill"}
        // width={100}
        // height={600}
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
      />
			<div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

			<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-extrabold sm:text-5xl capitalize">
						{title}{' '}
						<strong className="font-extrabold text-red-600 sm:block">
							{caption}
						</strong>
					</h1>
					<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
						{content}
					</p>

					<div className="flex flex-wrap gap-4 mt-8 text-center">
						
						<a 
							className="block capitalize w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-red-500 sm:w-auto active:bg-red-500 hover:bg-red-600 focus:outline-none focus:ring"
							href="#"
						>
							{button[0]}
						</a>

						<a
							className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-red-500 sm:w-auto hover:text-red-600 active:text-red-500 focus:outline-none focus:ring capitalize"
							href="#"
						>
							{button[1]}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
