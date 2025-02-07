/**
 * Check localStorage for previous consent decision.
 * If no decision found, show the consent banner.
 */
window.addEventListener('DOMContentLoaded', function() {
    var cookieConsent = localStorage.getItem('cookieConsent');
    var banner = document.getElementById('cookie-consent-banner');

    // If no prior decision, show banner
    if (!cookieConsent) {
        banner.style.display = 'block';
    } else if (cookieConsent === 'accepted') {
        // If previously accepted, load tracking
        loadGoogleAnalytics();
        loadGoogleAdSense();
    }
});

// Handle "Accept" button
document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-consent-banner').style.display = 'none';

    // Load GA & AdSense
    loadGoogleAnalytics();
    loadGoogleAdSense();
});

// Handle "Reject" button
document.getElementById('deny-cookies').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    document.getElementById('cookie-consent-banner').style.display = 'none';

    // Do NOT load GA or AdSense
});

/**
 * Dynamically load Google Analytics script
 */
function loadGoogleAnalytics() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-2JQ9H53HHS';
    document.head.appendChild(gaScript);

    gaScript.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-2JQ9H53HHS');
    };
}

/**
 * Dynamically load Google AdSense script
 */
function loadGoogleAdSense() {
    var adsScript = document.createElement('script');
    adsScript.async = true;
    adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5957385556386219';
    adsScript.crossorigin = 'anonymous';
    document.head.appendChild(adsScript);
}