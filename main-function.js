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
const answerQuestion = document.getElementById('ans_question');
const scrollId = document.getElementById('result_section');
const firstModalText = document.getElementById('first_modal_text');
const secondModalText = document.getElementById('second_modal_text');
const thirdModalText = document.getElementById('third_modal_text');
const fourthModalText = document.getElementById('fourth_modal_text');
const fiveModalTimer = document.getElementById('five_modal_timer');



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
const switchButton13 = document.getElementById('switch13');






// ================================functionality of switch button======================================


//set as global variable for use to another function
let SubjectArray;  // array element is set globally in this variable by condition
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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

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
            switchButton13.classList.remove('switch_btn_style');


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
            switchButton13.innerHTML = 'Switch';

            //reset display when click new subject
            answerQuestion.innerHTML = '00';
            showData.innerHTML = 'Here You Can Show Random Question....';

            clearInterval(timer);    //close the previous timer when click a new subject
            setTimerUpdate();    //set new timer when click a new subject

            break;
        case 'geophysics':
            switchButton13.classList.add('switch_btn_style');


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
            switchButton12.classList.remove('switch_btn_style');


            // switch button inner html change after selecting
            switchButton13.innerHTML = 'Selected'

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

    } else if (subject === 'geophysics') {
        curElement = 0;    // set the predefined curElement to 0 as if the previous curElement value is alternate with 0
        SubjectArray = geoPhysicsArray;     //set the declaring array to the predefined SubjectArray array

        // get the index from the crystallographyArray and set it to the 'arr' array
        for (i of geoPhysicsArray) {
            let indexNumberOfCrystallographyArray = geoPhysicsArray.indexOf(i);
            arr = [];
            arr = [indexNumberOfCrystallographyArray];
        };

        //show subject name to the browser
        showSubject.innerHTML = subject;

        //remove the disabled buttons
        askQuestionBtn.disabled = false;

    }
    else {
        SubjectArray = [];
    };

    // show array length as a index number in the browser
    indexOfArr.innerHTML = SubjectArray.length;
    final = SubjectArray.length;

};



let curElement = 0;
let arr = [];


let chartTimeToEmailArray = [];
let chartTimerToEmailArray = [];
let timerForMaximumTime = [];


// ==========================main function for showing unique and random value on browser=======================
const updateRandomNumber = () => {

    // store time to the chartTimeToEmailArray array in every click;
    chartTimeToEmailArray.push(timeThatNeedToShowChartXAxis.innerHTML);

    timerForMaximumTime.push(setTimer.innerHTML);



    // ---------------------------turn the hh:mm:ss into seconds for showing on the chart y axis (start)----------------------------
    let hms = setTimer.innerHTML;   // your input string time
    let splitTime = hms.split(':'); // split it at the colons

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
    showData.innerHTML = subjectName.slice(0, -2);
    answerQuestion.innerHTML = subjectName.slice(-2);
    final--;      // decreasing index number one by one
    indexOfArr.innerHTML = final;      // show the decreasing index to the browser

    // condition for open modal
    if (final < 0) {
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
    let session = h >= 12 ? 'PM' : 'AM';

    //condition for 0 hours
    if (h == 0) {
        h = 12;
    }

    //condition for 24 hours
    if (h > 12) {
        h = h - 12;
        // session = 'PM'
    };




    // conditions for double digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //show the time to browser
    const time = h + ":" + m + ":" + s;
    showTime.innerHTML = time;
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
    const sendTimerToMail = timerShowModal.innerHTML;
    const sendSubjectToMail = showSubject.innerHTML;
    const sendTimeToMail = showTime.innerHTML;
    const sendSessionToMail = showSession.innerHTML;
    const randomQuestionClickerWebsite = "https://random-question-clicker.netlify.app/";    //my website link



    // display a timer when the internet is so slow
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




    const chartDataLabelsArray = chartTimeToEmailArray;            //set the chartTimeToEmailArray to the chartDataLabelsArray variable
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

    let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15]


    // ------------------------------------chartLinkToEmail condition (start)--------------------------

    // we set a condition for chartLinkToEmail as if when the chartLinkToEmail variables which length is 0 are not show in the image tag and which length are not 0 they all are show in image tag 

    if (sliceChartDataLabel__1.length != 0) {

        chartLinkToEmail__1 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__1)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(250, 118, 16, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(0, 30)}` + ']}]}}';

        chartVariable__1 = `Here is showing the data from : ${chartDataLabelsArray.slice(0, 1)} - ${chartDataLabelsArray.slice(29, 30)}`;

    }
    if (sliceChartDataLabel__2.length != 0) {

        chartLinkToEmail__2 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__2)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255,102,102, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(30, 60)}` + ']}]}}';

        chartVariable__2 = `Here is showing the data from : ${chartDataLabelsArray.slice(30, 31)} - ${chartDataLabelsArray.slice(59, 60)}`;

    }
    if (sliceChartDataLabel__3.length != 0) {

        chartLinkToEmail__3 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__3)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 128, 128, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(60, 90)}` + ']}]}}';

        chartVariable__3 = `Here is showing the data from : ${chartDataLabelsArray.slice(60, 61)} - ${chartDataLabelsArray.slice(89, 90)}`;

    }
    if (sliceChartDataLabel__4.length != 0) {

        chartLinkToEmail__4 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__4)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 0, 255, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(90, 120)}` + ']}]}}';

        chartVariable__4 = `Here is showing the data from : ${chartDataLabelsArray.slice(90, 91)} - ${chartDataLabelsArray.slice(119, 120)}`;

    }
    if (sliceChartDataLabel__5.length != 0) {

        chartLinkToEmail__5 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__5)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255, 128, 237, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(120, 150)}` + ']}]}}';

        chartVariable__5 = `Here is showing the data from : ${chartDataLabelsArray.slice(120, 121)} - ${chartDataLabelsArray.slice(149, 150)}`;

    }
    if (sliceChartDataLabel__6.length != 0) {

        chartLinkToEmail__6 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__6)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(128, 0, 128, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(150, 180)}` + ']}]}}';

        chartVariable__6 = `Here is showing the data from : ${chartDataLabelsArray.slice(150, 151)} - ${chartDataLabelsArray.slice(179, 180)}`;

    }
    if (sliceChartDataLabel__7.length != 0) {

        chartLinkToEmail__7 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__7)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(70, 132, 153, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(180, 210)}` + ']}]}}';

        chartVariable__7 = ` Here is showing the data from : ${chartDataLabelsArray.slice(180, 181)} - ${chartDataLabelsArray.slice(209, 210)}`;

    }
    if (sliceChartDataLabel__8.length != 0) {

        chartLinkToEmail__8 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__8)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255, 127, 80, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(210, 240)}` + ']}]}}';

        chartVariable__8 = `Here is showing the data from : ${chartDataLabelsArray.slice(210, 211)} - ${chartDataLabelsArray.slice(239, 240)}`;

    }
    if (sliceChartDataLabel__9.length != 0) {

        chartLinkToEmail__9 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__9)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(218, 165, 32, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(240, 270)}` + ']}]}}';

        chartVariable__9 = `Here is showing the data from : ${chartDataLabelsArray.slice(240, 241)} - ${chartDataLabelsArray.slice(269, 270)}`;
    }
    if (sliceChartDataLabel__10.length != 0) {

        chartLinkToEmail__10 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__10)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(121, 64, 68, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(270, 300)}` + ']}]}}';

        chartVariable__10 = `Here is showing the data from : ${chartDataLabelsArray.slice(270, 271)} - ${chartDataLabelsArray.slice(299, 300)}`;

    }
    if (sliceChartDataLabel__11.length != 0) {

        chartLinkToEmail__11 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__11)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(250, 118, 16, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(300, 330)}` + ']}]}}';

        chartVariable__11 = `Here is showing the data from : ${chartDataLabelsArray.slice(300, 301)} - ${chartDataLabelsArray.slice(329, 330)}`

    }
    if (sliceChartDataLabel__12.length != 0) {

        chartLinkToEmail__12 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__12)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255,102,102, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(330, 360)}` + ']}]}}';

        chartVariable__12 = `Here is showing the data from : ${chartDataLabelsArray.slice(330, 331)} - ${chartDataLabelsArray.slice(359, 360)}`

    }
    if (sliceChartDataLabel__13.length != 0) {

        chartLinkToEmail__13 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__13)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 128, 128, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(360, 390)}` + ']}]}}';

        chartVariable__13 = `Here is showing the data from : ${chartDataLabelsArray.slice(360, 361)} - ${chartDataLabelsArray.slice(389, 390)}`

    }
    if (sliceChartDataLabel__14.length != 0) {

        chartLinkToEmail__14 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__14)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(0, 0, 255, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(390, 420)}` + ']}]}}';


        chartVariable__14 = `Here is showing the data from : ${chartDataLabelsArray.slice(390, 391)} - ${chartDataLabelsArray.slice(419, 420)}`

    }
    if (sliceChartDataLabel__15.length != 0) {

        chartLinkToEmail__15 = 'https://quickchart.io/chart?c={type:"bar",data:{labels:' + `${JSON.stringify(sliceChartDataLabel__15)}` + ', datasets:[{label:"Time",backgroundColor:"rgba(255, 128, 237, 1.0)",data:[' + `${chartDatasetLabelsArray.slice(420, 450)}` + ']}]}}';


        chartVariable__15 = `Here is showing the data from : ${chartDataLabelsArray.slice(420, 421)} - ${chartDataLabelsArray.slice(449, 450)}`

    }

    // ------------------------------------chartLinkToEmail condition (end)--------------------------





    //------------- the time array elements turn into the seconds as if we can easily determine the maximum number (start)----------

    let timeArray = timerForMaximumTime;
    let splittingTimeArray = [];
    timeArray.map(element => {
        splittingTimeArray.push(element.split(':'));
    })


    let secondsArray = [];
    splittingTimeArray.map(e => {
        secondsArray.push((+e[0]) * 3600 + (+e[1]) * 60 + (+e[2]));
    })





    // subtract the every element one by one
    var newSecondsArray = [];
    for (i = 0; i < secondsArray.length - 1; i++) {
        newSecondsArray[i] = secondsArray[i + 1] - secondsArray[i];
    }




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




    //if user email input is greater than 9 character then it allowed to send the email.

    if (userEmail.length > 9) {

        Email.send({
            Host: "smtp.gmail.com",
            Username: "hafizurrahmanbu@gmail.com",
            Password: "fcqrhyktzrasblxz",
            To: `${userEmail},hafizurrahmanbu@gmail.com`,
            From: "hafizurrahmanbu@gmail.com",
            Subject: `Congradulations!! You have successfully passed ${SubjectArray.length} questions.`,
            Body: `<p style='font-size:16px'>Dear ${userEmail}! thank you very much for trying the <a href=${randomQuestionClickerWebsite}>random question clicker</a> website. Your performance is given below:</p><br/>

            <span style="color: blue;font-size:15px;background:chocolate;color:white;display:inline-block;margin-bottom:4px;padding:4px 7px;">Your Performance Records:</span>

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
                <td style='padding:5px 12px;font-weight:bold'>${sendSubjectToMail}</td>
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
              <td style='padding:5px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold'>${chartTimeToEmailArray[0]}</td>
            </tr>
              <tr>
                <td style='padding:5px 12px;font-weight:bold'>Finished At</td>
                <td style='padding:5px 12px;font-weight:bold'>${sendTimeToMail} ${sendSessionToMail}</td>
              </tr>
              <tr>
                <td style='padding:6px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold'>Total Time</td>
                <td style='padding:6px 12px;background:linear-gradient(#cbcbcb,#e4e4e4,#b9b9b9);font-weight:bold;'>${sendTimerToMail} hour(s)</td>
              </tr>
            </tbody>
          </table> <br/>`+
                `
                <div style="background:#e6e6e66b;border: 2px dashed gray;padding: 3px 10px;border-radius: 5px;">
                <h2 style='margin-bottom:10px; margin-top:0px;font-size:18px;color:#FF4040;'>Chart(s) According to your performance:</h2>
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
                <img style=width:97%;border: 2px solid #70707040;border-radius: 7px;padding-left: 10px;padding-bottom: 10px;${chartVariable__15 === undefined ? 'display:none' : 'display:block'}' src='${chartLinkToEmail__15}' alt="">
                </div>`+
                `<span style='color:#FF4040;font-size:19px;color:#ff4040;font-weight:600;'>All questions you going through are given below:</span>` +
                SubjectArray.map((question, index) => {
                    return '<br/> <b> Question-</b>' + `<b>${(index + 1)}:</b>` + ' ' + `${question.slice(0, -2)}`
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

// ===========================send a free email to the user email account (end)==================================





//declaring array
let crystallographyArray = ['Crystallography', 'Crystal', 'general characteristics of crystal', 'Perfect crystal', 'Crystalline', 'Amorphous substance', 'Mineral', 'Characteristics of Mineral', 'Unit cell', 'Space lattice', 'Why Crystallography in Geosciences? / Importance of crystallography / Why study crystallography', 'Descriptive definition of crystallography / what subject the crystallography includes? / What the crystallography discuss about?', 'Why crystals have beautiful external form?', 'Why do we study crystallography? ', 'Unit cell Vs. Space lattice / difference between Unit cell Vs. Space lattice', 'Crystal vs. Crystalline vs. Amorphous / difference between Crystal vs. Crystalline vs. Amorphous', '1)	Euhedral', 'Subhedral', 'Anhedral', 'Euhedral vs. Subhedral vs Anhedral/ difference between Euhedral vs. Subhedral vs Anhedral', 'Faces', 'like face', 'unlike face', 'type of faces?', 'Edges', 'Interfacial angle', 'Solid angles', 'Form', 'Crystallographic axes', 'Intercepts', 'Lattice constant or Lattice parameter', 'Crystal Form', 'how can crystal form classified?', 'simple form', 'combination form', 'open form', 'Close form', 'General form', 'Special form', 'discuss Common forms in Crystallography', 'pedion', 'pinacoid', 'Prism', 'Pyramid', 'Dome', 'what is symmetry?', 'Describe symmetry with proper diagram/example', 'Element of Symmetry', 'Symmetry element', 'Axis of symmetry (with statement)', 'Plane of symmetry (with statement)', 'Types of symmetry?', 'center of symmetry (with statement)', 'Symmetry Operations', 'types of symmetry operations', 'Rotation Symmetry', 'types of rotational symmetry axes?', '1-Fold Rotation Axis', '2-fold Rotation Axis', '3-Fold Rotation Axis', '4-Fold Rotation Axis', '6-Fold Rotation Axis', 'what is Crystal System', 'how can crystal classified of?', 'name of 7 crystal system', 'cubic', 'Tetragonal', 'Orthorhombic', 'Rhombohedral', 'Hexagonal', 'Monoclinic', 'Triclinic', 'which minerals are include in Lower System', 'which minerals are include in Higher system', 'which minerals are include in Intermediate system', 'Lattice point', 'Bravais lattice / The 14 Bravais lattices', 'Types of Unit cells', 'Primitive unit cell', 'Body centered unit cell', 'Faced centered unit cell', 'End centered unit cell', 'Where can I put the lattice points?', 'what unit cells are include in Isometric(cubic) cells', 'what unit cells are include in Tetragonal system', 'what unit cells are include in Orthorhombic system', 'what unit cells are include in Rhombohedral system', 'what unit cells are include in Hexagonal system', 'what unit cells are include in Monoclinic system', 'what unit cells are include in Triclinic system', 'what is Bravais Law (with statement)', 'Law of constancy of interfacial angle', 'How do we keep track of the faces of a crystal?', 'Law of rational indices', 'Law of axial-ratio', 'Law of constancy of symmetry', 'Law of constancy of symmetry', 'Law of crystallographic axes', 'types of Symmetry Operations (৭ টার নাম বলতে হবে)', 'which symmetry are include in Basic symmetry operation?', 'which symmetry are include in compound symmetry operation?', 'what is Reflection Symmetry?', 'what is Rotation Symmetry?', 'what is Inversion Symmetry?', 'difference between rotation and reflection symmetry/ rotation symmetry vs Reflection symmetry', 'what is Rotoinversion Symmetry', 'Crystal Classes/32 Crystal classes/ 32 Point group', 'what is Hermann-Mauguin (International) Symbols', 'how to derive the Hermann-Mauguin symbols in crystal classes? (কি কি উপায়ে Herman-Mauguin symbols বের করা হয় সেইটা লিখতে হবে।', 'Hermann-Mauguin (International) Symbols in Rhombic-dipyramidal class', 'Hermann-Mauguin (International) Symbols in Ditetragonal dipyramidal class', 'Triclinic system', 'Monoclinic system', 'Orthorhombic system', 'Tetragonal system', 'Hexagonal system', 'Isometric system', 'describe the classes of Triclinic system', 'describe the classes of Monoclinic system', 'What criteria is involved in dividing the 32 crystal classes into 6/7 crystal systems? ', 'Twinning', 'Twin plane', 'Twin axis', 'Composition surface', 'types of twinning?', 'contact twin?', 'Penetration twin?', 'What are three ways that twinning can originate?', 'Define polymorphism', 'define polymorphic transformations', 'Give several examples of minerals that show polymorphism, being sure to name all of the polymorphs.', 'Describe that three different types of transformations that result in new polymorphs.', 'define metamict mineral', 'define pseudomorphism', 'define mineraloid', 'Difference between Crystallographic axis and coordinate axis', 'polisynthetic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'cyclic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'I Love You Sumai ❤❤', 'what is Zone', 'what is zone symbol', 'what is vectorial properties', 'types of vectorial properties', 'properties of continuous vectorial', 'properties of discontinuous vectorial', 'Notation Summary', 'Miller Indices for Directions', 'Miller Indices for Directions', 'Miller Indices for Planes: Procedure', 'Family of Directions <100>,<110>,<111>', 'Importance of Miller Indices ', 'Miller Indices for Hexahedron and Octahedron', 'Miller Bravais Indices for Hexagonal system', 'Crystal Habit', 'types of Crystal Habit', 'systematic way to define crystallographic angles', 'Stereographic Projection', 'component of stereonet', 'X-Ray Crystallography', 'X-rays and the Production of X-rays', 'Continuous and Characteristic X-ray Spectra', 'types of X-ray', "X-ray Diffraction and Bragg's Law", 'The X-ray Powder Method'];

let mathematicsArray = ['test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'hafiz', 'test purpose', 'sucess', 'hafiz', 'test purpose', 'mamun'];

let opticalMineralogyArray = ['test purpose', 'sucess'];

let hydrologyArrayByIlliasMahmud = ['test purpose', 'sucess'];

let hydrologyArrayBySukhen = ['test purpose', 'sucess'];

let dspArray = ['what is Siliciclastic Sedimentary Rocks 01', 'Sandstone (in details) 01', 'Framework Grain (in details) 01', 'Quartz(in details) 02', 'Feldspars(in details) 03', 'how many groups are feldspars devided into? and what are they? 03', 'Alkali Feldspar(in details) 03', 'what are the common members of Alkali Feldspar 03', 'Plagioclase feldspar (in details) 03', 'Accessory Framework Mineral 04', 'give examples of some Accessory Framework Minerals 04', 'what is havey mineral? 05', 'kinds/types of heavy mineral? 05', 'what is Rock Fragments? 05', 'what is Mineral Cements? 06', 'types / kinds of cementing minerals ? 06', 'Matrix Mineral(in details) 06', 'give the examples of most common clay minerals groups ? 06', 'examples of matrix minerals ? 06', 'describes Chemical composition of sandstone 07', 'Classification of Sandstone(must be read from 1st year slide with pictures) 07', 'describes Mineralogical Composition of Sandstone(must imagine the picture) 08', 'types / classification of sandstone ? (if the sandstone is free from matrix(< 5 %)) 08', 'Sandstone Maturity(in details) 09', 'types of sandstone maturity ? 09', 'on the basis of framework mineralogy how many major groups the sandstones are devided into ? 11', 'quartz arenites(in details) 11', 'feldspathic arenites(in details) 11', 'lithic arenites(in details) 12', 'Conglomerates(in details) 12', 'on the basis of grain shape how many types the conglomerates are devided into ? 12', 'describes the composition of conglomerates 12', 'classification of conglomerates(imagine the classified image) 13', 'describes Classification of Conglomerate 15', 'On the basis of clasts and matrix classified the epiclastic conglomerates 15', 'types of epiclastic conglomerates ? 15', 'fundamental genetic types of conglomerates and breccias ? 15', 'on the basis of clast stability classified Conglomerates and diamictites 17', 'Classification of conglomerates and diamictites on the basis class stability and fabric support 17', 'Origin and Occurrence of Conglomerate(in details) 19', 'difference between conglomerates and breccia ? 19', 'Shales(in details) 19', 'classification the mudrocks on the presence of lamination ? 21', 'describes Composition of Shales(mineralogical and chemical) 21', 'Mineralogical Composition of shales 21', 'Chemical Compositionof shales 21', 'Named the Major chemical constituents of shale ? 21', 'On the basis of grain size and lamination classified the shales ? 23', 'on the basis of fissile and non - fissile rock classified the shales ? 23', 'classification of shales and siltstone(> 50 % grains < 0.062 mm) 25', 'Origin and Occurrence of Shales 25', 'describes Diagenesis of Siliciclastic Sedimentary Rock 27', 'describes Stages and Realms of Diagenesis 27', 'what is diagenesis ? 27', 'When does diagenesis occur ? 27', 'process of lithification 27', 'describes Stages of Diagenesis 29', 'describe Major Diagenetic Processes and Effects 29', 'describe Eodiagenesis(Shallow burial) 29', 'describe Mesodiagenesis(Deep burial) 29', 'describe Telodiagenesis 31', 'imagine the sandstone overview 31', 'describe Point Counting Method 33', 'describe Textural Classification of Sandstone(with suitable diagram) 35', 'describe Evaporites(in details) 37', 'types of evaporate minerals on the basis of origin 38', 'types of evaporate minerals on the basis of chemical composition(imagine diagram if possible) 38', 'Difference between marine evaporates and non - marine evaporates 38', 'kinds of evaporites / evaporite deposits ? 39', 'describe gypsum(in details) 39', 'describe anhydrate(in details) 39', 'how many groups the anhydrate devide into ? 39', 'describe Nodular Anhydrite(in details) 39', 'what is chickenwire structure ? 39', 'describe Laminated Anhydrite(in details) 40', 'describe massive anhydrite 40', 'describe Halite(in details) 40', 'describe Origin of Evaporite Deposits 41', 'describe Evaporation Sequence 41', 'describe Depositional model for evaporites(in details) 41', 'how many models are considered for evaporate deposition ? 41', 'describe "Deep-Water, Deep-Basin Model"(with suitable figure) 41', 'describe "Shallow-Water, Shallow-Basin Model"(with suitable figure) 42', 'describe "Shallow-Water, Deep-Basin Model"(with suitable figure) 43', 'Explain Diagenesis of Evaporites 43', 'describe Iron Formation(in details) 44', 'chemical composition of sliciclastic sedimentary rock(in details) 07', 'describe Ironstones(in details) 45', 'describe Iron - Rich Shales(in details) 45', 'describe Miscellaneous Iron - Rich Sediments(in details) 45', 'Origin of Iron Formations and Ironstones(modern environments and ancient environment) 46', 'describe Iron Deposition in Ancient Environments 46', 'describe Iron Deposition in Modern Environments 46', 'why Deep, iron - rich, anoxic oceanic waters are postulated to move upward toward the surface along continental shelves ? 47', 'what is SEDIMENTARY PHOSPHORITES ? 47', 'describe Principal Kinds of Phosphorite Deposits(less important) 47', 'describe Principal Kinds of Phosphorite Deposits(less important) 48', 'what is Carbonaceous rocks ? 48', 'describe Kinds of Organic Matter in Sedimentary Rocks 48', 'Classification of Carbonaceous Sedimentary Rocks 49', 'classified Carbonaceous sediments on the basis of relative abundance of nonorganic constituents and the kind of organic matter 49', 'Coals(in details) 50', 'short note-- > Coals', 'Characteristics and Classification of Coal 50', 'classification of coal on the basis of rank 50', 'what is bone coal, cannel coal and boghead coal ? 51', 'describe Oil Shale(Kerogen Shale)[with proper diagram]51', 'uses of various rocks(gravel and sand, clay, limestone, evaporites, phosphates, iron formations) 52', 'what is Carbonate Sedimentary Rocks? 53', 'classified the Carbonate rocks on the basis of mineralogy and chemistry 53', 'classified the carbonate rocks On the basis of Ca and Mg 53', 'describe Chemistry and Mineralogy of Carbonate rocks 53', 'what are the major groups of carbonate rocks ? 53', 'describe principal carbonate minerals 42', 'describe Limestone Structures 55', 'describes carbonate grain 55', 'what structures are form when calcite can present in limestone ? 55', 'classified the carbonate grains 55'];

let pspArray = ['test purpose', 'sucess'];

let chemistryArray = ['test purpose', 'sucess'];

let physics_2_Array = ['test purpose', 'sucess'];

let physics_3_Array = ['test purpose', 'sucess'];

let programmingArray = ['hafiz', 'sumai', 'mamun'];

let stratigraphyArray = ['test purpose', 'success'];

let geoPhysicsArray = ['what is geophysics ?', 'tabulate the methods of geophysics ?', 'tabulate the geophysical surveying application ?', 'GPR(short note)', 'difference between gravity and gravitation.', 'difference between geoid and spheroid.', 'basic theory of gravity.', ' gravity unit.', 'define Gravity, geoid and spheroid.', 'isotactic model(short note)', 'define Rheology and creep.', 'how does earth shape influence gravity ?', ' define Gravimeter.', ' difference between stable gravimeters and unstable gravimeters.', ' how  does Scientists measure the gravity ?', ' LaCoste - Romberg Gravimeter and Worden Gravimeter/’s principle.', 'Why we do gravity reduction ?', ' why we do gravity correction ?', ' what is gravity anomaly ?', ' what is rock density ?', ' Absolute gravimeter/’s Advantages and Disadvantages', ' what is causative body ?', ' what kind of  gravity anomaly happen ?', ' How did do the gravity surveying ?', ' what is gravity reduction ?', ' why does the rock density vary ?', 'How to vary gravity with the rock density.', ' Density variation with the Netelson method.', ' what magnetic field ?', ' what Magnetic Field Strength ?', ' what Intensity of Magnetization ?', ' what Magnetic Induction ?', 'what Magnetic  susceptibility ?', ' what Magnetic permeability ?', ' what Magnetic Potential ?', ' what Magnetic force ?', ' B – H relationships / B - H Relationship through Hysteresis Loop / magnetisms of a matrial through Hysteresis Loop / define the remenent magnetisms with proper diagram / Magnetic Flux and magnetic field intensity relationships through Hysteresis Loop.', ' Significance to Paleomagnetic study(with B - H relationship).', ' explain the Nature of Geomagnetic field / geomagnetic field of the earth / types of geomagnetic field of the earth.', ' Explain the  Elements of the Earth’s Magnetic Field / earth magnetic component ?', ' Explain the Origin of the geomagnetic field.', ' Explain the Variations of earths magnetic field.', ' Diurnal variation.', 'Difference between the secular variation and diurnal variation.', ' Classification of rocks and minerals in terms of magnetism.', ' Types of Ferromagnetic Materials.', ' Differences Between Dia, Para and Ferro magnetic minerals.', ' what is Curie temperature ?', 'difference between DiaMagnatism and ParaMagnatism.', ' Differences Between Magnetic Susceptibility and Magnetic Induction.', ' Differences Between Magnetic Field Strength and Magnetic Induction.', ' Remanent magnetization ?', ' Differences Between Intensity of Magnetization and Magnetic Induction.', ' How do rocks acquire their magnetism ? / Types of Remanent/Residual magnetization.', 'explain the Types or Causes of remanent magnetization ? ', ' Names of magnetic instrument.', ' Types of Magnetic surveys.', ' Ground Magnetic survey procedure Advantages and Disadvantages', ' Aeromagnetic survey procedure Advantages and Disadvantages', ' Magnetic survey to sea Advantages and Disadvantages', ' Applications of Magnetic surveys', ' What is telluric current ?', ' what origin of telluric current ?', ' How do The field procedure of MT survey ?', ' what is the advantages of MT survey', ' Difference between Membrane polarization and Electrode polarization.', ' what is The principle of EM surveying ?',];

