// const counters = document.querySelector('.counter');
// const speed = 600;

// counters.forEach(counter => {

//   const updateCount = () => {
//   const target = +counter.getAttribute('data-target');
//   const count = +counter.innerText;

//   const inc = target / speed;

//     if (count < target) {
//       counter.innerText = count + inc;
//       setTimeout(updateCount, 1)
//     } else {
//       count.innerText = target;
//     }

//   }
//   updateCount();
// });

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});