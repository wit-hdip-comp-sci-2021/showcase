import Mongoose from "mongoose";

const { Schema } = Mongoose;

const projectSchema = new Schema({
  projectTitle: String,
  latitude: String,
  longitude: String,
  styleDescription: String, 
  projectDescription: String, 
  areaSqM: Number,
  priceEu: Number,
  image1: String, 
  image2: String, 
  image3: String, 
  portfolioid: {
    type: Schema.Types.ObjectId,
    ref: "Portfolio",
  },
});

export const Project = Mongoose.model("Project", projectSchema);