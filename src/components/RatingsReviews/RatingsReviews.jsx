import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import { handleInteractions } from '../../utils.js';

const { API_KEY } = process.env
const axios = require('axios');

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.ratingsFiltersStatus = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }

    this.allReviews = [
      {
        "review_id": 1276522,
        "rating": 3,
        "summary": "Subpar",
        "recommend": false,
        "response": null,
        "body": "Just bad quality. Probably going to have to throw them out in a week",
        "date": "2022-09-07T00:00:00.000Z",
        "reviewer_name": "Grompler",
        "helpfulness": 4,
        "photos": []
      },
      {
        "review_id": 1276624,
        "rating": 5,
        "summary": "Love This One",
        "recommend": true,
        "response": null,
        "body": "Great for all!  ",
        "date": "2022-09-08T00:00:00.000Z",
        "reviewer_name": "test",
        "helpfulness": 3,
        "photos": [
          {
            "id": 2456098,
            "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662659153/orkmflq6ssqr63nw8cbo.png"
          }
        ]
      },
      {
        "review_id": 1276687,
        "rating": 1,
        "summary": "Fit is just ok",
        "recommend": true,
        "response": null,
        "body": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id ma",
        "date": "2022-09-09T00:00:00.000Z",
        "reviewer_name": "andy",
        "helpfulness": 1,
        "photos": [
          {
            "id": 2456152,
            "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662712280/tah12uyunmel1uyi96zm.jpg"
          }
        ]
      },
      {
        "review_id": 1276616,
        "rating": 5,
        "summary": "Kevin's Chili",
        "recommend": true,
        "response": null,
        "body": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know eachother in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.",
        "date": "2022-09-08T00:00:00.000Z",
        "reviewer_name": "Kevin",
        "helpfulness": 1,
        "photos": [
          {
            "id": 2456090,
            "url": "https://preview.redd.it/opsw15mqpbj71.jpg?auto=webp&s=ab61338c0ea7d4e0e4bff8ce04dad350c7e9bad5"
          }
        ]
      },
      {
        "review_id": 1176007,
        "rating": 3,
        "summary": "worst purchase ever!",
        "recommend": true,
        "response": null,
        "body": "worst purchase ever!worst purchase ever!worst purchase ever!",
        "date": "2022-04-11T00:00:00.000Z",
        "reviewer_name": "qiqi",
        "helpfulness": 1,
        "photos": [
          {
            "id": 2259356,
            "url": "https://i.ibb.co/jhLQL0g/african-lion-thumb-16x9.webp"
          }
        ]
      },
      {
        "review_id": 1276715,
        "rating": 4,
        "summary": "Test summary!",
        "recommend": true,
        "response": null,
        "body": "The pants are awesome! Would def buy again!!! Yup!!",
        "date": "2022-09-09T00:00:00.000Z",
        "reviewer_name": "Kelly",
        "helpfulness": 1,
        "photos": [
          {
            "id": 2456183,
            "url": "http://res.cloudinary.com/dedcgmjbe/image/upload/v1662751327/rumeqihxvqlf0xuu4s5b.png"
          }
        ]
      },
      {
        "review_id": 1276683,
        "rating": 5,
        "summary": "This fits great!",
        "recommend": true,
        "response": null,
        "body": "I love these morning joggers!",
        "date": "2022-09-09T00:00:00.000Z",
        "reviewer_name": "chris",
        "helpfulness": 1,
        "photos": [
          {
            "id": 2456145,
            "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662703566/ozpez6ptnqgav0dwkow3.jpg"
          }
        ]
      },
      {
        "review_id": 1276623,
        "rating": 2,
        "summary": "Lets Go",
        "recommend": true,
        "response": null,
        "body": "Here we go, it's working!!!",
        "date": "2022-09-08T00:00:00.000Z",
        "reviewer_name": "adam",
        "helpfulness": 1,
        "photos": [
          {
            "id": 2456097,
            "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662658184/ttjjw0rrtvciqik9orpq.png"
          }
        ]
      },
      {
        "review_id": 1276619,
        "rating": 5,
        "summary": "Kevin's Chili",
        "recommend": true,
        "response": null,
        "body": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know eachother in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.",
        "date": "2022-09-08T00:00:00.000Z",
        "reviewer_name": "Kevin",
        "helpfulness": 0,
        "photos": [
          {
            "id": 2456093,
            "url": "https://preview.redd.it/opsw15mqpbj71.jpg?auto=webp&s=ab61338c0ea7d4e0e4bff8ce04dad350c7e9bad5"
          }
        ]
      },
      {
        "review_id": 1276617,
        "rating": 5,
        "summary": "Kevin's Chili",
        "recommend": true,
        "response": null,
        "body": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know eachother in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.",
        "date": "2022-09-08T00:00:00.000Z",
        "reviewer_name": "Kevin",
        "helpfulness": 0,
        "photos": [
          {
            "id": 2456091,
            "url": "https://preview.redd.it/opsw15mqpbj71.jpg?auto=webp&s=ab61338c0ea7d4e0e4bff8ce04dad350c7e9bad5"
          }
        ]
      },
      {
        "review_id": 1277168,
        "rating": 1,
        "summary": "trash",
        "recommend": true,
        "response": null,
        "body": "pants fell apart within a month. some quality huh. Quite the comfy pair tho",
        "date": "2022-10-24T00:00:00.000Z",
        "reviewer_name": "josh",
        "helpfulness": 0,
        "photos": []
      },
      {
        "review_id": 1277167,
        "rating": 5,
        "summary": "oh wow",
        "recommend": true,
        "response": null,
        "body": "very good pants wow the quality is insane highly recommend",
        "date": "2022-10-24T00:00:00.000Z",
        "reviewer_name": "jamie",
        "helpfulness": 0,
        "photos": []
      },
      {
        "review_id": 1176518,
        "rating": 4,
        "summary": "test",
        "recommend": true,
        "response": null,
        "body": "test",
        "date": "2022-04-16T00:00:00.000Z",
        "reviewer_name": "test",
        "helpfulness": 0,
        "photos": []
      },
      {
        "review_id": 1176366,
        "rating": 3,
        "summary": "kkkkkkkkkk",
        "recommend": true,
        "response": null,
        "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        "date": "2022-04-14T00:00:00.000Z",
        "reviewer_name": "qiqi",
        "helpfulness": 0,
        "photos": [
          {
            "id": 2259512,
            "url": "https://i.ibb.co/4TzFDhy/images.jpg"
          }
        ]
      },
      {
        "review_id": 1176358,
        "rating": 3,
        "summary": "kkkkkkk",
        "recommend": true,
        "response": null,
        "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        "date": "2022-04-14T00:00:00.000Z",
        "reviewer_name": "kk",
        "helpfulness": 0,
        "photos": [
          {
            "id": 2259506,
            "url": "https://i.ibb.co/4TzFDhy/images.jpg"
          }
        ]
      },
      {
        "review_id": 1277173,
        "rating": 5,
        "summary": "oh good",
        "recommend": true,
        "response": null,
        "body": "very good pants wow so good yea very good good quality",
        "date": "2022-10-24T00:00:00.000Z",
        "reviewer_name": "jimmy",
        "helpfulness": 0,
        "photos": []
      },
      {
        "review_id": 1276728,
        "rating": 5,
        "summary": "great product",
        "recommend": true,
        "response": null,
        "body": "great product",
        "date": "2022-09-10T00:00:00.000Z",
        "reviewer_name": "adam",
        "helpfulness": 0,
        "photos": []
      },
      {
        "review_id": 1277499,
        "rating": 5,
        "summary": "Satisfied",
        "recommend": true,
        "response": null,
        "body": "Great product!",
        "date": "2022-11-12T00:00:00.000Z",
        "reviewer_name": "Ragnaric",
        "helpfulness": 0,
        "photos": []
      },
      {
        "review_id": 1277307,
        "rating": 4,
        "summary": "I Love It",
        "recommend": true,
        "response": null,
        "body": "Great pants, not the comfiest but def a higher quality then normal",
        "date": "2022-10-27T00:00:00.000Z",
        "reviewer_name": "Jeffrey",
        "helpfulness": 0,
        "photos": [
          {
            "id": 2456560,
            "url": "https://res.cloudinary.com/dbij37ike/image/upload/v1666891217/bqvolerh8yldrxudpvi2.jpg"
          }
        ]
      },
      {
        "review_id": 1277457,
        "rating": 5,
        "summary": "API TESTING POST!!!!!!!!!!G",
        "recommend": true,
        "response": null,
        "body": "Again testing API GGGGGGGGGGGGg~~~~~~~",
        "date": "2022-11-05T00:00:00.000Z",
        "reviewer_name": "gtestg",
        "helpfulness": 0,
        "photos": [
          {
            "id": 2456671,
            "url": "https://preview.redd.it/y844ktbgwom41.jpg?auto=webp&s=c8cd48ed66c7330f77a9078a7fdc25f57cd6203a"
          },
          {
            "id": 2456672,
            "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662659153/orkmflq6ssqr63nw8cbo.png"
          }
        ]
      },
      {
        "review_id": 1276676,
        "rating": 3,
        "summary": "good fit",
        "recommend": true,
        "response": null,
        "body": "love these morning joggers",
        "date": "2022-09-09T00:00:00.000Z",
        "reviewer_name": "yo",
        "helpfulness": 0,
        "photos": [
          {
            "id": 2456138,
            "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662690159/pwt7f1vbkzgbdevoyn3p.png"
          }
        ]
      }
    ]

    this.state = {
      reviews: [
        {
          "review_id": 1276522,
          "rating": 3,
          "summary": "Subpar",
          "recommend": false,
          "response": null,
          "body": "Just bad quality. Probably going to have to throw them out in a week",
          "date": "2022-09-07T00:00:00.000Z",
          "reviewer_name": "Grompler",
          "helpfulness": 4,
          "photos": []
        },
        {
          "review_id": 1276624,
          "rating": 5,
          "summary": "Love This One",
          "recommend": true,
          "response": null,
          "body": "Great for all!  ",
          "date": "2022-09-08T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 3,
          "photos": [
            {
              "id": 2456098,
              "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662659153/orkmflq6ssqr63nw8cbo.png"
            }
          ]
        },
        {
          "review_id": 1276687,
          "rating": 1,
          "summary": "Fit is just ok",
          "recommend": true,
          "response": null,
          "body": "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id ma",
          "date": "2022-09-09T00:00:00.000Z",
          "reviewer_name": "andy",
          "helpfulness": 1,
          "photos": [
            {
              "id": 2456152,
              "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662712280/tah12uyunmel1uyi96zm.jpg"
            }
          ]
        },
        {
          "review_id": 1276616,
          "rating": 5,
          "summary": "Kevin's Chili",
          "recommend": true,
          "response": null,
          "body": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know eachother in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.",
          "date": "2022-09-08T00:00:00.000Z",
          "reviewer_name": "Kevin",
          "helpfulness": 1,
          "photos": [
            {
              "id": 2456090,
              "url": "https://preview.redd.it/opsw15mqpbj71.jpg?auto=webp&s=ab61338c0ea7d4e0e4bff8ce04dad350c7e9bad5"
            }
          ]
        },
        {
          "review_id": 1176007,
          "rating": 3,
          "summary": "worst purchase ever!",
          "recommend": true,
          "response": null,
          "body": "worst purchase ever!worst purchase ever!worst purchase ever!",
          "date": "2022-04-11T00:00:00.000Z",
          "reviewer_name": "qiqi",
          "helpfulness": 1,
          "photos": [
            {
              "id": 2259356,
              "url": "https://i.ibb.co/jhLQL0g/african-lion-thumb-16x9.webp"
            }
          ]
        },
        {
          "review_id": 1276715,
          "rating": 4,
          "summary": "Test summary!",
          "recommend": true,
          "response": null,
          "body": "The pants are awesome! Would def buy again!!! Yup!!",
          "date": "2022-09-09T00:00:00.000Z",
          "reviewer_name": "Kelly",
          "helpfulness": 1,
          "photos": [
            {
              "id": 2456183,
              "url": "http://res.cloudinary.com/dedcgmjbe/image/upload/v1662751327/rumeqihxvqlf0xuu4s5b.png"
            }
          ]
        },
        {
          "review_id": 1276683,
          "rating": 5,
          "summary": "This fits great!",
          "recommend": true,
          "response": null,
          "body": "I love these morning joggers!",
          "date": "2022-09-09T00:00:00.000Z",
          "reviewer_name": "chris",
          "helpfulness": 1,
          "photos": [
            {
              "id": 2456145,
              "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662703566/ozpez6ptnqgav0dwkow3.jpg"
            }
          ]
        },
        {
          "review_id": 1276623,
          "rating": 2,
          "summary": "Lets Go",
          "recommend": true,
          "response": null,
          "body": "Here we go, it's working!!!",
          "date": "2022-09-08T00:00:00.000Z",
          "reviewer_name": "adam",
          "helpfulness": 1,
          "photos": [
            {
              "id": 2456097,
              "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662658184/ttjjw0rrtvciqik9orpq.png"
            }
          ]
        },
        {
          "review_id": 1276619,
          "rating": 5,
          "summary": "Kevin's Chili",
          "recommend": true,
          "response": null,
          "body": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know eachother in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.",
          "date": "2022-09-08T00:00:00.000Z",
          "reviewer_name": "Kevin",
          "helpfulness": 0,
          "photos": [
            {
              "id": 2456093,
              "url": "https://preview.redd.it/opsw15mqpbj71.jpg?auto=webp&s=ab61338c0ea7d4e0e4bff8ce04dad350c7e9bad5"
            }
          ]
        },
        {
          "review_id": 1276617,
          "rating": 5,
          "summary": "Kevin's Chili",
          "recommend": true,
          "response": null,
          "body": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know eachother in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.",
          "date": "2022-09-08T00:00:00.000Z",
          "reviewer_name": "Kevin",
          "helpfulness": 0,
          "photos": [
            {
              "id": 2456091,
              "url": "https://preview.redd.it/opsw15mqpbj71.jpg?auto=webp&s=ab61338c0ea7d4e0e4bff8ce04dad350c7e9bad5"
            }
          ]
        },
        {
          "review_id": 1277168,
          "rating": 1,
          "summary": "trash",
          "recommend": true,
          "response": null,
          "body": "pants fell apart within a month. some quality huh. Quite the comfy pair tho",
          "date": "2022-10-24T00:00:00.000Z",
          "reviewer_name": "josh",
          "helpfulness": 0,
          "photos": []
        },
        {
          "review_id": 1277167,
          "rating": 5,
          "summary": "oh wow",
          "recommend": true,
          "response": null,
          "body": "very good pants wow the quality is insane highly recommend",
          "date": "2022-10-24T00:00:00.000Z",
          "reviewer_name": "jamie",
          "helpfulness": 0,
          "photos": []
        },
        {
          "review_id": 1176518,
          "rating": 4,
          "summary": "test",
          "recommend": true,
          "response": null,
          "body": "test",
          "date": "2022-04-16T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
        },
        {
          "review_id": 1176366,
          "rating": 3,
          "summary": "kkkkkkkkkk",
          "recommend": true,
          "response": null,
          "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "qiqi",
          "helpfulness": 0,
          "photos": [
            {
              "id": 2259512,
              "url": "https://i.ibb.co/4TzFDhy/images.jpg"
            }
          ]
        },
        {
          "review_id": 1176358,
          "rating": 3,
          "summary": "kkkkkkk",
          "recommend": true,
          "response": null,
          "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "kk",
          "helpfulness": 0,
          "photos": [
            {
              "id": 2259506,
              "url": "https://i.ibb.co/4TzFDhy/images.jpg"
            }
          ]
        },
        {
          "review_id": 1277173,
          "rating": 5,
          "summary": "oh good",
          "recommend": true,
          "response": null,
          "body": "very good pants wow so good yea very good good quality",
          "date": "2022-10-24T00:00:00.000Z",
          "reviewer_name": "jimmy",
          "helpfulness": 0,
          "photos": []
        },
        {
          "review_id": 1276728,
          "rating": 5,
          "summary": "great product",
          "recommend": true,
          "response": null,
          "body": "great product",
          "date": "2022-09-10T00:00:00.000Z",
          "reviewer_name": "adam",
          "helpfulness": 0,
          "photos": []
        },
        {
          "review_id": 1277499,
          "rating": 5,
          "summary": "Satisfied",
          "recommend": true,
          "response": null,
          "body": "Great product!",
          "date": "2022-11-12T00:00:00.000Z",
          "reviewer_name": "Ragnaric",
          "helpfulness": 0,
          "photos": []
        },
        {
          "review_id": 1277307,
          "rating": 4,
          "summary": "I Love It",
          "recommend": true,
          "response": null,
          "body": "Great pants, not the comfiest but def a higher quality then normal",
          "date": "2022-10-27T00:00:00.000Z",
          "reviewer_name": "Jeffrey",
          "helpfulness": 0,
          "photos": [
            {
              "id": 2456560,
              "url": "https://res.cloudinary.com/dbij37ike/image/upload/v1666891217/bqvolerh8yldrxudpvi2.jpg"
            }
          ]
        },
        {
          "review_id": 1277457,
          "rating": 5,
          "summary": "API TESTING POST!!!!!!!!!!G",
          "recommend": true,
          "response": null,
          "body": "Again testing API GGGGGGGGGGGGg~~~~~~~",
          "date": "2022-11-05T00:00:00.000Z",
          "reviewer_name": "gtestg",
          "helpfulness": 0,
          "photos": [
            {
              "id": 2456671,
              "url": "https://preview.redd.it/y844ktbgwom41.jpg?auto=webp&s=c8cd48ed66c7330f77a9078a7fdc25f57cd6203a"
            },
            {
              "id": 2456672,
              "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662659153/orkmflq6ssqr63nw8cbo.png"
            }
          ]
        },
        {
          "review_id": 1276676,
          "rating": 3,
          "summary": "good fit",
          "recommend": true,
          "response": null,
          "body": "love these morning joggers",
          "date": "2022-09-09T00:00:00.000Z",
          "reviewer_name": "yo",
          "helpfulness": 0,
          "photos": [
            {
              "id": 2456138,
              "url": "https://res.cloudinary.com/dwl50vubn/image/upload/v1662690159/pwt7f1vbkzgbdevoyn3p.png"
            }
          ]
        }
      ],
      sort: 'relevant',
      showAddReviewModal: true,
      reviewsToDiplay: 2
    }
    this.handleSort = this.handleSort.bind(this);
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
    this.setNumReviewsToDisplay = this.setNumReviewsToDisplay.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.product !== prevProps.product) {
  //     axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
  //       headers: { 'Authorization': `${API_KEY}` },
  //       params: {
  //         count: 50,
  //         // page: 1,
  //         product_id: this.props.product.id,
  //         sort: 'relevant'
  //       }
  //     })
  //       .then((res) => {
  //         // FIXME - Remove console log after testing complete
  //         console.log('Reviews:', res.data.results)
  //         this.setState({ reviews: res.data.results })
  //         this.allReviews = res.data.results
  //       })
  //       .catch((err) =>
  //         console.log(err));
  //   }
  // }

  handleSort(e) {
    handleInteractions(e, 'Reviews');
    e.preventDefault();
    let sortMethod = e.target.value
    this.setState({ sort: sortMethod });
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: { 'Authorization': `${API_KEY}` },
      params: {
        // count: 10,
        product_id: this.props.product.id,
        sort: sortMethod
      }
    })
      .then((res) => {
        console.log('resorted reviews!')
        this.setState({ reviews: res.data.results })
      })
      .catch((err) =>
        console.log(err));
  }

  toggleReviewModal() {
    this.setState({ showAddReviewModal: !this.state.showAddReviewModal })
  }

  setNumReviewsToDisplay() {
    if (this.state.reviewsToDiplay >= 2 && this.state.reviewsToDiplay < this.state.reviews.length) {
      return <button className='ratings-reviews-btn' onClick={(e) => {
        e.preventDefault()
        this.setState({ reviewsToDiplay: this.state.reviewsToDiplay + 2 })
      }}
      > More Reviews </button>
    }
  }

  filterReviews(key) {
    this.ratingsFiltersStatus[key] = !this.ratingsFiltersStatus[key]
    var filteredReviews = this.allReviews.filter(review => {
      return this.ratingsFiltersStatus[review.rating]
    })
    this.setState({ reviews: filteredReviews, reviewsToDiplay: filteredReviews.length })

    var allAreFalse = Object.values(this.ratingsFiltersStatus).every(value => {
      return value === false
    })

    if (allAreFalse) {
      this.setState({ reviews: this.allReviews, reviewsToDiplay: this.allReviews.length })
    }
  }



  render() {
    return (
      <div ref={this.props.ref} id='primary-ratings-and-reviews-widget-container'>
        <div className='reviews-ratings-hdr'>Ratings &amp; Reviews</div>

        <div className='reviews-ratings'>
          <div className='breakdowns'>
            <div><RatingBreakdown
              reviewMeta={this.props.reviewMeta}
              filterReviews={this.filterReviews} />
            </div>
            <div><ProductBreakdown reviewMeta={this.props.reviewMeta} /></div>
          </div>

          <div className='reviews-list-container'>
            <div className='review-list-hdr'>
              <span className='reviews-hrd-sort-text'>{`${this.state.reviewsToDiplay} review(s), sorted by `}</span>
              <span>
                <select className='reviews-sorting-dropdown' onChange={this.handleSort}>
                  <option value='relevant'>Relevance</option>
                  <option value='helpful'>Helpfulness</option>
                  <option value='newest'>Newest</option>
                </select>
              </span>
            </div>

            <ReviewsList
              reviews={this.state.reviews.slice(0, this.state.reviewsToDiplay)}
              reviewsToDiplay={this.state.reviewsToDiplay} />

            <div className='footer-btns'>
              {this.setNumReviewsToDisplay()}
              <button className='ratings-reviews-btn' onClick={this.toggleReviewModal}>Add A Review</button>
              <div><AddReview
                toggleReviewModal={this.toggleReviewModal}
                showAddReviewModal={this.state.showAddReviewModal}
                reviewMeta={this.props.reviewMeta}
                product={this.props.product} />
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }
}

export default RatingsReviews;

