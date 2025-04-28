document.addEventListener("DOMContentLoaded", () => {
    // Lade den Header
    fetch('/partials/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });

    // Lade die Sidebar
    fetch('/partials/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });

        // Footer laden
        fetch('/partials/footer.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('beforeend', data); // Footer am Ende einfügen
            });
    });
