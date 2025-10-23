import React from 'react';
import { blogPosts } from '../data/blogPosts';

interface BlogPostDetailProps {
  postId: number;
  onBack: () => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ postId, onBack }) => {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={onBack}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Only show detailed content for the technical article (id: 0)
  if (postId !== 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          ← Back to Blog
        </button>
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">This article is not available for preview.</p>
          <p className="text-sm text-gray-500">Only the technical article is available for detailed viewing.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
      >
        ← Back to Blog
      </button>

      {/* Header - Professional Blog Style */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag.label}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatarSrc}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.date} • {post.readTime} min read</p>
            </div>
          </div>
        </div>
        
        <img
          src={post.imageSrc}
          alt={post.imageAlt}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      </div>

      {/* Content - Professional Blog Style */}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Migrating a traditional blog to a modern React application can seem daunting, but with Anima's design-to-code platform, the process becomes surprisingly straightforward. This guide will walk you through migrating your existing blog to a headless CMS setup using React, Contentful, and Anima's powerful automation tools.
            </p>
          </section>

          {/* What You'll Need */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Need</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>An Anima account (free at <a href="https://dev.animaapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dev.animaapp.com</a>)</li>
              <li>A Contentful account (free tier available)</li>
              <li>Basic familiarity with React (or willingness to learn)</li>
              <li>Your existing blog URL</li>
            </ul>
          </section>

          {/* Step 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Clone Your Website with Anima</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Start by visiting <a href="https://dev.animaapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dev.animaapp.com</a> and create a new project. Simply paste the URL of the website you wish to clone (e.g., your existing blog's homepage).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anima will automatically analyze your website's design, structure, and content, generating a pixel-perfect, responsive replica that serves as an inspiration or skeleton for your new React application.
            </p>
            <img src="https://i.postimg.cc/8zr1BstY/Screenshot-2025-10-23-at-1-07-58.png" alt="Anima website cloning interface" className="w-full h-auto rounded-lg my-6" />
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Upload Screenshots for Analysis</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Following the official Anima documentation, upload screenshots of your current blog's key pages to get a comprehensive analysis:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Homepage</li>
              <li>Individual blog post pages</li>
              <li>Category/archive pages</li>
              <li>About/contact pages</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anima will automatically analyze your design patterns, color schemes, typography, and layout structure.
            </p>
            <img src="https://i.postimg.cc/QCy3cr5G/Screenshot-2025-10-23-at-1-08-27.png" alt="Anima design analysis interface" className="w-full h-auto rounded-lg my-6" />
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Generate React Components</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once Anima has analyzed your blog, it will generate clean, production-ready React components. The platform automatically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Converts your designs to React/TypeScript code</li>
              <li>Creates responsive layouts that work on all devices</li>
              <li>Generates Tailwind CSS for styling</li>
              <li>Maintains your original design's visual hierarchy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Example Generated Component:</h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`const BlogPostCard = ({ post }) => {
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
};`}</code>
              </pre>
            </div>
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Set Up Contentful CMS</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create a new space in Contentful and define your content model:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
              <li><strong>Blog Post Content Type:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Title (Short text)</li>
                  <li>Slug (Short text, unique)</li>
                  <li>Content (Rich text)</li>
                  <li>Excerpt (Long text)</li>
                  <li>Cover Image (Media)</li>
                  <li>Author (Reference to Author content type)</li>
                  <li>Category (Short text)</li>
                  <li>Published Date (Date & time)</li>
                </ul>
              </li>
              <li><strong>Author Content Type:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name (Short text)</li>
                  <li>Bio (Long text)</li>
                  <li>Avatar (Media)</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Step 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Migrate Your Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Use Contentful's Management API to bulk import your existing blog posts:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`const migrateBlogPosts = async (posts) => {
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
};`}</code>
              </pre>
            </div>
          </section>

          {/* Step 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Connect React to Contentful</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Install the Contentful SDK and create data fetching hooks:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
              <pre className="text-green-400 text-sm">
                <code>{`npm install contentful`}</code>
              </pre>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`// lib/contentful.js
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
};`}</code>
              </pre>
            </div>
          </section>

          {/* Step 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 7: Deploy to Netlify</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
              <li>Connect your GitHub repository to Netlify</li>
              <li>Set build command: <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm run build</code></li>
              <li>Set publish directory: <code className="bg-gray-100 px-2 py-1 rounded text-sm">build</code></li>
              <li>Add environment variables:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">REACT_APP_CONTENTFUL_SPACE_ID</code></li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">REACT_APP_CONTENTFUL_ACCESS_TOKEN</code></li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of This Approach</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Faster Development:</strong> Anima generates production-ready code in minutes</li>
              <li><strong>Design Consistency:</strong> Your new blog maintains the exact look and feel of the original</li>
              <li><strong>Modern Architecture:</strong> Headless CMS provides flexibility for future changes</li>
              <li><strong>Better Performance:</strong> React and static generation improve loading speeds</li>
              <li><strong>SEO Friendly:</strong> Proper meta tags and structured data are automatically included</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Migrating your blog to React with Anima and Contentful transforms your traditional blog into a modern, scalable web application. The process is straightforward, and the result is a blog that's faster, more maintainable, and ready for future growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The key is leveraging Anima's design analysis capabilities to preserve your blog's unique personality while modernizing its technical foundation. Your readers will notice the improved performance, and you'll appreciate the easier content management experience.
            </p>
          </section>
        </div>
      </div>

      {/* Author Bio */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-start space-x-4">
          <img
            src={post.author.avatarSrc}
            alt={post.author.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
            <p className="text-gray-600">
              Sales Engineer passionate about modern web development and design-to-code automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
