# 🛍️ AMAZAM

## Table of Contents
  * [About the App](#about-the-app)
    + [Background](#background)
  * [Tech Stack](#tech-stack)
  * [Contributors](#contributors)
  * [Product Overview Demo by Alice Blank](#product-overview-demo-by-alice-blank)
  * [Ratings and Reviews Demo by Melissa Gil](#ratings-and-reviews-demo-by-melissa-gil)
    + [Reviews](#reviews)
    + [Reviews Filtering and Sorting](#reviews-filtering-and-sorting)
    + [Add New Review](#add-new-review)
    + [Dark Mode](#dark-mode)

## About the App
AMAZAM is an online store that sells clothing, shoes, and accessories. The app provides an intuitive shopping experience where customers can view product information, browse related products, read and add reviews, and search and answer questions about the products.

<p align="center"><img width="900" alt="home page" src="https://user-images.githubusercontent.com/104800030/217896870-f53bae55-1f1e-48d2-ad1b-f07d86c0e5df.png"></p> <p align="center"><img width="900" alt="related products and Q&A" src="https://user-images.githubusercontent.com/104800030/217901014-990f6bf6-10dd-4a9c-b368-9a559cc6c3ae.png"></p> <p align="center"><img width="900" alt="ratings and reviews" src="https://user-images.githubusercontent.com/104800030/217901205-50d81b6d-1789-4e5c-9a74-3be3d770f347.png"></p>

### Background
Our team was tasked with developing the AMAZAM site with the goal of modernizing and streamlining the design. We were provided with a business requirements document as well as wireframes (Adobe XD) from a design team for which we were then fully responsible for implementing and stylizing.

We collaborated during our daily stand-ups, tracked tickets in Trello, and used Git Feature Branch Workflow to develop our own features without disturbing the main codebase. Our team successfully completed the project in under two weeks and presented it to the stakeholders.

## Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Javscript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=appveyor&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)

## Contributors
- Product Overview and Related Products - [Alice Blank](https://github.com/AllEyesBlank)
- Questions and Answers - [Zachary Vallow](https://github.com/Zachariah1618)
- Ratings and Reviews - [Melissa Gil](https://github.com/melissa-gv)

## Product Overview Demo by Alice Blank
<p align="center"><img width="800" alt="product overview gif" src="https://media.giphy.com/media/vuHs0LpNVL8lIzmmU3/giphy.gif"></p>
<p align="center"><img width="800" alt="product overview gif2" src="https://media.giphy.com/media/sejTJvcPPDZkDXuEsz/giphy.gif"></p>

## Ratings and Reviews Demo by Melissa Gil
### Reviews
The reviews section dynamically renders product reviews. The list can be expanded to display additional reviews. Review image thumbnails can be clicked on to show an enlarged image in a popup modal. Users have the option to report a review if deemed inappropriate and can also mark a review as helpful. All interactions provide user feedback for an engaging and responsive user experience.
Refer to [Backend Repo](https://github.com/SDC-Yoda/SDC-API-Reviews) for details on API.
<p align="center"><img width="800" alt="review list demo" src="public/readme-assets/Review-List.gif"></p>

### Reviews Filtering and Sorting
Reviews can be sorted by age of reviews (newest and oldest), helpfulness, and relevance (i.e., combination of newness and helpfulness). In addition, users can filter reviews for a specific rating.
<p align="center"><img width="800" alt="review list demo" src="public/readme-assets/Filter-and-Sort.gif"></p>

### Add New Review
New reviews can be posted by users by filling out the 'Add A Review' form. Users select a rating by clicking a star from one to five, select the product characteristics, and upload images. [Cloudinary](https://cloudinary.com/) was used as the image hosting service. 
<p align="center"><img width="800" alt="review list demo" src="public/readme-assets/AddReview5x.gif"></p>

### Dark Mode
<p align="center"><img width="800" alt="darkmode demo" src="https://user-images.githubusercontent.com/104800030/217901732-bad7b84e-cfe8-41f1-96d9-d27c51336d89.png"></p>

For ease of viewing, a dark mode can be toggled by using an event click handler that renders a dark style CSS when the dark mode button is clicked.
<p align="center"><img width="800" alt="review list demo" src="public/readme-assets/Darkmode4x.gif"></p>


