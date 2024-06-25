document.addEventListener('DOMContentLoaded', () => {
  gsap.set('nav', { y: -150 });

  const digit1 = document.querySelector('.d-1');
  const digit2 = document.querySelector('.d-2');
  const digit3 = document.querySelector('.d-3');

  const spanifyText = (selector) => {
    let element = document.querySelector(selector);

    if (element) {
      let text = element.innerText;
      let splitText = text
        .split('')
        .map((char) => `<span>${char}</span>`)
        .join('');

      element.innerHTML = splitText;
    }
  };

  spanifyText('.intro-text h1');
  spanifyText('.header-c p');

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement('div');
      div.className = 'num';
      div.textContent = j;
      digit3.appendChild(div);
    }
  }

  const resultDigit = document.createElement('div');
  resultDigit.className = 'num';
  resultDigit.textContent = '0';
  digit3.appendChild(resultDigit);

  const animateNumber = (digit, duration, delay = 1) => {
    const numHeight = digit.querySelector('.num').clientHeight;

    const distance = (digit.querySelectorAll('.num').length - 1) * numHeight;

    gsap.to(digit, {
      y: -distance,
      duration: duration,
      delay: delay,
      ease: 'power2.inOut',
    });
  };

  animateNumber(digit3, 4);
  animateNumber(digit2, 5);
  animateNumber(digit1, 1, 4);

  gsap.to('.progress-bar', {
    width: '30%',
    duration: 2,
    delay: 6,
    ease: 'power4.inOut',
  });

  gsap.to('.progress-bar', {
    width: '100%',
    opacity: 0,
    duration: 1.3,
    delay: 8,
    ease: 'power3.inOut',
    onComplete: () => {
      gsap.set('.pre-loader', {
        display: 'none',
      });
    },
  });

  gsap.to('.section-content-imgs > img', {
    clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
    duration: 1,
    delay: 9,
    ease: 'power4.inOut',
    stagger: 0.25,

    onComplete: () => {
      gsap.set('.header-c', {
        opacity: 1,
      });
    },
  });

  gsap.to('.section-content', {
    scale: 1.25,
    duration: 3,
    delay: 9,
    ease: 'power3.inOut',
  });

  gsap.to('nav', {
    y: 0,
    duration: 1,
    delay: 11,
    ease: 'power3.inOut',
  });

  gsap.to('p span', {
    top: '0px',
    stagger: 0.1,
    duration: 1,
    delay: 11,
    ease: 'power4.out',

    onComplete: () => {
      gsap.set('.header-c', {
        opacity: 1,
        color: '#71e6de',
      });

      gsap.to('.section-content-imgs', {
        scale: 0.9,
        duration: 0.5,
        delay: 0.5,
        ease: 'power4.inOut',
      });
    },
  });

  gsap.to('h1 span', {
    top: '0px',
    stagger: 0.1,
    duration: 1,
    delay: 11,
    ease: 'power3.out',
  });
});
