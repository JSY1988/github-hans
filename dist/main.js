/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setPageInfo = setPageInfo;\n/**\n * 获取当前页面的页面信息，站点，唯一页面名\n */\nfunction getPage() {\n  // 站点，如 gist, developer, help 等，默认主站是 github\n  var site = location.host.replace(/\\.?github\\.com$/, '') || 'github'; // 站点\n  var pathname = location.pathname; // 当前路径\n  var isLogin = localStorage['logged-in'] === 'true'; // 是否登录\n\n  // 用于确定 个人首页，组织首页，仓库页 然后做别买\n  var analyticsLocation = (document.getElementsByName('analytics-location')[0] || 0).content || '';\n  var isProfile = analyticsLocation === '/<user-name>'; // 个人首页\n  var isOrganization = analyticsLocation === '/<org-login>'; // 组织首页\n  var isRepository = analyticsLocation.indexOf('/<user-name>/<repo-name>') > -1; // 仓库页\n\n  //   console.log({\n  //     site,\n  //     pathname,\n  //     isLogin,\n  //     isProfile,\n  //     isOrganization,\n  //     isRepository,\n  //   });\n\n  var page = pathname;\n\n  if (pathname === '/') {\n    // 首页 别名\n    page = isLogin ? 'dashboard' : pathname;\n  } else if (isProfile) {\n    // 个人主页 别名\n    page = 'profile';\n  } else if (isOrganization) {\n    // 组织主页 别名\n    page = 'organizations';\n  } else if (isRepository) {\n    // 仓库页 别名\n    page = analyticsLocation.replace('/<user-name>/<repo-name>', 'repository');\n  }\n\n  // console.log({\n  //   site,\n  //   page,\n  //   pathname,\n  //   isLogin,\n  //   isProfile,\n  //   isOrganization,\n  //   isRepository,\n  // });\n\n  return {\n    site: site,\n    page: page\n  };\n}\n\n/**\n * 设置页面信息\n */\nfunction setPageInfo() {\n  // 获取翻译语言 (方便扩展其他语言包)\n  if (localStorage._GITHUB_LANG_) {\n    window._GITHUB_LANG_ = localStorage._GITHUB_LANG_;\n  } else {\n    window._GITHUB_LANG_ = 'zh_CN'; // 默认中文\n  }\n\n  // 页面信息\n  var pageInfo = getPage();\n\n  console.log('pageInfo:', pageInfo);\n\n  // 语言包对象\n  window._GITHUB_SITE_ = _GITHUB_LANGS_[_GITHUB_LANG_][pageInfo.site];\n  _GITHUB_SITE_.pageInfo = pageInfo;\n}\n\n// 导出\nexports.default = getPage;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi9nZXRQYWdlLmpzPzRhYjciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDojrflj5blvZPliY3pobXpnaLnmoTpobXpnaLkv6Hmga/vvIznq5nngrnvvIzllK/kuIDpobXpnaLlkI1cbiAqL1xuZnVuY3Rpb24gZ2V0UGFnZSgpIHtcbiAgLy8g56uZ54K577yM5aaCIGdpc3QsIGRldmVsb3BlciwgaGVscCDnrYnvvIzpu5jorqTkuLvnq5nmmK8gZ2l0aHViXG4gIGNvbnN0IHNpdGUgPSBsb2NhdGlvbi5ob3N0LnJlcGxhY2UoL1xcLj9naXRodWJcXC5jb20kLywgJycpIHx8ICdnaXRodWInOyAvLyDnq5nngrlcbiAgY29uc3QgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTsgLy8g5b2T5YmN6Lev5b6EXG4gIGNvbnN0IGlzTG9naW4gPSBsb2NhbFN0b3JhZ2VbJ2xvZ2dlZC1pbiddID09PSAndHJ1ZSc7IC8vIOaYr+WQpueZu+W9lVxuXG4gIC8vIOeUqOS6juehruWumiDkuKrkurrpppbpobXvvIznu4Tnu4fpppbpobXvvIzku5PlupPpobUg54S25ZCO5YGa5Yir5LmwXG4gIGNvbnN0IGFuYWx5dGljc0xvY2F0aW9uID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdhbmFseXRpY3MtbG9jYXRpb24nKVswXSB8fCAwKS5jb250ZW50IHx8ICcnO1xuICBjb25zdCBpc1Byb2ZpbGUgPSBhbmFseXRpY3NMb2NhdGlvbiA9PT0gJy88dXNlci1uYW1lPic7IC8vIOS4quS6uummlumhtVxuICBjb25zdCBpc09yZ2FuaXphdGlvbiA9IGFuYWx5dGljc0xvY2F0aW9uID09PSAnLzxvcmctbG9naW4+JzsgLy8g57uE57uH6aaW6aG1XG4gIGNvbnN0IGlzUmVwb3NpdG9yeSA9IGFuYWx5dGljc0xvY2F0aW9uLmluZGV4T2YoJy88dXNlci1uYW1lPi88cmVwby1uYW1lPicpID4gLTE7IC8vIOS7k+W6k+mhtVxuXG4vLyAgIGNvbnNvbGUubG9nKHtcbi8vICAgICBzaXRlLFxuLy8gICAgIHBhdGhuYW1lLFxuLy8gICAgIGlzTG9naW4sXG4vLyAgICAgaXNQcm9maWxlLFxuLy8gICAgIGlzT3JnYW5pemF0aW9uLFxuLy8gICAgIGlzUmVwb3NpdG9yeSxcbi8vICAgfSk7XG5cbiAgbGV0IHBhZ2UgPSBwYXRobmFtZTtcblxuICBpZiAocGF0aG5hbWUgPT09ICcvJykgeyAvLyDpppbpobUg5Yir5ZCNXG4gICAgcGFnZSA9IGlzTG9naW4gPyAnZGFzaGJvYXJkJyA6IHBhdGhuYW1lO1xuICB9IGVsc2UgaWYgKGlzUHJvZmlsZSkgeyAvLyDkuKrkurrkuLvpobUg5Yir5ZCNXG4gICAgcGFnZSA9ICdwcm9maWxlJztcbiAgfSBlbHNlIGlmIChpc09yZ2FuaXphdGlvbikgeyAvLyDnu4Tnu4fkuLvpobUg5Yir5ZCNXG4gICAgcGFnZSA9ICdvcmdhbml6YXRpb25zJztcbiAgfSBlbHNlIGlmIChpc1JlcG9zaXRvcnkpIHsgLy8g5LuT5bqT6aG1IOWIq+WQjVxuICAgIHBhZ2UgPSBhbmFseXRpY3NMb2NhdGlvbi5yZXBsYWNlKCcvPHVzZXItbmFtZT4vPHJlcG8tbmFtZT4nLCAncmVwb3NpdG9yeScpO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coe1xuICAvLyAgIHNpdGUsXG4gIC8vICAgcGFnZSxcbiAgLy8gICBwYXRobmFtZSxcbiAgLy8gICBpc0xvZ2luLFxuICAvLyAgIGlzUHJvZmlsZSxcbiAgLy8gICBpc09yZ2FuaXphdGlvbixcbiAgLy8gICBpc1JlcG9zaXRvcnksXG4gIC8vIH0pO1xuXG4gIHJldHVybiB7XG4gICAgc2l0ZSxcbiAgICBwYWdlLFxuICB9O1xufVxuXG4vKipcbiAqIOiuvue9rumhtemdouS/oeaBr1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UGFnZUluZm8oKSB7XG4gIC8vIOiOt+WPlue/u+ivkeivreiogCAo5pa55L6/5omp5bGV5YW25LuW6K+t6KiA5YyFKVxuICBpZiAobG9jYWxTdG9yYWdlLl9HSVRIVUJfTEFOR18pIHtcbiAgICB3aW5kb3cuX0dJVEhVQl9MQU5HXyA9IGxvY2FsU3RvcmFnZS5fR0lUSFVCX0xBTkdfO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5fR0lUSFVCX0xBTkdfID0gJ3poX0NOJzsgLy8g6buY6K6k5Lit5paHXG4gIH1cblxuICAvLyDpobXpnaLkv6Hmga9cbiAgY29uc3QgcGFnZUluZm8gPSBnZXRQYWdlKCk7XG5cbiAgY29uc29sZS5sb2coJ3BhZ2VJbmZvOicsIHBhZ2VJbmZvKTtcblxuICAvLyDor63oqIDljIXlr7nosaFcbiAgd2luZG93Ll9HSVRIVUJfU0lURV8gPSBfR0lUSFVCX0xBTkdTX1tfR0lUSFVCX0xBTkdfXVtwYWdlSW5mby5zaXRlXTtcbiAgX0dJVEhVQl9TSVRFXy5wYWdlSW5mbyA9IHBhZ2VJbmZvO1xufVxuXG4vLyDlr7zlh7pcbmV4cG9ydCBkZWZhdWx0IGdldFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4vZ2V0UGFnZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUF1REE7QUF2REE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * 时间节点翻译\n */\nfunction timeElement() {\n  if (!window.RelativeTimeElement) {\n    // 防止报错\n    return false;\n  }\n\n  var RelativeTimeElement$getFormattedDate = window.RelativeTimeElement.prototype.getFormattedDate;\n  var TimeAgoElement$getFormattedDate = window.TimeAgoElement.prototype.getFormattedDate;\n  // const LocalTimeElement$getFormattedDate = window.LocalTimeElement.prototype.getFormattedDate;\n\n  var RelativeTime = function RelativeTime(str, el) {\n    // 相对时间解析\n    if (/^on ([\\w ]+)$/.test(str)) {\n      return '\\u4E8E ' + el.title.replace(/ .+$/, '');\n    }\n\n    // 使用字典公共翻译的第二个正则翻译相对时间\n    var timeAgo = window._GITHUB_LANGS_[window._GITHUB_LANG_].github.public.regexp[1];\n    return str.replace(timeAgo[0], timeAgo[1]);\n  };\n\n  window.RelativeTimeElement.prototype.getFormattedDate = function getFormattedDate() {\n    var str = RelativeTimeElement$getFormattedDate.call(this);\n    return RelativeTime(str, this);\n  };\n\n  window.TimeAgoElement.prototype.getFormattedDate = function getFormattedDate() {\n    var str = TimeAgoElement$getFormattedDate.call(this);\n    return RelativeTime(str, this);\n  };\n\n  window.LocalTimeElement.prototype.getFormattedDate = function getFormattedDate() {\n    return this.title.replace(/ .+$/, '');\n  };\n\n  // 遍历 time 元素进行翻译\n  // 2016-04-16 github 改版，不再用 time 标签了。\n  var times = document.querySelectorAll('time, relative-time, time-ago, local-time');\n  Array.prototype.forEach.call(times, function (el) {\n    if (el.getFormattedDate) {\n      // 跳过未注册的 time 元素\n      el.textContent = el.getFormattedDate();\n    }\n  });\n\n  return true;\n}\n\n// 导出\nexports.default = timeElement;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi90aW1lRWxlbWVudC5qcz83ZjkxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5pe26Ze06IqC54K557+76K+RXG4gKi9cbmZ1bmN0aW9uIHRpbWVFbGVtZW50KCkge1xuICBpZiAoIXdpbmRvdy5SZWxhdGl2ZVRpbWVFbGVtZW50KSB7IC8vIOmYsuatouaKpemUmVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IFJlbGF0aXZlVGltZUVsZW1lbnQkZ2V0Rm9ybWF0dGVkRGF0ZSA9IHdpbmRvdy5SZWxhdGl2ZVRpbWVFbGVtZW50LnByb3RvdHlwZS5nZXRGb3JtYXR0ZWREYXRlO1xuICBjb25zdCBUaW1lQWdvRWxlbWVudCRnZXRGb3JtYXR0ZWREYXRlID0gd2luZG93LlRpbWVBZ29FbGVtZW50LnByb3RvdHlwZS5nZXRGb3JtYXR0ZWREYXRlO1xuICAvLyBjb25zdCBMb2NhbFRpbWVFbGVtZW50JGdldEZvcm1hdHRlZERhdGUgPSB3aW5kb3cuTG9jYWxUaW1lRWxlbWVudC5wcm90b3R5cGUuZ2V0Rm9ybWF0dGVkRGF0ZTtcblxuICBjb25zdCBSZWxhdGl2ZVRpbWUgPSBmdW5jdGlvbiBSZWxhdGl2ZVRpbWUoc3RyLCBlbCkgeyAvLyDnm7jlr7nml7bpl7Top6PmnpBcbiAgICBpZiAoL15vbiAoW1xcdyBdKykkLy50ZXN0KHN0cikpIHtcbiAgICAgIHJldHVybiBg5LqOICR7ZWwudGl0bGUucmVwbGFjZSgvIC4rJC8sICcnKX1gO1xuICAgIH1cblxuICAgIC8vIOS9v+eUqOWtl+WFuOWFrOWFsee/u+ivkeeahOesrOS6jOS4quato+WImee/u+ivkeebuOWvueaXtumXtFxuICAgIGNvbnN0IHRpbWVBZ28gPSB3aW5kb3cuX0dJVEhVQl9MQU5HU19bd2luZG93Ll9HSVRIVUJfTEFOR19dLmdpdGh1Yi5wdWJsaWMucmVnZXhwWzFdO1xuICAgIHJldHVybiBzdHIucmVwbGFjZSh0aW1lQWdvWzBdLCB0aW1lQWdvWzFdKTtcbiAgfTtcblxuICB3aW5kb3cuUmVsYXRpdmVUaW1lRWxlbWVudC5wcm90b3R5cGUuZ2V0Rm9ybWF0dGVkRGF0ZSA9IGZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGUoKSB7XG4gICAgY29uc3Qgc3RyID0gUmVsYXRpdmVUaW1lRWxlbWVudCRnZXRGb3JtYXR0ZWREYXRlLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIFJlbGF0aXZlVGltZShzdHIsIHRoaXMpO1xuICB9O1xuXG4gIHdpbmRvdy5UaW1lQWdvRWxlbWVudC5wcm90b3R5cGUuZ2V0Rm9ybWF0dGVkRGF0ZSA9IGZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGUoKSB7XG4gICAgY29uc3Qgc3RyID0gVGltZUFnb0VsZW1lbnQkZ2V0Rm9ybWF0dGVkRGF0ZS5jYWxsKHRoaXMpO1xuICAgIHJldHVybiBSZWxhdGl2ZVRpbWUoc3RyLCB0aGlzKTtcbiAgfTtcblxuICB3aW5kb3cuTG9jYWxUaW1lRWxlbWVudC5wcm90b3R5cGUuZ2V0Rm9ybWF0dGVkRGF0ZSA9IGZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUucmVwbGFjZSgvIC4rJC8sICcnKTtcbiAgfTtcblxuICAvLyDpgY3ljoYgdGltZSDlhYPntKDov5vooYznv7vor5FcbiAgLy8gMjAxNi0wNC0xNiBnaXRodWIg5pS554mI77yM5LiN5YaN55SoIHRpbWUg5qCH562+5LqG44CCXG4gIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGltZSwgcmVsYXRpdmUtdGltZSwgdGltZS1hZ28sIGxvY2FsLXRpbWUnKTtcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aW1lcywgKGVsKSA9PiB7XG4gICAgaWYgKGVsLmdldEZvcm1hdHRlZERhdGUpIHsgLy8g6Lez6L+H5pyq5rOo5YaM55qEIHRpbWUg5YWD57SgXG4gICAgICBlbC50ZXh0Q29udGVudCA9IGVsLmdldEZvcm1hdHRlZERhdGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyDlr7zlh7pcbmV4cG9ydCBkZWZhdWx0IHRpbWVFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9tYWluL3RpbWVFbGVtZW50LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * GitHub 模块系统调用方法\n *\n * @param {Array} deps 依赖模块数组\n * @param {Function} cb 回调方法\n * @param {String} path 模块名路径\n */\nfunction use(deps, cb, path) {\n  var iCount = 0;\n  var maxTimes = 20;\n\n  setTimeout(function callee() {\n    if (!window.define) {\n      if (++iCount >= maxTimes) {\n        return false;\n      }\n      return setTimeout(callee, 99);\n    }\n    var name = path || \"github/hans-hook-\" + Date.now().toString(16);\n    window.define(name, deps, cb);\n    window.ghImport(name).catch(function (e) {\n      return setTimeout(function () {\n        throw e;\n      });\n    });\n    return false;\n  }, 99);\n}\n\n// 导出\nexports.default = use;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi91c2UuanM/OTU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdpdEh1YiDmqKHlnZfns7vnu5/osIPnlKjmlrnms5VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBkZXBzIOS+nei1luaooeWdl+aVsOe7hFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2Ig5Zue6LCD5pa55rOVXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCDmqKHlnZflkI3ot6/lvoRcbiAqL1xuZnVuY3Rpb24gdXNlKGRlcHMsIGNiLCBwYXRoKSB7XG4gIGxldCBpQ291bnQgPSAwO1xuICBjb25zdCBtYXhUaW1lcyA9IDIwO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gY2FsbGVlKCkge1xuICAgIGlmICghd2luZG93LmRlZmluZSkge1xuICAgICAgaWYgKCsraUNvdW50ID49IG1heFRpbWVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxlZSwgOTkpO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gcGF0aCB8fCBgZ2l0aHViL2hhbnMtaG9vay0ke0RhdGUubm93KCkudG9TdHJpbmcoMTYpfWA7XG4gICAgd2luZG93LmRlZmluZShuYW1lLCBkZXBzLCBjYik7XG4gICAgd2luZG93LmdoSW1wb3J0KG5hbWUpLmNhdGNoKGUgPT4gc2V0VGltZW91dCgoKSA9PiB7IHRocm93IGU7IH0pKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sIDk5KTtcbn1cblxuLy8g5a+85Ye6XG5leHBvcnQgZGVmYXVsdCB1c2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4vdXNlLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _transElement = __webpack_require__(19);\n\nvar _transElement2 = _interopRequireDefault(_transElement);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reIgnore = window._GITHUB_LANGS_.config.reIgnore;\n\n/**\n * 遍历节点\n *\n * @param {Element} node 节点\n */\nfunction walk(node) {\n  var nodes = node.childNodes;\n\n  for (var i = 0, len = nodes.length; i < len; i++) {\n    var el = nodes[i];\n    // todo 1. 修复多属性翻译问题; 2. 添加事件翻译, 如论预览信息;\n\n    if (el.nodeType === Node.ELEMENT_NODE) {\n      // 元素节点处理\n      // 元素节点属性翻译\n      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {\n        // 输入框 按钮 文本域\n        if (el.type === 'button' || el.type === 'submit') {\n          (0, _transElement2.default)(el, 'value');\n        } else {\n          (0, _transElement2.default)(el, 'placeholder');\n        }\n      } else if (el.hasAttribute('aria-label')) {\n        // 带提示的元素，类似 tooltip 效果的\n        (0, _transElement2.default)(el, 'aria-label', true);\n\n        if (el.hasAttribute('data-copied-hint')) {\n          // 复制成功提示\n          (0, _transElement2.default)(el.dataset, 'copiedHint');\n        }\n      } else if (el.tagName === 'OPTGROUP') {\n        // 翻译 <optgroup> 的 label 属性\n        (0, _transElement2.default)(el, 'label');\n      }\n\n      if (el.hasAttribute('data-disable-with')) {\n        // 按钮等待提示\n        (0, _transElement2.default)(el.dataset, 'disableWith');\n      }\n\n      // 跳过 readme, 文件列表, 代码显示\n      if (el.id !== 'readme' && !reIgnore.test(el.className)) {\n        walk(el); // 遍历子节点\n      }\n    } else if (el.nodeType === Node.TEXT_NODE) {\n      // 文本节点翻译\n      (0, _transElement2.default)(el, 'data');\n    }\n  }\n}\n\n// 导出\nexports.default = walk;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi93YWxrLmpzPzlkNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zRWxlbWVudCBmcm9tICcuL3RyYW5zRWxlbWVudCc7XG5cbmNvbnN0IHJlSWdub3JlID0gd2luZG93Ll9HSVRIVUJfTEFOR1NfLmNvbmZpZy5yZUlnbm9yZTtcblxuLyoqXG4gKiDpgY3ljoboioLngrlcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUg6IqC54K5XG4gKi9cbmZ1bmN0aW9uIHdhbGsobm9kZSkge1xuICBjb25zdCBub2RlcyA9IG5vZGUuY2hpbGROb2RlcztcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IG5vZGVzW2ldO1xuICAgIC8vIHRvZG8gMS4g5L+u5aSN5aSa5bGe5oCn57+76K+R6Zeu6aKYOyAyLiDmt7vliqDkuovku7bnv7vor5EsIOWmguiuuumihOiniOS/oeaBrztcblxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHsgLy8g5YWD57Sg6IqC54K55aSE55CGXG4gICAgICAvLyDlhYPntKDoioLngrnlsZ7mgKfnv7vor5FcbiAgICAgIGlmIChlbC50YWdOYW1lID09PSAnSU5QVVQnIHx8IGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHsgLy8g6L6T5YWl5qGGIOaMiemSriDmlofmnKzln59cbiAgICAgICAgaWYgKGVsLnR5cGUgPT09ICdidXR0b24nIHx8IGVsLnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgdHJhbnNFbGVtZW50KGVsLCAndmFsdWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmFuc0VsZW1lbnQoZWwsICdwbGFjZWhvbGRlcicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7IC8vIOW4puaPkOekuueahOWFg+e0oO+8jOexu+S8vCB0b29sdGlwIOaViOaenOeahFxuICAgICAgICB0cmFuc0VsZW1lbnQoZWwsICdhcmlhLWxhYmVsJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1jb3BpZWQtaGludCcpKSB7IC8vIOWkjeWItuaIkOWKn+aPkOekulxuICAgICAgICAgIHRyYW5zRWxlbWVudChlbC5kYXRhc2V0LCAnY29waWVkSGludCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUgPT09ICdPUFRHUk9VUCcpIHsgLy8g57+76K+RIDxvcHRncm91cD4g55qEIGxhYmVsIOWxnuaAp1xuICAgICAgICB0cmFuc0VsZW1lbnQoZWwsICdsYWJlbCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWRpc2FibGUtd2l0aCcpKSB7IC8vIOaMiemSruetieW+heaPkOekulxuICAgICAgICB0cmFuc0VsZW1lbnQoZWwuZGF0YXNldCwgJ2Rpc2FibGVXaXRoJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIOi3s+i/hyByZWFkbWUsIOaWh+S7tuWIl+ihqCwg5Luj56CB5pi+56S6XG4gICAgICBpZiAoZWwuaWQgIT09ICdyZWFkbWUnICYmICFyZUlnbm9yZS50ZXN0KGVsLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgd2FsayhlbCk7IC8vIOmBjeWOhuWtkOiKgueCuVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWwubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7IC8vIOaWh+acrOiKgueCuee/u+ivkVxuICAgICAgdHJhbnNFbGVtZW50KGVsLCAnZGF0YScpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDlr7zlh7pcbmV4cG9ydCBkZWZhdWx0IHdhbGs7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4vd2Fsay5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _use = __webpack_require__(3);\n\nvar _use2 = _interopRequireDefault(_use);\n\nvar _walk = __webpack_require__(4);\n\nvar _walk2 = _interopRequireDefault(_walk);\n\nvar _timeElement = __webpack_require__(2);\n\nvar _timeElement2 = _interopRequireDefault(_timeElement);\n\nvar _getPage = __webpack_require__(1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 时间节点翻译\n\n/**\n * 翻译页面\n */\n// 遍历节点\nfunction trans() {\n  setTimeout(function () {\n    (0, _getPage.setPageInfo)(); // 设置页面信息\n    (0, _timeElement2.default)(); // 时间节点翻译\n    (0, _walk2.default)(document.body); // 遍历文档\n  }, 99);\n} // 时间节点翻译\n// 调用 github 模块\n\n\ntrans(); // 立即翻译\n\n(0, _use2.default)(['../jquery'], function ($) {\n  // ajax 请求完成后重新翻译\n  $(document).ajaxSuccess(trans);\n\n  // https://github.com/github/include-fragment-element\n  // 异步元素加载完后执行\n  $('include-fragment').on('loadend', trans);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL21haW4vaW5kZXguanM/N2IxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlIGZyb20gJy4vdXNlJzsgLy8g6LCD55SoIGdpdGh1YiDmqKHlnZdcbmltcG9ydCB3YWxrIGZyb20gJy4vd2Fsayc7IC8vIOmBjeWOhuiKgueCuVxuaW1wb3J0IHRpbWVFbGVtZW50IGZyb20gJy4vdGltZUVsZW1lbnQnOyAvLyDml7bpl7ToioLngrnnv7vor5FcbmltcG9ydCB7IHNldFBhZ2VJbmZvIH0gZnJvbSAnLi9nZXRQYWdlJzsgLy8g5pe26Ze06IqC54K557+76K+RXG5cbi8qKlxuICog57+76K+R6aG16Z2iXG4gKi9cbmZ1bmN0aW9uIHRyYW5zKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRQYWdlSW5mbygpOyAvLyDorr7nva7pobXpnaLkv6Hmga9cbiAgICB0aW1lRWxlbWVudCgpOyAvLyDml7bpl7ToioLngrnnv7vor5FcbiAgICB3YWxrKGRvY3VtZW50LmJvZHkpOyAvLyDpgY3ljobmlofmoaNcbiAgfSwgOTkpO1xufVxuXG50cmFucygpOyAvLyDnq4vljbPnv7vor5FcblxudXNlKFsnLi4vanF1ZXJ5J10sICgkKSA9PiB7IC8vIGFqYXgg6K+35rGC5a6M5oiQ5ZCO6YeN5paw57+76K+RXG4gICQoZG9jdW1lbnQpLmFqYXhTdWNjZXNzKHRyYW5zKTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2luY2x1ZGUtZnJhZ21lbnQtZWxlbWVudFxuICAvLyDlvILmraXlhYPntKDliqDovb3lrozlkI7miafooYxcbiAgJCgnaW5jbHVkZS1mcmFnbWVudCcpLm9uKCdsb2FkZW5kJywgdHJhbnMpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4vaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBREE7QUFDQTtBQUNBOzs7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _translate = __webpack_require__(20);\n\nvar _translate2 = _interopRequireDefault(_translate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * 翻译节点对应属性内容\n *\n * @param {object} el 对象\n * @param {string} field 属性字段\n * @param {boolean} isAttr 是否是 attr 属性\n *\n * @returns {boolean}\n */\nfunction transElement(el, field, isAttr) {\n  var transText = false; // 翻译后的文本\n\n  if (isAttr === undefined) {\n    // 非属性翻译\n    transText = (0, _translate2.default)(el[field]);\n  } else {\n    transText = (0, _translate2.default)(el.getAttribute(field));\n  }\n\n  if (transText === false) {\n    // 无翻译则退出\n    return false;\n  }\n\n  // 替换翻译后的内容\n  if (isAttr === undefined) {\n    el[field] = transText;\n  } else {\n    el.setAttribute(field, transText);\n  }\n\n  return true;\n}\n\n// 导出\nexports.default = transElement;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL21haW4vdHJhbnNFbGVtZW50LmpzP2QwMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0ZSc7XG5cbi8qKlxuICog57+76K+R6IqC54K55a+55bqU5bGe5oCn5YaF5a65XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVsIOWvueixoVxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIOWxnuaAp+Wtl+autVxuICogQHBhcmFtIHtib29sZWFufSBpc0F0dHIg5piv5ZCm5pivIGF0dHIg5bGe5oCnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRyYW5zRWxlbWVudChlbCwgZmllbGQsIGlzQXR0cikge1xuICBsZXQgdHJhbnNUZXh0ID0gZmFsc2U7IC8vIOe/u+ivkeWQjueahOaWh+acrFxuXG4gIGlmIChpc0F0dHIgPT09IHVuZGVmaW5lZCkgeyAvLyDpnZ7lsZ7mgKfnv7vor5FcbiAgICB0cmFuc1RleHQgPSB0cmFuc2xhdGUoZWxbZmllbGRdKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc1RleHQgPSB0cmFuc2xhdGUoZWwuZ2V0QXR0cmlidXRlKGZpZWxkKSk7XG4gIH1cblxuICBpZiAodHJhbnNUZXh0ID09PSBmYWxzZSkgeyAvLyDml6Dnv7vor5HliJnpgIDlh7pcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyDmm7/mjaLnv7vor5HlkI7nmoTlhoXlrrlcbiAgaWYgKGlzQXR0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZWxbZmllbGRdID0gdHJhbnNUZXh0O1xuICB9IGVsc2Uge1xuICAgIGVsLnNldEF0dHJpYnV0ZShmaWVsZCwgdHJhbnNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyDlr7zlh7pcbmV4cG9ydCBkZWZhdWx0IHRyYW5zRWxlbWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFpbi90cmFuc0VsZW1lbnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * 翻译核心\n *\n * @param {string} page 页面信息\n * @param {string} key  待翻译的关键字\n *\n * @returns {string|boolean}\n */\nfunction locale(key, page) {\n  page = page || _GITHUB_SITE_.pageInfo.page;\n\n  // 不存在的翻译内容\n  if (!_GITHUB_SITE_ || !_GITHUB_SITE_[page] || !_GITHUB_SITE_[page].static) {\n    return false;\n  }\n\n  // 静态字典翻译\n  var str = _GITHUB_SITE_[page].static[key];\n\n  if (str) {\n    // 翻译成功\n    return str;\n  }\n\n  // 正则翻译\n  var res = _GITHUB_SITE_[page].regexp;\n\n  if (res) {\n    for (var i = 0, len = res.length; i < len; i++) {\n      str = key.replace(res[i][0], res[i][1]); // 正则替换\n      if (str !== key) {\n        // 翻译成功\n        return str;\n      }\n    }\n  }\n\n  return false; // 没有翻译的条目\n}\n\n/**\n * 翻译入口\n *\n * @param {string} text 待翻译字符串\n *\n * @returns {string|boolean}\n */\nfunction translate(text) {\n  var key = text.trim(); // 去除首尾空格的 key\n  var keyNeat = key.replace(/\\xa0/g, ' ') // 替换 &nbsp; 空格导致的 bug\n  .replace(/\\s{2,}/g, ' '); // 去除多余换行空格等字符，(试验测试阶段，有问题再恢复)\n\n  if (keyNeat === '') {\n    // 内容为空不翻译\n    return false;\n  }\n\n  var str = locale(keyNeat, 'public'); // 公共翻译\n\n  if (str !== false && str !== keyNeat) {\n    // 公共翻译完成\n    str = locale(str, 'public') || str; // 二次公共翻译（为了弥补正则部分翻译的情况）\n    return text.replace(key, str); // 替换原字符，保留空白部分\n  }\n\n  str = locale(keyNeat); // 翻译已知页面\n  if (str === false || str === '') {\n    // 未知内容不翻译\n    return false;\n  }\n\n  str = locale(str, 'public') || str; // 二次公共翻译（为了弥补正则部分翻译的情况）\n  return text.replace(key, str); // 替换原字符，保留空白部分\n}\n\n// 导出\nexports.default = translate;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL21haW4vdHJhbnNsYXRlLmpzP2IwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDnv7vor5HmoLjlv4NcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFnZSDpobXpnaLkv6Hmga9cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgIOW+hee/u+ivkeeahOWFs+mUruWtl1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbG9jYWxlKGtleSwgcGFnZSkge1xuICBwYWdlID0gcGFnZSB8fCBfR0lUSFVCX1NJVEVfLnBhZ2VJbmZvLnBhZ2U7XG5cbiAgLy8g5LiN5a2Y5Zyo55qE57+76K+R5YaF5a65XG4gIGlmICghX0dJVEhVQl9TSVRFXyB8fCAhX0dJVEhVQl9TSVRFX1twYWdlXSB8fCAhX0dJVEhVQl9TSVRFX1twYWdlXS5zdGF0aWMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyDpnZnmgIHlrZflhbjnv7vor5FcbiAgbGV0IHN0ciA9IF9HSVRIVUJfU0lURV9bcGFnZV0uc3RhdGljW2tleV07XG5cbiAgaWYgKHN0cikgeyAvLyDnv7vor5HmiJDlip9cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgLy8g5q2j5YiZ57+76K+RXG4gIGNvbnN0IHJlcyA9IF9HSVRIVUJfU0lURV9bcGFnZV0ucmVnZXhwO1xuXG4gIGlmIChyZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzdHIgPSBrZXkucmVwbGFjZShyZXNbaV1bMF0sIHJlc1tpXVsxXSk7IC8vIOato+WImeabv+aNolxuICAgICAgaWYgKHN0ciAhPT0ga2V5KSB7IC8vIOe/u+ivkeaIkOWKn1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTsgLy8g5rKh5pyJ57+76K+R55qE5p2h55uuXG59XG5cblxuXG5cbi8qKlxuICog57+76K+R5YWl5Y+jXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5b6F57+76K+R5a2X56ym5LiyXG4gKlxuICogQHJldHVybnMge3N0cmluZ3xib29sZWFufVxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUodGV4dCkge1xuICBjb25zdCBrZXkgPSB0ZXh0LnRyaW0oKTsgLy8g5Y676Zmk6aaW5bC+56m65qC855qEIGtleVxuICBjb25zdCBrZXlOZWF0ID0ga2V5XG4gICAgLnJlcGxhY2UoL1xceGEwL2csICcgJykgLy8g5pu/5o2iICZuYnNwOyDnqbrmoLzlr7zoh7TnmoQgYnVnXG4gICAgLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTsgLy8g5Y676Zmk5aSa5L2Z5o2i6KGM56m65qC8562J5a2X56ym77yMKOivlemqjOa1i+ivlemYtuaute+8jOaciemXrumimOWGjeaBouWkjSlcblxuICBpZiAoa2V5TmVhdCA9PT0gJycpIHsgLy8g5YaF5a655Li656m65LiN57+76K+RXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHN0ciA9IGxvY2FsZShrZXlOZWF0LCAncHVibGljJyk7IC8vIOWFrOWFsee/u+ivkVxuXG4gIGlmIChzdHIgIT09IGZhbHNlICYmIHN0ciAhPT0ga2V5TmVhdCkgeyAvLyDlhazlhbHnv7vor5HlrozmiJBcbiAgICBzdHIgPSBsb2NhbGUoc3RyLCAncHVibGljJykgfHwgc3RyOyAgLy8g5LqM5qyh5YWs5YWx57+76K+R77yI5Li65LqG5byl6KGl5q2j5YiZ6YOo5YiG57+76K+R55qE5oOF5Ya177yJXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShrZXksIHN0cik7ICAvLyDmm7/mjaLljp/lrZfnrKbvvIzkv53nlZnnqbrnmb3pg6jliIZcbiAgfVxuXG4gIHN0ciA9IGxvY2FsZShrZXlOZWF0KTsgLy8g57+76K+R5bey55+l6aG16Z2iXG4gIGlmIChzdHIgPT09IGZhbHNlIHx8IHN0ciA9PT0gJycpIHsgLy8g5pyq55+l5YaF5a655LiN57+76K+RXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RyID0gbG9jYWxlKHN0ciwgJ3B1YmxpYycpIHx8IHN0cjsgLy8g5LqM5qyh5YWs5YWx57+76K+R77yI5Li65LqG5byl6KGl5q2j5YiZ6YOo5YiG57+76K+R55qE5oOF5Ya177yJXG4gIHJldHVybiB0ZXh0LnJlcGxhY2Uoa2V5LCBzdHIpOyAvLyDmm7/mjaLljp/lrZfnrKbvvIzkv53nlZnnqbrnmb3pg6jliIZcbn1cblxuLy8g5a+85Ye6XG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4vdHJhbnNsYXRlLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);