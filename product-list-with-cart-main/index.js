const container = document.querySelector(".dessert__products");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const div = document.createElement("div");
      let counter = 1;
      div.classList.add("dessert__products--product");
      div.innerHTML = `
                    <div class="dessert__product--img-container">
                        <img
                            src="${item.image.mobile}"
                            alt="${item.name}"
                            class="dessert__product--img"
                        />
                        <button type="button" class="dessert__product--btn">
                            <img src="./assets/images/icon-add-to-cart.svg" alt="Cart" />Add
                            to cart
                        </button>
                        <button class="quanty">
                          <img
                            src="./assets/images/icon-decrement-quantity.svg"
                            alt="icon-decrement-quantity"
                            class="decrement"
                          />
                          <span>${counter}</span>
                          <img
                            src="./assets/images/icon-increment-quantity.svg"
                            alt="icon-increment-quantity"
                            class="increment"
                          />
                        </button>
                        
                    </div>
                    <div class="dessert__product--info">
                        <h2 class="dessert__product--title">${item.category}</h2>
                        <p class="dessert__product--description">
                            ${item.name}
                        </p>
                        <span class="dessert__price">$${item.price}</span>
                    </div>
                
            `;
      container.appendChild(div);

      const btn = div.querySelector(".dessert__product--btn");
      const quanty = div.querySelector(".quanty");
      const decrement = quanty.querySelector(".decrement");
      const increment = quanty.querySelector(".increment");
      btn.addEventListener("click", () => {
        console.log(decrement);
        console.log(`${item.name} added to cart`);
        console.log(quanty);
        btn.style.opacity = "0";
        btn.style.transition = "opacity 0.5s ease-in-out";
        quanty.style.opacity = "1";
        quanty.style.zIndex = "1";
        cart(item.name);
      });

      decrement.addEventListener("click", () => {
        console.log("decrement", counter);
        if (counter > 1) {
          counter--;
          quanty.querySelector("span").textContent = counter;
        }
      });

      increment.addEventListener("click", () => {
        console.log("increment", counter);
        counter++;
        quanty.querySelector("span").textContent = counter;
      });
    });
  });

const cart = (nombre) => {
  console.log(`${nombre} added to cart`);
};
