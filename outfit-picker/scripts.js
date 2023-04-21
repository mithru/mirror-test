const itemCount = {
    hat: 8,
    sunglasses: 5,
    tshirts: 5,
    pants: 5,
    shoes: 5
};

const currentItem = {
    hat: 0,
    sunglasses: 0,
    tshirts: 0,
    pants: 0,
    shoes: 0
};

function changeItem(category, direction) {

  const oldIndex = currentItem[category];
  let newIndex = oldIndex + direction + itemCount[category];

  newIndex %= itemCount[category]

  currentItem[category] = newIndex;

  const container = document.querySelector(`#${category}`);

  let oldItem = container.querySelector('.active');
  oldItem.classList.remove("active");
  // oldItem.classList.add(direction > 0 ? "slide-left" : "slide-right");
  for (const child of container.children) {
    if (child.tagName === 'IMG') {
      child.className = "";

      // console.log(child);
    }
  }


  let newItem = container.querySelector(`img:nth-child(${newIndex+1})`)
  // newItem.classList.remove(direction > 0 ? "slide-right" : "slide-left");
  newItem.classList.add("active");


    // const oldImage = container.querySelector(`img:nth-child(${oldIndex+1})`);
    // const newImage = container.querySelector(`img:nth-child(${newIndex+1})`);


    console.log(currentItem[category]);
    // oldImage.classList.remove("active");
    // oldImage.classList.add(direction > 0 ? "slide-left" : "slide-right");
    //
    // newImage.classList.remove(direction > 0 ? "slide-right" : "slide-left");
    // newImage.classList.add("active");

}

function setActiveCategory(category) {
    const container = document.querySelector(`#${category}`);

    let leftArrow = container.querySelector(".arrow.left");
    let rightArrow = container.querySelector(".arrow.right");

    leftArrow.onclick = () => changeItem(category, -1);
    rightArrow.onclick = () => changeItem(category, 1);
    console.log(category);
}
