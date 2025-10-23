export const blogPosts = [
         {
           id: 0,
           imageSrc: "https://media.theresanaiforthat.com/animaapp.png",
           imageAlt: 'How to Migrate Your Blog to React with Anima',
    tags: [
        { label: 'tutorial', href: '/blog/tutorial/' },
        { label: 'migration', href: '/blog/migration/' },
        { label: 'react', href: '/blog/react/' },
    ],
    title: 'How to Migrate Your Blog to React with Anima',
    description: 'Complete guide to migrating your traditional blog to a modern React application using Anima\'s design-to-code platform and Contentful CMS.',
    author: {
      name: 'Nikita Nakonechnyi',
      avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/nikita-nakonechnyi/',
    },
    date: 'January 25, 2025',
    readTime: 12,
    url: '/blog/how-to-migrate-blog-to-react-with-anima/',
    content: `
# How to Migrate Your Blog to React with Anima

## Introduction

Migrating a traditional blog to a modern React application can seem daunting, but with Anima's design-to-code platform, the process becomes surprisingly straightforward. This guide will walk you through migrating your existing blog to a headless CMS setup using React, Contentful, and Anima's powerful automation tools.

## What You'll Need

- An Anima account (free at [dev.animaapp.com](https://dev.animaapp.com))
- A Contentful account (free tier available)
- Basic familiarity with React (or willingness to learn)
- Your existing blog URL

## Step 1: Clone Your Website with Anima

Start by visiting [dev.animaapp.com](https://dev.animaapp.com) and create a new project. Simply paste the URL of the website you wish to clone (e.g., your existing blog's homepage).

Anima will automatically analyze your website's design, structure, and content, generating a pixel-perfect, responsive replica that serves as an inspiration or skeleton for your new React application.

<img src="https://i.postimg.cc/8zr1BstY/Screenshot-2025-10-23-at-1-07-58.png" alt="Anima website cloning interface" style="width: 100%; height: auto; object-fit: cover; border-radius: 8px; margin: 24px 0;" />

## Step 2: Upload Screenshots for Analysis

Following the official Anima documentation, upload screenshots of your current blog's key pages to get a comprehensive analysis:

- Homepage
- Individual blog post pages
- Category/archive pages
- About/contact pages

Anima will automatically analyze your design patterns, color schemes, typography, and layout structure.

<img src="https://i.postimg.cc/QCy3cr5G/Screenshot-2025-10-23-at-1-08-27.png" alt="Anima design analysis interface" style="width: 100%; height: auto; object-fit: cover; border-radius: 8px; margin: 24px 0;" />

## Step 3: Generate React Components

Once Anima has analyzed your blog, it will generate clean, production-ready React components. The platform automatically:

- Converts your designs to React/TypeScript code
- Creates responsive layouts that work on all devices
- Generates Tailwind CSS for styling
- Maintains your original design's visual hierarchy

\`\`\`jsx
// Example of generated component
const BlogPostCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" />
          <span className="text-sm text-gray-500">{post.author.name}</span>
        </div>
      </div>
    </article>
  );
};
\`\`\`

## Step 4: Set Up Contentful CMS

Create a new space in Contentful and define your content model:

1. **Blog Post Content Type:**
   - Title (Short text)
   - Slug (Short text, unique)
   - Content (Rich text)
   - Excerpt (Long text)
   - Cover Image (Media)
   - Author (Reference to Author content type)
   - Category (Short text)
   - Published Date (Date & time)

2. **Author Content Type:**
   - Name (Short text)
   - Bio (Long text)
   - Avatar (Media)

## Step 5: Migrate Your Content

Use Contentful's Management API to bulk import your existing blog posts:

\`\`\`javascript
// Example migration script
const migrateBlogPosts = async (posts) => {
  for (const post of posts) {
    await contentfulClient.getSpace(SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment => environment.createEntry('blogPost', {
        fields: {
          title: { 'en-US': post.title },
          slug: { 'en-US': post.slug },
          content: { 'en-US': post.content },
          excerpt: { 'en-US': post.excerpt },
          category: { 'en-US': post.category },
          publishedAt: { 'en-US': post.publishedAt }
        }
      }));
  }
};
\`\`\`

## Step 6: Connect React to Contentful

Install the Contentful SDK and create data fetching hooks:

\`\`\`bash
npm install contentful
\`\`\`

\`\`\`javascript
// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getBlogPosts = () => {
  return client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishedAt'
  });
};
\`\`\`

## Step 7: Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: \`npm run build\`
3. Set publish directory: \`build\`
4. Add environment variables:
   - \`REACT_APP_CONTENTFUL_SPACE_ID\`
   - \`REACT_APP_CONTENTFUL_ACCESS_TOKEN\`

## Benefits of This Approach

- **Faster Development:** Anima generates production-ready code in minutes
- **Design Consistency:** Your new blog maintains the exact look and feel of the original
- **Modern Architecture:** Headless CMS provides flexibility for future changes
- **Better Performance:** React and static generation improve loading speeds
- **SEO Friendly:** Proper meta tags and structured data are automatically included

## Conclusion

Migrating your blog to React with Anima and Contentful transforms your traditional blog into a modern, scalable web application. The process is straightforward, and the result is a blog that's faster, more maintainable, and ready for future growth.

The key is leveraging Anima's design analysis capabilities to preserve your blog's unique personality while modernizing its technical foundation. Your readers will notice the improved performance, and you'll appreciate the easier content management experience.
    `
  },
  {
    id: 1,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Figma-to-HTML-full-projects-768x492.jpg",
    imageAlt: 'Figma to HTML: Complete Guide',
    tags: [
        { label: 'design', href: '/blog/design/' },
        { label: 'development', href: '/blog/development/' },
    ],
    title: 'Figma to HTML: Complete Guide',
    description: 'Learn how to convert your Figma designs into clean, semantic HTML code with modern CSS techniques.',
    author: {
      name: 'Michal Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/michal-cohen/',
    },
    date: 'January 15, 2025',
    readTime: 8,
    url: '/blog/figma-to-html-complete-guide/',
  },
  {
    id: 2,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Ovrture-2-768x477.jpg",
    imageAlt: 'Building Responsive Websites',
    tags: [
        { label: 'responsive', href: '/blog/responsive/' },
        { label: 'css', href: '/blog/css/' },
    ],
    title: 'Building Responsive Websites with Modern CSS',
    description: 'Master the art of creating responsive websites that work perfectly on all devices using modern CSS techniques.',
    author: {
      name: 'Ofer LaOr',
      avatarSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/ofer-laor/',
    },
    date: 'January 12, 2025',
    readTime: 6,
    url: '/blog/building-responsive-websites/',
  },
  {
    id: 3,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/how-to-export-figma-to-react-cover-768x477.png",
    imageAlt: 'Figma to React Components',
    tags: [
        { label: 'react', href: '/blog/react/' },
        { label: 'components', href: '/blog/components/' },
    ],
    title: 'From Figma to React Components',
    description: 'Transform your Figma designs into reusable React components with proper state management and styling.',
    author: {
      name: 'Avishay Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/avishay-cohen/',
    },
    date: 'January 10, 2025',
    readTime: 10,
    url: '/blog/figma-to-react-components/',
  },
  {
    id: 4,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Anima-API-768x477.jpg",
    imageAlt: 'API Integration Best Practices',
    tags: [
        { label: 'api', href: '/blog/api/' },
        { label: 'integration', href: '/blog/integration/' },
    ],
    title: 'API Integration Best Practices',
    description: 'Learn the best practices for integrating APIs into your web applications with proper error handling and security.',
    author: {
      name: 'Myriam Cohen',
      avatarSrc: 'https://i.pravatar.cc/150?img=32',
      href: '/blog/author/myriam-cohen/',
    },
    date: 'January 8, 2025',
    readTime: 7,
    url: '/blog/api-integration-best-practices/',
  },
  {
    id: 5,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Remix-Website-Blog-Thumbnail-768x477.jpg",
    imageAlt: 'Modern Web Development',
    tags: [
        { label: 'web development', href: '/blog/web-development/' },
        { label: 'modern', href: '/blog/modern/' },
    ],
    title: 'Modern Web Development Trends',
    description: 'Explore the latest trends in web development including new frameworks, tools, and methodologies.',
    author: {
      name: 'Orit Golowinski',
      avatarSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/orit-golowinski/',
    },
    date: 'January 5, 2025',
    readTime: 9,
    url: '/blog/modern-web-development-trends/',
  },
  {
    id: 6,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Blog-Intro-Thumbnail-768x477.jpg",
    imageAlt: 'Performance Optimization',
    tags: [
        { label: 'performance', href: '/blog/performance/' },
        { label: 'optimization', href: '/blog/optimization/' },
    ],
    title: 'Web Performance Optimization',
    description: 'Discover techniques to optimize your website performance for better user experience and SEO rankings.',
    author: {
      name: 'Michal Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/michal-cohen/',
    },
    date: 'January 3, 2025',
    readTime: 6,
    url: '/blog/web-performance-optimization/',
  },
  {
    id: 7,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Cover-image-1-768x477.jpg",
    imageAlt: 'Team Collaboration Tools',
    tags: [
        { label: 'collaboration', href: '/blog/collaboration/' },
        { label: 'team', href: '/blog/team/' },
    ],
    title: 'Effective Team Collaboration in Web Development',
    description: 'Learn how to improve team collaboration using modern tools and methodologies in web development projects.',
    author: {
      name: 'Ofer LaOr',
      avatarSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/ofer-laor/',
    },
    date: 'December 30, 2024',
    readTime: 8,
    url: '/blog/effective-team-collaboration/',
  },
  {
    id: 8,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Vibe-coding-is-the-new-Prototyping-768x477.jpg",
    imageAlt: 'Accessibility in Web Design',
    tags: [
        { label: 'accessibility', href: '/blog/accessibility/' },
        { label: 'inclusive design', href: '/blog/inclusive-design/' },
    ],
    title: 'Creating Accessible Web Experiences',
    description: 'Understand the importance of web accessibility and learn how to create inclusive digital experiences.',
    author: {
      name: 'Avishay Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/avishay-cohen/',
    },
    date: 'December 28, 2024',
    readTime: 7,
    url: '/blog/creating-accessible-web-experiences/',
  },
  {
    id: 9,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/video-thumbnail-genai-768x432.jpg",
    imageAlt: 'Future of Web Development',
    tags: [
        { label: 'future', href: '/blog/future/' },
        { label: 'technology', href: '/blog/technology/' },
    ],
    title: 'The Future of Web Development',
    description: 'Explore emerging technologies and trends that will shape the future of web development.',
    author: {
      name: 'Myriam Cohen',
      avatarSrc: 'https://i.pravatar.cc/150?img=32',
      href: '/blog/author/myriam-cohen/',
    },
    date: 'December 25, 2024',
    readTime: 9,
    url: '/blog/future-of-web-development/',
  },
  {
    id: 10,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Figma-to-HTML-full-projects-768x492.jpg",
    imageAlt: 'Building Design Systems with Anima',
    tags: [
        { label: 'design systems', href: '/blog/design-systems/' },
        { label: 'enterprise', href: '/blog/enterprise/' },
    ],
    title: 'Building Design Systems with Anima: A Complete Guide',
    description: 'Learn how to create scalable design systems using Anima. From component libraries to design tokens, discover best practices for maintaining consistency',
    author: {
      name: 'Orit Golowinski',
      avatarSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/orit-golowinski/',
    },
    date: 'September 15, 2025',
    readTime: 3,
    url: '/blog/building-design-systems-with-anima/',
  },
  {
    id: 11,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Ovrture-2-768x477.jpg",
    imageAlt: 'How Fortune 500 Companies Use Anima',
    tags: [
        { label: 'enterprise', href: '/blog/enterprise/' },
        { label: 'case studies', href: '/blog/case-studies/' },
    ],
    title: 'How Fortune 500 Companies Use Anima for Enterprise Development',
    description: 'Discover how leading enterprises leverage Anima to accelerate their design-to-code workflows, reduce development time, and maintain design consistency at',
    author: {
      name: 'Michal Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/michal-cohen/',
    },
    date: 'August 5, 2025',
    readTime: 2,
    url: '/blog/fortune-500-companies-use-anima/',
  },
  {
    id: 12,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/how-to-export-figma-to-react-cover-768x477.png",
    imageAlt: 'Advanced Code Generation Techniques with Anima AI',
    tags: [
        { label: 'code gen', href: '/blog/code-gen/' },
        { label: 'ai', href: '/blog/ai/' },
    ],
    title: 'Advanced Code Generation Techniques with Anima AI',
    description: 'Explore advanced techniques for generating clean, maintainable code using Anima AI. Learn about custom prompts, code optimization, and integration with',
    author: {
      name: 'Ofer LaOr',
      avatarSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/ofer-laor/',
    },
    date: 'May 12, 2025',
    readTime: 3,
    url: '/blog/advanced-code-generation-techniques/',
  },
  {
    id: 13,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Anima-API-768x477.jpg",
    imageAlt: 'API-First Development with Anima',
    tags: [
        { label: 'api', href: '/blog/api/' },
        { label: 'development', href: '/blog/development/' },
    ],
    title: 'API-First Development with Anima: Building Scalable Applications',
    description: 'Master API-first development approaches using Anima. Learn how to design, implement, and maintain robust APIs for modern web applications.',
    author: {
      name: 'Avishay Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/avishay-cohen/',
    },
    date: 'April 20, 2025',
    readTime: 5,
    url: '/blog/api-first-development-with-anima/',
  },
  {
    id: 14,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Remix-Website-Blog-Thumbnail-768x477.jpg",
    imageAlt: 'Responsive Design Mastery',
    tags: [
        { label: 'responsive', href: '/blog/responsive/' },
        { label: 'design', href: '/blog/design/' },
    ],
    title: 'Responsive Design Mastery: From Mobile to Desktop',
    description: 'Complete guide to creating responsive designs that work seamlessly across all devices using modern CSS and Anima tools.',
    author: {
      name: 'Myriam Cohen',
      avatarSrc: 'https://i.pravatar.cc/150?img=32',
      href: '/blog/author/myriam-cohen/',
    },
    date: 'March 15, 2025',
    readTime: 6,
    url: '/blog/responsive-design-mastery/',
  },
  {
    id: 15,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Blog-Intro-Thumbnail-768x477.jpg",
    imageAlt: 'Performance Optimization Strategies',
    tags: [
        { label: 'performance', href: '/blog/performance/' },
        { label: 'optimization', href: '/blog/optimization/' },
    ],
    title: 'Performance Optimization Strategies for Modern Web Apps',
    description: 'Learn advanced performance optimization techniques to make your web applications lightning fast and efficient.',
    author: {
      name: 'Orit Golowinski',
      avatarSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/orit-golowinski/',
    },
    date: 'February 28, 2025',
    readTime: 8,
    url: '/blog/performance-optimization-strategies/',
  },
  {
    id: 16,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Cover-image-1-768x477.jpg",
    imageAlt: 'Team Collaboration Best Practices',
    tags: [
        { label: 'collaboration', href: '/blog/collaboration/' },
        { label: 'team', href: '/blog/team/' },
    ],
    title: 'Team Collaboration Best Practices in Web Development',
    description: 'Discover effective strategies for improving team collaboration and productivity in web development projects.',
    author: {
      name: 'Michal Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/michal-cohen/',
    },
    date: 'February 10, 2025',
    readTime: 7,
    url: '/blog/team-collaboration-best-practices/',
  },
  {
    id: 17,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Vibe-coding-is-the-new-Prototyping-768x477.jpg",
    imageAlt: 'Accessibility-First Development',
    tags: [
        { label: 'accessibility', href: '/blog/accessibility/' },
        { label: 'inclusive design', href: '/blog/inclusive-design/' },
    ],
    title: 'Accessibility-First Development: Creating Inclusive Web Experiences',
    description: 'Learn how to build accessible web applications from the ground up, ensuring your products work for everyone.',
    author: {
      name: 'Ofer LaOr',
      avatarSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/ofer-laor/',
    },
    date: 'January 25, 2025',
    readTime: 9,
    url: '/blog/accessibility-first-development/',
  },
  {
    id: 18,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/video-thumbnail-genai-768x432.jpg",
    imageAlt: 'Future of Web Development',
    tags: [
        { label: 'future', href: '/blog/future/' },
        { label: 'technology', href: '/blog/technology/' },
    ],
    title: 'The Future of Web Development: Emerging Technologies and Trends',
    description: 'Explore the cutting-edge technologies and trends that will shape the future of web development and design.',
    author: {
      name: 'Avishay Cohen',
      avatarSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      href: '/blog/author/avishay-cohen/',
    },
    date: 'January 20, 2025',
    readTime: 10,
    url: '/blog/future-of-web-development-trends/',
  },
  {
    id: 19,
    imageSrc: "https://c.animaapp.com/mh1wj6u6DkMTRK/assets/Anima-API-768x477.jpg",
    imageAlt: 'AI Agents vs Assistants vs Tools',
    tags: [
        { label: 'genai', href: '/blog/genai/' },
        { label: 'ai', href: '/blog/ai/' },
    ],
    title: 'Understanding the differences between AI agents, assistants, and other intelligent tools',
    description: 'Explore the differences between AI agents, assistants, and tools, understanding their unique roles, capabilities, and applications in technology.',
    author: {
      name: 'Myriam Cohen',
      avatarSrc: 'https://i.pravatar.cc/150?img=32',
      href: '/blog/author/myriam-cohen/',
    },
    date: 'January 18, 2025',
    readTime: 7,
    url: '/blog/understanding-ai-agents-assistants-tools/',
  }
];