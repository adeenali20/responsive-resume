function handleImageUpload() {
    var fileInput = document.getElementById('profilePicture');
    var profileImage = document.getElementById('profileImage');
    fileInput.addEventListener('change', function () {
        var _a;
        var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                profileImage.src = reader_1.result;
            };
            reader_1.readAsDataURL(file);
        }
    });
}
function generateResume() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = {
        institution: document.getElementById('education').value,
        degree: document.getElementById('degree').value,
        year: document.getElementById('year').value
    };
    var experience = {
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        duration: document.getElementById('duration').value,
        responsibilities: document.getElementById('responsibilities').value.split('\n')
    };
    // Generate resume output
    var resumeOutput = "\n        <header>\n            <img src=\"".concat(document.getElementById('profileImage').src, "\" alt=\"Profile Picture\" class=\"profile-image\">\n            <h1>").concat(name, "</h1>\n            <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n        </header>\n        \n        <section class=\"education\">\n            <h2>Education</h2>\n            <p><strong>").concat(education.institution, "</strong></p>\n            <p>").concat(education.degree, ", ").concat(education.year, "</p>\n        </section>\n        \n        <section class=\"experience\">\n            <h2>Experience</h2>\n            <p><strong>").concat(experience.jobTitle, "</strong> at <strong>").concat(experience.company, "</strong></p>\n            <p>Duration: ").concat(experience.duration, "</p>\n            <ul>\n                ").concat(experience.responsibilities.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n            </ul>\n        </section>\n    ");
    // Display resume
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
// Add event listeners
document.getElementById('generateResume').addEventListener('click', generateResume);
handleImageUpload();
