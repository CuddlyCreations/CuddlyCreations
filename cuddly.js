function openModal(productName) {
    const modal = document.getElementById("myModal");
    modal.style.display = "flex"; // Show modal
    modal.setAttribute("data-product-name", productName); // Store product name
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide modal
}

function confirmOrder() {
    const modal = document.getElementById("myModal");
    const quantity = document.getElementById("quantityInput").value;
    const productName = modal.getAttribute("data-product-name");
    const whatsappNumber = "254723424851";
    const message = `<p><b>This text is bold</b></p>Hello, I want to order ${quantity} of these ${productName} from you which I saw in your website.`;

    // Redirect to WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink; // Open WhatsApp link
}
