/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("const shopBtn = document.querySelector('.shopping')\nconst cards = document.querySelector('.cards')\nconst elLoader = document.querySelector('.loader')\n\nconst basket = document.querySelector('.basket')\n\nconsole.log(document);\n\n\nlet purchase = 0;\n\n\nfunction shopBtnClick() {\n    location.href = 'about.html'\n}\n\nshopBtn.addEventListener('click', shopBtnClick)\n\n\n\nasync function getData(API) {\n    elLoader.classList.remove('hidden')\n    const res = await fetch(API)\n    const datas = await res.json()\n    elLoader.classList.add('hidden')\n    await datas.forEach((data, i)=> {\n        let shoppingData = `\n        <div class=\"card\">\n        <img src=\"${data.img}\" alt=\"img\">\n        <div class=\"card__title\">\n            <h2>${data.name}</h2>\n            <p>${data.desc}</p>\n            <div class=\"card__footer\">\n                <p class=\"price\">$ ${data.price}</p>\n                <div class=\"card__cound\">\n                    <button class=\"minus-btn\">-</button>\n                    <span>0</span>\n                    <button class=\"plus-btn\">+</button>\n                </div>\n            </div>\n        </div>\n        </div>\n        `\n        cards.innerHTML += shoppingData\n        \n    })\n\n\n}\n\n\n\nasync function getElbtn() {\n    await getData('../json/cards.json')\n    const mBtn = document.querySelectorAll('.minus-btn')\n    const pBtn = document.querySelectorAll('.plus-btn')\n\n    mBtn.forEach((item)=> {\n        item.addEventListener('click', (e)=> {\n            let elCard = e.target.parentElement.parentElement.parentElement.parentElement\n            \n        })\n    })\n}\n\ngetElbtn()\n\n//# sourceURL=webpack://shop/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;