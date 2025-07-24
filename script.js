// Smooth scroll for "Apply Now"
document.querySelector('.apply-button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' });
  });
  