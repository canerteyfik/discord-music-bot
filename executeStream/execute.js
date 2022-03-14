const{createAudioPlayer, NoSubscriberBehavior, createAudioResource}=require('@discordjs/voice');

exports.execute= function execute(stream){
    if(stream===undefined){
        return;
    }
    try{
        const resource =  createAudioResource(stream, {
            inlineVolume: true,
        });
        resource.volume.setVolume(0.5);
        connection.subscribe(player);
        player.play(resource);
        return;
    }catch(err){
        console.log(err);
    }
}