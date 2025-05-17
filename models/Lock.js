import mongoose from "mongoose";

const lockSchema = new mongoose.Schema({
  lock: {
    type: Boolean,
  },
});

const Lock = mongoose.models.Lock || mongoose.model("Lock", lockSchema);
export default Lock;