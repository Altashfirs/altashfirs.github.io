document.addEventListener('DOMContentLoaded', function () {

    // --- Carousel Logic ---
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevButton = document.querySelector('.carousel-arrow.left');
    const nextButton = document.querySelector('.carousel-arrow.right');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        if (!carouselInner) return;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            updateCarousel();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.getAttribute('data-slide-index'));
            updateCarousel();
        });
    });

    // --- Pricing Logic ---
    const pricingData = {
        Residensial: {
            '1': { // 1 Bulan
                Internet: {
                    title: 'Internetan Super Lancar dan Unlimited!',
                    subtitle: 'Hemat Besar Mulai Rp 235.000 - Streaming Lancar, Gaming Tanpa Lag, Langganan Sekarang',
                    plans: [
                        {
                            name: 'Value', speed: '50 Mbps', originalSpeed: '30 Mbps', price: '260.850', period: '/ Bulan', vatText: 'Harga termasuk PPN 11%', image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_01_b1381ab385.webp', features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 40 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' }
                            ]
                        },
                        {
                            name: 'Fast', speed: '100 Mbps', originalSpeed: '50 Mbps', price: '278.610', period: '/ Bulan', vatText: 'Harga termasuk PPN 11%', image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_02_c4a886f673.webp', features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 100 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                            ]
                        },
                        {
                            name: 'Nova', speed: '200 Mbps', originalSpeed: '100 Mbps', price: '333.000', period: '/ Bulan', vatText: 'Harga termasuk PPN 11%', image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_03_8675fb4207.webp', features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 200 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                            ]
                        },
                        {
                            name: 'MyGamer', speed: '350 Mbps', originalSpeed: '250 Mbps', price: '444.000', period: '/ Bulan', vatText: 'Harga termasuk PPN 11%', image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_04_27524acf1c.webp', features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 350 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_7_300x_8_85c8d0bfc1.png', text: 'IP Public Static' },
                            ]
                        },
                        {
                            name: 'Prime', speed: '500 Mbps', price: '555.000', period: '/ Bulan', vatText: 'Harga termasuk PPN 11%', image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_05_ecbbdc7c9c.webp', features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' },
                            ]
                        },
                    ]
                },
                'Internet + TV': {
                    title: 'Paket Internet + TV Bulanan!',
                    subtitle: 'Hiburan lengkap untuk keluarga Anda setiap bulan.',
                    plans: [
                        {
                            name: 'Value Combo tv',
                            speed: '50 Mbps',
                            originalSpeed: '30 Mbps',
                            price: '355.200',
                            period: '/ Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_01_b1381ab385.webp',
                            channels: '65',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 40 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 3 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 30 Mbps' }
                            ]
                        },
                        {
                            name: 'Fast',
                            speed: '100 Mbps',
                            originalSpeed: '50 Mbps',
                            price: '371.850',
                            period: '/ Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_02_c4a886f673.webp',
                            channels: '76',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 100 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 5 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 50 Mbps' }
                            ]
                        },
                        {
                            name: 'Nova',
                            speed: '249 Mbps',
                            originalSpeed: '100 Mbps',
                            price: '427.350',
                            period: '/ Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_03_8675fb4207.webp',
                            channels: '76',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 200 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 7 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 100 Mbps' }
                            ]
                        },
                        {
                            name: 'MyGamer',
                            speed: '399 Mbps',
                            originalSpeed: '250 Mbps',
                            price: '538.350',
                            period: '/ Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_04_27524acf1c.webp',
                            channels: '76',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'Gratis Upgrade Speed 350 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 250 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 10 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_6_300x_8_9b6dbd3bb8.png', text: 'Akses langsung ke server game' }
                            ]
                        },
                        {
                            name: 'Prime',
                            speed: '649 Mbps',
                            originalSpeed: '500 Mbps',
                            price: '649.350',
                            period: '/ Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_05_ecbbdc7c9c.webp',
                            channels: '76',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' }
                            ]
                        }
                    ]
                },
            },
            '12': { // 12 Get 6
                'Internet': {
                    title: 'Paket Internet Promo 12+6 Bulan!',
                    subtitle: 'Nikmati internet cepat dengan promo bayar 12 bulan dapat 18 bulan.',
                    plans: [
                        {
                            name: 'Value',
                            speed: '30 Mbps',
                            originalSpeed: '30 Mbps',
                            price: '3.130.200',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_30_Mbps_AP_12_Bulan_8c7aa33703.png',
                            channels: null,
                            features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 3 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 30 Mbps' }
                            ]
                        },
                        {
                            name: 'Fast',
                            speed: '50 Mbps',
                            originalSpeed: '50 Mbps',
                            price: '3.330.000',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_50_Mbps_AP_12_Bulan_b0c52d6a6a.png',
                            channels: null,
                            features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 5 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 50 Mbps' }
                            ]
                        },
                        {
                            name: 'Nova',
                            speed: '100 Mbps',
                            originalSpeed: '100 Mbps',
                            price: '3.996.000',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_100_Mbps_AP_12_Bulan_93cfccc5eb.png',
                            channels: null,
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 7 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 100 Mbps' }
                            ]
                        },
                        {
                            name: 'MyGamer',
                            speed: '250 Mbps',
                            originalSpeed: '250 Mbps',
                            price: '5.328.000',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_250_Mbps_AP_12_Bulan_c3b1eaee28.png',
                            channels: null,
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_7_300x_8_85c8d0bfc1.png', text: 'IP Public Static' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 250 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 10 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_6_300x_8_9b6dbd3bb8.png', text: 'Akses langsung ke server game' }
                            ]
                        },
                        {
                            name: 'Prime',
                            speed: '500 Mbps',
                            originalSpeed: '500 Mbps',
                            price: '6.660.000',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_500_Mbps_AP_12_Bulan_27c4cf26b0.png',
                            channels: null,
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' }
                            ]
                        }
                    ]
                },
                'Internet + TV': {
                    title: 'Paket Internet + TV Promo 12+6 Bulan!',
                    subtitle: 'Nikmati internet cepat dan channel TV dengan promo bayar 12 bulan dapat 18 bulan.',
                    plans: [
                        {
                            name: 'Value',
                            speed: '30 Mbps',
                            originalSpeed: '30 Mbps',
                            price: '4.262.400',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_30_Mbps_AP_12_Bulan_8c7aa33703.png',
                            channels: '65 Channel',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 3 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 30 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'Fast',
                            speed: '50 Mbps',
                            originalSpeed: '50 Mbps',
                            price: '4.462.200',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_50_Mbps_AP_12_Bulan_b0c52d6a6a.png',
                            channels: '76 Channel',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 5 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 50 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'Nova',
                            speed: '100 Mbps',
                            originalSpeed: '100 Mbps',
                            price: '5.128.200',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_100_Mbps_AP_12_Bulan_93cfccc5eb.png',
                            channels: '76 Channel',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 7 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 100 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'MyGamer',
                            speed: '250 Mbps',
                            originalSpeed: '250 Mbps',
                            price: '6.460.200',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_250_Mbps_AP_12_Bulan_c3b1eaee28.png',
                            channels: '76 Channel',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_7_300x_8_85c8d0bfc1.png', text: 'IP Public Static' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 250 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 10 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_6_300x_8_9b6dbd3bb8.png', text: 'Akses langsung ke server game' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'Prime',
                            speed: '500 Mbps',
                            originalSpeed: '500 Mbps',
                            price: '7.792.200',
                            period: '/ 18 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_500_Mbps_AP_12_Bulan_27c4cf26b0.png',
                            channels: '76 Channel',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        }
                    ]
                }
            },
            '9': {
                'Internet': {
                    title: 'Paket Internet Promo 9+3 Bulan!',
                    subtitle: 'Nikmati internet cepat dengan promo bayar 9 bulan dapat 12 bulan.',
                    plans: [
                        {
                            name: 'Value',
                            speed: '30 Mbps',
                            originalSpeed: '30 Mbps',
                            price: '2.347.650',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_30_Mbps_AP_9_Get_3_af0240c916.png',
                            features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 3 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 30 Mbps' }
                            ]
                        },
                        {
                            name: 'Fast',
                            speed: '50 Mbps',
                            originalSpeed: '50 Mbps',
                            price: '2.497.500',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_50_Mbps_AP_9_Get_3_e14fb84b14.png',
                            features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 5 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 50 Mbps' }
                            ]
                        },
                        {
                            name: 'Nova',
                            speed: '100 Mbps',
                            originalSpeed: '100 Mbps',
                            price: '2.997.000',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_100_Mbps_AP_9_Get_3_35f74473b9.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 7 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 100 Mbps' }
                            ]
                        },
                        {
                            name: 'MyGamer',
                            speed: '250 Mbps',
                            originalSpeed: '250 Mbps',
                            price: '3.966.000',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_250_Mbps_AP_9_Get_3_fbd907b504.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_7_300x_8_85c8d0bfc1.png', text: 'IP Public Static' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 250 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 10 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_6_300x_8_9b6dbd3bb8.png', text: 'Akses langsung ke server game' }
                            ]
                        },
                        {
                            name: 'Prime',
                            speed: '500 Mbps',
                            originalSpeed: '500 Mbps',
                            price: '4.995.000',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_500_Mbps_AP_9_Get_3_25360d9eb7.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' }
                            ]
                        }
                    ]
                },
                'Internet + TV': {
                    title: 'Paket Internet + TV Promo 9+3 Bulan!',
                    subtitle: 'Nikmati internet cepat dan channel TV dengan promo bayar 9 bulan dapat 12 bulan.',
                    plans: [
                        {
                            name: 'Value',
                            speed: '30 Mbps',
                            originalSpeed: '30 Mbps',
                            price: '3.196.800',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_30_Mbps_AP_9_Get_3_af0240c916.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 3 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 30 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '65 Channel TV' }
                            ]
                        },
                        {
                            name: 'Fast',
                            speed: '50 Mbps',
                            originalSpeed: '50 Mbps',
                            price: '3.346.650',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_50_Mbps_AP_9_Get_3_e14fb84b14.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 5 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 50 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel TV' }
                            ]
                        },
                        {
                            name: 'Nova',
                            speed: '100 Mbps',
                            originalSpeed: '100 Mbps',
                            price: '3.846.150',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_100_Mbps_AP_9_Get_3_35f74473b9.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 7 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 100 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel TV' }
                            ]
                        },
                        {
                            name: 'MyGamer',
                            speed: '250 Mbps',
                            originalSpeed: '250 Mbps',
                            price: '4.845.150',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_250_Mbps_AP_9_Get_3_fbd907b504.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_7_300x_8_85c8d0bfc1.png', text: 'IP Public Static' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 250 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 10 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_6_300x_8_9b6dbd3bb8.png', text: 'Akses langsung ke server game' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel TV' }
                            ]
                        },
                        {
                            name: 'Prime',
                            speed: '500 Mbps',
                            originalSpeed: '500 Mbps',
                            price: '5.844.150',
                            period: '/ 12 Bulan',
                            vatText: 'Harga termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_500_Mbps_AP_9_Get_3_25360d9eb7.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel TV' }
                            ]
                        }
                    ]
                }
            },
            '5': {
                'Internet': {
                    title: 'Paket Internet Promo 5+1 Bulan!',
                    subtitle: 'Nikmati internet cepat dengan promo bayar 5 bulan dapat 6 bulan.',
                    plans: [
                        {
                            name: 'Value',
                            speed: '30 Mbps',
                            originalSpeed: '30 Mbps',
                            price: '1.304.250',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_30_Mbps_AP_5_Get_1_e064871879.png',
                            features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 3 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 30 Mbps' }
                            ]
                        },
                        {
                            name: 'Fast',
                            speed: '50 Mbps',
                            originalSpeed: '50 Mbps',
                            price: '1.387.500',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_50_Mbps_AP_5_Get_1_fb40f165bc.png',
                            features: [
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 5 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 50 Mbps' }
                            ]
                        },
                        {
                            name: 'Nova',
                            speed: '100 Mbps',
                            originalSpeed: '100 Mbps',
                            price: '1.655.000',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_100_Mbps_AP_5_Get_1_fb61462401.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE 6 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 7 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 100 Mbps' }
                            ]
                        },
                        {
                            name: 'MyGamer',
                            speed: '250 Mbps',
                            originalSpeed: '250 Mbps',
                            price: '2.220.000',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_250_Mbps_AP_5_Get_1_b554b510db.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE 6 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_7_300x_8_85c8d0bfc1.png', text: 'IP Public Static' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 250 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 10 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_6_300x_8_9b6dbd3bb8.png', text: 'Akses langsung ke server game' }
                            ]
                        },
                        {
                            name: 'Prime',
                            speed: '500 Mbps',
                            originalSpeed: '500 Mbps',
                            price: '2.775.000',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_500_Mbps_AP_5_Get_1_171d166fd2.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/VIDIO_LITE_LOGO_COLOR_5837fee53b.png', name: 'Vidio Lite', badge: 'FREE 6 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' }
                            ]
                        }
                    ]
                },
                'Internet + TV': {
                    title: 'Paket Internet + TV Promo 5+1 Bulan!',
                    subtitle: 'Nikmati internet cepat dan channel TV dengan promo bayar 5 bulan dapat 6 bulan.',
                    plans: [
                        {
                            name: 'Value',
                            speed: '30 Mbps',
                            originalSpeed: '30 Mbps',
                            price: '1.776.000',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_30_Mbps_AP_5_Get_1_e064871879.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 3 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 30 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '65 Channel' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'Fast',
                            speed: '50 Mbps',
                            originalSpeed: '50 Mbps',
                            price: '1.859.250',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_50_Mbps_AP_5_Get_1_fb40f165bc.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 5 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 50 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'Nova',
                            speed: '100 Mbps',
                            originalSpeed: '100 Mbps',
                            price: '2.136.750',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_100_Mbps_AP_5_Get_1_fb61462401.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 7 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 100 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'MyGamer',
                            speed: '250 Mbps',
                            originalSpeed: '250 Mbps',
                            price: '2.691.750',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_250_Mbps_AP_5_Get_1_b554b510db.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_7_300x_8_85c8d0bfc1.png', text: 'IP Public Static' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 250 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 10 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_6_300x_8_9b6dbd3bb8.png', text: 'Akses langsung ke server game' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        },
                        {
                            name: 'Prime',
                            speed: '500 Mbps',
                            originalSpeed: '500 Mbps',
                            price: '3.246.750',
                            period: '/ 6 Bulan',
                            vatText: 'Harga sudah termasuk PPN 11%',
                            image: 'https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_AP_500_Mbps_AP_5_Get_1_171d166fd2.png',
                            features: [
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/ott_vidio_platinum_ca7edd2947.png', name: 'Vidio Platinum', badge: 'FREE 12 BULAN' },
                                { type: 'ott', logo: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_12300x_8_078ebddde7.png', name: 'Genflix', badge: 'FREE 12 BULAN' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/bar_chart_06_Duotone_27c574d947.png', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/Asset_8_300x_8_9b201708d5.png', text: 'Include ONT/Modem' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tool_02_Solid_ecfa8766f0.png', text: 'Gratis Instalasi Rp500,000' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/zap_fast_Line_1955929a77.svg', text: 'DL & UL 1:1 up to 500 Mbps' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/phone_01_Duotone_f210990336.png', text: 'Ideal untuk 1 - 15 Device' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: '76 Channel' },
                                { type: 'normal', icon: 'https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg', text: 'Termasuk STB Android 12' }
                            ]
                        }
                    ]
                }
            }
        },
        'Bisnis SME': { // Assuming Business plans are monthly only for now
            '1': {
                Internet: {
                    title: 'Internet Cepat untuk Bisnis tanpa FUP',
                    subtitle: 'Mulai dari 700 ribuan bisa dapetin IP Public dan Customer service 24 jam',
                    plans: [
                        {
                            name: 'Business 50', speed: '50 Mbps', price: '703.740', period: '/ Bulan', vatText: 'Harga belum termasuk PPN 11%', image: 'https://placehold.co/292x164/fbcfe8/9d174d?text=Business+50Mbps', features: [
                                { type: 'normal', icon: 'https://placehold.co/20x20/cccccc/000000?text=I', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://placehold.co/20x20/cccccc/000000?text=CS', text: 'CS Prioritas 24 Jam' }
                            ]
                        },
                        {
                            name: 'Business 100', speed: '100 Mbps', price: '1.147.740', period: '/ Bulan', vatText: 'Harga belum termasuk PPN 11%', image: 'https://placehold.co/292x164/fbcfe8/9d174d?text=Business+100Mbps', features: [
                                { type: 'normal', icon: 'https://placehold.co/20x20/cccccc/000000?text=I', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://placehold.co/20x20/cccccc/000000?text=CS', text: 'CS Prioritas 24 Jam' }
                            ]
                        },
                        {
                            name: 'Business Pro 150', speed: '150 Mbps', price: '2.479.740', period: '/ Bulan', vatText: 'Harga belum termasuk PPN 11%', image: 'https://placehold.co/292x164/a5f3fc/0891b2?text=Business+Pro+150', features: [
                                { type: 'normal', icon: 'https://placehold.co/20x20/cccccc/000000?text=I', text: 'Internet UNLIMITED' },
                                { type: 'normal', icon: 'https://placehold.co/20x20/cccccc/000000?text=IP', text: 'IP Public Static' },
                            ]
                        },
                    ]
                },
                'Internet + TV': {
                    title: 'Paket Bisnis dengan Hiburan Lengkap',
                    subtitle: 'Fasilitas TV untuk ruang tunggu atau kantor Anda.',
                    plans: [] // No data provided for business + TV
                }
            },
            // Add empty placeholders for other durations to prevent errors
            '12': { Internet: { plans: [] }, 'Internet + TV': { plans: [] } },
            '9': { Internet: { plans: [] }, 'Internet + TV': { plans: [] } },
            '5': { Internet: { plans: [] }, 'Internet + TV': { plans: [] } }
        }
    };

    // Add placeholder data that references the main object AFTER it's declared
    // pricingData.Residensial['9'] = {
    //     Internet: { ...pricingData.Residensial['12'].Internet, title: 'Berlangganan 9 Bulan, Gratis 3 Bulan!' },
    //     'Internet + TV': { ...pricingData.Residensial['12']['Internet + TV'], title: 'Paket Combo, Bayar 9 Bulan Gratis 3 Bulan!' }
    // };
    // pricingData.Residensial['5'] = {
    //     Internet: { ...pricingData.Residensial['12'].Internet, title: 'Berlangganan 5 Bulan, Gratis 1 Bulan!' },
    //     'Internet + TV': { ...pricingData.Residensial['12']['Internet + TV'], title: 'Paket Combo, Bayar 5 Bulan Gratis 1 Bulan!' }
    // };

    const pricingTabs = document.querySelectorAll('.pricing-tab');
    const durationTabs = document.querySelectorAll('.duration-tab');
    const pricingSubTabs = document.querySelectorAll('.pricing-subtab');
    const pricingTitle = document.getElementById('pricing-title');
    const pricingSubtitle = document.getElementById('pricing-subtitle');
    const cardsContainer = document.querySelector('.pricing-cards-container');

    let currentSelection = {
        customerType: 'Residensial',
        duration: '1',
        planType: 'Internet'
    };

    function renderPricingCards(plans) {
        if (!cardsContainer) return;
        cardsContainer.innerHTML = '';

        if (!plans || plans.length === 0) {
            cardsContainer.innerHTML = '<p>Paket tidak tersedia untuk pilihan ini.</p>';
            return;
        }

        plans.forEach(plan => {
            const speedHtml = plan.originalSpeed
                ? `<span class="plan-speed-original">${plan.originalSpeed}</span> ${plan.speed}`
                : plan.speed;

            const tvHeaderHtml = plan.channels ? `
                <div class="tv-channel-header">
                    <img src="https://www.myrepublic.co.id/img/gothel/uploads/tv_03_Line_d6c89808f2.svg" alt="TV Icon" class="tv-channel-header-icon" />
                    <div class="tv-channel-header-text">
                        <p class="channels">Channel TV: ${plan.channels} Channel</p>
                        <p class="stb-info">Termasuk STB Android 12</p>
                    </div>
                </div>
            ` : '';

            const featuresHtml = plan.features.map(feature => {
                if (feature.type === 'ott') {
                    return `
                        <div class="ott-feature">
                            <img src="${feature.logo}" alt="${feature.name} Logo" class="ott-logo" loading="lazy" />
                            ${feature.badge ? `<span class="free-badge">${feature.badge}</span>` : ''}
                        </div>
                    `;
                }
                return `
                    <div class="feature-item">
                        <img src="${feature.icon}" alt="" class="feature-icon" loading="lazy" />
                        <p>${feature.text}</p>
                    </div>
                `;
            }).join('');

            const cardHtml = `
                <div class="pricing-card">
                    <div class="pricing-card-header">
                        <img src="${plan.image}" alt="Promotional image for ${plan.name} plan" loading="lazy" />
                    </div>
                    <div class="pricing-card-body">
                        <p class="plan-name">${plan.name}</p>
                        <p class="plan-speed">${speedHtml}</p>
                        <div class="plan-price">
                            <span class="price-currency">Rp </span>
                            <span class="price-amount">${plan.price}</span>
                            <span class="price-period">${plan.period}</span>
                        </div>
                        <p class="plan-terms">${plan.vatText}</p>
                        <a href="https://wa.me/+6287730323641?text=Halo%20MyRepublic,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(plan.name)}%20${encodeURIComponent(currentSelection.planType)}%20untuk%20${encodeURIComponent(currentSelection.customerType)}%20dengan%20durasi%20${encodeURIComponent(currentSelection.duration)}%20bulan.%20Bisa%20bantu%20saya%3F" target="_blank" rel="noopener" aria-label="Chat with sales about the ${plan.name} plan">
                            <button class="btn btn-outline">Chat Sales</button>
                        </a>
                    </div>
                    <div class="accordion-wrapper">
                        ${tvHeaderHtml}
                        <button class="accordion-toggle" aria-expanded="true">
                            Fitur dan Benefit
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" class="accordion-icon open"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"></path></svg>
                        </button>
                        <div class="accordion-content open">
                            ${featuresHtml}
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += cardHtml;
        });
    }

    function updateAndRender() {
        const { customerType, duration, planType } = currentSelection;
        const data = pricingData[customerType]?.[duration]?.[planType];

        if (data) {
            pricingTitle.textContent = data.title || 'Pilih Paket Sesuai Kebutuhanmu';
            pricingSubtitle.textContent = data.subtitle || 'Berbagai pilihan untuk konektivitas terbaik.';
            renderPricingCards(data.plans);
        } else {
            pricingTitle.textContent = 'Paket Tidak Ditemukan';
            pricingSubtitle.textContent = 'Silakan coba kombinasi pilihan yang lain.';
            renderPricingCards([]);
        }

        // Reset and initialize the carousel after rendering cards
        pricingIndex = 0;
        // Use a short timeout to allow the DOM to update before we calculate widths
        setTimeout(updatePricingCarousel, 50);
    }

    pricingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            pricingTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSelection.customerType = tab.getAttribute('data-tab-name');
            updateAndRender();
        });
    });

    durationTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            durationTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSelection.duration = tab.getAttribute('data-duration');
            updateAndRender();
        });
    });

    pricingSubTabs.forEach(subtab => {
        subtab.addEventListener('click', () => {
            pricingSubTabs.forEach(st => st.classList.remove('active'));
            subtab.classList.add('active');
            currentSelection.planType = subtab.textContent;
            updateAndRender();
        });
    });

    // --- Accordion Logic (using event delegation) ---
    if (cardsContainer) {
        cardsContainer.addEventListener('click', function (e) {
            const toggle = e.target.closest('.accordion-toggle');
            if (!toggle) return;

            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('.accordion-icon');
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            toggle.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('open');
            icon.classList.toggle('open');
        });
    }

    // --- Pricing Carousel Logic ---
    const prevPricingBtn = document.querySelector('.pricing-arrow.left');
    const nextPricingBtn = document.querySelector('.pricing-arrow.right');

    let pricingIndex = 0;

    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1152) return 2;
        return 4;
    }

    function updatePricingCarousel() {
        if (!cardsContainer || cardsContainer.children.length === 0) {
            if (prevPricingBtn) prevPricingBtn.style.display = 'none';
            if (nextPricingBtn) nextPricingBtn.style.display = 'none';
            return;
        };

        const totalCards = cardsContainer.children.length;
        const cardsPerView = getCardsPerView();

        // Ensure index is not out of bounds
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        if (pricingIndex > maxIndex) {
            pricingIndex = maxIndex;
        }

        const cardWidth = cardsContainer.children[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(cardsContainer).gap) || 24;
        const offset = pricingIndex * (cardWidth + gap);

        cardsContainer.style.transform = `translateX(-${offset}px)`;

        // Update arrow visibility
        if (prevPricingBtn) {
            prevPricingBtn.style.display = pricingIndex > 0 ? 'flex' : 'none';
        }
        if (nextPricingBtn) {
            nextPricingBtn.style.display = pricingIndex < maxIndex ? 'flex' : 'none';
        }
    }

    if (nextPricingBtn) {
        nextPricingBtn.addEventListener('click', () => {
            const totalCards = cardsContainer.children.length;
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, totalCards - cardsPerView);
            if (pricingIndex < maxIndex) {
                pricingIndex++;
                updatePricingCarousel();
            }
        });
    }

    if (prevPricingBtn) {
        prevPricingBtn.addEventListener('click', () => {
            if (pricingIndex > 0) {
                pricingIndex--;
                updatePricingCarousel();
            }
        });
    }

    window.addEventListener('resize', updatePricingCarousel);

    // Initial render
    updateAndRender();

});
