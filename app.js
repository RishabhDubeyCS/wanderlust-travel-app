const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const  ejsMate = require("ejs-mate");//ejs used for creating multiple template for style

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("DB Connection Error:", err);
    });


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
    res.send("I am root");
});


//Index Route
app.get("/listings", async (req, res) => {
//   try {
//     const listings = await Listing.find({});
//     console.log(listings);
//     res.send(listings); // send data to browser
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error fetching listings");
//   }
 const listings = await Listing.find({});
  res.render("listings/index.ejs", { listings });
});
// New routes
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})


// app.get("/testListing", async (req, res) => {
//     try {
//         let sampleListing = new Listing({
//             title: "Cozy Beach House",
//             description: "A peaceful beach house with stunning ocean views and private access to the shore.",
//             image: "beachhouse.jpg",
//             price: 3500,
//             location: "Goa",
//             country: "India"
//         });

//         await sampleListing.save();
    

//         res.send("Sample listing saved successfully!");
//     } catch (error) {
//         console.log("Error saving sample listing:", error);
//         res.send("Failed to save sample listing.");
//     }
// });


//show route



app.get("/listings/:id", async  (req, res)=>{
let {id} = req.params;
 const listing = await Listing.findById(id)
 res.render("listings/show.ejs", {listing});

})

//Create Route
app.post("/listings", async (req, res) => {
    // let  {title, description, image, price, location, country} = req.body;

    let newListing =new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");

  
    // console.log(listing);
})

//Edit Route
// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        return res.status(404).send("Listing not found");
    }

    res.render("listings/edit", { listing });
});

//Update Route
// Update Route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true, runValidators: true }
    );

    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  res.redirect("/listings");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
