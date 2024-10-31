/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/admin/pageflash-admin.js":
/*!*****************************************!*\
  !*** ./src/js/admin/pageflash-admin.js ***!
  \*****************************************/
/***/ (() => {

eval("\n\n// Silence is golden.\n$(function ($) {\n  /**\r\n   * Tabbable JavaScript codes & Initiate Color Picker\r\n   * PageFlash Settings API\r\n   * This code uses local storage for displaying active tabs.\r\n   * @version 1.0.0\r\n   * @since 1.0.0\r\n   */\n\n  // Initiate Color Picker\n  $('.wp-color-picker-field').wpColorPicker();\n\n  // Switches option sections\n  $('.group').hide();\n  var activeTab = '';\n  if (typeof localStorage !== 'undefined') {\n    activeTab = localStorage.getItem('activetab');\n  }\n  if (activeTab !== '' && $(activeTab).length) {\n    $(activeTab).fadeIn();\n  } else {\n    $('.group:first').fadeIn();\n  }\n  $('.group .collapsed').each(function () {\n    $(this).find('input:checked').parent().parent().parent().nextAll().each(function () {\n      if ($(this).hasClass('last')) {\n        $(this).removeClass('hidden');\n        return false;\n      }\n      $(this).filter('.hidden').removeClass('hidden');\n    });\n  });\n  if (activeTab !== '' && $(activeTab + '-tab').length) {\n    $(activeTab + '-tab').addClass('nav-tab-active');\n  } else {\n    $('.nav-tab-wrapper a:first').addClass('nav-tab-active');\n  }\n  $('.nav-tab-wrapper a').on('click', function (evt) {\n    $('.nav-tab-wrapper a').removeClass('nav-tab-active');\n    $(this).addClass('nav-tab-active').trigger('blur');\n    var clickedGroup = $(this).attr('href');\n    if (typeof localStorage !== 'undefined') {\n      localStorage.setItem('activetab', $(this).attr('href'));\n    }\n    $('.group').hide();\n    $(clickedGroup).fadeIn();\n    evt.preventDefault();\n  });\n  $('.wpsa-browse').on('click', function (event) {\n    event.preventDefault();\n    var self = $(this);\n\n    // Create the media frame.\n    var fileFrame = wp.media.frames.fileFrame = wp.media({\n      title: self.data('uploader_title'),\n      button: {\n        text: self.data('uploader_button_text')\n      },\n      multiple: false\n    });\n    fileFrame.on('select', function () {\n      attachment = fileFrame.state().get('selection').first().toJSON();\n      self.prev('.wpsa-url').val(attachment.url);\n    });\n\n    // Finally, open the modal\n    fileFrame.open();\n  });\n});\n\n//# sourceURL=././src/js/admin/pageflash-admin.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/admin/pageflash-admin.js"]();
/******/ 	
/******/ })()
;