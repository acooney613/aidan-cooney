// Test Project 1
function openProjectOne() {
    window.open('index.html', '_blank');
}

// *** Add additional projects here opening the appropriate html *** //

// Expand-skills icon functionality
document.addEventListener('DOMContentLoaded', function() {
    const expandIcon = document.querySelector('.expand-icon');
    const hiddenSkills = document.querySelectorAll('.skill-hidden');
    expandIcon.addEventListener('click', function() {
        if (expandIcon.innerText == 'more...') {
            expandIcon.innerText = '...less';
            
            hiddenSkills.forEach(function(skill) {
                skill.style.display = 'block';
            });
        }

        else {
            expandIcon.innerText = 'more...';

            hiddenSkills.forEach(function(skill) {
                skill.style.display = 'none';
            });
        }
    });
});