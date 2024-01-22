const url = "https://icanhazdadjoke.com/sssss";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json", "User-Agent": "learning app" },
    });
    if (!response.ok) {
      throw new Error("wrong URL");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "Error, no dad joke...";
  }
};

fetchDadJoke();
