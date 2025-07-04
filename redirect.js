if (performance.navigation.type === 1 || !localStorage.getItem('seenAnimation')) {
    // Store current page for return after splash
    const returnUrl = window.location.pathname.split('/').pop();
    
    // Redirect to splash with return path
    window.location.href = `index.html?redirect=${returnUrl}`;
}
