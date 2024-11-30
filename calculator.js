let mas = {
    1: document.getElementById('1'),
    2: document.getElementById('2'),
    3: document.getElementById('3'),
    4: document.getElementById('4'),
    5: document.getElementById('5'),
    6: document.getElementById('6'),
    7: document.getElementById('7'),
    8: document.getElementById('8'),
    9: document.getElementById('9'),
    res: document.getElementById('res'),
}
let fRes = ''

function resultOrg(value) {
    fRes += value
    switch(value) {
        case ('1'):
            fRes += '1'
            break
        case ('2'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '2'
                break
            }
            else {
                mas.res.innerHTML += '2'
                break
            }
        case ('3'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '3'
                break
            }
            else {
                mas.res.innerHTML += '3'
                break
            }
        case ('4'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '4'
                break
            }
            else {
                mas.res.innerHTML += '4'
                break
            }
        case ('5'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '5'
                break
            }
            else {
                mas.res.innerHTML += '5'
                break
            }
        case ('6'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '6'
                break
            }
            else {
                mas.res.innerHTML += '6'
                break
            }
        case ('7'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '7'
                break
            }
            else {
                mas.res.innerHTML += '7'
                break
            }
        case ('8'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '8'
                break
            }
            else {
                mas.res.innerHTML += '8'
                break
            }
        case ('9'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '9'
                break
            }
            else {
                mas.res.innerHTML += '9'
                break
            }
        case ('0'):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = '0'
                break
            }
            else {
                mas.res.innerHTML += '0'
                break
            }
            
        case ('='):
            if (mas.res.innerHTML.includes('+')) {
                let p = mas.res.innerHTML.split('+')
                mas.res.innerHTML = Number(p[0]) + Number(p[1])
            }
            else if (mas.res.innerHTML.includes('-')) {
                let p = mas.res.innerHTML.split('-')
                mas.res.innerHTML = Number(p[0]) - Number(p[1])
            }
            else if (mas.res.innerHTML.includes('*')) {
                let p = mas.res.innerHTML.split('*')
                mas.res.innerHTML = Number(p[0]) * Number(p[1])
            }
            else if (mas.res.innerHTML.includes('/')) {
                let p = mas.res.innerHTML.split('/')
                mas.res.innerHTML = Number(p[0]) / Number(p[1])
            }
            else if (mas.res.innerHTML.includes('**')) {
                let p = mas.res.innerHTML.split('**')
                mas.res.innerHTML = Number(p[0]) ** Number(p[1])
            }
            else if (mas.res.innerHTML.includes('%')) {
                let p = mas.res.innerHTML.split('%')
                mas.res.innerHTML = Number(p[0]) % Number(p[1])
            }

        if (fRes.endsWith('+') || fRes.endsWith('-') || fRes.endsWith('*') || fRes.endsWith('/') || fRes.endsWith('**') || fRes.endsWith('%')) {
            fRes+= value
        }
        else {
            fRes[-1] = value
        }
    }
}

document.addEventListener('keydown', function(event){
    switch (event.code) {
        case ("KeyC"):
            mas.res.innerHTML = '0'
            break
        case ("Backspace"):
            if (mas.res.innerHTML.length == 1) {
                mas.res.innerHTML = '0'
                break
            }
            else {
                mas.res.innerHTML = mas.res.innerHTML.slice(0, -1)
                break
            }
        case ("Numpad1" || "Digit1"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '1'
                break
            }
            else {
                mas.res.innerHTML += '1'
                break
            }
        case ("Numpad2" || "Digit2"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '2'
                break
            }
            else {
                mas.res.innerHTML += '2'
                break
            }
        case ("Numpad3" || "Digit3"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '3'
                break
            }
            else {
                mas.res.innerHTML += '3'
                break
            }
        case ("Numpad4" || "Digit4"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '4'
                break
            }
            else {
                mas.res.innerHTML += '4'
                break
            }
        case ("Numpad5" || "Digit5"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '5'
                break
            }
            else {
                mas.res.innerHTML += '5'
                break
            }
        case ("Numpad6" || "Digit6"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '6'
                break
            }
            else {
                mas.res.innerHTML += '6'
                break
            }
        case ("Numpad7" || "Digit7"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '7'
                break
            }
            else {
                mas.res.innerHTML += '7'
                break
            }
        case ("Numpad8" || "Digit8"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '8'
                break
            }
            else {
                mas.res.innerHTML += '8'
                break
            }
        case ("Numpad9" || "Digit9"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '9'
                break
            }
            else {
                mas.res.innerHTML += '9'
                break
            }
        case ("Numpad0" || "Digit0"):
            if (mas.res.innerHTML.startsWith('0')) {
                mas.res.innerHTML = ''
                mas.res.innerHTML += '0'
                break
            }
            else {
                mas.res.innerHTML += '0'
                break
            }
    }
    switch (event.keyCode) {
        case (107):
            if (!((mas.res.innerHTML).includes('+'))) {
                mas.res.innerHTML +='+'
                break
            }
            else {
                break
            }
        case (109):
            if (!((mas.res.innerHTML).includes('-'))) {
                mas.res.innerHTML +='-'
                break
            }
            else {
                break
            }
        case (106):
            if (!((mas.res.innerHTML).includes('*'))) {
                mas.res.innerHTML +='*'
                break
            }
            else {
                break
            }
        case (111):
            if (!((mas.res.innerHTML).includes('/'))) {
                mas.res.innerHTML +='/'
                break
            }
            else {
                break
            }
        case (110):
            if (!((mas.res.innerHTML).includes('.'))) {
                mas.res.innerHTML +='.'
                break
            }
            else {
                break
            }
        case (13):
            if (mas.res.innerHTML.includes('+')) {
                let p = mas.res.innerHTML.split('+')
                mas.res.innerHTML = Number(p[0]) + Number(p[1])
            }
            else if (mas.res.innerHTML.includes('-')) {
                let p = mas.res.innerHTML.split('-')
                mas.res.innerHTML = Number(p[0]) - Number(p[1])
            }
            else if (mas.res.innerHTML.includes('*')) {
                let p = mas.res.innerHTML.split('*')
                mas.res.innerHTML = Number(p[0]) * Number(p[1])
            }
            else if (mas.res.innerHTML.includes('/')) {
                let p = mas.res.innerHTML.split('/')
                mas.res.innerHTML = Number(p[0]) / Number(p[1])
            }
            else if (mas.res.innerHTML.includes('**')) {
                let p = mas.res.innerHTML.split('**')
                mas.res.innerHTML = Number(p[0]) ** Number(p[1])
            }
            else if (mas.res.innerHTML.includes('%')) {
                let p = mas.res.innerHTML.split('%')
                mas.res.innerHTML = Number(p[0]) % Number(p[1])
            }
    }
});

function buttonClick(value) {
    fRes += value
    mas.res.innerHTML = fRes
}
function operationClick(value) {
        if (!fRes.endsWith('+') && !fRes.endsWith('-') && !fRes.endsWith('*') && !fRes.endsWith('/') && !fRes.endsWith('**') && !fRes.endsWith('%')) {
            fRes += value
        }
        mas.res.innerHTML = fRes
}

function specialActionClick(value) {
    switch (value) {
        case ('clear'):
            fRes = ''
            mas.res.innerHTML = '0'
            break
        case ('clear_1'):
            if (fRes.length <= 1) {
                fRes = ''
                mas.res.innerHTML = '0'
                break
            }
            else {
                fRes = fRes.slice(0, -1)
                mas.res.innerHTML = mas.res.innerHTML.slice(0, -1)
                break
            }
    }
}

function resultButtonClick() {
    let oppIndexList = ''
    let fResE = 0
    let fResEL = []
    let target = '+'
    let pos = -1
    while ((pos = fRes.indexOf(target, pos + 1)) != -1) {
        oppIndexList += pos
    }

    for (let i = 0; oppIndexList.length >= i; i++) {
        let aftOpp = '', preOpp = ''
        console.log(i)
        if (i > 0) {
            preOpp = fRes.slice(Number(oppIndexList[i-2])+1, oppIndexList[i-1])
            console.log(preOpp)
            // aftOpp = (fRes.includes('+', Number(oppIndexList[i-1])+1)) ? fRes.slice(Number(oppIndexList[i])+1, oppIndexList[i+1]) : fRes.slice(Number(oppIndexList[i])+1, fRes.length)
            aftOpp = fRes.slice(Number(oppIndexList[i-1])+1, oppIndexList[i])
            console.log(aftOpp)
        }
        else {
            preOpp = fRes.slice(0, oppIndexList[i])
            aftOpp = fRes.slice(Number(oppIndexList[i])+1, oppIndexList[i+1])
        }
        fResEL.unshift(Number(preOpp), Number(aftOpp))
        console.log(fResE)
        console.log(fResEL)
    }
    for (let i = 0; fResEL.length-3 >= i; i++) {
        fResE += fResEL[i]
    }
    fRes = ''
    mas.res.innerHTML = fResE
}