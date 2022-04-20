const showData = document.getElementById('show');
const indexOfArr = document.getElementById('index');
const askQuestionBtn = document.getElementById('ask_question');
const finish = document.getElementById('finish');
const footer = document.getElementById('footer');
const allQuestion = document.getElementById('all_question');
const subjectHeading = document.getElementById('subject_heading');



//set as global variable for use to another function
let numberStrings;  // array element is set globally in this variable by condition
let final;

const switchFunction = subject => {
    if (subject === 'mathematics') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'optical-mineralogy') {
        numberStrings = ['ajad', 'zekra', 'sadikin'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'hydrology(IM)') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'hydrology(sg)') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'p.s.p') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'd.s.p') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'environmental_chemistry') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'physics_3') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'physics_2') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'programming') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'stratigraphy') {
        numberStrings = ['hafiz', 'rahim'];
        subjectHeading.innerHTML = subject;
    } else if (subject === 'crystallography') {
        numberStrings = ['Crystallography', 'Crystal', 'general characteristics of crystal', 'Perfect crystal', 'Crystalline', 'Amorphous substance', 'Mineral', 'Characteristics of Mineral', 'Unit cell', 'Space lattice', 'Why Crystallography in Geosciences? / Importance of crystallography / Why study crystallography', 'Descriptive definition of crystallography / what subject the crystallography includes? / What the crystallography discuss about?', 'Why crystals have beautiful external form?', 'Why do we study crystallography? ', 'Unit cell Vs. Space lattice / difference between Unit cell Vs. Space lattice', 'Crystal vs. Crystalline vs. Amorphous / difference between Crystal vs. Crystalline vs. Amorphous', '1)	Euhedral', 'Subhedral', 'Anhedral', 'Euhedral vs. Subhedral vs Anhedral/ difference between Euhedral vs. Subhedral vs Anhedral', 'Faces', 'like face', 'unlike face', 'type of faces?', 'Edges', 'Interfacial angle', 'Solid angles', 'Form', 'Crystallographic axes', 'Intercepts', 'Lattice constant or Lattice parameter', 'Crystal Form', 'how can crystal form classified?', 'simple form', 'combination form', 'open form', 'Close form', 'General form', 'Special form', 'discuss Common forms in Crystallography', 'pedion', 'pinacoid', 'Prism', 'Pyramid', 'Dome', 'what is symmetry?', 'Describe symmetry with proper diagram/example', 'Element of Symmetry', 'Symmetry element', 'Axis of symmetry (with statement)', 'Plane of symmetry (with statement)', 'Types of symmetry?', 'center of symmetry (with statement)', 'Symmetry Operations', 'types of symmetry operations', 'Rotation Symmetry', 'types of rotational symmetry axes?', '1-Fold Rotation Axis', '2-fold Rotation Axis', '3-Fold Rotation Axis', '4-Fold Rotation Axis', '6-Fold Rotation Axis', 'what is Crystal System', 'how can crystal classified of?', 'name of 7 crystal system', 'cubic', 'Tetragonal', 'Orthorhombic', 'Rhombohedral', 'Hexagonal', 'Monoclinic', 'Triclinic', 'which minerals are include in Lower System', 'which minerals are include in Higher system', 'which minerals are include in Intermediate system', 'Lattice point', 'Bravais lattice / The 14 Bravais lattices', 'Types of Unit cells', 'Primitive unit cell', 'Body centered unit cell', 'Faced centered unit cell', 'End centered unit cell', 'Where can I put the lattice points?', 'what unit cells are include in Isometric(cubic) cells', 'what unit cells are include in Tetragonal system', 'what unit cells are include in Orthorhombic system', 'what unit cells are include in Rhombohedral system', 'what unit cells are include in Hexagonal system', 'what unit cells are include in Monoclinic system', 'what unit cells are include in Triclinic system', 'what is Bravais Law (with statement)', 'Law of constancy of interfacial angle', 'How do we keep track of the faces of a crystal?', 'Law of rational indices', 'Law of axial-ratio', 'Law of constancy of symmetry', 'Law of constancy of symmetry', 'Law of crystallographic axes', 'types of Symmetry Operations (৭ টার নাম বলতে হবে)', 'which symmetry are include in Basic symmetry operation?', 'which symmetry are include in compound symmetry operation?', 'what is Reflection Symmetry?', 'what is Rotation Symmetry?', 'what is Inversion Symmetry?', 'difference between rotation and reflection symmetry/ rotation symmetry vs Reflection symmetry', 'what is Rotoinversion Symmetry', 'Crystal Classes/32 Crystal classes/ 32 Point group', 'what is Hermann-Mauguin (International) Symbols', 'how to derive the Hermann-Mauguin symbols in crystal classes? (কি কি উপায়ে Herman-Mauguin symbols বের করা হয় সেইটা লিখতে হবে।', 'Hermann-Mauguin (International) Symbols in Rhombic-dipyramidal class', 'Hermann-Mauguin (International) Symbols in Ditetragonal dipyramidal class', 'Triclinic system', 'Monoclinic system', 'Orthorhombic system', 'Tetragonal system', 'Hexagonal system', 'Isometric system', 'describe the classes of Triclinic system', 'describe the classes of Monoclinic system', 'What criteria is involved in dividing the 32 crystal classes into 6/7 crystal systems? ', 'Twinning', 'Twin plane', 'Twin axis', 'Composition surface', 'types of twinning?', 'contact twin?', 'Penetration twin?', 'What are three ways that twinning can originate?', 'Define polymorphism', 'define polymorphic transformations', 'Give several examples of minerals that show polymorphism, being sure to name all of the polymorphs.', 'Describe that three different types of transformations that result in new polymorphs.', 'define metamict mineral', 'define pseudomorphism', 'define mineraloid', 'Difference between Crystallographic axis and coordinate axis', 'polisynthetic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'cyclic twin? (স্যারের লেকচারে twinning এর অধ্যায়ে আছে। পড়ে নিও)', 'I Love You Sumai ❤❤', 'what is Zone', 'what is zone symbol', 'what is vectorial properties', 'types of vectorial properties', 'properties of continuous vectorial', 'properties of discontinuous vectorial', 'Notation Summary', 'Miller Indices for Directions', 'Miller Indices for Directions', 'Miller Indices for Planes: Procedure', 'Family of Directions <100>,<110>,<111>', 'Importance of Miller Indices ', 'Miller Indices for Hexahedron and Octahedron', 'Miller Bravais Indices for Hexagonal system', 'Crystal Habit', 'types of Crystal Habit', 'systematic way to define crystallographic angles', 'Stereographic Projection', 'component of stereonet', 'X-Ray Crystallography', 'X-rays and the Production of X-rays', 'Continuous and Characteristic X-ray Spectra', 'types of X-ray', "X-ray Diffraction and Bragg's Law", 'The X-ray Powder Method'];
        subjectHeading.innerHTML = subject;
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
        allQuestion.innerHTML = numberStrings.length;

        // it is use to covert -1 index to
        indexOfArr.innerHTML = final + 1;

    }
}


// close modal and refresh page
const closeButton = () => {
    window.location.reload();
}






