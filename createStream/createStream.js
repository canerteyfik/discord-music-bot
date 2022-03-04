const ytdl = require('ytdl-core');

exports.createStream = async function createStream(linkVideo) {
    let stream = await ytdl(linkVideo, {
        filter: 'audioonly',
        quality: 'highestaudio',

    });
    return stream;
}