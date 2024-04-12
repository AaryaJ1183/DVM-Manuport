function changeImg(sauce)
{
    let section2img = document.getElementById('section2_img');
    section2img.style.transform='scale(0.80)';
    section2img.style.transitionDuration='1s'
    section2img.src = sauce;
    section2img.style.transform='scale(1)';
    section2img.style.transitionDuration='1s';
}


//-----------SCROLL ANIMATION-------------------

let countryArr1 = ['Spain', 'Turkey', 'United Kingdom','Portugal', 'Greece','Belgium', 'France','Germany'];
let pfpArr1 = ['https://a.storyblok.com/f/240783/1600x1200/813a4cacde/image002.jpeg/m/256x0/filters:quality(95):focal(undefined)'
    , 'https://a.storyblok.com/f/240783/780x1170/2542e511a6/5903cd6065184eca94ec346367d6201c-f5fb7444.jpg/m/256x0/filters:quality(95):focal(undefined)'
    , 'https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/5000x3335/997c765b31/1-18.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/601x770/ffd12fc70a/picture1-jpgrg.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/2048x1210/dc225e7bb9/manuport_building_no_meta.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/2048x1367/64c69af8f4/mpl_france_no_meta.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/2048x1004/d1168ebdd2/mpl_building_germany.jpg/m/256x0/filters:quality(95):focal(undefined)'
]


let countryArr2 = ['Brazil','United States of America','Chile', 'Peru'];
let pfpArr2 = [ 'https://a.storyblok.com/f/240783/861x550/1bd5a7adc9/17_fachada_winworkchacara.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/600x400/776f8e8471/nyc.webp/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/2880x4320/85fed56e5d/chile.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/2996x2000/c7248ded74/lima_no_metadata.jpeg/m/256x0/filters:quality(95):focal(undefined)'
]


let countryArr3 = ['United Arab Emirates', 'Republic Oof South Africa', 'Kingdom of Saudi Arabia'];
let pfpArr3 = [ 'https://a.storyblok.com/f/240783/1440x1080/d07da56300/dubai.jpeg/m/256x0/filters:quality(95):focal(undefined)'
    , 'https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/1436x1425/6363a4767e/1-1.jpeg/m/256x0/filters:quality(95):focal(undefined)'
]

let countryArr4 = ['Vietnam', 'Korea', 'Japan','Singapore',`People's Republic of China`]
let pfpArr4= [ 'https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/1200x1600/0a45f053d4/2.jpeg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/1536x2048/6b846e8ebd/123656fd-f08f-4f26-b0ef-e3ce2f283946.png/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/825x1466/225c2f1c31/sif-building-scaled-e1642726066848.jpg/m/256x0/filters:quality(95):focal(undefined)'
    ,'https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg/m/256x0/filters:quality(95):focal(undefined)'
]

// console.log("Length: "+ countryArr1.length);

// for(i=0;i<countryArr1.length;i++)
// {
//     let container1 = document.querySelector('#container1');

//     let countryDiv = document.createElement('div');
//     let countryImg = document.createElement('img');
//     let countryText = document.createElement('span');

//     let countryName= countryText.textContent;

//     countryName=countryArr1[i];
//     countryImg.src=pfpArr1[i];
    
//     console.log("name "+ countryName);
//     console.log("url: "+ countryImg.src);

//     countryText.style.fontSize='50px';
//     countryText.style.color='black';

    
//     countryDiv.appendChild(countryText);
//     countryDiv.appendChild(countryImg);
//     container1.appendChild(countryDiv);
// }


// -------------------------------------------------------------------------------------------


// animateCountries('#container1',countryArr1, pfpArr1,3);
// animateCountries('#container2',countryArr2,pfpArr2,-3);


// function animateCountries(containerID, countryArrX, pfpArrX,Z)
// {

// let container1 = document.querySelector(containerID);


// let countryDiv = document.createElement('div'); //Dont put this inside a loop | FRAGILE


// for (let i = 0; i < countryArrX.length; i++) {
    

//     let countryImg = document.createElement('img');
//     let countryText = document.createElement('span');

//     let countryName = countryArrX[i]; 

//     countryText.textContent = countryName; 
//     countryImg.src = pfpArrX[i];

//     // console.log("name: " + countryName);
//     // console.log("url: " + countryImg.src);

//     // countryText.style.fontSize = '40px';
//     // countryText.style.color = 'black';
//     // countryText.style.margin='0 4rem 0 1rem';
//     // countryText.style.whiteSpace='nowrap';

//     Object.assign(countryText.style,{
//         fontSize:'40px',
//         fontWeight:'550',
//         color:'black',
//         margin:'0 4rem 0 1rem',
//         whiteSpace:'nowrap',
        
//     });
    

//     countryImg.style.height='60px';
//     countryImg.style.width='60px';
//     countryImg.style.borderRadius='1.2rem';

//     countryDiv.style.display="flex";
//     countryDiv.style.alignItems="center";

//     container1.style.display="flex";

//     countryDiv.appendChild(countryImg);
//     countryDiv.appendChild(countryText);
//     container1.appendChild(countryDiv);
// }

// // ------------------
// //     window.addEventListener('scroll',()=>{
// //         animateThis(countryDiv);
// //     });

// // let section4 = document.getElementById('section4');


// // function animateThis(lmao)
// // {
// //     let scrollPosition = window.scrollY;
        
// //     let sectionTop = section4.offsetTop;

    
// //     console.log("SECTION TOP: "+ sectionTop);
// //     console.log("scrollpos " + scrollPosition);
// //     // console.log("sectionTop " + sectionTop);
    
// //     movementAmount = (scrollPosition-sectionTop);
    
// //     lmao.style.transform = `translateX(${movementAmount})`;
    
// // }
// // ----------------------------

// window.onscroll = e =>{

    
// let section4 = document.getElementById('section4');

//     let scrollPosition = window.scrollY;
//     let sectionTop = section4.offsetTop;

//     let movementAmt = (scrollPosition - sectionTop) / Z;


//     countryDiv.style.transform = `translateX(${movementAmt}px)`;

//     console.log('HO RHA HAI SCROLL YA NAHI???');
// }


// }






















// animateCountries('#containerX', countryArrX, pfpArrX, animationSpeed);
const animationSpeed = 2;
animateCountries('#container1', countryArr1, pfpArr1, animationSpeed);
animateCountries('#container2', countryArr2, pfpArr2,-animationSpeed);
animateCountries('#container3', countryArr3, pfpArr3,animationSpeed);
animateCountries('#container4', countryArr4, pfpArr4,-animationSpeed);


function animateCountries(containerID, countryArrX, pfpArrX,Z)
{
    let container = document.querySelector(containerID);
    let countryDiv = document.createElement('div');

    const multiplicity = 4;
    
for(j=0;j<multiplicity;j++)
{


    for (let i = 0; i < countryArrX.length; i++) {
        let countryImg = document.createElement('img');
        let countryText = document.createElement('span');

        let countryName = countryArrX[i]; 

        countryText.textContent = countryName; 
        countryImg.src = pfpArrX[i];

        Object.assign(countryText.style, {
            fontSize: '40px',
            fontFamily:'sans-serif',
            fontWeight: '400',
            color: 'black',
            margin: '0 6rem 0 1rem',
            whiteSpace: 'nowrap',
        });

        countryImg.style.height = '60px';
        countryImg.style.width = '60px';
        countryImg.style.objectFit='cover';
        countryImg.style.borderRadius = '1.2rem';

        countryDiv.style.display = "flex";
        countryDiv.style.alignItems = "center";
        countryDiv.style.margin = '25px 0';

        container.style.display = "flex";

        countryDiv.appendChild(countryImg);
        countryDiv.appendChild(countryText);
        container.appendChild(countryDiv);
    }

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        let movementAmt = (scrollPosition) / Z;

        let initialTime = new Date();
        console.log("Time now: " + initialTime);

        countryDiv.style.transform = `translateX(${movementAmt}px)`;
    });
    

}

}



// ----------------How we Move Section-------------------
let howWeMoveImg = document.getElementById("howWeMove_img");

let howWeMoveImgArr = ['./resources/Cargo/Cargo-Plane-Business.webp'
                    , './resources/Cargo/Cargo-Barging-Business.webp'
                    , './resources/Cargo/Cargo-Ship-Business.webp'
                    , './resources/Cargo/Cargo-Truck-Business.webp'
                    , './resources/Cargo/Cargo-Rail-Business.webp'
                    ];




let i=0;

function changeImgWeMove(ele,eleArr)
{      
   
    if(i>=eleArr.length)
    {
        i=0;
    }
    ele.src = eleArr[i];    
    i++;
    
    console.log("changeImgWeMove working!")
    // setTimeout(changeImgWeMove(),3);
    setTimeout(()=>changeImgWeMove(ele, eleArr), 3000);
}

changeImgWeMove(howWeMoveImg,howWeMoveImgArr);