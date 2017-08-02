$(document).ready(function() {


  $(window).on('scroll', function(event) {
    console.log(event)
  })

  $('.heading').on('mouseover', function(event) {
    console.log(event)
  })

  $('.paragraph').on('mouseover', function(event) {
    console.log(event)
  })

  $('#theImage').on('mouseover', function(event) {
    console.log(event)
  })

  $('#theTextArea').on('keypress', function(event) {
    console.log(event)
  })

  $('.button').on('mouseover', function(event) {
    console.log(event)
  })

  $('.button').on('click', function(event) {
    console.log('link clicked',event.target.href)
  })


})
