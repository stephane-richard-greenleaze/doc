"use strict";(self.webpackChunkgreenleaze_docs=self.webpackChunkgreenleaze_docs||[]).push([[580],{783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(4848),i=n(8453);const o={sidebar_position:2,sidebar_label:"Implement with the API"},a="API",s={id:"api-implement",title:"API",description:"The REST API makes it able to retrieve prices rules from GreenLeaze, create an order and then follow the order status.",source:"@site/docs/api-implement.mdx",sourceDirName:".",slug:"/api-implement",permalink:"/docs/api-implement",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Implement with the API"},sidebar:"tutorialSidebar",previous:{title:"Before you start",permalink:"/docs/intro"},next:{title:"Implement with PrestaShop",permalink:"/docs/prestashop-implement"}},d={},l=[{value:"How the GreenLeaze Payment Path Integration Works",id:"how-the-greenleaze-payment-path-integration-works",level:2},{value:"API Urls",id:"api-urls",level:2},{value:"API Authentication",id:"api-authentication",level:2},{value:"Pricing Rules",id:"pricing-rules",level:2},{value:"Step 1 : Get Pricing Rules",id:"step-1--get-pricing-rules",level:3},{value:"Step 2 : Display the pricings to the customer",id:"step-2--display-the-pricings-to-the-customer",level:3},{value:"Send data to GreenLeaze",id:"send-data-to-greenleaze",level:2},{value:"Step 2 : Send the order to GreenLeaze",id:"step-2--send-the-order-to-greenleaze",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"api",children:"API"}),"\n",(0,r.jsx)(t.p,{children:"The REST API makes it able to retrieve prices rules from GreenLeaze, create an order and then follow the order status."}),"\n",(0,r.jsx)(t.p,{children:"Last update : 18/02/2025"}),"\n",(0,r.jsx)(t.h2,{id:"how-the-greenleaze-payment-path-integration-works",children:"How the GreenLeaze Payment Path Integration Works"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The store retrieves the pricing rules from GreenLeaze."}),"\n",(0,r.jsx)(t.li,{children:"The store displays the pricings to the customer in the way he wants to."}),"\n",(0,r.jsx)(t.li,{children:"The store sends a request containing data in JSON to GreenLeaze to create an order."}),"\n",(0,r.jsx)(t.li,{children:"The store redirects the customer to GreenLeaze to complete the order."}),"\n",(0,r.jsx)(t.li,{children:"Greenleaze sends webhooks with the informations filled by the customer during the payment process."}),"\n",(0,r.jsx)(t.li,{children:"GreenLeaze processes the order and sends the customer back to the store.\nGreenLeaze sends a webhook to the store to notify the new order information."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"api-urls",children:"API Urls"}),"\n",(0,r.jsx)(t.p,{children:"All requests to the API must be made to the following URL :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://new.api.greenleaze.com\n"})}),"\n",(0,r.jsx)(t.p,{children:"A staging version is available at the following URL :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://staging.api.greenleaze.com\n"})}),"\n",(0,r.jsx)(t.p,{children:"Staging data is anonimized and regularly reset after each new release. You can request an access to the production and staging environment by contacting GreenLeaze."}),"\n",(0,r.jsx)(t.h2,{id:"api-authentication",children:"API Authentication"}),"\n",(0,r.jsxs)(t.p,{children:["All requests to the API must be authenticated with an API key. The API key must be included in the ",(0,r.jsx)(t.code,{children:"X-API-KEY"})," header of the request. This token is unique to your shop ",(0,r.jsx)(t.strong,{children:"and must be kept secret"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"pricing-rules",children:"Pricing Rules"}),"\n",(0,r.jsx)(t.h3,{id:"step-1--get-pricing-rules",children:"Step 1 : Get Pricing Rules"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"GET /v1/price-rules\n"})})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="Request response"',children:'[\n  //...\n  {\n    "id": 30,\n    "name": "0 2000 1 mois",\n    "rule": "(1.2* [[prixHT]] /11.9) + (1.2-[[tva]])*[[prixHT]]/11.9", // [[tva]] represent the taxes of the product - Used to calculate the monthly price\n    "depositRule": "(1.2* [[prixHT]] /11.9) + (1.2-[[tva]])*[[prixHT]]/11.9", // [[tva]] represent the taxes of the product - Used for first payment\n    "minPrice": "0.00", // This is the price without taxes !\n    "maxPrice": "2000.00", // This is the price without taxes !\n    "duration": 6 // Can be 1, 6, 12, 18 or 24 months depending on the contract with GreenLeaze\n}\n//...\n]\n\n'})})]}),"\n",(0,r.jsxs)(t.p,{children:["The request returns all rules concerning your shop. A rule applies to all products whose price is between ",(0,r.jsx)(t.strong,{children:"minPrice"})," and ",(0,r.jsx)(t.strong,{children:"maxPrice"})," and for the corresponding duration."]}),"\n",(0,r.jsx)(t.p,{children:"From all the rules you are able to let your customer choose his duration and the corresponding price will be calculated according to the rule. If the product is not in the range of any rule, the product is not eligible for the GreenLeaze Subscription."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Please store the rules in user session to avoid multiple requests to the API. It will improve user experience for all customers."})}),"\n",(0,r.jsx)(t.h3,{id:"step-2--display-the-pricings-to-the-customer",children:"Step 2 : Display the pricings to the customer"}),"\n",(0,r.jsx)(t.p,{children:"You can easly display the pricing to the customer by using the differents rules you have received. You may calculate the price in front-end or back-end depending on your needs.\nWe recommend to display the calculated price on :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The product page"}),"\n",(0,r.jsx)(t.li,{children:"The cart page"}),"\n",(0,r.jsx)(t.li,{children:"The checkout page"}),"\n",(0,r.jsx)(t.li,{children:"The product list page"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"send-data-to-greenleaze",children:"Send data to GreenLeaze"}),"\n",(0,r.jsx)(t.h3,{id:"step-2--send-the-order-to-greenleaze",children:"Step 2 : Send the order to GreenLeaze"}),"\n",(0,r.jsx)(t.p,{children:"Once your customer has made his order on your website, you must send the order to GreenLeaze to create the order.\nA simple POST request is used to send the order to GreenLeaze."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\nPOST /v1/subscriptions/transaction\n\n"})})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="Request body"',children:'[\n  //...\n  {\n    "transactionId": "",// (String, Required, 10 characters minimum) : Random generated id. Used by pay.greenleaze.com to associate all data to the transaction_id spectified in the redirection URL of the customer. Must be unique for each order. Please start the transactionId with the shop name to avoid collision. An error will be returned if the transactionId is not unique.\n    "duration": 12, // (Integer, Required) : Default duration of the rental in months.\n    "cartId": "", // (String, Required) : Cart id.\n    "cartSecureKey": "", // (String, Required) : Cart secure key.\n    "urls": {}, // (Object, Optional) : All shop\'s URL  See below for the URL format.\n    "source": "", // (String, Optional) : Source of the order, will be used to track the order on the GreenLeaze dashboard.\n    "totalInitialFees": 0.00, // (Float, null) : Initial fees of the order - If set with delivery name then delivery options will not be shown on the GreenLeaze payment page. If set without delivery name then delivery options will be shown on the GreenLeaze payment page and will override the totalInitialFees. If 0 considered as null.\n    "deliveryName": "", // (String, null) : Name of the delivery option selected by the customer.\n    "customer": {\n      "email": "", // (String, Optional)\n      "firstName": "", // (String, Optional)\n      "lastName": "", // (String, Optional)\n      "phone": "", // (String, Optional)\n    },\n    "deliveryAddress": {\n      "street": "", // (String, Optional)\n      "city": "", // (String, Optional)\n      "postCode": "", // (String, Optional)\n      "country": "", // (String, Optional)\n    },\n    "invoiceAddress": {\n      "street": "", // (String, Optional)\n      "city": "", // (String, Optional)\n      "postCode": "", // (String, Optional)\n      "country": "", // (String, Optional)\n    },\n    "askForAdresses": true, // (Boolean, Optional) : If false and presence of delivery or invoice addresses, the customer will not be asked for his delivery and invoice addresses and will not be able to edit them.\n    "products": [\n      // ...\n    ], // (Array, Required) : List of products ordered by the customer - See below for the product format.\n    "trackingId": "" // (String, Optional) : Tracking id of the customer for Google Analytics integration.\n  }\n]\n'})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="Product format"',children:'{\n  "name": "", // (String, Required) : Name of the product.\n  "unitPrice": 1000, // (Float, Required) : Unit price of the product. Without taxes !\n  "vat": 20, // (Float, Required) : VAT applicable on the product.\n  "quantity": 1, // (Integer, Required) : Quantity ordered of the product.\n  "combination": {\n    "name": "" // (String, Optional) : Description of the combination. If single product without declination put the product name.\n  },\n  "imageUrl": "", // (String, Optional) : URL of the product image, must be a valid URL and accessible from the GreenLeaze server.\n  "disabled": false, // (Boolean, Required) : Indicates if the product is disabled for GreenLeaze Renting, if true the product will be payed in one time on GreenLeaze.\n  "id": "" // (String, Optional) : Id of the product, will be used to delete One unit of the product from the recap of the order.\n}\n'})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="Urls object format"',children:'{\n  "failure": "", // (String, Required) : Url where the customer will be redirected in case of payment failure.\n  "success": "", // (String, Required) : Url called with POST in case of success and where the user is redirected after\n  "sendData": "", // (String, Optional) : Url called with PATCH (with the json data) to send the customer data before the end of the payment process.\n  "deleteProduct": "" // (String, optional) : Url call with PATCH (with the json data) to delete one unit of a the product with the id specified in the product format. You must specify the id of the product in the product format to use it.\n}\n'})})]}),"\n",(0,r.jsx)(t.p,{children:"Responses of the request :"}),"\n",(0,r.jsx)(t.p,{children:"201 : The order has been created and you are able to redirect him to the payment page."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="Response object format"',children:'{\n  "success": true,\n  "transactionId": "tran2s_c623cbe0c3-12e4fb-436c-2aa4c-330a9ff00c32",\n  "subscriptionId": "76a7c5ef-a0cb-471a-81a4-ba47391885b0"\n}\n\nThe field "transactionId" is returned in the response with greenleaze subscriptionId which can be stored (or not) in your database, it is the unique identifier of the order on GreenLeaze.\n\n401 : The provided API key is invalid.\n\n400 : The request is invalid. Check the format data sent - Details of the invalid fields are returned in the response.\n\n### Step 3 : Redirect the customer to pay.greenleaze.com\n\nOnce the order has been sent to GreenLeaze, you must redirect the customer to the GreenLeaze payment page, the previous request will return the URL to redirect the customer.\nYou must redirect the customer to the URL returned by the previous request.\n\nThe format of the URL is :\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://pay.greenleaze.com/order/duration?transaction_id=%7BtransactionId%7D&duration=%7Bduration%7D&lang=%7Blanguage%7D",children:"https://pay.greenleaze.com/order/duration?transaction_id={transactionId}&duration={duration}&lang={language}"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'\nBe sure to replace `{transactionId}` by the transactionId you have sent in the previous request.\nThe `duration` parameter is the default duration of the subscription in months, it is optional but ables to preselect the duration on the GreenLeaze payment page.\nThe `lang` parameter is the language of the payment page, it is optional but ables to preselect the language on the GreenLeaze payment page. Available options are `fr` (French), `en` (English) and `de` (German).\n\n### Step 4 : Listen for order modifications (optional)\n\nWhile the customer is entering new informations you can listen to the `sendData` URL you have provided in the request to edit the order on the fly.\nThe `sendData` URL will be called with a PATCH request with the following parameters in the body :\n\n```json title="Request body"\n{\n  "email": "",\n  "phone": "",\n  "firstName": "",\n  "lastName": "",\n  "cartId": "",\n  "cartSecureKey": ""\n}\n```\n\nYou may also listen for product deletions by using the `deleteProduct` URL you have provided in the request to create the order.\nThis URL will be called with a PATCH request with the following parameters in the body :\n\n```json title="Request body"\n{\n  "id": "",\n  "cartId": "",\n  "cartSecureKey": ""\n}\n```\n\nThis request may only be sent for products where the `id` field is set.\n\n### Step 5 : Listen for the customer payment\n\nOnce the customer has completed the payment, he will be redirected to the (success) URL you have provided in the request to create the order.\nA post request will be sent to the (success) URL with the following parameters in the body :\n\n```json title="Response object format"\n{\n          "cartId": "", (same as the one used in the request to create the order)\n          "cartSecureKey": "", (same as the one used in the request to create the order)\n          "email": "",\n          "firstName": "",\n          "lastName": "",\n          "deliveryAddress": {\n            "street": "",\n            "city": "",\n            "country": "",\n            "postCode": "",\n            "phone": "",\n            "firstName": "",\n            "lastName": "",\n          },\n          "invoiceAddress": {\n            "street": "",\n            "city": "",\n            "country": "",\n            "postCode": "",\n            "phone": "",\n            "firstName": "",\n            "lastName": "",\n          }, (optional)\n          "products": [\n            {\n              "name": "",\n              "quantity": 1,\n              "unitPrice": 1000,\n              "vat": 1,\n              "id": "" (if provided)\n            }\n          ],\n          "greenleazeSubscriptionId": "",\n          "duration": 6,\n          "monthlyRentalPayment": 67,\n          "deliveryMode": {\n            "name": "",\n            "price": 1,\n            "tags": ""\n          } (optional)\n}\n```\n\nIn case you created a draft order that was not editable by the customer on your website, you can trust the cartId and cartSecureKey to validate the order (example : Shopify backend).\nIf there is a chance the cart has been modified by the customer, you can use the products array to validate the order (example : PrestaShop integration used cart secure key to validate the correct cart, but checks the cart content before validating the order).\n\nThen the customer will then be redirected on the same Url.\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);