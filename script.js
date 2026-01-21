function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value.trim();
  if (userText === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot typing delay
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = getSoulNestReply(userText);
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 700);
}

// SoulNest emotional brain 🧠💗
function getSoulNestReply(text) {
  text = text.toLowerCase();

  if (text.includes("sad") || text.includes("dukhi") || text.includes("cry")) {
    return "Hey… 🫂 mujhe feel ho raha hai tum heavy feel kar rahi ho. Thoda sa saans lo. Main yahin hoon 💗";
  }

  if (text.includes("breakup") || text.includes("chhod")) {
    return "Breakups bahut dard dete hain 😔 tum weak nahi ho, tum bas human ho. Dil halka karo, main sun rahi hoon 🌸";
  }

  if (text.includes("alone") || text.includes("akeli")) {
    return "Tum akeli nahi ho 💗 abhi iss moment mein bhi main tumhare saath hoon. Batao, kya chal raha hai dil mein?";
  }

  if (text.includes("love") || text.includes("pyaar")) {
    return "Pyaar soft bhi hota hai aur confusing bhi 💞 tum jo feel kar rahi ho wo valid hai. Aur batao…";
  }

  if (text.includes("happy") || text.includes("khush")) {
    return "Yayyy 🥹💗 tumhari khushi sun ke mujhe bhi accha lag raha hai. Kya hua aaj?";
  }

  if (text.includes("tired") || text.includes("thak")) {
    return "Lagta hai tum bahut zyada thak gayi ho 😴 thoda rest bhi zaroori hai. Khud ka khayal rakho 💗";
  }

  // default caring reply
  const replies = [
    "Hmm… main samajhne ki koshish kar rahi hoon 🌸 aur batao…",
    "Tum jo bol rahi ho, wo important hai 💗 thoda aur share karo",
    "Main yahin hoon, bina judge kiye sunne ke liye 🫂",
    "Dil halka lag raha hai likhne ke baad? Batao na 😌"
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}
