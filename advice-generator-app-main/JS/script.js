const iconDice = document.getElementById("iconDice");
const adviceIdSpan = document.getElementById("advice__id");
const adviceIdAdvice = document.getElementById("advice__advice");

const fetchData = async () => {
  const url = "https://api.adviceslip.com/advice";
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Hubo un error");
    }
    let data = await response.json();
    const { id, advice } = data.slip;

    adviceIdSpan.textContent = `Advice #${id}`;
    adviceIdAdvice.textContent = advice;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

iconDice.addEventListener("click", fetchData);
