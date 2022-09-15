export const getUrlChannel = (userName, platform) => {
    const urls = {
        youtube: `https://www.youtube.com/channel/${userName}/live`,
        twitch: `https://www.twitch.tv/${userName}`
    };

    return urls[platform];
}
export const truncate = (source) => {
    const size = 20;
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

export const karmalandLogo = "karmaland-5.webp"
export const tortillalandLogo = "tortillaland.png";