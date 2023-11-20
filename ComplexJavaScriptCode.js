/* 
   Filename: ComplexJavaScriptCode.js
   Content: Complex JavaScript code demonstrating creative and sophisticated functionality
*/

// Define a class for creating a custom carousel component
class Carousel {
  constructor(containerId, items) {
    this.containerId = containerId;
    this.items = items;
    this.currentIndex = 0;
  }

  render() {
    const container = document.getElementById(this.containerId);
    container.innerHTML = "";

    // Create navigation buttons
    const prevButton = document.createElement("button");
    prevButton.innerText = "<";
    prevButton.addEventListener("click", () => this.moveCarousel(-1));

    const nextButton = document.createElement("button");
    nextButton.innerText = ">";
    nextButton.addEventListener("click", () => this.moveCarousel(1));

    container.appendChild(prevButton);

    // Create item list
    const itemList = document.createElement("ul");
    itemList.classList.add("carousel-list");

    this.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerText = item;
      itemList.appendChild(listItem);
    });

    itemList.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    container.appendChild(itemList);
    container.appendChild(nextButton);
  }

  moveCarousel(direction) {
    const itemList = document.querySelector(`#${this.containerId} .carousel-list`);
    const itemsCount = this.items.length;
    const listItemWidth = 100 / itemsCount;
    const translateAmount = listItemWidth * direction;

    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = itemsCount - 1;
    } else if (this.currentIndex >= itemsCount) {
      this.currentIndex = 0;
    }

    itemList.style.transform = `translateX(-${this.currentIndex * listItemWidth}%)`;
  }
}

// Usage example
const carouselItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const carousel = new Carousel("carousel-container", carouselItems);
carousel.render();