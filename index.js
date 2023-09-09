simplyCountdown('.simply-countdown', {
    year: 2030, // required
    month: 7, // required
    day: 22, // required
    hours: 8, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'day', plural: 'days' },
        hours: { singular: 'hour', plural: 'hours' },
        minutes: { singular: 'minute', plural: 'minutes' },
        seconds: { singular: 'second', plural: 'seconds' }
    },
})

const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');

offcanvas.addEventListener('show.bs.offcanvas', function () {
    stickyTop.style.overflow = 'visible';
})

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
    stickyTop.style.overflow = 'hidden';
})

const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scroll(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
    window.onscroll = function () {
        rootElement.style.scrollBehavior = 'smooth';

        playAudio();

    }
}

function playAudio() {
    song.volume = 0.1;
    audioIconWrapper.style.display = 'flex';
    song.play();
    isPlaying = true;
}
audioIconWrapper.onclick = function () {
    if (isPlaying) {
        song.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    } else {
        song.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
}


disableScroll();

window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        // Cek apakah nama, jumlah, dan status telah diisi
        const nama = document.getElementById('nama').value;
        const jumlah = document.getElementById('jumlah').value;
        const status = document.getElementById('status').value;

        if (!nama || !jumlah || status === "Pilih salah satu") {
            e.preventDefault(); // Mencegah pengiriman formulir jika ada data yang kosong
            alert('Tolong di lengkapi euy');
        } else {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            })
                .then(() => {
                    alert("Terima kasih anda telah peduli kepada saya untuk menyarikan jodoh buat saya 😄");
                })
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan elemen yang ingin dianimasikan
    const animateElement = document.querySelector(".animate-on-load");

    // Tambahkan class "active" untuk memicu animasi
    animateElement.classList.add("active");
});

const urlParms = new URLSearchParams(window.location.search);
const nama = urlParms.get('n') || '';
const pronoun = urlParms.get('p') || 'Bapak/Ibu/Saudara/i';

const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;

window.addEventListener("load", function () {
    alert("Selamat datang di Zaputlah Wedding! Terima kasih telah mengunjungi situs kami.");

    var namaPenerima = prompt("Silakan masukkan nama Anda:");
    var hubunganPenerima;

    do {
        hubunganPenerima = prompt("Silakan masukkan hubungan Anda dengan pasangan (contoh: Bapak/Ibu/Saudara/i):");

        if (hubunganPenerima !== null && hubunganPenerima.trim() === "") {
            alert("Hubungan tidak boleh kosong. Silakan masukkan hubungan Anda.");
        }
    } while (hubunganPenerima === null || hubunganPenerima.trim() === "");


    // Ganti teks dalam elemen span dengan nama dan hubungan yang dimasukkan
    document.getElementById("nama").textContent = namaPenerima;
    document.getElementById("hubunganPenerima").textContent = hubunganPenerima;

    alert("Halo, " + hubunganPenerima + " " + namaPenerima + "! Selamat datang di Zaputlah Wedding!");
});