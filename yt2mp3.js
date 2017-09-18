var ytdl = require('ytdl-core');        // https://github.com/fent/node-ytdl-core
var ffmpeg = require('fluent-ffmpeg');  // https://github.com/fluent-ffmpeg/node-fluent-ffmpeg

ffmpeg(ytdl('https://www.youtube.com/watch?v=fRh_vgS2dFE'))
    .save('music.mp3');