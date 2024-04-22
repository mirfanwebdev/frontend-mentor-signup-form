# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_

### Screenshot

![](./public/screenshot.png)

### Links

- Solution URL: [FrontendMentor](https://your-solution-url.com)
- Live Site URL: [GithubPages](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanila JS
- Mobile-first workflow

### What I learned

This challenge strengthen my fundamental skills using vanila Javascript. I used event listener on the form and use verification function for every form input.

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  verifyValue(document.getElementById("first-name"), EMPTY_ERROR);
  verifyValue(document.getElementById("last-name"), EMPTY_ERROR);
  verifyValue(document.getElementById("email"), INVALID_EMAIL_ERROR);
  verifyValue(document.getElementById("password"), EMPTY_ERROR);
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

## Author

- Website - [M. Irfan](https://mirfandev.tech)
- Frontend Mentor - [@mirfanwebdev](https://www.frontendmentor.io/profile/mirfanwebdev)
- Twitter - [@mirfanwebdev](https://twitter.com/mirfanwebdev)
