function changeImg(sauce)
{
    let section2img = document.getElementById('section2_img');
    section2img.style.transform='scale(0.80)';
    section2img.style.transitionDuration='1s'
    section2img.src = sauce;
    section2img.style.transform='scale(1)';
    section2img.style.transitionDuration='1s';
}


// SCROLL ANIMATION
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


console.log("Length: "+ countryArr1.length);

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


for (let i = 0; i < countryArr1.length; i++) {
    let container1 = document.querySelector('#container1');

    let countryDiv = document.createElement('div');
    let countryImg = document.createElement('img');
    let countryText = document.createElement('span');

    let countryName = countryArr1[i]; 

    countryText.textContent = countryName; 
    countryImg.src = pfpArr1[i];

    console.log("name: " + countryName);
    console.log("url: " + countryImg.src);

    // countryText.style.fontSize = '40px';
    // countryText.style.color = 'black';
    // countryText.style.margin='0 4rem 0 1rem';
    // countryText.style.whiteSpace='nowrap';

    Object.assign(countryText.style,{
        fontSize:'40px',
        fontWeight:'550',
        color:'black',
        margin:'0 4rem 0 1rem',
        whiteSpace:'nowrap'
    });
    

    countryImg.style.height='60px';
    countryImg.style.width='60px';
    countryImg.style.borderRadius='1.2rem';

    countryDiv.style.display="flex";
    countryDiv.style.alignItems="center";

    container1.style.display="flex";

    
    countryDiv.appendChild(countryImg);
    countryDiv.appendChild(countryText);
    container1.appendChild(countryDiv);
}



