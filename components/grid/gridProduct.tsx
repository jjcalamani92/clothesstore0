import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { Edges } from "../../src/interfaces/wear";

import { CardProduct } from "../card/cardProducts";
import { Main } from "../component";

interface GridProduct {
  edges: Edges[]
}
export const GridProduct: FC<GridProduct> = ({ edges }) => {
  
  return (
    <Main>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
        {edges.map((edge, i) => (
          <CardProduct article={edge.node.article} key={i} />
        ))}
      </div>
    </Main>
  )
}
