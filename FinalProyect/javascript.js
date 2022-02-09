document.addEventListener("DOMContentLoaded", start)
let searchs = 1
let imgmessi = new Array("imgMessi/messi.jpg", "imgMessi/messi2021.jpg", 
"imgMessi/messiarg.jpeg","imgMessi/messibalondeoro.jpg", "imgMessi/messicabeza.jpg", 
"imgMessi/Messi2004.jpg", "imgMessi/messipateado.jpg","imgMessi/messicopa.jpg",
"imgMessi/messidios.jpeg","imgMessi/messibeso.jpg","imgMessi/messillorando.jpg",
"imgMessi/messiPSG.jpg");
let imgramon = Array("imgRamon/ramonsnmascarilla.jfif")
let imgcr7 = Array("imgCristiano/bichollorando.jpg","imgCristiano/bichomodelo.jfif",
"imgCristiano/cr7champion.jpg", "imgCristiano/cr7o.jpeg", 
"imgCristiano/cristianomanchesteunited2021.jpg" , "imgCristiano/cristianoportugal.jpg",
"imgCristiano/bichosus.jpeg", "imgCristiano/bichosuuelegante.jpg")
let imgotw = Array("imgOtw/otw1.jpg", "imgOtw/otw2.jpg", "imgOtw/otw3.jpg", "imgOtw/otw4.jpg",
"imgOtw/otw5.jpg")
let imgnirvana = Array("imgNirvana/nirvana.jpg","imgNirvana/nirvana2.jpg","imgNirvana/nirvana3.jpg")
let imgeminem = Array("imgEminem/eminem1.jpg","imgEminem/eminem2.jpeg","imgEminem/eminem3.jpg","imgEminem/eminem4.jpg",
"imgEminem/eminem5.jfif","imgEminem/eminem6.jpg","imgEminem/eminem7.jpg","imgEminem/eminem8.jpg","imgEminem/eminem9.jpg",
"imgEminem/eminem10.jpg")
let imgcanserbero = Array("imgCanserbero/can1.png", "imgCanserbero/can2.jpg","imgCanserbero/can3.jpg",
"imgCanserbero/can4.jpg","imgCanserbero/can5.jpg",)
let imgmontecastelo = Array("imgMontecastelo/montecastelo1.jfif", "imgMontecastelo/montecastelo2.png",
"imgMontecastelo/montecastelo3.jpg", "imgMontecastelo/montecastelo4.png", "imgMontecastelo/montecastelo5.png",
"imgMontecastelo/montecastelo6.jfif",)

function start(){
    let btn = document.getElementById("search")
    btn.addEventListener("click", search)

    let btn2 = document.getElementById("clean")
    btn2.addEventListener("click", remove)
}

function search(){
    let imgs = document.getElementsByTagName("img")
    let textsearch = document.getElementById("searchinput").value
    if (textsearch == null || textsearch == ""){
        alert("Please type something")
    }else if(textsearch != "messi" && textsearch != "Messi" && textsearch != "ramon" 
    && textsearch != "Ramon" && textsearch != "Cristiano" && textsearch != "cristiano"
    && textsearch != "cr7" && textsearch != "Cr7" && textsearch != "Over the garden wall"
    && textsearch != "Over the Garden Wall" && textsearch != "Mas alla del Jardin" 
    && textsearch != "mas alla del jardin" && textsearch != "Nirvana" && textsearch != "nirvana"
    && textsearch != "Eminem" && textsearch != "eminem" && textsearch != "Canserbero" 
    && textsearch != "canserbero" && textsearch != "Montecastelo" && textsearch != "montecastelo"){
        alert("Could not find sorry")
        document.getElementById("searchinput").value = ""
        let imgsremove = document.getElementsByTagName("img")
        for(i=0;i < imgsremove.length;i++){
            imgsremove[i].src="img/noimage.jpg";
        }
    }

    if (textsearch == "messi" || textsearch == "Messi"){
        for (i=0;i < imgmessi.length;i++){
            imgs[i].src=imgmessi[i]
            imgs[i].style.visibility = "visible"
        }
    }

    if (textsearch == "Cristiano" || textsearch == "cristiano" || textsearch == "cr7" || textsearch == "Cr7"){
        let x = document.querySelectorAll("img")
        let ccr7 = 8
        for(i=ccr7;i < x.length;i++){
            x[i].style.visibility = "hidden"
        }

        for (i=0;i < imgcr7.length;i++){
            imgs[i].src=imgcr7[i]
            imgs[i].style.visibility = "visible"
        }
    }

    if (textsearch == "Eminem" || textsearch == "eminem"){
        let x = document.querySelectorAll("img")
        let cem = 10
        for(i=cem;i < x.length;i++){
            x[i].style.visibility = "hidden"
        }

        for (i=0;i < imgeminem.length;i++){
            imgs[i].src=imgeminem[i]
            imgs[i].style.visibility = "visible"
        }
    }

    if (textsearch == "Canserbero" || textsearch == "canserbero"){
        let x = document.querySelectorAll("img")
        let ccan = 5
        for(i=ccan;i < x.length;i++){
            x[i].style.visibility = "hidden"
        }

        for (i=0;i < imgcanserbero.length;i++){
            imgs[i].src=imgcanserbero[i]
            imgs[i].style.visibility = "visible"
        }
    }

    if (textsearch == "Nirvana" || textsearch == "nirvana"){
        let x = document.querySelectorAll("img")
        let cnir = 3
        for(i=cnir;i < x.length;i++){
            x[i].style.visibility = "hidden"
        }

        for (i=0;i < imgnirvana.length;i++){
            imgs[i].src=imgnirvana[i]
            imgs[i].style.visibility = "visible"
        }
    }

    if (textsearch == "Over the garden wall" || textsearch == "Over the Garden Wall" || textsearch == "Mas alla del Jardin" || textsearch == "mas alla del jardin"){
        let x = document.querySelectorAll("img")
        let cotw = 5
        for(i=cotw;i < x.length;i++){
            x[i].style.visibility = "hidden"
        }

        for (i=0;i < imgotw.length;i++){
            imgs[i].src=imgotw[i]
            imgs[i].style.visibility = "visible"
        }
    }

    if (textsearch == "Montecastelo" || textsearch == "montecastelo"){
        let x = document.querySelectorAll("img")
        let cmon = 6
        for(i=cmon;i < x.length;i++){
            x[i].style.visibility = "hidden"
        }

        for (i=0;i < imgmontecastelo.length;i++){
            imgs[i].src=imgmontecastelo[i]
            imgs[i].style.visibility = "visible"
        }
    }


    if (textsearch == "ramon" || textsearch == "Ramon"){
        let x = document.querySelectorAll("img")
        let cramon = 1
        for(i=cramon;i < x.length;i++){
            x[i].style.visibility = "hidden"
        }

        for (i=0;i < imgramon.length;i++){
            imgs[i].src=imgramon[i]
            imgs[i].style.visibility = "visible"
        }
    }

    let searchconsol = document.getElementById("searchinput").value
    while(true){
        console.log("Search Number " + searchs + "º: " + searchconsol)
        searchs++
        break
    }
}

function remove(){
    console.warn("Everything will be deleted")
    alert("Deleting...")
    location.reload(true)
    let imgsremove = document.getElementsByTagName("img")
    for(i=0;i < imgsremove.length;i++){
        imgsremove[i].src="img/noimage.jpg";
    }
}

