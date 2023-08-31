document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-info");
    const extraInfo = document.getElementById("extra-info");

    toggleButton.addEventListener("click", function() {
        if (extraInfo.style.display === "none") {
            extraInfo.style.display = "block";
            toggleButton.innerText = "Show Less";
        } else {
            extraInfo.style.display = "none";
            toggleButton.innerText = "Show More";
        }
    });
    // Skill Icons
    // Skills and Proficiency
    const skills = [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 88 }
    ];

    const skillsContainer = document.getElementById('skills-container');

    skills.forEach(skill => {
        const skillContainer = document.createElement('div');
        skillContainer.className = 'skill-container';

        const skillLabel = document.createElement('div');
        skillLabel.className = 'skill-label';
        skillLabel.textContent = skill.name;

        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';

        const skillLevel = document.createElement('div');
        skillLevel.className = 'skill-level';
        skillLevel.style.width = `${skill.level}%`;

        skillBar.appendChild(skillLevel);
        skillContainer.appendChild(skillLabel);
        skillContainer.appendChild(skillBar);
        skillsContainer.appendChild(skillContainer);
    });

    // Project Grid
    const projects = [
        'Automatic Water Quality Detection',
        'Stream Mon – Watershed Tracking Web Application',
        // Add more projects here...
    ];
    const projectContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.textContent = project;
        projectContainer.appendChild(projectCard);
    });

});
