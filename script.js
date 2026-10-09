/* =========================================
   BOOTNIKES JAVASCRIPT
========================================= */


/* =========================================
   PRODUCT DATABASE
========================================= */

const products = [

    {
        id: 1,
        name: "Nike Mercurial Superfly 11 Elite",
        category: "mercurial",
        type: "Elite • FG",
        price: 485000,
        tag: "Best Seller",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5b145286-3559-4c43-84cc-89fc580765dd/ZM+SUPERFLY+11+ELITE+FG.png"
    },

    {
        id: 2,
        name: "Nike Mercurial Vapor 17 Elite",
        category: "mercurial",
        type: "Elite • FG",
        price: 455000,
        tag: "Speed",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4299b7a3-93c0-4f78-bfad-7c43b6448b7a/VAPOR+17+ELITE+FG.png"
    },

    {
        id: 3,
        name: "Nike Phantom 6 Low Elite",
        category: "phantom",
        type: "Elite • FG",
        price: 475000,
        tag: "Precision",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/178f620f-304d-471d-a80b-75e7f55d0ae6/PHANTOM+6+LOW+ELITE+FG+EH.png"
    },

    {
        id: 4,
        name: "Nike Mercurial Superfly 11",
        category: "mercurial",
        type: "Elite • FG",
        price: 485000,
        tag: "New",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8637e399-077e-4ba4-8823-4658fb9ced7b/ZM+SUPERFLY+11+ELITE+FG+NBY.png"
    },

    {
        id: 5,
        name: "Nike Phantom 6 Low Elite AG",
        category: "phantom",
        type: "Elite • AG",
        price: 475000,
        tag: "AG Pro",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dff2258f-8674-41f4-af56-1ece9658fcf8/PHANTOM+6+LOW+ELITE+AG-PRO+EH.png"
    },

    {
        id: 6,
        name: "Nike Mercurial Superfly 11 Elite",
        category: "mercurial",
        type: "Elite • FG",
        price: 495000,
        tag: "Just In",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7510290-a3e2-44e8-b2f2-94d6a0679c3b/ZM+SUPERFLY+11+ELITE+FG+SK.png"
    },

    {
        id: 7,
        name: "Nike Phantom 6 Low Academy",
        category: "phantom",
        type: "Academy • FG/MG",
        price: 185000,
        tag: "Value",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cd1a105a-33b8-4936-b2b1-f5652f5f3765/PHANTOM+6+LOW+ACAD+FG%2FMG.png"
    },

    {
        id: 8,
        name: "Nike Phantom 6 Low Pro",
        category: "phantom",
        type: "Pro • TF",
        price: 265000,
        tag: "Turf",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/597fb12c-1dc3-4bad-b0ae-64d2107aced0/REACTX+PHANTOM+6+LOW+PRO+TF.png"
    },

    {
        id: 9,
        name: "Nike Phantom 6 High Academy",
        category: "phantom",
        type: "Academy • MG",
        price: 195000,
        tag: "Comfort",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/15e989b8-2826-4a5e-a0e6-72c57fed1243/PHANTOM+6+HIGH+ACAD+FG%2FMG.png"
    },

    {
        id: 10,
        name: "Nike Junior Phantom 6 Pro",
        category: "phantom",
        type: "Pro • MG",
        price: 145000,
        tag: "Juniors",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9f27e47d-eb9e-42a2-a729-090ede347089/JR+PHANTOM+6+LOW+PRO+FG%2FMG+EH.png"
    },

    {
        id: 11,
        name: "Nike Junior Vapor 17 Pro",
        category: "mercurial",
        type: "Pro • FG",
        price: 175000,
        tag: "Juniors",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be229e62-78eb-44ae-82ba-8043456f3360/JR+VAPOR+17+PRO+FG+SK.png"
    },

    {
        id: 12,
        name: "Nike Vapor 17 Elite",
        category: "mercurial",
        type: "Elite • FG",
        price: 455000,
        tag: "New Colour",
        image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_700,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/007d54db-bd1c-41c1-84aa-79994b54af82/VAPOR+17+ELITE+FG.png"
    }

];


/* =========================================
   GALLERY
========================================= */

const galleryImages = products;


/* =========================================
   NAIRA FORMAT
========================================= */

function formatNaira(amount) {

    return new Intl.NumberFormat(
        "en-NG",
        {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0
        }
    ).format(amount);

}


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(filter = "all") {

    const container =
        document.getElementById("products");

    let filteredProducts = products;


    if (filter !== "all") {

        if (filter === "elite") {

            filteredProducts =
                products.filter(product =>
                    product.type
                        .toLowerCase()
                        .includes("elite")
                );

        } else {

            filteredProducts =
                products.filter(product =>
                    product.category === filter
                );

        }

    }


    container.innerHTML = "";


    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product";


        card.innerHTML = `

            <div class="product-image">

                <span class="badge">
                    ${product.tag}
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <div class="product-meta">
                    ${product.type}
                </div>


                <div class="price-row">

                    <span class="price">
                        ${formatNaira(product.price)}
                    </span>

                    <button
                        class="add"
                        onclick="addToCart(${product.id})">

                        +

                    </button>

                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   FILTER PRODUCTS
========================================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );


            button.classList.add("active");


            displayProducts(
                button.dataset.filter
            );

        });

    });


/* =========================================
   GALLERY
========================================= */

function displayGallery() {

    const gallery =
        document.getElementById("gallery");


    gallery.innerHTML = "";


    galleryImages.forEach(
        (product, index) => {

            const item =
                document.createElement("figure");

            item.className =
                "gallery-item";


            item.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <figcaption class="gallery-label">

                    ${String(index + 1).padStart(2, "0")}
                    •
                    ${product.name}

                </figcaption>

            `;


            gallery.appendChild(item);

        }
    );

}


/* =========================================
   SHOPPING CART
========================================= */

let cart = [];


function addToCart(id) {

    const product =
        products.find(item =>
            item.id === id
        );


    if (!product) return;


    const existing =
        cart.find(item =>
            item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();


    openCart();

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");


    const cartItems =
        document.getElementById("cartItems");


    const cartTotal =
        document.getElementById("cartTotal");


    const quantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    cartCount.textContent =
        quantity;


    cartTotal.textContent =
        formatNaira(total);


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty">
                Your bag is empty.
            </p>

        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(item => {

        const element =
            document.createElement("div");

        element.className =
            "cart-item";


        element.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ${item.quantity}
                    ×
                    ${formatNaira(item.price)}
                </p>

            </div>


            <button
                class="remove"
                onclick="removeFromCart(${item.id})">

                Remove

            </button>

        `;


        cartItems.appendChild(element);

    });

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(id) {

    cart =
        cart.filter(item =>
            item.id !== id
        );


    updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    document
        .getElementById("cart")
        .classList.add("open");


    document
        .getElementById("cartOverlay")
        .classList.add("show");

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("open");


    document
        .getElementById("cartOverlay")
        .classList.remove("show");

}


document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


document
    .getElementById("cartOverlay")
    .addEventListener(
        "click",
        closeCart
    );


/* =========================================
   PURCHASE QUOTE
========================================= */

document
    .getElementById("checkout")
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert(
                    "Please add a football boot first."
                );

                return;

            }


            const productsText =
                cart.map(item =>
                    `${item.name} x${item.quantity}`
                ).join(", ");


            document
                .getElementById("message")
                .value =
                `I want to purchase: ${productsText}`;


            closeCart();


            document
                .getElementById("contact")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================
   QUOTE FORM
========================================= */

document
    .getElementById("quoteForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                    .value;


            const phone =
                document.getElementById("phone")
                    .value;


            const surface =
                document.getElementById("surface")
                    .value;


            const size =
                document.getElementById("size")
                    .value;


            const message =
                document.getElementById("message")
                    .value;


            const whatsappMessage =
                `Hello BOOTNIKES!

My name is ${name}.

Phone:
${phone}

Boot Size:
${size}

Playing Surface:
${surface}

Boot I'm interested in:
${message}

Please send me a quotation.`;


            const encoded =
                encodeURIComponent(
                    whatsappMessage
                );


            /*
              Replace 2348000000000
              with your real WhatsApp number.

              Example:
              2348012345678
            */

            const whatsappNumber =
                "2348000000000";


            const url =
                `https://wa.me/${whatsappNumber}?text=${encoded}`;


            document
                .getElementById("formMessage")
                .textContent =
                "Opening WhatsApp...";


            window.open(
                url,
                "_blank"
            );

        }
    );


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.getElementById("menuBtn");


const navigation =
    document.getElementById("nav");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle("open");

    }
);


document
    .querySelectorAll("#nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================================
   INITIALIZE WEBSITE
========================================= */

displayProducts();

displayGallery();

updateCart();