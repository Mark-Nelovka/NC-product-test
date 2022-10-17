import axios from "axios";

export default async function getOneProduct(id: string) {
  try {
    const result = await axios.get(
      `https://testbackend.nc-one.com/image?id=${id}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
}
