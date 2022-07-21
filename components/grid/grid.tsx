import { useRouter } from "next/router";
import React, { FC, useState } from "react";

import { Card, CardSection, CardSite } from "../card";
import { Main } from "../component";

interface Grid {
  data: any[]
  url: string
  // data: Category[] | Section[] | Featured[] | Item[] | IMark[];
}
export const Grid: FC<Grid> = ({ data, url }) => {  
  return (
    <Main>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
        {data.map((d, i) => (
          <Card data={d} key={i} url={url}/>
        ))}
      </div>
    </Main>
  )
}
