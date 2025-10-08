const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campgrounds');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '68c7ce0a48d587879ae8766e',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum soluta eaque optio repellat laudantium porro minima, ducimus nulla voluptate nobis quaerat, quod rem libero iure eos nesciunt in quia modi?",
            price,
            geometry: {
                type: 'Point',
                coordinates: [-0.127647, 51.5073]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dtrgngnbt/image/upload/v1759309957/YelpCamp/l1nboizhgb3gb4aocvgq.jpg',
                    filename: 'YelpCamp/l1nboizhgb3gb4aocvgq'
                },
                {
                    url: 'https://res.cloudinary.com/dtrgngnbt/image/upload/v1759309958/YelpCamp/ocnkftikzdv0pjoljb6n.jpg',
                    filename: 'YelpCamp/ocnkftikzdv0pjoljb6n'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})