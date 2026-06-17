import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // Changed "category" to "description" to match our form!
    description: {
      type: String,
      required: true,
    },
    // Added the Cover Image URL (Making it optional)
    imageUrl: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema);