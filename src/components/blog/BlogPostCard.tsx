import React from 'react';

interface BlogPost {
  id: number;
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
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div style={{ 
      flex: '0 0 33.333%', 
      padding: '0 15px', 
      marginBottom: '30px',
      minWidth: '300px'
    }}>
      <article style={{ 
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Image */}
        <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
          <img
            src={post.imageSrc}
            alt={post.imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.2s ease'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Tags */}
          <div style={{ marginBottom: '12px' }}>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#ff6250',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '500',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginRight: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '1.4',
            marginBottom: '12px',
            color: '#2b2b2b',
            flex: 1
          }}>
            <a
              href={post.url}
              style={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff6250';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#2b2b2b';
              }}
            >
              {post.title}
            </a>
          </h3>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '16px',
            flex: 1
          }}>
            {post.description}
          </p>

          {/* Author and Date */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid #eee'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={post.author.avatarSrc}
                alt={post.author.name}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  marginRight: '8px',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/32x32?text=A';
                }}
              />
              <div>
                <div style={{ fontSize: '12px', fontWeight: '500', color: '#2b2b2b' }}>
                  {post.author.name}
                </div>
                <div style={{ fontSize: '11px', color: '#999' }}>
                  {post.date} • {post.readTime} min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostCard;