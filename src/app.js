import { fetchDailyHoroscope } from './components/dailyHoroscope';
import { compareBirthCharts, saveCompatibilityResults } from './components/compatibilityAnalysis';
import { saveUserProfile, trackHoroscopePredictions } from './components/userProfile';

document.addEventListener('DOMContentLoaded', () => {
    const zodiacSign = 'Aries'; // Placeholder for user's zodiac sign
    displayDailyHoroscope(zodiacSign);

    const userBirthChart = {}; // Placeholder for user's birth chart
    const partnerBirthChart = {}; // Placeholder for partner's birth chart
    displayCompatibilityResults(userBirthChart, partnerBirthChart);
});

function displayDailyHoroscope(zodiacSign) {
    fetchDailyHoroscope(zodiacSign)
        .then(horoscope => {
            const horoscopeContent = document.getElementById('horoscope-content');
            horoscopeContent.textContent = horoscope;
        })
        .catch(error => {
            console.error('Error fetching daily horoscope:', error);
        });
}

function displayCompatibilityResults(userBirthChart, partnerBirthChart) {
    compareBirthCharts(userBirthChart, partnerBirthChart)
        .then(results => {
            const compatibilityContent = document.getElementById('compatibility-content');
            compatibilityContent.textContent = results;
            saveCompatibilityResults(userBirthChart, partnerBirthChart, results);
        })
        .catch(error => {
            console.error('Error comparing birth charts:', error);
        });
}

function saveUserProfileData(userProfile) {
    saveUserProfile(userProfile)
        .then(() => {
            console.log('User profile saved successfully');
        })
        .catch(error => {
            console.error('Error saving user profile:', error);
        });
}

function trackUserHoroscopePredictions(userProfile) {
    trackHoroscopePredictions(userProfile)
        .then(predictions => {
            console.log('User horoscope predictions tracked successfully:', predictions);
        })
        .catch(error => {
            console.error('Error tracking horoscope predictions:', error);
        });
}
