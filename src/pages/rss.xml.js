import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  posts.sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: 'Me & De',
    description:
      'Field notes from inside the German language, by an English speaker. The German thickens as we go.',
    site: context.site,
    items: posts.map((post) => ({
      title: `${post.data.title} (${post.data.level})`,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
  });
}
