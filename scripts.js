document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'C#', 'JavaScript', 'Java'],
            datasets: [{
                label: 'Nivel de habilidad',
                data: [ 85, 80, 60, 50, 50],
                backgroundColor: 'rgba(106, 13, 173, 0.6)',
                borderColor: 'rgba(106, 13, 173, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});



function showContact(info) {
    document.getElementById('contact-info').textContent = info;
    document.getElementById('contact-info').style.display = 'block';
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.social-icons')) {
        document.getElementById('contact-info').style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".project img");
    document.addEventListener("click", function (event) {
        let clickedImage = null;
        images.forEach(img => {
            if (img === event.target) {
                clickedImage = img;
                img.classList.toggle("expanded");
            } else {
                img.classList.remove("expanded");
            }
        });
    });
});