import axios from "axios";

export default async function getAllProducts() {
try {
    const result = await axios.get("https://testbackend.nc-one.com/image");

    return result.data;
} catch (error) {
    return error;
}
}