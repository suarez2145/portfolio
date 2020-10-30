require('./mystyles.scss');


// init function to change subtitle in main Hero on hover
const titleChanger = (() =>{

    let enterCounter = 0;


    // main function to swap old subtitle text with new subtitle text
    let changeNow = () =>{

        enterCounter++;
        let newTitle, oldTitle;

        let mainTxt = document.getElementById("main-space");
        let rFadOut = mainTxt.classList.remove("animate__animated", "animate__fadeOut" ); 
        let addFadIn = mainTxt.classList.add("animate__animated", "animate__fadeIn");
        console.log(enterCounter);


        if (enterCounter === 1){
            rFadOut;
            console.log(mainTxt.classList)
            newTitle = '<h1 class="header-txt is-size-1 is-size-4-mobile desc">Father...</h1>'
            document.querySelector('.desc').remove();
            document.querySelector('.desc_space').insertAdjacentHTML("beforeend", newTitle);
            addFadIn

        } if (enterCounter > 1 ){
            rFadOut;
            console.log(mainTxt.classList)
            newTitle = '<h1 class="header-txt is-size-1 is-size-4-mobile desc">Seeker...</h1>'
            document.querySelector('.desc').remove();
            document.querySelector('.desc_space').insertAdjacentHTML("beforeend", newTitle);
            void mainTxt.offsetWidth;
            addFadIn
            console.log(mainTxt.classList)
        } if (enterCounter === 3){
            rFadOut;
            addFadIn
            enterCounter = 0;
            oldTitle = '<h1 class="header-txt is-size-1 is-size-4-mobile desc">Web Developer...</h1>'
            console.log( 'time to change back!! ');
            document.querySelector('.desc').remove();
            document.querySelector('.desc_space').insertAdjacentHTML("beforeend", oldTitle);

        }



    }
    // function to increment mouseenter counter
    let fadeOut = () => {
        let mainTxt = document.getElementById("main-space");
        mainTxt.classList.add("animate__animated", "animate__fadeOut")
        // requesting thi offsetwidth is what restarts the animation!! 
        void mainTxt.offsetWidth;

    }
    
    
    document.querySelector('.desc_space').addEventListener("mouseenter",fadeOut);
    document.querySelector('.desc_space').addEventListener("mouseleave",changeNow);

    
})

titleChanger();

const openM = () => {
    let modal = document.getElementById("main-modal");
    modal.classList.add("is-active","is-clipped");
};

const closeM = () => {
    let modal = document.getElementById("main-modal");
    modal.classList.remove("is-active");
};

const closeMX = () => {
    let modalX = document.getElementById("main-modal");
    modalX.classList.remove("is-active");

};

const clearInp = () => {
    let name = document.getElementById("name1");
    let email = document.getElementById("email1");
    let phone = document.getElementById("phone1");
    let text = document.getElementById("text1");

    name.value = "";
    email.value = '';
    phone.value = "";
    text.value = "";

}

document.querySelector('.button').addEventListener("click",openM);
document.querySelector(".modal-background").addEventListener('click', () => {
    closeM();
    clearInp();

});
document.querySelector(".modal-close").addEventListener('click', () => {
    closeMX();
    clearInp();
});
