import { ParsedUrlQuery } from "querystring";

export const capitalizar = (str: string) => {
	return str.replace(/\s+/g, " ").replace(/\w\S*/g, function (txt: string) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export const slug = (str: string) => {
	return str
		.toLowerCase()
		.replace(/-/g, " ")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/-/g, "")
		.replace(/\s+/g, " ")
		.replace(/ /g, "-");
}

export const getURL = (pathname: string, query: ParsedUrlQuery) => {
	let url = pathname.substring(1).split('/')
	
	
	// const indice = p.indexOf("[id]")
	// p[indice] = `${query.id}`
  // console.log(p);
	// console.log(Object.keys(query));
	let array = Object.keys(query)
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
	}

	// p.length = p.length-2
	let i = 0
	{
		(query.section5 && query.item6) || (query.section5 && query.featured6)
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`,
			i = url.indexOf("[section3]"),
			url[i] = `${query.section3}`,
			i = url.indexOf("[section4]"),
			url[i] = `${query.section4}`,
			i = url.indexOf("[section5]"),
			url[i] = `${query.section5}`,
			url.length = url.length - 2
		)
		:
		query.section5
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`,
			i = url.indexOf("[section3]"),
			url[i] = `${query.section3}`,
			i = url.indexOf("[section4]"),
			url[i] = `${query.section4}`,
			i = url.indexOf("[section5]"),
			url[i] = `${query.section5}`
		)
		:
		(query.section4 && query.item5) || (query.section4 && query.featured5)
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`,
			i = url.indexOf("[section3]"),
			url[i] = `${query.section3}`,
			i = url.indexOf("[section4]"),
			url[i] = `${query.section4}`,
			url.length = url.length - 2
		)
		:
		query.section4
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`,
			i = url.indexOf("[section3]"),
			url[i] = `${query.section3}`,
			i = url.indexOf("[section4]"),
			url[i] = `${query.section4}`
		)
		:
		(query.section3 && query.item4) || (query.section3 && query.featured4)
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`,
			i = url.indexOf("[section3]"),
			url[i] = `${query.section3}`,
			url.length = url.length - 2
		)
		:
		query.section3
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`,
			i = url.indexOf("[section3]"),
			url[i] = `${query.section3}`
		)
		:
		(query.section2 && query.item3) || (query.section2 && query.featured3)
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`,
			url.length = url.length - 2
		)
		:
		query.section2
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			i = url.indexOf("[section2]"),
			url[i] = `${query.section2}`
		)
		:
		(query.section1 && query.item2) || (query.section1 && query.featured2)
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`,
			url.length = url.length - 2
		)
		:
		query.section1
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			i = url.indexOf("[section1]"),
			url[i] = `${query.section1}`
		)
		:
		(query.section0 && query.item1) || (query.section0 && query.featured1)
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`,
			url.length = url.length - 2
		)
		:
		query.section0
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`,
			i = url.indexOf("[section0]"),
			url[i] = `${query.section0}`
		)
		:
		query.id
		?
		(
			i = url.indexOf("[id]"),
			url[i] = `${query.id}`
		)
		: null
	}
	return url.join('/')
}

export const getURLMutation = (pathname: string, query: ParsedUrlQuery) => {
	let url = getURL(pathname, query).substring(0).split('/')
	url.length = url.length - 1
	return url.join('/')
}