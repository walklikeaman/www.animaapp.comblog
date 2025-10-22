import { Entry } from 'contentful';
import { ContentfulBlogPost } from '../lib/contentful';
import { blogPosts as staticBlogPosts } from '../data/blogPosts';

export interface BlogPost {
  id: string;
  imageSrc: string;
  imageAlt: string;
  tags: Array<{ label: string; href: string }>;
  title: string;
  description: string;
  author: {
    name: string;
    avatarSrc: string;
    href: string;
  };
  date: string;
  readTime: number;
  url: string;
  content?: any;
}

export function convertContentfulToBlogPost(contentfulPost: Entry<ContentfulBlogPost>): BlogPost {
  const { fields } = contentfulPost;

  // Find matching static post for images and avatars
  const staticPost = staticBlogPosts.find(post => 
    post.title.toLowerCase() === fields.title.toLowerCase()
  );

  // Basic conversion, adjust as needed based on your BlogPost type
  return {
    id: contentfulPost.sys.id,
    imageSrc: staticPost?.imageSrc || 'https://via.placeholder.com/768x477',
    imageAlt: staticPost?.imageAlt || fields.title,
    tags: fields.category ? [{ label: fields.category, href: `/blog/category/${fields.category.toLowerCase()}/` }] : [],
    title: fields.title,
    description: fields.excerpt,
    author: {
      name: fields.authorName || 'Unknown Author',
      avatarSrc: staticPost?.author.avatarSrc || 'https://via.placeholder.com/150',
      href: `/blog/author/${fields.authorName?.toLowerCase().replace(/\s+/g, '-')}/`,
    },
    date: fields.publishedAt ? new Date(fields.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A',
    readTime: staticPost?.readTime || 5,
    url: `/blog/posts/${fields.slug}`,
    content: fields.content, // Rich text content
  };
}