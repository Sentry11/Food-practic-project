/*jshint esversion: 8 */ 

function slider({nextArrow, prevArrow, slide, totalCounter, currentCounter}){
 //Slider


        const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter);

        let sliderIndex = 1;

        showSlider(sliderIndex);

        if (slides.length < 10){
        total.textContent = `0${slides.length}`;
        }else{
        total.textContent = slides.length; 
        }

        function showSlider(n)  {
        if (n > slides.length){
        sliderIndex = 1;
        }

        if (n< 1){
        sliderIndex = slides.length;
        }




        slides.forEach(item => item.style.display = 'none' ); 
        // item.classList.add('hide'); 



        slides[sliderIndex - 1].style.display = 'block';
        //  slides[sliderIndex -1].classList.add('show');

        if(slides.length < 10){
        current.textContent = `0${sliderIndex}`;
        }else {
        current.textContent = sliderIndex;
        }

        }

        function swipeSlide(n){
        showSlider(sliderIndex += n);

        }


        prev.addEventListener('click', () => {
        swipeSlide(-1);
        });

        next.addEventListener('click', () => {
        swipeSlide(1);
        });


}
export default slider;