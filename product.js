document.addEventListener("DOMContentLoaded", function() {
    // JSON data
    const data = {
      "hero": {
        "video": "https://cdn.pixabay.com/video/2016/08/08/4315-178218581_large.mp4",
        "title": "Milk is a good source of nutrients and contains water, protein, fat, carbohydrates, vitamins, and minerals",
        "subtitle": "Crafting fresh, Milk, Paneer, Curd, and Ghee, Butter, ice-cream made from milk",
        "buttonText": "discover menu"
      },
      "products": [
        {
          "name": "Amrit'm Curd",
          "image": "dahi1.jpg",
          "tags": ["Sweet Curd", "Whole Milk curd", "SugarFree Sweet Curd"]
        },
        {
          "name": "Amrit'm Lassi",
          "image": "lassi.jpg",
          "tags": ["Aam lassi", "Kesar Lassi", "Masala Lassi"]
        },
        {
          "name": "Amrit'm Butter",
          "image": "butter.jpg",
          "tags": ["Butter", "Salted Butter"]
        },
        {
          "name": "Amrit'm Paneer",
          "image": "paneer1.jpg",
          "tags": ["Paneer"]
        },
        {
          "name": "Amrit'm Ice-Cream",
          "image": "ice-cream1.jpg",
          "tags": ["Vanilla Ice-Cream", "Kulfi"]
        },
        {
          "name": "Amrit'm Ghee",
          "image": "gheep.jpg",
          "tags": ["Pure Ghee"]
        }
      ]
    };
  
    // Insert Hero Section
    const heroContainer = document.querySelector('.hero');
    heroContainer.innerHTML = `
      <video class="vjs-tech w-100" id="vjs_video_3_html5_api" muted autoplay loop>
        <source src="${data.hero.video}" type="video/mp4">
      </video>
      <div class="text">
        <div class="left">
          <h1 class="fs-4">${data.hero.title}</h1>
          <h5>${data.hero.subtitle}</h5>
          <button class="callto">${data.hero.buttonText}</button>
        </div>
      </div>
    `;
  
    // Insert Products Section
    const productsContainer = document.querySelector('.products-container');
    let productHtml = '';
    
    data.products.forEach(product => {
      productHtml += `
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="single">
            <div class="img-container">
              <img src="${product.image}" alt="product image" class="img-fluid" />
            </div>
            <h2 class="mt-2">${product.name}</h2>
            <div class="tags mt-2">
              ${product.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    });
  
    productsContainer.innerHTML = productHtml;
  });
  