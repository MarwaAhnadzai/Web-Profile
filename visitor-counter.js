document.addEventListener('DOMContentLoaded', function() {
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 0;
    }
    document.getElementById('visitorCount').textContent = visitorCount;

    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
});
