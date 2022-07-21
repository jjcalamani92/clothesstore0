import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { REMOVE_SITE } from "../../src/graphql/mutation/site.mutation";
import { Article } from "../../src/interfaces/wear";
import { graphQLClientS } from "../../src/swr/graphQLClient";
import { getURL } from "../../src/utils/function";
import { Button } from "../component";

interface CardProduct {
  article: Article;
}

export const CardProduct: FC<CardProduct> = ({ article }) => {
  console.log(article);
  
  const { push, pathname, query } = useRouter()
  const url = getURL(pathname, query)
  const { title, slug, image } = article
  const onDelete = async (id: string) => {
    await graphQLClientS.request(REMOVE_SITE, { _id: id })
    push(`${url}`)

  }
  return (
    <div className="shadow-lg p-2 ">
      <Link href={`/${url}/${slug}`}>
        <a>
          <div className="w-full bg-white rounded-sm overflow-hidden leading-none">
            <Image
              src={"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"}
              alt={title}
              width={210}
              height={210}
              objectFit={'cover'}
            />
          </div>
          <div className="py-2 flex justify-between">
            <h3 className="text-xs md:text-sm text-gray-700">
              {title}
            </h3>
          </div>
        </a>
      </Link>
      <Button bg="none" content='eliminar' click={() => onDelete('s')} />
    </div>
  )
}
