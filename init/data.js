const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",


  },
  {
    title: "Rajasthani Desert Camp",
    description:
      "Experience the Thar Desert with camel safaris, cultural performances, and starry nights.",
    image: {
      url: "https://images.unsplash.com/photo-1580642829273-96e9d332612e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Himalayan Riverfront Cottage",
    description:
      "A cozy cottage offering adventure sports and peaceful river views among the mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Tea Garden Estate Bungalow",
    description:
      "Stay amidst lush green tea gardens with fresh air and scenic beauty all around.",
    image: {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Beach Shack Retreat",
    description:
      "A budget-friendly beach hut with sea breeze and chilled vibes for travelers.",
    image: {
      url: "https://images.unsplash.com/photo-1582203423433-8c00e18e5160?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Goa",
    country: "India",
  },
  {
    title: "City View Studio Apartment",
    description:
      "A modern studio apartment close to shopping malls, nightlife, and tech hubs.",
    image: {
      url: "https://images.unsplash.com/photo-1486308510493-aa64833637b0?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "House in the Pink City",
    description:
      "Beautiful traditional stay with Rajasthani architecture and warm hospitality.",
    image: {
      url: "https://images.unsplash.com/photo-1550037761-9332ef1c3b8d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Lake View Palace Room",
    description:
      "Wake up to mesmerizing lake views and enjoy the royal experience.",
    image: {
      url: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Forest Eco Home Stay",
    description:
      "Reconnect with nature in a comfortable eco-friendly cottage surrounded by wildlife.",
    image: {
      url: "https://images.unsplash.com/photo-1515255384527-1a9af60ef5c3?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Luxury Apartment Near Marine Drive",
    description:
      "Premium stay with sea breeze and stunning sunset views of Arabian Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Cliffside Resort Stay",
    description:
      "Enjoy panoramic views of the sea from the top of the cliffs with premium facilities.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Snow Chalet Winter Paradise",
    description:
      "Stay cozy with fireplaces and enjoy snow activities all around.",
    image: {
      url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Spiritual Town Apartment",
    description:
      "Ideal stay for travelers exploring ancient temples and riverside ghats.",
    image: {
      url: "https://images.unsplash.com/photo-1558980664-10cc4b8e4a83?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Eco Stay in Coffee Estates",
    description:
      "Relax with the aroma of coffee beans around you and scenic hills.",
    image: {
      url: "https://images.unsplash.com/photo-1526483360412-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Coorg",
    country: "India",
  },
  
  {
    title: "IT Hub Budget Accommodation",
    description:
      "Affordable and clean rooms close to major companies and transport.",
    image: {
      url: "https://images.unsplash.com/photo-1556012018-2954f110a6f7?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Hyderabad",
    country: "India",
  },

  // ⬆ Existing structure continues ⬇
  // Data is long — but formatted same way exactly.
];

// Keep export structure the same
module.exports = { data: sampleListings };
