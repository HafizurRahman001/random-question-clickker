const showData = document.getElementById('show');
const indexOfArr = document.getElementById('index');
const askQuestionBtn = document.getElementById('ask_question');
const finish = document.getElementById('finish');
const footer = document.getElementById('footer');
const allQuestion = document.getElementById('all_question');
const showSubject = document.getElementById('show_subject');
const showSubjectSection = document.getElementById('show_subject_section');
const showTime = document.getElementById('show_time');
const timeThatNeedToShowChartXAxis = document.getElementById('time_that_need_to_show_chart_X_axis');
const showSession = document.getElementById('show_session');
const setTimer = document.getElementById('timer');
const timerShowModal = document.getElementById('timer_show_modal');
const showDate = document.getElementById('show_date');
const showWeek = document.getElementById('show_week');
const showMonth = document.getElementById('show_month');
const showYear = document.getElementById('show_year');
const answerQuestionPageNo = document.getElementById('ans_question');
const scrollId = document.getElementById('result_section');
const firstModalText = document.getElementById('first_modal_text');
const secondModalText = document.getElementById('second_modal_text');
const thirdModalText = document.getElementById('third_modal_text');
const fourthModalText = document.getElementById('fourth_modal_text');
const fiveModalTimer = document.getElementById('five_modal_timer');
const randomQuestionAnswer = document.getElementById('random__question__answer');



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





// ================================functionality of switch button======================================


//set as global variable for use to another function
let SubjectArray;  // array element is set globally in this variable by condition
let final;
let pickStartTime;

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
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'stratigraphy':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'p.s.p':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'd.s.p':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'mathematics':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject

            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'optical-mineralogy':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'hydrology(IM)':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'hydrology(sg)':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();     //set new timer when click a new subject

            break;

        case 'environmental-chemistry':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);   //close the previous timer when click a new subject
            setTimerUpdate();   //set new timer when click a new subject

            break;

        case 'physics-2':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'physics-3':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;
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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;

        case 'programming':
            pickStartTime = showTime.innerHTML + ' ' + showSession.innerHTML;

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
            answerQuestionPageNo.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;
    }



    //conditions for set array
    if (subject === 'mathematics') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        SubjectArray = mathematicsArray;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = opticalMineralogyArray;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = hydrologyArrayByIlliasMahmud;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = hydrologyArrayBySukhen;   //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = pspArray;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = dspArray;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = chemistryArray;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = physics_3_Array;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = physics_2_Array;   //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = programmingArray;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = stratigraphyArray;    //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = crystallographyArray;     //set the declaring array to the predefined SubjectArray array

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
        SubjectArray = [];
    };

    // show array length as a index number in the browser
    indexOfArr.innerHTML = SubjectArray.length;
    final = SubjectArray.length;

};



let curElement = 0;
let arr = [];


let chartTimeForEmailArray = [];
let chartTimerToEmailArray = [];
let timerForMaximumTime = [];


// ==========================main function for showing unique and random value on browser=======================
const updateRandomNumber = () => {

    // store time to the chartTimeForEmailArray array in every click;
    chartTimeForEmailArray.push(timeThatNeedToShowChartXAxis.innerHTML);

    timerForMaximumTime.push(setTimer.innerHTML);




    // ---------------------------turn the hh:mm:ss into seconds for showing on the chart y axis (start)----------------------------
    let hms = setTimer.innerHTML;      // your input string time
    let splitTime = hms.split(':');   // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    let seconds = (+splitTime[0]) * 60 * 60 + (+splitTime[1]) * 60 + (+splitTime[2]);
    // -------------------------turn the hh:mm:ss into seconds for showing on the chart y axis (end)----------------------------------

    //store timer to the chartTimerToEmailArray
    chartTimerToEmailArray.push(seconds);


    // store unique value in empty array
    while (arr.length < SubjectArray.length) {
        let r = Math.floor(Math.random() * (SubjectArray.length));
        if (arr.indexOf(r) === -1) {
            arr.push(r)
        };
    };

    if (curElement == SubjectArray.length) {
        curElement = 0
    };

    // pick up the element from 'arr' array and increasing curElement by clicking
    let newElement = arr[curElement++];
    let subjectName = (SubjectArray[newElement]);


    // console.log('SubjectArray:', SubjectArray);
    // console.log('arr:', arr)
    // console.log('newElement:', newElement)
    // console.log('curElement 2:', curElement)
    // console.log('subj', subjectName)


    // shows the result one by one in browser
    showData.innerHTML = subjectName?.question.slice(0, -2);
    answerQuestionPageNo.innerHTML = subjectName?.question.slice(-2);
    randomQuestionAnswer.innerHTML = subjectName?.answer;
    final--;      // decreasing index number one by one
    indexOfArr.innerHTML = final;      // show the decreasing index to the browser



    // condition for open modal
    if (final < 0) {    // pick the time to set in the email Finished at model
        askQuestionBtn.disabled = true;    // disable the ask question button
        finish.click();     // open the modal by auto clicking

        // condition for add 0 before the number if it is less than 10;
        if (SubjectArray.length < 10) {
            allQuestion.innerHTML = SubjectArray.length = '0' + SubjectArray.length;
        } else if (SubjectArray.length > 10) {
            allQuestion.innerHTML = SubjectArray.length;
        };

        timerShowModal.innerHTML = displayTime;     // show timer to modals
        indexOfArr.innerHTML = final + 1;      // it is use to covert -1 index to
        clearInterval(timer);    //close timer
    }
}


// =================================add clock to the website===============================================
const timeSet = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    //condition for 0 hours
    if (h == 0) {
        h = 12;
    }

    //condition for 24 hours
    if (h > 12) {
        h = h - 12;
    }

    // conditions for double digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //show the time to browser
    const time = h + ":" + m + ":" + s;
    showTime.innerHTML = time;

    let timeToDisplay = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    const session = timeToDisplay.slice(-2)
    showSession.innerHTML = session;
    timeThatNeedToShowChartXAxis.innerHTML = h + ":" + m + ":" + s + ' ' + session;


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


// ========================================add timer to browser (start)============================================
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

// ========================================add timer to browser (end)============================================



// =============================send a free email to the user email account (start)======================================
const sendmail = () => {
    const userEmail = document.getElementById('user_email').value;
    const sendAllQuestionsToMail = allQuestion.innerHTML;
    const sendTimerToMail = setTimer.innerHTML;
    const sendSubjectToMail = showSubject.innerHTML;

    const sendSessionToMail = showSession.innerHTML;
    const randomQuestionClickerWebsite = "https://random-question-clicker.netlify.app/";    //my website link



    // display a countdown timer when the internet is so slow
    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            fiveModalTimer.innerHTML = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }



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
        fourthModalText.innerHTML = `<br/>Internet is slow. Please Waiting...`;

        startTimer(15);
    }, 2000);

    // the modal countdown timer background is show 1 second before the timer starts. for fixing that problem we will add the background color class after 1 second.
    setTimeout(() => {
        fiveModalTimer.classList.add('five_modal_timer');
    }, 3000);




    const chartDataLabelsArray = chartTimeForEmailArray;        //set the chartTimeForEmailArray to the chartDataLabelsArray variable
    const chartDatasetLabelsArray = chartTimerToEmailArray;   //set the chartTimerToEmailArray to the chartDatasetLabelsArray variable


    //slicing the chartDataLabelsArray array with the difference of 35 (such as 0 -35, 211 - 245)
    const sliceChartDataLabel__1 = chartDataLabelsArray.slice(0, 30);
    const sliceChartDataLabel__2 = chartDataLabelsArray.slice(30, 60);
    const sliceChartDataLabel__3 = chartDataLabelsArray.slice(60, 90);
    const sliceChartDataLabel__4 = chartDataLabelsArray.slice(90, 120);
    const sliceChartDataLabel__5 = chartDataLabelsArray.slice(120, 150);
    const sliceChartDataLabel__6 = chartDataLabelsArray.slice(150, 180);
    const sliceChartDataLabel__7 = chartDataLabelsArray.slice(180, 210);
    const sliceChartDataLabel__8 = chartDataLabelsArray.slice(210, 240);
    const sliceChartDataLabel__9 = chartDataLabelsArray.slice(240, 270);
    const sliceChartDataLabel__10 = chartDataLabelsArray.slice(270, 300);
    const sliceChartDataLabel__11 = chartDataLabelsArray.slice(300, 330);
    const sliceChartDataLabel__12 = chartDataLabelsArray.slice(330, 360);
    const sliceChartDataLabel__13 = chartDataLabelsArray.slice(360, 390);
    const sliceChartDataLabel__14 = chartDataLabelsArray.slice(390, 420);
    const sliceChartDataLabel__15 = chartDataLabelsArray.slice(420, 450);



    // set the chart Headline as a global variable
    let chartVariable__1;
    let chartVariable__2;
    let chartVariable__3;
    let chartVariable__4;
    let chartVariable__5;
    let chartVariable__6;
    let chartVariable__7;
    let chartVariable__8;
    let chartVariable__9;
    let chartVariable__10;
    let chartVariable__11;
    let chartVariable__12;
    let chartVariable__13;
    let chartVariable__14;
    let chartVariable__15;




    // declaring the chartLInkToEmail globally as if we can get access ti image tag;
    let chartLinkToEmail__1;
    let chartLinkToEmail__2;
    let chartLinkToEmail__3;
    let chartLinkToEmail__4;
    let chartLinkToEmail__5;
    let chartLinkToEmail__6;
    let chartLinkToEmail__7;
    let chartLinkToEmail__8;
    let chartLinkToEmail__9;
    let chartLinkToEmail__10;
    let chartLinkToEmail__11;
    let chartLinkToEmail__12;
    let chartLinkToEmail__13;
    let chartLinkToEmail__14;
    let chartLinkToEmail__15;






    //------------- the time array elements turn into the seconds as if we can easily determine the maximum number (start)----------

    let timeArray = timerForMaximumTime;
    let splittingTimeArray = [];
    timeArray.map(element => {
        splittingTimeArray.push(element.split(':'));
    })


    let secondsArray = [];
    splittingTimeArray.map(e => {
        secondsArray.push((+e[0]) * 3600 + (+e[1]) * 60 + (+e[2]));
    });




    // subtract the every element one by one
    var newSecondsArray = [];
    for (i = 0; i < secondsArray.length - 1; i++) {
        newSecondsArray[i] = secondsArray[i + 1] - secondsArray[i];
    };


    console.log('new seconds array', newSecondsArray);

    // Now turn the maximum seconds into the hh:mm:ss shape
    let maximumSeconds = Math.max(...newSecondsArray)



    let secondsToHours = Math.floor(maximumSeconds / 3600);
    let secondsToMinute = Math.floor(maximumSeconds % 3600 / 60);
    let secondsToSeconds = Math.floor(maximumSeconds % 3600 % 60);



    if (secondsToHours < 10) {
        secondsToHours = "0" + secondsToHours;
    }
    if (secondsToMinute < 10) {
        secondsToMinute = "0" + secondsToMinute;
    }
    if (secondsToSeconds < 10) {
        secondsToSeconds = "0" + secondsToSeconds;
    }

    let secondsToHoursDisplay = secondsToHours > 0 ? secondsToHours + (secondsToHours == 1 ? " hour, " : " hours, ") : "";
    let secondsToMinutesDisplay = secondsToMinute > 0 ? secondsToMinute + (secondsToMinute == 1 ? " minute, " : " minutes, ") : "";
    let secondsToSecondsDisplay = secondsToSeconds > 0 ? secondsToSeconds + (secondsToSeconds == 1 ? " second" : " seconds") : "";
    displayMaximumSecondsToStandardTimeShape = secondsToHoursDisplay + secondsToMinutesDisplay + secondsToSecondsDisplay;


    //------------- the time array elements turn into the seconds as if we can easily determine the maximum number (end)-------------






    // ------------------------------------chartLinkToEmail condition (start)--------------------------

    // we set a condition for chartLinkToEmail as if when the chartLinkToEmail variables which length is 0 are not show in the image tag and which length are not 0 they all are show in image tag 

    if (sliceChartDataLabel__1.length != 0) {

        chartLinkToEmail__1 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__1)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(250, 118, 16, 1.0)",data:[' + `${newSecondsArray.slice(0, 30)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__1 = `Here is showing the data from : ${chartDataLabelsArray.slice(0, 1)} - ${chartDataLabelsArray.slice(29, 30)}`;

    }
    if (sliceChartDataLabel__2.length != 0) {

        chartLinkToEmail__2 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__2)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255,102,102, 1.0)",data:[' + `${newSecondsArray.slice(30, 60)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__2 = `Here is showing the data from : ${chartDataLabelsArray.slice(30, 31)} - ${chartDataLabelsArray.slice(59, 60)}`;

    }
    if (sliceChartDataLabel__3.length != 0) {

        chartLinkToEmail__3 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__3)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 128, 128, 1.0)",data:[' + `${newSecondsArray.slice(60, 90)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__3 = `Here is showing the data from : ${chartDataLabelsArray.slice(60, 61)} - ${chartDataLabelsArray.slice(89, 90)}`;

    }
    if (sliceChartDataLabel__4.length != 0) {

        chartLinkToEmail__4 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__4)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 0, 255, 1.0)",data:[' + `${newSecondsArray.slice(90, 120)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__4 = `Here is showing the data from : ${chartDataLabelsArray.slice(90, 91)} - ${chartDataLabelsArray.slice(119, 120)}`;

    }
    if (sliceChartDataLabel__5.length != 0) {

        chartLinkToEmail__5 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__5)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255, 128, 237, 1.0)",data:[' + `${newSecondsArray.slice(120, 150)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__5 = `Here is showing the data from : ${chartDataLabelsArray.slice(120, 121)} - ${chartDataLabelsArray.slice(149, 150)}`;

    }
    if (sliceChartDataLabel__6.length != 0) {

        chartLinkToEmail__6 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__6)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(128, 0, 128, 1.0)",data:[' + `${newSecondsArray.slice(150, 180)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__6 = `Here is showing the data from : ${chartDataLabelsArray.slice(150, 151)} - ${chartDataLabelsArray.slice(179, 180)}`;

    }
    if (sliceChartDataLabel__7.length != 0) {

        chartLinkToEmail__7 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__7)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(70, 132, 153, 1.0)",data:[' + `${newSecondsArray.slice(180, 210)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__7 = ` Here is showing the data from : ${chartDataLabelsArray.slice(180, 181)} - ${chartDataLabelsArray.slice(209, 210)}`;

    }
    if (sliceChartDataLabel__8.length != 0) {

        chartLinkToEmail__8 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__8)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255, 127, 80, 1.0)",data:[' + `${newSecondsArray.slice(210, 240)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__8 = `Here is showing the data from : ${chartDataLabelsArray.slice(210, 211)} - ${chartDataLabelsArray.slice(239, 240)}`;

    }
    if (sliceChartDataLabel__9.length != 0) {

        chartLinkToEmail__9 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__9)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(218, 165, 32, 1.0)",data:[' + `${newSecondsArray.slice(240, 270)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__9 = `Here is showing the data from : ${chartDataLabelsArray.slice(240, 241)} - ${chartDataLabelsArray.slice(269, 270)}`;
    }
    if (sliceChartDataLabel__10.length != 0) {

        chartLinkToEmail__10 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__10)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(121, 64, 68, 1.0)",data:[' + `${newSecondsArray.slice(270, 300)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__10 = `Here is showing the data from : ${chartDataLabelsArray.slice(270, 271)} - ${chartDataLabelsArray.slice(299, 300)}`;

    }
    if (sliceChartDataLabel__11.length != 0) {

        chartLinkToEmail__11 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__11)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(250, 118, 16, 1.0)",data:[' + `${newSecondsArray.slice(300, 330)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__11 = `Here is showing the data from : ${chartDataLabelsArray.slice(300, 301)} - ${chartDataLabelsArray.slice(329, 330)}`

    }
    if (sliceChartDataLabel__12.length != 0) {

        chartLinkToEmail__12 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__12)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255,102,102, 1.0)",data:[' + `${newSecondsArray.slice(330, 360)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__12 = `Here is showing the data from : ${chartDataLabelsArray.slice(330, 331)} - ${chartDataLabelsArray.slice(359, 360)}`

    }
    if (sliceChartDataLabel__13.length != 0) {

        chartLinkToEmail__13 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__13)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 128, 128, 1.0)",data:[' + `${newSecondsArray.slice(360, 390)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।

        chartVariable__13 = `Here is showing the data from : ${chartDataLabelsArray.slice(360, 361)} - ${chartDataLabelsArray.slice(389, 390)}`

    }
    if (sliceChartDataLabel__14.length != 0) {

        chartLinkToEmail__14 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__14)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 0, 255, 1.0)",data:[' + `${newSecondsArray.slice(390, 420)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।


        chartVariable__14 = `Here is showing the data from : ${chartDataLabelsArray.slice(390, 391)} - ${chartDataLabelsArray.slice(419, 420)}`

    }
    if (sliceChartDataLabel__15.length != 0) {

        chartLinkToEmail__15 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__15)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255, 128, 237, 1.0)",data:[' + `${newSecondsArray.slice(420, 450)}` + ']}]}}';   // আগে ছিল chartDatasetLabelsArray.slice। এটা থাকলে প্রতি সেকেন্ডের হিসাব করে। আর বর্তমানে দুইটা প্রশ্নের মধ্যে কতটুকু সময় নেওয়া হয়েছে সেটা হিসাব করে।


        chartVariable__15 = `Here is showing the data from : ${chartDataLabelsArray.slice(420, 421)} - ${chartDataLabelsArray.slice(449, 450)}`

    }

    // ------------------------------------chartLinkToEmail condition (end)--------------------------





    //if user email input is greater than 9 character then it allowed to send the email.

    if (userEmail.length > 9) {

        Email.send({
            Host: "smtp.gmail.com",
            Username: "hafizurrahmanbu@gmail.com",
            Password: "fcqrhyktzrasblxz",
            To: `${userEmail},hafizurrahmanbu@gmail.com`,
            From: "hafizurrahmanbu@gmail.com",
            Subject: `Congratulations!! You have successfully passed ${SubjectArray.length} questions.`,
            Body: `<p style='font-size:16px'>Dear ${userEmail}! thank you very much for trying the <a href=${randomQuestionClickerWebsite}>random question clicker</a> website. Your performance is given below:</p><br/>

            <span style="color: blue;font-size:15px">Your Performance Records:</span>

            <table width="100%"  border='1px' collapsing='0' style='border-collapse: collapse;'>
            <thead>
              <tr >
                <th scope="col" style='background:linear-gradient(#dcdc22,yellow,#dcdc22);font-size:14px; padding:7px 0;'>Content 1</th>
                <th scope="col" style='background:linear-gradient(#dcdc22,yellow,#dcdc22);font-size:14px;'>Content 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style='padding:5px 12px;font-weight:bold'>Subject</td>
                <td style='padding:5px 12px;font-weight:bold;text-transform:capitalize;'>${sendSubjectToMail}</td>
              </tr>
              <tr>
                <td style='padding:5px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold'>Total Question</td>
                <td style='padding:5px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold'>${sendAllQuestionsToMail} questions</td>
              </tr>
              <tr>
                <td style='padding:5px 12px;font-weight:bold'>Maximum Spending Time</td>
                <td style='padding:5px 12px;font-weight:bold;'>${displayMaximumSecondsToStandardTimeShape}</td>
              </tr>
              <tr>
              <td style='padding:5px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold'>Started At</td>
              <td style='padding:5px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold'>${pickStartTime}</td>
            </tr>
              <tr>
                <td style='padding:5px 12px;font-weight:bold'>Finished At</td>
                <td style='padding:5px 12px;font-weight:bold'>${chartTimeForEmailArray[chartTimeForEmailArray.length - 1]} ${sendSessionToMail}</td>
              </tr>
              <tr>
                <td style='padding:6px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold'>Total Time</td>
                <td style='padding:6px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold;'>${sendTimerToMail} hour(s)</td>
              </tr>
            </tbody>
          </table> <br/>`+
                `
                <div style="background:#e6e6e66b;border: 2px dashed gray;padding: 3px 10px;border-radius: 5px;">
                <h2 style='margin-bottom:10px; margin-top:0px;font-size:20px;color:#FF4040;'>Charts According to your performance:</h2>
                <h3 style='margin:0;'>What the Chart is Describing?</h3>
                <p style='margin:0;font-size:17px;font-family:"Roboto";'>The chart describes that how much time <span style='color:#FF4040'>(as seconds)</span> you spend for going through from one question to another and it also describes that what was the actual time <span style='color:#FF4040'>(as hh:mm:ss)</span> from going to one question to another. We oriented the chart as a bar chart where spending time <span style='color:#FF4040'>(as seconds)</span> is placed about the <span style='font-weight:bold'>'Y'</span> axis of the chart and actual time <span style='color:#FF4040'>(hh:mm:ss)</span> is placed about the <span style='font-weight:bold'>'X'</span> axis. It might divided the chart in many more on the basis of a lots of data. </p>
                </div> ` +

                `<div>
                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__1 === undefined ? ' ' : chartVariable__1}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__1 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__1}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__2 === undefined ? ' ' : chartVariable__2}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__2 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__2}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__3 === undefined ? ' ' : chartVariable__3}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__3 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__3}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__4 === undefined ? ' ' : chartVariable__4}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__4 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__4}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__5 === undefined ? ' ' : chartVariable__5}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__5 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__5}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__6 === undefined ? ' ' : chartVariable__6}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__6 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__6}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__7 === undefined ? ' ' : chartVariable__7}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__7 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__7}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__8 === undefined ? ' ' : chartVariable__8}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__8 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__8}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__9 === undefined ? ' ' : chartVariable__9}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__9 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__9}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__10 === undefined ? ' ' : chartVariable__10}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__10 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__10}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__11 === undefined ? ' ' : chartVariable__11}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__11 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__11}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__12 === undefined ? ' ' : chartVariable__12}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__12 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__12}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__13 === undefined ? ' ' : chartVariable__13}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__13 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__13}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__14 === undefined ? ' ' : chartVariable__14}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__14 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__14}' alt="">

                <h3 style="font-size:19px;color: #080808;background:yellow;padding-left: 7px;">${chartVariable__15 === undefined ? ' ' : chartVariable__15}</h3>
                <img style='width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__15 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__15}' alt="">
                </div>`+
                `<span style='color:#FF4040;font-size:19px;color:#ff4040;font-weight:600;'>All questions you going through are given below:</span>` +
                SubjectArray.map((singleQuestion, index) => {
                    return '<br/> <b> Question-</b>' + `<b>${(index + 1)}:</b>` + ' ' + `${singleQuestion?.question.slice(0, -2)}`
                }) + `<p style='font-size:18px;color:#cc2073'>Thanks for your patient. Is this website is really helpful? If yeah, then don't forget to give a reply with your review.</p>` + `<img style='width:97%' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiEIAOT6BpbQqYoHjbm6R_L8teLX-JFUg_HxemFlPduYybLG7rT1ue-85p53yJRwrVfJwvAJEIn_0DaEskLlvLDCpp-2Lrrv5FTOZkzUkn6Ah33Zxf427Fmqu571tMfGGb8t8PF0ocKk6QmA2rP2v0lXd2TWl1O_8iXxfRE_nHUJATFaQ-k2sq1d4EAw/s2500/email%20banner.png' alt='Hafizur email banner'>`

        }).then(message => {
            if (message === 'OK') {
                window.location.reload();   // i use the reload function as if the popup modal removed
            }
            // alert(message)
        }
        );
    }


}

// ===========================send a free email to the user email account (end)==================================





//declaring array
// let crystallographyArray = ['Crystallography', 'Crystal', 'general characteristics of crystal', 'Perfect crystal', 'Crystalline', 'Amorphous substance', 'Mineral', 'Characteristics of Mineral', 'Unit cell', 'Space lattice', 'Why Crystallography in Geosciences? / Importance of crystallography / Why study crystallography', 'Descriptive definition of crystallography / what subject the crystallography includes? / What the crystallography discuss about?', 'Why crystals have beautiful external form?', 'Why do we study crystallography? ', 'Unit cell Vs. Space lattice / difference between Unit cell Vs. Space lattice', 'Crystal vs. Crystalline vs. Amorphous / difference between Crystal vs. Crystalline vs. Amorphous', '1)	Euhedral', 'Subhedral', 'Anhedral', 'Euhedral vs. Subhedral vs Anhedral/ difference between Euhedral vs. Subhedral vs Anhedral', 'Faces', 'like face', 'unlike face', 'type of faces?', 'Edges', 'Interfacial angle', 'Solid angles', 'Form', 'Crystallographic axes', 'Intercepts', 'Lattice constant or Lattice parameter', 'Crystal Form', 'how can crystal form classified?', 'simple form', 'combination form', 'open form', 'Close form', 'General form', 'Special form', 'discuss Common forms in Crystallography', 'pedion', 'pinacoid', 'Prism', 'Pyramid', 'Dome', 'what is symmetry?', 'Describe symmetry with proper diagram/example', 'Element of Symmetry', 'Symmetry element', 'Axis of symmetry (with statement)', 'Plane of symmetry (with statement)', 'Types of symmetry?', 'center of symmetry (with statement)', 'Symmetry Operations', 'types of symmetry operations', 'Rotation Symmetry', 'types of rotational symmetry axes?', '1-Fold Rotation Axis', '2-fold Rotation Axis', '3-Fold Rotation Axis', '4-Fold Rotation Axis', '6-Fold Rotation Axis', 'what is Crystal System', 'how can crystal classified of?', 'name of 7 crystal system', 'cubic', 'Tetragonal', 'Orthorhombic', 'Rhombohedral', 'Hexagonal', 'Monoclinic', 'Triclinic', 'which minerals are include in Lower System', 'which minerals are include in Higher system', 'which minerals are include in Intermediate system', 'Lattice point', 'Bravais lattice / The 14 Bravais lattices', 'Types of Unit cells', 'Primitive unit cell', 'Body centered unit cell', 'Faced centered unit cell', 'End centered unit cell', 'Where can I put the lattice points?', 'what unit cells are include in Isometric(cubic) cells', 'what unit cells are include in Tetragonal system', 'what unit cells are include in Orthorhombic system', 'what unit cells are include in Rhombohedral system', 'what unit cells are include in Hexagonal system', 'what unit cells are include in Monoclinic system', 'what unit cells are include in Triclinic system', 'what is Bravais Law (with statement)', 'Law of constancy of interfacial angle', 'How do we keep track of the faces of a crystal?', 'Law of rational indices', 'Law of axial-ratio', 'Law of constancy of symmetry', 'Law of constancy of symmetry', 'Law of crystallographic axes', 'types of Symmetry Operations (৭ টার নাম বলতে হবে)', 'which symmetry are include in Basic symmetry operation?', 'which symmetry are include in compound symmetry operation?', 'what is Reflection Symmetry?', 'what is Rotation Symmetry?', 'what is Inversion Symmetry?', 'difference between rotation and reflection symmetry/ rotation symmetry vs Reflection symmetry', 'what is Rotoinversion Symmetry', 'Crystal Classes/32 Crystal classes/ 32 Point group', 'what is Hermann-Mauguin (International) Symbols', 'how to derive the Hermann-Mauguin symbols in crystal classes? (কি কি উপায়ে Herman-Mauguin symbols বের করা হয় সেইটা লিখতে হবে।', 'Hermann-Mauguin (International) Symbols in Rhombic-dipyramidal class', 'Hermann-Mauguin (International) Symbols in Ditetragonal dipyramidal class', 'Triclinic system', 'Monoclinic system', 'Orthorhombic system', 'Tetragonal system', 'Hexagonal system', 'Isometric system', 'describe the classes of Triclinic system', 'describe the classes of Monoclinic system', 'What criteria is involved in dividing the 32 crystal classes into 6/7 crystal systems? ', 'Twinning', 'Twin plane', 'Twin axis', 'Composition surface', 'types of twinning?', 'contact twin?', 'Penetration twin?', 'What are three ways that twinning can originate?', 'Define polymorphism', 'define polymorphic transformations', 'Give several examples of minerals that show polymorphism, being sure to name all of the polymorphs.', 'Describe that three different types of transformations that result in new polymorphs.', 'define metamict mineral', 'define pseudomorphism', 'define mineraloid', 'Difference between Crystallographic axis and coordinate axis', 'polisynthetic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'cyclic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'I Love You Sumai ❤❤', 'what is Zone', 'what is zone symbol', 'what is vectorial properties', 'types of vectorial properties', 'properties of continuous vectorial', 'properties of discontinuous vectorial', 'Notation Summary', 'Miller Indices for Directions', 'Miller Indices for Directions', 'Miller Indices for Planes: Procedure', 'Family of Directions <100>,<110>,<111>', 'Importance of Miller Indices ', 'Miller Indices for Hexahedron and Octahedron', 'Miller Bravais Indices for Hexagonal system', 'Crystal Habit', 'types of Crystal Habit', 'systematic way to define crystallographic angles', 'Stereographic Projection', 'component of stereonet', 'X-Ray Crystallography', 'X-rays and the Production of X-rays', 'Continuous and Characteristic X-ray Spectra', 'types of X-ray', "X-ray Diffraction and Bragg's Law", 'The X-ray Powder Method'];


let crystallographyArray = [
    {
        question: 'Crystallography',
        answer: ''
    },
    {
        question: 'Crystal',
        answer: ''
    },
    {
        question: 'general characteristics of crystal',
        answer: ''
    },
    {
        question: 'Perfect crystal',
        answer: ''
    },
    {
        question: 'Crystalline',
        answer: ''
    },
    {
        question: 'Amorphous substance',
        answer: ''
    },
    {
        question: 'Mineral',
        answer: ''
    },
    {
        question: 'Characteristics of Mineral',
        answer: ''
    },
    {
        question: 'Unit cell',
        answer: ''
    },
    {
        question: 'Space lattice',
        answer: ''
    },
    {
        question: 'Why Crystallography in Geosciences? / Importance of crystallography / Why study crystallography',
        answer: ''
    },
    {
        question: 'Descriptive definition of crystallography / what subject the crystallography includes? / What the crystallography discuss about?',
        answer: ''
    },
    {
        question: 'Why crystals have beautiful external form?',
        answer: ''
    },
    {
        question: 'Why do we study crystallography? ',
        answer: ''
    },
    {
        question: 'Unit cell Vs. Space lattice / difference between Unit cell Vs. Space lattice',
        answer: ''
    },
    {
        question: 'Crystal vs. Crystalline vs. Amorphous / difference between Crystal vs. Crystalline vs. Amorphous',
        answer: ''
    },
    {
        question: 'Euhedral',
        answer: ''
    },
    {
        question: 'Subhedral',
        answer: ''
    },
    {
        question: 'Anhedral',
        answer: ''
    },
    {
        question: 'Euhedral vs. Subhedral vs Anhedral/ difference between Euhedral vs. Subhedral vs Anhedral',
        answer: ''
    },
    {
        question: 'Faces',
        answer: ''
    },
    {
        question: 'like face',
        answer: ''
    },
    {
        question: 'unlike face',
        answer: ''
    },
    {
        question: 'type of faces?',
        answer: ''
    },
    {
        question: 'Edges',
        answer: ''
    },
    {
        question: 'Interfacial angle',
        answer: ''
    },
    {
        question: 'Solid angles',
        answer: ''
    },
    {
        question: 'Form',
        answer: ''
    },
    {
        question: 'Crystallographic axes',
        answer: ''
    },
    {
        question: 'Intercepts',
        answer: ''
    },
    {
        question: 'Lattice constant or Lattice parameter',
        answer: ''
    },
    {
        question: 'Crystal Form',
        answer: ''
    },
    {
        question: 'how can crystal form classified?',
        answer: ''
    },
    {
        question: 'simple form',
        answer: ''
    },
    {
        question: 'combination form',
        answer: ''
    },
    {
        question: 'open form',
        answer: ''
    },
    {
        question: 'Close form',
        answer: ''
    },
    {
        question: 'General form',
        answer: ''
    },
    {
        question: 'Special form',
        answer: ''
    },
    {
        question: 'discuss Common forms in Crystallography',
        answer: ''
    },
    {
        question: 'pedion',
        answer: ''
    },
    {
        question: 'pinacoid',
        answer: ''
    },
    {
        question: 'Prism',
        answer: ''
    },
    {
        question: 'Pyramid',
        answer: ''
    },
    {
        question: 'Dome',
        answer: ''
    },
    {
        question: 'what is symmetry?',
        answer: ''
    },
    {
        question: 'Describe symmetry with proper diagram/example',
        answer: ''
    },
    {
        question: 'Element of Symmetry',
        answer: ''
    },
    {
        question: 'Symmetry element',
        answer: ''
    },
    {
        question: 'Axis of symmetry (with statement)',
        answer: ''
    },
    {
        question: 'Plane of symmetry (with statement)',
        answer: ''
    },
    {
        question: 'Types of symmetry?',
        answer: ''
    },
    {
        question: 'center of symmetry (with statement)',
        answer: ''
    },
    {
        question: 'Symmetry Operations',
        answer: ''
    },
    {
        question: 'types of symmetry operations',
        answer: ''
    },
    {
        question: 'Rotation Symmetry',
        answer: ''
    },
    {
        question: 'types of rotational symmetry axes?',
        answer: ''
    },
    {
        question: '1-Fold Rotation Axis',
        answer: ''
    },
    {
        question: '2-fold Rotation Axis',
        answer: ''
    },
    {
        question: '3-Fold Rotation Axis',
        answer: ''
    },
    {
        question: '4-Fold Rotation Axis',
        answer: ''
    },
    {
        question: '6-Fold Rotation Axis',
        answer: ''
    },
    {
        question: 'what is Crystal System',
        answer: ''
    },
    {
        question: 'how can crystal classified of?',
        answer: ''
    },
    {
        question: 'name of 7 crystal system',
        answer: ''
    },
    {
        question: 'cubic',
        answer: ''
    },
    {
        question: 'Tetragonal',
        answer: ''
    },
    {
        question: 'Orthorhombic',
        answer: ''
    },
    {
        question: 'Rhombohedral',
        answer: ''
    },
    {
        question: 'Hexagonal',
        answer: ''
    },
    {
        question: 'Monoclinic',
        answer: ''
    },
    {
        question: 'Triclinic',
        answer: ''
    },
    {
        question: 'which minerals are include in Lower System',
        answer: ''
    },
    {
        question: 'which minerals are include in Higher system',
        answer: ''
    },
    {
        question: 'which minerals are include in Intermediate system',
        answer: ''
    },
    {
        question: 'Lattice point',
        answer: ''
    },
    {
        question: 'Bravais lattice / The 14 Bravais lattices',
        answer: ''
    },
    {
        question: 'Types of Unit cells',
        answer: ''
    },
    {
        question: 'Primitive unit cell',
        answer: ''
    },
    {
        question: 'Body centered unit cell',
        answer: ''
    },
    {
        question: 'Faced centered unit cell',
        answer: ''
    },
    {
        question: 'End centered unit cell',
        answer: ''
    },
    {
        question: 'Where can I put the lattice points?',
        answer: ''
    },
    {
        question: 'what unit cells are include in Isometric(cubic) cells',
        answer: ''
    },
    {
        question: 'what unit cells are include in Tetragonal system',
        answer: ''
    },
    {
        question: 'what unit cells are include in Orthorhombic system',
        answer: ''
    },
    {
        question: 'what unit cells are include in Rhombohedral system',
        answer: ''
    },
    {
        question: 'what unit cells are include in Hexagonal system',
        answer: ''
    },
    {
        question: 'what unit cells are include in Monoclinic system',
        answer: ''
    },
    {
        question: 'what unit cells are include in Triclinic system',
        answer: ''
    },
    {
        question: 'what is Bravais Law (with statement)',
        answer: ''
    },
    {
        question: 'Law of constancy of interfacial angle',
        answer: ''
    },
    {
        question: 'How do we keep track of the faces of a crystal?',
        answer: ''
    },
    {
        question: 'Law of rational indices',
        answer: ''
    },
    {
        question: 'Law of axial-ratio',
        answer: ''
    },
    {
        question: 'Law of constancy of symmetry',
        answer: ''
    },
    {
        question: 'Law of constancy of symmetry',
        answer: ''
    },
    {
        question: 'Law of crystallographic axes',
        answer: ''
    },
    {
        question: 'types of Symmetry Operations (৭ টার নাম বলতে হবে)',
        answer: ''
    },
    {
        question: 'which symmetry are include in Basic symmetry operation?',
        answer: ''
    },
    {
        question: 'which symmetry are include in compound symmetry operation?',
        answer: ''
    },
    {
        question: 'what is Reflection Symmetry?',
        answer: ''
    },
    {
        question: 'what is Rotation Symmetry?',
        answer: ''
    },
    {
        question: 'what is Inversion Symmetry?',
        answer: ''
    },
    {
        question: 'difference between rotation and reflection symmetry/ rotation symmetry vs Reflection symmetry',
        answer: ''
    },
    {
        question: 'what is Rotoinversion Symmetry',
        answer: ''
    },
    {
        question: 'Crystal Classes/32 Crystal classes/ 32 Point group',
        answer: ''
    },
    {
        question: 'what is Hermann-Mauguin (International) Symbols',
        answer: ''
    },
    {
        question: 'how to derive the Hermann-Mauguin symbols in crystal classes? (কি কি উপায়ে Herman-Mauguin symbols বের করা হয় সেইটা লিখতে হবে।',
        answer: ''
    },
    {
        question: 'Hermann-Mauguin (International) Symbols in Rhombic-dipyramidal class',
        answer: ''
    },
    {
        question: 'Hermann-Mauguin (International) Symbols in Ditetragonal dipyramidal class',
        answer: ''
    },
    {
        question: 'Triclinic system',
        answer: ''
    },
    {
        question: 'Monoclinic system',
        answer: ''
    },
    {
        question: 'Orthorhombic system',
        answer: ''
    },
    {
        question: 'Tetragonal system',
        answer: ''
    },
    {
        question: 'Hexagonal system',
        answer: ''
    },
    {
        question: 'Isometric system',
        answer: ''
    },
    {
        question: 'describe the classes of Triclinic system',
        answer: ''
    },
    {
        question: 'describe the classes of Monoclinic system',
        answer: ''
    },
    {
        question: 'What criteria is involved in dividing the 32 crystal classes into 6/7 crystal systems? ',
        answer: ''
    },
    {
        question: 'Twinning',
        answer: ''
    },
    {
        question: 'Twin plane',
        answer: ''
    },
    {
        question: 'Twin axis',
        answer: ''
    },
    {
        question: 'Composition surface',
        answer: ''
    },
    {
        question: 'types of twinning?',
        answer: ''
    },
    {
        question: 'contact twin?',
        answer: ''
    },
    {
        question: 'Penetration twin?',
        answer: ''
    },
    {
        question: 'What are three ways that twinning can originate?',
        answer: ''
    },
    {
        question: 'Define polymorphism',
        answer: ''
    },
    {
        question: 'define polymorphic transformations',
        answer: ''
    },
    {
        question: 'Give several examples of minerals that show polymorphism,{question: being sure to name all of the polymorphs.',
        answer: ''
    },
    {
        question: 'Describe that three different types of transformations that result in new polymorphs.',
        answer: ''
    },
    {
        question: 'define metamict mineral',
        answer: ''
    },
    {
        question: 'define pseudomorphism',
        answer: ''
    },
    {
        question: 'define mineraloid',
        answer: ''
    },
    {
        question: 'Difference between Crystallographic axis and coordinate axis',
        answer: ''
    },
    {
        question: 'polisynthetic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)',
        answer: ''
    },
    {
        question: 'cyclic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)',
        answer: ''
    },
    {
        question: 'I Love You Sumai ❤❤',
        answer: ''
    },
    {
        question: 'what is Zone',
        answer: ''
    },
    {
        question: 'what is zone symbol',
        answer: ''
    },
    {
        question: 'what is vectorial properties',
        answer: ''
    },
    {
        question: 'types of vectorial properties',
        answer: ''
    },
    {
        question: 'properties of continuous vectorial',
        answer: ''
    },
    {
        question: 'properties of discontinuous vectorial',
        answer: ''
    },
    {
        question: 'Notation Summary',
        answer: ''
    },
    {
        question: 'Miller Indices for Directions',
        answer: ''
    },
    {
        question: 'Miller Indices for Directions',
        answer: ''
    },
    {
        question: 'Miller Indices for Planes: Procedure',
        answer: ''
    },
    {
        question: 'Family of Directions <100>,<110>,<111>',
        answer: ''
    },
    {
        question: 'Importance of Miller Indices ',
        answer: ''
    },
    {
        question: 'Miller Indices for Hexahedron and Octahedron',
        answer: ''
    },
    {
        question: 'Miller Bravais Indices for Hexagonal system',
        answer: ''
    },
    {
        question: 'Crystal Habit',
        answer: ''
    },
    {
        question: 'types of Crystal Habit',
        answer: ''
    },
    {
        question: 'systematic way to define crystallographic angles',
        answer: ''
    },
    {
        question: 'Stereographic Projection',
        answer: ''
    },
    {
        question: 'component of stereonet',
        answer: ''
    },
    {
        question: 'X-Ray Crystallography',
        answer: ''
    },
    {
        question: 'X-rays and the Production of X-rays',
        answer: ''
    },
    {
        question: 'Continuous and Characteristic X-ray Spectra',
        answer: ''
    },
    {
        question: 'types of X-ray',
        answer: ''
    },
    {
        question: "X-ray Diffraction and Bragg's Law",
        answer: ''
    },
    {
        question: 'The X-ray Powder Method',
        answer: ''
    },
];

let mathematicsArray = ['test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'mamun'];

let opticalMineralogyArray = [
    {
        question: 'where is the building? 01',
        answer: ""
    }
];

let hydrologyArrayByIlliasMahmud = ['test purpose', 'sucess'];

let hydrologyArrayBySukhen = ['test purpose', 'sucess'];

let dspArray = [
    {
        question: 'what is Siliciclastic Sedimentary Rocks 01',
        answer: 'Siliciclastic sedimentary rock: The sedimentary rocks composed mainly of silicate particles derived by the weathering breakdown of older rocks and by pyroclastic volcanism are called siliciclastic sedimentary rock.'
    },
    {
        question: 'Sandstone (in details) 01',
        answer: '1. Sandstone make up 20-25 % of average sedimentary rock.<br/> 2. This sandstone is very common in every geological ages.<br/>3. Sandstone consist of silicate grains that are ranging from(1/ 16 - 2) mm.<br/>4. This silicate grains make up the frame work fraction of sandstone.</br>5. Sandstone consist of various amount of cement and very fine size material(called matrix)<br/>6. The matrix present in sandstone fill up the interstitial pore space of framework grain.<br/>7. Because of the coarse size of the sandstone(compare to shale) it can be accurately identify in the petrographic and backscattered electron microscope.'
    },
    {
        question: 'Framework Grain (in details) 01',
        answer: '1. The particles that make up sandstone and mainly composed of sand size, very coarse silt - size silicate minerals and rock fragments are called framework grain.<br/>2. This framework mineralogy / framework grain composed of mainly 4 kinds of mineral:<br/><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizGRq2vbH7tPU28GycnN3TJdQ6Nr262CtwNFMK0w00SSGh3uRMQoB9QnIRmw7WW-I24coD8N9Rl-_iNPz3fsoF4nIOcV3DSEdLlPfaPHPMqMJb1ZUEeBVjI-lJDjyqaexcrNFujZGdwpo--_r3yh1vww3dsjgB9dakqeAuX3pkk_iyDLhX3_lkMmdUEg/s702/framework%20grain.png">'
    },
    {
        question: 'Quartz(in details) 02',
        answer: '1. Quartz (SiO2) is the dominant mineral of most sandstone.<br/>2. Quartz make up average 50-60% of sandstone.<br/>3. Quartz can easily identify in megascopically (hand specimen) and in the thin section of petrographic microscope.<br/>4. Sometimes quartz can make confused with the feldspar because of their superior hardness.<br/>5. Quartz can survive in multiple recycling episode.<br/> 6. Quartz grain of some sandstone can be rounded shape because of their long transportation process.<br/>7. Quartz can form as single grain (mono-crystalline) and composite grain (poly-crystalline).<br/>8. In this condition (single and composite grain) if the quartz is examined in the thin section of petrographic microscope then it display sweeping pattern extension with the rotate of stage. This pattern is called undulatory extension.<br/>9. Some scientists suggest (think) that the derived source of quartz can distinguish by the help of polycrystalinity and undulatory extension property.<br/>10. Quartz are derived from plutonic rock (especially felsic rock like granite), metamorphic rock and older sandstone.'
    },
    {
        question: 'Feldspars(in details) 03',
        answer: '1. Feldspar make up 10-20 % of average framework grain of sandstone.<br/>2. Feldspar is the second most dominant mineral of sandstone.<br/>3. Feldspar can be divided into several varieties depends on chemical composition and optical properties.<br/>4. Feldspar can divided into two broad group:<br/>i.Alkali feldspar<br/>ii.Plagioclase feldspar<br/>'
    },
    {
        question: 'how many groups are feldspars devided into? and what are they? 03',
        answer: 'Feldspar can divided into two broad group:<br/>i.Alkali feldspar<br/>ii.Plagioclase feldspar'
    },
    {
        question: 'Alkali Feldspar(in details) 03',
        answer: '1. Alkali feldspars form a complex solid solution series ranging in composition from KAlSi3 O8 through(K, Na) KAlSi3O8 to NaAlSi_O8<br/>2. Potassium - rich feldspar is the most common member in this group.<br/>3. Alkali feldspar is called potassium feldspar over the world.<br/>4. Sometimes it called K- spar n a short form.<br/>5. The common member of potassium feldspar / alkali feldspar are:<br/>a) Orthoclase<br/>b) Microcline<br/>c) Sanidine<br/>'
    },
    {
        question: 'what are the common members of Alkali Feldspar 03',
        answer: 'The common member of potassium feldspar / alkali feldspar are:<br/>a) Orthoclase<br/>b) Microcline<br/>c) Sanidine<br/>'
    },
    {
        question: 'Plagioclase feldspar (in details) 03',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhilsu67bk69pBLeTnZQ3-aRg1SJ8I5bA6DxCad0LgvwLrHyphq2jrkyuWMZm57bLFGo1FuyrAS3nd7ohPumXCmE8yqD8Az54evRh-vx6LfEQEnedTUL75hwQMSxGASHXMRR-2xySgrYMGITONV8j7PWLUpvLPY7mzSMj3RLT4_JQkQPPzgWH0cZWFjKg/s16000/1.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGFzsRX7FLSz2nbriyRwQzz0jfrr9v8K6U6i1q4RbpGA3Vsw85qi6s78ZeJUNF9uay6h1APq2q0PDu-quY-qE3j1l7AejNZ05fUH0b4BxAaDW0DIhtol0JrvVq56SDfWl9Dk1fpDwzRiKfLU2I0sAqGsCyndMAr8d4L2h0sE6-2aLOjUrB8lglaatonQ/s16000/1.png">'
    },
    {
        question: 'Accessory Framework Mineral 04',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8uMQ2N4vHZaF4old48QfSNAtPL2tgWh0G5MOqkLST6fy8YLdyHmtKTdaNTzwhSr0tqGFv-vu8YKR2_PAut4CzGHEWTCl2IzvQQcUVOQeOyeCeREDvs-SzDBurPdwfA-s43S5XCyMEbzOOGUt8CVlccLPnhQppl6ibnNub0VCMnfASAQfd48e0AMaDnA/s16000/1.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyqgd54BFgxgfKwWcqIuV4VpXnKnDhNEdopDqLblEwofQ0xnc4yNHzyFqnTYu8z_ANFe6UxkG9x8E03ZW-Asie75LoBDqnfuHIgbCtwuvdTueScaZMCnifqqXLVxk0cxwSL-39a62ujwWWjKKsEDwMIjEY1lrNs5trlOwLDwSpCm9By9rSUUowenzpXA/s16000/1.png">'
    },
    {
        question: 'give examples of some Accessory Framework Minerals 04',
        answer: '<img src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLnNqeSFKiEWUrKuSgs0twRok4h8-XpR-8bmv-PxCCfHUKEAOSHU8a7niUdcLJFPNZiQtWP8WU9rULugCZDM3hfgtPMfbUkyQ2Zpw51qI1SOEE1wjkaXQM5NdIS6obW3Pkoyt3Q8_Vfr62QsGief-j-HinBjOgMs5G9-KNYjc5d-Du-9jM6DFzcd0Q2Q/s731/04.png" >'
    },
    {
        question: 'what is havey mineral? 05',
        answer: 'The minerals which have specific gravity more than 2.9 is called heavy mineral.'
    },
    {
        question: 'kinds/types of heavy mineral? 05',
        answer: 'Heavy mineral can be two kinds of:<br/>1)	Stable heavy mineral<br/>	2) unstable heavy mineral'
    },
    {
        question: 'what is Rock Fragments? 05',
        answer: '<img src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiGejpgEqo4f4ikD4OPWHVMttH4VbjGsmqrMAP8s6TZof3VwVvoaOWtti17D4nG4tXIyXqiXvn18lk5hRuFswypcviycRU29ti9zlEfcUB5yU8iuikJOFHCW__DdMWOfNsz7xU3W2F6DbZyr4QWD-t_L8TwYvCx4fXyKQEzHN2M4EzN4H7qb7pMbONfw/s16000/5.png" >'
    },
    {
        question: 'what is Mineral Cements? 06',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrG50b8WVkvmmtkuTwLQbt_7tkF93zhhjcALT9bdBYsHpfQ_VasIHPGr-Fd4zpohP_2ZQqtMy1gf-HLKmFjl-lVf1M6BebvKuZ7FmZCt0jZVDBOADackLpiFOD-mmpPAiMUsYWz8NdZ5oodg9NtKtmzsNfhtwV4LB2Y5iN6DzsknmBgpgRQWPvV2xJfg/s16000/6.png">'
    },
    {
        question: 'types / kinds of cementing minerals ? 06',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-Y8I78Tug8ciFzzmoCxHJAXd8tK5S-SoEDFrdOGG_Gk-dME2bSvUvQFq9lh6KbixgrLrbSmROMdleHP0zPUm5cf36NJ1c91Ewl98E4Vx6gB1bd23LfROCXeTLXKUz5eEjmvdTJw6vEaZsZ1UIppe3pnYEbiOrDF0sAwm6KjIot1LAmebUxVLhehYYfg/s16000/6.png">'
    },
    {
        question: 'Matrix Mineral(in details) 06',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidwEM11hd8RBuhotDijbLbZR0NVze6SXDcx9C_8pCFPQHvGbyLj87BvGTSS3LklSKsfMjfDnoD1CYk8sjU2WbPOuc7MBYE_zmFvtDN7-wdU9ILJ6Em2o4FXgTaU7DZyCas9xOlz8F-LPxisnNIfl4a8G0ZlmauFAtmILBIik9WvzffdCA6bbW00Mbokg/s16000/6.png">'
    },
    {
        question: 'give the examples of most common clay minerals groups ? 06',
        answer: 'The most common clay minerals groups are:<br/>1) Ilite<br/>2) Smectite<br/>3) Kaolinite and<br/>4) Chlorite<br/>'
    },
    {
        question: 'describes Chemical composition of sandstone 07',
        answer: '<img src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9IbI5XSKpX4_TF6UhudDHK--Vv6RDIwWHBUFgKEJToXU1K-h1LROHIlGQ3kkT0ycT-1AFFP0tId6toto-pdBltr5NAGuoboM5Nz5xauSn3HZkh7jUDinKCbR7y3sYZNMEiQ5eV6GTMXSY_-1d3WJGuN5KvsNNUKa58r923k2hWXg6cSYSRHAQpzb6hg/s16000/1.png" ><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWFo5l09eT9LfsKr_tASoH_5oOnwai9b1neJJvdm6ruFhko6kPd0ztZVPnwXqSa6J8yZObvNGPD6MxWPkRN1hQoy6qYK5mMSFT6uBMs3u-fZc-Ial85zxjsCptfWRoPgJWNndxumCwHaQ787QXfNZmeooo_U3DYOFUELyqniEOwOPUVNNrwN91xQxw-A/s16000/1.png">'
    },
    {
        question: 'Classification of Sandstone(must be read from 1st year slide with pictures) 07',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWFo5l09eT9LfsKr_tASoH_5oOnwai9b1neJJvdm6ruFhko6kPd0ztZVPnwXqSa6J8yZObvNGPD6MxWPkRN1hQoy6qYK5mMSFT6uBMs3u-fZc-Ial85zxjsCptfWRoPgJWNndxumCwHaQ787QXfNZmeooo_U3DYOFUELyqniEOwOPUVNNrwN91xQxw-A/s16000/1.png" >'
    },
    {
        question: 'describes Mineralogical Composition of Sandstone(must imagine the picture) 08',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiF850l8IFNMd5Kr6mGV0StmmcrMH9_ZFRbIhE2eVl2JZkX5c_azdkTiEDGukMxix5x61G20oid1Ct8IOse_3paV19l1SxYZWlDGEL3z4TBy4uxq-2tOrXOh9FnuVCUzY9y8mvNRJ9giStRbc9lwVPfRoINj2iFcawzm1wrKBEqNPNVyTlKGgCK_Y0YHQ/s16000/1.png" ><img scr="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbqLcNXW7DASkdRWQUygmWAfDrGGdzkLT7ya85gEKTizU3NEv3LsAu0XbxYq4zI3STfDCMfUEX2KKtpu6GVHe_cH8mhzV1sba0ArGP6Meia8HuWOKfmXg3XdWCPJiFdVK-uBrypPIRYDLg8S-t9XQIa44h9XpaHPVdfVEeueAp2bMSoXiR9DA_EhsKzQ/s16000/1.png">'
    },
    {
        question: 'types / classification of sandstone ? (if the sandstone is free from matrix(< 5 %)) 08',
        answer: '<img scr="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbqLcNXW7DASkdRWQUygmWAfDrGGdzkLT7ya85gEKTizU3NEv3LsAu0XbxYq4zI3STfDCMfUEX2KKtpu6GVHe_cH8mhzV1sba0ArGP6Meia8HuWOKfmXg3XdWCPJiFdVK-uBrypPIRYDLg8S-t9XQIa44h9XpaHPVdfVEeueAp2bMSoXiR9DA_EhsKzQ/s16000/1.png">'
    },
    {
        question: 'Sandstone Maturity(in details) 09',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix5towp-fs9WrwICFwFVHEU5JdcOrJDfIAv-v0wTE_gi88OrXw58MIgBWTbQTAXV00VB5i3NZ8nBagFOk1K4xykxRwrF_eXuP5LweaAFCI3KHO5u5FhdV8oj9syWJ0eJqaqmFYkswPUFtayPr99hKEOxSZfiKkEgBOmzXdvarguotNPT9-RDKVb_f7SA/s16000/1.png" ><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkGCpfhCLnYi3VVqgdtOWH3K0dnL3uZ94gjWGcEEzCnnjl6EunZbctBKoNRMQoGdf-IlFxJDFThaSPM1J2QurfeGII07DTqOPIEoaMGKztLSPJwxlk_JldeCquREXK2GiAcUaWfa4APv6VTI473Vj1EdMlo-74vYmezqqcyHtA5uckJQ_THGLpfCDc_A/s16000/1.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrmWOPjzMBnatWNqwEuqoTLvYJM3adPPEypXrsB8ETz96Vo3Ysv656A6ns9cl7NJL97hn63_o_f7F8P8_yt9rZHhjJblX1nxgfV2dKsv1kL2tWs8rg6z5BUemdIZx8U-c45B1luG4PS2jnQ5JwC225HFHfIVgTxUDpmlT7v0E8y90Ll69I2gKG97UZSg/s16000/1.png">'
    },
    {
        question: 'types of sandstone maturity ? 09',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkGCpfhCLnYi3VVqgdtOWH3K0dnL3uZ94gjWGcEEzCnnjl6EunZbctBKoNRMQoGdf-IlFxJDFThaSPM1J2QurfeGII07DTqOPIEoaMGKztLSPJwxlk_JldeCquREXK2GiAcUaWfa4APv6VTI473Vj1EdMlo-74vYmezqqcyHtA5uckJQ_THGLpfCDc_A/s16000/1.png">'
    },
    {
        question: 'on the basis of framework mineralogy how many major groups the sandstones are devided into ? 11',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6J4cBRaIgUXxzc4caXjy8CN9guN4tjXTcs8LfHks3VljAvYIHJmj89cHk2aFJoxWgnUe_Kd_puEJyNOZDXq-Ann-aU7wKSeH8U2OUMi41qIRt60V69PmeEhxB8P3-UCkiwzCUGhzS2-oJHqKODEDDwfsGMz-qaf7V5h8BLW244wIW6Er3rfnT9gi8kw/s16000/1.png">'
    },
    {
        question: 'quartz arenites(in details) 11',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhp2oiycfFqVMP-dWVzNmo3GJdA7AQZS4GIxOBLitO0aCnFAAVYPs6Ll60SEtVQK64dh3xiyKd0UEBeGXdStD2f6IXqJdKLt8gCfkLbfM311lzFLHZeb-i-tYZChCUOkniF5n_jo7D7gngVeM3w-lfT3mnf2azhpfX3CTVOe8q9Hht5Yh1r5-V1c3Y8Cg/s16000/1.png">'
    },
    {
        question: 'feldspathic arenites(in details) 11',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4s5JlUC_nIQX6vbibjK_X7Dz_gOXAxJ34Oir3e5uBfveufre6LtqsaPW7GmRJfkKBVjFii4ShD4ZP-WwBQKCEdYshDxVs0S0CLe6z88UcZSAB2NGnDgesfLCTukh-qepPxcnKAUxKgCWQU5wEWozTffx-Nlnf8pLCFJPUHGCM-jhSMVNEB8TMYteCHA/s16000/1.png">'
    },
    {
        question: 'lithic arenites(in details) 12',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyJ9yDN_DhbF4Ww7OzlOBFIr8AXJCYWro89VJODHcy71ezYwDci43y9cxaPwWZu-x0mPSoYB_ORxLxpn4OzBQ52iukC2kHCr_mZeZnwiI-3gexaNgRmjuz7FGu6BsPOGXKduqhqi5mB5VzUa0DtNntxflqxKe1T8WI-namYdOShQcHE7kCsxKsgkpqKw/s16000/1.png">'
    },
    {
        question: 'Conglomerates(in details) 12',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLcNnnU6aKfag9971e9dbN9RVn5nuxk-xqUFFsHlCuk5is1kxAkBlk73h8JU_TPiAX9vKhFljMHf5AhI1JGh2w68P5LpTgOcTzYjkwXdsESSoqSt-Netd6QH_ICkAC5wi3wmt6IBBkPzi0bXlHNFnaJ1QcsQ7POnnTjmRJNyeVdbiVk3I-QEprjTLnnA/s16000/1.png">'
    },
    {
        question: 'on the basis of grain shape how many types the conglomerates are devided into ? 12',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifwiWcrPCGNW3257I4CNePjE0uES0hSGOx8pypi6YT0F1cUWxuPX6CFDsSgv0OGOMeiErmXp2XGJ33BS2hg4yS65xw9eUsoUnuhAakvhGc_0VPkmwzcxgYYhCI8gkguDJvAIg4J5RnRSI92M1yV4EPXwpCxA916D95raOfjJFS6R9Zj9oeLyfrSHCoNg/s16000/1.png">'
    },
    {
        question: 'describes the composition of conglomerates 12',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoFU3FXMq389FnxXyZgwNlC0y78yf-CkRy2OxgR5d9OqaK4Mz_13P2DuOa5mbOLkMahPBGk9JU-bVnXi6EOYuWsdCPv6aK_AxOxTaM_T4XNmCZLv8tsmdU4bmbU4UsFUG79tikXwT6WLqy2Nm25qPupu1z6--dQaw0uqnzuVC4DXUD9Web2bDmE_XzAg/s16000/1.png">'
    },
    {
        question: 'classification of conglomerates(imagine the classified image) 13',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSR38MZHf05p2s6C_7PMn3cKkyax54Pp-sj0OYOIsTCpM3w0bgBdkAWJskm-CGHMkoHiCZlXVo2JTJzJUGkWBcrk1U0mqSFcXGAMSbNyooiTsS9ZqGD5KNWrQw5LWcZjmg5SdX-obMmkHOhXagqNi14KwwWQDFwXTye5dRsEe5iS3sq9AmZPByCPi7Cg/s16000/1.png">'
    },
    {
        question: 'describes Classification of Conglomerate 15',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiODjiJI7mjJPQpRrJhG1Zi80MGFhKHlq5HGZYgwNGz84Rv_Kbc-6Jz0AiiObafkThT49xyV87Q1G5DYE8JqxpYac8bsPZS_TVX6vDGbKt_BW9QGc5_BwMqmGpVxblh-uEKKDFmAoNgtM7kV97YGNjtE3Pwt0NY5ON4XxSmoDT_nJ0lD8VQQUmPe7PWQ/s16000/1.png" ><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-lIwe6PIjJsK1lv_Jpxz1CocXCBE-N8gw0BBaPzim5xHnVBNYR3sNhmjmUrySCuEMtNObO0xVcYBwz7DduaRRRocOhWI1-g3tbZE5Yw14Y7XYpQlPXTpv3bfeF_wDF2jSyHaQ12hedwGveisCfZZ_Pp007B_dcggqOwNhI-Y4ke2hbdOgiq-4U3LX-A/s16000/1.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ51oUMglTEWH4bl-JLzoloT87cXJAOYdISJTFeiC6XkNK_yr3HgAIyie3khF7RdeNS-UyMJpaSgpYzk5wNMr2Wwbg_hnq1Z4iXVx_omcDV9HOkT_rQcBKMJU7ifzpVAosSjdxQwiYYh87bAvgLZW42ZtFZKvxjcRvL1Xz-l6pEKCjZo4DzCMizAol6Q/s16000/1.png">'
    },
    {
        question: 'On the basis of clasts and matrix classified the epiclastic conglomerates 15',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-lIwe6PIjJsK1lv_Jpxz1CocXCBE-N8gw0BBaPzim5xHnVBNYR3sNhmjmUrySCuEMtNObO0xVcYBwz7DduaRRRocOhWI1-g3tbZE5Yw14Y7XYpQlPXTpv3bfeF_wDF2jSyHaQ12hedwGveisCfZZ_Pp007B_dcggqOwNhI-Y4ke2hbdOgiq-4U3LX-A/s16000/1.png">'
    },
    {
        question: 'types of epiclastic conglomerates ? 15',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ51oUMglTEWH4bl-JLzoloT87cXJAOYdISJTFeiC6XkNK_yr3HgAIyie3khF7RdeNS-UyMJpaSgpYzk5wNMr2Wwbg_hnq1Z4iXVx_omcDV9HOkT_rQcBKMJU7ifzpVAosSjdxQwiYYh87bAvgLZW42ZtFZKvxjcRvL1Xz-l6pEKCjZo4DzCMizAol6Q/s16000/1.png">'
    },
    {
        question: 'fundamental genetic types of conglomerates and breccias ? 15',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq3p3ZqSiEZaDoDZ4-SXPQQlvITAr5jeIGns3-68dBPsIEi2hyOL53g9Ntg1gwTUtg0UrrlLXzoJceLLWDRX3jdELB4hwNqkCtiAGlfAMnaiVqQzuOZqM_NAPpj4e6-FJT926xn1fiMcrOCoh7R_h1Z9oSu0uk7vJrIoipryo0naKoQ4sBSzckw4rTbg/s16000/1.png">'
    },
    {
        question: 'on the basis of clast stability classified Conglomerates and diamictites 17',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5x2p-kk6OvCClYmaWRSZyuE8Zj9Y-eutLNs-_5LNIhRVPwbwh8mANAocGgyApLh2Myi2y45gAOp7R1JiB8KxuWw98_kHaOQxdcwrrPzE_bheatNRQgN0DlqmzEjGzvXTvS_7D1diE98ZAw0YbsNa0G-vfdKARjmd1eaI9XGCev9HA4GJ_uhdfKtEihg/s16000/1.png">'
    },
    {
        question: 'Classification of conglomerates and diamictites on the basis class stability and fabric support 17',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbRf3Q5Qt0_TvSinCi2i51xIDy_q5izaTBdmBD5UuHND-Rt3EuxTQqsB32r9CHUhhvo6bNYF34120IduUHlbECUNqKSmx4SfYSiJmolXa7X_yJX9MH8tXF6sas6LgVfBPTZGaMtTahz962_NkF5PgJPllzNha0Qwd_OqSNVju5ocX8QyihZMp5QjG9mw/s16000/1.png">'
    },
    {
        question: 'Origin and Occurrence of Conglomerate(in details) 19',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWwcoNc3YbcpfWN9E4NZbc2rQBR53UxYC_E4BPI_S63oD_6Vam8kLrbNFxVfKTW9bvOMtExPnPf99gYEWvb9eIhVeVYlrSIHcCMfqe_jxbL5-t8_NlTnitkxMZdeQXaVoUTJM907ykEuQP1vIO-_Ej2BobpG5bDiD2yoBXfp2nF3eJovEMzqMcW6dAJg/s16000/1.png">'
    },
    {
        question: 'difference between conglomerates and breccia ? 19',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixS9FL6j3y1R_7lA5vBfTPoAV0mLImWUXUiuDz-AjSXtBRW6v6mjk6hbXRwz4zIXHfQAqgV6TJM-2fhfKI2diYzAZryvjtUKXzGpCvGibEc0c-Pn_UWc09G16H1lpEFmKeupODuZ215P-QJAiWjn-U8UvKDsXV_dHqTxzSGfuRd7rGTswP-YtNm0QyEQ/s16000/1.png">'
    },
    {
        question: 'Shales(in details) 19',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhieUaQlqRFWpoUK4g-AdphjIxXxkdeXAUQtznBcMAVqgd_8zsCS86_J3UW1gAGP9t_nWtQi1FCvm8clvafCWI5C1bzS6Pquw2SYeSFl-EPYX0F0_NwlMALy-4P16liC2pmwBf6-mlC4j12sJszVSphGdEfJN3EbTpyKPFxBl8otUfHEa5RvMPoMzBMmw/s16000/1.png">'
    },
    {
        question: 'classification the mudrocks on the presence of lamination ? 21',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-ATfUbB7EPGogW42HHPSl3RhAZlZaC7JFkmRC-Cr77tu35JhtyIF_TVLruGZvDKN2FWQBKqDcbo9uQxiTcb_Hx-p2U7LanaJkXzhkdf-IY4_qs2E4mNQ0DU826i6mrQU-8DrGqReXDQGDFO64iyYUk53mr2O05_KsiO6UYGt7jlCpV70CZMlQnvV3Qg/s16000/1.png">'
    },
    {
        question: 'describes Composition of Shales(mineralogical and chemical) 21',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5hl8_eGvFWkg5JmXmmPhtTNUZMvkI5OL2tmg61FwX1_qZojhYjL-NLm88-8GuCr3nzxKBc79q4hrT4wmUBnkVbV76PYOiUpgzNaMdGcmSeIKInDbfYvcEo2ZCEdYJjdP2cjJUXL5MbdHu-LBZEgFNT4V0DByugz0MlVZamilJjFCi2oakcuC4vg9GGg/s16000/1.png">'
    },
    {
        question: 'Mineralogical Composition of shales 21',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWJTweguOcLDl7yaiStlk-sO1i4EmDtHKAydgtjMHBA10wJ_aJT5XqXFCmEWY2OdJjB6cP-vlwlDK6K_Zb3eiDL1AC3bnIFCFCxMGugmg0-OmH4jFMLoglBpFLI18KQAMsNWNlEGpbFLixBNt82BJ3zmvFsL0ZiE-zKtuMZGp_3BHguif3XOiWyU5Fog/s16000/1.png">'
    },
    {
        question: 'Chemical Compositionof shales 21',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Fvq494ykdq-UtSqs6OQCkVr4SzH-JFomXWne5JqiHxl5ifIDxnAFE1RpUAoeokypj1YGSzRaXqjL3LpdRW_h522GlGmwp30rnjGIpq3cguyNYHOBASNj8g-zcboQnM631hvJl4cTzxjZ0KOWzhnZSfnv4KxpaLu6dmbPF5Z_4fnU5xA5c05mJNwCeg/s16000/1.png">'
    },
    {
        question: 'Named the Major chemical constituents of shale ? 21',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSQ83cyjVCU8rh5Z6933N2dnwip5piitDVDPMVOCJvhtCkfcZaDmnJRbeTBFtYmBzBVTeBmJmedPYYSi8pPHKyyAAX4H_YaGSjkUZ9HXsdlJNlcHa8oplDtS6fYoKKOFNXHpSWPasqckeYU48KwYH-N59cibeMUbpvusDvZiEEmefcFttG36eIyNhIqw/s16000/1.png">'
    },
    {
        question: 'On the basis of grain size and lamination classified the shales ? 23',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9HWt9D-sy28H2IWywG9eX_OXmH4tvaqpaePUtNODhjOGHhQNY57U56SUkjGvC2QAJk4WTshVIA6HJ0V1kvi0royjGuWNNnGaJ1MAgzbJPCJrgapctMF6GlbE4zruY_yOLfDw_AAmyxDMOwXLr3P4RMFOH4zRyRtgwBFKKSfGc1aGUFv6surlclhBmvQ/s16000/1.png">'
    },
    {
        question: 'on the basis of fissile and non - fissile rock classified the shales ? 23',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNyjuDz6DIdDJF-wKHRXYEA_xDaxBMzcxsCUs_GOsrq3iTRuYwSJTpl99aPkZxDUFL2kE-DXVw_ROrisnk1dH2_xc5dFcQtaRT86c2vwF4as8NttNMgneBhVsBw0e_ROX_bEOr8M48WOLLuneZS-4AianI7oceboP5jmE-uacj2OMM_Xvv-t8Ms0hE8w/s16000/1.png">'
    },
    {
        question: 'classification of shales and siltstone(> 50 % grains < 0.062 mm) 25',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMdAHz6Ig27UT84_BZ-XtWhamYr1wGxn2dqQ1RUu5fXGoOV26zcSVpHpDvtLaoAyz9uNkXtuj8v180JF9KetKEaSd7bUjemZsQNXKGeCxdpE0jCinUVkwZsFFvkl-rxO-sxjm2QAxTcriFb-_b4QN5saMMEoBP_yYXPNu6Ilo0fd1ycQSKpSVxk9ocVw/s16000/1.png">'
    },
    {
        question: 'Origin and Occurrence of Shales 25',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcEmMF7hVMiO0JSoueUwLD8WMIcjbtFmYPBZbpeIGH0DoBcuTX-v5q6DiZn5wJ4pNIS5MpaFzdi1t824AmL22WLWhAjzih97ICzhnrNy17GqCu5i8Je0suwhG4sF3orklukiwgPN08kHWHuop2xjuFjm5h5waeoNS_75De_t281xuTLRZWAyWWg16OtA/s16000/1.png">'
    },
    {
        question: 'describes Diagenesis of Siliciclastic Sedimentary Rock 27',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSltjQo9sBskxZhWq8BJl91qJkKSyHYH-9NeJQIjCfdevszrxeEftBtCU_h9bKpLVYah4C3piexL8TQbnuc9jdQ-GbeNqQ_3oVLChXFfRYY_2TXlMks0XkGnkTBbgw7X4HwrYth1GrKvqcs7UtDRV2IeE60igUyP1pocllJDkTIdW-vIqLEtxyzND2vg/s16000/1.png">'
    },
    {
        question: 'describes Stages and Realms of Diagenesis 27',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_5nXZ1BFq9Q33TIBV4AEbsBpUj_PovPAFbKve0LCPwau0IsMxHuQQbjNutSUQ6LjwQYLjof4S-7FDGihsZj3aXMA5_HujzzLD1_QjCcT1PgZK0lR5ugIpWqwZUrrL7r8harKzYv_E7FCyXtAMSdL8luhGylTGvkgvpdh7zmiT5QOYXKYJ1jgpa1Q6Iw/s16000/1.png">'
    },
    {
        question: 'what is diagenesis ? 27',
        answer: 'Diagenesis: <br/>diagenesis is the physical and chemical process that convert sediment into sedimentary rock.'
    },
    {
        question: 'When does diagenesis occur ? 27',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_5nXZ1BFq9Q33TIBV4AEbsBpUj_PovPAFbKve0LCPwau0IsMxHuQQbjNutSUQ6LjwQYLjof4S-7FDGihsZj3aXMA5_HujzzLD1_QjCcT1PgZK0lR5ugIpWqwZUrrL7r8harKzYv_E7FCyXtAMSdL8luhGylTGvkgvpdh7zmiT5QOYXKYJ1jgpa1Q6Iw/s16000/1.png">'
    },
    {
        question: 'process of lithification 27',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnD5DeXJbQ84Gia-fzgNaokL5x7SheVXR2f1C8VLc1RBhA9OV4UCMfJpCFyIKS5f9sYkH-PR6aXVqolZAOJV1CZM2zlMBFF4bgGb0MZXMRP3IZxseLts9IKomzcQOzVMeOldhq1hCrxKCCaSduI1opV4fhZs7KTpOS741LZQVoS7f9l5k6zG1Uu03Adg/s16000/1.png" >'
    },
    {
        question: 'describes Stages of Diagenesis 29',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYLi0tvTF6CEhYU6IYQmfM3E8O92OHvtzLZNuKZWzQ8EQgMJhPr_cmX8Tm4cRMiiQfRjjxyabGXwOnotuwKMLoVxz5QLpMzbpwT9rsOWTmucAxu2RCzn1rr7dk8TaqfQnHS3fB9nivmAq_ZWvowYSsf-o3USssfYJKFy4IHh6I5UyGaUX6szrjVrruFA/s16000/1.png" >'
    },
    {
        question: 'describe Major Diagenetic Processes and Effects 29',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi95neHFoMgBZYN_3eSGQVYme9CptbxLlovuzrhUG4RabudNKMwHiAUcdP_LKccNbSCprqJp4R-uvzmbu6o9hP3EWnsak2KP7AnA3TWY-4-8McIEW47Kq0xwblWnkWqT8kqZs6gDMFe0LS9WZszimfzCYgq2gVkCfeIkg5fyRBfPDf0cMP_QQ1FKPF_lQ/s16000/1.png" ><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1cLkyFNorXbFwc5t49uTb2EOZmIEFHMqukwPdTA-MLdH4QXEzsoV2-uneKBDlZ0Wl-r--Pi3eB7IQqLzeSE6EXBfk-gzPrIc4SpjHIEPDD7h4q-fBvf6iWFGsR6QTxInwqCYvJayOaVkVpdkhBShEuOXqFa463XB6SeI3f4s-mfZNMloiK_r1cKmQIg/s16000/1.png">'
    },
    {
        question: 'describe Eodiagenesis(Shallow burial) 29',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvhzhJYFnVBDfQ0SVa6Fmwd1N8P9m7A54IS41ndFMYVTDis7bL3WouWJd13_sCJW2KwOdWdpPj9f8cpr_-u-pSxxqahKN0bXeZw50-NIKVMkbex-V_pYc_u5n0HklNkeYmIrzwJR4A6H6PrC4Aoh0xPLFrNfJCHN4WzawcRNAeG7HdUAELMxcpT3oGIQ/s16000/1.png">'
    },
    {
        question: 'describe Mesodiagenesis(Deep burial) 29',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRRRK34vps3fcsCCV0gBoqHGgPVr181tQE9T9xmbAEJB0bnrd6WjULq4Xv6-bBp58fi7xsZ4ucbblxGmDhWPTVuNTmnu5YM3LGED6O4IQqbnXMeUQZHOrHoqmuJhBv1IBNKq7V3Nr2vfUp_z4b9pMCuAgQzSLePXDP5xpe9eAbZtsWFghOBpWH8GceNA/s16000/1.png">'
    },
    {
        question: 'describe Telodiagenesis 31',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifWQN5N26Z56M3-udc4aIrtlxnBFuHypRbaSQ97OLqwMzCBOEl_dK1qJ7wnpGtb15Lek3Jw2G7dHwVqgXpr-LV6PO2zHay3ZncDtoAhmWjIOJ0GQMQIpV9x-mxtl8X__mdeMVmtbs9wXqo9kU8e442tOqLqDcSkXJwXoCz8UfLD6O52s50Jud676H_SA/s16000/1.png">'
    },
    {
        question: 'imagine the sandstone overview 31',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOxaSjW5RwQbKgKRftm8dHatB86SZ3NuwNQZl-9AvxLmsNJ0p9e4Brv7wFxaSKzcnHxlUreceweqI0QRSoGLcq8qcn0PRbwIHxas1U5lGBvN1S4DpmRrtYCO5V3KTI9DWROG_EG8a7oiVbTjOyA8-84m2jJrSf-6baKB-taULcOwlCRCWfYgrOdQdeyw/s16000/1.png">'
    },
    {
        question: 'describe Point Counting Method 33',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSNhEeoWuAheLsDduIRPOFKGHGwKwAPwFL7jawjXIsDWAkh38L7tFgSlANj7XD-192uCO6RTHtd2deHYayb30hA4RMQt4gCRJO2Pu01Ib5V8eSDYUUS9AXBVuG0gDWIbC84Mcsq2mnRh0ANASS59MORdpCh-945ibffx288njziux3EWHfsjsJc65_Uw/s16000/1.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzzBZT1fFwIJvsjjKvSMfdCSqNST_1sCA8_lNlPXKZtqjytsyIqiJ5OStf3IWQLXoQFozorHa07xJUGI9e7hy14eD7qswM1Tk2dZ3tn-Y6zXm32MC1pkJTKXtoBumCPHZTqzG4-d08Vdb4CHTeHqV53Y69RaXDvQXLIsqUh_gzUyf6__uhjzig7tu9eA/s16000/1.png">'
    },
    {
        question: 'describe Textural Classification of Sandstone(with suitable diagram) 35',
        answer: '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyL-XznZLrkeaXiNXotkPQK8A0PLEgXyuWFOtZ14pz8ric9TZNIcdeiUPaImcv8OzJj40BKXUQWxDL4ocuR4kIdANOVOsBEnq7cqzY3Ptk0T5_f8Nm4p297hAV5r6y-3zLWoViJqn_16zEQrP_yeNQ5w8cJHUgUo8JprySVvWhry5rcBbXVra9_FVoHw/s16000/1.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyWe3qjAyAubUX90_Pj95RpP-UlH3lxgv34hID9XsNBGZQ8AuIVq4zuaBa7B2ajm-QqmMYH-Iz8cnAKHp_JafCT2MjT8NBAGSG9fa_oxNTUO3lkuZbzbKfik0TN4S1ND5i6nYH2pIyr1pdWTQ-dsFwlYh7e8g-IkaZWHQl5nF1CTBcyTwhMoHidEXaLA/s16000/1.png">'
    },
    {
        question: 'describe Evaporites(in details) 37',
        answer: ''
    },
    {
        question: 'types of evaporate minerals on the basis of origin 38',
        answer: ''
    },
    {
        question: 'types of evaporate minerals on the basis of chemical composition(imagine diagram if possible) 38',
        answer: ''
    },
    {
        question: 'Difference between marine evaporates and non - marine evaporates 38',
        answer: ''
    },
    {
        question: 'kinds of evaporites / evaporite deposits ? 39',
        answer: ''
    },
    {
        question: 'describe gypsum(in details) 39',
        answer: ''
    },
    {
        question: 'describe anhydrate(in details) 39',
        answer: ''
    },
    {
        question: 'how many groups the anhydrate devide into ? 39',
        answer: ''
    },
    {
        question: 'describe Nodular Anhydrite(in details) 39',
        answer: ''
    },
    {
        question: 'what is chickenwire structure ? 39',
        answer: ''
    },
    {
        question: 'describe Laminated Anhydrite(in details) 40',
        answer: ''
    },
    {
        question: 'describe massive anhydrite 40',
        answer: ''
    },
    {
        question: 'describe Halite(in details) 40',
        answer: ''
    },
    {
        question: 'describe Origin of Evaporite Deposits 41',
        answer: ''
    },
    {
        question: 'describe Evaporation Sequence 41',
        answer: ''
    },
    {
        question: 'describe Depositional model for evaporites(in details) 41',
        answer: ''
    },
    {
        question: 'how many models are considered for evaporate deposition ? 41',
        answer: ''
    },
    {
        question: 'describe "Deep-Water, Deep-Basin Model"(with suitable figure) 41',
        answer: ''
    },
    {
        question: 'describe "Shallow-Water, Shallow-Basin Model"(with suitable figure) 42',
        answer: ''
    },
    {
        question: 'describe "Shallow-Water, Deep-Basin Model"(with suitable figure) 43',
        answer: ''
    },
    {
        question: 'Explain Diagenesis of Evaporites 43',
        answer: ''
    },
    {
        question: 'describe Iron Formation(in details) 44',
        answer: ''
    },
    {
        question: 'chemical composition of sliciclastic sedimentary rock(in details) 07',
        answer: ''
    },
    {
        question: 'describe Ironstones(in details) 45',
        answer: ''
    },
    {
        question: 'describe Iron - Rich Shales(in details) 45',
        answer: ''
    },
    {
        question: 'describe Miscellaneous Iron - Rich Sediments(in details) 45',
        answer: ''
    },
    {
        question: 'Origin of Iron Formations and Ironstones(modern environments and ancient environment) 46',
        answer: ''
    },
    {
        question: 'describe Iron Deposition in Ancient Environments 46',
        answer: ''
    },
    {
        question: 'describe Iron Deposition in Modern Environments 46',
        answer: ''
    },
    {
        question: 'why Deep, iron - rich, anoxic oceanic waters are postulated to move upward toward the surface along continental shelves ? 47',
        answer: ''
    },
    {
        question: 'what is SEDIMENTARY PHOSPHORITES ? 47',
        answer: ''
    },
    {
        question: 'describe Principal Kinds of Phosphorite Deposits(less important) 47',
        answer: ''
    },
    {
        question: 'describe Principal Kinds of Phosphorite Deposits(less important) 48',
        answer: ''
    },
    {
        question: 'what is Carbonaceous rocks ? 48',
        answer: ''
    },
    {
        question: 'describe Kinds of Organic Matter in Sedimentary Rocks 48',
        answer: ''
    },
    {
        question: 'Classification of Carbonaceous Sedimentary Rocks 49',
        answer: ''
    },
    {
        question: 'classified Carbonaceous sediments on the basis of relative abundance of nonorganic constituents and the kind of organic matter 49',
        answer: ''
    },
    {
        question: 'Coals(in details) 50',
        answer: ''
    },
    {
        question: 'short note-- > Coals',
        answer: ''
    },
    {
        question: 'Characteristics and Classification of Coal 50',
        answer: ''
    },
    {
        question: 'classification of coal on the basis of rank 50',
        answer: ''
    },
    {
        question: 'what is bone coal, cannel coal and boghead coal ? 51',
        answer: ''
    },
    {
        question: 'describe Oil Shale(Kerogen Shale)[with proper diagram]51',
        answer: ''
    },
    {
        question: 'uses of various rocks(gravel and sand, clay, limestone, evaporites, phosphates, iron formations) 52',
        answer: ''
    },
    {
        question: 'what is Carbonate Sedimentary Rocks? 53',
        answer: ''
    },
    {
        question: 'classified the Carbonate rocks on the basis of mineralogy and chemistry 53',
        answer: ''
    },
    {
        question: 'classified the carbonate rocks On the basis of Ca and Mg 53',
        answer: ''
    },
    {
        question: 'describe Chemistry and Mineralogy of Carbonate rocks 53',
        answer: ''
    },
    {
        question: 'what are the major groups of carbonate rocks ? 53',
        answer: ''
    },
    {
        question: 'describe principal carbonate minerals 42',
        answer: ''
    },
    {
        question: 'describe Limestone Structures 55',
        answer: ''
    },
    {
        question: 'describes carbonate grain 55',
        answer: ''
    },
    {
        question: 'what structures are form when calcite can present in limestone ? 55',
        answer: ''
    },
    {
        question: 'classified the carbonate grains 55',
        answer: ''
    },

];


let pspArray = ['test purpose', 'sucess'];

let chemistryArray = ['test purpose', 'sucess'];

let physics_2_Array = ['test purpose', 'sucess'];

let physics_3_Array = ['test purpose', 'sucess'];

let programmingArray = ['test purpose', 'sucess'];

let stratigraphyArray = ['test purpose', 'success'];

