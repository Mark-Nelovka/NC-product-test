import axios from "axios";

export default async function getOneProduct() {
    try {
        const result = await axios.get("https://testbackend.nc-one.com/image?id=1");
        return result.data;
    } catch (error) {
        return error;
    }
}