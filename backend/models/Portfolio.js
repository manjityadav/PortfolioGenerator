const mongoose=require('mongoose');

const portfolioSchema = new mongoose.Schema({
  hero: {
    name: String,
    title: String,
    tagline: String,
    profileImage: String,
  },
  about: {
    bio: String,
    email: String,
    phone: String,
    location: String,
    socials:String, 
  },
  skills: {
  type: [String],
  default: [],
},
  services: [
    {
      title: String,
      description: String,
    },
  ],
  portfolio: [
    {
      projectName: String,
      imageUrl: String,
      description: String,
      techStack: String,
    },
  ],
  testimonials: [
    {
      name: String,
      role: String,
      feedback: String,
    },
  ],
  blog: [
    {
      title: String,
      content: String,
      date: String,
    },
  ],
  contact: {
    address: String,
    email: String,
    phone: String,
  },
  Template:String,
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
 module.exports= Portfolio;
