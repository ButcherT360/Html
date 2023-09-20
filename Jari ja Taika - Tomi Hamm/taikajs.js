

function myFunction() {
    var image =document.getElementById("jukka");
    if (image.src.match("site-header02.png")){
        image.src = "jukka.jpg";
        image.style.width = "50%";
    }
    else if (image.src.match("site-header.png")){
        image.src = "jukka.jpg";
        image.style.width = "50%";    
    }
    else if (image.src.match("site-header01.png")){
        image.src = "jukka.jpg";
        image.style.width = "50%";    
    }
    else if (image.src.match("jaritaikatausta.jpg")){
        image.src = "jukka.jpg";
        image.style.width = "50%";    
    } 
    else if(image.src.match("jukka.jpg")){
        image.src = "jaakko.jpg";
        image.style.width = "50%";
    }    
    else if(image.src.match("jaakko.jpg")){
        image.src = "jari.jpg";
        image.style.width = "50%";
    }    
    else if(image.src.match("jari.jpg")){
        image.src = "hannu.jpg";
        image.style.width = "50%";
    }    
    else if(image.src.match("hannu.jpg")){
        image.src = "kuva01.jpg";
        image.style.width = "50%";
    }    
    else if(image.src.match("kuva01.jpg")){
        image.src = "kuva02.jpg";
        image.style.width = "50%";
    }    
    else if(image.src.match("kuva02.jpg")){
        image.src = "kuva03.jpg";
        image.style.width = "50%";
    }    
    else if(image.src.match("kuva03.jpg")){
        image.src = "kuva04.jpg";
        image.style.width = "100%";    
    }   
    else if (image.src.match("kuva04.jpg")){
        image.src = "site-header1.png";
        image.style.width = "100%";    
    }
    else if (image.src.match("site-header1.png")){
        image.src = "jaritaikatausta1.jpg";
        image.style.width = "100%";    
    }
    else if (image.src.match("jaritaikatausta1.jpg")){
        image.src = "site-header01.png";
        image.style.width = "100%";    
    }
}