const companylogo = document.getElementsByClassName("companylogo");

$(".companylogo").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

// $(".comment").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,

//   arrows: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

$(".comment").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<div id="loloiconleft"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></div>',
  nextArrow:
    '<div id="loloiconright"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></div>'
});

// $(".companylogo").slick({
//   dots: false,
//   infinite: false,
//   speed: 300,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 4,
//   arrows: false,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

// $(window).on("resize orientationchange", function () {
//   $(".companylogo").slick("resize");

// });

// menu

// const menu = document.querySelectorAll(".menu");

// const burger = document.querySelectorAll("#like");

// // burger.onclick = () => {
// //   menu.style.display = "none";
// //   console.log("clicked");
// // };

// burger.addEventListener("click", () => {
//   console.log("clicked");
// });
const menubtn = document.getElementById("hamburger");
const menulist = document.getElementById("menu");

let flag = true;

menubtn.addEventListener("click", () => {
  console.log("clicked");

  menulist.style.display="block"

  if (flag) {
    menulist.style.display = "block";
    flag = false;
  } else {
    menulist.style.display = "none";
    flag = true;
  }

  // while ((flag = true)) {
  //   flag = false;
  //   menulist.style.display = "none";
  // }
  // flag = true;

  // if ((flag = true)) {
  //   flag = false;
  //   menulist.style.display = "none";
  // } else {
  //   flag = true;
  //   menulist.style.display = "block";
  // }
});

// faq

const faqs = document.querySelectorAll(".faqtor");



faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    console.log("clicked");

    faq.classList.toggle("active");

    // if (story.classList.contains("plus")) {
    //   faq.classList.remove("plus");
    //   faq.classList.add("minus");
    // }
    // else{
    //   faq.classList.remove("minus");
    //   faq.classList.add("plus");
    // }

    // let up = true;

    // const icon = document.getElementById('iconplus');
    // if (up) {
    //     icon.classList.remove('fa-plus');
    //     icon.classList.add('fa-minus');
        
    //     up = false;
  
        
    // } else if(up) {
    //     icon.classList.add('fa-plus');
    //     console.log("else work");
    
    //     icon.classList.remove('fa-minus');
    //     up = true;
    // }



    // document.getElementById('iconButton1').addEventListener('click', function() {
    //   const icon = document.getElementById('iconplus');
    //   if (flag) {
    //       icon.classList.remove('fa-plus');
    //       icon.classList.add('fa-minus');
          
    //       flag = false;
    
          
    //   } else {
    //       icon.classList.remove('fa-minus');
    //   console.log("else work");
      
    //       icon.classList.add('fa-plus');
    //       flag = true;
    //   }
    
    // });
       



      
  });
});



// const icon = document.querySelector("plusicon");
// icon.addEventListener("click",()=>{

//   if(icon.classList.contains('fa-solid fa-plus')){

//     icon.classList.remove('fa-solid fa-plus');
//     icon.classList.add('fa-solid fa-minus')

//   }
//   else{
//     icon.classList.add('fa-solid fa-plus');
//     icon.classList.remove('fa-solid fa-minus')
//   }
// })



document.getElementById('iconButton1').addEventListener('click', function() {
  const icon = document.getElementById('iconplus');
  if (flag) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
      
      flag = false;

      
  } else {
      icon.classList.remove('fa-minus');
  console.log("else work");
  
      icon.classList.add('fa-plus');
      flag = true;
  }

});



// buttton section

// const btn = document.getElementById("loadmore");
// let currentvalue = 6;

// let isflag = true;

// btn.onclick = () => {
//   let stories = [...document.querySelectorAll("#stories .stories .storybox")];
//   for (let i = currentvalue; i < currentvalue + 6; i++) {
//     stories[i].style.display = "block";
//   }
//   currentvalue += 6;

//   if (currentvalue === 12) {
//     btn.innerHTML = "Load Less";
//     console.log("inner", currentvalue);

//     isflag = false;
//     console.log(isflag);
//   }

//   if (isflag == false) {
//     let stories = [...document.querySelectorAll("#stories .stories .storybox")];
//     for (let i = currentvalue; i > currentvalue - 6; i--) {
//       stories[i].style.display = "none";
//     }
//     currentvalue -= 6;

//     isflag = true;
//   }
// };

// console.log("outer", currentvalue);

// another load more button

const btn = document.getElementById("loadmore");

let currentvalue = 6;

let isflag = true;

btn.onclick = () => {
  let stories = [...document.querySelectorAll("#stories .stories .storybox")];
  // for (let i = currentvalue; i < currentvalue + 6; i++) {
  //   stories[i].style.display = "block";
  // }
  // currentvalue += 6;

  // if (currentvalue === 12) {
  //   btn.innerHTML = "Load Less";
  //   console.log("inner", currentvalue);

  //   isflag = false;
  //   console.log(isflag);
  // }

  // if (isflag == false) {
  //   let stories = [...document.querySelectorAll("#stories .stories .storybox")];
  //   for (let i = currentvalue; i > currentvalue - 6; i--) {
  //     stories[i].style.display = "none";
  //   }
  //   currentvalue -= 6;

  //   isflag = true;
  // }

  console.log("clicked");

  btn["data-status"] = "visible";

  const status = btn.dataset.storyStatus;

  console.log(btn.dataset.storyStatus);

  if (status === "hidden") {
    btn.dataset.storyStatus = "visible";
    btn.innerHTML = "Load Less";
    stories.forEach((story) => {
      if (story.classList.contains("hidden")) {
        story.classList.remove("hidden");
      }
    });
  } else if (status === "visible") {
    btn.dataset.storyStatus = "hidden";
    btn.innerHTML = "Load More";
    stories.forEach((story, index) => {
      if (index >= 6) {
        story.classList.add("hidden");
      }
    });
  }

  // if(status)
};

console.log("outer", currentvalue);
