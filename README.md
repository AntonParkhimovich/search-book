# Search In Youtube 
---
## Content
* [Demo](#Demo)
* [Progect description](#progect-description)
* [Technologies used](#technologies)
* [Eslint](#eslint)
* [Build](#build)

---

## DEMO
[Watch demo](https://antonparkhimovich.github.io/searchInYouTube/)
---
## Project description
---

This app sends your request to [google Youtube  API](https://developers.google.com/youtube/v3). Then draws:

  1. Video preview, 
  2. Chanel title, 
  3. Name video,
  4. Statistics(likes, views, dislikes and other),
  
You can also watch any of these videos simply by clicking on the preview icon.

This application is developed using react and redux technologies. Redux is used to store the data retrieved by a get request. Thanks to redux-persist, the redux store is not cleared after page refresh.
Also, this application uses the react router technology for routing pages and videos.


---
## Technologies
---
### To create this app used: 
 * HTML5, CSS3, JS,
 * material-ui/core: 4.12.3,
 * material-ui/icons: 4.11.2,
 * material-ui/styles: 4.11.4,
 * testing-library/jest-dom: 5.11.4,
 * testing-library/react: 11.1.0,
 * testing-library/user-event: 12.1.10,
 * axios: 0.21.1,
 * lodash: 4.17.21,
 * node-sass: 6.0.1,
 * react: 17.0.2,
 * react-animations: 1.0.0,
 * react-dom: 17.0.2,
 * react-redux: 7.2.4,
 * react-router-dom: 5.2.0,
 * react-scripts: "4.0.3,
 * redux: 4.1.1,
 * redux-persist: 6.0.0,
 * sass-loader: 12.1.0,
 * styled-components: 5.3.0,
 * web-vitals: 1.0.1

---
## Build
---
### For build  this app use command: 
```
$ npm run build
```

### For  run dev mode: 
```
$ npm run start
```