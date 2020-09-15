$(document).foundation()

function generate() {
	var selected = document.getElementById('circuit').value;
    document.getElementById('check_but').disabled = false;
    switch(selected) {
		case "1":
			document.getElementById('cir-value').value = 1;
            document.getElementById('main-grid').innerHTML = '<div class="grid-x" id="cir1"><div class="small-9 cell"><img src="img/1.png"></img><div style="position:relative; top:-470px; left:250px; width:248.5px;"><div class="input-group"><span class="input-group-label">R1</span><input class="input-group-field" type="number" id="cir1-r1-res-num"><div class="input-group-button"><select id="cir1-r1-res-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected>.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div><div style="position:relative; top:-410px; left:350px; width:248.5px;"><div class="input-group"><span class="input-group-label">R2</span><input class="input-group-field" type="number" id="cir1-r2-res-num"><div class="input-group-button"><select id="cir1-r2-res-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected>.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div><div style="position:relative; top:-360px; left:120px; width:248.5px;"><div class="input-group"><span class="input-group-label">BAT1</span><input class="input-group-field" type="number" id="cir1-bat1-vol-num"><div class="input-group-button"><select id="cir1-bat1-vol-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected>.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">V</span></div></div><div style="position:relative; top:-210px; left:250px; width:248.5px;"><div class="input-group"><span class="input-group-label">R3</span><input class="input-group-field" type="number" id="cir1-r3-res-num"><div class="input-group-button"><select id="cir1-r3-res-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected>.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div><div class="small-3 cell"><h2>Circuit Totals</h2><br/><div class="input-group"><span class="input-group-label">RT</span><input class="input-group-field" type="number" id="cir1-rt-num"><div class="input-group-button"><select id="cir1-rt-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected>.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div><div class="input-group"><span class="input-group-label">VT</span><input class="input-group-field" type="number" id="cir1-vt-num"><div class="input-group-button"><select id="cir1-vt-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected>.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">V</span></div><div class="input-group"><span class="input-group-label">IT</span><input class="input-group-field" type="number" id="cir1-it-num"><div class="input-group-button"><select id="cir1-it-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected>.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">A</span></div></div></div>';
			generate_cir[document.getElementById('cir-value').value]();
			break;
        case "2":
            document.getElementById('cir-value').value = 2;
            var varation = randomWholeNumber(1, 3);
            switch (varation) {
                case 1:
                    //c = a * s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Coulomb / Amperage Relation</h2> <input style="display:none;" id="cir2-var" value="1" disabled type="number"> <p><span id="cir2-a"></span>A for <span id="cir2-s"></span> seconds is how many C?</p><input style="display:none;" id="cir2-a-num" value="" disabled type="number"> <input style="display:none;" id="cir2-s-num" value="" disabled type="number"> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir2-c"> <span class="input-group-label">Charge</span> <input class="input-group-field" type="number" id="cir2-c-num"> <div class="input-group-button"> <select id="cir2-c-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">C</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //a = c/s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Coulomb / Amperage Relation</h2> <input style="display:none;" id="cir2-var" value="2" disabled type="number"> <p>We had <span id="cir2-c"></span>C over <span id="cir2-s"></span> seconds, so what was the amperage?</p><input style="display:none;" id="cir2-c-num" value="" disabled type="number"> <input style="display:none;" id="cir2-s-num" value="" disabled type="number"> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir2-a"> <span class="input-group-label">Current</span> <input class="input-group-field" type="number" id="cir2-a-num"> <div class="input-group-button"> <select id="cir2-a-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">A</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //s = c/a
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Coulomb / Amperage Relation</h2> <input style="display:none;" id="cir2-var" value="3" disabled type="number"> <p>We had <span id="cir2-c"></span>C with <span id="cir2-a"></span>A. How long did that take?</p><input style="display:none;" id="cir2-c-num" value="" disabled type="number"> <input style="display:none;" id="cir2-a-num" value="" disabled type="number"> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir2-s"> <span class="input-group-label">Time</span> <input class="input-group-field" type="number" id="cir2-s-num"> <div class="input-group-button"> <select id="cir2-s-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">s</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
        case "3":
            document.getElementById('cir-value').value = 3;
            var varation = randomWholeNumber(1, 3);
            switch (varation) {
                case 1:
                    //j = c * v
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Coulomb*Volt / Joule Relation</h2> <input style="display: none;" id="cir3-var" value="1" disabled type="number"/> <p>If we had a charge of <span id="cir3-c"></span>C at <span id="cir3-v"></span> volts, how much energy was utilized?</p><input style="display: none;" id="cir3-c-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-v-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir3-j"> <span class="input-group-label">Energy</span> <input class="input-group-field" type="number" id="cir3-j-num"/> <div class="input-group-button"> <select id="cir3-j-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">J</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //c = j/v
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Coulomb*Volt / Joule Relation</h2> <input style="display: none;" id="cir3-var" value="2" disabled type="number"/> <p>If we used <span id="cir3-j"></span> joules of energy with a differential of <span id="cir3-v"></span> volts, what was the charge?</p><input style="display: none;" id="cir3-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-v-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir3-c"> <span class="input-group-label">Charge</span> <input class="input-group-field" type="number" id="cir3-c-num"/> <div class="input-group-button"> <select id="cir3-c-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">C</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //v = j/c
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Coulomb*Volt / Joule Relation</h2> <input style="display: none;" id="cir3-var" value="3" disabled type="number"/> <p>If we used <span id="cir3-j"></span> joules of energy with a charge of <span id="cir3-c"></span>C, what EMF was applied?</p><input style="display: none;" id="cir3-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-c-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir3-v"> <span class="input-group-label">EMF</span> <input class="input-group-field" type="number" id="cir3-v-num"/> <div class="input-group-button"> <select id="cir3-v-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">V</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
        case "4":
            document.getElementById('cir-value').value = 4;
            var varation = randomWholeNumber(1, 4);
            switch (varation) {
                case 1:
                    //a s v = j
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2> <input style="display: none;" id="cir4-var" value="1" disabled type="number"/> <p>How many Joules of energy do we have with <span id="cir4-v"></span> volts, at <span id="cir4-a"></span> amps, over <span id="cir4-s"></span> seconds?</p><input style="display: none;" id="cir4-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir4-j"> <span class="input-group-label">Energy</span> <input class="input-group-field" type="number" id="cir4-j-num"/> <div class="input-group-button"> <select id="cir4-j-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">J</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //j v s = a
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2> <input style="display: none;" id="cir4-var" value="2" disabled type="number"/> <p>How many Amps did we have if we measured <span id="cir4-j"></span> joules, at <span id="cir4-v"></span> volts, over <span id="cir4-s"></span> seconds?</p><input style="display: none;" id="cir4-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir4-a"> <span class="input-group-label">Current</span> <input class="input-group-field" type="number" id="cir4-a-num"/> <div class="input-group-button"> <select id="cir4-a-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">A</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //j v a = s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2> <input style="display: none;" id="cir4-var" value="3" disabled type="number"/> <p>How much time passed if we measured <span id="cir4-j"></span> joules, at <span id="cir4-v"></span> volts, with <span id="cir4-a"></span> amps?</p><input style="display: none;" id="cir4-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-a-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir4-s"> <span class="input-group-label">Time</span> <input class="input-group-field" type="number" id="cir4-s-num"/> <div class="input-group-button"> <select id="cir4-s-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">s</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 4:
                    //j a s = v
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2> <input style="display: none;" id="cir4-var" value="4" disabled type="number"/> <p>How many Volts did we have if we measured <span id="cir4-j"></span> joules, with <span id="cir4-a"></span> amps, over <span id="cir4-s"></span> seconds?</p><input style="display: none;" id="cir4-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir4-v"> <span class="input-group-label">EMF</span> <input class="input-group-field" type="number" id="cir4-v-num"/> <div class="input-group-button"> <select id="cir4-v-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">V</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
		default:
			
	}
};

function randomWholeNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDecimal(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max);
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    num += Math.floor(Math.random() * (max - min) + min) / 100;
    return num;
}

function significantDigits(value) {
     value = "" + value;
  var res = 0;
  for (var i = 0, len = value.length; i < len; i++){
    if (value[i]==="e")break;
    if (+value[i]>=0)
      res++;
}
  return res;
}

function numberOfZeros(n) {
  var c = 0;
  while (!~~n) {
    c++;
    n *= 10;
  }
  return c - 1;
}


var scientificToDecimal = function (num) {
    var nsign = Math.sign(num);
    //remove the sign
    num = Math.abs(num);
    //if the number is in scientific notation remove it
    if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
        var zero = '0',
                parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
                e = parts.pop(), //store the exponential part
                l = Math.abs(e), //get the number of zeros
                sign = e / l,
                coeff_array = parts[0].split('.');
        if (sign === -1) {
            l = l - coeff_array[0].length;
            if (l < 0) {
              num = coeff_array[0].slice(0, l) + '.' + coeff_array[0].slice(l) + (coeff_array.length === 2 ? coeff_array[1] : '');
            } 
            else {
              num = zero + '.' + new Array(l + 1).join(zero) + coeff_array.join('');
            }
        } 
        else {
            var dec = coeff_array[1];
            if (dec)
                l = l - dec.length;
            if (l < 0) {
              num = coeff_array[0] + dec.slice(0, l) + '.' + dec.slice(l);
            } else {
              num = coeff_array.join('') + new Array(l + 1).join(zero);
            }
        }
    }

    return nsign < 0 ? '-'+num : num;
};

function metric_not (num, nota) {
    if (nota == "k") {
        num = num * 1000;
    }
    else if (nota == "M") {
        num = num * 1000000;
    }
    else if (nota == "G") {
        num = num * 1000000000;
    }
    else if (nota == "T") {
        num = num * 1000000000000;
    }
    else if (nota == "m") {
        num = num * 0.001;
    }
    else if (nota == "mu") {
        num = num * 0.000001;
    }
    else if (nota == "n") {
        num = num * 0.000000001;
    }
    else if (nota == "p") {
        num = num * 0.000000000001;
    }
    return num;
};

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function roundToEven (orgNum, newNum) {
    orgNum = orgNum.toString();
    newNum = parseFloat(newNum).toString();
    for (i = 0; i <= newNum.length; i++) {
        if (orgNum.charAt(i) != newNum.charAt(i)) {
            if (orgNum.charAt(i) < newNum.charAt(i)) {
                if (orgNum.charAt(i + 1) == 5) {
                    if (parseInt(orgNum.charAt(i)) % 2 == 0) {
                        newNum = newNum.replaceAt(i, orgNum.charAt(i));
                        break;
                    }
                    else {
                        var value = parseInt(orgNum.charAt(i));
                        value++;
                        value = value.toString();
                        newNum = newNum.replaceAt(i, value);
                        break;
                    }
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
    }
    return Number.parseFloat(newNum);
}

var generate_cir = [];

generate_cir[1] = function() {
    document.getElementById('cir1-bat1-vol-num').value = randomWholeNumber(3, 12);
	document.getElementById('cir1-bat1-vol-num').disabled = true;
	document.getElementById('cir1-bat1-vol-not').disabled = true;
};

generate_cir[2] = function() {
    switch (document.getElementById('cir2-var').value) {
        case "1":
            document.getElementById('cir2-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir2-a').innerHTML = document.getElementById('cir2-a-num').value;
            document.getElementById('cir2-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir2-s').innerHTML = document.getElementById('cir2-s-num').value;
            break;
        case "2":
            document.getElementById('cir2-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir2-c').innerHTML = document.getElementById('cir2-c-num').value;
            document.getElementById('cir2-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir2-s').innerHTML = document.getElementById('cir2-s-num').value;
            break;
        case "3":
            document.getElementById('cir2-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir2-c').innerHTML = document.getElementById('cir2-c-num').value;
            document.getElementById('cir2-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir2-a').innerHTML = document.getElementById('cir2-a-num').value;
            break;
        default:
            
    }
}

generate_cir[3] = function() {
    switch (document.getElementById('cir3-var').value) {
        case "1":
            document.getElementById('cir3-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir3-c').innerHTML = document.getElementById('cir3-c-num').value;
            document.getElementById('cir3-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir3-v').innerHTML = document.getElementById('cir3-v-num').value;
            break;
        case "2":
            document.getElementById('cir3-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir3-j').innerHTML = document.getElementById('cir3-j-num').value;
            document.getElementById('cir3-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir3-v').innerHTML = document.getElementById('cir3-v-num').value;
            break;
        case "3":
            document.getElementById('cir3-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir3-j').innerHTML = document.getElementById('cir3-j-num').value;
            document.getElementById('cir3-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir3-c').innerHTML = document.getElementById('cir3-c-num').value;
            break;
        default:
            
    }
}

generate_cir[4] = function() {
    switch (document.getElementById('cir4-var').value) {
        case "1":
            document.getElementById('cir4-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir4-a').innerHTML = document.getElementById('cir4-a-num').value;
            document.getElementById('cir4-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir4-s').innerHTML = document.getElementById('cir4-s-num').value;
            document.getElementById('cir4-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir4-v').innerHTML = document.getElementById('cir4-v-num').value;
            break;
        case "2":
            document.getElementById('cir4-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir4-j').innerHTML = document.getElementById('cir4-j-num').value;
            document.getElementById('cir4-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir4-v').innerHTML = document.getElementById('cir4-v-num').value;
            document.getElementById('cir4-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir4-s').innerHTML = document.getElementById('cir4-s-num').value;
            break;
        case "3":
            document.getElementById('cir4-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir4-j').innerHTML = document.getElementById('cir4-j-num').value;
            document.getElementById('cir4-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir4-v').innerHTML = document.getElementById('cir4-v-num').value;
            document.getElementById('cir4-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir4-a').innerHTML = document.getElementById('cir4-a-num').value;
            break;
        case "4":
            document.getElementById('cir4-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir4-j').innerHTML = document.getElementById('cir4-j-num').value;
            document.getElementById('cir4-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir4-a').innerHTML = document.getElementById('cir4-a-num').value;
            document.getElementById('cir4-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir4-s').innerHTML = document.getElementById('cir4-s-num').value;
            break;
        default:
            
    }
}

function check() {
  check_cir[document.getElementById('cir-value').value]();  
};

var check_cir = [];

check_cir[2] = function() {
    switch (document.getElementById('cir2-var').value) {
        case "1":
            var digits = significantDigits(document.getElementById('cir2-a-num').value);
            if (significantDigits(document.getElementById('cir2-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir2-s-num').value);
            }
            var solution = document.getElementById('cir2-a-num').value * document.getElementById('cir2-s-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir2-a-num').value * document.getElementById('cir2-s-num').value, solution);
            var answer = metric_not(document.getElementById('cir2-c-num').value, document.getElementById('cir2-c-not').value);
            if (solution == answer) {
                document.getElementById('cir2-c').classList.remove('alert');
                document.getElementById('cir2-c').classList.add('success');
            }
            else {
                document.getElementById('cir2-c').classList.remove('success');
                document.getElementById('cir2-c').classList.add('alert');
            }
            break;
        case "2":
            var digits = significantDigits(document.getElementById('cir2-c-num').value);
            if (significantDigits(document.getElementById('cir2-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir2-s-num').value);
            }
            var solution = document.getElementById('cir2-c-num').value / document.getElementById('cir2-s-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir2-c-num').value / document.getElementById('cir2-s-num').value, solution);
            var answer = metric_not(document.getElementById('cir2-a-num').value, document.getElementById('cir2-a-not').value);
            if (solution == answer) {
                document.getElementById('cir2-a').classList.remove('alert');
                document.getElementById('cir2-a').classList.add('success');
            }
            else {
                document.getElementById('cir2-a').classList.remove('success');
                document.getElementById('cir2-a').classList.add('alert');
            }
            break;
        case "3":
            var digits = significantDigits(document.getElementById('cir2-c-num').value);
            if (significantDigits(document.getElementById('cir2-a-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir2-a-num').value);
            }
            var solution = document.getElementById('cir2-c-num').value / document.getElementById('cir2-a-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir2-c-num').value / document.getElementById('cir2-a-num').value, solution);
            var answer = metric_not(document.getElementById('cir2-s-num').value, document.getElementById('cir2-s-not').value);
            if (solution == answer) {
                document.getElementById('cir2-s').classList.remove('alert');
                document.getElementById('cir2-s').classList.add('success');
            }
            else {
                document.getElementById('cir2-s').classList.remove('success');
                document.getElementById('cir2-s').classList.add('alert');
            }
            break;
        default:
            
    }
};

check_cir[3] = function() {
    switch (document.getElementById('cir3-var').value) {
        case "1":
            var digits = significantDigits(document.getElementById('cir3-c-num').value);
            if (significantDigits(document.getElementById('cir3-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir3-v-num').value);
            }
            var solution = document.getElementById('cir3-c-num').value * document.getElementById('cir3-v-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir3-c-num').value * document.getElementById('cir3-v-num').value, solution);
            var answer = metric_not(document.getElementById('cir3-j-num').value, document.getElementById('cir3-j-not').value);
            if (solution == answer) {
                document.getElementById('cir3-j').classList.remove('alert');
                document.getElementById('cir3-j').classList.add('success');
            }
            else {
                document.getElementById('cir3-j').classList.remove('success');
                document.getElementById('cir3-j').classList.add('alert');
            }
            break;
        case "2":
            var digits = significantDigits(document.getElementById('cir3-j-num').value);
            if (significantDigits(document.getElementById('cir3-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir3-v-num').value);
            }
            var solution = document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value, solution);
            var answer = metric_not(document.getElementById('cir3-c-num').value, document.getElementById('cir3-c-not').value);
            if (solution == answer) {
                document.getElementById('cir3-c').classList.remove('alert');
                document.getElementById('cir3-c').classList.add('success');
            }
            else {
                document.getElementById('cir3-c').classList.remove('success');
                document.getElementById('cir3-c').classList.add('alert');
            }
            break;
        case "3":
            var digits = significantDigits(document.getElementById('cir3-j-num').value);
            if (significantDigits(document.getElementById('cir3-c-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir3-c-num').value);
            }
            var solution = document.getElementById('cir3-j-num').value / document.getElementById('cir3-c-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir3-j-num').value / document.getElementById('cir3-c-num').value, solution);
            var answer = metric_not(document.getElementById('cir3-v-num').value, document.getElementById('cir3-v-not').value);
            if (solution == answer) {
                document.getElementById('cir3-v').classList.remove('alert');
                document.getElementById('cir3-v').classList.add('success');
            }
            else {
                document.getElementById('cir3-v').classList.remove('success');
                document.getElementById('cir3-v').classList.add('alert');
            }
            break;
        default:
            
    }
};

check_cir[4] = function() {
    switch (document.getElementById('cir4-var').value) {
        case "1":
            var digits = significantDigits(document.getElementById('cir4-a-num').value);
            if (significantDigits(document.getElementById('cir4-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-s-num').value);
            }
            if (significantDigits(document.getElementById('cir4-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-v-num').value);
            }
            var solution = (document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value) * document.getElementById('cir4-v-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven((document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value) * document.getElementById('cir4-v-num').value, solution);
            var answer = metric_not(document.getElementById('cir4-j-num').value, document.getElementById('cir4-j-not').value);
            if (solution == answer) {
                document.getElementById('cir4-j').classList.remove('alert');
                document.getElementById('cir4-j').classList.add('success');
            }
            else {
                document.getElementById('cir4-j').classList.remove('success');
                document.getElementById('cir4-j').classList.add('alert');
            }
            break;
        case "2":
            var digits = significantDigits(document.getElementById('cir4-j-num').value);
            if (significantDigits(document.getElementById('cir4-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-v-num').value);
            }
            if (significantDigits(document.getElementById('cir4-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-s-num').value);
            }
            var solution = (document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-s-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven((document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-s-num').value, solution);
            var answer = metric_not(document.getElementById('cir4-a-num').value, document.getElementById('cir4-a-not').value);
            if (solution == answer) {
                document.getElementById('cir4-a').classList.remove('alert');
                document.getElementById('cir4-a').classList.add('success');
            }
            else {
                document.getElementById('cir4-a').classList.remove('success');
                document.getElementById('cir4-a').classList.add('alert');
            }
            break;
        case "3":
            var digits = significantDigits(document.getElementById('cir4-j-num').value);
            if (significantDigits(document.getElementById('cir4-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-v-num').value);
            }
            if (significantDigits(document.getElementById('cir4-a-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-a-num').value);
            }
            var solution = (document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-a-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven((document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-a-num').value, solution);
            var answer = metric_not(document.getElementById('cir4-s-num').value, document.getElementById('cir4-s-not').value);
            if (solution == answer) {
                document.getElementById('cir4-s').classList.remove('alert');
                document.getElementById('cir4-s').classList.add('success');
            }
            else {
                document.getElementById('cir4-s').classList.remove('success');
                document.getElementById('cir4-s').classList.add('alert');
            }
            break;
        case "4":
            var digits = significantDigits(document.getElementById('cir4-j-num').value);
            if (significantDigits(document.getElementById('cir4-a-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-a-num').value);
            }
            if (significantDigits(document.getElementById('cir4-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-s-num').value);
            }
            var solution = document.getElementById('cir4-j-num').value / (document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value);
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir4-j-num').value / (document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value), solution);
            var answer = metric_not(document.getElementById('cir4-v-num').value, document.getElementById('cir4-v-not').value);
            if (solution == answer) {
                document.getElementById('cir4-v').classList.remove('alert');
                document.getElementById('cir4-v').classList.add('success');
            }
            else {
                document.getElementById('cir4-v').classList.remove('success');
                document.getElementById('cir4-v').classList.add('alert');
            }
            break;
        default:
            
    }
};

function show() {
  show_cir[document.getElementById('cir-value').value]();  
};

var show_cir = [];

show_cir[2] = function() {
    switch (document.getElementById('cir2-var').value) {
        case "1":
            var digits = significantDigits(document.getElementById('cir2-a-num').value);
            if (significantDigits(document.getElementById('cir2-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir2-s-num').value);
            }
            var solution = document.getElementById('cir2-a-num').value * document.getElementById('cir2-s-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir2-a-num').value * document.getElementById('cir2-s-num').value, solution);
            document.getElementById('cir2-c-num').value = solution;
            document.getElementById('cir2-c').classList.remove('alert');
            document.getElementById('cir2-c').classList.remove('success');
            document.getElementById('cir2-c').classList.add('info');
            document.getElementById('cir2-c-num').disabled = true;
            document.getElementById('cir2-c-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var digits = significantDigits(document.getElementById('cir2-c-num').value);
            if (significantDigits(document.getElementById('cir2-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir2-s-num').value);
            }
            var solution = document.getElementById('cir2-c-num').value / document.getElementById('cir2-s-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir2-c-num').value / document.getElementById('cir2-s-num').value, solution);
            document.getElementById('cir2-a-num').value = solution;
            document.getElementById('cir2-a').classList.remove('alert');
            document.getElementById('cir2-a').classList.remove('success');
            document.getElementById('cir2-a').classList.add('info');
            document.getElementById('cir2-a-num').disabled = true;
            document.getElementById('cir2-a-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var digits = significantDigits(document.getElementById('cir2-c-num').value);
            if (significantDigits(document.getElementById('cir2-a-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir2-a-num').value);
            }
            var solution = document.getElementById('cir2-c-num').value / document.getElementById('cir2-a-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir2-c-num').value / document.getElementById('cir2-a-num').value, solution);
            document.getElementById('cir2-s-num').value = solution;
            document.getElementById('cir2-s').classList.remove('alert');
            document.getElementById('cir2-s').classList.remove('success');
            document.getElementById('cir2-s').classList.add('info');
            document.getElementById('cir2-s-num').disabled = true;
            document.getElementById('cir2-s-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};

show_cir[3] = function() {
    switch (document.getElementById('cir3-var').value) {
        case "1":
            var digits = significantDigits(document.getElementById('cir3-c-num').value);
            if (significantDigits(document.getElementById('cir3-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir3-v-num').value);
            }
            var solution = document.getElementById('cir3-c-num').value * document.getElementById('cir3-v-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir3-c-num').value * document.getElementById('cir3-v-num').value, solution);
            document.getElementById('cir3-j-num').value = solution;
            document.getElementById('cir3-j').classList.remove('alert');
            document.getElementById('cir3-j').classList.remove('success');
            document.getElementById('cir3-j').classList.add('info');
            document.getElementById('cir3-j-num').disabled = true;
            document.getElementById('cir3-j-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var digits = significantDigits(document.getElementById('cir3-j-num').value);
            if (significantDigits(document.getElementById('cir3-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir3-v-num').value);
            }
            var solution = document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value, solution);
            document.getElementById('cir3-c-num').value = solution;
            document.getElementById('cir3-c').classList.remove('alert');
            document.getElementById('cir3-c').classList.remove('success');
            document.getElementById('cir3-c').classList.add('info');
            document.getElementById('cir3-c-num').disabled = true;
            document.getElementById('cir3-c-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var digits = significantDigits(document.getElementById('cir3-j-num').value);
            if (significantDigits(document.getElementById('cir3-c-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir3-c-num').value);
            }
            var solution = document.getElementById('cir3-j-num').value / document.getElementById('cir3-c-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir3-j-num').value / document.getElementById('cir3-c-num').value, solution);
            document.getElementById('cir3-v-num').value = solution;
            document.getElementById('cir3-v').classList.remove('alert');
            document.getElementById('cir3-v').classList.remove('success');
            document.getElementById('cir3-v').classList.add('info');
            document.getElementById('cir3-v-num').disabled = true;
            document.getElementById('cir3-v-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};

show_cir[4] = function() {
    switch (document.getElementById('cir4-var').value) {
        case "1":
            var digits = significantDigits(document.getElementById('cir4-a-num').value);
            if (significantDigits(document.getElementById('cir4-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-s-num').value);
            }
            if (significantDigits(document.getElementById('cir4-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-v-num').value);
            }
            var solution = (document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value) * document.getElementById('cir4-v-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven((document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value) * document.getElementById('cir4-v-num').value, solution);
            document.getElementById('cir4-j-num').value = solution;
            document.getElementById('cir4-j').classList.remove('alert');
            document.getElementById('cir4-j').classList.remove('success');
            document.getElementById('cir4-j').classList.add('info');
            document.getElementById('cir4-j-num').disabled = true;
            document.getElementById('cir4-j-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var digits = significantDigits(document.getElementById('cir4-j-num').value);
            if (significantDigits(document.getElementById('cir4-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-v-num').value);
            }
            if (significantDigits(document.getElementById('cir4-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-s-num').value);
            }
            var solution = (document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-s-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven((document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-s-num').value, solution);
            document.getElementById('cir4-a-num').value = solution;
            document.getElementById('cir4-a').classList.remove('alert');
            document.getElementById('cir4-a').classList.remove('success');
            document.getElementById('cir4-a').classList.add('info');
            document.getElementById('cir4-a-num').disabled = true;
            document.getElementById('cir4-a-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var digits = significantDigits(document.getElementById('cir4-j-num').value);
            if (significantDigits(document.getElementById('cir4-v-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-v-num').value);
            }
            if (significantDigits(document.getElementById('cir4-a-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-a-num').value);
            }
            var solution = (document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-a-num').value;
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven((document.getElementById('cir4-j-num').value / document.getElementById('cir4-v-num').value) / document.getElementById('cir4-a-num').value, solution);
            document.getElementById('cir4-s-num').value = solution;
            document.getElementById('cir4-s').classList.remove('alert');
            document.getElementById('cir4-s').classList.remove('success');
            document.getElementById('cir4-s').classList.add('info');
            document.getElementById('cir4-s-num').disabled = true;
            document.getElementById('cir4-s-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "4":
            var digits = significantDigits(document.getElementById('cir4-j-num').value);
            if (significantDigits(document.getElementById('cir4-a-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-a-num').value);
            }
            if (significantDigits(document.getElementById('cir4-s-num').value) < digits) {
                digits = significantDigits(document.getElementById('cir4-s-num').value);
            }
            var solution = document.getElementById('cir4-j-num').value / (document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value);
            solution = Number.parseFloat(solution).toPrecision(digits);
            solution = roundToEven(document.getElementById('cir4-j-num').value / (document.getElementById('cir4-a-num').value * document.getElementById('cir4-s-num').value), solution);
            document.getElementById('cir4-v-num').value = solution;
            document.getElementById('cir4-v').classList.remove('alert');
            document.getElementById('cir4-v').classList.remove('success');
            document.getElementById('cir4-v').classList.add('info');
            document.getElementById('cir4-v-num').disabled = true;
            document.getElementById('cir4-v-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};