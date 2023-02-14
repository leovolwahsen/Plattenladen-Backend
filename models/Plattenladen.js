import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: [1800, "Too low old record age"],
        max: 2023,
    },
    picture: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [15, "Too low price for record"],
        max: 25,
    },
});
const Plattenladen = mongoose.model("Plattenladen", schema);
export default Plattenladen;
export const getAll = async (search = "") => {
    const plattenladens = await Plattenladen.find({
        $or: [
            {
                title: {
                    $regex: ".*" + search + ".*",
                },
            },
            {
                artist: {
                    $regex: ".*" + search + ".*",
                },
            },
        ],
    });
    return plattenladens;
};
export const create = async (search = "") => {
    const plattenladens = await Plattenladen.find({
        $or: [
            {
                title: {
                    $regex: ".*" + search + ".*",
                },
            },
            {
                artist: {
                    $regex: ".*" + search + ".*",
                },
            },
        ],
    });
    return plattenladens;
};
