const { createLink } = require('./createLink.js');
const { apiKey, baseApiUrl } = require('../config/config.json');
const axios = require("axios");

exports.createLinkList = async function createLinkList(linkList, msg) {
    let link = await createLink(msg);
    //msg.channel.send('Sıraya eklendi'+link);
    if (link) {
        linkList.push(link);
        let title = await getVideoTitle(link)
        if (linkList.length > 1) {
            if (title) {
                msg.reply(title + 'kuyruğa eklendi');
            }
        }
    }
    return linkList;
}
async function getVideoTitle(link) {
    try {
        let baseVideoUrl = "https://www.youtube.com/watch?v=";
        let videoId = link.replace(baseVideoUrl, '');
        let requestUrl = `${baseApiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${videoId}`;
        requestUrl = encodeURI(requestUrl);
        let response = await axios.get(requestUrl);
        return response.data.items[0].snippet.title;
    } catch (err) {
        console.log(err);
    }
}