# 🏕️ YelpCamp 
YelpCamp is a full-stack web application designed for camping enthusiasts to discover, list, and review campgrounds around the world. This web application was the captstone project of Colt Steele's "The Web Developer Bootcamp" on Udemy.

The goal of this project was to transition from writing isolated scripts to architecting a complete, secure, cloud-deployed product from the ground up. 

## 🚀 Core Features

*   **User Authentication & Security:** Implemented secure registration and login sessions using **Passport.js**.
*   **Full CRUD Capabilities:** Users can create, read, update, and delete campground listings and comments.
*   **Robust Authorization:** Middleware protection ensures that users can only edit or delete content they personally created.
*   **Cloud Media Storage:** Integrated **Cloudinary API** for persistent image uploading and optimization.
*   **Interactive Mapping:** Embedded **Mapbox API** to display campground cluster maps and location coordinates.
*   **Data Validation:** Utilized **Joi** schemas to validate server-side data entry before writing to the database.

## 🛠️ Tech Stack

| Layer | Technologies Used |
|---|---|
| **Frontend** | HTML5, CSS3, Bootstrap 5, EJS (Embedded JavaScript templates) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose (ODM) |
| **Security & Utilities** | PassportJS, Joi, Express-Mongo-Sanitize (NoSQL injection prevention) |


## 🏁 Getting Started (Local Run)

To run this project locally, clone the repository and install the dependencies:

```bash
git clone [https://github.com/alisonpong/yelpcamp.git](https://github.com/alisonpong/yelpcamp.git)
cd yelpcamp
npm install
