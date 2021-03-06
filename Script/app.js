/**
 * FileName: app.js
 * 
 * @author Satnam Singh
 * StudentID: 300875942
 * @date August 5, 2016
 * 
 * git hub:https://github.com/Satnam1313/Assignment-3-Client-Side-Web-Development
  website: http://assignment-3-client-side-web-development.azurewebsites.net/
 * @description: This file icontaing the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function() {
    "use strict";



    var xhr;
    // we can use a named function instead of an anonymous function
    // we can use a named function instead of an anonymous function
    function readData() {
        // data loaded                everything is ok
        if ((xhr.readyState === 4) && (xhr.status === 200)) {

            var enteringdata = JSON.parse(xhr.responseText);
            var load = enteringdata.data;

            load.forEach(function(contact) {
                document.getElementById("paragraphOne").innerHTML = enteringdata.data[0].paragraph_about1;
                document.getElementById("paragraphTwo").innerHTML = enteringdata.data[1].Projects_or;
                document.getElementById("paragraphThree").innerHTML = enteringdata.data[2].Projects_game;
                document.getElementById("paragraphFour").innerHTML = enteringdata.data[3].Projects_city;


            }, this);

        }
    }


    function readParagraphs() {
        xhr = new XMLHttpRequest(); // step 1 - create xhr object
        xhr.open("GET", "Script/paragraphs.json", true); // step 2 - open request
        xhr.send(null); // step 3 - send request
        xhr.addEventListener("readystatechange", readData); // step 4
    }
    // app entry function
    function init() {

        readParagraphs();


    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);

})();