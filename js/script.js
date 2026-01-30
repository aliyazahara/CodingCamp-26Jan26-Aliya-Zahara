const form = document.getElementById('messageForm');
const btnSubmit = document.getElementById('btnSubmit');

// ngecek input terisi semua atau ga
function validateForm() {
    const nama = document.getElementById('inputNama').value;
    const tgl = document.getElementById('inputTgl').value;
    const jkChecked = document.querySelector('input[name="jk"]:checked');
    const pesan = document.getElementById('inputPesan').value;

    if(nama.trim() !== "" && tgl !== "" && jkChecked !== null && pesan.trim() !== "") {
        // klo lengkap, tombol hidup
        btnSubmit.disabled = false;
        btnSubmit.classList.remove('cursor-not-allowed', 'opacity-50');
        btnSubmit.classList.add('bg-gray-300', 'hover:bg-gray-400');
    } else {
        // klo ga lengkap, tombol mati
        btnSubmit.disabled = true;
        btnSubmit.classList.add('cursor-not-allowed', 'opacity-50');
        btnSubmit.classList.remove('bg-gray-300', 'hover:bg-gray-400');
    }
}

form.addEventListener('input', validateForm)

// nampilkan output
function submitForm() {
    const nama = document.getElementById('inputNama').value;
    const tgl = document.getElementById('inputTgl').value;
    const jk = document.querySelector('input[name="jk"]:checked').value;
    const pesan = document.getElementById('inputPesan').value;

    document.getElementById('resTime').innerText = " " + new Date().toLocaleDateString();
    document.getElementById('resNama').innerText = " " + nama;
    document.getElementById('resTgl').innerText = " " + tgl;
    document.getElementById('resJK').innerText = " " + jk;
    document.getElementById('resPesan').innerText = " " + pesan;
}

welcomeMessage()

function welcomeMessage() {
    let userResponse = prompt("Selamat Datang di Bunayya Academy! Siapa nama Anda?");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "";
    }

    const welcomeElement = document.getElementById("welcome-speech");
    if (welcomeElement) {
        welcomeElement.classList.remove("animate-fade-in-down");
        welcomeElement.innerText = `Ahlan Wa Sahlan ${userResponse}, Selamat Datang di Bunayya Academy!`;
        void welcomeElement.offsetWidth; 
        welcomeElement.classList.add("animate-fade-in-down");
    }
}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 10);
});