# Disney Character Explorer

A web application for exploring Disney characters and managing user profiles. Built with Next.js, TypeScript, and Tailwind CSS.

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Development Environment
I used WSL2 on Windows 10 to develop this application.
I also used Cursor + Claude 3.5 to help write boilerplate components/types but consciously avoided using it for core logic and performance improvements. 

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Git

### Tech Stack
- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **API Integration**: Custom hooks with react-query

### Project Structure
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Next.js pages
├── styles/        # Global styles
├── types/         # TypeScript type definitions
└── assets/         # Images

## Trade-Offs

### Architecture Decisions
1. **React Context vs Redux**
   - Chose React Context for simpler state management
   - Trade-off: Less robust for very large applications

2. **Client-Side Search**
   - Implemented search on the client side for better UX
   - Trade-off: Limited to smaller datasets

3. **Form Components**
   - Created custom form components for consistency
   - Trade-off: Additional maintenance overhead vs using plain HTML elements

## Performance

### Optimizations
- Image optimization using Next.js Image component
- Code splitting by default with Next.js
- Client-side caching with react-query
- Lazy loading of components

### Metrics
- First Contentful Paint (FCP): ~0.8s
- Time to Interactive (TTI): ~1.2s
- Lighthouse Score: 90+ on all metrics

## Known Issues

1. **Typography**
   - The Lato font is not available in '600' or '900' weights but the Figma design uses those weights.
2. **Images**
   - Some image links in the API responses appear to be broken (seeing 404s).

## Future Improvements

2. **Technical**
   - Add pagination to the search results -- the filter API supports pagination but the current implementation does not take advantage of it because of time constraints.
   - Date formatting on the character cards isn't quite right -- The day does not include the correct suffix (st, nd, rd, th)
   - Add comprehensive test coverage
   - Implement proper error boundaries
   - Add proper logging system