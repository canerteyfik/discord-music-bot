const{createAudioPlayer, NoSubscriberBehavior, createAudioResource}=require('@discordjs/voice');

exports.createPlayer=function createPlayer(){
    const player = createAudioPlayer({
        behaviors: {
            noSubscriber: NoSubscriberBehavior.Pause,
            
        }
    });
    return player;
}