import axios from "axios";

async function getData() {
    const url = `http://localhost:8000/channels`;
    const body = [
        {name : "ibai", platform: "twitch"},
        {name : "auronplay", platform: "twitch"},
        {name : "carola", platform: "twitch"},
    ]
    const response = await axios.post(url, body);
    return response.data;

}

export default getData;
