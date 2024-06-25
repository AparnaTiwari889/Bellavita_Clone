// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Shopping Page</title>
//     <link rel="stylesheet" href="navbar.css">
//     <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
//     <link rel="stylesheet" href="./footer.css">

//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #f5f5f5;
//         }

//         #header {
//             text-align: center;
//             margin: 20px 0;
//         }

//         #header img {
//             max-width: 100%;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         #products {
//             display: flex;
//             justify-content: space-around;
//             margin: 20px;
//             flex-wrap: wrap;
//         }

//         .product {
//             background-color: #fff;
//             margin: 10px;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             width: 250px;
//             text-align: center;
//         }

//         .product img {
//             max-width: 100%;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             margin-bottom: 15px;
//         }

//         .product h3 {
//             color: #333;
//             font-size: 18px;
//             margin: 10px 0;
//         }

//         .product button {
//             background-color: BLACK;
//             color: #fff;
//             border: none;
//             padding: 8px;
//             cursor: pointer;
//             border-radius: 4px;
//             width: 60%;
//             font-size: 14px;
//             margin-top: 10px;
//         }

//         .product button:hover {
//             background-color: BLACK;
//         }

//         #viewAllBtn {
//             background-color: white;
//             color: #333;
//             margin-top: 20px;
//             width: auto;
//             display: block;
//             margin: 20px auto;
//         }

//         #viewAllBtn:hover {
//             background-color: black;
//             color: #f5f5f5;
//         }

//         #midBanner {
//             text-align: center;
//             margin: 20px 0;
//         }

//         #midBanner img {
//             max-width: 100%;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         #luxuryCategories {
//             text-align: center;
//             margin: 20px 0;
//         }

//         #luxuryCategories h1 {
//             color: #333;
//             font-size: 24px;
//             margin-bottom: 20px;
//         }

//         #lux {
//             display: flex;
//             justify-content: space-around;
//             align-items: flex-start;
//             flex-wrap: wrap;
//             margin: 20px;
//         }

//         .luxItem {
//             margin-bottom: 20px;
//             box-sizing: border-box;
//             width: 300px;
//             /* Fixed width for better alignment */
//         }

//         .luxItem img {
//             max-width: 100%;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             margin-bottom: 15px;
//         }

//         #bella {
//             display: flex;
//             justify-content: space-around;
//             align-items: center;
//             margin-bottom: 20px;
//         }

//         #bella img {
//             max-width: 100%;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         #videoSection {
//             width: 100%;
//             position: relative;
//         }

//         video {
//             width: 100%;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         #videoText {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             text-align: center;
//             color: #fff;
//             font-size: 24px;
//         }

//         #videoButton {
//             background-color: WHITE;
//             color: BLACK;
//             border: none;
//             padding: 10px;
//             cursor: pointer;
//             border-radius: 4px;
//             font-size: 16px;
//             margin-top: 20px;
//         }

//         #checkoutModal {
//             display: none;
//             position: fixed;
//             z-index: 1;
//             left: 0;
//             top: 0;
//             width: 100%;
//             height: 100%;
//             overflow: auto;
//             background-color: rgba(0, 0, 0, 0.7);
//             padding-top: 50px;
//         }

//         #checkoutForm {
//             background-color: #fefefe;
//             margin: 5% auto;
//             padding: 20px;
//             border: 1px solid #888;
//             width: 80%;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             border-radius: 8px;
//         }

//         #checkoutForm h2 {
//             text-align: center;
//             color: #333;
//         }

//         #checkoutForm label {
//             display: block;
//             margin: 10px 0;
//             color: #333;
//         }

//         #checkoutForm input {
//             width: 100%;
//             padding: 8px;
//             margin: 5px 0 15px;
//             display: inline-block;
//             border: 1px solid #ccc;
//             box-sizing: border-box;
//             border-radius: 4px;
//         }

//         #checkoutForm button {
//             background-color: BLACK;
//             color: #fff;
//             border: none;
//             padding: 10px;
//             cursor: pointer;
//             border-radius: 4px;
//             font-size: 16px;
//         }

//         #checkoutForm button:hover {
//             background-color: #333;
//         }

//         .close {
//             position: absolute;
//             top: 20px;
//             right: 20px;
//             font-size: 20px;
//             color: #333;
//             cursor: pointer;
//         }

//         @media (max-width: 768px) {
//             #products {
//                 justify-content: center;
//             }

//             .product {
//                 width: 80%;
//             }

//             #viewAllBtn {
//                 width: 80%;
//             }

//             #lux .luxItem {
//                 flex: 0 0 100%;
//             }

//             #bella {
//                 flex-direction: column;
//             }
//         }
//     </style>
// </head>

// <body>
//     <nav>
//         <div class="navbar">
//             <i class='bx bx-menu'></i>
//             <div class="logo"><a href="./index.html"><img
//                         src="https://bellavitaorganic.com/cdn/shop/files/Bella_Vita_Logo_360_E_2x_White.png?height=30&v=1689597318"/></a>
//             </div>
//             <div class="nav-links">
//                 <div class="sidebar-logo">
//                     <span class="logo-name"></span>
//                     <i class='bx bx-x'></i>
//                 </div>
//                 <ul class="links">
//                     {/* <!-- <li><a href="./index.html">Home</a></li> --> */}
//                     <li><a href="./crazyDeal.html">CRAZY DEALS</a></li>
//                     <li><a href="./shopall.html">SHOP ALL</a></li>
//                     <li><a href="./bestSellers.html">BESTSELLERS</a></li>
//                     <li><a href="./perfume.html">PERFUMES</a></li>
//                     <li><a href="./bathAndBody.html">BATH & BODY</a></li>
//                     <li><a href="./new.html">NEW ARRIVALS</a></li>
//                     <li><a href="./skin.html">SKINCARE</a></li>
//                     <li><a href="./gifting.html">GIFTING</a></li>
//                     <li><a id="login" href="./login.html">Login</a></li>
//                     <li><a href="./cart.html">Cart</a></li>
//                 </ul>
//             </div>
//             <div class="search-box">
//                 <i class='bx bx-search'></i>
//                 <div class="input-box">
//                     <input type="text" placeholder="Search..."/>
//                 </div>
//             </div>
//         </div>
//     </nav>
//     <div id="header">
//         <a href="./shopall.html">
//         <img src="https://bellavitaorganic.com/cdn/shop/files/1920_x_720_2f7de478-ad9a-4e44-9444-1c5f5558118c.jpg?v=1704887849&width=1920"
//             alt="Header Image"/>
//         </a>
//     </div>

//     <div id="products">
//         <div class="product">
//             <img src="https://bellavitaorganic.com/cdn/shop/files/ManPerfumeGiftSet-01_2_eb660165-6da9-4e14-bdf0-fabd68113a00.jpg?v=1696082809&width=400"
//                 alt="OUD GOLD - 100ml"/>
//             <h3>Luxury Perfume Gift Set For Men - 4 x 20mls</h3>
//             <button class="add-to-cart">Add to Cart</button>
//         </div>
//         <div class="product">
//             <img src="https://bellavitaorganic.com/cdn/shop/files/CEOMAN_3b131d25-7893-4ad5-a17a-4b3de9a3ebd3.jpg?v=1693290059&width=400"
//                 alt="CEOMAN"/>
//             <h3>CEO Man Luxury Perfume - 100ml</h3>
//             <button class="add-to-cart">Add to Cart</button>
//         </div>

//         <div class="product">
//             <img src="https://bellavitaorganic.com/cdn/shop/files/OUDGold-01.jpg?v=1698055234&width=400" alt="OUDGold">/
//             <h3>OUD GOLD - 100ml</h3>
//             <button class="add-to-cart">Add to Cart</button>
//         </div>

//         <div class="product">
//             <img src="https://bellavitaorganic.com/cdn/shop/files/WomanPerfumeGiftSet_1.jpg?v=1695204304&width=400"
//                 alt="WomanPerfumeGiftSet"/>
//             <h3>Luxury Perfume Gift Set For Women - 4 x 20mls</h3>
//             <button class="add-to-cart">Add to Cart</button>
//         </div>


//     </div>

//     <button id="viewAllBtn">VIEW ALL</button>

//     <div id="midBanner">
//         <img src="https://bellavitaorganic.com/cdn/shop/files/Offer-Banner-2.jpg?v=1695733175&width=1920"
//             alt="Mid Banner"/>
//     </div>

//     <div id="luxuryCategories">
//         <h1>LUXURY CATEGORIES</h1>
//         <div id="lux">

//             <div class="luxItem">
//                 <img src="https://bellavitaorganic.com/cdn/shop/files/intense_1.jpg?v=1702643236&width=300"
//                     alt="Luxury Item 1"/>
//                 <h3>LUXURY PERFUMES</h3>
//             </div>
//             <div class="luxItem">
//                 <img src="https://bellavitaorganic.com/cdn/shop/files/3_c364391f-45a0-4f2f-8ab2-babe0720a752.jpg?v=1691575834&width=300"
//                     alt="Luxury Item 2"/>
//                 <h3>BODY WASHES</h3>
//             </div>
//             <div class="luxItem">
//                 <img src="https://bellavitaorganic.com/cdn/shop/files/lotion-new.jpg?v=1693994675&width=300"
//                     alt="Luxury Item 3"/>
//                 <h3>BODY LOTIONS</h3>
//             </div>
//             <div class="luxItem">
//                 <img src="https://bellavitaorganic.com/cdn/shop/files/p4.jpg?v=1691475245&width=300"
//                     alt="Luxury Item 4"/>
//                 <h3>BODY DEOS</h3>
//             </div>
//             <div class="luxItem">
//                 <img src="https://bellavitaorganic.com/cdn/shop/files/Artboard_4_copy_05b3b2ed-5440-4463-b119-bedcd60ed5c1.jpg?v=1700227583&width=300"
//                     alt="Luxury Item 5"/>
//                 <h3>GIFT SETS</h3>
//             </div>
//         </div>

//         <div id="bella">

//             <div>
//                 <img src="https://bellavitaorganic.com/cdn/shop/files/Luxe-Perfumes_1.jpg?v=1696580210&width=750"/>
//             </div>
//             <div>
//                 <img
//                     src="https://bellavitaorganic.com/cdn/shop/files/2_5_e74c0ae4-7b10-49bc-a280-4e9bdde7ce24.jpg?v=1696345483&width=400"/>
//             </div>
//         </div>

//         <h1>CRAZY DEALS</h1>
//         <div id="deals">

//             <div id="lux">
//                 <div>
//                     <img src="https://bellavitaorganic.com/cdn/shop/files/678-548.jpg?v=1697537263&width=500"/>
//                     <h3>SELF LOVE KIT</h3>
//                 </div>
//                 <div>
//                     <img
//                         src="https://bellavitaorganic.com/cdn/shop/files/678-548_315e5e2b-4e68-4eca-8c10-db87beb787db.jpg?v=1700215543&width=500"/>
//                     <h3>FRESH ALL DAY COMBO</h3>
//                 </div>
//                 <div>
//                     <img src="https://bellavitaorganic.com/cdn/shop/files/678-548_1.jpg?v=1701774461&width=500"/>
//                     <h3>BADE MIYA CHHOTE MIYA</h3>
//                 </div>
//             </div>
//             <div id="videoSection">
//                 <video src="https://cdn.shopify.com/videos/c/o/v/478dfd30e1114a6a9fe7a4c4d1b1ffa4.mp4" loop="" muted=""
//                     playsinline="" autoplay=""></video>
//                 <div id="videoText">
//                     <h1>DISCOVER THE ART OF PERFUMERY</h1>
//                     <h2>Our formulations have proven efficacy, contain certified ingredients only and are 100% cruelty
//                         free</h2>

//                     <button id="videoButton">FRAGRANCES</button>
//                 </div>
//             </div>
//         </div>

// {/* 
//         <!-- <a id="checkoutLink" href="#">Go to Checkout</a> --> */}

// {/* 
//         <!-- <div id="checkoutModal" style="display: none;">
//             <div id="checkoutForm">
//                 <h2>Checkout</h2>
//                 <label for="firstName">First Name:</label>
//                 <input type="text" id="firstName" required>

//                 <label for="lastName">Last Name:</label>
//                 <input type="text" id="lastName" required>

//                 <label for="email">Email:</label>
//                 <input type="email" id="email" required>

//                 <label for="address">Address:</label>
//                 <input type="text" id="address" required>

//                 <button onclick="submitOrder()">Submit Order</button>
//             </div> --> */}
//         </div>
//         <footer>
//             <div class="customer-footer">
//                 <div class="cust1">
//                     <p class="cust-first">BEST SELLER</p>
//                     <p class="cust-Second">Ultimate Perfume Box</p>
//                     <p class="cust-Second">Perfume Gift Set For Men</p>
//                     <p class="cust-Second">Perfume Gift Set For</p>
//                     <p class="cust-Second">Women</p>
//                     <p class="cust-Second">Under Eye Cream for</p>
//                     <p class="cust-Second">Dark Circles</p>
//                     <p class="cust-Second">Perfume For Men</p>
//                     {/* <!-- <p class="cust-Second">Perfume For Women</p>
//                 <p class="cust-Second">Unisex Perfume</p> --> */}

//                 </div>
//                 <div class="cust1">
//                     <p class="cust-first">INFORMATION</p>
//                     <p class="cust-Second">Blogs</p>
//                     <p class="cust-Second">Newsroom</p>
//                     <p class="cust-Second">Terms & Conditions</p>
//                     <p class="cust-Second">Privacy Policy</p>
//                     <p class="cust-Second">Refund and Return</p>
//                     <p class="cust-Second">Shipping Policy</p>
//                     <p class="cust-Second">Bulk Order - GST Invoice</p>

//                 </div>
//                 <div class="cust1">
//                     <p class="cust-first">SUPPORT</p>
//                     <p class="cust-Second">About Us</p>
//                     <p class="cust-Second">Contact Us</p>
//                     <p class="cust-Second">Order Tracking</p>
//                     <p class="cust-Second">All Products</p>
//                     <p class="cust-Second">FAQ</p>
//                     <p class="cust-Second">Sitemap</p>

//                 </div>
//                 <div class="cust1">
//                     <p class="cust-first">Exclusive</p>
//                     <p class="cust-Second"><input type="email" placeholder="Enter Email"/></p>
//                     <p class="cust-Second">Sign up here to get the latest news,</p>
//                     <p class="cust-Second">Aupdates and special offers delivered to your inbox.</p>
//                     <p class="cust-Second">shop@bellavitaorganic.com</p>
//                     <p class="cust-Second">Timing: 10:00 AM to 7:00</p>
//                     <p class="cust-Second">+91-9311732440</p>
//                 </div>
//             </div>
//         </footer>

//         <footer>
//             <div class="end">
//                 <h1>
//                     <b style="color: white;">Code Written By #Team Quantum Nexus</b>
//                 </h1>
//             </div>
//         </footer>
//         <script>
//             let loginBtn = document.querySelector("#login");
//             let isAuth = localStorage.getItem("isAuth") || "Not Authenticated"
//             if (isAuth !== "Authenticated") {
//                 loginBtn.innerText = "Login";
//             } else {
//                 loginBtn.innerText = "Logout";
//                 loginBtn.addEventListener("click", function () {
//                     localStorage.setItem("isAuth", "Not Authenticated");
//                     window.location.reload();
//                 })
//             }

//             let viewAllBtn = document.querySelector("#viewAllBtn");
//             viewAllBtn.addEventListener("click",function(){
//                 window.location.href = "./bestSellers.html";
//             })
//             const cart = [];


//             function addToCart(productName) {
//                 cart.push({ product: productName });
//                 alert('Item added to cart!');
//                 addToCart(el);
//             }


//              function openCheckoutModal() {
//                document.getElementById('checkoutModal').style.display = 'block';
//             }


//             function closeCheckoutModal() {
//                 document.getElementById('checkoutModal').style.display = 'none';
//              }

//             function submitOrder() {
//                 alert('Order submitted successfully!');
//                 closeCheckoutModal();
//             }

//              document.getElementById('checkoutLink').addEventListener('click', openCheckoutModal);

//              const addToCartButtons = document.querySelectorAll('.add-to-cart');
//              addToCartButtons.forEach(button => {
//                button.addEventListener('click', () => {
//                   const productName = button.parentNode.querySelector('h3').innerText;
//                    addToCart(productName);
//               });
//             });

//             function addToCart(el) {
//              console.log(el);
//                 let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
//                 cartArr.push(el);
//                  localStorage.setItem("cartItems", JSON.stringify(cartArr));
//           }
//         </script>
// </body>

// </html>
// <script src="./navbar.js"></script>