(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{715:function(t,s,n){"use strict";n.r(s);var a=n(14),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"缺失数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺失数字"}},[t._v("#")]),t._v(" 缺失数字")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode.com/problems/missing-number/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Missing Number"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/MisterBooo/LeetCodeAnimation/blob/master/notes/LeetCode%E7%AC%AC268%E5%8F%B7%E9%97%AE%E9%A2%98%EF%BC%9A%E7%BC%BA%E5%A4%B1%E6%95%B0%E5%AD%97.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1),s("br"),t._v("\n题目大致要求是：给定数组，每个值是范围 0~n 内的整数，找出那个不在这个数组里面，但是又属于 0~n 范围内的整数"),s("br"),t._v("\n比如"),s("code",[t._v("[0,1,3]")]),t._v("，返回值是 2")]),t._v(" "),s("h2",{attrs:{id:"hint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hint"}},[t._v("#")]),t._v(" hint")]),t._v(" "),s("p",[t._v("假设目标数组为"),s("code",[t._v("arr1")]),t._v("，长度为"),s("code",[t._v("len")]),t._v(", 不存在的值为"),s("code",[t._v("n")]),t._v("，那么完整的数组就是 arr2 = [n, ...arr1]，长度为"),s("code",[t._v("len + 1")]),s("br"),t._v("\n假设 arr1 的和是 sum1, arr2 的和是 sum2, sum2 - sum1 就是不存在的数 n")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("missingNumber")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sum2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sum2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  sum2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//arr2的和是0~j的值（包括j），即length")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sum1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);