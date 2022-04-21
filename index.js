const showData = document.getElementById('show');
const indexOfArr = document.getElementById('index');
const askQuestionBtn = document.getElementById('ask_question');
const finish = document.getElementById('finish');
const footer = document.getElementById('footer');
const allQuestion = document.getElementById('all_question');
const subjectHeading = document.getElementById('subject_heading');
const showSubject = document.getElementById('show_subject');
const showSubjectSection = document.getElementById('show_subject_section');
const showTime = document.getElementById('show_time');
const setTimer = document.getElementById('timer');
const timerShowModal = document.getElementById('timer_show_modal');
const showDate = document.getElementById('show_date');
const showWeek = document.getElementById('show_week');
const showMonth = document.getElementById('show_month');
const showYear = document.getElementById('show_year');


// select dom from switch button
const switchButton1 = document.getElementById('switch1');
const switchButton2 = document.getElementById('switch2');
const switchButton3 = document.getElementById('switch3');
const switchButton4 = document.getElementById('switch4');
const switchButton5 = document.getElementById('switch5');
const switchButton6 = document.getElementById('switch6');
const switchButton7 = document.getElementById('switch7');
const switchButton8 = document.getElementById('switch8');
const switchButton9 = document.getElementById('switch9');
const switchButton10 = document.getElementById('switch10');
const switchButton11 = document.getElementById('switch11');
const switchButton12 = document.getElementById('switch12');










//set as global variable for use to another function
let numberStrings;  // array element is set globally in this variable by condition
let final;

const switchFunction = subject => {

    //add timer by clicking switch button
    setTimerUpdate();

    //condition for switch button styling
    switch (subject) {
        case 'crystallography':
            //add style to selected id
            switchButton1.classList.add('switch_btn_style');

            //remove style from others id
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton1.innerHTML = 'Selected'

            //other will be stay switch
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;

        case 'stratigraphy':
            switchButton2.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton2.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';

            break;

        case 'p.s.p':
            switchButton8.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton8.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';


            break;

        case 'd.s.p':
            switchButton7.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton7.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';


            break;

        case 'mathematics':
            switchButton12.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton12.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';

            break;

        case 'optical-mineralogy':
            switchButton11.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton11.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;

        case 'hydrology(IM)':
            switchButton10.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton10.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;

        case 'hydrology(sg)':
            switchButton9.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton9.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;

        case 'environmental-chemistry':
            switchButton6.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton6.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;

        case 'physics-2':
            switchButton4.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton4.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;

        case 'physics-3':
            switchButton5.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton3.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton5.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;

        case 'programming':
            switchButton3.classList.add('switch_btn_style');

            //remove style from others id
            switchButton1.classList.remove('switch_btn_style');
            switchButton2.classList.remove('switch_btn_style');
            switchButton4.classList.remove('switch_btn_style');
            switchButton5.classList.remove('switch_btn_style');
            switchButton6.classList.remove('switch_btn_style');
            switchButton7.classList.remove('switch_btn_style');
            switchButton8.classList.remove('switch_btn_style');
            switchButton9.classList.remove('switch_btn_style');
            switchButton10.classList.remove('switch_btn_style');
            switchButton11.classList.remove('switch_btn_style');
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton3.innerHTML = 'Selected'

            //other will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            break;
    }



    //conditions for array
    if (subject === 'mathematics') {
        numberStrings = mathematicsArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'optical-mineralogy') {
        numberStrings = opticalMineralogyArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'hydrology(IM)') {
        numberStrings = hydrologyArrayByIlliasMahmud;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'hydrology(sg)') {
        numberStrings = hydrologyArrayBySukhen;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'p.s.p') {
        numberStrings = pspArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'd.s.p') {
        numberStrings = dspArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'environmental-chemistry') {
        numberStrings = chemistryArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'physics-3') {
        numberStrings = physics_3_Array;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'physics-2') {
        numberStrings = physics_2_Array;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'programming') {
        numberStrings = programmingArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'stratigraphy') {
        numberStrings = stratigraphyArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else if (subject === 'crystallography') {
        numberStrings = crystallographyArray;
        subjectHeading.innerHTML = subject;
        showSubject.innerHTML = subject;
    } else {
        numberStrings = [];
    }



    // you can use switch case instead of if else condition
    /* switch (subject) {
         case 'mathematics':
             numberStrings = ['alu', 'kochu']
             break;
         case 'p.s.p':
             numberStrings = ['psp', 'psp']
             break;
 
         default:
             numberStrings = ['sadik']
             break;
     } */


    // show array length as a index number in the browser
    indexOfArr.innerHTML = numberStrings.length;
    final = numberStrings.length;
}





let curElement = 0;
let arr = [];

// main function for showing unique and random value on browser
const updateRandomNumber = () => {
    indexOfArr.innerHTML = numberStrings.length - 1;

    // store unique value in empty array
    while (arr.length < numberStrings.length) {
        let r = Math.floor(Math.random() * (numberStrings.length));
        if (arr.indexOf(r) === -1) {
            arr.push(r)
        };
    }

    // pick up the element from 'arr' array and increasing curElement by clicking
    let newElement = arr[curElement++];
    console.log('element', newElement);

    // shows the result one by one in browser
    document.getElementById('show').innerHTML = numberStrings[newElement++];
    if (curElement == numberStrings.length) {
        curElement = 0
    };

    // count down index number one by one
    console.log(final)
    final--;
    indexOfArr.innerHTML = final;

    // condition for open modal
    if (final < 0) {

        // disable the askquestion button
        askQuestionBtn.disabled = true;

        // open the modal by auto clicking
        finish.click()

        //show array length to modal
        allQuestion.innerHTML = numberStrings.length;

        // show timer to modals
        timerShowModal.innerHTML = displayTime;

        // it is use to covert -1 index to
        indexOfArr.innerHTML = final + 1;
        //close timer
        clearInterval(timer)
    }
}


// add clock to the website
const timeSet = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    //condition for 0 hours
    if (h == 0) {
        h = 12;
    }

    //condition for 24 hours
    if (h > 12) {
        h = h - 12;
        session = 'PM';
    }

    // conditions for double digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //show the time to browser
    const time = h + ":" + m + ":" + s + " " + session;
    showTime.innerHTML = time;


    //get date
    let monthName;
    let monthDigit = date.getMonth();
    if (monthDigit === 0) {
        monthName = 'Jan'
    } else if (monthDigit === 1) {
        monthName = 'Feb'
    } else if (monthDigit === 2) {
        monthName = 'Mar'
    } else if (monthDigit === 3) {
        monthName = 'Apr'
    } else if (monthDigit === 4) {
        monthName = 'May'
    } else if (monthDigit === 5) {
        monthName = "Jun"
    } else if (monthDigit === 6) {
        monthName = 'Jul'
    } else if (monthDigit === 7) {
        monthName = 'Aug'
    } else if (monthDigit === 8) {
        monthName = 'Sep'
    } else if (monthDigit === 9) {
        monthName = 'Oct'
    } else if (monthDigit === 10) {
        monthName = 'Nov'
    } else if (monthDigit === 11) {
        monthName = 'Dec'
    }
    showWeek.innerHTML = date.toString().slice(0, 3);
    showDate.innerHTML = date.getDate();
    showMonth.innerHTML = monthName;
    showYear.innerHTML = date.getFullYear();
}
//call the timeSet function
setInterval(timeSet, 1000);

// close modal and refresh page
const closeButton = () => {
    window.location.reload();
}


// add timer to browser
let timer;
let displayTime;

const setTimerUpdate = () => {
    let sec = 0;
    timer = setInterval(() => {

        d = sec
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        // displayTime = hDisplay + mDisplay + sDisplay;
        displayTime = h + ":" + m + ":" + s;

        //show timer to browser
        setTimer.innerHTML = displayTime;
        sec++; //increase timer one for every interval

    }, 1000)
}






//declaring array
let crystallographyArray = ['Crystallography', 'Crystal', 'general characteristics of crystal', 'Perfect crystal', 'Crystalline', 'Amorphous substance', 'Mineral', 'Characteristics of Mineral', 'Unit cell', 'Space lattice', 'Why Crystallography in Geosciences? / Importance of crystallography / Why study crystallography', 'Descriptive definition of crystallography / what subject the crystallography includes? / What the crystallography discuss about?', 'Why crystals have beautiful external form?', 'Why do we study crystallography? ', 'Unit cell Vs. Space lattice / difference between Unit cell Vs. Space lattice', 'Crystal vs. Crystalline vs. Amorphous / difference between Crystal vs. Crystalline vs. Amorphous', '1)	Euhedral', 'Subhedral', 'Anhedral', 'Euhedral vs. Subhedral vs Anhedral/ difference between Euhedral vs. Subhedral vs Anhedral', 'Faces', 'like face', 'unlike face', 'type of faces?', 'Edges', 'Interfacial angle', 'Solid angles', 'Form', 'Crystallographic axes', 'Intercepts', 'Lattice constant or Lattice parameter', 'Crystal Form', 'how can crystal form classified?', 'simple form', 'combination form', 'open form', 'Close form', 'General form', 'Special form', 'discuss Common forms in Crystallography', 'pedion', 'pinacoid', 'Prism', 'Pyramid', 'Dome', 'what is symmetry?', 'Describe symmetry with proper diagram/example', 'Element of Symmetry', 'Symmetry element', 'Axis of symmetry (with statement)', 'Plane of symmetry (with statement)', 'Types of symmetry?', 'center of symmetry (with statement)', 'Symmetry Operations', 'types of symmetry operations', 'Rotation Symmetry', 'types of rotational symmetry axes?', '1-Fold Rotation Axis', '2-fold Rotation Axis', '3-Fold Rotation Axis', '4-Fold Rotation Axis', '6-Fold Rotation Axis', 'what is Crystal System', 'how can crystal classified of?', 'name of 7 crystal system', 'cubic', 'Tetragonal', 'Orthorhombic', 'Rhombohedral', 'Hexagonal', 'Monoclinic', 'Triclinic', 'which minerals are include in Lower System', 'which minerals are include in Higher system', 'which minerals are include in Intermediate system', 'Lattice point', 'Bravais lattice / The 14 Bravais lattices', 'Types of Unit cells', 'Primitive unit cell', 'Body centered unit cell', 'Faced centered unit cell', 'End centered unit cell', 'Where can I put the lattice points?', 'what unit cells are include in Isometric(cubic) cells', 'what unit cells are include in Tetragonal system', 'what unit cells are include in Orthorhombic system', 'what unit cells are include in Rhombohedral system', 'what unit cells are include in Hexagonal system', 'what unit cells are include in Monoclinic system', 'what unit cells are include in Triclinic system', 'what is Bravais Law (with statement)', 'Law of constancy of interfacial angle', 'How do we keep track of the faces of a crystal?', 'Law of rational indices', 'Law of axial-ratio', 'Law of constancy of symmetry', 'Law of constancy of symmetry', 'Law of crystallographic axes', 'types of Symmetry Operations (৭ টার নাম বলতে হবে)', 'which symmetry are include in Basic symmetry operation?', 'which symmetry are include in compound symmetry operation?', 'what is Reflection Symmetry?', 'what is Rotation Symmetry?', 'what is Inversion Symmetry?', 'difference between rotation and reflection symmetry/ rotation symmetry vs Reflection symmetry', 'what is Rotoinversion Symmetry', 'Crystal Classes/32 Crystal classes/ 32 Point group', 'what is Hermann-Mauguin (International) Symbols', 'how to derive the Hermann-Mauguin symbols in crystal classes? (কি কি উপায়ে Herman-Mauguin symbols বের করা হয় সেইটা লিখতে হবে।', 'Hermann-Mauguin (International) Symbols in Rhombic-dipyramidal class', 'Hermann-Mauguin (International) Symbols in Ditetragonal dipyramidal class', 'Triclinic system', 'Monoclinic system', 'Orthorhombic system', 'Tetragonal system', 'Hexagonal system', 'Isometric system', 'describe the classes of Triclinic system', 'describe the classes of Monoclinic system', 'What criteria is involved in dividing the 32 crystal classes into 6/7 crystal systems? ', 'Twinning', 'Twin plane', 'Twin axis', 'Composition surface', 'types of twinning?', 'contact twin?', 'Penetration twin?', 'What are three ways that twinning can originate?', 'Define polymorphism', 'define polymorphic transformations', 'Give several examples of minerals that show polymorphism, being sure to name all of the polymorphs.', 'Describe that three different types of transformations that result in new polymorphs.', 'define metamict mineral', 'define pseudomorphism', 'define mineraloid', 'Difference between Crystallographic axis and coordinate axis', 'polisynthetic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'cyclic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'I Love You Sumai ❤❤', 'what is Zone', 'what is zone symbol', 'what is vectorial properties', 'types of vectorial properties', 'properties of continuous vectorial', 'properties of discontinuous vectorial', 'Notation Summary', 'Miller Indices for Directions', 'Miller Indices for Directions', 'Miller Indices for Planes: Procedure', 'Family of Directions <100>,<110>,<111>', 'Importance of Miller Indices ', 'Miller Indices for Hexahedron and Octahedron', 'Miller Bravais Indices for Hexagonal system', 'Crystal Habit', 'types of Crystal Habit', 'systematic way to define crystallographic angles', 'Stereographic Projection', 'component of stereonet', 'X-Ray Crystallography', 'X-rays and the Production of X-rays', 'Continuous and Characteristic X-ray Spectra', 'types of X-ray', "X-ray Diffraction and Bragg's Law", 'The X-ray Powder Method'];

let mathematicsArray = ['hafiz', 'ajad', 'mamun'];

let opticalMineralogyArray = [];

let hydrologyArrayByIlliasMahmud = [];

let hydrologyArrayBySukhen = [];

let dspArray = [];

let pspArray = [];

let chemistryArray = [];

let physics_2_Array = [];

let physics_3_Array = [];

let programmingArray = [];

let stratigraphyArray = [];

