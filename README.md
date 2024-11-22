# Disney Character Explorer

A web application for exploring Disney characters and managing user profiles. Built with Next.js, TypeScript, and Tailwind CSS.

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Development Environment
I used WSL2 on Windows 10 to develop this application.
I also used Cursor + Claude 3.5 to help write boilerplate components/types but consciously avoided using it for core logic and performance improvements. 

## Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Git

## Tech Stack
- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **API Integration**: Custom hooks with react-query

## Architecture Decisions
1. **React Context vs Redux/MobX/Zustand etc..**
   - There is very little state in this application so I opted for a simpler context based approach
   - Trade-off: Needed to create provider and consumer components to wrap around the app

2. **Form Components**
   - Used React Hook Form for form handling
   - Created custom form components for consistency
   - Trade-off: Additional maintenance overhead vs using plain HTML elements

3. **Performance**
   - Used react-query for api integration, which should cache responses from the same character slugs etc..
   - There are likely opportunities to memoize components -- the most likely suspect being the character cards. However, the app is small enough that it's probably not worth the effort, even if not time constrained.

4. **Image Rendering**
   - There is quite a variety of image sizes linked to by the dataset. I had to crop many to get a unifrom looking UI.

## Known Issues

1. **Typography**
   - The Lato font is not available in '600' or '900' weights but the Figma design uses those weights.
2. **Images**
   - Some image links in the API responses appear to be broken (seeing 404s).
3. **Responsive Design**
   - The figma design really requires a large-ish vertical viewport to look decent. On my laptop (usable vertical viewport of less than 900px), my implementation falls pretty short. 


## Future Improvements

1. **Technical**
   - As noted above, there are significant issues with responsivness. Using media queries to cut the vertical size of the footer and header would probably be my first change, but the currently static size of the character cards also poses a problem as it forces the Featured component to be very tall in order to not appear below the fold. Ideally, there would be some additional figma designs to guide this work.
   - Add pagination to the search results -- the filter API supports pagination but the current implementation does not take advantage of it because of time constraints.
   - Accessibility improvements -- the current implementation does not make use of aria-labels, aria-hidden, or aria-live regions. The keyboard navigation is also pretty poor.
   - Date formatting on the character cards isn't quite right -- The day does not include the correct suffix (st, nd, rd, th)
   - Add comprehensive test coverage
   - Implement proper error boundaries
   - Add proper logging system