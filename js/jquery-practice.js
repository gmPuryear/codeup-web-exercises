"use strict";

$(document).ready(function () {

    let originalThirdCard;
   // TODO:
   // Hover over first card, its contents appear in the 3rd card
   //  1. select the element(s) to apply listener
   //  $('main div:first-child').hover(function() {
   //      // 2. get the content from the hovered element
   //      originalThirdCard = $('main div:nth-child(3)').html();
   //      let content = $(this).html();
   //      // 3. set the content of a DIFFERENT element
   //      $('main div:nth-child(3)').html(content);
   //      // Now change it back to the original content
   //  }, function () {
   //      $('main div:nth-child(3)').html(originalThirdCard);
   //  })

    // TODO:
    // When a card is hovered on, change the background the background
    // color. When hovered off, reset to original color.
    // 1. Select element
    // let originalCardOneBcg;
    // $('main div:first-child').hover(function() {
    //     originalCardOneBcg = $(this).css('background-color');
    //     $(this).css('background-color', 'pink');
    // }, function() {
    //     $('main div:first-child').css('background-color', originalCardOneBcg);
    // })

    // TODO:
    // When a user is typing into #user-input, display that
    // text inside #user-output;

    let valueIn = '';
    // 1. get element
    $('#user-input').keypress(function (e) {
        valueIn += (e.key);
        console.log(valueIn);
        $("#user-output").html(valueIn);
    });



})