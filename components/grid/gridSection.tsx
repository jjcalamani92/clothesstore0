import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IResponsive } from "../../src/interfaces/crisdev";
import { Section0, Featured, Item } from '../../src/interfaces';
import { CardSection, CardSite } from "../card";
import { Main } from "../component";

interface GridSection {
  responsive?: IResponsive
  data: Section0[] | Featured[] | Item[] | undefined
  // data: Category[] | Section[] | Featured[] | Item[] | IMark[];
}
export const GridSection:FC<GridSection> = ({data, responsive}) => {
  return (
    <Main>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
            {data?.map((d, i) => (
              <CardSection data={d} key={i} />
            ))}
          </div>
    </Main>
  )
}