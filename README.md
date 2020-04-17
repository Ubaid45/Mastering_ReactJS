This project is about **[movie management](https://desolate-headland-28492.herokuapp.com/movies)**, an end-to-end-application in which I applied all the concepts which were practiced before in :
- [Counter app](https://github.com/Ubaid45/ReactJS_simple-counter-app)
- [Http Client app](https://github.com/Ubaid45/ReactJS_http-client-app)
- [Routing app](https://github.com/Ubaid45/ReactJS_routing-app)

It is deployed [here](https://desolate-headland-28492.herokuapp.com/movies). It includes:
* Pagination
* Filtering
* Sorting
* Routing
* Bootstrap Forms
  * Controlled elements
  * Validation using **[Joi](https://www.npmjs.com/package/joi)**
  * Reuseable inputs, tables, forms
* Calling backend Services which are written in **Node.js**
  * Http client using **[axios](https://github.com/axios/axios)**
  * Optimistic and pessimistic updates
  * Expected vs unexpected exception handling
  * Exceptions logging using **[Sentry](https://www.npmjs.com/package/@sentry/browser)**
  * Setup **Mongo DB**
* Authentication and Authorization via **[JsonWebToken](https://jwt.io)**
* Deployment
  * Node service on [Heroku](https://dashboard.heroku.com)
  * MongoDB on [cloud](https://cloud.mongodb.com/)
  * ReactJS on [Heroku](https://dashboard.heroku.com) by using [create react app buildpack](https://github.com/mars/create-react-app-buildpack)
  

# User roles
- A user without login can only view movies.
- A logged in user can perform **add** and **update** operations. (The email for normal user : **test@domain.com** and password: **testuser**)
- An admin user can additionally perform **delete** operation. (The email for admin : **admin@domain.com** and password: **1234abcd**)



### `Advanced Concepts`
- Higher order components
- Hooks
- Context

Here is the **[github link](https://github.com/Ubaid45/ReactJS_advanced-concepts)** to the practiced advanced concepts.
