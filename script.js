// HTML/CSS progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");
let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;
let progresshtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);
// JavaScript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");
let javascriptStartValue = 0,
  javascriptEndValue = 80,
  jsspeed = 30;
let progressjs = setInterval(() => {
  javascriptStartValue++;
  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;
  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);
// React progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");
let reactStartValue = 0,
  reactEndValue = 75,
  rjsspeed = 30;
let progressreact = setInterval(() => {
  reactStartValue++;
  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;
  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);
// Node.js progress circular bar 
let nodejsProgress = document.querySelector(".nodejs"),
  nodejsValue = document.querySelector(".nodejs-progress");
let nodejsStartValue = 0,
  nodejsEndValue = 75,
  nodejsspeed = 30;
let progressnodejs = setInterval(() => {
  nodejsStartValue++;
  nodejsValue.textContent = `${nodejsStartValue}%`;
  nodejsProgress.style.background = `conic-gradient(#75b1e3 ${nodejsStartValue * 3.6}deg, #ededed 0deg)`;
  if (nodejsStartValue == nodejsEndValue) {
    clearInterval(progressnodejs);
  }
}, nodejsspeed);
// MongoDB progress circular bar 
let mongodbProgress = document.querySelector(".mongodb"),
  mongodbValue = document.querySelector(".mongodb-progress");
let mongodbStartValue = 0,
  mongodbEndValue = 70,
  mongodbspeed = 30;
let progressmongodb = setInterval(() => {
  mongodbStartValue++;
  mongodbValue.textContent = `${mongodbStartValue}%`;
  mongodbProgress.style.background = `conic-gradient(#4db6c1 ${mongodbStartValue * 3.6}deg, #ededed 0deg)`;
  if (mongodbStartValue == mongodbEndValue) {
    clearInterval(progressmongodb);
  }
}, mongodbspeed);
// Python progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");
let pythonStartValue = 0,
  pythonEndValue = 85,
  pythonspeed = 30;
let progresspython = setInterval(() => {
  pythonStartValue++;
  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#ffb74d ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);
// Git/GitHub progress circular bar 
let gitProgress = document.querySelector(".git"),
  gitValue = document.querySelector(".git-progress");
let gitStartValue = 0,
  gitEndValue = 85,
  gitspeed = 30;
let progressgit = setInterval(() => {
  gitStartValue++;
  gitValue.textContent = `${gitStartValue}%`;
  gitProgress.style.background = `conic-gradient(#f06292 ${gitStartValue * 3.6}deg, #ededed 0deg)`;
  if (gitStartValue == gitEndValue) {
    clearInterval(progressgit);
  }
}, gitspeed);
// AI Tools Integration progress circular bar 
let aiToolsProgress = document.querySelector(".ai-tools"),
  aiToolsValue = document.querySelector(".ai-tools-progress");
let aiToolsStartValue = 0,
  aiToolsEndValue = 70,
  aiToolsspeed = 30;
let progressaiTools = setInterval(() => {
  aiToolsStartValue++;
  aiToolsValue.textContent = `${aiToolsStartValue}%`;
  aiToolsProgress.style.background = `conic-gradient(#64b5f6 ${aiToolsStartValue * 3.6}deg, #ededed 0deg)`;
  if (aiToolsStartValue == aiToolsEndValue) {
    clearInterval(progressaiTools);
  }
}, aiToolsspeed);
// Debugging progress circular bar 
let debuggingProgress = document.querySelector(".debugging"),
  debuggingValue = document.querySelector(".debugging-progress");
let debuggingStartValue = 0,
  debuggingEndValue = 80,
  debuggingspeed = 30;
let progressdebugging = setInterval(() => {
  debuggingStartValue++;
  debuggingValue.textContent = `${debuggingStartValue}%`;
  debuggingProgress.style.background = `conic-gradient(#81c784 ${debuggingStartValue * 3.6}deg, #ededed 0deg)`;
  if (debuggingStartValue == debuggingEndValue) {
    clearInterval(progressdebugging);
  }
}, debuggingspeed);
// Chatbot Development progress circular bar 
let chatbotProgress = document.querySelector(".chatbot"),
  chatbotValue = document.querySelector(".chatbot-progress");
let chatbotStartValue = 0,
  chatbotEndValue = 75,
  chatbotspeed = 30;
let progresschatbot = setInterval(() => {
  chatbotStartValue++;
  chatbotValue.textContent = `${chatbotStartValue}%`;
  chatbotProgress.style.background = `conic-gradient(#ffcc80 ${chatbotStartValue * 3.6}deg, #ededed 0deg)`;
  if (chatbotStartValue == chatbotEndValue) {
    clearInterval(progresschatbot);
  }
}, chatbotspeed);
// Filter using JavaScript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});
// JavaScript for sticky navbar even if you scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});
// Adding functionality to back to top button 
// Get the button
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Typing animation for the home section
const typeWriter = () => {
    const text = "Hello! I Am Aneej Ghimire";
    const element = document.querySelector('.home h2');
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    };

    element.textContent = '';
    type();
};

// Skill progress animation
const animateSkills = () => {
    const skills = {
        'html-css': 90,
        'javascript': 80,
        'reactjs': 75,
        'nodejs': 75,
        'mongodb': 70,
        'python': 85,
        'git': 85,
        'ai-tools': 70,
        'debugging': 80,
        'chatbot': 75
    };

    Object.entries(skills).forEach(([skill, value]) => {
        const progress = document.querySelector(`.${skill}`);
        if (progress) {
            progress.style.setProperty('--progress', `${value * 3.6}deg`);
        }
    });
};

// Parallax effect for the home section
const parallax = () => {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax');
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
};

// Project cards hover effect
const initProjectCards = () => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
};

// Form validation and submission
const initContactForm = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (isValid) {
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });
};

// Back to top button functionality
const initBackToTop = () => {
    const btn = document.getElementById('btn-back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    animateSkills();
    parallax();
    initProjectCards();
    initContactForm();
    initBackToTop();
});