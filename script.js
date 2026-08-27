// Generate 15 card video palsu
const fakeTitles = [
    "Bokep Indo Pasutri Mesum", 
    "Crot Tante Jakarta", 
    "Gadis Hijab Diperkosa",
    "Abg Bandung Ngenah",
    "Main Bareng Kakak",
    "Cewek Cantik Crott",
    "Bokep Jepang Bergairah",
    "Mertua Genit",
    "Mahasiswi Yogya",
    "Ojol Coli",
    "Tikus Bandung",
    "Crot Animasi 3D",
    "Bokep Korea Panas",
    "Selingkuh Sambung",
    "Ngewe Di Hotel"
];

const grid = document.querySelector('.grid');
grid.innerHTML = '';

fakeTitles.forEach((title, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="thumb">🎬</div>
        <div class="info">
            <h4>${title}</h4>
            <span>${Math.floor(Math.random() * 1000)}K views • ${Math.floor(Math.random() * 5)} jam lalu</span>
        </div>
    `;
    grid.appendChild(card);
});

// Fitur pencarian dummy
document.querySelector('.search button').addEventListener('click', function() {
    const query = document.querySelector('.search input').value;
    alert(`Mencari: "${query}" - Lu tau sendiri ini cuma clone, boss!`);
});
