// JavaScript code
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerBtn = document.getElementById('menu-toggle');



hamburgerBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    // mobileMenu.classList.toggle('animate-fadeIn');
});


mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.remove('hidden');
});


mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
});

// Get the close button element
const closeButton = document.querySelector('#close-button');

// Get the mobile menu element
const mobileMenu1 = document.querySelector('#mobile-menu');



const semesterTags = document.querySelectorAll('.semester-tag');

// semesterTags.forEach(tag => {
//     tag.addEventListener('click', () => {
//         semesterTags.forEach(tag => {
//             tag.classList.remove('active');
//         });
//         tag.classList.add('active');
//     });
// });

semesterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        console.log('Clicked', tag);
        semesterTags.forEach(tag => {
            tag.classList.remove('active');
            console.log('Removed active from', tag);
        });
        tag.classList.add('active');
        console.log('Added active to', tag);
    });
});



const thirdSemesterTag = document.querySelector('a[href="3rd_sem.html"]');
thirdSemesterTag.classList.add('active');



const usnInput = document.getElementById('usn');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');
const subject1Input = document.getElementById('subject1');
const subject2Input = document.getElementById('subject2');
const subject3Input = document.getElementById('subject3');
const subject4Input = document.getElementById('subject4');
const subject5Input = document.getElementById('subject5');
const subject6Input = document.getElementById('subject6');
const subject7Input = document.getElementById('subject7');
const subject8Input = document.getElementById('subject8');

const internal1Input = document.getElementById('internal1');
const external1Input = document.getElementById('external1');
const internal2Input = document.getElementById('internal2');
const external2Input = document.getElementById('external2');
const internal3Input = document.getElementById('internal3');
const external3Input = document.getElementById('external3');
const internal4Input = document.getElementById('internal4');
const external4Input = document.getElementById('external4');
const internal5Input = document.getElementById('internal5');
const external5Input = document.getElementById('external5');
const internal6Input = document.getElementById('internal6');
const external6Input = document.getElementById('external6');
const internal7Input = document.getElementById('internal7');
const external7Input = document.getElementById('external7');
const internal8Input = document.getElementById('internal8');
const external8Input = document.getElementById('external8');

const usnError = document.getElementById('usn-error');
const nameError = document.getElementById('name-error');
const genderError = document.getElementById('gender-error');
const subject1Error = document.getElementById('subject-error1');
const subject2Error = document.getElementById('subject-error2');
const subject3Error = document.getElementById('subject-error3');
const subject4Error = document.getElementById('subject-error4');
const subject5Error = document.getElementById('subject-error5');
const subject6Error = document.getElementById('subject-error6');
const subject7Error = document.getElementById('subject-error7');
const subject8Error = document.getElementById('subject-error8');

const internal1Error = document.getElementById('internal1-error');
const external1Error = document.getElementById('external1-error');
const internal2Error = document.getElementById('internal2-error');
const external2Error = document.getElementById('external2-error');
const internal3Error = document.getElementById('internal3-error');
const external3Error = document.getElementById('external3-error');
const internal4Error = document.getElementById('internal4-error');
const external4Error = document.getElementById('external4-error');
const internal5Error = document.getElementById('internal5-error');
const external5Error = document.getElementById('external5-error');
const internal6Error = document.getElementById('internal6-error');
const external6Error = document.getElementById('external6-error');
const internal7Error = document.getElementById('internal7-error');
const external7Error = document.getElementById('external7-error');
const internal8Error = document.getElementById('internal8-error');
const external8Error = document.getElementById('external8-error');
// Define regular expressions
const usnRegex = /^1BI21MC(0[0-9][1-9]|1[0-1][0-9]|120)$/;
const nameRegex = /^[a-zA-Z]{4,}( [a-zA-Z]+)*$/;


function showModal() {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById("modal").style.display = "flex";
}

function hideModal() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('modal').classList.add('hidden');
    document.getElementById("modal").style.display = "none";
}



function calculate(event) {
    // Prevent form submission
    event.preventDefault();

    // Retrieve values of form elements
    const usn = usnInput.value;
    const name = nameInput.value;
    const gender = genderInput.value;
    // const subject1 = subject1Input.value;
    // const subject2 = subject2Input.value;
    // const subject3 = subject3Input.value;
    // const subject4 = subject4Input.value;
    // const subject5 = subject5Input.value;
    // const subject6 = subject6Input.value;
    // const subject7 = subject7Input.value;
    // const subject8 = subject8Input.value;

    const internal1 = parseInt(internal1Input.value)
    const external1 = parseInt(external1Input.value);
    const internal2 = parseInt(internal2Input.value)
    const external2 = parseInt(external2Input.value);
    const internal3 = parseInt(internal3Input.value)
    const external3 = parseInt(external3Input.value);
    const internal4 = parseInt(internal4Input.value)
    const external4 = parseInt(external4Input.value);
    const internal5 = parseInt(internal5Input.value)
    const external5 = parseInt(external5Input.value);
    const internal6 = parseInt(internal6Input.value)
    const external6 = parseInt(external6Input.value);
    const internal7 = parseInt(internal7Input.value)
    const external7 = parseInt(external7Input.value);
    const internal8 = parseInt(internal8Input.value)
    const external8 = parseInt(external8Input.value);

    const usnError = document.getElementById('usn-error');
    const nameError = document.getElementById('name-error');
    const genderError = document.getElementById('gender-error');
    // const subject1Error = document.getElementById('subject-error1');
    // const subject2Error = document.getElementById('subject-error2');
    // const subject3Error = document.getElementById('subject-error3');
    // const subject4Error = document.getElementById('subject-error4');
    // const subject5Error = document.getElementById('subject-error5');
    // const subject6Error = document.getElementById('subject-error6');
    // const subject7Error = document.getElementById('subject-error7');
    // const subject8Error = document.getElementById('subject-error8');

    const internal1Error = document.getElementById('internal1-error');
    const internal2Error = document.getElementById('internal2-error');
    const external2Error = document.getElementById('external2-error');
    const external1Error = document.getElementById('external1-error');
    const internal3Error = document.getElementById('internal3-error');
    const external3Error = document.getElementById('external3-error');
    const internal4Error = document.getElementById('internal4-error');
    const external4Error = document.getElementById('external4-error');
    const internal5Error = document.getElementById('internal5-error');
    const external5Error = document.getElementById('external5-error');
    const internal6Error = document.getElementById('internal6-error');
    const external6Error = document.getElementById('external6-error');
    const internal7Error = document.getElementById('internal7-error');
    const external7Error = document.getElementById('external7-error');
    const internal8Error = document.getElementById('internal8-error');
    const external8Error = document.getElementById('external8-error');



    // Validate form elements
    let hasErrors = false;


    if (!usnRegex.test(usn)) {
        usnError.classList.remove('hidden');
        hasErrors = true;
    } else {
        usnError.classList.add('hidden');
    }

    if (!nameRegex.test(name)) {
        nameError.classList.remove('hidden');
        hasErrors = true;
    } else {
        nameError.classList.add('hidden');
    }



    if (gender === '') {
        genderError.classList.remove('hidden');
        hasErrors = true;
    } else {
        genderError.classList.add('hidden');
    }



    if (isNaN(internal1) || internal1 < 0 || internal1 > 40) {
        internal1Error.textContent = 'Internal marks should be between 0 and 40.';
        internal1Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal1Error.classList.add('hidden');
    }

    if (isNaN(external1) || external1 < 0 || external1 > 60) {
        external1Error.textContent = 'External marks should be between 0 and 60.';
        external1Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external1Error.classList.add('hidden');
    }
    if (isNaN(internal2) || internal2 < 0 || internal2 > 40) {
        internal2Error.textContent = 'Internal marks should be between 0 and 40.';
        internal2Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal2Error.classList.add('hidden');
    }

    if (isNaN(external2) || external2 < 0 || external2 > 60) {
        external2Error.textContent = 'External marks should be between 0 and 60.';
        external2Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external2Error.classList.add('hidden');
    }
    if (isNaN(internal3) || internal3 < 0 || internal3 > 40) {
        internal3Error.textContent = 'Internal marks should be between 0 and 40.';
        internal3Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal3Error.classList.add('hidden');
    }

    if (isNaN(external3) || external3 < 0 || external3 > 60) {
        external3Error.textContent = 'External marks should be between 0 and 60.';
        external3Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external3Error.classList.add('hidden');
    }
    if (isNaN(internal4) || internal4 < 0 || internal4 > 40) {
        internal4Error.textContent = 'Internal marks should be between 0 and 40.';
        internal4Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal4Error.classList.add('hidden');
    }

    if (isNaN(external4) || external4 < 0 || external4 > 60) {
        external4Error.textContent = 'External marks should be between 0 and 60.';
        external4Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external4Error.classList.add('hidden');
    }
    if (isNaN(internal5) || internal5 < 0 || internal5 > 40) {
        internal5Error.textContent = 'Internal marks should be between 0 and 40.';
        internal5Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal5Error.classList.add('hidden');
    }

    if (isNaN(external5) || external5 < 0 || external5 > 60) {
        external5Error.textContent = 'External marks should be between 0 and 60.';
        external5Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external5Error.classList.add('hidden');
    }
    if (isNaN(internal6) || internal6 < 0 || internal6 > 40) {
        internal6Error.textContent = 'Internal marks should be between 0 and 40.';
        internal6Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal6Error.classList.add('hidden');
    }

    if (isNaN(external6) || external6 < 0 || external6 > 60) {
        external6Error.textContent = 'External marks should be between 0 and 60.';
        external6Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external6Error.classList.add('hidden');
    }
    if (isNaN(internal7) || internal7 < 0 || internal7 > 40) {
        internal7Error.textContent = 'Internal marks should be between 0 and 40.';
        internal7Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal7Error.classList.add('hidden');
    }

    if (isNaN(external7) || external7 < 0 || external7 > 60) {
        external7Error.textContent = 'External marks should be between 0 and 60.';
        external7Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external7Error.classList.add('hidden');
    }
    if (isNaN(internal8) || internal8 < 0 || internal8 > 40) {
        internal8Error.textContent = 'Internal marks should be between 0 and 40.';
        internal8Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        internal8Error.classList.add('hidden');
    }

    if (isNaN(external8) || external8 < 0 || external8 > 60) {
        external8Error.textContent = 'External marks should be between 0 and 60.';
        external8Error.classList.remove('hidden');
        hasErrors = true;
    } else {
        external8Error.classList.add('hidden');
    }


    const selectedSubjects = [];
    const subjectDropdowns = document.querySelectorAll('select[name^="subject"]');

    subjectDropdowns.forEach((dropdown) => {
        const selectedSubject = dropdown.value;
        const errorDiv = dropdown.nextElementSibling;
        errorDiv.classList.add('hidden');

        if (!selectedSubject) {
            errorDiv.textContent = 'Please select a subject.';
            errorDiv.classList.remove('hidden');
            errorDiv.classList.add('text-red-500'); // Add the text-red-500 class
            dropdown.addEventListener('focus', () => {
                errorDiv.classList.add('hidden');
                errorDiv.classList.remove('text-red-500');
            });
            dropdown.addEventListener('change', () => {
                errorDiv.classList.add('hidden');
                errorDiv.classList.remove('text-red-500');
            });
            hasErrors = true;
        } else if (selectedSubjects.includes(selectedSubject)) {
            errorDiv.textContent = 'This subject has already been selected.';
            errorDiv.classList.remove('hidden');
            errorDiv.classList.add('text-red-500'); // Add the text-red-500 class
            dropdown.addEventListener('focus', () => {
                errorDiv.classList.add('hidden');
                errorDiv.classList.remove('text-red-500');
            });
            dropdown.addEventListener('change', () => {
                errorDiv.classList.add('hidden');
                errorDiv.classList.remove('text-red-500');
            });

            hasErrors = true;
        } else {
            selectedSubjects.push(selectedSubject);
        }
    });


    // Display success alert if no errors
    if (!hasErrors) {
        // alert('Perfectly done!');
        calculate1()
    }
}

function calculate1() {
    var total = 0;
    const totalmarks = 800;

    let failCount = 0;
    for (let i = 1; i <= 8; i++) {
        const external = parseFloat(document.getElementById(`external${i}`).value);
        const subjectTotal = parseFloat(document.getElementById(`total${i}`).value);

        if (external < 24) {
            failCount++;
        } else if (external >= 24 && external < 50 && subjectTotal < 50) {
            failCount++;
        } else if (external >= 24 && subjectTotal >= 50) {
            total += subjectTotal;
        }
    }

    percentage = Math.round((total / totalmarks) * 100);

    const pass =
        failCount === 0
            ? '<span style="color: green">Passed! Congrats 🎉🎊</span>'
            : `<span style="color: red">Failed in ${failCount} Subjects  \u{1F61E}\u{1F61E}</span>`;
    const result = `You have scored ${total} out of ${totalmarks} <br> and you have ${pass}`;



    const credits = [];
    const grades = [];

    // loop over inputs and push values to corresponding arrays
    for (let i = 1; i <= 8; i++) {
        const credit = parseFloat(document.getElementById(`credit${i}`).value);
        const grade = parseFloat(document.getElementById(`grade${i}`).value);

        if (!isNaN(credit) && !isNaN(grade)) {
            credits.push(credit);
            grades.push(grade);
        }
    }

    const totalCredits = credits.reduce((total, credit) => total + credit, 0);
    const weightedGradesSum = grades.reduce((total, grade, index) => total + grade * credits[index], 0);

    const sgpa = weightedGradesSum / totalCredits;

    document.getElementById('sgpa').innerHTML = `${sgpa.toFixed(2)}`;

    document.getElementById('result').innerHTML = result;
    document.getElementById('percentage').innerHTML = percentage + '%';
    showModal();
}


// Add event listeners to inputs to hide error messages on change and focus
usnInput.addEventListener('change', () => {
    usnError.classList.add('hidden');
    usnInput.classList.remove('border-red-500');
});
usnInput.addEventListener('focus', () => {
    usnError.classList.add('hidden');
    usnInput.classList.remove('border-red-500');
});

nameInput.addEventListener('change', () => {
    nameError.classList.add('hidden');
    nameInput.classList.remove('border-red-500');
});
nameInput.addEventListener('focus', () => {
    nameError.classList.add('hidden');
    nameInput.classList.remove('border-red-500');
});

genderInput.addEventListener('change', () => {
    genderError.classList.add('hidden');
    genderInput.classList.remove('border-red-500');
});
genderInput.addEventListener('focus', () => {
    genderError.classList.add('hidden');
    genderInput.classList.remove('border-red-500');
});




// ----------------------------------------------------

internal1Input.addEventListener('change', () => {
    internal1Error.classList.add('hidden');
    internal1Input.classList.remove('border-red-500');
});
internal1Input.addEventListener('focus', () => {
    internal1Error.classList.add('hidden');
    internal1Input.classList.remove('border-red-500');
});
internal2Input.addEventListener('change', () => {
    internal2Error.classList.add('hidden');
    internal2Input.classList.remove('border-red-500');
});
internal2Input.addEventListener('focus', () => {
    internal2Error.classList.add('hidden');
    internal2Input.classList.remove('border-red-500');
});
internal3Input.addEventListener('change', () => {
    internal3Error.classList.add('hidden');
    internal3Input.classList.remove('border-red-500');
});
internal3Input.addEventListener('focus', () => {
    internal3Error.classList.add('hidden');
    internal3Input.classList.remove('border-red-500');
});
internal4Input.addEventListener('change', () => {
    internal4Error.classList.add('hidden');
    internal4Input.classList.remove('border-red-500');
});
internal4Input.addEventListener('focus', () => {
    internal4Error.classList.add('hidden');
    internal4Input.classList.remove('border-red-500');
});
internal5Input.addEventListener('change', () => {
    internal5Error.classList.add('hidden');
    internal5Input.classList.remove('border-red-500');
});
internal5Input.addEventListener('focus', () => {
    internal5Error.classList.add('hidden');
    internal5Input.classList.remove('border-red-500');
});
internal6Input.addEventListener('change', () => {
    internal6Error.classList.add('hidden');
    internal6Input.classList.remove('border-red-500');
});
internal6Input.addEventListener('focus', () => {
    internal6Error.classList.add('hidden');
    internal6Input.classList.remove('border-red-500');
});
internal7Input.addEventListener('change', () => {
    internal7Error.classList.add('hidden');
    internal7Input.classList.remove('border-red-500');
});
internal7Input.addEventListener('focus', () => {
    internal7Error.classList.add('hidden');
    internal7Input.classList.remove('border-red-500');
});
internal8Input.addEventListener('change', () => {
    internal8Error.classList.add('hidden');
    internal8Input.classList.remove('border-red-500');
});
internal8Input.addEventListener('focus', () => {
    internal8Error.classList.add('hidden');
    internal8Input.classList.remove('border-red-500');
});


// ----------------------------------------------

external1Input.addEventListener('change', () => {
    external1Error.classList.add('hidden');
    external1Input.classList.remove('border-red-500');
});
external1Input.addEventListener('focus', () => {
    external1Error.classList.add('hidden');
    external1Input.classList.remove('border-red-500');
});

external2Input.addEventListener('change', () => {
    external2Error.classList.add('hidden');
    external2Input.classList.remove('border-red-500');
});
external2Input.addEventListener('focus', () => {
    external2Error.classList.add('hidden');
    external2Input.classList.remove('border-red-500');
});
external3Input.addEventListener('change', () => {
    external3Error.classList.add('hidden');
    external3Input.classList.remove('border-red-500');
});
external3Input.addEventListener('focus', () => {
    external3Error.classList.add('hidden');
    external3Input.classList.remove('border-red-500');
});

external4Input.addEventListener('change', () => {
    external4Error.classList.add('hidden');
    external4Input.classList.remove('border-red-500');
});
external4Input.addEventListener('focus', () => {
    external4Error.classList.add('hidden');
    external4Input.classList.remove('border-red-500');
});
external5Input.addEventListener('change', () => {
    external5Error.classList.add('hidden');
    external5Input.classList.remove('border-red-500');
});
external5Input.addEventListener('focus', () => {
    external5Error.classList.add('hidden');
    external5Input.classList.remove('border-red-500');
});
external6Input.addEventListener('change', () => {
    external6Error.classList.add('hidden');
    external6Input.classList.remove('border-red-500');
});
external6Input.addEventListener('focus', () => {
    external6Error.classList.add('hidden');
    external6Input.classList.remove('border-red-500');
});
external7Input.addEventListener('change', () => {
    external7Error.classList.add('hidden');
    external7Input.classList.remove('border-red-500');
});
external7Input.addEventListener('focus', () => {
    external7Error.classList.add('hidden');
    external7Input.classList.remove('border-red-500');
});
external8Input.addEventListener('change', () => {
    external8Error.classList.add('hidden');
    external8Input.classList.remove('border-red-500');
});
external8Input.addEventListener('focus', () => {
    external8Error.classList.add('hidden');
    external8Input.classList.remove('border-red-500');
});

// ---------------------------------------------------------------------------------

function updateCredit(subjectId, creditId) {
    var subject = document.getElementById(subjectId).value;
    var credit = document.getElementById(creditId);

    switch (subject) {
        case "20MCA31":
        case "20MCA32":
        case "20MCA33":
            credit.value = "4";
            break;
        case "20MCA342":
        case "20MCA352":
            credit.value = "3";
            break;
        case "20MCA36":
        case "20MCA37":
        case "20MCA38":
            credit.value = "2";
            break;
        default:
            credit.value = "0";
    }
}

// -------------------------------------------------------------
const totalInput = document.getElementById('total1');
const gradeInput = document.getElementById('grade1');
function updateTotal1() {
    const internalMarks = parseFloat(internal1Input.value) || 0;
    const externalMarks = parseFloat(external1Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput.value = grade;
}


// -------------------------------------------------------------
const totalInput1 = document.getElementById('total2');
const gradeInput1 = document.getElementById('grade2');
function updateTotal2() {
    const internalMarks = parseFloat(internal2Input.value) || 0;
    const externalMarks = parseFloat(external2Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput1.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput1.value = grade;
}


// -------------------------------------------------------------
const totalInput2 = document.getElementById('total3');
const gradeInput2 = document.getElementById('grade3');
function updateTotal3() {
    const internalMarks = parseFloat(internal3Input.value) || 0;
    const externalMarks = parseFloat(external3Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput2.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput2.value = grade;
}

// -------------------------------------------------------------
const totalInput3 = document.getElementById('total4');
const gradeInput3 = document.getElementById('grade4');
function updateTotal4() {
    const internalMarks = parseFloat(internal4Input.value) || 0;
    const externalMarks = parseFloat(external4Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput3.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput3.value = grade;
}
// -------------------------------------------------------------
const totalInput4 = document.getElementById('total5');
const gradeInput4 = document.getElementById('grade5');
function updateTotal5() {
    const internalMarks = parseFloat(internal5Input.value) || 0;
    const externalMarks = parseFloat(external5Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput4.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput4.value = grade;
}

// -------------------------------------------------------------
const totalInput5 = document.getElementById('total6');
const gradeInput5 = document.getElementById('grade6');
function updateTotal6() {
    const internalMarks = parseFloat(internal6Input.value) || 0;
    const externalMarks = parseFloat(external6Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput5.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput5.value = grade;
}
// -------------------------------------------------------------
const totalInput6 = document.getElementById('total7');
const gradeInput6 = document.getElementById('grade7');
function updateTotal7() {
    const internalMarks = parseFloat(internal7Input.value) || 0;
    const externalMarks = parseFloat(external7Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput6.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput6.value = grade;
}
// -------------------------------------------------------------
const totalInput7 = document.getElementById('total8');
const gradeInput7 = document.getElementById('grade8');
function updateTotal8() {
    const internalMarks = parseFloat(internal8Input.value) || 0;
    const externalMarks = parseFloat(external8Input.value) || 0;
    const totalMarks = internalMarks + externalMarks;

    // update total input
    totalInput7.value = totalMarks;

    // calculate grade based on total marks
    let grade;
    if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
    } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
    } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
    } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
    } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
    } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 4;
    } else {
        grade = 0;
    }

    // update grade input
    gradeInput7.value = grade;
}




