import pkg from 'contentful-management';
const { createClient } = pkg;
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
import { blogPosts } from './blogPostsData.js';

// Contentful credentials from environment variables
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || 'dah4a45wn7nn';
const CMA_TOKEN = process.env.CONTENTFUL_CMA_TOKEN || 'your-cma-token-here';
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';

const client = createClient({
  accessToken: CMA_TOKEN,
});

async function createBlogPost(postData) {
  try {
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // Create rich text content from markdown
    const richTextContent = await richTextFromMarkdown(postData.description);

    const entry = await environment.createEntry('blogPost', {
      fields: {
        title: { 'en-US': postData.title },
        slug: { 'en-US': postData.url.split('/').pop().replace(/\/$/, '') || 'untitled' },
        excerpt: { 'en-US': postData.description },
        content: { 'en-US': richTextContent },
        category: { 'en-US': postData.tags[0]?.label || 'general' },
        publishedAt: { 'en-US': new Date(postData.date).toISOString() },
        authorName: { 'en-US': postData.author.name },
      },
    });

    await entry.publish();
    console.log(`✅ Created post: "${postData.title}"`);
    return entry;
  } catch (error) {
    console.error(`❌ Error creating post "${postData.title}":`, error);
    return null;
  }
}

async function populateContentful() {
  console.log('🚀 Populating Contentful with blog posts...\n');

  try {
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // Force repopulation - create new blog posts
    console.log('🔄 Force repopulating Contentful with real blog posts...');

    // Create blog posts
    const createdPosts = [];
    for (const post of blogPosts) {
      const entry = await createBlogPost(post);
      if (entry) {
        createdPosts.push(entry);
      }
    }

    console.log(`\n🎉 Successfully created ${createdPosts.length} blog posts in Contentful!`);
    console.log('📝 You can now view them in your Contentful dashboard.');
    
  } catch (error) {
    console.error('❌ Error populating Contentful:', error);
  }
}

populateContentful();
