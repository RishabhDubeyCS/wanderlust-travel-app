# 🌍 Wanderlust - Travel Listing Web App

Wanderlust is a full-stack travel accommodation listing application inspired by Airbnb. 
Users can view detailed listings including images, price, location, and country.

---

## 🚀 Features

- Display all travel listings
- View single listing details page
- Add new listing using form
- Edit and update existing listings
- Delete listings
- Proper route flow: CRUD operations
- MongoDB + Mongoose database storage
- Clean EJS frontend pages

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Backend runtime |
| Express.js | Server framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| EJS | Frontend templating |
| Bootstrap (optional) | Responsive styling |

---

## 📂 Folder Structure

# npm i ejs Mate









# What is Middleware

Middleware — explained simply and clearly

Middleware is a layer of software that sits between two parts of a system—most commonly between a client (browser/app) and a server or database. Its job is to process, modify, validate, or control data and requests as they pass through.

Think of it as a checkpoint or filter in a request/response pipeline.

Client → Middleware → Server → Middleware → Client


# What Middleware Is Used For

Common responsibilities include:

✔️ Authentication & Authorization
✔️ Logging & Monitoring
✔️ Input validation
✔️ Error handling
✔️ Rate limiting
✔️ CORS handling
✔️ Session & cookie management

# Middleware in Web Development (JavaScript Example)
 Express.js is a popular web framework for Node.js that uses middleware to process requests and responses.

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to the next middleware
}

app.use(logger);

# What’s happening: 

The middleware runs before the route handler

It logs the request

next() hands off control to the next step


Middleware Beyond Web Apps
Middleware exists in many domains:

| Domain            | Example               |
| ----------------- | --------------------- |
| Web servers       | Express, Koa, Fastify |
| Databases         | ORM hooks             |
| Operating systems | IPC layers            |
| Messaging         | Kafka consumers       |
| Cloud             | API gateways          |
