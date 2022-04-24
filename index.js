const showData = document.getElementById('show');
const indexOfArr = document.getElementById('index');
const askQuestionBtn = document.getElementById('ask_question');
const finish = document.getElementById('finish');
const footer = document.getElementById('footer');
const allQuestion = document.getElementById('all_question');
const showSubject = document.getElementById('show_subject');
const showSubjectSection = document.getElementById('show_subject_section');
const showTime = document.getElementById('show_time');
const showSession = document.getElementById('show_session');
const setTimer = document.getElementById('timer');
const timerShowModal = document.getElementById('timer_show_modal');
const showDate = document.getElementById('show_date');
const showWeek = document.getElementById('show_week');
const showMonth = document.getElementById('show_month');
const showYear = document.getElementById('show_year');
const answerQuestion = document.getElementById('ans_question');
const scrollId = document.getElementById('result_section');
const firstModalText = document.getElementById('first_modal_text');
const secondModalText = document.getElementById('second_modal_text');
const thirdModalText = document.getElementById('third_modal_text');
const fourthModalText = document.getElementById('fourth_modal_text');



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
    })();


    //condition for switch button styling
    switch (subject) {
        case 'crystallography':
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
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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
            switchButton7.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject

            setTimerUpdate();    //set new timer when click a new subject

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
            switchButton6.innerHTML = 'Switch';;
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();     //set new timer when click a new subject

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

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);   //close the previous timer when click a new subject
            setTimerUpdate();   //set new timer when click a new subject

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

            //other button will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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

            //other button will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton3.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

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

            //other button will be stay switch
            switchButton1.innerHTML = 'Switch';
            switchButton2.innerHTML = 'Switch';
            switchButton4.innerHTML = 'Switch';
            switchButton5.innerHTML = 'Switch';
            switchButton6.innerHTML = 'Switch';
            switchButton7.innerHTML = 'Switch';
            switchButton8.innerHTML = 'Switch';
            switchButton9.innerHTML = 'Switch';
            switchButton10.innerHTML = 'Switch';
            switchButton11.innerHTML = 'Switch';
            switchButton12.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;
    }



    //conditions for set array
    if (subject === 'mathematics') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = mathematicsArray;    //set the declaring array to the predefined numberStrings array

        // get the index from the mathematicsArray and set it to the 'arr' array
        for (i of mathematicsArray) {
            let indexNumberOfMathematicsArray = mathematicsArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfMathematicsArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'optical-mineralogy') {
        curElement = 0;     // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = opticalMineralogyArray;    //set the declaring array to the predefined numberStrings array

        // get the index from the opticalMineralogyArray and set it to the 'arr' array
        for (i of opticalMineralogyArray) {
            let indexNumberOfOpticalMineralogyArray = opticalMineralogyArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfOpticalMineralogyArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'hydrology(IM)') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = hydrologyArrayByIlliasMahmud;    //set the declaring array to the predefined numberStrings array

        // get the index from the hydrologyArrayByIlliasMahmud and set it to the 'arr' array
        for (i of hydrologyArrayByIlliasMahmud) {
            let indexNumberOfHydrologyIlliasArray = hydrologyArrayByIlliasMahmud.indexOf(i);
            arr = [];
            arr = [indexNumberOfHydrologyIlliasArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'hydrology(sg)') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = hydrologyArrayBySukhen;   //set the declaring array to the predefined numberStrings array

        // get the index from the hydrologyArrayBySukhen and set it to the 'arr' array
        for (i of hydrologyArrayBySukhen) {
            let indexNumberOfHydrologySukhenArray = hydrologyArrayBySukhen.indexOf(i);
            arr = [];
            arr = [indexNumberOfHydrologySukhenArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'p.s.p') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = pspArray;    //set the declaring array to the predefined numberStrings array

        // get the index from the pspArray and set it to the 'arr' array
        for (i of pspArray) {
            let indexNumberOfPspArray = pspArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfPspArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'd.s.p') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = dspArray;    //set the declaring array to the predefined numberStrings array

        // get the index from the dspArray and set it to the 'arr' array
        for (i of dspArray) {
            let indexNumberOfDspArray = dspArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfDspArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'environmental-chemistry') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = chemistryArray;    //set the declaring array to the predefined numberStrings array

        // get the index from the chemistryArray and set it to the 'arr' array
        for (i of chemistryArray) {
            let indexNumberOfChemistryArray = chemistryArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfChemistryArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'physics-3') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = physics_3_Array;    //set the declaring array to the predefined numberStrings array

        // get the index from the physics_3_Array and set it to the 'arr' array
        for (i of physics_3_Array) {
            let indexNumberOfPhysics3Array = physics_3_Array.indexOf(i);
            arr = [];
            arr = [indexNumberOfPhysics3Array];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'physics-2') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = physics_2_Array;   //set the declaring array to the predefined numberStrings array

        // get the index from the physics_2_Array and set it to the 'arr' array
        for (i of physics_2_Array) {
            let indexNumberOfPhysics2Array = physics_2_Array.indexOf(i);
            arr = [];
            arr = [indexNumberOfPhysics2Array];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'programming') {
        curElement = 0;     // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = programmingArray;    //set the declaring array to the predefined numberStrings array

        // get the index from the programmingArray and set it to the 'arr' array
        for (i of programmingArray) {
            let indexNumberOfProgrammingArray = programmingArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfProgrammingArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'stratigraphy') {
        curElement = 0;     // set the predefined curElement to 0 as if the previous curElement value is alternate with 0      
        numberStrings = stratigraphyArray;    //set the declaring array to the predefined numberStrings array

        // get the index from the stratigraphyArray and set it to the 'arr' array
        for (i of stratigraphyArray) {
            let indexNumberOfStratigraphyArray = stratigraphyArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfStratigraphyArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else if (subject === 'crystallography') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        numberStrings = crystallographyArray;     //set the declaring array to the predefined numberStrings array

        // get the index from the crystallographyArray and set it to the 'arr' array
        for (i of crystallographyArray) {
            let indexNumberOfCrystallographyArray = crystallographyArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfCrystallographyArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    } else {
        numberStrings = [];
    };

    // show array length as a index number in the browser
    indexOfArr.innerHTML = numberStrings.length;
    final = numberStrings.length;

};





let curElement = 0;
let arr = [];

// main function for showing unique and random value on browser
const updateRandomNumber = () => {
    // store unique value in empty array
    while (arr.length < numberStrings.length) {
        let r = Math.floor(Math.random() * (numberStrings.length));
        if (arr.indexOf(r) === -1) {
            arr.push(r)
        };
    };

    if (curElement == numberStrings.length) {
        curElement = 0
    };

    // pick up the element from 'arr' array and increasing curElement by clicking
    let newElement = arr[curElement++];
    let subjectName = (numberStrings[newElement]);


    // console.log('numberStrings:', numberStrings);
    // console.log('arr:', arr)
    // console.log('newElement:', newElement)
    // console.log('curElement 2:', curElement)
    // console.log('subj', subjectName)


    // shows the result one by one in browser
    showData.innerHTML = subjectName.slice(0, -2);
    answerQuestion.innerHTML = subjectName.slice(-2);
    final--;      // decreasing index number one by one
    indexOfArr.innerHTML = final;      // show the decreasing index to the browser

    // condition for open modal
    if (final < 0) {
        askQuestionBtn.disabled = true;    // disable the ask question button
        finish.click();     // open the modal by auto clicking

        // condition for add 0 before the number if it is less than 10;
        if (numberStrings.length < 10) {
            allQuestion.innerHTML = numberStrings.length = '0' + numberStrings.length;
        } else if (numberStrings.length > 99) {
            allQuestion.innerHTML = numberStrings.length;
        };

        timerShowModal.innerHTML = displayTime;     // show timer to modals
        indexOfArr.innerHTML = final + 1;      // it is use to covert -1 index to
        clearInterval(timer);    //close timer
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
    const time = h + ":" + m + ":" + s;
    showTime.innerHTML = time;
    showSession.innerHTML = session;


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

        setTimer.innerHTML = displayTime;    //show timer to browser
        sec++;   //increase timer one for every interval

    }, 1000)
}



// send a free email to the user email account
const sendmail = () => {
    const userEmail = document.getElementById('user_email').value;
    const sendAllQuestionsToMail = allQuestion.innerHTML;
    const sendTimerToMail = timerShowModal.innerHTML;
    const sendSubjectToMail = showSubject.innerHTML;
    const sendTimeToMail = showTime.innerHTML;
    const sendSessionToMail = showSession.innerHTML;
    const randomQuestionClickerWebsite = "https://random-question-clicker.netlify.app/";


    firstModalText.innerHTML = 'Waiting for a moment...';
    //show the message on the modal after few seconds
    setTimeout(() => {
        secondModalText.classList.add('animate__animated', 'animate__backInUp');   //add animated css from https://animate.style/
        secondModalText.innerHTML = 'Your information is on process...';

    }, 300);
    setTimeout(() => {
        thirdModalText.classList.add('animate__animated', 'animate__backInUp');    //add animated css from https://animate.style/
        thirdModalText.innerHTML = '<br/>It may take some time.'
    }, 300);
    setTimeout(() => {
        fourthModalText.classList.add('animate__animated', 'animate__backInUp');    //add animated css from https://animate.style/
        fourthModalText.innerHTML = '<br/>Your Internet is slow. Please keep patients.'
    }, 2000);

    if (userEmail.length > 3) {

        Email.send({
            Host: "smtp.gmail.com",
            Username: "hafizurrahmanbu@gmail.com",
            Password: "fcqrhyktzrasblxz",
            To: userEmail,
            From: "hafizurrahmanbu@gmail.com",
            Subject: `Congradulations!! You have successfully passed ${numberStrings.length} questions.`,
            Body: `<p style='font-size:16px'>Dear ${userEmail}! thank you very much for trying the <a href=${randomQuestionClickerWebsite}>random question clicker</a> website. Your performance is given below:</p><br/>

            <span style="color: blue;font-size:15px">Your Performance Records:</span>

            <table width="600"  border='1px' collapsing='0' style='border-collapse: collapse;'>
            <thead>
              <tr style='border-bottom:none'>
                <th scope="col" style='background-color:#f0ff00; padding:7px 0;'>Content 1</th>
                <th scope="col" style='background-color:#f0ff00;'>Content 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style='padding:3px 5px;font-weight:bold'>Subject</td>
                <td style='padding:3px 5px'>${sendSubjectToMail}</td>
              </tr>
              <tr>
                <td style='padding:3px 5px;background-color:#e4e4e4;font-weight:bold'>Total Questions</td>
                <td style='padding:3px 5px;background-color:#e4e4e4'>${sendAllQuestionsToMail} questions</td>
              </tr>
              <tr>
                <td style='padding:3px 5px;font-weight:bold'>Total Time</td>
                <td style='padding:3px 5px'>${sendTimerToMail} hour(s)</td>
              </tr>
              <tr>
                <td style='padding:3px 5px;background-color:#e4e4e4;font-weight:bold'>Finished At</td>
                <td style='padding:3px 5px;background-color:#e4e4e4'>${sendTimeToMail} ${sendSessionToMail}</td>
              </tr>
            </tbody>
          </table> <br/>

` +
                `<span style='color:#ff002a;font-size:18px'>All questions is given below:</span>` +
                numberStrings.map((question, index) => {
                    return '<br/> <b> Question-</b>' + `<b>${(index + 1)}:</b>` + ' ' + `<i> ${question.slice(0, -2)} </i>`
                }) + `<p style='font-size:15px;color:#205acc'>Thanks for your patient. Is this website is really helpful? If yeah, then don't forget to give a reply with your review.</p>`

        }).then(message => {
            if (message === 'OK') {
                window.location.reload();   // i use the reload function as if the popup modal removed
            }
            // alert(message)
        }
        );
    }


}





//declaring array
let crystallographyArray = ['Crystallography', 'Crystal', 'general characteristics of crystal', 'Perfect crystal', 'Crystalline', 'Amorphous substance', 'Mineral', 'Characteristics of Mineral', 'Unit cell', 'Space lattice', 'Why Crystallography in Geosciences? / Importance of crystallography / Why study crystallography', 'Descriptive definition of crystallography / what subject the crystallography includes? / What the crystallography discuss about?', 'Why crystals have beautiful external form?', 'Why do we study crystallography? ', 'Unit cell Vs. Space lattice / difference between Unit cell Vs. Space lattice', 'Crystal vs. Crystalline vs. Amorphous / difference between Crystal vs. Crystalline vs. Amorphous', '1)	Euhedral', 'Subhedral', 'Anhedral', 'Euhedral vs. Subhedral vs Anhedral/ difference between Euhedral vs. Subhedral vs Anhedral', 'Faces', 'like face', 'unlike face', 'type of faces?', 'Edges', 'Interfacial angle', 'Solid angles', 'Form', 'Crystallographic axes', 'Intercepts', 'Lattice constant or Lattice parameter', 'Crystal Form', 'how can crystal form classified?', 'simple form', 'combination form', 'open form', 'Close form', 'General form', 'Special form', 'discuss Common forms in Crystallography', 'pedion', 'pinacoid', 'Prism', 'Pyramid', 'Dome', 'what is symmetry?', 'Describe symmetry with proper diagram/example', 'Element of Symmetry', 'Symmetry element', 'Axis of symmetry (with statement)', 'Plane of symmetry (with statement)', 'Types of symmetry?', 'center of symmetry (with statement)', 'Symmetry Operations', 'types of symmetry operations', 'Rotation Symmetry', 'types of rotational symmetry axes?', '1-Fold Rotation Axis', '2-fold Rotation Axis', '3-Fold Rotation Axis', '4-Fold Rotation Axis', '6-Fold Rotation Axis', 'what is Crystal System', 'how can crystal classified of?', 'name of 7 crystal system', 'cubic', 'Tetragonal', 'Orthorhombic', 'Rhombohedral', 'Hexagonal', 'Monoclinic', 'Triclinic', 'which minerals are include in Lower System', 'which minerals are include in Higher system', 'which minerals are include in Intermediate system', 'Lattice point', 'Bravais lattice / The 14 Bravais lattices', 'Types of Unit cells', 'Primitive unit cell', 'Body centered unit cell', 'Faced centered unit cell', 'End centered unit cell', 'Where can I put the lattice points?', 'what unit cells are include in Isometric(cubic) cells', 'what unit cells are include in Tetragonal system', 'what unit cells are include in Orthorhombic system', 'what unit cells are include in Rhombohedral system', 'what unit cells are include in Hexagonal system', 'what unit cells are include in Monoclinic system', 'what unit cells are include in Triclinic system', 'what is Bravais Law (with statement)', 'Law of constancy of interfacial angle', 'How do we keep track of the faces of a crystal?', 'Law of rational indices', 'Law of axial-ratio', 'Law of constancy of symmetry', 'Law of constancy of symmetry', 'Law of crystallographic axes', 'types of Symmetry Operations (৭ টার নাম বলতে হবে)', 'which symmetry are include in Basic symmetry operation?', 'which symmetry are include in compound symmetry operation?', 'what is Reflection Symmetry?', 'what is Rotation Symmetry?', 'what is Inversion Symmetry?', 'difference between rotation and reflection symmetry/ rotation symmetry vs Reflection symmetry', 'what is Rotoinversion Symmetry', 'Crystal Classes/32 Crystal classes/ 32 Point group', 'what is Hermann-Mauguin (International) Symbols', 'how to derive the Hermann-Mauguin symbols in crystal classes? (কি কি উপায়ে Herman-Mauguin symbols বের করা হয় সেইটা লিখতে হবে।', 'Hermann-Mauguin (International) Symbols in Rhombic-dipyramidal class', 'Hermann-Mauguin (International) Symbols in Ditetragonal dipyramidal class', 'Triclinic system', 'Monoclinic system', 'Orthorhombic system', 'Tetragonal system', 'Hexagonal system', 'Isometric system', 'describe the classes of Triclinic system', 'describe the classes of Monoclinic system', 'What criteria is involved in dividing the 32 crystal classes into 6/7 crystal systems? ', 'Twinning', 'Twin plane', 'Twin axis', 'Composition surface', 'types of twinning?', 'contact twin?', 'Penetration twin?', 'What are three ways that twinning can originate?', 'Define polymorphism', 'define polymorphic transformations', 'Give several examples of minerals that show polymorphism, being sure to name all of the polymorphs.', 'Describe that three different types of transformations that result in new polymorphs.', 'define metamict mineral', 'define pseudomorphism', 'define mineraloid', 'Difference between Crystallographic axis and coordinate axis', 'polisynthetic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'cyclic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'I Love You Sumai ❤❤', 'what is Zone', 'what is zone symbol', 'what is vectorial properties', 'types of vectorial properties', 'properties of continuous vectorial', 'properties of discontinuous vectorial', 'Notation Summary', 'Miller Indices for Directions', 'Miller Indices for Directions', 'Miller Indices for Planes: Procedure', 'Family of Directions <100>,<110>,<111>', 'Importance of Miller Indices ', 'Miller Indices for Hexahedron and Octahedron', 'Miller Bravais Indices for Hexagonal system', 'Crystal Habit', 'types of Crystal Habit', 'systematic way to define crystallographic angles', 'Stereographic Projection', 'component of stereonet', 'X-Ray Crystallography', 'X-rays and the Production of X-rays', 'Continuous and Characteristic X-ray Spectra', 'types of X-ray', "X-ray Diffraction and Bragg's Law", 'The X-ray Powder Method'];

let mathematicsArray = ['test purpose', 'sucess',];

let opticalMineralogyArray = ['test purpose', 'sucess',];

let hydrologyArrayByIlliasMahmud = ['test purpose', 'sucess'];

let hydrologyArrayBySukhen = ['test purpose', 'sucess'];

let dspArray = ['what is Siliciclastic Sedimentary Rocks 01', 'Sandstone (in details) 01', 'Framework Grain (in details) 01', 'Quartz(in details) 02', 'Feldspars(in details) 03', 'how many groups are feldspars devided into? and what are they? 03', 'Alkali Feldspar(in details) 03', 'what are the common members of Alkali Feldspar 03', 'Plagioclase feldspar (in details) 03', 'Accessory Framework Mineral 04', 'give examples of some Accessory Framework Minerals 04', 'what is havey mineral? 05', 'kinds/types of heavy mineral? 05', 'what is Rock Fragments? 05', 'what is Mineral Cements? 06', 'types / kinds of cementing minerals ? 06', 'Matrix Mineral(in details) 06', 'give the examples of most common clay minerals groups ? 06', 'examples of matrix minerals ? 06', 'describes Chemical composition of sandstone 07', 'Classification of Sandstone(must be read from 1st year slide with pictures) 07', 'describes Mineralogical Composition of Sandstone(must imagine the picture) 08', 'types / classification of sandstone ? (if the sandstone is free from matrix(< 5 %)) 08', 'Sandstone Maturity(in details) 09', 'types of sandstone maturity ? 09', 'on the basis of framework mineralogy how many major groups the sandstones are devided into ? 11', 'quartz arenites(in details) 11', 'feldspathic arenites(in details) 11', 'lithic arenites(in details) 12', 'Conglomerates(in details) 12', 'on the basis of grain shape how many types the conglomerates are devided into ? 12', 'describes the composition of conglomerates 12', 'classification of conglomerates(imagine the classified image) 13', 'describes Classification of Conglomerate 15', 'On the basis of clasts and matrix classified the epiclastic conglomerates 15', 'types of epiclastic conglomerates ? 15', 'fundamental genetic types of conglomerates and breccias ? 15', 'on the basis of clast stability classified Conglomerates and diamictites 17', 'Classification of conglomerates and diamictites on the basis class stability and fabric support 17', 'Origin and Occurrence of Conglomerate(in details) 19', 'difference between conglomerates and breccia ? 19', 'Shales(in details) 19', 'classification the mudrocks on the presence of lamination ? 21', 'describes Composition of Shales(mineralogical and chemical) 21', 'Mineralogical Composition of shales 21', 'Chemical Compositionof shales 21', 'Named the Major chemical constituents of shale ? 21', 'On the basis of grain size and lamination classified the shales ? 23', 'on the basis of fissile and non - fissile rock classified the shales ? 23', 'classification of shales and siltstone(> 50 % grains < 0.062 mm) 25', 'Origin and Occurrence of Shales 25', 'describes Diagenesis of Siliciclastic Sedimentary Rock 27', 'describes Stages and Realms of Diagenesis 27', 'what is diagenesis ? 27', 'When does diagenesis occur ? 27', 'process of lithification 27', 'describes Stages of Diagenesis 29', 'describe Major Diagenetic Processes and Effects 29', 'describe Eodiagenesis(Shallow burial) 29', 'describe Mesodiagenesis(Deep burial) 29', 'describe Telodiagenesis 31', 'imagine the sandstone overview 31', 'describe Point Counting Method 33', 'describe Textural Classification of Sandstone(with suitable diagram) 35', 'describe Evaporites(in details) 37', 'types of evaporate minerals on the basis of origin 38', 'types of evaporate minerals on the basis of chemical composition(imagine diagram if possible) 38', 'Difference between marine evaporates and non - marine evaporates 38', 'kinds of evaporites / evaporite deposits ? 39', 'describe gypsum(in details) 39', 'describe anhydrate(in details) 39', 'how many groups the anhydrate devide into ? 39', 'describe Nodular Anhydrite(in details) 39', 'what is chickenwire structure ? 39', 'describe Laminated Anhydrite(in details) 40', 'describe massive anhydrite 40', 'describe Halite(in details) 40', 'describe Origin of Evaporite Deposits 41', 'describe Evaporation Sequence 41', 'describe Depositional model for evaporites(in details) 41', 'how many models are considered for evaporate deposition ? 41', 'describe "Deep-Water, Deep-Basin Model"(with suitable figure) 41', 'describe "Shallow-Water, Shallow-Basin Model"(with suitable figure) 42', 'describe "Shallow-Water, Deep-Basin Model"(with suitable figure) 43', 'Explain Diagenesis of Evaporites 43', 'describe Iron Formation(in details) 44', 'chemical composition of sliciclastic sedimentary rock(in details) 07', 'describe Ironstones(in details) 45', 'describe Iron - Rich Shales(in details) 45', 'describe Miscellaneous Iron - Rich Sediments(in details) 45', 'Origin of Iron Formations and Ironstones(modern environments and ancient environment) 46', 'describe Iron Deposition in Ancient Environments 46', 'describe Iron Deposition in Modern Environments 46', 'why Deep, iron - rich, anoxic oceanic waters are postulated to move upward toward the surface along continental shelves ? 47', 'what is SEDIMENTARY PHOSPHORITES ? 47', 'describe Principal Kinds of Phosphorite Deposits(less important) 47', 'describe Principal Kinds of Phosphorite Deposits(less important) 48', 'what is Carbonaceous rocks ? 48', 'describe Kinds of Organic Matter in Sedimentary Rocks 48', 'Classification of Carbonaceous Sedimentary Rocks 49', 'classified Carbonaceous sediments on the basis of relative abundance of nonorganic constituents and the kind of organic matter 49', 'Coals(in details) 50', 'short note-- > Coals', 'Characteristics and Classification of Coal 50', 'classification of coal on the basis of rank 50', 'what is bone coal, cannel coal and boghead coal ? 51', 'describe Oil Shale(Kerogen Shale)[with proper diagram]51', 'uses of various rocks(gravel and sand, clay, limestone, evaporites, phosphates, iron formations) 52', 'what is Carbonate Sedimentary Rocks? 53', 'classified the Carbonate rocks on the basis of mineralogy and chemistry 53', 'classified the carbonate rocks On the basis of Ca and Mg 53', 'describe Chemistry and Mineralogy of Carbonate rocks 53', 'what are the major groups of carbonate rocks ? 53', 'describe principal carbonate minerals 42', 'describe Limestone Structures 55', 'describes carbonate grain 55', 'what structures are form when calcite can present in limestone ? 55', 'classified the carbonate grains 55'];

let pspArray = ['test purpose', 'sucess'];

let chemistryArray = ['test purpose', 'sucess'];

let physics_2_Array = ['test purpose', 'sucess'];

let physics_3_Array = ['test purpose', 'sucess'];

let programmingArray = ['test purpose', 'sucess'];

let stratigraphyArray = ['test purpose', 'success'];

