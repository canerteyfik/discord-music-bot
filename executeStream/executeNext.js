const { execute } = require('./execute.js');
const {createStream}=require('../createStream/createStream.js')
const { AudioPlayerStatus, VoiceConnectionStatus } = require("@discordjs/voice");
exports.executeNext = async function executeNext(linkList,msgOut) {
    if(linkList.length===0){
        isPlayingAudio=false;
        return;
    }
    try {
        if(linkList.length>0){
            let link = linkList.shift();
            let stream =await createStream(link);
            execute(stream);
            if(msgOut){
                msgOut.channel.send('Now playing '+link);
            }
            return;
        }
    } catch (err) {
        console.log(err);
    }
    return;
}