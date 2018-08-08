'use strict';

function enterSite() {
  $('.home-button').click(function () {
    document.getElementById('Home').style.display = 'none';
    const site = document.getElementsByClassName('site');
    for (let i = 0; i < site.length; i++) {
      site[i].style.display = 'block';
    }
  });
}

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

function showHome() {
  $('.nav-home').click(function () {
    const site = document.getElementsByClassName('site');
    for (let i = 0; i < site.length; i++) {
      site[i].style.display = 'none';
    }
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
    document.getElementById('Home').style.display = 'block';
  });
}

function toggleTheme() {
  $('#switch').click(function () {
    if ($('#switch').hasClass('switched')) {
      $('#full-site').removeClass('day')
      $('#full-site').addClass('night')
      $('#sea').removeClass('sea-day');
      $('#sea').addClass('sea-night');
      $('#switch').removeClass('switched');
    }
    else {
      $('#full-site').removeClass('night')
      $('#full-site').addClass('day')
      $('#sea').removeClass('sea-night');
      $('#sea').addClass('sea-day');
      $('#switch').addClass('switched');

    }
  });
}

$(document).ready(function () {
  enterSite();
  showPage();
  showHome();
  toggleTheme();
});

