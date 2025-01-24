let list = document.querySelector('.sliim .listim'); 
let itemim = document.querySelectorAll('.sliim .listim .imitem'); 
let dots = document.querySelectorAll('.sliim .dots li');
let prev = document.getElementById('prev'); 
let next = document.getElementById('next');

let active = 0;

next.onclick = function () {
    if (active < itemim.length - 1) {
        active += 1;
        reloadsliim();
    }
};

prev.onclick = function () {
    if (active > 0) {
        active -= 1;
        reloadsliim();
    }
};

function reloadsliim() {
    // เลื่อนตำแหน่งของภาพ
    let checkLeft = itemim[active].offsetLeft;
    list.style.transform = `translateX(${-checkLeft}px)`;
    list.style.transition = 'transform 0.5s ease-in-out';

    // ทำให้ภาพที่กำลังแสดงอยู่เด่นขึ้น
    itemim.forEach((item, index) => {
        if (index === active) {
            item.classList.add('active'); // เพิ่มคลาสให้ภาพปัจจุบัน
        } else {
            item.classList.remove('active'); // ลบคลาสจากภาพอื่น
        }
    });

    // อัปเดตจุด (dot) ให้ตรงกับภาพที่แสดง
    dots.forEach((dot, index) => {
        if (index === active) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// เรียกใช้งานครั้งแรกเพื่อให้ภาพแรกเด่น
reloadsliim();

document.addEventListener('DOMContentLoaded', function() {
    let backToTopButton = document.getElementById('backToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    // เลือกทุกองค์ประกอบที่มีคลาส `hidden`, `slide-left`, หรือ `zoom-in`
    const hiddenElements = document.querySelectorAll(".hidden, .slide-left, .zoom-in");
    hiddenElements.forEach((el) => observer.observe(el));
});
const h1Text = "My - experience"; // ข้อความสำหรับ H1
const typingH1 = document.getElementById("typing-h1");

let h1Index = 0;

// พิมพ์ข้อความ H1
function typeH1() {
    if (h1Index < h1Text.length) {
        typingH1.textContent += h1Text[h1Index];
        h1Index++;
        setTimeout(typeH1, 230); // ความเร็วในการพิมพ์ H1
    }
}

// เรียกฟังก์ชัน typeH1 เพื่อเริ่มพิมพ์ข้อความ
typeH1();


// เรียกใช้ฟังก์ชันเมื่อเลื่อนหน้าจอเกิน 350px
window.addEventListener("scroll", () => {
    if (window.scrollY > 200 && !hasStartedTyping) {
        hasStartedTyping = true; // ป้องกันการเรียกฟังก์ชันซ้ำ
        typeH1();
    }
});


function toggerham(x) {
    x.classList.toggle("change");

    let mymenu = document.getElementById('my');
    if (mymenu.classList.contains('menu-active')) {
        mymenu.classList.remove('menu-active');
    } else {
        mymenu.classList.add('menu-active');
    }
}

  
