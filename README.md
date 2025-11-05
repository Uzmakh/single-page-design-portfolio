# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS with CLI - Live server & Tailwind CSS IntelliSense-(VS-code extensions)
- Flexbox
- CSS Grid
- Mobile-first workflow
- Installed vite to have a server that automatically refreshes
- I added this in scripts of package.json "build": "vite build", // build for production
- create vite.config.js file and paste this code there,

import { defineConfig } from 'vite';

export default defineConfig({
root: 'src', // Set source directory
build: {
outDir: '../dist', // Output to root's 'dist' folder
emptyOutDir: true
}
});
then run npm run build, you have dist folder

- Install gh-pages
  npm install --save-dev gh-pages
- Add these lines to package.json
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  }
- Now run-
  npm run deploy

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- https://www.youtube.com/watch?v=lT5SkATRWGQ - This helped me for understanding Tailwing CSS classes-code step by step-YT Channel
- I took help from Code Commerce - YT channel for How to Scroll Horizontally in React JS - Styled With Tailwind CSS - Javascript
  https://www.youtube.com/watch?v=x4bom6Udk_4&t=579s
