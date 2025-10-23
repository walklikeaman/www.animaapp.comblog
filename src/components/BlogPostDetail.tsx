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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Guide Will Do For You</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Have an old blog that's slow or hard to manage?</strong> This guide will show you how to transform it into a modern, fast website using AI-powered tools. You'll learn how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Use AI to automatically recreate your blog's design</li>
              <li>Set up a modern content management system</li>
              <li>Deploy your new blog to the web for free</li>
              <li>Make your blog faster and more professional</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>No coding experience needed!</strong> This guide is designed for beginners. We'll use visual tools and AI to do the heavy lifting for you.
              </p>
            </div>
          </section>

          {/* What You'll Need */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Need</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These platforms all offer generous free plans, so you won't need to pay anything to follow this guide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>An Anima account</strong> (free at <a href="https://dev.animaapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dev.animaapp.com</a>) - This is our AI tool</li>
              <li><strong>A Contentful account</strong> (free tier available) - This will store your blog content</li>
              <li><strong>A GitHub account</strong> (free) - This will host your code</li>
              <li><strong>A Netlify account</strong> (free) - This will host your website</li>
              <li><strong>Your existing blog URL</strong> - The website you want to recreate</li>
            </ul>
          </section>

          {/* Step 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Let AI Recreate Your Website</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we're doing:</strong> We'll use AI to automatically analyze your existing blog and recreate it with modern technology. Think of it as taking a photo of your website and having AI build a better version.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Before you start:</strong> Make sure you have the URL of your existing blog ready (like "https://myblog.com").
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Use Anima's AI Playground</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Go to <a href="https://dev.animaapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dev.animaapp.com</a> and sign up for a free account</li>
              <li>Click "Create New Project"</li>
              <li>Paste your blog's URL in the input field</li>
              <li>Click "Analyze Website" and wait for the AI to work its magic</li>
            </ol>
            
            <img src="https://i.postimg.cc/BnsNfZvc/Screenshot-2025-10-23-at-16-21-44.png" alt="Anima playground interface" className="w-full h-auto rounded-lg my-6" />
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What happens next:</strong> Anima's AI will automatically examine your website's design, colors, layout, and structure. It will then generate clean, modern code that recreates your blog's appearance but with better performance and mobile compatibility.
            </p>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Help AI Understand Your Blog Better</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we're doing:</strong> To make sure the AI recreates your blog perfectly, we'll give it screenshots of your most important pages. This helps it understand your design style and layout preferences.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Screenshots of These Pages</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Take screenshots of these key pages from your existing blog:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Your homepage</strong> - The main page visitors see first</li>
              <li><strong>A blog post page</strong> - How individual articles look</li>
              <li><strong>Category/archive page</strong> - If you have one (like "All Posts" or "Technology")</li>
              <li><strong>About page</strong> - If you have one</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Pro tip:</strong> Make sure your screenshots show the full page (not just a small part). This helps the AI understand your complete design.
              </p>
            </div>
            
            <img src="https://i.postimg.cc/8zr1BstY/Screenshot-2025-10-23-at-1-07-58.png" alt="Anima design analysis interface" className="w-full h-auto rounded-lg my-6" />
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Use AI Chat to Get Help</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anima includes a helpful AI assistant that can answer questions and guide you through the process. You can ask things like:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>"How do I upload screenshots?"</li>
              <li>"What does this code do?"</li>
              <li>"How can I make my blog faster?"</li>
            </ul>
            <img src="https://i.postimg.cc/bw8LfYvs/Screenshot-2025-10-23-at-16-19-05.png" alt="Anima AI chat interface" className="w-full h-auto rounded-lg my-6" />
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: AI Creates Your New Blog Code</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What happens here:</strong> After analyzing your blog, Anima's AI will automatically create all the code needed for your new blog. This is like having a professional developer build your website for you, but in minutes instead of weeks.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Don't worry about the code!</strong> You don't need to understand it. The AI creates everything automatically, and you'll never have to touch the code directly.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">What the AI Creates For You</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The AI automatically generates:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Mobile-friendly design</strong> - Your blog will look great on phones, tablets, and computers</li>
              <li><strong>Fast loading pages</strong> - Modern code that loads quickly</li>
              <li><strong>Professional styling</strong> - Clean, modern appearance</li>
              <li><strong>Easy content management</strong> - Simple system to add new blog posts</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Example of What Gets Created</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's an example of the kind of code the AI creates (you don't need to understand this - it's just to show you how professional it is):
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`// This is what the AI creates automatically
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
};`}</code>
              </pre>
            </div>
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Set Up Your Content Management System</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we're doing:</strong> We need a place to store your blog posts, images, and other content. Think of it as a digital filing cabinet that's much better than your old blog's system.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Contentful?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contentful is like a super-powered version of WordPress, but much easier to use. Instead of managing your blog through a complicated dashboard, you'll have a clean, simple interface to add new posts, upload images, and organize your content.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Why Contentful?</strong> It's free, fast, and designed for modern websites. Your blog will load much faster than traditional systems.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Set Up Contentful</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Go to <a href="https://www.contentful.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">contentful.com</a> and sign up for a free account</li>
              <li>Click "Create Space" and give it a name (like "My Blog")</li>
              <li>Choose "Create a space" and select "Empty space"</li>
              <li>Follow the setup wizard to create your content structure</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Create in Contentful</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You'll set up two main content types (think of them as templates):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Blog Post:</strong> For your articles (title, content, images, etc.)</li>
              <li><strong>Author:</strong> For information about who writes the posts</li>
            </ul>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Don't worry about the technical details!</strong> Contentful has a simple setup wizard that guides you through everything. It's designed to be user-friendly.
              </p>
            </div>
          </section>

          {/* Step 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Move Your Blog Posts to the New System</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we're doing:</strong> Now we'll copy your existing blog posts from your old blog to the new Contentful system. This is like moving your files from an old filing cabinet to a new, better one.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Two Ways to Move Your Content</h3>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Option 1: Manual Copy (Recommended for Beginners)</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is the easiest way if you don't have too many posts:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
              <li>Go to your old blog and copy the text from each post</li>
              <li>In Contentful, click "Create Entry" and select "Blog Post"</li>
              <li>Paste your content into the appropriate fields</li>
              <li>Upload any images from your old blog</li>
              <li>Repeat for each blog post</li>
            </ol>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Option 2: Automatic Import (For Advanced Users)</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have many posts, you can use a script to automatically copy them. This requires some technical knowledge, but it's much faster for large blogs.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Don't worry if this sounds complicated!</strong> Most people can just copy and paste their posts manually. It's actually quite quick and gives you a chance to review and improve your content.
              </p>
            </div>
          </section>

          {/* Step 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Connect Everything Together</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we're doing:</strong> Now we need to connect your new blog design (created by AI) with your content management system (Contentful). This is like connecting your beautiful new house to the electricity and water.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Good news!</strong> The AI code from Anima already includes most of this connection. You just need to add your Contentful account details.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">What You Need to Do</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You'll need to get some information from your Contentful account and add it to your blog:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
              <li>Go to your Contentful account</li>
              <li>Find your "Space ID" and "Access Token" (they're in the settings)</li>
              <li>Add these to your blog's configuration</li>
              <li>Test that everything is working</li>
            </ol>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Don't worry about the technical details!</strong> The AI-generated code handles all the complicated parts. You just need to copy and paste a few numbers from Contentful.
              </p>
            </div>
          </section>

          {/* Step 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 7: Put Your Blog Online</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What we're doing:</strong> Now we'll put your new blog on the internet so people can visit it. This is like moving into your new house and giving people your new address.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Netlify?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Netlify is a free service that puts your website on the internet. Think of it as a landlord who provides you with a perfect apartment (web hosting) for free, and they even handle all the maintenance.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Why Netlify?</strong> It's free, fast, secure, and automatically updates your blog whenever you make changes. It's like having a professional web hosting service for free.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Deploy Your Blog</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's how to get your blog online:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
              <li>Go to <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">netlify.com</a> and sign up for a free account</li>
              <li>Click "New site from Git" and connect your GitHub account</li>
              <li>Select your blog repository</li>
              <li>Netlify will automatically build and deploy your blog</li>
              <li>Add your Contentful account details in the site settings</li>
              <li>Your blog will be live at a URL like "https://your-blog-name.netlify.app"</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>That's it!</strong> Your blog will be live on the internet in just a few minutes. Netlify handles all the technical stuff automatically.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Approach is Amazing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Here's what makes this method so much better than traditional blog platforms:</strong>
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li><strong>⚡ Super Fast:</strong> Your blog will load in seconds, not minutes. Google loves fast websites!</li>
              <li><strong>📱 Mobile Perfect:</strong> Your blog will look amazing on phones, tablets, and computers</li>
              <li><strong>🔒 Always Secure:</strong> Automatic security updates and HTTPS protection</li>
              <li><strong>💰 Completely Free:</strong> No monthly fees, no hidden costs, no limits</li>
              <li><strong>🎨 Professional Design:</strong> Your blog will look like it was designed by expensive professionals</li>
              <li><strong>📈 Better SEO:</strong> Search engines will rank your blog higher</li>
              <li><strong>🔄 Easy Updates:</strong> Add new posts with just a few clicks</li>
              <li><strong>🚀 Future-Proof:</strong> Built with modern technology that won't become outdated</li>
            </ul>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Bottom line:</strong> You'll have a professional, fast, modern blog that costs nothing to run and is easy to manage. It's like upgrading from a bicycle to a sports car!
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">You're Ready to Transform Your Blog!</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Congratulations!</strong> You now have everything you need to turn your old, slow blog into a modern, professional website. This process might seem complex, but remember - the AI does most of the work for you.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Remember:</strong> You don't need to be a programmer to follow this guide. The AI tools handle all the complicated coding, and the services we use are designed to be beginner-friendly.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Have When You're Done</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>A beautiful, modern blog that looks professional</li>
              <li>A fast-loading website that your visitors will love</li>
              <li>An easy-to-use system for adding new posts</li>
              <li>A blog that works perfectly on all devices</li>
              <li>Everything completely free to run</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The best part?</strong> Your readers will notice the difference immediately. Your blog will load faster, look more professional, and provide a better experience. And you'll have the satisfaction of knowing you built something amazing with the help of AI.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Ready to get started?</strong> Go to <a href="https://dev.animaapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">dev.animaapp.com</a> and begin your blog transformation journey today!
              </p>
            </div>
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
