// 定义私有成员 a 和 c
let a = 10;

let c = 20;
// 外界访问不到变量 d, 因为它没有被暴露出去
let d = 30;

function show(){
    console.log("------show-----")
}

// 将本模块中的私有成员暴露出去，供其他模块使用
export default {
    a,
    c,
    show
}

// 按需导出
export let s1 = 'aaa'
export let s2 = 'sss'
export function say(){
    console.log('=====say=====')
}