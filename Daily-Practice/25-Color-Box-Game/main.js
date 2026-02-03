let failMessages = [
  "Your brain is currently 'undefined'. Please install a personality. 🧠🚫",
  "Your ego just exceeded its maximum capacity. 🤮✨",
  "Your vision is not defined. Are you even awake? 😴❌",
  "Expected a competent player, found a potato instead. 🥔🤡",
  "Success not found. Please reboot your eyes. 👁️💨",
  "I’m not broken, you’re just remarkably bad at this. 📉🔥",
  "You’re leaking brain cells at an alarming rate. 💧🥴",
  "Your eyes and brain have a high-latency connection. 🐢📡",
  "Even the CPU is disappointed in your performance. 🖥️💔",
  "Your gaming skills are outdated and no longer supported. 👴🚮",
  "Your perception just crashed into a brick wall. 🧱🚑",
  "Skill not found in directory 'user/brain'. 📂💨",
  "Attempting to delete your last three moves... they were painful. 🚮🚮",
  "You’re clearly relying on luck you don’t have. 🍀🚫",
  "Too much stupidity for one screen to handle. 🌊🤯",
  "Scanning error... perception offline. 🤖💤",
  "I've seen dial-up modems with faster reaction times. 📞🐌",
  "Are you clicking with your eyes closed or just born this way? 🙈",
  "My GPU is literally laughing at your lack of coordination. 🖥️😂",
  "Your color-matching skills are a crime against humanity. 🚔⚖️",
  "I'd call you a 'noob' but that’s an insult to beginners. 👶🔥",
  "I'm a teapot, and even I have better vision than you. 🫖☕",
  "Input rejected: Please try using your brain instead of your forehead. 🔨🧠",
  "System Notice: User is malfunctioning. Please replace user. ⚙️👤",
  "Your click-rate is fine, but your accuracy is a dumpster fire. 🗑️🔥",
  "If failure were a sport, you'd be an Olympic gold medalist. 🥇🤡",
  "That click was so bad it actually corrupted my database. 💾💥",
  "I’m not a doctor, but I think you’re legally colorblind. 🩺🌈",
  "Even a blind pigeon finds a seed once in a while. You? Not so much. 🐦❌",
  "Is your monitor off, or is it just the lights upstairs? 💡🌑",
  "You play like you're trying to lose. Respect the commitment. 🫡📉",
  "Your ancestors are watching you fail this simple task. 👻🫠",
  "Maybe try a game with bigger boxes... like 'Exit to Desktop'. 🖥️🚪",
  "I’ve calculated 14 million futures, and you fail in all of them. ⏳🌌",
  "This game is easy. The problem is definitely sitting in your chair. 🪑🤡",
  "Your perception is about as sharp as a bowling ball. 🎳🌑",
  "Please stop. The server is getting embarrassed for you. 😳💻",
  "Do you need a tutorial on how to use a mouse? 🖱️❓",
  "Even Internet Explorer is faster at processing colors than you. 🌐🐢",
  "I’m updating my Privacy Policy to exclude your embarrassing stats. 📋🔏",
  "Attempting to access intelligence... Result: NULL. 🅾️",
  "Your brain has left the chat. 🔌🧠",
  "You do not have 'Admin' rights to succeed. 🔑🚫",
  "You’re a walking disaster. 🌪️😵",
  "Too many consecutive failures. 🛑🚧",
  "A cosmic ray hit your brain and caused that terrible move. 🌠🌀",
  "The system is dying from your lack of skill. 🧪🤢",
  "ou’re trying to play, but you simply can't. 🧮❌",
  "I’m out of patience and you’re out of talent. 🪫💀",
  "Skill gap detected. It’s a canyon. 🏔️⚠️"
];

let colors = [
  "#00F0FF", "#00FF00", "#FF00FF", "#4B0082", "#0000FF", 
  "#7FFF00", "#008080", "#EE82EE", "#1E90FF", "#00FA9A",
  "#8B008B", "#40E0D0", "#4169E1", "#50C878", "#FF69B4",
  "#15317E", "#0047AB", "#007BA7", "#2554C7", "#DA70D6",
  "#BF00FF", "#7FFFD4", "#2B65EC", "#191970", "#00CF35",
  "#00BFFF", "#00FF7F", "#16E2F5", "#50C878", "#007FFF"
];

let mediumColors = [
  "#1E90FF", "#1C86EE", "#1874CD", // Blues
  "#32CD32", "#2EBC2E", "#2AA72A", // Greens
  "#FF4500", "#E63E00", "#CC3700", // Reds
  "#9370DB", "#8565C5", "#775AAF", // Purples
  "#FFD700", "#E6C200", "#CCAC00", // Golds
  "#FF1493", "#E61284", "#CC1076", // Pinks
  "#00CED1", "#00B9BC", "#00A4A6", // Teals
  "#7FFF00", "#72E600", "#66CC00", // Limes
  "#8B4513", "#7D3E11", "#6F370F", // Browns
  "#4682B4", "#3F75A2", "#386890"  // Slate Blues
];

let hardColors = [
  "#0000FF", "#0000FD", "#0101FF", // Pure Blue
  "#00FF00", "#00FD00", "#01FF01", // Pure Green
  "#FF0000", "#FD0000", "#FF0101", // Pure Red
  "#00FFFF", "#00FDFD", "#01FFFF", // Cyan
  "#FF00FF", "#FD00FD", "#FF01FF", // Magenta
  "#FFFF00", "#FDFD00", "#FFFF01", // Yellow
  "#800080", "#7E007E", "#800180", // Purple
  "#008080", "#007E7E", "#018080", // Teal
  "#808080", "#7E7E7E", "#818181", // Gray
  "#FF69B4", "#FF67B2", "#FD69B4"  // Hot Pink
];

let boxesContainer = document.getElementById('box-container');
let headerBox = document.getElementById('header-box');
let scoreDisplay = document.getElementById('score-display');
let tryAgain = document.getElementsByClassName("try-again");
let counter = 0;

  reset();

function headerBoxColor(){
  let randomColor = Math.floor(Math.random() * colors.length);
          headerBox.style.backgroundColor = colors[randomColor];
}  

  function reset(){

    for (var i = 0; i <= 28; i++){
        boxesContainer.innerText = "";
        headerBoxColor();
        var boxes = document.createElement('div');
        boxes.className = 'game-box';
        var randomColor = Math.floor(Math.random() * colors.length);
        boxesContainer.appendChild(boxes);
        boxes.style.backgroundColor = colors[randomColor];
    }
  }

  boxesContainer.addEventListener("click", colorPicker);

  function colorPicker(boxes){
    if(boxes.target.style.backgroundColor === headerBox.style.backgroundColor){
        scoreDisplay.innerText = counter++;
    }else{
      reset();
      tryAgain[0].id = 'try-again';
      var randomMessage = Math.floor(Math.random() * failMessages.length);
      tryAgain[0].innerText = failMessages[randomMessage];
      }
    }