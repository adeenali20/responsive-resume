"use strict";
function handleImageUpload() {
    const fileInput = document.getElementById('profilePicture');
    const profileImage = document.getElementById('profileImage');
    fileInput.addEventListener('change', () => {
        var _a;
        const file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profileImage.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
}
function generateResume() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = {
        institution: document.getElementById('education').value,
        degree: document.getElementById('degree').value,
        year: document.getElementById('year').value
    };
    const experience = {
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        duration: document.getElementById('duration').value,
        responsibilities: document.getElementById('responsibilities').value.split('\n')
    };
    // Generate resume output
    const resumeOutput = `
        <header>
            <img src="${document.getElementById('profileImage').src}" alt="Profile Picture" class="profile-image">
            <h1>${name}</h1>
            <p>Email: ${email} | Phone: ${phone}</p>
        </header>
        
        <section class="education">
            <h2>Education</h2>
            <p><strong>${education.institution}</strong></p>
            <p>${education.degree}, ${education.year}</p>
        </section>
        
        <section class="experience">
            <h2>Experience</h2>
            <p><strong>${experience.jobTitle}</strong> at <strong>${experience.company}</strong></p>
            <p>Duration: ${experience.duration}</p>
            <ul>
                ${experience.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </section>
    `;
    // Display resume
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
// Add event listeners
document.getElementById('generateResume').addEventListener('click', generateResume);
handleImageUpload();
