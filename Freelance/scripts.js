document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.toggle');
  const toggleMenu = document.querySelector('.toggle_menu');

  function checkAndSetDisplay() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1010) {
      toggleMenu.style.display = 'none';
      toggle.style.display = '';
    }
  }

  toggle.addEventListener('click', () => {
    console.log('clicked');
    toggleMenu.style.display = toggleMenu.style.display === 'none' ? 'block' : 'none';
    if (toggleMenu.style.display === 'block') {
      toggle.style.display = 'none';
    }
  });

  checkAndSetDisplay();

  window.addEventListener('resize', checkAndSetDisplay);

  console.log(window.innerWidth);
});

document.addEventListener('DOMContentLoaded', function () {
  const parentSliders = document.querySelectorAll('.slider-item');
  const nextButton = document.querySelector('.section5-next-button');
  const prevButton = document.querySelector('.section5-prev-button');
  console.log(nextButton);
  let currentIndex = 0;

  function showSlider(index) {
    parentSliders.forEach((slider, i) => {
      if (i === index) {
        slider.classList.add('active');
      } else {
        slider.classList.remove('active');
      }
    });
  }

  nextButton.addEventListener('click', function () {
    console.log('next clicked');
    currentIndex++;
    if (currentIndex >= parentSliders.length) {
      currentIndex = 0;
    }
    showSlider(currentIndex);
  });
  prevButton.addEventListener('click', function () {
    console.log('prev');
    if (currentIndex === 0) {
      currentIndex = 2; // Перейти на третий слайд с нулевого
    } else {
      currentIndex--;
    }
    showSlider(currentIndex);
  });

  // Показать первый слайдер при загрузке страницы
  showSlider(currentIndex);
});
