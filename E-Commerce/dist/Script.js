


const HomeNavBar = document.getElementById('home-nav-bar')
const SignUpBtn = document.getElementById('sign-up-btn')
const MenuBtn = document.getElementById('menu-btn')
const CloseBtn = document.getElementById('close-btn')
const SideNavBar = document.getElementById('side-nav-bar')


MenuBtn.addEventListener('click', () => {
    HomeNavBar.style.display = "none"
    SignUpBtn.style.display = "none"
    SideNavBar.style.display = "flex"
})
CloseBtn.addEventListener('click', () => {
    SideNavBar.style.display = "none"
    HomeNavBar.style.display = "flex"
    SignUpBtn.style.display = "flex"
})

SideNavBar.addEventListener('mouseleave',()=>{
    SideNavBar.style.display = "none"
    HomeNavBar.style.display = "flex"
    SignUpBtn.style.display = "flex"
})



// Set the date we're counting down to
const countdownDate = new Date('December 30, 2023').getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
}, 1000); // Update every 1 second


//  Recommended section start heree
const Sortbtn = document.getElementById('sort-btn')
const RecommendedBtn = document.getElementById('recommendend-btn')


Sortbtn.addEventListener('mouseenter', () => {
    RecommendedBtn.style.display = "flex"
})
Sortbtn.addEventListener('mouseleave', () => {
    RecommendedBtn.style.display = "none"

})

//  Recommended section end heree


//  home men, women etc section start here
const MEN = document.getElementById('Men')
const MenSection = document.getElementById('men-section')

const WOMEN = document.getElementById('women')
const WomenSection = document.getElementById('women-section')

const KIDS = document.getElementById('kids')
const KidsSection = document.getElementById('kids-section')

const BEAUTY = document.getElementById('beauty')
const BeautySection = document.getElementById('beauty-section')

const HOMELIVING = document.getElementById('homeliving')
const HomeLivingSection = document.getElementById('homeliving-section')

const STUDIO = document.getElementById('studio')
const StudioSection = document.getElementById('studio-section')


MEN.addEventListener('mouseenter', () => {
    MenSection.style.display = "flex";
})

MEN.addEventListener('mouseleave', () => {
    MenSection.style.display = "none";
})

WOMEN.addEventListener('mouseenter', () => {
    WomenSection.style.display = "flex";
})

WOMEN.addEventListener('mouseleave', () => {
    WomenSection.style.display = "none";
})

KIDS.addEventListener('mouseenter', () => {
    KidsSection.style.display = "flex";
})

KIDS.addEventListener('mouseleave', () => {
    KidsSection.style.display = "none";
})

BEAUTY.addEventListener('mouseenter', () => {
    BeautySection.style.display = "flex";
})

BEAUTY.addEventListener('mouseleave', () => {
    BeautySection.style.display = "none";
})

HOMELIVING.addEventListener('mouseenter', () => {
    HomeLivingSection.style.display = "flex";
})

HOMELIVING.addEventListener('mouseleave', () => {
    HomeLivingSection.style.display = "none";
})
STUDIO.addEventListener('mouseenter', () => {
    StudioSection.style.display = "flex";
})

STUDIO.addEventListener('mouseleave', () => {
    StudioSection.style.display = "none";
})












//  home men section start here

//    page changing start here

const BtnChange2 = document.getElementById('btn-2-change')
const ArrowBtn = document.getElementById('arrow-btn')
const HiddenImage1 = document.getElementById('hidden-image-1')
const HiddenImage2 = document.getElementById('hidden-image-2')
const HiddenImage3 = document.getElementById('hidden-image-3')
const HiddenImage4 = document.getElementById('hidden-image-4')
const HiddenImage5 = document.getElementById('hidden-image-5')
const HiddenImage6 = document.getElementById('hidden-image-6')
const HiddenImage7 = document.getElementById('hidden-image-7')
const HiddenImage8 = document.getElementById('hidden-image-8')

//    page changing end here
BtnChange2.addEventListener('click', () => {
    HiddenImage1.style.display = "block"
    HiddenImage2.style.display = "block"
    HiddenImage3.style.display = "block"
    HiddenImage4.style.display = "block"
})

ArrowBtn.addEventListener('click', () => {
    HiddenImage5.style.display = "block"
    HiddenImage6.style.display = "block"
    HiddenImage7.style.display = "block"
    HiddenImage8.style.display = "block"
})




function loginpage(){
window.open('login.html')
}











