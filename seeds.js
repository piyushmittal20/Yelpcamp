var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment")

var data = [{
        name: "Rest's cloud",
        image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719__340.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem praesentium soluta, quasi impedit labore, est, asperiores at quibusdam mollitia beatae dolorum recusandae! At beatae, accusamus earum blanditiis mollitia consectetur in."
    },
    {
        name: "Desert Mesa",
        image: "https://cdn.pixabay.com/photo/2016/10/23/17/11/camping-1763605__340.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem praesentium soluta, quasi impedit labore, est, asperiores at quibusdam mollitia beatae dolorum recusandae! At beatae, accusamus earum blanditiis mollitia consectetur in."
    },
    {
        name: "Canyon Floor",
        image: "https://cdn.pixabay.com/photo/2016/02/16/13/06/auroras-1203289__340.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem praesentium soluta, quasi impedit labore, est, asperiores at quibusdam mollitia beatae dolorum recusandae! At beatae, accusamus earum blanditiis mollitia consectetur in.."
    },

]

function seedDB() {
    //remove existing camp ground
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("campground removed!")
                //added new camp ground
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create({
                            text: "This place is great , but i wish there will be internet",
                            author: "Homer"
                        }, function(err, comment) {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("comments added")

                        })
                    }
                });
            });
        }

    });

};

module.exports = seedDB;