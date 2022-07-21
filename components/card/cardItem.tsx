import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { DELETE_ITEM_1, DELETE_ITEM_2, DELETE_ITEM_3, DELETE_ITEM_4, DELETE_ITEM_5, DELETE_SECTION_0, DELETE_SECTION_1, DELETE_SECTION_2, DELETE_SECTION_3, DELETE_SECTION_4, DELETE_SECTION_5, REMOVE_SITE } from "../../src/graphql/mutation/site.mutation";
import { Featured, Item, Section0 } from "../../src/interfaces";
import { graphQLClientS } from "../../src/swr/graphQLClient";
import { getURL } from "../../src/utils/function";
import { Button } from "../component";

interface CardItem {
  data: Section0 | Featured | Item
}

export const CardItem: FC<CardItem> = ({ data }) => {
  const {replace, pathname, query, push} = useRouter()
  const {name, href, imageSrc, imageAlt, id} = data
  const url = getURL(pathname, query)
  
  const onDelete = async (id: string) => {
    {
      query.section4
      ?
      await graphQLClientS.request(DELETE_ITEM_5, { _id: query.id, input: {'section_level_0': query.section0, 'section_level_1': query.section1, 'section_level_2': query.section2, 'section_level_3': query.section3, 'section_level_4': query.section4, 'section_level_5': id}})
      :
      query.section3
      ?
      await graphQLClientS.request(DELETE_ITEM_4, { _id: query.id, input: {'section_level_0': query.section0, 'section_level_1': query.section1, 'section_level_2': query.section2, 'section_level_3': query.section3, 'section_level_4': id}})
      :
      query.section2
      ?
      await graphQLClientS.request(DELETE_ITEM_3, { _id: query.id, input: {'section_level_0': query.section0, 'section_level_1': query.section1, 'section_level_2': query.section2, 'section_level_3': id}})
      :
      query.section1
      ?
      await graphQLClientS.request(DELETE_ITEM_2, { _id: query.id, input: {'section_level_0': query.section0, 'section_level_1': query.section1, 'section_level_2': id}})
      :
      query.section0
      ?
      await graphQLClientS.request(DELETE_ITEM_1, { _id: query.id, input: {'section_level_0': query.section0, 'section_level_1': id}})
      :
      null
    }
    push(`/${url}`)
  }

  return (
    <div className="shadow-lg p-2 ">
      <Link href={`/${url}/i/${href}`}>
        <a>
          <div className="w-full bg-white rounded-sm overflow-hidden leading-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={210}
              height={210}
              objectFit={'cover'}
            />
          </div>
          <div className="py-2 flex justify-between">
            <h3 className="text-xs md:text-sm text-gray-700">
              {name}
            </h3>
          </div>
        </a>
      </Link>
      <Button bg="none" content='eliminar' click={() => onDelete(id)} />
    </div>
  )
}