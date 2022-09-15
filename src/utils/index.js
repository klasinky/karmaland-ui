export const getUrlChannel = (userName, platform) => {
    const urls = {
        youtube: `https://www.youtube.com/channel/${userName}/live`,
        twitch: `https://www.twitch.tv/${userName}`
    };

    return urls[platform];
}

export const karmalandLogo = "karmaland-5.webp"
export const tortillalandLogo = "tortillaland.png";