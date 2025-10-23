import React from 'react';
import BlogPostCard from './BlogPostCard';
import { useBlogPosts } from '../../hooks/useContentful';
import { convertContentfulToBlogPost } from '../../utils/contentfulHelpers';
import { blogPosts as staticBlogPosts } from '../../data/blogPosts';

interface BlogGridProps {
  onPostClick?: (postId: number) => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({ onPostClick }) => {
  console.log('🎯 BlogGrid component rendered');
  const { posts, loading, error } = useBlogPosts();
  
  console.log('BlogGrid - loading:', loading, 'error:', error, 'posts:', posts, 'posts.length:', posts.length);

  if (loading) {
    return (
      <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  // Show static posts even if Contentful fails
  if (error) {
    console.log('⚠️ Contentful error, showing static posts only:', error);
  }

  // Use ONLY static posts to preserve original avatars and names
  const displayPosts = staticBlogPosts;
  
  console.log('📊 Display Posts:', displayPosts.length, 'Static posts only');

  if (displayPosts.length === 0) {
    return (
      <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <p>No blog posts found.</p>
        <p>Loading: {loading ? 'Yes' : 'No'}</p>
        <p>Error: {error || 'None'}</p>
        <p>Posts count: {posts.length}</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '500px' }}>
             <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '0 -15px' }}>
               {displayPosts.map((post) => {
                 return (
                   <BlogPostCard 
                     key={post.id} 
                     post={post} 
                     onClick={post.id === 0 ? () => onPostClick?.(post.id) : undefined}
                   />
                 );
               })}
             </div>
      
      {/* Pagination - using proper JSX syntax */}
      <div style={{ width: '100%', padding: '0 15px', margin: 'auto', marginTop: '40px' }}>
        <a 
          href="/blog/page/2" 
          style={{ 
            color: 'rgb(255, 98, 80)', 
            fontWeight: 500, 
            display: 'block', 
            float: 'right',
            textDecoration: 'none'
          }}
        >
          Next Page →
        </a>
      </div>
    </div>
  );
};

export default BlogGrid;