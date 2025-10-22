# Environment Setup for Contentful Integration

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Contentful Configuration
VITE_CONTENTFUL_SPACE_ID=your-space-id-here
VITE_CONTENTFUL_ACCESS_TOKEN=your-content-delivery-api-token-here
VITE_CONTENTFUL_PREVIEW_TOKEN=your-preview-api-token-here
CONTENTFUL_CMA_TOKEN=your-content-management-api-token-here
CONTENTFUL_SPACE_ID=your-space-id-here
```

## Token Types

- **VITE_CONTENTFUL_DELIVERY_TOKEN**: Content Delivery API token for public content
- **VITE_CONTENTFUL_PREVIEW_TOKEN**: Content Preview API token for draft content  
- **CONTENTFUL_CMA_TOKEN**: Content Management API token for creating/updating content

## Usage

1. Copy the environment variables above into a `.env` file
2. Run `npm run dev` to start the development server
3. Run `npm run populate` to populate Contentful with blog posts
4. Run `npm run build` to build for production

## Security Note

Never commit the `.env` file to version control. The `.env` file is already in `.gitignore`.
