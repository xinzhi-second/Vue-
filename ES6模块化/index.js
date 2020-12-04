console.log('ok');

// 导入模块成员
import m1 from './m1.js'

console.log(m1);

// 按需导入模块成员
import {s1, s2 as c, say } from './m1.js'
console.log(s1, c, say);

// 导入并执行模块
import './m2.js'