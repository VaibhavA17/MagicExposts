window.addEventListener('load', function(){
    $(function(){
        $("#nav-placeholder").load("../pulgins/nav.html");
    });
    
    $(function(){
        $("#footer-placeholder").load("../pulgins/footer.html");
    });

    $(function(){
        $("#nav-placeholdermain").load("pulgins2/nav.html");
    });
    
    $(function(){
        $("#footer-placeholdermain").load("pulgins2/footer.html");
    });
})

const scrollBtns = document.querySelectorAll('#smbtn')
const singleSlider = document.querySelector('.single-slider')

scrollBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.dataset.id
        singleSlider.innerHTML = `<div><img class="img-responsive center-block" src="../img/products/pouf/ME-P-${value}.png" alt="slider"></div>`
        count = value
        carousel()
    })
})

const slideBtns = document.querySelectorAll('.npbtn')
const prevBtn = document.querySelector('.prev-slide')
const nextBtn = document.querySelector('.next-slide')
let count = 1

nextBtn.onclick = function () {
    document.querySelector('.scrollmenu').scrollLeft += 195
}
prevBtn.onclick = function () {
    document.querySelector('.scrollmenu').scrollLeft -= 195
}

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
        carousel()
        console.log(count)
    })
})


function carousel() {
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
prevBtn.style.display = "none";