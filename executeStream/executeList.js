const { execute } = require('./execute.js');
const { createStream } = require('../createStream/createStream.js')
const { AudioPlayerStatus, VoiceConnectionStatus } = require("@discordjs/voice");
exports.executeList = async function executeList(msg, linkList) {
    if (linkList.length > 0) {
        try {
            let link = linkList.shift();
            let stream = await createStream(link);
            if (stream != undefined) {
                execute(stream);
                msg.channel.send('Now playing ' + link);
            }else{
                console.log("stream is undefined");
            }
            return;
        } catch (e) {
            console.log(e);
        }
    } else {
        msg.channel.send('Çalınacak parça kalmadı.');
    }
    return;
}