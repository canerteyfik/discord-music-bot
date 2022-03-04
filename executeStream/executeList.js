const { execute } = require('./execute.js');
const {createStream}=require('../createStream/createStream.js')
const { AudioPlayerStatus, VoiceConnectionStatus } = require("@discordjs/voice");
exports.executeList = async function executeList(msg,linkList) {
    if(linkList.length>0){
        let link = linkList.shift();
        let stream =await createStream(link);
        execute(stream);
        msg.channel.send('Now playing '+link);
        return;
    }else{
        msg.channel.send('Çalınacak parça kalmadı.');       
    }
    return;
}