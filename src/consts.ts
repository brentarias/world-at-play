import { type Image } from 'sanity';

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'SOUL SOVEREIGNTY';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export type Post = {
	body: {
		title: string;
	}
	publishedAt: string,
	_updatedAt: string,
	pubDate: Date,
	updatedDate?: Date,
	title: string,
	slug: {
		current: string
	},
	mainImage: Image
}