module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100085303477541","100001212940148") {
    var aid = ["100085303477541","100001212940148"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wo Busy Hai Apni Gf Ke Saath Mujhe Batao Kya Kaam hai", "Kya Hua Boss ko q Bula Rhe Ho?", "Wo Shayad Busy hoga", "Raj to offline ho gaya😝"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }