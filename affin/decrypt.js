function output_decrypt() {
    let a = document.getElementById("value_a").value;
    let b = document.getElementById("value_b").value;
    let text = document.getElementById("in_text").value;


    let checkArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    let arr = text.split('')
    let isCapLetter = true;
    //check the text
    for (i = 0; i < arr.length; i++) {
        if (!(checkArr.includes(arr[i]))) isCapLetter = false;
    }

    if (a % 2 == 0 || a == 13) {
        window.alert("The value of a, must be one of these numbers: [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]")
    }


    if (!(isCapLetter)) {
        window.alert("the text must contain only English capital letters.")
    }


    //create decrypt table
    if (a % 2 != 0 && a != 13 && isCapLetter) {
        let resTable = "";

        //first row
        resTable = resTable + "<table>";
        resTable = resTable + "<tr><td>Encrypted Text</td>";
        for (i = 0; i < arr.length; i++) {
            resTable = resTable + "<td>" + arr[i] + "</td>";
        }
        resTable = resTable + "</tr>";

        //2nd row
        resTable = resTable + "<tr><td>Encrypted Value</td>";
        for (i = 0; i < arr.length; i++) {
            resTable = resTable + "<td>" + (arr[i].charCodeAt(0) - 65) + "</td>";
        }
        resTable = resTable + "</tr>";

        let D;

        for (q = 0; q < 26; q++) {
            let reminder = (a * q) % 26;
            if (reminder == 1)
                D = q;
        }

        //3rd row
        resTable = resTable + "<tr><td>" + parseInt(D) + "*(x-" + parseInt(b) + ") mod 26</td>";
        for (i = 0; i < arr.length; i++) {
            let decryptCode = (D * ((arr[i].charCodeAt(0) - 65) - b)) % 26;
            if (decryptCode < 0) decryptCode += parseInt(26);
            resTable = resTable + "<td>" + decryptCode + "</td>";
        }
        resTable = resTable + "</tr>";

        //4th row
        resTable = resTable + "<tr><td>Decrypted Text</td>";
        for (i = 0; i < arr.length; i++) {
            let decryptCode = (D * ((arr[i].charCodeAt(0) - 65) - b)) % 26;
            if (decryptCode < 0) decryptCode += parseInt(26);
            resTable = resTable + "<td>" + String.fromCharCode(decryptCode + 65) + "</td>";
        }
        resTable = resTable + "</tr>";

        document.getElementById("result").innerHTML = resTable;
    }
}