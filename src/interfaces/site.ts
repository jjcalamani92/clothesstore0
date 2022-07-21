export interface ISite {
  _id: string
  data: Data
  routes: Route
  route: Children[]
  client: string
  type: string
}
export interface Data {
  title: string;
  domain: string;
  logo: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  numberPhone: number;
  address: string;
  location: string;
  description: string;
}

export interface Route {
  section_level_0: Section0[];
}

export interface Section {
  id: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: Item[];
  featured:Featured[];
}

export interface Section0 extends Section {
  section_level_1: any
}
export interface Section1 extends Section0 {
  section_level_2: any
}
export interface Section2 extends Section1 {
  section_level_3: any
}
export interface Section3 extends Section2 {
  section_level_4: any
}
export interface Section4 extends Section3 {
  section_level_5: any
}
export interface Section5 extends Section4 {
  section_level_6: any
}
export interface Featured {
  uid: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
export interface Item {
  uid: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
export interface Children {
  uid: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items?: Item[];
  featured?:Featured[];
  children:Children[];
}