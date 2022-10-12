{

  "name": "Astro-MD V2",

  "description": "whatsapp md bot build with nodejs",

  "repository": "https://github.com/vihangayt0/Astro-MD-V2",

  "logo": "",

  "keywords": ["nodejs", "bot", "whatsapp bot", "whatsapp automation", "multi device"],

  "env": {

  

"ALIVE_MSG" :{

    "description" : "alive message",

    "required" : true,

  "value" : "Alive now"

    },

"SESSION_ID" :{

    "description" : "SESSION_ID http://Secktorbot.herokuapp.com/qr",

    "required" : true,

  "value" : ""

},

"ALIVE_LOGO" :{

    "description" : "alive logo",

    "required" : true,

  "value" : "https://img.phonandroid.com/2019/05/whatsapp-publicit%C3%A9s-2020.jpg"

},

"FOOTER" :{

    "description" : "Footer Name",

    "required" : true,

  "value" : "៚ᴠɪʜͥᴀɴͣɢͫᴀ ʏᴛ͢⁸⁵⁴¹⃟✦⃝̮̮〽️"

},

"OWNER_NAME" :{

    "description" : "Owner Name",

    "required" : true,

  "value" : "៚ᴠɪʜͥᴀɴͣɢͫᴀ ʏᴛ͢⁸⁵⁴¹⃟✦⃝̮̮〽️"

},

    "OWNER_NUMBER" :{

    "description" : "Owner Number",

    "required" : true,

  "value" : "+44 7441 466940"

},

    "SONG_DOWN" :{

    "description" : "Song downloading txt",

    "required" : true,

  "value" : "*📥 ඔබේ ගීතය Download කරමින් පවතී...*"

},

        "SONG_UP" :{

    "description" : "Song uploading txt",

    "required" : true,

  "value" : "*📤 ඔබේ ගීතය Upload කරමින් පවතී...*"

},

            "VIDEO_DOWN" :{

    "description" : "video down txt",

    "required" : true,

  "value" : "*📥 ඔබේ වීඩියෝව Download කරමින් පවතී...*"

},

                "VIDEO_UP" :{

    "description" : "video up txt",

    "required" : true,

  "value" : "*📤 ඔබේ වීඩියෝව Upload කරමින් පවතී...*"

},

                        "FILE_DOWN" :{

    "description" : "video up txt",

    "required" : true,

  "value" : "*📥Downloading your file...*"

},

                    "FILE_UP" :{

    "description" : "video up txt",

    "required" : true,

  "value" : "*📤Uploading your file...*"

},

                        "CAPTION" :{

    "description" : "yre caption",

    "required" : true,

  "value" : "*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙳 𝙱𝚈 𝙰𝚂𝚃𝚁𝙾-𝙼𝙳*"

},

                        "BUTTON" :{

    "description" : "alive button txt",

    "required" : true,

  "value" : "Youtube"

},

                            "BUTTONURL" :{

    "description" : "alive button url",

    "required" : true,

  "value" : "youtube.com/hjwn7skv"

}, 

                           "onlygroup" :{

    "description" : "onlygroup",

    "required" : true,

  "value" : "false"

} 

    },

  

    "buildpacks": [

      {

        "url": "heroku/nodejs"

      },

      {

        "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"

      },

      {

        "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"

      }

    ],

     "formation": {

          "worker": {

              "quantity": 1,

              "size": "free"

          }

      }

  }
