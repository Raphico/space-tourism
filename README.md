# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- React
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Framer-motion

### What I learned

Dynamic imports in react 
```jsx
const imgSrc = await import(some_path).default
```

dynamic variable in react based on break point
```jsx
const mediaQuery = "(min-width: 52em)"
const imgSrc = await import(`${images[window.matchMedia(mediaQuery).matches ? 'portrait' : 'landscape']}/* @vite-ignore */`);
```

## Author

- Frontend Mentor - [@raphico](https://www.frontendmentor.io/profile/raphico)
- Twitter - [@Raphico_OA](https://www.twitter.com/Raphico_OA)
