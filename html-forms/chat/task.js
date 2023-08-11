const widgetChat = document.querySelector(".chat-widget");
widgetChat.addEventListener('click', () => {
  widgetChat.classList.add("chat-widget_active");
});

const input = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
let robotMessages = [
	"У нас обед",
	"Эта касса не работает!",
	"Ну и не надо",
	"А вы вообще кто?",
	"Фу на вас",
	"Бла-бла-бла",
	"Не пишите нам больше",
];

input.addEventListener('keydown', (event) => {
    if ((input.value.length > 0) && (event.key === "Enter")) {

      let time = new Date();
      const robotMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
      const messages = document.querySelector(".chat-widget__messages");

      messages.innerHTML += `
         <div class="message message_client">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">${input.value}</div>
         </div>
      `;
      messages.innerHTML += `
         <div class="message">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">${robotMessage}</div>
         </div>
      `;
     input.value = "";
  };
});