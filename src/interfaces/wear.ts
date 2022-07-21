export interface IClothing {
	_id: string;
	name: string;
	brand: string;
	image: string[];
	description: string;
	inStock: number;
	slug: string;
	category: string;
	section: string;
	item: string;
	price: number;
	oldPrice: number;
	tags: string[];
	client: string;
	status: boolean;
	site: string;
	featured: Featured;
	
	color: string;
	sizes: string[];
}
export interface IMark {
	_id: string;
	name: string;
	href: string;
	imageSrc: string;
	imageAlt?: string;
	description: string;
	}
export interface Wear {
  _id: string;
  article: Article;
  routes: Routes;
  site: string;
  status: boolean;
  articleType: ArticleTypeW
}
export interface Article {
  title: string;
  slug: string;
  mark: string;
  inStock: number;
  price: number;
  discountPrice: number;
  description: string;
  featured: Featured;
  specs: Specs[];
  tags: Tags[];
  image: ImageW[];
}
export interface Specs {
  id: string;
  text: string;
}
export interface Tags {
  id: string;
  text: string;
}
export interface ImageW {
  id: string;
  imageSrc: string;
  imageAlt: string;
}
export interface Featured {
  name: string
  href: string
}
export interface Routes {
  section: Section;
  category: Category;
  subCategory: SubCategory;
  item: Item;
}
export interface Section {
  name: string
  href: string
}
export interface Category  {
  name: string
  href: string
}
export interface SubCategory  {
  name: string
  href: string
}
export interface Item  {
  name: string
  href: string
}
//TODO: 
export interface ArticleTypeW {
  sizes: Sizes[]
  colors: Colors[]
}
export interface Sizes {
  id: string;
  name: string;
  inStock: number;
}
export interface Colors {
  id: string;
  name: string;
  class: string;
  selectedClass: string;
}
//TODO: 
export interface listWearsWithCursor {
  page: Page;
  pageData:PageData;
}
export interface Page {
  edges: Edges[];
  pageInfo: PageInfo;
}
export interface Edges {
  cursor: string
  node: Wear
}
export interface PageInfo{
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
export interface PageData {
  count: number;
  limit: number;
  offset: number;
}
export interface CreateProductInput {
  _id: string;
  name: string;
  mark: string;
  description: string;
  featured: string;
  section: string;
  category: string;
  subCategory: string;
  item: string;
  inStock: number;
  price: number;
  discountPrice: number;
  site: string;

  specs:string[];
  imageSrc:string[];
  tags:string[];
}