let cosmetics = [
    {
        name:"Lipstick",
        title:"Revlon",
        wikipidia:"http://www.revlon.com/?utm_source=bing&utm_medium=cpc&utm_campaign=Anthem%20%7C%20Brand%20%7C%20Exact&utm_term=revlon.com&utm_content=URL&gclid=COGP_NSsutwCFUZvGwod-m8PIQ&gclsrc=ds",
        img:"lipstick.jpg",
        quote:"shine your lips"
    },
    {
        name:"GoldenRose",
        title:"GR",
        wikipidia:"http://www.goldenrose.com.tr/en/product/26/eyes-mascara-wonder-lash-mascara-12x-volume-lash-lift/2",
        img:"mascara.jpg",
        quote:"Look your lashes Beautiful"
    },
    {
        name:"Eye Liner",
        title:"Revlon",
        wikipidia:"http://www.revlon.com/products/eyes/eyeliner/revlon-colorstay-2in1-angled-kajal?gclid=CImK7Y2xutwCFRZhGwodKOIEfg&gclsrc=ds#309978288015||0&utm_source=bing&utm_medium=cpc&utm_campaign=Eye%20%7C%20Brand%20-%20Product%20%7C%20Exact&utm_term=revlon%20eyeliner&utm_content=Eyeliner%20%7C%20ColorStay%202%20in%201%20Angled%20Kajal",
        img:"eye.jpg",
        quote:"Enhance Your Eyes"
    },
    {
        name:"Face Powder",
        title:"philanthropist",
        wikipidia:"https://www.target.com/s/lakme%20face%20powder?ref=tgt_adv_XS000000&AFID=msn&CPNG=Health%2BBeauty_Cosmetics&adgroup=Foundation_5&LID=700000001175126p22343924270&LNM=lakme+face+powder&MT=e&network=s&device=c&querystring=lakme%20face%20powder&fndsrc=tgtao&msclkid=bb2888eac44e1c613732d3b2bf10a5ae&gclid=CIneioSuutwCFYiThQoddgoM8Q&gclsrc=ds",
        img:"face.jpg",
        quote:"Change your complection"
    },
    {
        name:"Blusher",
        title:"yougest women",
        wikipidia:"https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        img:"blush.jpg",
        quote:"Highlight your cheeks"
        
    },
    {
        name:"Eye Shade",
        title:"yougest women",
        wikipidia:"https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        img:"eyeshade.jpg",
        quote:"Better eyeshade"

    },
    {
        name:"All kind of Brush",
        title:"Naked",
        wikipidia:"https://www.amazon.com/NAKED-BRUSHES/s?page=1&rh=i%3Aaps%2Ck%3ANAKED%20BRUSHES",
        img:"brush.jpg",
        quote:"Applying shades of your face"
    },
    {
        name:"Lip Gloss",
        title:"Naked",
        wikipidia:"https://www.amazon.com/Ultra-Nourishing-Gloss-color-authentic/dp/B01BNAINCC/",
        img:"glosss.jpg",
        quote:"Glow your lips"
    },
    {
        name:"Perfume",
        title:"Tommy",
        wikipidia:"https://www.fragrancenet.com/fragrances/tommy-bahama?mv_pc=msnus_tommy_bahama_ds_tommy_bahama_perfume_b&utm_source=msn&utm_medium=cpc&msclkid=fb6e0c0a12301aab72d6575280c62794",
        img:"perfume.PNG",
        quote:"good fragnance"
    },
    {
        name:"Nail Polish",
        title:"Salon",
        wikipidia:"https://www.walmart.com/c/brand/salon-perfect-nails",
        img:"nail.jpg",
        quote:"Color your nails"
    },
]

function  initializer() {
    let cosmoGroupEL = document.querySelector("#cosmo-list");
    for ( let i = 0; i < cosmetics.length; i ++) {
        cosmoGroupEL .innerHTML += `<div class="celebrity-img-div" 
        style="background-image:url('images/${cosmetics[i].img}')" onclick="cosmoChange(${i})">
        <p class="cosmo-img-text">${cosmetics[i].name}</p>
        </div>
        `
    
    }
}

function cosmoChange(cosmoIndex) {
    document.getElementById("cosmo-name").innerHTML = cosmetics [cosmoIndex].name;
    document.querySelector("#cosmo-title").innerHTML = cosmetics [cosmoIndex].title;
    document.querySelector("#cosmo-img").style["background-image"]=`url(images/${cosmetics[cosmoIndex].img})`;
    document.querySelector("#cosmo-qoute").innerHTML = cosmetics [cosmoIndex].quote;
    document.querySelector("#cosmo-link a").href = cosmetics [cosmoIndex]. wikipidia;
}

// animation on name


let isOpen = false;

$(document).ready(function(){
    $("#main").click(function(){
        $("#main").animate({height:'400px',width:'400px'});
        $("#icon").fadeOut();
        $("#menu ul").delay(300).animate({opacity:"1"});
        $("#menu ul").css("visibility","visible");
        $("#menu_circle_layer").animate({height:'450px',width:'450px'});
    
        isOpen = true;
        $("#menu ul").css('display', 'block')
    });
    $("#main").mouseleave(function(){
       console.log(isOpen);
       if (isOpen === true) {
            $("#main").css("display","none");
            $("#menu_circle_layer").css("display","none");
            isOpen = false;
        $("#menu ul").css('display', 'none')            
       }
       
    });
});

