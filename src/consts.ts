import { type Image, type SanityDocument, type Slug } from 'sanity';
import { type ImageTransform } from 'astro';

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'World At Play';
export const SITE_DESCRIPTION = 'Interactive entertainment expertise: ideation, marketing, planning, production, execution, delivery.';

type NamedAsset = {
	id: Slug // has property called 'current' of type string
}

export type Pic = NamedAsset & SanityDocument & {
	caption: string,
	group: string,
	pic: Image,
	imageUrl: string, //derived property
  meta: ImageTransform
}

export type Card = SanityDocument & {
	title: string,
  tagline: string, //derived property
  description: string,
	group: string,
	pic: Image,
	imageUrl: string //derived property
  meta: ImageTransform
}

export type BasePost = {
	pubDate: Date,
	updatedDate?: Date,
	title: string,
	mainImage: Image  
}

export type Post = SanityDocument & BasePost & {
	body: {
		title: string;
	}
	publishedAt: string,
	slug: Slug
}

// Version 1
// const picMap : PicMap = pics.reduce((acc, pic : Pic) => {
//   acc[pic.id.current as keyof PicMap] = pic;
//   return acc;
// }, {} as PicMap);

// Version 2
// export function mapAsset<V extends object, K extends NamedAsset, T extends K[]>(items:T):V{
// 	const acc = items.reduce((acc, asset:K) => {
// 		acc[asset.id.current as keyof V] = asset;
// 		return acc;
// 	}, {} as V);
// 	return acc;
// }

// Version 3: ChatGPT gave this solution...
export function mapAsset<T extends NamedAsset[]>(items:T):
{
	[K in T[number]['id']['current']]: Extract<T[number], {id : {current:K}}>
}
{
	const acc = items.reduce((acc, asset) => {
		acc[asset.id.current] = asset;
		return acc;
	}, {} as any);
	return acc;
}
