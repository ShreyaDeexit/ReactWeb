# Pet Image Viewer
A responsive web application to browse, search, and manage pet images. Users can view images, filter them by title or description, select multiple images for download, and sort them alphabetically. The application is built using React, TypeScript, and Styled-Components, with features like responsive design and advanced image management.

## Features
### Core Features
- View Images: Browse a list of pet images fetched from an external API.
- Search: Filter images by title or description using a search bar.
- Select and Download: Select multiple images to open them in new tabs or download them. Download all selected images as a ZIP file.
- Sorting: Sort images alphabetically (A-Z or Z-A) by title.
- Responsive Design: Adapts to all screen sizes (desktop, tablet, mobile).
- 
### Advanced Features
- Select All / Clear Selection: Quickly select or clear all displayed images.
- Customizable Layout: Built with Styled-Components for easy theming.
- Performance Optimization: Efficient state management and rendering.

## Tech Stack
### Frontend
- React: Component-based architecture.
- TypeScript: Strongly typed JavaScript for robust development.
- Styled-Components: For dynamic, reusable, and scoped CSS.

### Libraries Used
- React-Router-Dom: For navigation (future enhancements).
- Fetch API: For fetching pet data from the external endpoint.

## Installation
Clone the repository:
```
git clone https://github.com/ShreyaDeexit/ReactWeb.git
```

Install dependencies:
```
npm install
```
Start the development server:
```
npm start dev
```

## API Integration
The application fetches pet data from the following endpoint:
```
https://eulerity-hackathon.appspot.com/pets
```
Each pet object includes:
- url: Image URL.
- title: Title of the pet.
- description: Description of the pet.
- created: Creation date in string format.

## Future Enhancements
- Favorites System: Allow users to mark and view their favorite pets.
- Pagination or Infinite Scrolling: Handle larger datasets efficiently.
- Detailed Pet Information: Show more details in a modal or separate page.
- User Authentication: Save user preferences like favorites and themes.
- Dark Mode: Add a toggle for dark mode.

![page_result](https://github.com/user-attachments/assets/9c3f6ba1-aaad-4491-8fcd-57be9095f61e)




