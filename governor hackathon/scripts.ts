interface Education {
    institution: string;
    degree: string;
    year: string;
}

interface Experience {
    jobTitle: string;
    company: string;
    duration: string;
    responsibilities: string[];
}

function handleImageUpload(): void {
    const fileInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profileImage = document.getElementById('profileImage') as HTMLImageElement;

    fileInput.addEventListener('change', () => {
        const file = fileInput.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profileImage.src = reader.result as string;
            };
            reader.readAsDataURL(file);
        }
    });
}

function generateResume(): void {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    
    const education: Education = {
        institution: (document.getElementById('education') as HTMLInputElement).value,
        degree: (document.getElementById('degree') as HTMLInputElement).value,
        year: (document.getElementById('year') as HTMLInputElement).value
    };
    
    const experience: Experience = {
        jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
        company: (document.getElementById('company') as HTMLInputElement).value,
        duration: (document.getElementById('duration') as HTMLInputElement).value,
        responsibilities: (document.getElementById('responsibilities') as HTMLTextAreaElement).value.split('\n')
    };
    
    // Generate resume output
    const resumeOutput = `
        <header>
            <img src="${(document.getElementById('profileImage') as HTMLImageElement).src}" alt="Profile Picture" class="profile-image">
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
    document.getElementById('resumeOutput')!.innerHTML = resumeOutput;
}

// Add event listeners
document.getElementById('generateResume')!.addEventListener('click', generateResume);
handleImageUpload();
