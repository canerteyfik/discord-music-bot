const {executeList}=require('../executeStream/executeList.js');

exports.skip= function skip(isConnected,msg,linkList){
    const currentChannel = msg.member.voice.channel;
    if(!isConnected){
        msg.reply('Geçerli bir ses bağlantısı yok.');
        return;
    }
    if (!(currentChannel.id === connection.joinConfig.channelId)) {
        msg.reply('Bot ile aynı kanalda değilsiniz');
        return;
    }
    executeList(msg,linkList);
    return;
}