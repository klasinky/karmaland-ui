import client from "../axios"

const channels = [
    { name: "alexby11", platform: "twitch" },
    { name: "bystaxx", platform: "twitch" },
    { name: "illojuan", platform: "twitch" },
    { name: "lolitofdez", platform: "twitch" },
    { name: "luzu", platform: "twitch" },
    { name: "mangel", platform: "twitch" },
    { name: "quackity", platform: "twitch" },
    { name: "rubius", platform: "twitch" },
]

export const getData = async () => {
    try {
        const { data } = await client.post("channels/", channels);
        return data
    } catch (error) {
       
    }
    return []
}