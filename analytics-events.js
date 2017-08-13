$(document).ready(function() {
  var pageStart = new Date()
  console.log('User opened page: ' + pageStart)

  $(window).on('scroll', function(event) {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);
    if (scrollPercentRounded > scrollPercentMax) {
      scrollPercentMax = scrollPercentRounded
    }
  })
    var scrollPercentMax = 0


  var vowelCount = 0
  var letterCount = 0
  $('#theTextArea').on('keypress', function(event) {
    letterCount++
    var letter = event.key
    var vowels = ['a','e','i','o','u']
    for (var i = 0; i < vowels.length; i++) {
      if (vowels[i] === letter) {
        vowelCount++
      }
    }
  })


  $('.heading').on('mouseover', function(event) {
    var headingIn = event.timeStamp
    console.log('Mouse enters heading: ' + headingIn)
  })

  $('.heading').on('mouseleave', function(event) {
    var headingOut = event.timeStamp
    console.log('Mouse leaves heading: ' + headingOut)
  })

  $('.paragraph').on('mouseover', function(event) {
    var paragraphIn = event.timeStamp
    console.log('Mouse enters paragraph: ' + paragraphIn )
  })

  $('.paragraph').on('mouseleave', function(event) {
    var paragraphOut = event.timeStamp
    console.log('Mouse leaves paragraph: ' + paragraphOut)
  })

  $('#theImage').on('mouseover', function(event) {
    var imageIn = event.timeStamp
    console.log('Mouse enters image: ' + imageIn)
  })

  $('#theImage').on('mouseleave', function(event) {
    var imageOut = event.timeStamp
    console.log('Mouse leaves image: ' + imageOut)
  })

  $('.button').on('click', function(event) {
    var link = event.target.href
    console.log('User clicked link for: ' + link)
  })


  $(window).on('beforeunload', function() {
    var pageEnd = new Date()
    console.log('User left page: ' + pageEnd)
    console.log('Number of letters typed: ' + letterCount)
    console.log('Number of vowels typed: ' + vowelCount)
    console.log('Scroll percentage: ' + scrollPercentMax)
  })

})
