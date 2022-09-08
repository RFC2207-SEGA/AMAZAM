import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, fireEvent, rerender } from '@testing-library/react';
// import App from '../src/index.jsx';
import ProductInfo from '../src/components/ProductInfo.jsx'
import axios from 'axios';
import Overview from '../src/components/Overview.jsx'
import FullscreenModal from '../src/components/FullscreenModal.jsx'
import MiniGallery from '../src/components/MiniGallery.jsx'
import RelatedProduct from '../src/components/Related/RelatedProduct'
import Photo from '../src/components/Photo.jsx'

axios.defaults.baseURL = 'http://localhost:3000';

jest.mock('axios');

axios.get.mockResolvedValue({
  "data": {
      "id": 66642,
      "campus": "hr-rfc",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2022-03-31T21:13:15.875Z",
      "updated_at": "2022-03-31T21:13:15.875Z",
      "features": [
          {
              "feature": "Fabric",
              "value": "Canvas"
          },
          {
              "feature": "Buttons",
              "value": "Brass"
          }
      ],
        "product_id": "66642",
        "results": [
            {
                "style_id": 411534,
                "name": "Forest Green & Black",
                "original_price": "140.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    }
                ],
                "skus": {
                    "2390357": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2390358": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2390359": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2390360": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2390361": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2390362": {
                        "quantity": 4,
                        "size": "XL"
                    }
                }
            },
            {
                "style_id": 411535,
                "name": "Desert Brown & Tan",
                "original_price": "140.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
                    }
                ],
                "skus": {
                    "2390363": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2390364": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2390365": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2390366": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2390367": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2390368": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 411536,
                "name": "Ocean Blue & Grey",
                "original_price": "140.00",
                "sale_price": "100.00",
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    }
                ],
                "skus": {
                    "2390369": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2390370": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2390371": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2390372": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2390373": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2390374": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 411537,
                "name": "Digital Red & Black",
                "original_price": "140.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                        "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    }
                ],
                "skus": {
                    "2390375": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2390376": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2390377": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2390378": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2390379": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2390380": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 411538,
                "name": "Sky Blue & White",
                "original_price": "140.00",
                "sale_price": "100.00",
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "2390381": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2390382": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2390383": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2390384": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2390385": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2390386": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 411539,
                "name": "Dark Grey & Black",
                "original_price": "170.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    }
                ],
                "skus": {
                    "2390387": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2390388": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2390389": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2390390": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2390391": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2390392": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            }
        ]
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
      "content-length": "447",
      "content-type": "application/json; charset=utf-8"
  },
  "config": {
      "transitional": {
          "silentJSONParsing": true,
          "forcedJSONParsing": true,
          "clarifyTimeoutError": false
      },
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {
          "FormData": null
      },
      "headers": {
          "Accept": "application/json, text/plain, */*",
          "Authorization": "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"
      },
      "params": {
          "product_id": 66642
      },
      "method": "get",
      "url": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66642"
  },
  "request": {}
})

describe('Overview tests', function () {
  const user = userEvent.setup();

  const {rerender} = render(<Overview meta={{
    "product_id": "1",
    "ratings": {
        "1": "3",
        "2": "10",
        "3": "25",
        "4": "35",
        "5": "49"
    },
    "recommended": {
        "false": "25",
        "true": "97"
    },
    "characteristics": {
        "Fit": {
            "id": 223572,
            "value": "2.9900990099009901"
        },
        "Length": {
            "id": 223573,
            "value": "2.9705882352941176"
        },
        "Comfort": {
            "id": 223574,
            "value": "3.2941176470588235"
        },
        "Quality": {
            "id": 223575,
            "value": "3.2323232323232323"
        }
    }
}} product={{
  "id": 66642,
  "campus": "hr-rfc",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2022-03-31T21:13:15.875Z",
  "updated_at": "2022-03-31T21:13:15.875Z"
}} />)

  it('should contain the product', () => {
    expect(screen.getByText('Morning Joggers')).toBeInTheDocument()
  });

  it('should contain the star component', () => {
    expect(screen.getByTestId('placeholder')).toBeInTheDocument()
  });

  it('should contain the product category', () => {
    expect(screen.getByTestId('product-category')).toBeInTheDocument()
  });

  it('should contain the product name', () => {
    expect(screen.getByTestId('product-name')).toBeInTheDocument()
  });

  it('should contain the product price', () => {
    expect(screen.getByTestId('price')).toBeInTheDocument()
  });

  it('should contain the strikeout property', () => {
    expect(screen.queryByTestId('strikeout'),
    ).toBeInTheDocument()
  });

  it('should link to the Reviews section', () => { expect(screen.getByTestId('placeholder')).toHaveTextContent('Read All Reviews')
  });

  it('should open the fullscreen modal on click and allow navigation', () => {
    const photo = screen.getByTestId('photo');
    user.click(photo)
    .then(() => { expect(screen.getByTestId('dot-container')).      toBeInTheDocument()
    const descendants = screen.getAllByTestId('dot')
    expect(descendants.length).toBe(2);
    const modalArrow = screen.getByTestId('modal-next');
    return user.click(modalArrow) })
      .then(() => { expect(screen.getByTestId('modal-prev')).tobeIntheDocument()})
      .then(() => { return user.click(descendants[0])} )
      .then(() => { expect(modalArrow).toBeInTheDocument()})
      .then(() => { return user.click(screen.getByTestId('photo-modal-content'))})
      .then(() => { return user.click(screen.getByTestId('next'))})
  })

  it('should have the proper size values in its overview dropdowns', () => {
    userEvent.selectOptions(screen.getByTestId('size-selector'), [""])
      .then(() => expect(screen.queryByTestId('size-warning').not.toBeInTheDocument()))
      .then(() => {user.click(screen.getByTestId('cartbutton'))})
  })

  it('should have the right number of mini-photos', () => {
    const miniphotos = screen.getAllByTestId('mini-photo')
    expect(miniphotos.length).toBe(2);
  })

  rerender(<Overview meta={{
      "product_id": "1",
      "ratings": {
          "1": "3",
          "2": "10",
          "3": "25",
          "4": "35",
          "5": "49"
      },
      "recommended": {
          "false": "25",
          "true": "97"
      },
      "characteristics": {
          "Fit": {
              "id": 223572,
              "value": "2.9900990099009901"
          },
          "Length": {
              "id": 223573,
              "value": "2.9705882352941176"
          },
          "Comfort": {
              "id": 223574,
              "value": "3.2941176470588235"
          },
          "Quality": {
              "id": 223575,
              "value": "3.2323232323232323"
          }
      }
  }} product={{
      "id": 66644,
      "campus": "hr-rfc",
      "name": "Morning Joggers",
      "slogan": "Make yourself a morning person",
      "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      "category": "Pants",
      "default_price": "40.00",
      "created_at": "2022-03-31T21:13:15.875Z",
      "updated_at": "2022-03-31T21:13:15.875Z"
  }}/>)

});

// describe('Photo test', function () {
//   render(<Photo index={1} last={1} display={(index) => { if (index) { return true}}} photo={{
//     "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//     "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
// }}/>)

//   it('should render the photo', () => {
//     expect(screen.getAllByTestId('photo').toBeInTheDocument())
//   })
// })
// describe('Mini gallery tests', function () {

//   render(<MiniGallery photos={[
//     {
//       "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
//       "url": 'placeholderurl'
//     },
//     {
//       "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
//       "url": "placeholderurl"
//     }
//   ]} index={0}/>)


//   it('should have mini-photos', async () => {
//     await Promise.resolve();
//     expect(screen.getByTestId('mini-photo').toBeInTheDocument())
//   })
// })
