document.addEventListener("DOMContentLoaded", () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            const productosContainer = document.getElementById("productos");
            data.forEach(producto => {
                let productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${producto.image}" alt="${producto.title}" onclick="mostrarDetalles('${producto.image}', '${producto.title}', decodeURIComponent('${encodeURIComponent(producto.description)}'), '${producto.price}')">
                    <h3>${producto.title}</h3>
                    <p>$${producto.price}</p>
                `;
                productosContainer.appendChild(productElement);
            });
        });
});

function mostrarDetalles(imgSrc, title, description, price) {
    document.getElementById("modal-img").src = imgSrc;
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-price").innerText = `$${price}`;
    document.getElementById("modal").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
