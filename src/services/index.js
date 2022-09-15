import client from "../axios"

export const getData= async (channels) => {
    try {
        const { data } = await client.post("channels/", channels);
        return data
    } catch (error) {
       
    }
    return []
}