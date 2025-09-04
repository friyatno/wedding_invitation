export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Friyatno Halomoan Rumapea',
            child: 'Putra ke 2',
            father: 'Anton Renatal Rumapea',
            mother: 'Mudarawati Marpaung',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Charef Loveanna Pardede',
            child: 'Putri ke 3',
            father: 'Parningotan Pardede',
            mother: 'Romana Repelita Sinaga',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'September',
            date: '27',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Oktober',
            date: '04',
            day: 'Sabtu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Gembira, Dusun 9 Desa Kuala Lama Kec. Pantai Cermin, Kab.Serdang Bedagai, Sumatera Utara'
    },

    link: {
        calendar: 'https://calendar.app.google/iCuXHPjhFvEucaiK6',
        map: 'https://maps.app.goo.gl/b8kDdXbJdTz5UB6p9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Charef Loveanna Pardede',
            icon: './src/assets/images/bca.png',
            rekening: '8075296947'
        },
        {
            id: 2,
            name: 'Friyatno Halomoan Rumapea',
            icon: './src/assets/images/bri.png',
            rekening: '082167398411'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwizuGDEhRr8OtHjkFa3xa7nBMZ2Ck-l78qJZiB-DTJecCykfkGdbz5gzwH93F80bNCGw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
