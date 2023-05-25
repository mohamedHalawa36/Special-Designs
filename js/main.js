//colors Classes

let backgroundTime = setInterval(() => {
  let backgroundNum = Math.ceil(Math.random() * 10);
  if (backgroundNum === 6) {
    intro.style.cssText += `background-image:url(imgs/06.png)`;
  } else if (backgroundNum > 9) {
    intro.style.cssText += `background-image:url(imgs/${backgroundNum}.jpg)`;
  } else {
    intro.style.cssText += `background-image:url(imgs/0${backgroundNum}.jpg)`;
  }
}, 5000);
//nav buttons








let backgroundButtons = document.querySelectorAll("nav .random-background .buttons button")
backgroundButtons.forEach((button) => {
  button.onclick = function(){
    for(let i=0 ; i < backgroundButtons.length ; i++){
      if(backgroundButtons[i].classList.contains("selected")){
        backgroundButtons[i].classList.remove("selected")
      }
    }
    button.classList.add("selected")
    if(button.classList.contains("no")){
      window.localStorage.setItem("background","no")
       clearInterval(backgroundTime)
    }else{
      window.localStorage.setItem("background","yes")
      clearInterval(backgroundTime)
      backgroundTime = setInterval(() => {
        let backgroundNum = Math.ceil(Math.random() * 10);
        if (backgroundNum === 6) {
          intro.style.cssText += `background-image:url(imgs/06.png)`;
        } else if (backgroundNum > 9) {
          intro.style.cssText += `background-image:url(imgs/${backgroundNum}.jpg)`;
        } else {
          intro.style.cssText += `background-image:url(imgs/0${backgroundNum}.jpg)`;
        }
      }, 5000) 
    }
  }
})
     if(Object.keys(window.localStorage).includes("background")){
      let backgroundSelected = document.querySelector(`nav .random-background .buttons .${window.localStorage.getItem("background")}`)
      backgroundSelected.classList.add("selected")
     }else{
      let yesBackground = document.querySelector(`nav .random-background .buttons .yes`)
      yesBackground.classList.add("selected")
     }


let bulletsButtons = document.querySelectorAll("nav .show-bullets .buttons button")
bulletsButtons.forEach((button) => {
  button.onclick = function(){
    for(let i=0 ; i < bulletsButtons.length ; i++){
      if(bulletsButtons[i].classList.contains("selected")){
        bulletsButtons[i].classList.remove("selected")
      }
    }
    button.classList.add("selected")
    if(button.classList.contains("yes")){
      window.localStorage.setItem("bullets","yes")
      divBullets.style.display = "flex"
    }else{
      window.localStorage.setItem("bullets","no")
      divBullets.style.display = "none"
    }
  }
})
if(Object.keys(window.localStorage).includes("bullets")){
  let bulletSelected = document.querySelector(`nav .show-bullets .buttons .${window.localStorage.getItem("bullets")}`)
  bulletSelected.classList.add("selected")
}else{
  let yesBullet = document.querySelector(`nav .show-bullets .buttons .yes`)
  yesBullet.classList.add("selected")
  
}

window.onload = function(){

  //bullets
  bulletsButtons.forEach((button) => {
    if(button.classList.contains("selected")){
      if(button.classList.contains("yes")){
        divBullets.style.display = "flex"
      }else{
        divBullets.style.display = "none"
      }
    }
  })

  //background
  backgroundButtons.forEach((button) => {
    if(button.classList.contains("selected")){
      if(button.classList.contains("yes")){
        clearInterval(backgroundTime)
        backgroundTime = setInterval(() => {
          let backgroundNum = Math.ceil(Math.random() * 10);
          if (backgroundNum === 6) {
            intro.style.cssText += `background-image:url(imgs/06.png)`;
          } else if (backgroundNum > 9) {
            intro.style.cssText += `background-image:url(imgs/${backgroundNum}.jpg)`;
          } else {
            intro.style.cssText += `background-image:url(imgs/0${backgroundNum}.jpg)`;
          }
        }, 5000) 
      }else{
        clearInterval(backgroundTime)
      }
    }
  })
}

let resetNav = document.querySelector(".reset")
let allButtons = document.querySelectorAll("nav button")
resetNav.onclick = function(){
  //bullets
  window.localStorage.setItem("bullets","yes")
      divBullets.style.display = "flex"
  //background
  window.localStorage.setItem("background","yes")
  backgroundTime = setInterval(() => {
    let backgroundNum = Math.ceil(Math.random() * 10);
    if (backgroundNum === 6) {
      intro.style.cssText += `background-image:url(imgs/06.png)`;
    } else if (backgroundNum > 9) {
      intro.style.cssText += `background-image:url(imgs/${backgroundNum}.jpg)`;
    } else {
      intro.style.cssText += `background-image:url(imgs/0${backgroundNum}.jpg)`;
    }
  }, 5000) 

  

  allButtons.forEach((button) => {
    if(button.classList.contains("selected")){
      button.classList.remove("selected")
    }

    if(button.classList.contains("yes")){
      button.classList.add("selected")
    }
  })

  //color
  document.documentElement.style.setProperty("--mainColor",colors[0].getAttribute("data-set"))
  colors.forEach((color) => {
    if(color.classList.contains("selected")){
      color.classList.remove("selected")
    }
    colors[0].classList.add("selected")
    window.localStorage.setItem("color",colors[0].getAttribute("data-color"))
  })
}












//nav bar
let navbar = document.querySelector(".navbar")
let gear = document.getElementById("gear")
let gearIcon = document.querySelector("#gear i")


gear.onclick = function(){
  if(gear.classList.contains("open")){
    gear.classList.remove("open")
    navbar.style.cssText += "transform: translateX(calc(-100% + 30px))"
    gearIcon.style.cssText += `animation-play-state:paused`
  }else{
    gear.classList.add("open")
    navbar.style.transform ="none"
    gearIcon.style.cssText += `animation-play-state:running`
  }
}

let divBullets = document.querySelector(".bullets")

let intro = document.getElementById("intro");

//colors Select

let colors = document.querySelectorAll("nav .colors span")
colors.forEach((color) => {
  
  color.onclick = () => {
    for(let i=0 ; i < colors.length ; i++ ){
      if(colors[i].classList.contains("selected")){  
        colors[i].classList.remove("selected")
      }
    }
    color.classList.add("selected")
    window.localStorage.setItem("color",color.getAttribute("data-color"))
    document.documentElement.style.setProperty("--mainColor",window.localStorage.getItem("color"))
    
  }
})
document.documentElement.style.setProperty("--mainColor",window.localStorage.getItem("color"))
if(Object.keys(window.localStorage).includes("color") === false){
  colors[0].classList.add("selected")
}else{
  let localSelectedColor = document.querySelector(`nav .colors-container [data-color = "${window.localStorage.getItem("color")}"]`)
localSelectedColor.classList.add("selected")
}



let popLinks = document.querySelector(".pop-links");
let headerIcon = document.querySelector(".links i");
headerIcon.onclick = function () {
  if(headerIcon.classList.contains("clicked")){
    headerIcon.classList.remove("clicked")
    popLinks.style.display = "none";
  }else{
    headerIcon.classList.add("clicked")
    popLinks.style.display = "block";
  }
};

let realProgress = document.querySelectorAll(".real-progress");
let skills = document.getElementById("skills");

document.onscroll = function () {
  if (scrollY >= skills.offsetTop - 300) {
    realProgress.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
};

//Gallery Photos
let photos = document.querySelector(".gallery .photos")
function makePhotos(n){
    for(let i=1 ; i <= n ; i++){
        let div = document.createElement("div")
        div.className = "photo-container"
        let img = document.createElement("img")
        img.className = "photo"
        if(i < 10){
            if(i === 6){
                img.setAttribute("src",`imgs/06.png`)
            }else{
                img.setAttribute("src",`imgs/0${i}.jpg`)
            }
        }else{
            img.setAttribute("src",`imgs/${i}.jpg`)
        }
        div.appendChild(img)
        photos.appendChild(div)
    }

}

makePhotos(10)

let photoDivs = document.querySelectorAll(".photo-container")

for(let i=0 ; i < photoDivs.length ; i++){
  photoDivs[i].onclick = function(){
    let overlay = document.createElement("div")
    overlay.setAttribute("id","overlay")
    document.body.appendChild(overlay)
    document.body.style.position = "relative"
    let writtenNums = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]    
    let popupContainer = document.createElement("div")
    popupContainer.className = "popup-container"
    let imageTitle = document.createElement("h3")
    imageTitle.className = "image-title"
    imageTitle.innerHTML = `Image ${writtenNums[i]}`
    popupContainer.appendChild(imageTitle)
    let scaledImage = document.createElement("img");
    scaledImage.setAttribute("src",photoDivs[i].children.item(0).getAttribute("src"))
    scaledImage.className = "scaled-image"
    popupContainer.appendChild(scaledImage)  

    let closeButton = document.createElement("button")
    closeButton.setAttribute("id","close-popup")
    closeButton.innerHTML = "X"
    popupContainer.appendChild(closeButton)
    closeButton.onclick = function(){
      document.body.removeChild(overlay)
      document.body.removeChild(popupContainer)
    }
    document.body.appendChild(popupContainer)
  }
}

