const sq = document.querySelectorAll(".square:nth-of-type(n)");
const submit = document.querySelector("#down button");
const recipes = document.querySelector("#recipes");
const filters = document.querySelector("#filters");
const name_div = document.querySelector("#name");
let name = document.querySelector("input");
const save = document.querySelector("#name button");
let saved_users = [];
let k = parseInt(localStorage.getItem("k")) || -1;
let c = [0, 0, 0, 0, 0];
let ct = [0, 0, 0, 0, 0];
let dr = [0, 0, 0, 0, 0];
let i = 0;

let Lemon_Garlic_Rosemary_Chicken = [0, 0, 0, 0, 0, 0, 0];
let Garlic_Rosemary_Lemon_Chicken_Skewers = [0, 0, 0, 0, 0, 0];
let Chicken_Pasta = [0, 0, 0, 0, 0];

let Spinach_and_Feta_Omelette = [0, 0, 0, 0, 0, 0, 0];
let Mediterranean_Spinach_Salad = [0, 0, 0, 0, 0, 0, 0];
let SpinachFeta_Stuffed_Tomatoes = [0, 0, 0, 0, 0, 0, 0, 0];

let Beef_Chili = [0, 0, 0, 0, 0, 0, 0, 0];
let Stuffed_Bell_Peppers = [0, 0, 0, 0, 0, 0, 0, 0];
let Beef_and_Tomato_Skillet = [0, 0, 0, 0, 0, 0, 0];

let r = [0, 0, 0, 0, 0, 0, 0, 0, 0];

save.addEventListener("click", () => {
  if (name.value === "") {
    let nm = document.createElement("p");
    nm.appendChild(document.createTextNode("please enter a name"));
    name_div.appendChild(nm);
    console.log("hii");
  } else {
    k = k + 1;

    saved_users[k] = {
      name: name.value,
    };

    localStorage.setItem("k", JSON.stringify(k));
  }
});

sq[0].addEventListener(
  "click",
  (e) => {
    sq[0].classList.add("border");

    Spinach_and_Feta_Omelette[0] = 1;
    Mediterranean_Spinach_Salad[0] = 1;
    SpinachFeta_Stuffed_Tomatoes[0] = 1;
  },
  { once: true }
);

sq[1].addEventListener(
  "click",
  (e) => {
    sq[1].classList.add("border");

    Spinach_and_Feta_Omelette[1] = 1;
    Mediterranean_Spinach_Salad[1] = 1;
    SpinachFeta_Stuffed_Tomatoes[1] = 1;
  },
  { once: true }
);

sq[2].addEventListener(
  "click",
  (e) => {
    sq[2].classList.add("border");

    Spinach_and_Feta_Omelette[2] = 1;
    SpinachFeta_Stuffed_Tomatoes[2] = 1;
  },
  { once: true }
);

sq[3].addEventListener(
  "click",
  (e) => {
    sq[3].classList.add("border");

    Mediterranean_Spinach_Salad[2] = 1;
    SpinachFeta_Stuffed_Tomatoes[3] = 1;

    Beef_Chili[3] = 1;
    Stuffed_Bell_Peppers[3] = 1;
    Beef_and_Tomato_Skillet[3] = 1;
  },
  { once: true }
);

sq[4].addEventListener(
  "click",
  (e) => {
    sq[4].classList.add("border");

    Spinach_and_Feta_Omelette[3] = 1;
    Mediterranean_Spinach_Salad[3] = 1;
    SpinachFeta_Stuffed_Tomatoes[4] = 1;

    Beef_Chili[1] = 1;
    Stuffed_Bell_Peppers[1] = 1;
    Beef_and_Tomato_Skillet[1] = 1;
  },
  { once: true }
);

sq[5].addEventListener(
  "click",
  (e) => {
    sq[5].classList.add("border");

    Lemon_Garlic_Rosemary_Chicken[2] = 1;
    Garlic_Rosemary_Lemon_Chicken_Skewers[2] = 1;
    Chicken_Pasta[2] = 1;

    Spinach_and_Feta_Omelette[4] = 1;
    Mediterranean_Spinach_Salad[4] = 1;
    SpinachFeta_Stuffed_Tomatoes[5] = 1;
  },
  { once: true }
);

sq[6].addEventListener(
  "click",
  (e) => {
    sq[6].classList.add("border");

    Lemon_Garlic_Rosemary_Chicken[5] = 1;
    Garlic_Rosemary_Lemon_Chicken_Skewers[5] = 1;
    Chicken_Pasta[3] = 1;

    Spinach_and_Feta_Omelette[5] = 1;
    Mediterranean_Spinach_Salad[5] = 1;
    SpinachFeta_Stuffed_Tomatoes[6] = 1;

    Beef_Chili[6] = 1;
    Stuffed_Bell_Peppers[6] = 1;
    Beef_and_Tomato_Skillet[5] = 1;
  },
  { once: true }
);

sq[7].addEventListener(
  "click",
  (e) => {
    sq[7].classList.add("border");

    Lemon_Garlic_Rosemary_Chicken[6] = 1;
    Chicken_Pasta[4] = 1;

    Spinach_and_Feta_Omelette[6] = 1;
    Mediterranean_Spinach_Salad[6] = 1;
    SpinachFeta_Stuffed_Tomatoes[7] = 1;

    Beef_Chili[7] = 1;
    Stuffed_Bell_Peppers[7] = 1;
    Beef_and_Tomato_Skillet[6] = 1;
  },
  { once: true }
);

sq[8].addEventListener(
  "click",
  (e) => {
    sq[8].classList.add("border");

    Beef_Chili[0] = 1;
    Stuffed_Bell_Peppers[0] = 1;
    Beef_and_Tomato_Skillet[0] = 1;
  },
  { once: true }
);

sq[9].addEventListener(
  "click",
  (e) => {
    sq[9].classList.add("border");

    Lemon_Garlic_Rosemary_Chicken[0] = 1;
    Garlic_Rosemary_Lemon_Chicken_Skewers[0] = 1;
    Chicken_Pasta[0] = 1;
  },
  { once: true }
);

sq[10].addEventListener(
  "click",
  (e) => {
    sq[10].classList.add("border");

    Lemon_Garlic_Rosemary_Chicken[1] = 1;
    Garlic_Rosemary_Lemon_Chicken_Skewers[1] = 1;
    Chicken_Pasta[1] = 1;

    Beef_Chili[2] = 1;
    Stuffed_Bell_Peppers[2] = 1;
    Beef_and_Tomato_Skillet[2] = 1;
  },
  { once: true }
);

sq[11].addEventListener(
  "click",
  (e) => {
    sq[11].classList.add("border");

    Lemon_Garlic_Rosemary_Chicken[3] = 1;
    Garlic_Rosemary_Lemon_Chicken_Skewers[3] = 1;
  },
  { once: true }
);

sq[12].addEventListener(
  "click",
  (e) => {
    sq[12].classList.add("border");

    Lemon_Garlic_Rosemary_Chicken[4] = 1;
    Garlic_Rosemary_Lemon_Chicken_Skewers[4] = 1;
  },
  { once: true }
);

sq[13].addEventListener(
  "click",
  (e) => {
    sq[13].classList.add("border");

    Beef_Chili[4] = 1;
    Stuffed_Bell_Peppers[4] = 1;
    Beef_and_Tomato_Skillet[4] = 1;
  },
  { once: true }
);

sq[14].addEventListener(
  "click",
  (e) => {
    sq[14].classList.add("border");

    Beef_Chili[5] = 1;
    Stuffed_Bell_Peppers[5] = 1;
  },
  { once: true }
);

let fh = document.createElement("h1");
fh.appendChild(document.createTextNode("WANNA FILTER THE RECIPES?"));
filters.appendChild(fh);

let cuisines = ["AMERICAN", "MEDITERRANEAN", "ITALIAN", "TEX-MEX", "ALL"];

const select1 = document.createElement("select");

const display1 = document.createElement("option");
display1.textContent = "SELECT CUISINE";
display1.value = "";
select1.appendChild(display1);

cuisines.forEach((cuisine) => {
  const opt1 = document.createElement("option");
  opt1.value = cuisine;
  opt1.textContent = cuisine;
  select1.appendChild(opt1);
});

filters.appendChild(select1);
select1.classList.add("filter");

let cooking_time = [
  "10-20 MINS",
  "20-40 MINS",
  "40-60 MINS",
  "60-90 MINS",
  "ALL",
];

const select2 = document.createElement("select");

const display2 = document.createElement("option");
display2.textContent = "SELECT TIME";
display2.value = "";
select2.appendChild(display2);

cooking_time.forEach((time) => {
  const opt2 = document.createElement("option");
  opt2.value = time;
  opt2.textContent = time;
  select2.appendChild(opt2);
});

filters.appendChild(select2);
select2.classList.add("filter");

let dietary_restriction = [
  "GLUTEN-FREE",
  "NUT-FREE",
  "DAIRY-FREE",
  "VEGETARIAN",
  "NONE",
];

const select3 = document.createElement("select");

const display3 = document.createElement("option");
display3.textContent = "SELECT DIET";
display3.value = "";
select3.appendChild(display3);

dietary_restriction.forEach((d) => {
  const opt3 = document.createElement("option");
  opt3.value = d;
  opt3.textContent = d;
  select3.appendChild(opt3);
});

filters.appendChild(select3);
select3.classList.add("filter");

select1.addEventListener("change", () => {
  if (select1.value === "AMERICAN") {
    c[0] = 1;
  } else if (select1.value === "MEDITERRANEAN") {
    c[1] = 1;
  } else if (select1.value === "ITALIAN") {
    c[2] = 1;
  } else if (select1.value === "TEX-MEX") {
    c[3] = 1;
  } else if (select1.value === "ALL") {
    c[4] = 1;
  }
});

select2.addEventListener("change", () => {
  if (select2.value === "10-20 MINS") {
    ct[0] = 1;
  } else if (select2.value === "20-40 MINS") {
    c[1] = 1;
  } else if (select2.value === "40-60 MINS") {
    ct[2] = 1;
  } else if (select2.value === "60-90 MINS") {
    ct[3] = 1;
  } else if (select2.value === "ALL") {
    ct[4] = 1;
  }
});

select3.addEventListener("change", () => {
  if (select3.value === "GLUTEN-FREE") {
    dr[0] = 1;
  } else if (select3.value === "NUT-FREE") {
    dr[1] = 1;
  } else if (select3.value === "DAIRY-FREE") {
    dr[2] = 1;
  } else if (select3.value === "VEGETARIAN") {
    dr[3] = 1;
  } else if (select3.value === "NONE") {
    dr[4] = 1;
  }
});

submit.addEventListener("click", () => {
  for (let i = 0; i < 7; i++) {
    if (Lemon_Garlic_Rosemary_Chicken[i] === 1) {
      r[0] = 1;
    } else {
      r[0] = 0;
      break;
    }
  }

  if (
    r[0] === 1 &&
    (c[1] === 1 || c[4] === 1) &&
    (ct[2] === 1 || ct[4] === 1) &&
    (dr[0] === 1 || dr[1] === 1 || dr[2] === 1 || dr[4] === 1)
  ) {
    let h11 = document.createElement("h1");
    h11.appendChild(document.createTextNode("Lemon Garlic Rosemary Chicken"));
    recipes.appendChild(h11);

    let img1 = new Image();
    img1.src =
      "https://elanaspantry.com/wp-content/uploads/2010/07/Rosemary-Lemon-Chicken.jpg";
    img1.setAttribute("width", "400px");
    img1.setAttribute("height", "400px");
    recipes.appendChild(img1);

    let h12 = document.createElement("h3");
    h12.appendChild(document.createTextNode("COOKING-PROCEEDURE:"));
    recipes.appendChild(h12);

    let p11 = document.createElement("p");
    let p12 = document.createElement("p");
    let p13 = document.createElement("p");
    p11.appendChild(
      document.createTextNode(
        "1. Marinate chicken breasts in a mixture of olive oil, minced garlic, lemon juice, chopped fresh rosemary, salt, and black pepper."
      )
    );
    p12.appendChild(
      document.createTextNode(
        "2. Grill or bake the marinated chicken until fully cooked."
      )
    );
    p13.appendChild(
      document.createTextNode(
        "3. Serve with a lemon wedge and fresh rosemary sprig for garnish."
      )
    );
    recipes.appendChild(p11);
    recipes.appendChild(p12);
    recipes.appendChild(p13);

    let h13 = document.createElement("h3");
    h13.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h13);

    let p14 = document.createElement("p");
    p14.appendChild(
      document.createTextNode(
        "Chicken breast, Garlic, Olive oil, Lemon, Fresh rosemary, Salt, Black pepper"
      )
    );
    recipes.appendChild(p14);

    let s1 = document.createElement("button");
    s1.textContent = "save as favourites";
    recipes.appendChild(s1);
    s1.classList.add("save");

    i = 1;

    s1.addEventListener("click", () => {
      saved_users[k].r1 = { ...recipe.r1 };
    });
  }

  for (let i = 0; i < 6; i++) {
    if (Garlic_Rosemary_Lemon_Chicken_Skewers[i] === 1) {
      r[1] = 1;
    } else {
      r[1] = 0;
      break;
    }
  }

  if (
    r[1] === 1 &&
    (c[1] === 1 || c[4] === 1) &&
    (ct[1] === 1 || ct[4] === 1) &&
    (dr[0] === 1 || dr[1] === 1 || dr[2] === 1 || dr[4] === 1)
  ) {
    let h21 = document.createElement("h1");
    h21.appendChild(
      document.createTextNode("Garlic Rosemary Lemon Chicken Skewers")
    );
    recipes.appendChild(h21);

    let img2 = new Image();
    img2.src =
      "https://thecafesucrefarine.com/wp-content/uploads/2015/07/Lemon-Rosemary-and-Garlic-Chicken-Skewers-2.jpg";
    img2.setAttribute("width", "400px");
    img2.setAttribute("height", "400px");
    recipes.appendChild(img2);

    let h22 = document.createElement("h3");
    h22.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h22);

    let p21 = document.createElement("p");
    let p22 = document.createElement("p");
    let p23 = document.createElement("p");
    let p24 = document.createElement("p");
    let p25 = document.createElement("p");
    p21.appendChild(
      document.createTextNode("1. Cut chicken breasts into cubes.")
    );
    p22.appendChild(
      document.createTextNode(
        "2. Marinate the chicken cubes in olive oil, minced garlic, lemon zest, lemon juice, chopped rosemary, salt."
      )
    );
    p23.appendChild(
      document.createTextNode("3. Thread the marinated chicken onto skewers.")
    );
    p24.appendChild(
      document.createTextNode("4. Grill until the chicken is cooked through.")
    );
    p25.appendChild(
      document.createTextNode(
        "5. Serve with a side of grilled vegetables or a fresh salad."
      )
    );
    recipes.appendChild(p21);
    recipes.appendChild(p22);
    recipes.appendChild(p23);
    recipes.appendChild(p24);
    recipes.appendChild(p25);

    let h23 = document.createElement("h3");
    h23.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h23);

    let p26 = document.createElement("p");
    p26.appendChild(
      document.createTextNode(
        "Chicken breast, Garlic, Olive oil, Lemon, Fresh rosemary, Salt"
      )
    );
    recipes.appendChild(p26);

    let s2 = document.createElement("button");
    s2.textContent = "save as favourites";
    recipes.appendChild(s2);
    s2.classList.add("save");

    i = 1;

    s2.addEventListener("click", () => {
      saved_users[k].r2 = { ...recipe.r2 };
    });
  }

  for (let i = 0; i < 5; i++) {
    if (Chicken_Pasta[i] === 1) {
      r[2] = 1;
    } else {
      r[2] = 0;
      break;
    }
  }

  if (
    r[2] === 1 &&
    (c[2] === 1 || c[4] === 1) &&
    (ct[1] === 1 || ct[4] === 1) &&
    (dr[1] === 1 || dr[4] === 1)
  ) {
    let h31 = document.createElement("h1");
    h31.appendChild(document.createTextNode("Chicken Pasta"));
    recipes.appendChild(h31);

    let img3 = new Image();
    img3.src =
      "https://www.eatingwell.com/thmb/-JicPJo4YOxB3kW6BOsAkahKq9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/one-pot-chicken-pasta-with-cajun-seasonings-efca59b03fe84ebb8495c31b4a3fdada.jpg";
    img3.setAttribute("width", "400px");
    img3.setAttribute("height", "400px");
    recipes.appendChild(img3);

    let h32 = document.createElement("h3");
    h32.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h32);

    let p31 = document.createElement("p");
    let p32 = document.createElement("p");
    let p33 = document.createElement("p");
    let p34 = document.createElement("p");
    p31.appendChild(
      document.createTextNode(
        "1. Cook pasta according to package instructions."
      )
    );
    p32.appendChild(
      document.createTextNode(
        "2. Sauté minced garlic in olive oil until fragrant."
      )
    );
    p33.appendChild(
      document.createTextNode(
        "3. Add cubed chicken breast and cook until done."
      )
    );
    p34.appendChild(
      document.createTextNode(
        "4. Toss the cooked pasta in the chicken mixture and season with salt and black pepper."
      )
    );
    recipes.appendChild(p31);
    recipes.appendChild(p32);
    recipes.appendChild(p33);
    recipes.appendChild(p34);

    let h33 = document.createElement("h3");
    h33.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h33);

    let p35 = document.createElement("p");
    p35.appendChild(
      document.createTextNode(
        "Chicken breast, Garlic, Olive oil, Salt, Black pepper"
      )
    );
    recipes.appendChild(p35);

    let s3 = document.createElement("button");
    s3.textContent = "save as favourites";
    recipes.appendChild(s3);
    s3.classList.add("save");

    i = 1;

    s3.addEventListener("click", () => {
      saved_users[k].r3 = { ...recipe.r3 };
    });
  }

  for (let i = 0; i < 7; i++) {
    if (Spinach_and_Feta_Omelette[i] === 1) {
      r[3] = 1;
    } else {
      r[3] = 0;
      break;
    }
  }

  if (
    r[3] === 1 &&
    (c[1] === 1 || c[4] === 1) &&
    (ct[0] === 1 || ct[4] === 1) &&
    (dr[3] === 1 || dr[1] === 1 || dr[0] === 1 || dr[4] === 1)
  ) {
    let h41 = document.createElement("h1");
    h41.appendChild(document.createTextNode("Spinach and Feta Omelette"));
    recipes.appendChild(h41);

    let img4 = new Image();
    img4.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTie7zA-1mEfvGYo-M8fHAKsb4kLw-r9j5RwQ&s";
    img4.setAttribute("width", "400px");
    img4.setAttribute("height", "400px");
    recipes.appendChild(img4);

    let h42 = document.createElement("h3");
    h42.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h42);

    let p41 = document.createElement("p");
    let p42 = document.createElement("p");
    let p43 = document.createElement("p");
    let p44 = document.createElement("p");
    let p45 = document.createElement("p");
    p41.appendChild(
      document.createTextNode(
        "1. Beat eggs in a bowl and season with salt and black pepper."
      )
    );
    p42.appendChild(
      document.createTextNode(
        "2. Sauté chopped spinach and diced red onion in olive oil until softened."
      )
    );
    p43.appendChild(
      document.createTextNode(
        "3. Pour the beaten eggs over the vegetables and sprinkle crumbled feta cheese on top"
      )
    );
    p44.appendChild(
      document.createTextNode(
        "4. Cook until the eggs are set and fold the omelette in half."
      )
    );
    p45.appendChild(
      document.createTextNode("5. Serve hot with a side of toast.")
    );
    recipes.appendChild(p41);
    recipes.appendChild(p42);
    recipes.appendChild(p43);
    recipes.appendChild(p44);
    recipes.appendChild(p45);

    let h43 = document.createElement("h3");
    h43.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h43);

    let p46 = document.createElement("p");
    p46.appendChild(
      document.createTextNode(
        "Eggs, Spinach, Feta cheese, Onion, Olive oil, Salt, Black pepper"
      )
    );
    recipes.appendChild(p46);

    let s4 = document.createElement("button");
    s4.textContent = "save as favourites";
    recipes.appendChild(s4);
    s4.classList.add("save");

    i = 1;

    s4.addEventListener("click", () => {
      saved_users[k].r4 = { ...recipe.r4 };
    });
  }

  for (let i = 0; i < 7; i++) {
    if (Mediterranean_Spinach_Salad[i] === 1) {
      r[4] = 1;
    } else {
      r[4] = 0;
      break;
    }
  }

  if (
    r[4] === 1 &&
    (c[1] === 1 || c[4] === 1) &&
    (ct[0] === 1 || ct[4] === 1) &&
    (dr[3] === 1 || dr[1] === 1 || dr[0] === 1 || dr[4] === 1)
  ) {
    let h51 = document.createElement("h1");
    h51.appendChild(document.createTextNode("Mediterranean Spinach Salad"));
    recipes.appendChild(h51);

    let img5 = new Image();
    img5.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSq91FO5wN_yus3xHPv8Gpko4gr5tksDjYzw&s";
    img5.setAttribute("width", "400px");
    img5.setAttribute("height", "400px");
    recipes.appendChild(img5);

    let h52 = document.createElement("h3");
    h52.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h52);

    let p51 = document.createElement("p");
    let p52 = document.createElement("p");
    let p53 = document.createElement("p");
    p51.appendChild(
      document.createTextNode(
        "1. In a large bowl, combine fresh spinach leaves, chopped tomatoes and thinly sliced red onion."
      )
    );
    p52.appendChild(
      document.createTextNode(
        "2. Drizzle with olive oil and season with salt and black pepper."
      )
    );
    p53.appendChild(
      document.createTextNode(
        "3. Toss to combine and serve as a light and healthy salad."
      )
    );
    recipes.appendChild(p51);
    recipes.appendChild(p52);
    recipes.appendChild(p53);

    let h53 = document.createElement("h3");
    h53.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h53);

    let p54 = document.createElement("p");
    p54.appendChild(
      document.createTextNode(
        "Eggs, Spinach, Tomatoes, Onion, Olive oil, Salt, Black pepper"
      )
    );
    recipes.appendChild(p54);

    let s5 = document.createElement("button");
    s5.textContent = "save as favourites";
    recipes.appendChild(s5);
    s5.classList.add("save");

    i = 1;

    s5.addEventListener("click", () => {
      saved_users[k].r5 = { ...recipe.r5 };
    });
  }

  for (let i = 0; i < 8; i++) {
    if (SpinachFeta_Stuffed_Tomatoes[i] === 1) {
      r[5] = 1;
    } else {
      r[5] = 0;
      break;
    }
  }

  if (
    r[5] === 1 &&
    (c[1] === 1 || c[4] === 1) &&
    (ct[1] === 1 || ct[4] === 1) &&
    (dr[0] === 1 || dr[1] === 1 || dr[3] === 1 || dr[4] === 1)
  ) {
    let h61 = document.createElement("h1");
    h61.appendChild(document.createTextNode("Spinach Feta Stuffed Tomatoes"));
    recipes.appendChild(h61);

    let img6 = new Image();
    img6.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOQBTitoAGTgfiSXnVqMDF3tKAk_bl60Gbw&s";
    img6.setAttribute("width", "400px");
    img6.setAttribute("height", "400px");
    recipes.appendChild(img6);

    let h62 = document.createElement("h3");
    h62.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h62);

    let p61 = document.createElement("p");
    let p62 = document.createElement("p");
    let p63 = document.createElement("p");
    let p64 = document.createElement("p");
    let p65 = document.createElement("p");
    let p66 = document.createElement("p");
    p61.appendChild(
      document.createTextNode(
        "1. Cut the tops off the tomatoes and scoop out the insides."
      )
    );
    p62.appendChild(
      document.createTextNode(
        "2. Sauté chopped spinach and diced red onion in olive oil until wilted."
      )
    );
    p63.appendChild(
      document.createTextNode(
        "3. Mix in crumbled feta cheese and season with salt and black pepper."
      )
    );
    p64.appendChild(
      document.createTextNode(
        "4. Stuff the tomato shells with the spinach and feta mixture."
      )
    );
    p65.appendChild(
      document.createTextNode(
        "5. Bake in the oven at 375°F (190°C) until the tomatoes are tender and the filling is heated through."
      )
    );
    p66.appendChild(
      document.createTextNode("6. Serve as a flavorful appetizer or side dish.")
    );
    recipes.appendChild(p61);
    recipes.appendChild(p62);
    recipes.appendChild(p63);
    recipes.appendChild(p64);
    recipes.appendChild(p65);
    recipes.appendChild(p66);

    let h63 = document.createElement("h3");
    h63.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h63);

    let p67 = document.createElement("p");
    p67.appendChild(
      document.createTextNode(
        "Eggs, Spinach, Feta cheese, Tomatoes, Onion, Olive oil, Salt, Black pepper"
      )
    );
    recipes.appendChild(p67);

    let s6 = document.createElement("button");
    s6.textContent = "save as favourites";
    recipes.appendChild(s6);
    s6.classList.add("save");

    i = 1;

    s6.addEventListener("click", () => {
      saved_users[k].r6 = { ...recipe.r6 };
    });
  }

  for (let i = 0; i < 8; i++) {
    if (Beef_Chili[i] === 1) {
      r[6] = 1;
    } else {
      r[6] = 0;
      break;
    }
  }

  if (
    r[6] === 1 &&
    (c[3] === 1 || c[4] === 1) &&
    (ct[3] === 1 || ct[4] === 1) &&
    (dr[0] === 1 || dr[1] === 1 || dr[2] === 1 || dr[4] === 1)
  ) {
    let h71 = document.createElement("h1");
    h71.appendChild(document.createTextNode("Beef Chili"));
    recipes.appendChild(h71);

    let img7 = new Image();
    img7.src =
      "data:image/jpeg;base64,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";
    img7.setAttribute("width", "400px");
    img7.setAttribute("height", "400px");
    recipes.appendChild(img7);

    let h72 = document.createElement("h3");
    h72.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h72);

    let p71 = document.createElement("p");
    let p72 = document.createElement("p");
    let p73 = document.createElement("p");
    let p74 = document.createElement("p");
    let p75 = document.createElement("p");
    p71.appendChild(
      document.createTextNode(
        "1. Sauté chopped onion and minced garlic in a pot until softened."
      )
    );
    p72.appendChild(
      document.createTextNode("2. Add ground beef and cook until browned.")
    );
    p73.appendChild(
      document.createTextNode(
        "3. Stir in canned tomatoes, chili powder, cumin, salt, and black pepper."
      )
    );
    p74.appendChild(
      document.createTextNode(
        "4. Simmer for 30 minutes to allow flavors to meld."
      )
    );
    p75.appendChild(
      document.createTextNode(
        "5. Serve with toppings like shredded cheese and sour cream."
      )
    );
    recipes.appendChild(p71);
    recipes.appendChild(p72);
    recipes.appendChild(p73);
    recipes.appendChild(p74);
    recipes.appendChild(p75);

    let h73 = document.createElement("h3");
    h73.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h73);

    let p76 = document.createElement("p");
    p76.appendChild(
      document.createTextNode(
        "Ground beef, Onion, Garlic, Canned tomatoes, Chili powder, Cumin, Salt, Black pepper"
      )
    );
    recipes.appendChild(p76);

    let s7 = document.createElement("button");
    s7.textContent = "save as favourites";
    recipes.appendChild(s7);
    s7.classList.add("save");

    i = 1;

    s7.addEventListener("click", () => {
      saved_users[k].r7 = { ...recipe.r7 };
    });
  }

  for (let i = 0; i < 8; i++) {
    if (Stuffed_Bell_Peppers[i] === 1) {
      r[7] = 1;
    } else {
      r[7] = 0;
      break;
    }
  }

  if (
    r[7] === 1 &&
    (c[0] === 1 || c[4] === 1) &&
    (ct[2] === 1 || ct[4] === 1) &&
    (dr[0] === 1 || dr[1] === 1 || dr[2] === 1 || dr[4] === 1)
  ) {
    let h81 = document.createElement("h1");
    h81.appendChild(document.createTextNode("Stuffed Bell Peppers"));
    recipes.appendChild(h81);

    let img8 = new Image();
    img8.src =
      "data:image/jpeg;base64,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";
    img8.setAttribute("width", "400px");
    img8.setAttribute("height", "400px");
    recipes.appendChild(img8);

    let h82 = document.createElement("h3");
    h82.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h82);

    let p81 = document.createElement("p");
    let p82 = document.createElement("p");
    let p83 = document.createElement("p");
    let p84 = document.createElement("p");
    let p85 = document.createElement("p");
    let p86 = document.createElement("p");
    p81.appendChild(
      document.createTextNode(
        "1. Cut the tops off bell peppers and remove the seeds."
      )
    );
    p82.appendChild(
      document.createTextNode(
        "2. Sauté chopped onion and minced garlic in a skillet, then add ground beef and cook until browned."
      )
    );
    p83.appendChild(
      document.createTextNode(
        "3. Stir in canned tomatoes, chili powder, cumin, salt, and black pepper."
      )
    );
    p84.appendChild(
      document.createTextNode(
        "4. Stuff the bell peppers with the beef mixture."
      )
    );
    p85.appendChild(
      document.createTextNode(
        "5. Bake in the oven at 375°F (190°C) for 25-30 minutes."
      )
    );
    p86.appendChild(
      document.createTextNode(
        "6. Serve hot, optionally topped with melted cheese."
      )
    );
    recipes.appendChild(p81);
    recipes.appendChild(p82);
    recipes.appendChild(p83);
    recipes.appendChild(p84);
    recipes.appendChild(p85);
    recipes.appendChild(p86);

    let h83 = document.createElement("h3");
    h83.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h83);

    let p87 = document.createElement("p");
    p87.appendChild(
      document.createTextNode(
        "Ground beef, Onion, Garlic, Canned tomatoes, Chili powder, Cumin, Salt, Black pepper"
      )
    );
    recipes.appendChild(p87);

    let s8 = document.createElement("button");
    s8.textContent = "save as favourites";
    recipes.appendChild(s8);
    s8.classList.add("save");

    i = 1;

    s8.addEventListener("click", () => {
      saved_users[k].r8 = { ...recipe.r8 };
    });
  }

  for (let i = 0; i < 7; i++) {
    if (Beef_and_Tomato_Skillet[i] === 1) {
      r[8] = 1;
    } else {
      r[8] = 0;
      break;
    }
  }

  if (
    r[8] === 1 &&
    (c[0] === 1 || c[4] === 1) &&
    (ct[1] === 1 || ct[4] === 1) &&
    (dr[0] === 1 || dr[1] === 1 || dr[2] === 1 || dr[4] === 1)
  ) {
    let h91 = document.createElement("h1");
    h91.appendChild(document.createTextNode("Beef and Tomato Skillet"));
    recipes.appendChild(h91);

    let img9 = new Image();
    img9.src =
      "https://www.gritsandpinecones.com/wp-content/uploads/2016/12/IMG_9416.jpg";
    img9.setAttribute("width", "400px");
    img9.setAttribute("height", "400px");
    recipes.appendChild(img9);

    let h92 = document.createElement("h3");
    h92.appendChild(document.createTextNode("COOKING-PROCEDURE:"));
    recipes.appendChild(h92);

    let p91 = document.createElement("p");
    let p92 = document.createElement("p");
    let p93 = document.createElement("p");
    let p94 = document.createElement("p");
    let p95 = document.createElement("p");
    p91.appendChild(
      document.createTextNode(
        "1. Sauté chopped onion and minced garlic in a skillet until softened."
      )
    );
    p92.appendChild(
      document.createTextNode("2. Add ground beef and cook until browned.")
    );
    p93.appendChild(
      document.createTextNode(
        "3. Stir in canned tomatoes, chili powder, salt, and black pepper."
      )
    );
    p94.appendChild(
      document.createTextNode("4. Cook until the mixture thickens slightly.")
    );
    p95.appendChild(
      document.createTextNode("5. Serve over rice or with warm tortillas.")
    );
    recipes.appendChild(p91);
    recipes.appendChild(p92);
    recipes.appendChild(p93);
    recipes.appendChild(p94);
    recipes.appendChild(p95);

    let h93 = document.createElement("h3");
    h93.appendChild(document.createTextNode("INGREDIENTS:"));
    recipes.appendChild(h93);

    let p96 = document.createElement("p");
    p96.appendChild(
      document.createTextNode(
        "Ground beef, Onion, Garlic, Canned tomatoes, Chili powder, Salt, Black pepper"
      )
    );
    recipes.appendChild(p96);

    let s9 = document.createElement("button");
    s9.textContent = "save as favourites";
    recipes.appendChild(s9);
    s9.classList.add("save");

    i = 1;

    s9.addEventListener("click", () => {
      saved_users[k].r9 = { ...recipe.r9 };
    });
  }

  if (i === 0) {
    setTimeout(() => {
      let pp = document.createElement("h2");
      pp.appendChild(
        document.createTextNode(
          "OOPSS!! LOOKS LIKE THERE IS NO RECIPE FOUND WITH THE CHOOSEN SET OF INGREDIENTS, TRY CHOOSING A DIFFERENT SET......"
        )
      );
      recipes.appendChild(pp);
    }, 5000);
  }
});

const recipe = {
  r1: {
    name: "Lemon Garlic Rosemary Chicken",
    image:
      "https://elanaspantry.com/wp-content/uploads/2010/07/Rosemary-Lemon-Chicken.jpg",
    cooking_proceedure1:
      "1. Marinate chicken breasts in a mixture of olive oil, minced garlic, lemon juice, chopped fresh rosemary, salt, and black pepper.",
    cooking_proceedure2:
      "2. Grill or bake the marinated chicken until fully cooked.",
    cooking_proceedure3:
      "3. Serve with a lemon wedge and fresh rosemary sprig for garnish.",
    ingredients:
      "Chicken breast, Garlic, Olive oil, Lemon, Fresh rosemary, Salt, Black pepper",
  },

  r2: {
    name: "Garlic Rosemary Lemon Chicken Skewers",
    image:
      "https://thecafesucrefarine.com/wp-content/uploads/2015/07/Lemon-Rosemary-and-Garlic-Chicken-Skewers-2.jpg",
    cooking_proceedure1: "1. Cut chicken breasts into cubes.",
    cooking_proceedure2:
      "2. Marinate the chicken cubes in olive oil, minced garlic, lemon zest, lemon juice, chopped rosemary, salt.",
    cooking_proceedure3: "3. Thread the marinated chicken onto skewers.",
    cooking_proceedure4: "4. Grill until the chicken is cooked through.",
    cooking_proceedure5:
      "5. Serve with a side of grilled vegetables or a fresh salad.",
    ingredients:
      "Chicken breast, Garlic, Olive oil, Lemon, Fresh rosemary, Salt",
  },

  r3: {
    name: "Chicken Pasta",
    image:
      "https://www.eatingwell.com/thmb/-JicPJo4YOxB3kW6BOsAkahKq9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/one-pot-chicken-pasta-with-cajun-seasonings-efca59b03fe84ebb8495c31b4a3fdada.jpg",
    cooking_proceedure1: "1. Cook pasta according to package instructions.",
    cooking_proceedure2: "2. Sauté minced garlic in olive oil until fragrant.",
    cooking_proceedure3: "3. Add cubed chicken breast and cook until done.",
    cooking_proceedure4:
      "4. Toss the cooked pasta in the chicken mixture and season with salt and black pepper.",
    ingredients: "Chicken breast, Garlic, Olive oil, Salt, Black pepper",
  },

  r4: {
    name: "Spinach and Feta Omelette",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTie7zA-1mEfvGYo-M8fHAKsb4kLw-r9j5RwQ&s",
    cooking_proceedure1:
      "1. Beat eggs in a bowl and season with salt and black pepper.",
    cooking_proceedure2:
      "2. Sauté chopped spinach and diced red onion in olive oil until softened.",
    cooking_proceedure3:
      "3. Pour the beaten eggs over the vegetables and sprinkle crumbled feta cheese on top",
    cooking_proceedure4:
      "4. Cook until the eggs are set and fold the omelette in half.",
    cooking_proceedure5: "5. Serve hot with a side of toast.",
    ingredients:
      "Eggs, Spinach, Feta cheese, Onion, Olive oil, Salt, Black pepper",
  },

  r5: {
    name: "Mediterranean Spinach Salad",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSq91FO5wN_yus3xHPv8Gpko4gr5tksDjYzw&s",
    cooking_proceedure1:
      "1. In a large bowl, combine fresh spinach leaves, chopped tomatoes and thinly sliced red onion.",
    cooking_proceedure2:
      "2. Drizzle with olive oil and season with salt and black pepper.",
    cooking_proceedure3:
      "3. Toss to combine and serve as a light and healthy salad.",
    ingredients:
      "Eggs, Spinach, Tomatoes, Onion, Olive oil, Salt, Black pepper",
  },

  r6: {
    name: "Spinach Feta Stuffed Tomatoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOQBTitoAGTgfiSXnVqMDF3tKAk_bl60Gbw&s",
    cooking_proceedure1:
      "1. Cut the tops off the tomatoes and scoop out the insides.",
    cooking_proceedure2:
      "2. Sauté chopped spinach and diced red onion in olive oil until wilted.",
    cooking_proceedure3:
      "3. Mix in crumbled feta cheese and season with salt and black pepper.",
    cooking_proceedure4:
      "4. Stuff the tomato shells with the spinach and feta mixture.",
    cooking_proceedure5:
      "5. Bake in the oven at 375°F (190°C) until the tomatoes are tender and the filling is heated through.",
    cooking_proceedure6: "6. Serve as a flavorful appetizer or side dish.",
    ingredients:
      "Eggs, Spinach, Feta cheese, Tomatoes, Onion, Olive oil, Salt, Black pepper",
  },

  r7: {
    name: "Beef Chili",
    image:
      "data:image/jpeg;base64,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",
    cooking_proceedure1:
      "1. Sauté chopped onion and minced garlic in a pot until softened.",
    cooking_proceedure2: "2. Add ground beef and cook until browned.",
    cooking_proceedure3:
      "3. Stir in canned tomatoes, chili powder, cumin, salt, and black pepper.",
    cooking_proceedure4: "4. Simmer for 30 minutes to allow flavors to meld.",
    cooking_proceedure5:
      "5. Serve with toppings like shredded cheese and sour cream.",
    ingredients:
      "Ground beef, Onion, Garlic, Canned tomatoes, Chili powder, Cumin, Salt, Black pepper",
  },

  r8: {
    name: "Stuffed Bell Peppers",
    image:
      "data:image/jpeg;base64,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",
    cooking_proceedure1:
      "1. Cut the tops off bell peppers and remove the seeds.",
    cooking_proceedure2:
      "2. Sauté chopped onion and minced garlic in a skillet, then add ground beef and cook until browned.",
    cooking_proceedure3:
      "3. Stir in canned tomatoes, chili powder, cumin, salt, and black pepper.",
    cooking_proceedure4: "4. Stuff the bell peppers with the beef mixture.",
    cooking_proceedure5:
      "5. Bake in the oven at 375°F (190°C) for 25-30 minutes.",
    cooking_proceedure6: "6. Serve hot, optionally topped with melted cheese.",
    ingredients:
      "Ground beef, Onion, Garlic, Canned tomatoes, Chili powder, Cumin, Salt, Black pepper",
  },

  r9: {
    name: "Beef and Tomato Skillet",
    image:
      "https://www.gritsandpinecones.com/wp-content/uploads/2016/12/IMG_9416.jpg",
    cooking_proceedure1:
      "1. Sauté chopped onion and minced garlic in a skillet until softened.",
    cooking_proceedure2: "2. Add ground beef and cook until browned.",
    cooking_proceedure3:
      "3. Stir in canned tomatoes, chili powder, salt, and black pepper.",
    cooking_proceedure4: "4. Cook until the mixture thickens slightly.",
    cooking_proceedure5: "5. Serve over rice or with warm tortillas.",
    ingredients:
      "Ground beef, Onion, Garlic, Canned tomatoes, Chili powder, Salt, Black pepper",
  },
};

localStorage.setItem("recipe", JSON.stringify(recipe));

localStorage.setItem("saved_recipes", JSON.stringify(saved_users));
