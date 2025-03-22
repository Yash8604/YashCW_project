document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;

    const resumeHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
    `;

    document.getElementById("resume-output").innerHTML = resumeHTML;
});
