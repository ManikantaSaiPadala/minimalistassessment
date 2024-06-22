document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const closeButton = document.querySelector('.close-button');
    const products = document.querySelectorAll('.product');
    const fixedImageUrl = "https://res.cloudinary.com/dwvzomy9w/image/upload/v1719039210/ss_-_1_j9bj3n.png";
    document.getElementById('modal-image').classList.add('fix-img');
    products.forEach(product => {
        product.addEventListener('click', () => {
            const title = product.querySelector('h4').textContent;
            const description = "This is a detailed description for " + title;
            const contents = ["10 hand hurting pieces of rassi bombs.", "Jilled with great pain.", "Raju's hopes."];
            const shippingTime = "Before Raju understands that his dreams do not matter.";

            document.getElementById('modal-image').src = fixedImageUrl;
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-shipping').textContent = shippingTime;

            const contentsList = document.getElementById('modal-contents');
            contentsList.innerHTML = "";
            contents.forEach(content => {
                const li = document.createElement('li');
                li.textContent = content;
                contentsList.appendChild(li);
            });

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});