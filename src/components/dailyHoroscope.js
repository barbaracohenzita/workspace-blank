export function fetchDailyHoroscope(zodiacSign) {
    const apiUrl = `https://example.com/api/horoscope/${zodiacSign}`;

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data.horoscope;
        })
        .catch(error => {
            console.error('Error fetching daily horoscope:', error);
            throw error;
        });
}
