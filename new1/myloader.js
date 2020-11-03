module.exports = (content) => {
    console.log(content, '가 불러와졌다');
    return content.replace("console.log(", "alert(");
}
// module.exports = (content) => {
//     console.log(content, '가 불러와졌다');
//     return content;
// }