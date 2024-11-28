"use strict"

// const span = document.querySelector("[data-text1]");
// const timer = 150

// restartTypewriter(4000);


// /**
//  * place un effet machine à écrire sur l'élément html en argument
//  * @param {HTMLSpanElement} span span avec un attribut data-text
//  * @param {string} text 
//  */
// function typeWriter(span, text){
//     span.textContent = "";
//     let i;
//     for (i = 0; i < text.length; i++) {
//         const lettre = text[i];
//         setTimeout(()=>{
//             span.textContent+=lettre
//         },timer*i)
//     }
//     for (let j=i; j >= 0; j--){
//         i++
//         setTimeout(()=>{
//         span.textContent = span.textContent.slice(0, j)
//         }, timer*i)
//     }
    
// }

// function restartTypewriter(delay){
//     typeWriter(span, span.dataset.text1);
//     setTimeout(()=>{
//         typeWriter(span, span.dataset.text2);
//         setTimeout(()=>{
//             typeWriter(span, span.dataset.text3);
//             setTimeout(()=>{
//                 restartTypewriter();
//             }, timer*span.dataset.text3.length*2+delay)
//         }, timer*span.dataset.text2.length*2+200)
//     }, timer*span.dataset.text1.length*2+200)
// }


