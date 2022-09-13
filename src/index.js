import "./styles.scss";

console.log("its working!");

function onMenuClick() {
  document.querySelector(".text-pane")?.remove();

  const textPane = document.createElement("div");
  textPane.classList.add("text-pane");
  const contentPane = document.querySelector(".content");
  contentPane.appendChild(textPane);

  textPane.innerHTML += `<em>fixed price $195 - 4 Courses</em>
          <h3>FIRST COURSE</h3>
            <ul>
              <li>Scallop Jerky topped with Low-carb Chicken Souffle</li>
              <li>Baked Tamarind Scramble alongside Lamb and Candy Cap Gremolata</li>
              <li>Sprouted Spinach and Lime Milkshake with a wisp of Broiled Oyster Sticks</li>
            </ul>

          <h3>SECOND COURSE</h3>
            <ul>
              <li>Stewed Chard Brownies hidden under Greenhouse Rutabaga</li>
              <li>Hoboken Shellfish Bread atop Succulent Yam and Garlic Balls</li>
              <li>Cameroon Pumpkin Puree with Indulgent Parmesan Jam</li>
              <li>Cornmeal-crusted Almond Pasta tossed with Lemon Blobs</li>
              <li>Char-broiled Oatmeal and Cremini Three Ways with a side of Clam Paste</li>
            </ul>

          <h3>THIRD COURSE</h3>
            <ul>
              <li>Preserved Carrot in a mélange of Tijuanan Jarlsberg Shish-Kebab</li>
              <li>Hormone-free Pineapple and Black Truffle Essence served with Sweet Duck Roll</li>
              <li>Spam Slices on a bed of Parisian Fontina and Pastrami Beverage</li>
              <li>Plant-based Mock-Duck Scones topped with Beaver Water</li>
              <li>Yemeni Peanut Burger with a side of Congolese Matsutake Surprise*</li>
              <li>Burnt Gorgonzola and Ricotta Soup hidden under Indoor Tangerine Pastry</li>
            </ul>
            
            
          <h3>DESSERT</h3>
            <ul>
              <li>Kale Confit in a mélange of Extruded Grapefruit Chutney</li>
              <li>Crimean Cheese Flatbread served with Rutabaga and Turkey Muffins</li>
              <li>Julienned Asiago Reduction alongside Forbidden Hot Dog and Amaranth Smoothie</li>
              <li>Gluten-free Bacon Pie with a wisp of Wildcrafted Gruyère and Porcini Fondue</li>
            </ul>
          
          <br>
          <em>*vegan</em>`;
}

function onReservationClick() {
  document.querySelector(".text-pane")?.remove();

  const textPane = document.createElement("div");
  textPane.classList.add("text-pane");
  const contentPane = document.querySelector(".content");
  contentPane.appendChild(textPane);
  
  textPane.innerHTML = `<p>To make a reservation, call us: (555) 239-5920</p>
          <em style="margin-bottom: 3em;">Be sure to call early. Reservations fill up quickly.</em>
          <iframe style="margin-top: 3em;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346325.82847447076!2d-122.88255611805053!3d47.30123767430613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549040673a95858b%3A0xa873ca06b2cb7e04!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1663104187495!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}

function onHomeClick() {
  document.querySelector(".text-pane")?.remove();
}

function addNavButtons() {
  const home = document.querySelector(".home-btn");
  const menu = document.querySelector(".menu-btn");
  const reservation = document.querySelector(".reservation-btn");

  home.addEventListener("click", onHomeClick);
  menu.addEventListener("click", onMenuClick);
  reservation.addEventListener("click", onReservationClick);
}

addNavButtons();
