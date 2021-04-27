var charactersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// for (let i = 48; i < 127; i++) {
//     if ((i < 58 || i > 64) && (i < 91 || i > 96) && (i < 123)) {
//         charactersArr.push(String.fromCharCode(i));
//     }
// }
function generateUserID(length = 32) {
    let userID = "";
    for (let i = 0; i < 32; i++) {
        userID += charactersArr[Math.floor(Math.random() * charactersArr.length)];
    }
    return userID;
}
console.log(generateUserID());




