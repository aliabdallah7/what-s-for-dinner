// =====================================================
// 1) DATA: array of meal objects (all share the same structure)
// =====================================================
const meals = [
  {
    id: 1,
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    difficulty: "Intermediate",
    cuisine: "Asian",
    rating: 4.8,
    reviews: 445,
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    emoji: "🍜",
    image: "images/pad-thai.jpg",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak the rice noodles in warm water for 20 minutes, then drain.",
      "Mix tamarind paste, fish sauce and palm sugar to make the sauce.",
      "Heat oil in a wok and cook the shrimp until pink, then set aside.",
      "Scramble the eggs in the wok, add the noodles and the sauce, and toss for 2-3 minutes.",
      "Return the shrimp, add bean sprouts, and toss for 1 more minute.",
      "Serve topped with crushed peanuts, lime wedges and cilantro.",
    ],
    nutrition: {
      calories: 520,
      protein: "28g",
      carbs: "68g",
      fat: "16g",
      fiber: "4g",
      sodium: "1150mg",
    },
    tips: [
      "Don't over-soak the noodles, they keep cooking in the wok.",
      "Use a very hot wok and cook in small batches.",
      "Add the lime juice at the end for a fresh taste.",
    ],
  },
  {
    id: 2,
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    difficulty: "Easy",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    emoji: "🍝",
    image: "images/carbonara.jpg",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Boil the spaghetti in well-salted water until al dente. Save 1 cup of pasta water.",
      "Cook the pancetta in a pan until crispy.",
      "Whisk the eggs with both cheeses and plenty of black pepper.",
      "Remove the pan from the heat, add the drained pasta to the pancetta.",
      "Pour in the egg mixture and toss quickly, adding pasta water to make it creamy.",
      "Serve immediately with extra cheese and pepper.",
    ],
    nutrition: {
      calories: 640,
      protein: "29g",
      carbs: "72g",
      fat: "25g",
      fiber: "3g",
      sodium: "780mg",
    },
    tips: [
      "Take the pan off the heat before adding the eggs, or they will scramble.",
      "Pasta water is the secret to a silky sauce.",
      "Never add cream, real carbonara doesn't need it.",
    ],
  },
  {
    id: 3,
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    difficulty: "Intermediate",
    cuisine: "French",
    rating: 4.7,
    reviews: 267,
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    emoji: "🥣",
    image: "images/french-onion-soup.jpg",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt the butter in a large pot and add the onions with a pinch of salt.",
      "Cook on medium-low heat for 40 minutes, stirring often, until deep golden brown.",
      "Pour in the wine and scrape the bottom of the pot.",
      "Add the broth, bay leaves and thyme, then simmer for 20 minutes.",
      "Toast the baguette slices and pour the soup into oven-safe bowls.",
      "Top with bread and cheese, then broil until bubbly and golden.",
    ],
    nutrition: {
      calories: 410,
      protein: "18g",
      carbs: "36g",
      fat: "21g",
      fiber: "4g",
      sodium: "960mg",
    },
    tips: [
      "Patience is key: slow caramelization gives the sweet flavor.",
      "Use a mix of Gruyère and Emmental for the best melt.",
      "Make the soup a day ahead, it tastes even better.",
    ],
  },
  {
    id: 4,
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    difficulty: "Intermediate",
    cuisine: "Asian",
    rating: 4.7,
    reviews: 389,
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    image: "./images/chicken-tikka-masala.jpg",
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate the chicken in yogurt and half of the tikka paste for at least 20 minutes.",
      "Sear the chicken in a hot pan until browned, then set aside.",
      "Cook the onion, garlic and ginger until soft, then add the rest of the paste.",
      "Add the tomatoes and simmer for 10 minutes.",
      "Stir in the coconut cream and return the chicken. Simmer for 10 more minutes.",
      "Garnish with cilantro and serve with rice or naan.",
    ],
    nutrition: {
      calories: 480,
      protein: "38g",
      carbs: "18g",
      fat: "28g",
      fiber: "3g",
      sodium: "890mg",
    },
    tips: [
      "Marinate overnight for more tender chicken.",
      "Blend the sauce for a smoother restaurant-style texture.",
      "A pinch of sugar balances the acidity of the tomatoes.",
    ],
  },
  {
    id: 5,
    name: "Chicken Caesar Salad",
    description:
      "Crisp romaine, grilled chicken, parmesan and crunchy croutons",
    difficulty: "Easy",
    cuisine: "American",
    rating: 4.5,
    reviews: 312,
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    image: "./images/chicken-caesar-salad.jpg",
    ingredients: [
      "2 chicken breasts",
      "1 large romaine lettuce, chopped",
      "50g Parmesan cheese, shaved",
      "1 cup croutons",
      "3 tablespoons Caesar dressing",
      "1 tablespoon olive oil",
      "Salt and black pepper",
      "Lemon wedges",
    ],
    instructions: [
      "Season the chicken with salt, pepper and olive oil.",
      "Grill or pan-fry for 5 minutes per side until cooked through, then rest for 5 minutes.",
      "Toss the romaine with the Caesar dressing in a large bowl.",
      "Slice the chicken and place it on top of the lettuce.",
      "Add the croutons and Parmesan, and serve with lemon wedges.",
    ],
    nutrition: {
      calories: 390,
      protein: "42g",
      carbs: "14g",
      fat: "18g",
      fiber: "3g",
      sodium: "820mg",
    },
    tips: [
      "Dry the lettuce well so the dressing sticks.",
      "Make your own croutons with day-old bread and garlic butter.",
      "Rest the chicken before slicing to keep it juicy.",
    ],
  },
  {
    id: 6,
    name: "Beef Tacos",
    description:
      "Soft tortillas filled with spiced beef, fresh salsa and cheese",
    difficulty: "Easy",
    cuisine: "Mexican",
    rating: 4.6,
    reviews: 521,
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    image: "images/beef-tacos.jpg",
    ingredients: [
      "500g ground beef",
      "8 small tortillas",
      "1 tablespoon taco seasoning",
      "2 tomatoes, diced",
      "1 small onion, diced",
      "1 cup shredded cheese",
      "Lettuce, shredded",
      "Sour cream and lime",
    ],
    instructions: [
      "Brown the beef in a pan, breaking it up, for about 7 minutes.",
      "Add the taco seasoning and 1/4 cup of water, then simmer for 5 minutes.",
      "Warm the tortillas in a dry pan for 30 seconds on each side.",
      "Mix the tomatoes and onion with a squeeze of lime to make the salsa.",
      "Fill the tortillas with beef, cheese, lettuce and salsa.",
      "Top with sour cream and serve right away.",
    ],
    nutrition: {
      calories: 450,
      protein: "30g",
      carbs: "34g",
      fat: "21g",
      fiber: "4g",
      sodium: "740mg",
    },
    tips: [
      "Drain extra fat from the beef for a cleaner taste.",
      "Char the tortillas slightly over a flame for extra flavor.",
      "Set up a taco bar and let everyone build their own.",
    ],
  },
  {
    id: 7,
    name: "Salmon Teriyaki Bowl",
    description: "Glazed salmon over steamed rice with fresh vegetables",
    difficulty: "Easy",
    cuisine: "Japanese",
    rating: 4.9,
    reviews: 198,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    image: "./images/salmon-teriyaki-bowl.jpg",
    ingredients: [
      "2 salmon fillets",
      "1 cup short-grain rice",
      "3 tablespoons soy sauce",
      "2 tablespoons honey",
      "1 tablespoon rice vinegar",
      "1 clove garlic, minced",
      "1 cup broccoli florets",
      "Sesame seeds and spring onion",
    ],
    instructions: [
      "Cook the rice according to the package instructions.",
      "Mix soy sauce, honey, vinegar and garlic to make the teriyaki sauce.",
      "Pan-sear the salmon skin-side down for 4 minutes, then flip for 3 minutes.",
      "Pour the sauce over the salmon and let it thicken into a glaze.",
      "Steam the broccoli for 3 minutes.",
      "Serve the salmon over rice with broccoli, sesame seeds and spring onion.",
    ],
    nutrition: {
      calories: 560,
      protein: "36g",
      carbs: "58g",
      fat: "20g",
      fiber: "4g",
      sodium: "900mg",
    },
    tips: [
      "Pat the salmon dry for a crispy skin.",
      "Don't boil the sauce too long or it will burn.",
      "Add a soft-boiled egg for extra richness.",
    ],
  },
  {
    id: 8,
    name: "Margherita Pizza",
    description: "Homemade pizza with tomato sauce, fresh mozzarella and basil",
    difficulty: "Intermediate",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 604,
    prepTime: 40,
    cookTime: 12,
    servings: 2,
    image: "images/margherita-pizza.jpg",
    ingredients: [
      "300g pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Pinch of salt",
    ],
    instructions: [
      "Preheat the oven to its highest temperature with a baking tray inside.",
      "Stretch the dough into a thin round on a floured surface.",
      "Spread the tomato sauce, leaving a border for the crust.",
      "Top with mozzarella and a drizzle of olive oil.",
      "Bake for 10-12 minutes until the crust is golden and the cheese bubbles.",
      "Finish with fresh basil leaves and serve hot.",
    ],
    nutrition: {
      calories: 580,
      protein: "26g",
      carbs: "70g",
      fat: "22g",
      fiber: "4g",
      sodium: "1010mg",
    },
    tips: [
      "A very hot oven is the secret to a crisp crust.",
      "Pat the mozzarella dry so the pizza isn't soggy.",
      "Add the basil after baking to keep it fresh.",
    ],
  },
];

// =====================================================
// 2) STATE (saved in localStorage)
// =====================================================
const load = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

let bookmarks = load("wfd-bookmarks", []); // array of meal ids
let history = load("wfd-history", []); // array of { id, time }
let settings = load("wfd-settings", { warnAfter: 45, avoidRepeat: true });

let currentMeal = null;
let activeTab = "ingredients";

// =====================================================
// 3) FUNCTIONS
// =====================================================
function getRandomMeal() {
  let pool = meals;
  if (settings.avoidRepeat && currentMeal) {
    pool = meals.filter((m) => m.id !== currentMeal.id);
  }
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

function totalTime(meal) {
  return meal.prepTime + meal.cookTime;
}

function renderTabBody(meal) {
  switch (activeTab) {
    case "ingredients":
      return `<ul class="list">${meal.ingredients
        .map((item, i) => `<li><span class="num">${i + 1}</span>${item}</li>`)
        .join("")}</ul>`;
    case "instructions":
      return `<ul class="list">${meal.instructions
        .map((step, i) => `<li><span class="num">${i + 1}</span>${step}</li>`)
        .join("")}</ul>`;
    case "nutrition": {
      const n = meal.nutrition;
      const items = [
        ["fa-fire", "orange", "Calories", `${n.calories} kcal`],
        ["fa-dumbbell", "blue", "Protein", n.protein],
        ["fa-wheat-awn", "amber", "Carbohydrates", n.carbs],
        ["fa-droplet", "red", "Fat", n.fat],
        ["fa-seedling", "green", "Fiber", n.fiber],
        ["fa-cube", "pink", "Sodium", n.sodium],
      ];
      return `<div class="nutrition-grid">${items
        .map(
          ([icon, color, label, value]) => `
          <div class="nutri">
            <div class="nutri-icon ${color}"><i class="fa-solid ${icon}"></i></div>
            <span class="nutri-label">${label}</span>
            <strong>${value}</strong>
          </div>`,
        )
        .join("")}</div>`;
    }
    case "tips":
      return `<ul class="tips-list">${meal.tips
        .map(
          (t) =>
            `<li class="tip"><i class="fa-solid fa-circle-check"></i><span>${t}</span></li>`,
        )
        .join("")}</ul>`;
  }
}

function renderMeal(meal) {
  const card = document.getElementById("recipeCard");
  const isSaved = bookmarks.includes(meal.id);
  const isLong = totalTime(meal) > settings.warnAfter;

  card.innerHTML = `
    <div class="card-image" id="cardImage">
      <img src="${meal.image}" alt="${meal.name}" />
      <div class="fallback-emoji">${meal.emoji}</div>
      <div class="rating"><i class="fa-solid fa-star"></i>${meal.rating} <span>(${meal.reviews} reviews)</span></div>
      <div class="stats">
        <div class="stat"><i class="fa-solid fa-clock"></i>Prep Time<strong>${meal.prepTime} min</strong></div>
        <div class="stat"><i class="fa-solid fa-fire-burner"></i>Cook Time<strong>${meal.cookTime} min</strong></div>
        <div class="stat"><i class="fa-solid fa-users"></i>Servings<strong>${meal.servings} people</strong></div>
      </div>
    </div>

    <div class="card-content">
      <div class="badges">
        <span class="badge diff">${meal.difficulty}</span>
        <span class="badge cuisine">${meal.cuisine}</span>
      </div>

      <div class="title-row">
        <h2>${meal.name}</h2>
        <div class="icon-btns">
          <button class="icon-btn ${isSaved ? "active" : ""}" id="saveBtn" title="Save"><i class="fa-solid fa-bookmark"></i></button>
          <button class="icon-btn" id="shareBtn" title="Share"><i class="fa-solid fa-share-nodes"></i></button>
        </div>
      </div>
      <p class="desc">${meal.description}</p>

      ${
        isLong
          ? `
        <div class="warning">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <div>
            <strong>Extended Preparation Time</strong>
            <span>This recipe requires more than ${settings.warnAfter} minutes to prepare. Plan accordingly!</span>
          </div>
        </div>`
          : ""
      }

      <div class="tabs">
        ${[
          ["ingredients", "fa-list-check", "Ingredients"],
          ["instructions", "fa-book-open", "Instructions"],
          ["nutrition", "fa-chart-pie", "Nutrition"],
          ["tips", "fa-lightbulb", "Chef's Tips"],
        ]
          .map(
            ([key, icon, label]) =>
              `<button class="tab ${activeTab === key ? "active" : ""}" data-tab="${key}"><i class="fa-solid ${icon}"></i>${label}</button>`,
          )
          .join("")}
      </div>

      <div class="tab-body ${activeTab === "nutrition" || activeTab === "tips" ? "plain" : ""}" id="tabBody">${renderTabBody(meal)}</div>

      <div class="footer">
        <button class="try-btn" id="tryBtn"><i class="fa-solid fa-rotate"></i>Try Another Recipe</button>
      </div>
    </div>`;

  // Image fallback if the photo fails to load
  card.querySelector("#cardImage img").addEventListener("error", () => {
    card.querySelector("#cardImage").classList.add("no-img");
  });

  // Events
  card.querySelectorAll(".tab").forEach((btn) =>
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      renderMeal(meal);
    }),
  );
  card.querySelector("#tryBtn").addEventListener("click", showRandomMeal);
  card
    .querySelector("#saveBtn")
    .addEventListener("click", () => toggleBookmark(meal.id));
  card
    .querySelector("#shareBtn")
    .addEventListener("click", () => shareMeal(meal));
}

function showRandomMeal() {
  currentMeal = getRandomMeal();
  activeTab = "ingredients";
  history.unshift({ id: currentMeal.id, time: new Date().toLocaleString() });
  history = history.slice(0, 20);
  save("wfd-history", history);
  renderMeal(currentMeal);
}

function toggleBookmark(id) {
  bookmarks = bookmarks.includes(id)
    ? bookmarks.filter((b) => b !== id)
    : [...bookmarks, id];
  save("wfd-bookmarks", bookmarks);
  renderMeal(currentMeal);
}

async function shareMeal(meal) {
  const text = `Tonight's dinner: ${meal.name} - ${meal.description}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: meal.name, text });
    } catch {}
  } else {
    await navigator.clipboard.writeText(text);
    alert("Recipe copied to clipboard!");
  }
}

// =====================================================
// 4) SIDE PANEL (bookmarks / history / settings)
// =====================================================
const panel = document.getElementById("panel");
const overlay = document.getElementById("overlay");
const panelTitle = document.getElementById("panelTitle");
const panelBody = document.getElementById("panelBody");

function openPanel(type) {
  if (type === "bookmarks") {
    panelTitle.textContent = "Saved Recipes";
    const saved = meals.filter((m) => bookmarks.includes(m.id));
    panelBody.innerHTML = saved.length
      ? saved
          .map(
            (m) =>
              `<div class="panel-item"><span>${m.emoji} ${m.name}</span><button data-show="${m.id}">View</button></div>`,
          )
          .join("")
      : `<p class="empty">No saved recipes yet.</p>`;
  }

  if (type === "history") {
    panelTitle.textContent = "History";
    panelBody.innerHTML = history.length
      ? history
          .map((h) => {
            const m = meals.find((x) => x.id === h.id);
            return `<div class="panel-item"><span>${m.emoji} ${m.name}<small>${h.time}</small></span><button data-show="${m.id}">View</button></div>`;
          })
          .join("") +
        `<button class="clear-btn" id="clearHistory">Clear history</button>`
      : `<p class="empty">Nothing here yet.</p>`;
  }

  if (type === "settings") {
    panelTitle.textContent = "Settings";
    panelBody.innerHTML = `
      <div class="setting"><label for="warnAfter">Warn when total time is more than (min)</label>
        <input type="number" id="warnAfter" min="5" max="240" value="${settings.warnAfter}" /></div>
      <div class="setting"><label for="avoidRepeat">Don't repeat the same recipe twice in a row</label>
        <input type="checkbox" id="avoidRepeat" ${settings.avoidRepeat ? "checked" : ""} /></div>`;
  }

  panel.classList.add("show");
  overlay.classList.add("show");
}

function closePanel() {
  panel.classList.remove("show");
  overlay.classList.remove("show");
}

panelBody.addEventListener("click", (e) => {
  const showId = e.target.dataset.show;
  if (showId) {
    currentMeal = meals.find((m) => m.id === Number(showId));
    activeTab = "ingredients";
    renderMeal(currentMeal);
    closePanel();
  }
  if (e.target.id === "clearHistory") {
    history = [];
    save("wfd-history", history);
    openPanel("history");
  }
});

panelBody.addEventListener("change", (e) => {
  if (e.target.id === "warnAfter")
    settings.warnAfter = Number(e.target.value) || 45;
  if (e.target.id === "avoidRepeat") settings.avoidRepeat = e.target.checked;
  save("wfd-settings", settings);
  renderMeal(currentMeal);
});

document
  .getElementById("bookmarksBtn")
  .addEventListener("click", () => openPanel("bookmarks"));
document
  .getElementById("historyBtn")
  .addEventListener("click", () => openPanel("history"));
document
  .getElementById("settingsBtn")
  .addEventListener("click", () => openPanel("settings"));
document.getElementById("closePanel").addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

// =====================================================
// 5) START
// =====================================================
showRandomMeal();
