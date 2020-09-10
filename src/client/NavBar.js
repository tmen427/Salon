import React, {useState, useEffect} from 'react';
import { Navbar, Nav} from 'react-bootstrap';


import belle from "./images/belle.jpeg";

import $ from "jquery";


function NavBar () {
  const [users, setUsers] = useState("");

  useEffect(
      ()=> {
             
              const fetchData = async () => {
                  try {

                  const res = await fetch("/api/users");
         
                    const data = await res.json();
                    setUsers(data);
                    } 
                    catch (err) {
             
                   console.log(err)
                  }
                };
                fetchData();

             




                var scrolltoOffset = $('#header').outerHeight() - 1;
                $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
                  if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
                    var target = $(this.hash);
                    if (target.length) {
                      e.preventDefault();
              
                      var scrollto = target.offset().top - scrolltoOffset;
              
                      if ($(this).attr("href") == '#header') {
                        scrollto = 0;
                      }
              
                      $('html, body').animate({
                        scrollTop: scrollto
                      }, 1500, 'easeInOutExpo');
              
                      if ($(this).parents('.nav-menu, .mobile-nav').length) {
                        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                        $(this).closest('li').addClass('active');
                      }
              
                      if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('.mobile-nav-overly').fadeOut();
                      }
                      return false;
                    }
                  }
                });




                var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  
      

     
                if ($('.nav-menu').length) {
                  var $mobile_nav = $('.nav-menu').clone().prop({
                    class: 'mobile-nav d-lg-none'
                  });
                  $('body').append($mobile_nav);
                  $('.mobile-nav').prepend('<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>');
                  $('#header').append('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
                  $('body').append('<div class="mobile-nav-overly"></div>');
              
                  $(document).on('click', '.mobile-nav-toggle', function(e) {
                    $('body').toggleClass('mobile-nav-active');
                    $('.mobile-nav-overly').toggle();
                  });
              
                  $(document).on('click', '.mobile-nav-close', function(e) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-overly').fadeOut();
                  });
              
                  $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
                    e.preventDefault();
                    $(this).next().slideToggle(300);
                    $(this).parent().toggleClass('active');
                  });
              
                  $(document).click(function(e) {
                    var container = $(".mobile-nav, .mobile-nav-toggle");
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                      if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                        $('.mobile-nav-overly').fadeOut();
                      }
                    }
                  });
                } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
                  $(".mobile-nav, .mobile-nav-toggle").hide();
                }
         

        




      },  [],




  )






// jwt verify if if req.user form fetch setAuthenticated = true


return (

<div>
 



  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="index.html">La Belle Nail and Salon</a></h1>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="/">HOME</a></li>
          <li><a href="/MakeAppointment">BOOKING</a></li>
          <li><a href="/All">TOTAL CUSTOMER</a></li>
          {users ? null:  <li><a href="/SignUp">SIGN-UP</a></li> }
          {users ?  <li><a href="/SignOut">{users} SIGNOUT</a></li> :
           <li><a href="/Login">{users} LOGIN</a></li>}

        

        </ul>



      </nav>

    </div>
  </header>





  

  </div>


)
}

export default NavBar; 
