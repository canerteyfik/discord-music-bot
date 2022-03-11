const ytdl = require('ytdl-core');

exports.createStream = async function createStream(linkVideo) {
    try {
        let stream = await ytdl(linkVideo, {
            filter: 'audioonly',
            quality: 'highestaudio',
    
        });
        return stream;
    } catch (e) {
        console.log(e);
        console.log("create stream error");
    }
    return undefined;
}