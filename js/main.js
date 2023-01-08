let up = document.querySelector('.up');

onscroll =function(){
    if(this.scrollY>=100){
        up.classList.remove("hideIcon")
    }else{
        up.classList.add("hideIcon")

    }


}

up.onclick =function(){
    // window.scroll(0,0);
   
    scroll({
        top:0,
        behavior:"smooth"
    })

}