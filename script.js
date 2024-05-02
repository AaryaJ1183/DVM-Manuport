function changeImg(sauce)
{
    let section2img = document.getElementById('section2_img');
    section2img.style.transform='scale(0.80)';
    section2img.style.transitionDuration='1s'
    section2img.src = sauce;
    section2img.style.transform='scale(1)';
    section2img.style.transitionDuration='1s';

    // let section2loader = document.querySelector('.section2_loader');
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




















let howWeMoveImgContainer = document.getElementById("howWeMove_container");


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

    const multiplicity = 4; //Repeating one countryDiv to fill the width (n more)
    
for(j=0;j<multiplicity;j++)
{

    for (let i = 0; i < countryArrX.length; i++) {
        let countryImg = document.createElement('img');
        let countryText = document.createElement('span');

        let countryName = countryArrX[i]; 

        countryText.textContent = countryName; 
        countryImg.src = pfpArrX[i];

        // Object.assign(countryText.style, {
        //     fontSize: '40px',
        //     fontFamily:'sans-serif',
        //     fontWeight: '400',
        //     color: 'black',
        //     margin: '0 6rem 0 1rem',
        //     whiteSpace: 'nowrap',
        // });
        countryText.classList.add('countryTextClass');

        countryImg.style.height = '60px';
        countryImg.style.width = '60px';
        countryImg.style.objectFit='cover';
        countryImg.style.borderRadius = '1.2rem';

        // countryImg.classList.add('countryImgClass');
        // countryImg.addEventListener("mouseover",()=>{
        //     countryImg.src='./resources/Logo.png';
        // });
        // countryImg.addEventListener("mouseout",()=>{
        //     countryImg.src=pfpArrX[i];
        // });
        

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

        // let initialTime = new Date();
        // console.log("Time now: " + initialTime);

        countryDiv.style.transform = `translateX(${movementAmt}px)`;
        // countryDiv.classList.add('countryDivSmooth');
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
    
    // console.log("changeImgWeMove working!")
    // setTimeout(changeImgWeMove(),3);
    setTimeout(()=>changeImgWeMove(ele, eleArr), 2000);
}

changeImgWeMove(howWeMoveImg,howWeMoveImgArr);



// -------------------------------------------
let howWeMoveContainer = document.getElementById('howWeMove_container');
let howWeMoveScrollPosition;
let howWeMoveMovementAmt 

window.addEventListener('scroll', () => {
    howWeMoveScrollPosition = window.scrollY;
    // howWeMoveMovementAmt = (howWeMoveScrollPosition) / 1;


    // howWeMoveContainer.style.transform = `translateY(${howWeMoveScrollPosition}px)`;
});


// -------------------------------------------
// 3D TILT EFFECT
const card = document.getElementById('card');
const cnsCard1 = document.getElementById('cnsCard1');
const cnsCardContainer1 = document.getElementById('cnsCardContainer1');
const cnsCardContainer2 = document.getElementById('cnsCardContainer2');
const joinTeamCardContainer = document.getElementById('joinTeamCardContainer');

const cnsCard2 = document.getElementById('cnsCard2');
// const cnsCardContainer1 = document.getElementById('cnsCardContainer2');


function tiltCard(cardParam,cardContainerParam,tiltXParam, tiltYParam)
{
    // const cardRect = cardParam.getBoundingClientRect();

    // // console.log(cardRect);
        
    // cardContainerParam.addEventListener('mousemove', function(e) {
    //     const centerX = cardRect.left + cardRect.width / 2;
    //     const centerY = cardRect.top + cardRect.height / 2;
    //     const deltaX = e.clientX - centerX;
    //     const deltaY = centerY- e.clientY;
    //     // const tiltX = (((deltaY)/centerY)*tiltXParam);
    //     // const tiltY = (((deltaX)/centerX)*tiltYParam);
        
    //     const tiltX = ((deltaY)*tiltXParam);
    //     const tiltY = ((deltaX)*tiltYParam);
    //     cardParam.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    //     cardParam.style.transition='all 0.01s ease-in-out';

    //     console.log("Center: " + centerX +", " + centerY);
    //     console.log("Mouse: " + e.clientX + ", " + e.clientY);

    //     // setInterval(()=>{
    //     //     console.log("centerX:" + centerX);
    //     //     console.log("centerY:" + centerY);
    //     //     console.log("tiltX:" + tiltX);
    //     //     console.log("tiltY:" + tiltY);
    //     //     console.log("---------------");
    //     // },5000);
    // });

    
    
    // cardContainerParam.addEventListener('mouseleave', function() {
    //     cardParam.style.transform = 'rotateX(0deg) rotateY(0deg)';
    //     cardParam.style.transition='all 1s ease-in-out';
        
    // });


// -----------------------------------------------
// const cardRect = cardParam.getBoundingClientRect();
// const cardContainerRect = cardContainerParam.getBoundingClientRect();

cardContainerParam.addEventListener('mousemove', function(e) {
    const cardRect = cardParam.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = centerY - e.clientY;

    const tiltX = deltaY * tiltXParam;
    const tiltY = deltaX * tiltYParam;

    cardParam.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    cardParam.style.transition = 'all 0.01s ease-in-out';

    // console.log("Center: " + centerX + " " + centerY);
    // console.log("Mouse: " + e.clientX + " " + e.clientY);
});

cardContainerParam.addEventListener('mouseleave', function() {
    cardParam.style.transform = 'rotateX(0deg) rotateY(0deg)';
    cardParam.style.transition = 'all 1s ease-in-out';
});



}

tiltCard(card,joinTeamCardContainer,0.0341115,-0.031125);
tiltCard(cnsCard1,cnsCardContainer1,0.041115,-0.11125);
tiltCard(cnsCard2,cnsCardContainer2, 0.041115,-0.11125);





// function add3d(ele)
// {


// }

// add3d(card);


//HAMBURGER MENU--------------------------------------------------------------------------------------
// let hamburger = document.querySelector('.hamburger');
let hamburger = document.getElementById('hamburger');
let hamburgerMenu = document.getElementById('hamburger-menu');
let logoSVG = document.getElementById('navLogoContainer');


hamburger.onclick = () => {
    // logoSVG.style.color = 'red';

    hamburgerMenu.style.transition='transform 0.5s ease-in-out';
    hamburgerMenu.style.transform = 'translateX(0vw)'; 

    document.body.style.overflow='hidden';
}

let hamburgerCross = document.getElementById('hamburger-cross');

hamburgerCross.onclick= () => {
    hamburgerMenu.style.transform = 'translateX(100vw)';
    document.body.style.overflowY='scroll';
}

//GOLDMODE-DIRECTION-WISE-CHANGE ------------------------------------------------------------------------------------------


// let goldModeSVGOuter = document.getElementById('goldmode-outer');
// var oldScrollY = window.scrollY;
// // let direction;


// window.onscroll=()=>{
//     if(oldScrollY<window.scrollY)
//     {
//         // direction = 'down';
//         goldModeSVGOuter.style.display='none';
//     }
//     else if(oldScrollY>window.scrollY)
//     {
//         // direction = 'up';
//         goldModeSVGOuter.style.display='block';
//     }

//     console.log("Direction: "+ direction);
// }

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
let scrollDirection;
let goldmodeOuter = document.getElementById('goldmode-outer');
let goldmodeOuterDiv = document.getElementById('goldmode-div');

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        scrollDirection = 'down';
        goldmodeOuter.style.display='none';
        goldmodeOuterDiv.style.transform='scale(0.75)';
        goldmodeOuterDiv.style.right='0px';
        goldmodeOuterDiv.style.bottom='0px';

        goldmodeOuterDiv.style.transition='all 0.15s ease-in-out';

    } else {
        scrollDirection = 'up';
        goldmodeOuter.style.display='block';
        goldmodeOuterDiv.style.transform='scale(1)';
        goldmodeOuterDiv.style.right='25px';
        goldmodeOuterDiv.style.bottom='25px';

        goldmodeOuterDiv.style.transition='all 0.15s ease-in-out';
    }

    lastScrollTop = currentScrollTop;

    console.log('Scroll direction:', scrollDirection);
});

let goldmodeTransitionGradient = document.getElementById('goldmode-transition-gradient');
// let goldCount=0;
let goldState='right';

window.addEventListener("scroll", ()=>{

    let scrollTopPosn = window.scrollY;
    goldmodeTransitionGradient.style.top = scrollTopPosn + 'px';

})

goldmodeOuterDiv.addEventListener("click", ()=>{
    
    if(goldState=='right')
    {
        goldmodeTransitionGradient.style.transform='translateX(-50vw)';
        goldmodeTransitionGradient.style.transition='all 1s ease';
        goldState='left';
    }
    else if(goldState=='left')
    {
        goldmodeTransitionGradient.style.transform='translateX(100vw)';
        goldState='right';
    }
    
    

    // goldmodeTransitionGradient.style.transform='translateX(100vw)';
    // goldCount++;
    // console.log(goldCount);
})

// if(goldCount%2===1)//odd
// {
//     goldmodeTransitionGradient.style.transform='translateX(100vw)';
// }




//We're Different Section Collapse------------------------------------------------------------------------------------------


let weBelieveLi = document.getElementById('weBelieveLi');
let weBelieveLiText = document.getElementById('section2-1B');
// weBelieveLiText.style.visibility='visible';
// weBelieveLiText.classList.add('showTxt');

let weSolveLi = document.getElementById('weSolveLi');
let weSolveLiText = document.getElementById('section2-2B');
// weSolveLiText.style.visibility='hidden';
// weSolveLiText.classList.add('hideTxt');

let pointOfContactLi = document.getElementById('pointOfContactLi');
let pointOfContactLiText = document.getElementById('section2-3B');
// pointOfContactLiText.style.visibility='hidden';
// pointOfContactLiText.classList.add('hideTxt');

let flexibleLi = document.getElementById('flexibleLi');
let flexibleLiText = document.getElementById('section2-4B');
// flexibleLiText.style.visibility='hidden';
// flexibleLiText.classList.add('hideTxt');


//COLLAPSE METHOD----------------------------------------
// let collapseState=true;
// let collapseCount=0;

// weBelieveLi = {
//     collapseState:false,
//     collapseText: document.getElementById('section2-1B')
// }
// weSolveLi = {
//     collapseState:true,
//     collapseText:document.getElementById('section2-2B')
// }
// pointOfContactLi = {
//     collapseState:true,
//     collapseText:document.getElementById('section2-3B')
// }
// flexibleLi = {
//     collapseState:true,
//     collapseText:document.getElementById('section2-4B')
// }

// function checkCollapse(element)
// {
//     if(element.collapseState==true)
//     {
//         element.collapseText.classList.remove('showTxt');
//         element.collapseText.classList.add('hideTxt');
//     }
//     else
//     {
//         element.collapseText.classList.remove('hideTxt');
//         element.collapseText.classList.add('showTxt');
//     }
// }

// weBelieveLi.addEventListener('click', function() {
//         weBelieveLi.collapseState=false;
//         collapseCount++;
// });
// weSolveLi.addEventListener('click', function() {
//     weSolveLi.collapseState=false;
//     collapseCount++;
// });
// pointOfContactLi.addEventListener('click', function() {
//     weSolveLi.collapseState=false;
//     collapseCount++;
// });
// flexibleLi.addEventListener('click', function() {
//     weSolveLi.collapseState=false;
//     collapseCount++;
// });
//------------------------------------------------------------

let section2Loader1 = document.getElementById('section2_loader1');
let section2Loader2 = document.getElementById('section2_loader2');
let section2Loader3 = document.getElementById('section2_loader3');
let section2Loader4 = document.getElementById('section2_loader4');

let section2TextArr = [weBelieveLiText,weSolveLiText,
    pointOfContactLiText,flexibleLiText]

let section2LoaderArr = [section2Loader1,section2Loader2,section2Loader3,section2Loader4]

function togglePara(clickedSec)
{
    section2TextArr.forEach(sec=>{
        sec.classList.remove('showTxt');
        sec.classList.add('hideTxt');
    });
    clickedSec.classList.add('showTxt');
    clickedSec.classList.remove('hideTxt');
}
function animateLoader(loaderParam)
{
    loaderParam.style.transform='scaleX(0%)';
    setInterval(()=>{
        loaderParam.style.transform='scaleX(100%)';
        loaderParam.style.transition='all 10s linear';
    },1000);
    loaderParam.style.transform='scaleX(0%)';

}


weBelieveLi.addEventListener('click', function() {
    togglePara(weBelieveLiText);
    animateLoader(section2Loader1);
});
weSolveLi.addEventListener('click', function() {
    togglePara(weSolveLiText);
    animateLoader(section2Loader2);
});
pointOfContactLi.addEventListener('click', function() {
    togglePara(pointOfContactLiText);
    animateLoader(section2Loader3);
});
flexibleLi.addEventListener('click', function() {
    togglePara(flexibleLiText);
    animateLoader(section2Loader4);
});



//DOM LOADER SCREEN------------------------------------------------------------
let loaderPercent = document.getElementById('loader-percent');
let loaderWhite = document.getElementById('loader-white');
let loaderScreenDiv = document.getElementById('loader-screen');

var j=0;

let loaderInterval = setInterval(()=>{
    loaderPercent.innerHTML=j+"%";
    console.log("j"+j);
    j++;
    
    if(j==101)
    {
        clearInterval(loaderInterval);
        expandLoader();
        setTimeout(()=>{
            translateLoader();
        },1000);
    }
},15);

function expandLoader()
{
    loaderPercent.style.visibility='hidden';
    loaderWhite.style.transform='scale(3)';
    loaderWhite.style.transition='all 1s ease';
}

function translateLoader()
{

    loaderWhite.style.transform='translateY(-150vh) scale(3)';
    loaderWhite.style.transition='all 1.75s ease';
    loaderWhite.style.transitionDelay='0s';
    loaderScreenDiv.style.visibility='hidden';

}
