console.clear();
var str = "HeLlO wOrLd";

function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter++;
    }
    return result;
}

let final = "";
let currentIndex = 0;

function generateNextCharacter() {
    if (final !== str) {
        let c = randomString(1);
        final += c;
        console.log(final);
        if (final[currentIndex] === str[currentIndex]) {
            currentIndex++;
        } else {
            final = final.slice(0, -1); // Cắt bỏ ký tự cuối cùng nếu không khớp
        }
        setTimeout(generateNextCharacter, 10); // Chờ trước khi tạo ký tự tiếp theo
    }
}

generateNextCharacter();
