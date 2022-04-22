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
const answerQuestion = document.getElementById('ans_question');
const scrollId = document.getElementById('result_section');



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

    // page scroll after a certain time [using invoke function for immediate call]
    (function scrollPage() {
        setTimeout(function () {
            scrollId.scrollIntoView({ behavior: 'smooth' }); // the main function that scroll the page to a certain element
        }, 600);
    })()



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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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

            //close timer
            clearInterval(timer);

            //add timer by clicking switch button
            setTimerUpdate();

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





let curElement = 1;
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

    if (curElement == numberStrings.length) {
        curElement = 0
    };

    // pick up the element from 'arr' array and increasing curElement by clicking
    let newElement = arr[curElement++];
    let subjectName = (numberStrings[newElement++]);

    // shows the result one by one in browser
    showData.innerHTML = subjectName.slice(0, -2);
    answerQuestion.innerHTML = subjectName.slice(-2);

    // count down index number one by one
    final--;
    indexOfArr.innerHTML = final;

    // condition for open modal
    if (final < 0) {

        // disable the askquestion button
        askQuestionBtn.disabled = true;

        // open the modal by auto clicking
        finish.click();

        // condition for add 0 before the number if it is less than 10;
        if (numberStrings.length < 10) {
            allQuestion.innerHTML = numberStrings.length = '0' + numberStrings.length;
        } else {
            allQuestion.innerHTML = numberStrings.length;
        }


        // show timer to modals
        timerShowModal.innerHTML = displayTime;

        // it is use to covert -1 index to
        indexOfArr.innerHTML = final + 1;

        //close timer
        clearInterval(timer);
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

let mathematicsArray = ['hafiz', 'mamun', 'ajad'];

let opticalMineralogyArray = ['test purpose'];

let hydrologyArrayByIlliasMahmud = ['test purpose'];

let hydrologyArrayBySukhen = ['test purpose'];

let dspArray = ['what is Siliciclastic Sedimentary Rocks 01', 'Sandstone (in details) 01', 'Framework Grain (in details) 01', 'Quartz(in details) 02', 'Feldspars(in details) 03', 'how many groups are feldspars devided into? and what are they? 03', 'Alkali Feldspar(in details) 03', 'what are the common members of Alkali Feldspar 03', 'Plagioclase feldspar (in details) 03', 'Accessory Framework Mineral 04', 'give examples of some Accessory Framework Minerals 04', 'what is havey mineral? 05', 'kinds/types of heavy mineral? 05', 'what is Rock Fragments? 05', 'what is Mineral Cements? 06', 'types / kinds of cementing minerals ? 06', 'Matrix Mineral(in details) 06', 'give the examples of most common clay minerals groups ? 06', 'examples of matrix minerals ? 06', 'describes Chemical composition of sandstone 07', 'Classification of Sandstone(must be read from 1st year slide with pictures) 07', 'describes Mineralogical Composition of Sandstone(must imagine the picture) 08', 'types / classification of sandstone ? (if the sandstone is free from matrix(< 5 %)) 08', 'Sandstone Maturity(in details) 09', 'types of sandstone maturity ? 09', 'on the basis of framework mineralogy how many major groups the sandstones are devided into ? 11', 'quartz arenites(in details) 11', 'feldspathic arenites(in details) 11', 'lithic arenites(in details) 12', 'Conglomerates(in details) 12', 'on the basis of grain shape how many types the conglomerates are devided into ? 12', 'describes the composition of conglomerates 12', 'classification of conglomerates(imagine the classified image) 13', 'describes Classification of Conglomerate 15', 'On the basis of clasts and matrix classified the epiclastic conglomerates 15', 'types of epiclastic conglomerates ? 15', 'fundamental genetic types of conglomerates and breccias ? 15', 'on the basis of clast stability classified Conglomerates and diamictites 17', 'Classification of conglomerates and diamictites on the basis class stability and fabric support 17', 'Origin and Occurrence of Conglomerate(in details) 19', 'difference between conglomerates and breccia ? 19', 'Shales(in details) 19', 'classification the mudrocks on the presence of lamination ? 21', 'describes Composition of Shales(mineralogical and chemical) 21', 'Mineralogical Composition of shales 21', 'Chemical Compositionof shales 21', 'Named the Major chemical constituents of shale ? 21', 'On the basis of grain size and lamination classified the shales ? 23', 'on the basis of fissile and non - fissile rock classified the shales ? 23', 'classification of shales and siltstone(> 50 % grains < 0.062 mm) 25', 'Origin and Occurrence of Shales 25', 'describes Diagenesis of Siliciclastic Sedimentary Rock 27', 'describes Stages and Realms of Diagenesis 27', 'what is diagenesis ? 27', 'When does diagenesis occur ? 27', 'process of lithification 27', 'describes Stages of Diagenesis 29', 'describe Major Diagenetic Processes and Effects 29', 'describe Eodiagenesis(Shallow burial) 29', 'describe Mesodiagenesis(Deep burial) 29', 'describe Telodiagenesis 31', 'imagine the sandstone overview 31', 'describe Point Counting Method 33', 'describe Textural Classification of Sandstone(with suitable diagram) 35', 'describe Evaporites(in details) 37', 'types of evaporate minerals on the basis of origin 38', 'types of evaporate minerals on the basis of chemical composition(imagine diagram if possible) 38', 'Difference between marine evaporates and non - marine evaporates 38', 'kinds of evaporites / evaporite deposits ? 39', 'describe gypsum(in details) 39', 'describe anhydrate(in details) 39', 'how many groups the anhydrate devide into ? 39', 'describe Nodular Anhydrite(in details) 39', 'what is chickenwire structure ? 39', 'describe Laminated Anhydrite(in details) 40', 'describe massive anhydrite 40', 'describe Halite(in details) 40', 'describe Origin of Evaporite Deposits 41', 'describe Evaporation Sequence 41', 'describe Depositional model for evaporites(in details) 41', 'how many models are considered for evaporate deposition ? 41', 'describe "Deep-Water, Deep-Basin Model"(with suitable figure) 41', 'describe "Shallow-Water, Shallow-Basin Model"(with suitable figure) 42', 'describe "Shallow-Water, Deep-Basin Model"(with suitable figure) 43', 'Explain Diagenesis of Evaporites 43', 'describe Iron Formation(in details) 44', 'chemical composition of sliciclastic sedimentary rock(in details) 07', 'describe Ironstones(in details) 45', 'describe Iron - Rich Shales(in details) 45', 'describe Miscellaneous Iron - Rich Sediments(in details) 45'];

let pspArray = ['test purpose'];

let chemistryArray = ['test purpose'];

let physics_2_Array = ['test purpose'];

let physics_3_Array = ['test purpose'];

let programmingArray = ['test purpose'];

let stratigraphyArray = ['test purpose'];

