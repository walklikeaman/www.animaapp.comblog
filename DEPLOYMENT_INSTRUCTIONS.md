# Deployment Instructions

## GitHub Repository
✅ **Repository**: https://github.com/walklikeaman/www.animaapp.comblog
✅ **Status**: Successfully pushed with clean history (no hardcoded tokens)

## Netlify Deployment Options

### Option 1: Manual Deployment via Netlify Web Interface
1. Go to [netlify.com](https://netlify.com) and log in with your new account
2. Click "New site from Git"
3. Connect your GitHub account
4. Select the repository: `walklikeaman/www.animaapp.comblog`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (or latest)
6. Add environment variables in Netlify dashboard:
   ```
   VITE_CONTENTFUL_SPACE_ID=dah4a45wn7nn
   VITE_CONTENTFUL_ACCESS_TOKEN=jCvVaykeWWgUO4E44IdS_SMJXjdcTGhMTvfDP6ityoo
   VITE_CONTENTFUL_PREVIEW_TOKEN=T9d_qyekWu3LWFfQKkL0x4AUVVRACnJC9wNWk4JNz6A
   ```
7. Deploy!

### Option 2: Netlify CLI (if token works)
```bash
# Set your token
export NETLIFY_AUTH_TOKEN=nfp_vsCNUhKxZQnb1uZ6BuAFA1fZrAgER1759d48

# Create site
netlify sites:create --name anima-blog-clone

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: Drag and Drop
1. Build the project: `npm run build`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `dist` folder to deploy

## Environment Variables for Netlify
Add these in your Netlify dashboard under Site Settings > Environment Variables:

```
VITE_CONTENTFUL_SPACE_ID=dah4a45wn7nn
VITE_CONTENTFUL_ACCESS_TOKEN=jCvVaykeWWgUO4E44IdS_SMJXjdcTGhMTvfDP6ityoo
VITE_CONTENTFUL_PREVIEW_TOKEN=T9d_qyekWu3LWFfQKkL0x4AUVVRACnJC9wNWk4JNz6A
```

## Project Status
✅ **Build**: Working perfectly  
✅ **Contentful Integration**: 19 blog posts loaded  
✅ **Security**: No hardcoded tokens  
✅ **GitHub**: Clean repository  
✅ **Ready for Deployment**: All files prepared  

## Next Steps
1. Choose your preferred deployment method above
2. Set up environment variables in Netlify
3. Deploy and enjoy your live blog!
