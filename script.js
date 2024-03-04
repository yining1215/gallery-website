document.getElementById('load-more').addEventListener('click', function() {
    // Implement the logic to dynamically load more videos
    console.log('Load more videos...');
});
function copyPromptText(elementId) {
    const promptText = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(promptText).then(() => {
        alert('Prompt copied to clipboard!');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to the scroll event
window.addEventListener('scroll', debounce(function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
}, 20));

function filterVideos(tag) {
    const videos = document.querySelectorAll('.video-item');
    videos.forEach(video => {
        console.log(video.dataset.tags); // Add this line to debug
        if (video.getAttribute('data-tags').split(',').includes(tag) || tag === 'all') {
            video.style.display = '';
        } else {
            video.style.display = 'none';
        }
    });
}

function filterVideos(tag) {
    // Retrieve all video items
    const videos = document.querySelectorAll('.video-item');

    // Loop through each video item
    videos.forEach(video => {
        // Check if the video has the selected tag
        if (video.dataset.tags.split(',').includes(tag) || tag === 'all') {
            video.style.display = ''; // Show the video if it matches the tag or if 'all' is selected
        } else {
            video.style.display = 'none'; // Hide the video if it does not match the tag
        }
    });
}

document.getElementById('searchInput').addEventListener('focus', function() {
    // Change the X button to dark color when input is focused
    document.getElementById('clearSearch').style.color = '#000'; // Dark color
});

document.getElementById('searchInput').addEventListener('blur', function() {
    // Revert the X button color when input loses focus
    document.getElementById('clearSearch').style.color = '#ccc'; // Light color
});

document.getElementById('clearSearch').addEventListener('click', function() {
    // Clear the search input
    document.getElementById('searchInput').value = '';

    // Close the dropdown
    document.getElementById('dropdownContent').style.display = 'none';
});


document.getElementById('searchInput').addEventListener('input', function(e) {
    const input = e.target.value.toLowerCase();
    const tags = ['Technology', 'Design', 'Art']; // Example tags, use your actual tags
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = ''; // Clear previous results
    if (input) {
        dropdownContent.style.display = 'block';
        const filteredTags = tags.filter(tag => tag.toLowerCase().includes(input));
        filteredTags.forEach(tag => {
            const div = document.createElement('div');
            div.textContent = tag;
            div.addEventListener('click', () => {
                // Implement tag selection functionality
                console.log(tag + ' selected');
                dropdownContent.style.display = 'none';
            });
            dropdownContent.appendChild(div);
        });
    } else {
        dropdownContent.style.display = 'none';
    }
});
