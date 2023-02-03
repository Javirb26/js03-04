/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Javier Ballester
      Date: 02/03/2023  

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

function starImages(rating) {
    let imageText = "";
    for (let i = 1; i <= rating; i++) {
        imageText += "<img src = 'star.png' alt = ''>";
    }
    // after the loop ends
    return imageText;
    
    for (let j = 0; j < reviewers.length; j++) {
        let reviewCode = "";
        if (reviewType == "P") {
            return "<table class = 'prime'>";
        } else if (reviewType == "N") {
            return "<table class = 'new'>";
        } else {
            return "<table>";
        }
    
        // First Caption
        reviewCode += "<caption>reviewTitles[i]</caption>";
    
        // Table Row
        reviewCode += "<tr><th>By</th><td>reviewers[i]</td></tr>";
    
        //
        reviewCode += "<tr><th>Review Date</th><td>reviewDates[i]</td></tr>";
    
        //
        reviewCode += "<tr><td colspan='2'>reviews[i]</td></tr>";
    
        //
        reviewCode += "<table>";
    
        //
        getElementsByTagName(article).insertAdjacentHTML("beforeEnd", reviewCode);
    
    }
    
}






