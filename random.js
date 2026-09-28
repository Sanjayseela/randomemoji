const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


async function getEmoji() { 
  try {

     console.log("1. Button clicked");

    const response = await fetch(
      "https://randomapi.dev/api/emoji"
    );

     console.log("2. Response:", response);
     console.log("3. Status:", response.status);

    const result = await response.json();

    console.log("4. API result:", result);

   const emojis = result.data;

   console.log("5. Emojis:", emojis);

  const randomNum =  Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomNum];

   console.log("6. Random emoji:", randomEmoji);


  btnEl.innerText = randomEmoji.emoji;
  emojiNameEl.innerText = randomEmoji.name;
  

}catch(error){

   console.error("error:", error);
 }
}

btnEl.addEventListener("click", getEmoji);
  