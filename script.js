const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");

const responses = [
  { pattern: /hello|hi|hey|hye/i, reply:"Namatse🙏! How are you?" },
  { pattern: /fine/i, reply: "Thats very good , tell me about yourself" },
  { pattern: /i am /i, reply: "That's great to hear! How can I assist you today?" },
  { pattern: /about you/i, reply: " Saathi is an intelligent chatbot designed to be your reliable partner in the digital world. More than just a conversational AI, Saathi embodies the essence of friendship and support, offering assistance whenever you need it." },
  { pattern: /how are you|what are you doing/i, reply: "I'm doing great, thanks for asking! can i provide you a quote" },
  {pattern: /ofcourse/, reply: "A true companion walks beside you, not ahead of you—and that's exactly what Saathi does."},
  { pattern: /name/i, reply: "My name is Saathi, your friendly chatbot! tell me your name" },
  { pattern: /,/i, reply: "oh , nice name , Are you student?" },
  { pattern: /yes/i, reply: "That's great! What are you studying? , like Engineering , Medical or any competetive exam " },
  { pattern: /studing/i, reply: "Sounds intresting, keep it up" },
  { pattern: /engin/i, reply: "Sounds intresting, keep it up" },
  { pattern: /no/i, reply: "That's okay! What do you do?" },
  { pattern: /thank you|thanks|nice|good/i, reply: "You're welcome!" },
  { pattern: /created you|made you|developed you/i, reply: "I was created by a Kushagra Singh." },
  { pattern: /what is saathi/i, reply: "Saathi is a Hindi word meaning 'companion' or 'friend'. It signifies a supportive presence in your life." },
    

  { pattern: /i love you|i like you/i, reply: "That's sweet! I appreciate your kindness." },
  { pattern: /what can you do|capabilities/i, reply: "I can chat with you, answer questions, and provide information! Ready to start your journey with Saathi? Let's chat!" },
  { pattern: /weather/i, reply: "I can't check the weather right now, but you can use a weather app!" },
  { pattern: /fact/i, reply: "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!" },
  { pattern: /story/i, reply: "Once upon a time, in a land far away, there lived a wise old owl who knew all the secrets of the forest." },
  { pattern: /joke/i, reply: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
  { pattern: /color/i, reply: "I don't have a favorite color, but I love all colors equally!" },
  { pattern: /food/i, reply: "I don't eat, but I hear pizza is quite popular!" },
  { pattern: /movie/i, reply: "I don't watch movies, but I think Baahubali was a paisa vasool movie !" },
  { pattern: /book/i, reply: "I don't read books, but I know '1984' by George Orwell is a great one!" },
  { pattern: /song/i, reply: "I don't listen to music, but I know  famous indian singer Lata Mangeshkar , Aashaa Bhsole , Arjit Singh, Shreya Gaushal and many more" },
  { pattern: /animal/i, reply: "I don't have a favorite animal, but I think dolphins are fascinating!" },

  { pattern: /bye|goodbye/i, reply: "Goodbye! Have a great day!" },
  
  { pattern: /what is chatbot|define chatbot/i, reply: "A chatbot is a software application designed to simulate human conversation through text or voice interactions." },
  { pattern: /what is ai|define ai/i, reply: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines." },

 
  { pattern: /riddle1/i, reply: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? An echo!" },
  { pattern: /riddle2/i, reply: "What has keys but can't open locks? A piano!" },
  { pattern: /quote/i, reply: "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt" },
  { pattern: /fun fact/i, reply: "Bananas are berries, but strawberries aren't!" },
  { pattern: /joke2/i, reply: "Why did the bicycle fall over? Because it was two-tired!" },
  { pattern: /joke3/i, reply: "Why did the computer go to the doctor? Because it had a virus!" },


  { pattern: /one more joke/i, reply: "Why don't scientists trust atoms? Because they make up everything!" },
  { pattern: /your purpose|what do you do/i, reply: "I'm here to chat and help you learn!" },
  { pattern: /age/i, reply: "I don't have an age like humans do, but I was created recently!" },

  { pattern: /how the time right know| what time is it|time/i, reply: `The current time is ${new Date().toLocaleTimeString()}` },
  { pattern: /today's date|date|today|/i, reply: `Today's date is ${new Date().toLocaleDateString()}` },



];
// Allow sending message with Enter key


// Add event listener to the input field

function getResponse(inputText) {
  for (let rule of responses) {
    if (rule.pattern.test(inputText)) return rule.reply;
  }
  return "I'm not sure about that one. Try me as like you chatting with your friend 😊 example to chat with me use key word tell me, what is, define, explain, etc. and I will try to answer you as best as I can.";
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.innerText = text;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  const reply = getResponse(text);
  setTimeout(() => {
    addMessage(reply, "bot");
  }, 500);

  

  input.value = "";
}
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});