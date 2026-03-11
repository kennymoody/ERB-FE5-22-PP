document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Checklist Reset Functionality
    const resetBtn = document.getElementById('resetChecklist');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
            checkboxes.forEach(cb => {
                cb.checked = false;
            });
        });
    }

    // Weather Widget Functionality
    const weatherWidget = document.getElementById('weatherWidget');
    if (weatherWidget) {
        const lat = weatherWidget.dataset.lat;
        const lon = weatherWidget.dataset.lon;
        
        async function fetchWeather() {
            try {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
                const data = await response.json();
                
                const current = data.current_weather;
                const daily = data.daily;
                
                // Weather icon mapping
                const getIcon = (code) => {
                    if (code === 0) return '☀️';
                    if ([1, 2, 3].includes(code)) return '⛅';
                    if ([45, 48].includes(code)) return '🌫️';
                    if ([51, 53, 55, 61, 63, 65].includes(code)) return '🌧️';
                    if ([71, 73, 75].includes(code)) return '❄️';
                    if ([95, 96, 99].includes(code)) return '⛈️';
                    return '☀️';
                };
                
                // Update current weather
                document.getElementById('currentTemp').textContent = `${Math.round(current.temperature)}°C`;
                document.querySelector('.weather-icon').textContent = getIcon(current.weathercode);
                
                // Update 3-day forecast
                const forecastContainer = document.getElementById('forecastGrid');
                forecastContainer.innerHTML = '';
                
                for (let i = 1; i <= 3; i++) {
                    const date = new Date(daily.time[i]);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const maxTemp = Math.round(daily.temperature_2m_max[i]);
                    const minTemp = Math.round(daily.temperature_2m_min[i]);
                    
                    forecastContainer.innerHTML += `
                        <div class="forecast-day">
                            <div class="forecast-date">${dayName}</div>
                            <div class="forecast-temp">${maxTemp}° / ${minTemp}°</div>
                        </div>
                    `;
                }
            } catch (error) {
                console.error('Error fetching weather:', error);
                weatherWidget.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-light);">Weather data unavailable</p>';
            }
        }
        
        fetchWeather();
    }

    // Currency Converter Functionality
    const currencyWidget = document.getElementById('currencyWidget');
    if (currencyWidget) {
        const targetCurrency = currencyWidget.dataset.target;
        const hkdInput = document.getElementById('hkdInput');
        const localInput = document.getElementById('localInput');
        const rateInfo = document.getElementById('rateInfo');
        
        let exchangeRate = 0;

        async function fetchExchangeRate() {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/HKD`);
                const data = await response.json();
                exchangeRate = data.rates[targetCurrency];
                
                if (exchangeRate) {
                    rateInfo.textContent = `1 HKD = ${exchangeRate.toFixed(2)} ${targetCurrency}`;
                    
                    hkdInput.addEventListener('input', () => {
                        if (hkdInput.value === '') {
                            localInput.value = '';
                        } else {
                            localInput.value = (hkdInput.value * exchangeRate).toFixed(2);
                        }
                    });
                    
                    localInput.addEventListener('input', () => {
                        if (localInput.value === '') {
                            hkdInput.value = '';
                        } else {
                            hkdInput.value = (localInput.value / exchangeRate).toFixed(2);
                        }
                    });
                } else {
                    rateInfo.textContent = 'Currency not supported';
                }
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
                rateInfo.textContent = 'Rate data unavailable';
            }
        }
        
        fetchExchangeRate();
    }
});
