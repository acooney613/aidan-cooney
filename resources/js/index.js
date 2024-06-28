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

function loadProject(url) {
    var projectPage = document.getElementById('projectPage');
    projectPage.style.display = 'block';

    var projectFrame = document.getElementById('projectFrame');
    projectFrame.src = url;

    var educationSection = document.getElementById('educationContainer');
    educationSection.style.display = 'none';

    var experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.style.display = 'none';

    var projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.style.display = 'none';
}

function closeProject() {
    var projectPage = document.getElementById('projectPage');
    if (projectPage.style.display != 'none') {
        projectPage.style.display = 'none';
    }

    var educationSection = document.getElementById('educationContainer');
    educationSection.style.display = 'block';

    var experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.style.display = 'block';

    var projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.style.display = 'block';
}
