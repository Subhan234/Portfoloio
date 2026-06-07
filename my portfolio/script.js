const text = [
  "Frontend Web Developer",
  "Social Media Marketer",
  "Tech Community Leader",
  "Content Strategist",
  "Public Speaker"
];

let i = 0, j = 0;

/* ================= TYPING EFFECT ================= */

function typing(){
  const element = document.getElementById("typing");
  if(!element) return;

  element.innerHTML = "";

  function type(){
    if(j < text[i].length){
      element.innerHTML += text[i][j];
      j++;
      setTimeout(type, 80);
    } else {
      setTimeout(() => {
        j = 0;
        i = (i + 1) % text.length;
        typing();
      }, 1500);
    }
  }

  type();
}

typing();

document.addEventListener("DOMContentLoaded", () => {

const chatbot = document.querySelector(".chatbot-container");
const toggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

/* OPEN CHATBOT */
toggler.addEventListener("click", () => {
  chatbot.style.display = "flex";
});

/* CLOSE CHATBOT */
closeBtn.addEventListener("click", () => {
  chatbot.style.display = "none";
});

/* AI RESPONSE SYSTEM */
function getReply(msg){

  msg = msg.toLowerCase();

  if(msg.includes("skill")){
    return "HTML, CSS, JavaScript, Frontend Development, Prompt Engineering, Leadership, Marketing.";
  }

  if(msg.includes("project")){
    return "AI Chatbot, Portfolio Website, Movie App, LMS, Calculator, Currency Converter.";
  }

  if(msg.includes("experience")){
    return "DSC Co-Lead, Frontend Developer, Podcast Host, Social Media Lead.";
  }

  if(msg.includes("contact")){
    return "Email: m.subhan18018@gmail.com | WhatsApp: 0328-8105055";
  }

  if(msg.includes("about")){
    return "I am Subhan, a Frontend Developer focused on UI/UX, web development and leadership.";
  }

  return "I can help you with Skills, Projects, Experience, About and Contact.";
}

/* SEND MESSAGE */
function sendMessage(){

  const text = userInput.value.trim();
  if(text === "") return;

  chatBox.innerHTML += `<div class="user-message">${text}</div>`;

  const reply = getReply(text);

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot-message">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") sendMessage();
});

});