const firstBlock = document.querySelector('#first-block')
const secondBlock = document.querySelector('#second-block')

const aboutBlock = document.querySelector('#main_introduce')
const projectsBlock = document.querySelector('#about-projects')

const aboutBlockTitle = document.querySelector('.first-block-title')
const projectsBlockTitle = document.querySelector('.second-block-title')
const thirdBlockTitle = document.querySelector('.third-block-title')

const aboutParagraph = document.querySelector('#about-paragraph')
const landingParagraph = document.querySelector('#landing-paragraph')
const jsParagraph = document.querySelector('#js-paragraph')

const descriptionLine = document.querySelector('#description-line')
const landingLine = document.querySelector('#landing-line')
const jsLine = document.querySelector('#js-line')
const imageBlock = document.querySelector('#image-block')
const aboutMe = document.querySelector('.about-me')
const shadowLine = document.querySelectorAll('.shadow-line')

const firstImagesBlock = document.querySelector('.first-images-block')
const secondImagesBlock = document.querySelector('.second-images-block')

// variables for window scroll function
const element = document.querySelector('.target');
let thirdBlockIsVisible = false
const thirdBlock = document.querySelector('#third-block')

// social networks
const instagramButton = document.querySelector(".instagram")
const telegramButton = document.querySelector(".telegram")
const gitHub = document.querySelector(".github")
const facebook = document.querySelector(".facebook")
const twitter = document.querySelector(".twitter")
const gmail = document.querySelector(".gmail")

facebook.addEventListener('click', () => {
    alert(`Sorry i can't log in my facebook account`)
})

// first slider
let firstPosition = 0;
const firstSlidesToShow = 4
const firstSlidesToScroll = 1
const firstContainer = document.querySelector(".f-slider-container")
const firstTrack = document.querySelector(".f-slider-track")
const firstLeftArrow = document.querySelector(".left-arrow")
const firstRightArrow = document.querySelector(".right-arrow")
const firstItems = document.querySelectorAll(".f-slider-item")
const firstItemsCount = firstItems.length
const firstItemWidth = firstContainer.getBoundingClientRect().width / firstSlidesToShow
const firstMovePosition = firstSlidesToScroll * firstItemWidth

// second slider
let secondPosition = 0;
const secondSlidesToShow = 4
const secondSlidesToScroll = 1
const secondContainer = document.querySelector(".slider-container")
const secondTrack = document.querySelector(".slider-track")
const secondLeftArrow = document.querySelector(".second-left-arrow")
const secondRightArrow = document.querySelector(".second-right-arrow")
const secondItems = document.querySelectorAll(".slider-item")
const secondItemsCount = secondItems.length
const secondItemWidth = secondContainer.getBoundingClientRect().width / secondSlidesToShow
const secondMovePosition = secondSlidesToScroll * secondItemWidth

// smooth displaying blocks
function changeItem(whichBlock, whichBlockTitle, height, margin) {
    whichBlock.style.transform = "translate(0)"
    whichBlock.style.height = height
    whichBlockTitle.style.marginLeft = margin
}

function creatingName(blockTitle, blockStyle) {
    const blockName = document.createElement('p')
    blockTitle.appendChild(blockName)
    blockName.classList.add("faded-out", blockStyle)
    setTimeout(function(){blockName.classList.remove("faded-out")}, 300) 
}

function forOpacity(e) {
    e.style.opacity = "1"
}

function forHalfOpacity(e) {
    e.style.opacity = "0.5"
}

function forWidth(e, t) {
    e.style.width = t
}

// Function for clicking and redirecting for soc.net.
function linkButton(networkButton, link) {
    networkButton.addEventListener("click", e => {
        window.open(link)
    })
}

// function for "contact me" block display
function thirdBlockTransition() {
    if (!thirdBlockIsVisible) {
        setTimeout(function(){
            thirdBlock.style.opacity = "1"
            setTimeout(function(){
                thirdBlockTitle.classList.remove("block-width")
                thirdBlockTitle.classList.toggle("third-block-title-active")
                creatingName(thirdBlockTitle, "name-of-third-block")
                setTimeout(function(){
                    thirdBlockTitle.style.marginLeft = "0"
                    setTimeout(function(){
                        forOpacity(facebook)
                        forOpacity(gitHub)
                        setTimeout(function(){
                            forOpacity(telegramButton)
                            forOpacity(instagramButton)
                        }, 200)
                    }, 200)
                }, 1000)
            }, 400)
        }, 200)
    thirdBlock.style.opacity = "1"
    thirdBlockIsVisible = true
    }
}

// functions for slider
function checkBtns(leftArrow, rightArrow, position, itemsCount, slidesToShow, itemWidth) {
    leftArrow.disabled = position === 0
    rightArrow.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}

function setPosition(track, position) {
    track.style.transform = `translateX(${position}px)`
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function(){
        aboutBlock.classList.toggle('main-introduce-size-active')
        aboutBlockTitle.style.marginLeft = "0"
        creatingName(aboutBlockTitle, "name-of-first-block")
        forWidth(descriptionLine, "98%")
        forOpacity(aboutParagraph)
        forOpacity(imageBlock)
        forOpacity(aboutMe)
        aboutMe.style.height = "100%"
        
    }, 500)
    setTimeout(function(){
        secondBlock.style.display = "flex"
    }, 1400)
    setTimeout(function() {
        forOpacity(secondBlock)
        secondBlock.style.transform = "translate(0,0)"
        boringInformation.classList.remove('class-for-opacity')
    }, 1500)
    setTimeout(function(){
        projectsBlock.classList.toggle('about-projects-size-active')
        projectsBlockTitle.style.marginLeft = "70%"
        creatingName(projectsBlockTitle, "name-of-second-block")
        forOpacity(firstImagesBlock)
        forOpacity(landingParagraph)
        forWidth(landingLine, "92%")
    }, 2000)
    setTimeout(function(){
        forOpacity(jsParagraph)
        forWidth(jsLine, "92%")
        forOpacity(secondImagesBlock)
        shadowLine.forEach(e => forHalfOpacity(e))
    },2200)
    setTimeout(function(){
        shadowLine.forEach(e => forHalfOpacity(e))
        boringInformation.classList.add('transform-class')
    }, 2500)
    setTimeout (function(){
        boringInformation.classList.remove('opacity-class')
        window.addEventListener('scroll', function() {
            Visible (element);
          });
        Visible (element)
    }, 2700)
});


const Visible = function (target) {

  const targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },

    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && 
    targetPosition.top < windowPosition.bottom && 
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 

        thirdBlockTransition()
  }
};


linkButton(instagramButton, "https://www.instagram.com/kudashev_s_/")
linkButton(telegramButton, "https://t.me/kudashev_s")
linkButton(gitHub, "https://github.com/Sergey-Kudashev")
// linkButton(facebook, "#")
linkButton(twitter, "https://twitter.com/Kudashev_")
// linkButton(gmail, "https://mail.google.com/mail/u/0/?tab=mm#inbox?compose=GTvVlcSDZcmBkVvMLHXtSJcWXNJbZKdgCrBrQwfTZlKzBVbzqzszLPFFQRfZhxCNsXkJbSwhWdJfn")
// mailTo(gmail, "dossxxx0389@gmail.com")

// function mailTo (networkButton, mail) {
//     networkButton.addEventListener('click', () => {
//         window.open.href = "mailto:" + mail
//     })
// }

gmail.addEventListener('click', () => {
    window.location.href = ("mailto:dossxxx0389@gmail.com?subject=Employment&body=Hi there!")
})

secondItems.forEach((item) => {
    item.style.minWidth = `${secondItemWidth}px`
})

secondRightArrow.addEventListener('click', () => {
    const itemsLeft = secondItemsCount - (Math.abs(secondPosition) + secondSlidesToShow * secondItemWidth) / secondItemWidth

    secondPosition -= itemsLeft >= secondSlidesToScroll ? secondMovePosition : itemsLeft * secondItemWidth

    setPosition(secondTrack, secondPosition)
    checkBtns(secondLeftArrow, secondRightArrow, secondPosition, secondItemsCount, secondSlidesToShow, secondItemWidth)
})

secondLeftArrow.addEventListener('click', () => {
    const itemsLeft = Math.abs(secondPosition) / secondItemWidth

    secondPosition += itemsLeft >= secondSlidesToScroll ? secondMovePosition : itemsLeft * secondItemWidth

    setPosition(secondTrack, secondPosition)
    checkBtns(secondLeftArrow, secondRightArrow, secondPosition, secondItemsCount, secondSlidesToShow, secondItemWidth)
})

checkBtns(secondLeftArrow, secondRightArrow, secondPosition, secondItemsCount, secondSlidesToShow, secondItemWidth)




firstItems.forEach((item) => {
    item.style.minWidth = `${firstItemWidth}px`
})

firstRightArrow.addEventListener('click', () => {
    const itemsLeft = firstItemsCount - (Math.abs(firstPosition) + firstSlidesToShow * firstItemWidth) / firstItemWidth

    firstPosition -= itemsLeft >=firstSlidesToScroll ? firstMovePosition : itemsLeft * firstItemWidth

    setPosition(firstTrack, firstPosition)
    checkBtns(firstLeftArrow, firstRightArrow, firstPosition, firstItemsCount, firstSlidesToShow, firstItemWidth)
})

firstLeftArrow.addEventListener('click', () => {
    const itemsLeft = Math.abs(firstPosition) / firstItemWidth

    firstPosition += itemsLeft >= firstSlidesToScroll ? firstMovePosition : itemsLeft * firstItemWidth

    setPosition(firstTrack, firstPosition)
    checkBtns(firstLeftArrow, firstRightArrow, firstPosition, firstItemsCount, firstSlidesToShow, firstItemWidth)
})

checkBtns(firstLeftArrow, firstRightArrow, firstPosition, firstItemsCount, firstSlidesToShow, firstItemWidth)

const toDoListButton = document.querySelector(".to-do-list-project-button")
const calculatorButton = document.querySelector(".calculator-project-button")
const firstLanding = document.querySelector(".first-landing-project-button")
const theSnakeGame = document.querySelector(".snake-project-button")
const secondLanding = document.querySelector(".second-landing-project-button")
const onlineStore = document.querySelector(".online-store-project-button")

function projectOpenButton (projectButton, linkToProject) {
    projectButton.addEventListener("click", e => {
        window.open(linkToProject)
    })
}

projectOpenButton(theSnakeGame, "TheSnake/snakeGame.html")
projectOpenButton(toDoListButton, "toDoListProject/toDoList.html")
projectOpenButton(calculatorButton, "calculatorProject/calculator.html")
projectOpenButton(firstLanding, "first-landing/first-landing.html")
projectOpenButton(secondLanding, "second-landing/second-landing.html")
// projectOpenButton(onlineStore, "")

const boringInformation = document.querySelector(".boring-information")
const boringParagraph = document.querySelector(".boring-paragraph")
const boringText = document.querySelector(".boring-text")
let activated = true

boringInformation.addEventListener('click', e => {
    boringInformation.classList.toggle('boring-information-active')
    if (activated) {
        setTimeout(function() {
            boringParagraph.classList.toggle('boring-paragraph-active')
        }, 400)
        activated = false
    } else {
        boringParagraph.classList.toggle('boring-paragraph-active')
        activated = true
    }
    
    boringText.classList.toggle('boring-text-active')
})

if (screen.width < 800) {
    boringText.classList.add('rainbow-word')
    boringInformation.addEventListener('click', e => {
            document.querySelector(".about-me-paragraph").classList.toggle('display-none')
    })
}

if (screen.width < 580) {
    boringInformation.addEventListener('click', e => {
            document.querySelector(".my-photo").classList.toggle('display-none')
    })
}

setTimeout(function() {
    window.scrollTo(0, 0)
}, 100)