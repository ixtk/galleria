This is a solution to the [Galleria slideshow site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6). It features gallery of famous paintings with slideshow functionality.

### Built with

- React.js
- React Router v6
- Vite
- Scss
- ESLint & Prettier
- Mobile-first workflow
- Semantic HTML5 markup
- Flexbox
- Grid
- Responsive units
- Custom hooks

### Some of the approaches used

- Separating data logic from presentation (custom hooks)
- Named exports
- Absolute imports (Vite config)

  ```css
  @use "@/partials/mixins";
  ```

  Instead of

  ```scss
  @use "../../partials/mixins";
  ```

### Possible UX improvements

- Image loading animation
- Slideshow interval indicator

### The data

Since there is no backend, the data comes from local json file instead of an API. Images are hosted on [Cloudinary](https://cloudinary.com/). I modified the json file with Python to include width/height of every image (from Cloudinary metadata) in order to minimize layout shifts.

### Acknowledgements

[Frontendmentor Slack community](https://www.frontendmentor.io/slack)
