import mongoose from "mongoose";
const Schema = mongoose.Schema

const course = new Schema ({
    name: {
        type: String
    },
    dready: {
        type: String
    }
});

export default mongoose.model('course', course)