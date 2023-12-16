import { type Image, type SanityDocument, type Slug } from 'sanity';

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'SOUL SOVEREIGNTY';
export const SITE_DESCRIPTION = 'Journey into conscious awakening. Find your purpose, and the source of your power.  Connect with your True Self.';

type NamedAsset = {
	id: Slug // has property called 'current' of type string
}

export type Pic = NamedAsset & SanityDocument & {
	caption: string,
	group: string,
	pic: Image,
	imageUrl: string //derived property
}

export type Post = SanityDocument & {
	body: {
		title: string;
	}
	publishedAt: string,
	pubDate: Date,
	updatedDate?: Date,
	title: string,
	slug: Slug,
	mainImage: Image
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
