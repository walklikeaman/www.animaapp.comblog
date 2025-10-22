# Anima Blog Migration Project

A modern React blog application demonstrating migration from traditional blog to headless CMS using Anima SDK and Contentful. This project showcases how to modernize existing blog infrastructure with modern tools and workflows.

## 🚀 Live Demo

**Deployed Application:** [https://animaappblogpage.netlify.app](https://animaappblogpage.netlify.app)

## 📋 Project Overview

This project demonstrates a complete blog migration workflow that:

- **Migrates** existing blog content to a modern React application
- **Integrates** with Contentful CMS for content management
- **Uses** Anima SDK for design-to-code automation
- **Deploys** to Netlify for production hosting

## 🛠 Technology Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **CMS:** Contentful (Headless CMS)
- **Design-to-Code:** Anima SDK
- **Deployment:** Netlify
- **Icons:** Lucide React
- **UI Components:** Radix UI

## 🏗 Architecture

```
src/
├── components/          # Reusable UI components
│   ├── blog/           # Blog-specific components
│   │   ├── BlogGrid.tsx          # Main blog post grid
│   │   ├── BlogPostCard.tsx      # Individual post card
│   │   └── CategoryFilters.tsx   # Category filtering
│   └── FloatingWidget.tsx
├── sections/           # Page sections (modular layout)
│   ├── BlogHeader/     # Blog header with navigation
│   ├── Footer/         # Footer with branding
│   ├── MainContent/    # Main content area
│   └── TopNavbar/      # Top navigation bar
├── data/              # Static data (fallback)
│   ├── blogPosts.ts   # 19 static blog posts
│   └── categories.ts  # Category definitions
├── hooks/             # Custom React hooks
│   └── useContentful.ts  # Contentful data fetching hooks
├── lib/               # Core libraries
│   └── contentful.ts  # Contentful client & API functions
└── utils/             # Helper utilities
    └── contentfulHelpers.ts  # Data transformation
```

## 🚀 Getting Started

### For Reviewers (Quick Demo)

**No setup required!** The application works out-of-the-box with pre-configured Contentful credentials and sample data.

1. **Clone and run immediately**
   ```bash
   git clone https://github.com/walklikeaman/www.animaapp.comblog.git
   cd www.animaapp.comblog
   npm install
   npm run dev
   ```

2. **Open your browser**
   - Go to `http://localhost:5173`
   - The app will load with 19 blog posts from Contentful
   - No environment variables or API keys needed!

3. **What you'll see**
   - ✅ 19 blog posts loaded from Contentful CMS
   - ✅ Responsive design with category filtering
   - ✅ Author information and read time estimates
   - ✅ Modern React components with Tailwind CSS


## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run populate` - Populate Contentful with blog posts

## 📊 Contentful Integration

### Content Model

The application uses the following Contentful content model:

```typescript
interface ContentfulBlogPost {
  title: string
  slug: string
  excerpt: string
  content: any (rich text)
  coverImage?: Asset
  category: string
  publishedAt: string
  authorName: string
}
```

### Data Flow

1. **App Load** → Tests Contentful connection
2. **BlogGrid Component** → Fetches posts using `useBlogPosts()` hook
3. **Loading States** → Handles loading/error states
4. **Data Transformation** → Converts Contentful entries to app format
5. **Rendering** → Displays posts with images, tags, author, date

### Custom Hooks

- `useBlogPosts()` - Fetches all blog posts
- `useBlogPost(slug)` - Fetches single blog post
- `useCategories()` - Fetches available categories

## 🎨 Anima SDK Integration

The project demonstrates how Anima SDK can be used to:

- **Generate React components** from design files
- **Automate design-to-code** workflow
- **Maintain design consistency** across the application
- **Speed up development** with AI-powered code generation

### Key Features

- **Design System Integration** - Consistent styling with Tailwind CSS
- **Component Generation** - Automated React component creation
- **Responsive Design** - Mobile-first approach with custom breakpoints
- **Type Safety** - Full TypeScript support

## 🚀 Deployment

### Netlify Deployment

The application is configured for easy Netlify deployment:

1. **Build Configuration:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18+

2. **Environment Variables:**
   Set the following in Netlify dashboard:
   ```
   VITE_CONTENTFUL_SPACE_ID=your-space-id
   VITE_CONTENTFUL_ACCESS_TOKEN=your-access-token
   VITE_CONTENTFUL_PREVIEW_TOKEN=your-preview-token
   ```

3. **Automatic Deployments:**
   - Connected to GitHub repository
   - Automatic builds on push to main branch
   - Preview deployments for pull requests

## 📱 Features

- ✅ **19 Blog Posts** with rich content and metadata
- ✅ **Category Filtering** for content organization
- ✅ **Responsive Design** optimized for all devices
- ✅ **Contentful CMS** integration for content management
- ✅ **Loading States** and error handling
- ✅ **Author Information** with avatars
- ✅ **Read Time Estimates** for better UX
- ✅ **SEO Optimized** structure

## 🔄 Migration Workflow

This project demonstrates a complete blog migration workflow:

1. **Content Extraction** - Extract content from existing blog
2. **Design Analysis** - Use Anima SDK to analyze design patterns
3. **Code Generation** - Generate React components from designs
4. **CMS Integration** - Set up Contentful for content management
5. **Data Migration** - Populate CMS with existing content
6. **Deployment** - Deploy to production with Netlify

## 🛠 Development Notes

### Error Handling
- Graceful fallback to static data if Contentful fails
- Image error handling with placeholder images
- Loading states for better user experience

### Performance Optimizations
- Lazy loading for images
- Efficient data fetching with React hooks
- Optimized bundle size with Vite

### Security
- Environment variables for sensitive data
- No hardcoded credentials in production
- Secure API token management

## 📚 Documentation

- [Deployment Instructions](./DEPLOYMENT_INSTRUCTIONS.md)
- [Environment Setup](./ENVIRONMENT_SETUP.md)
- [Contentful Integration Guide](./src/lib/contentful.ts)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the Anima Sales Engineer assignment and is for demonstration purposes.

## 🔗 Links

- **Live Demo:** [https://animaappblogpage.netlify.app](https://animaappblogpage.netlify.app)
- **GitHub Repository:** [https://github.com/walklikeaman/www.animaapp.comblog](https://github.com/walklikeaman/www.animaapp.comblog)
- **Anima SDK:** [https://github.com/AnimaApp/anima-sdk](https://github.com/AnimaApp/anima-sdk)
- **Contentful:** [https://www.contentful.com](https://www.contentful.com)

---

**Built with ❤️ using Anima SDK, React, and Contentful**