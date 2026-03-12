// ===============================
// LOGIN FUNCTION
// ===============================
function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        window.location.href = "intro.html";
    } else {
        alert("Invalid Login");
    }
}


// ===============================
// TEMPLATE SELECTION
// ===============================
function selectTemplate(template){
    localStorage.setItem("template", template);
    window.location.href = "form.html";
}


// ===============================
// SAVE FORM DATA
// ===============================
function saveData(){

    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("skills", document.getElementById("skills").value);
    localStorage.setItem("experience", document.getElementById("experience").value);
    localStorage.setItem("education", document.getElementById("education").value);
    localStorage.setItem("summary", document.getElementById("summary").value);
    localStorage.setItem("job", document.getElementById("job").value);
    localStorage.setItem("languages", document.getElementById("languages").value);

    // Photo Handling
    let file = document.getElementById("photo").files[0];

    if(file){
        let reader = new FileReader();
        reader.onload = function(){
            localStorage.setItem("photo", reader.result);
            window.location.href = "preview.html";
        };
        reader.readAsDataURL(file);
    } else {
        localStorage.removeItem("photo");
        window.location.href = "preview.html";
    }
}


// ===============================
// LOAD PREVIEW DATA
// ===============================
window.onload = function(){

    if(window.location.pathname.includes("preview.html")){

        // Function to auto hide empty sections
        function setData(id, value){
            let element = document.getElementById(id);
            if(value && value.trim() !== ""){
                element.innerText = value;
            } else {
                element.closest(".section").style.display = "none";
            }
        }

        // Load all data using setData
        setData("pname", localStorage.getItem("name"));
        setData("pemail", localStorage.getItem("email"));
        setData("pphone", localStorage.getItem("phone"));
        setData("pskills", localStorage.getItem("skills"));
        setData("pexperience", localStorage.getItem("experience"));
        setData("peducation", localStorage.getItem("education"));
        setData("psummary", localStorage.getItem("summary"));
        setData("pjob", localStorage.getItem("job"));
        setData("planguages", localStorage.getItem("languages"));

        // ===============================
        // IMAGE HANDLING (Professional Placeholder)
        // ===============================
        let savedPhoto = localStorage.getItem("photo");
        let imageElement = document.getElementById("profileImage");
        if(savedPhoto && savedPhoto !== "null" && savedPhoto !== ""){
            imageElement.src = savedPhoto;
        } else {
            imageElement.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
        }

        // ===============================
        // APPLY DIFFERENT TEMPLATE LAYOUT
        // ===============================
        let selectedTemplate = localStorage.getItem("template");
        let resume = document.getElementById("resume");
        resume.className = "resume-wrapper " + selectedTemplate;
        if(selectedTemplate === "template1"){
            resume.className = "resume-wrapper template1";
        }

        if(selectedTemplate === "template3"){
            resume.className = "resume-wrapper template3";
        }

        if(selectedTemplate === "template4"){
            resume.className = "resume-wrapper template4";
        }
    }
};


// ===============================
// EDIT RESUME
// ===============================
function editResume(){
    window.location.href = "form.html";
}


// ===============================
// DOWNLOAD PDF
// ===============================
function downloadPDF(){
    window.print();
}