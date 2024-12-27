function buscarProducto() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productos = document.querySelectorAll('.product-card');

    productos.forEach(producto => {
        const nombre = producto.getAttribute('data-name').toLowerCase();
        if (nombre.includes(input)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}
