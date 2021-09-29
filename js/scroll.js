const prevBtn = document.querySelector('.prev-slide')
const nextBtn = document.querySelector('.next-slide')
let count = 1
nextBtn.onclick = function () {
    document.querySelector('.scrollmenu').scrollLeft += 195
}
prevBtn.onclick = function () {
    document.querySelector('.scrollmenu').scrollLeft -= 195
}
prevBtn.style.display = "none";

// h2.html
const scrollBtns = document.querySelectorAll('#smbtn1')
const singleSlider = document.querySelector('.scroll1')

scrollBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pouf/ME-P-${value}.png" alt="slider"></div>`
        count = value
        carousel1()
    })
})

const slideBtns = document.querySelectorAll('.npbtn1')

slideBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pouf/ME-P-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pouf/ME-P-0${count}.png" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pouf/ME-P-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pouf/ME-P-0${count}.png" alt="slider"></div>`
            }
        }
        carousel1()
    })
})

function carousel1() {
    if (count < 35) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}

// h3.html
const scrollBtns2 = document.querySelectorAll('#smbtn2')
const singleSlider2 = document.querySelector('.scroll2')

scrollBtns2.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider2.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/throw/ME-T-${value}.png" alt="slider"></div>`
        count = value
        carousel2()
    })
})

const slideBtns2 = document.querySelectorAll('.npbtn2')

slideBtns2.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider2.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/throw/ME-T-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider2.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/throw/ME-T-0${count}.png" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider2.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/throw/ME-T-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider2.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/throw/ME-T-0${count}.png" alt="slider"></div>`
            }
        }
        carousel2()
    })
})

function carousel2() {
    if (count < 72) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}

// h4.html
const scrollBtns3 = document.querySelectorAll('#smbtn3')
const singleSlider3 = document.querySelector('.scroll3')

scrollBtns3.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider3.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pillow/ME-CP-${value}.png" alt="slider"></div>`
        count = value
        carousel3()
    })
})

const slideBtns3 = document.querySelectorAll('.npbtn3')

slideBtns3.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider3.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pillow/ME-CP-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider3.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pillow/ME-CP-0${count}.png" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider3.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pillow/ME-CP-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider3.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pillow/ME-CP-0${count}.png" alt="slider"></div>`
            }
        }
        carousel3()
    })
})

function carousel3() {
    if (count < 46) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}

// h5.html
const scrollBtns4 = document.querySelectorAll('#smbtn4')
const singleSlider4 = document.querySelector('.scroll4')

scrollBtns4.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider4.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-${value}.jpg" alt="slider"></div>`
        count = value
        carousel4()
    })
})

const slideBtns4 = document.querySelectorAll('.npbtn4')

slideBtns4.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider4.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider4.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider4.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider4.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        carousel4()
    })
})

function carousel4() {
    if (count < 11) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}

// h6.html
const scrollBtns5 = document.querySelectorAll('#smbtn5')
const singleSlider5 = document.querySelector('.scroll5')

scrollBtns5.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider5.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/bathmat/ME-BR-${value}.png" alt="slider"></div>`
        count = value
        carousel5()
    })
})

const slideBtns5 = document.querySelectorAll('.npbtn5')

slideBtns5.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider5.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/bathmat/ME-BR-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider5.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/bathmat/ME-BR-0${count}.png" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider5.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/bathmat/ME-BR-00${count}.png" alt="slider"></div>`
            }else{
                singleSlider5.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/bathmat/ME-BR-0${count}.png" alt="slider"></div>`
            }
        }
        carousel5()
    })
})

function carousel5() {
    if (count < 58) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}
// h7.html
const scrollBtns6 = document.querySelectorAll('#smbtn6')
const singleSlider6 = document.querySelector('.scroll6')

scrollBtns6.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider6.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-${value}.jpg" alt="slider"></div>`
        count = value
        carousel6()
    })
})

const slideBtns6 = document.querySelectorAll('.npbtn6')

slideBtns6.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider6.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider6.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider6.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider6.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        carousel6()
    })
})

function carousel6() {
    if (count < 11) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}
// h8.html
const scrollBtns7 = document.querySelectorAll('#smbtn7')
const singleSlider7 = document.querySelector('.scroll7')

scrollBtns7.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider7.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-${value}.jpg" alt="slider"></div>`
        count = value
        carousel7()
    })
})

const slideBtns7 = document.querySelectorAll('.npbtn7')

slideBtns7.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider7.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider7.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider7.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider7.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        carousel7()
    })
})

function carousel7() {
    if (count < 11) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}
// h9.html
const scrollBtns8 = document.querySelectorAll('#smbtn8')
const singleSlider8 = document.querySelector('.scroll8')

scrollBtns8.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider8.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-${value}.jpg" alt="slider"></div>`
        count = value
        carousel8()
    })
})

const slideBtns8 = document.querySelectorAll('.npbtn8')

slideBtns8.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider8.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider8.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider8.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider8.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        carousel8()
    })
})

function carousel8() {
    if (count < 11) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}
// h11.html
const scrollBtns9 = document.querySelectorAll('#smbtn9')
const singleSlider9 = document.querySelector('.scroll9')

scrollBtns9.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider9.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-${value}.jpg" alt="slider"></div>`
        count = value
        carousel9()
    })
})

const slideBtns9 = document.querySelectorAll('.npbtn9')

slideBtns9.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider9.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider9.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider9.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider9.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        carousel9()
    })
})

function carousel9() {
    if (count < 11) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}
// h12.html
const scrollBtns10 = document.querySelectorAll('#smbtn10')
const singleSlider10 = document.querySelector('.scroll10')

scrollBtns10.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider10.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-${value}.jpg" alt="slider"></div>`
        count = value
        carousel10()
    })
})

const slideBtns10 = document.querySelectorAll('.npbtn10')

slideBtns10.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if ( styles.contains("next-slide")){
            count++
            if (count<10){
                singleSlider10.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider10.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        else if ( styles.contains("prev-slide")){
            count--
            if (count<10){
                singleSlider10.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-00${count}.jpg" alt="slider"></div>`
            }else{
                singleSlider10.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/comforter/ME-C-0${count}.jpg" alt="slider"></div>`
            }
        }
        carousel10()
    })
})

function carousel10() {
    if (count < 11) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (count > 1) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
}
