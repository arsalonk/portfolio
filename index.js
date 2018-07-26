function showPage() {
  $('.nav-button').click(function () {
    let sectionName = $(this).html();
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
    document.getElementById(sectionName).style.display = 'block';
  });
}

// $(document).ready(function () {
//   showPage();
// });
$(showPage);
