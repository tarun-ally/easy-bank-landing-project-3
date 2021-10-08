function myFunction(){
    let burgerTag = document.querySelector(".close");
    var x=document.getElementById("mylink")
    if (x.style.display === "block"){
        x.style.display ="none";
        burgerTag.src="./images/icon-hamburger.svg";

       

    }
    else{
        x.style.display ="block";
        burgerTag.src="./images/icon-close.svg";
        const shadow = document.querySelector("#mylink");
        shadow.style.boxShadow = "50px 60px 400px 0 hsl(233, 26%, 24%)"

    }

}