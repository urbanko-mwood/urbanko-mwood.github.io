$(document).foundation()

//Utility Functions
function randomWholeNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    num = checkNumLength(num);
    return num;
};

function randomDecimal(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max);
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    num += Math.floor(Math.random() * (max - min) + min) / 100;
    num = checkNumLength(num);
    return num;
};

function checkNumLength(num) {
    var asString = num.toString();
    if (asString.length > 6) {
        num = num.toPrecision(6);
    }
    return num;
};

function random_metric (num) {
    var random;
    if (num > 999999999999) {
        num = set_metric_not(num, "T");
        num = num.toString() + "T";
    }
    else if (num > 999999999) {
        num = set_metric_not(num, "G");
        num = num.toString() + "G";
    }
    else if (num > 999999) {
        random = randomDecimal(1, 100);
        if (random >= 30) {
            num = set_metric_not(num, "M");
            num = num.toString() + "M";
        }
    }
    else if (num > 999) {
        random = randomDecimal(1, 100);
        if (random >= 50) {
            num = set_metric_not(num, "k");
            num = num.toString() + "k";
        }
    }
    else if (num > 99) {
        random = randomDecimal(1, 100);
        if (random >= 70) {
            num = set_metric_not(num, "k");
            num = num.toString() + "k";
        }
        else if (random >= 80) {
             num = set_metric_not(num, "m");
            num = num.toString() + "m";
        }
    }
    else if (num < 0.000000001) {
        num = set_metric_not(num, "p");
        num = num.toString() + "p";
    }
    else if (num < 0.000001) {
        num = set_metric_not(num, "n");
        num = num.toString() + "n";
    }
    else if (num < 0.001) {
        random = randomDecimal(1, 100);
        if (random >= 30) {
            num = set_metric_not(num, "mu");
            num = num.toString() + "mu";
        }
    }
    else if (num < 0.9) {
        random = randomDecimal(1, 100);
        if (random >= 30) {
            num = set_metric_not(num, "m");
            num = num.toString() + "m";
        }
    }
    num = numberWithCommas(num);
    return num;
};

function numberWithCommas(x) {
   var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

function set_metric_not (num, nota) {
    if (nota == "k") {
        num = num / 1000;
    }
    else if (nota == "M") {
        num = num / 1000000;
    }
    else if (nota == "G") {
        num = num / 1000000000;
    }
    else if (nota == "T") {
        num = num / 1000000000000;
    }
    else if (nota == "m") {
        num = num / 0.001;
    }
    else if (nota == "mu") {
        num = num / 0.000001;
    }
    else if (nota == "n") {
        num = num / 0.000000001;
    }
    else if (nota == "p") {
        num = num / 0.000000000001;
    }
    num = checkNumLength(num);
    return num;
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

function rounding(num) {
	if (num >= 1) {
		num = Number.parseFloat(num);
		num = Number.parseFloat(num.toFixed(3));
        num = Number.parseFloat(num.toString());
	}
	else if (num < 1) {
		num = Number.parseFloat(num);
		num = Number.parseFloat(num.toPrecision(3));
        num = Number.parseFloat(num.toString());
	}
	return num
};

function per2Check (solution, answer) {
	var check = 0;
	if (solution >= answer) {
		check = answer / solution;
	}
	else {
		check = solution / answer;
	}
	
	if (check >= 0.998) {
		return true;
	}
	else {
		return false;
	}
};

function per10Check (solution, answer) {
	var check = 0;
	if (solution >= answer) {
		check = answer / solution;
	}
	else {
		check = solution / answer;
	}
	
	if (check >= 0.99) {
		return true;
	}
	else {
		return false;
	}
};


// Buttons

function restart() {
    document.getElementById('cir-value').value = "";
    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><ol><li>Select a type of circuit to solve for from the list above.</li><li>Click the "generate a circuit" button to get a circuit to solve for. You can hit this button as much as you wish to generate different variants.</li><li>Solve for the missing values and enter your answers into the spaces provided.</li><li>Click the "check answers" button to will highlight answers based on how correct they are:<ul><li>Green: 100% correct</li><li>Yellow: Correct within 0.2%</li><li>Orange: Correct within 1%</li><li>Red: Incorrect</li></ul></li><li>If you get stuck you can click "show answers" to see what the correct answers are. This will require you to generate a new circuit before you can continue to work.</li><li>Repeat these steps to continue to practice.</li><li>...</li><li>Profit</li></ol></div></div>';
	document.getElementById('problem_type').value = "";
	problem_update();
};

function problem_update() {
	document.getElementById('cir-value').value = "";
	document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><ol><li>Select a type of circuit to solve for from the list above.</li><li>Click the "generate a circuit" button to get a circuit to solve for. You can hit this button as much as you wish to generate different variants.</li><li>Solve for the missing values and enter your answers into the spaces provided.</li><li>Click the "check answers" button to will highlight answers based on how correct they are:<ul><li>Green: 100% correct</li><li>Yellow: Correct within 0.2%</li><li>Orange: Correct within 1%</li><li>Red: Incorrect</li></ul></li><li>If you get stuck you can click "show answers" to see what the correct answers are. This will require you to generate a new circuit before you can continue to work.</li><li>Repeat these steps to continue to practice.</li><li>...</li><li>Profit</li></ol></div></div>';
	var selected = document.getElementById('problem_type').value;
	switch(selected) {
		case "1":
			document.getElementById('problem_settings').innerHTML = '<li><select name="circuit" id="circuit"><option value="">Select a relation to solve for...</option><option value="1" title="Provides problems where you find values based on the relation between charge, current, and time passed.">Coulomb/Ampere Relation</option><option value="2" title="Provides problems where you find values based on the relation between energy, charge, and EMF.">Coulomb*Volt/Joule Relation</option><option value="3" title="Provides problems where you find values utilizing the Coulomb/Ampere Relation and the Coulomb*Volt/Joule Relation.">Integrated Coulomb*Volt/Joule Relation</option><option value="4" title="Provides problems where you find values based on the relation between EMF, current, and resistance.">Ohm\'s Law Relation</option><option value="5" title="Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, and Ohm\'s Law Relation.">Integrated Ohm\'s Law Relation</option><option value="6" title="Provides problems where you find values based on the related between energy, power, and time passed.">Joule / Watt*Second Relation</option><option value="7" title="Provides problems where you find values based on the related between power, EMF, and current.">Watt\'s Law Relation</option><option style="display:none;" value="8" title="Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, Ohm\'s Law Relation, Joule/Watt*Second, and Watt\'s Law Relation.">Integrated Watt\'s Law Relation</option>';
			break;
		case "2":
			document.getElementById('problem_settings').innerHTML = '<li><select name="circuit" id="circuit"><option value="">Select a resistor type to interpret...</option><option value="9">Through-Hole Color Codes</option><option value="10">SMD Number Codes</option></select></li>';
			break;
		case "3":
			document.getElementById('problem_settings').innerHTML = '<li><select name="circuit" id="circuit"><option value="">Select an oscilloscope to read...</option><option value="11">Auto-Adjusted Display</option></select></li>';
			break;
		case "4":
			document.getElementById('problem_settings').innerHTML = '<li><select name="circuit" id="circuit"><option value="">Select a number system to convert...</option><option value="12">Binary</option><option value="13">Octal</option><option value="14">Hexadecimal</option></select></li>';
			break;
		default:
			document.getElementById('problem_settings').innerHTML = '<li><select name="circuit" id="circuit" disabled><option value=""></option></select></li>';
			break;
	}
};

function generate() {
	var selected = document.getElementById('circuit').value;
    document.getElementById('check_but').disabled = false;
    switch(selected) {
        case "1":
            document.getElementById('cir-value').value = 1;
            var varation = randomWholeNumber(1, 3);
            switch (varation) {
                case 1:
                    //c = a * s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Coulomb / Amperage Relation</h2><h5>Provides problems where you find values based on the relation between charge, current, and time passed.</h5><br /><input style="display:none;" id="cir1-var" value="1" disabled type="number"> <p><span id="cir1-a"></span>A for <span id="cir1-s"></span> seconds is how many C?</p><input style="display:none;" id="cir1-a-num" value="" disabled type="number"> <input style="display:none;" id="cir1-s-num" value="" disabled type="number"> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir1-c"> <span class="input-group-label">Charge</span> <input class="input-group-field" type="number" id="cir1-c-num"> <div class="input-group-button"> <select id="cir1-c-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">C</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //a = c/s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Coulomb / Amperage Relation</h2><h5>Provides problems where you find values based on the relation between charge, current, and time passed.</h5><br /><input style="display:none;" id="cir1-var" value="2" disabled type="number"> <p>We had <span id="cir1-c"></span>C over <span id="cir1-s"></span> seconds, so what was the amperage?</p><input style="display:none;" id="cir1-c-num" value="" disabled type="number"> <input style="display:none;" id="cir1-s-num" value="" disabled type="number"> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir1-a"> <span class="input-group-label">Current</span> <input class="input-group-field" type="number" id="cir1-a-num"> <div class="input-group-button"> <select id="cir1-a-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">A</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //s = c/a
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Coulomb / Amperage Relation</h2><h5>Provides problems where you find values based on the relation between charge, current, and time passed.</h5><br /><input style="display:none;" id="cir1-var" value="3" disabled type="number"> <p>We had <span id="cir1-c"></span>C with <span id="cir1-a"></span>A. How long did that take?</p><input style="display:none;" id="cir1-c-num" value="" disabled type="number"> <input style="display:none;" id="cir1-a-num" value="" disabled type="number"> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir1-s"> <span class="input-group-label">Time</span> <input class="input-group-field" type="number" id="cir1-s-num"> <div class="input-group-button"> <select id="cir1-s-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">s</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
        case "2":
            document.getElementById('cir-value').value = 2;
            var varation = randomWholeNumber(1, 3);
            switch (varation) {
                case 1:
                    //j = c * v
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Coulomb*Volt / Joule Relation</h2><h5>Provides problems where you find values based on the relation between energy, charge, and EMF.</h5><br /><input style="display: none;" id="cir2-var" value="1" disabled type="number"/> <p>If we had a charge of <span id="cir2-c"></span>C at <span id="cir2-v"></span> volts, how much energy was utilized?</p><input style="display: none;" id="cir2-c-num" value="" disabled type="number"/> <input style="display: none;" id="cir2-v-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir2-j"> <span class="input-group-label">Energy</span> <input class="input-group-field" type="number" id="cir2-j-num"/> <div class="input-group-button"> <select id="cir2-j-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">J</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //c = j/v
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Coulomb*Volt / Joule Relation</h2><h5>Provides problems where you find values based on the relation between energy, charge, and EMF.</h5><br /><input style="display: none;" id="cir2-var" value="2" disabled type="number"/> <p>If we used <span id="cir2-j"></span> joules of energy with a differential of <span id="cir2-v"></span> volts, what was the charge?</p><input style="display: none;" id="cir2-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir2-v-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir2-c"> <span class="input-group-label">Charge</span> <input class="input-group-field" type="number" id="cir2-c-num"/> <div class="input-group-button"> <select id="cir2-c-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">C</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //v = j/c
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Coulomb*Volt / Joule Relation</h2><h5>Provides problems where you find values based on the relation between energy, charge, and EMF.</h5><br /><input style="display: none;" id="cir2-var" value="3" disabled type="number"/> <p>If we used <span id="cir2-j"></span> joules of energy with a charge of <span id="cir2-c"></span>C, what EMF was applied?</p><input style="display: none;" id="cir2-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir2-c-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir2-v"> <span class="input-group-label">EMF</span> <input class="input-group-field" type="number" id="cir2-v-num"/> <div class="input-group-button"> <select id="cir2-v-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">V</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
        case "3":
            document.getElementById('cir-value').value = 3;
            var varation = randomWholeNumber(1, 4);
            switch (varation) {
                case 1:
                    //a s v = j
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation and the Coulomb*Volt/Joule Relation.</h5><br /><input style="display: none;" id="cir3-var" value="1" disabled type="number"/> <p>How many Joules of energy do we have with <span id="cir3-v"></span> volts, at <span id="cir3-a"></span> amps, over <span id="cir3-s"></span> seconds?</p><input style="display: none;" id="cir3-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir3-j"> <span class="input-group-label">Energy</span> <input class="input-group-field" type="number" id="cir3-j-num"/> <div class="input-group-button"> <select id="cir3-j-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">J</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //j v s = a
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation and the Coulomb*Volt/Joule Relation.</h5><br /><input style="display: none;" id="cir3-var" value="2" disabled type="number"/> <p>How many Amps did we have if we measured <span id="cir3-j"></span> joules, at <span id="cir3-v"></span> volts, over <span id="cir3-s"></span> seconds?</p><input style="display: none;" id="cir3-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir3-a"> <span class="input-group-label">Current</span> <input class="input-group-field" type="number" id="cir3-a-num"/> <div class="input-group-button"> <select id="cir3-a-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">A</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //j v a = s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation and the Coulomb*Volt/Joule Relation.</h5><br /><input style="display: none;" id="cir3-var" value="3" disabled type="number"/> <p>How much time passed if we measured <span id="cir3-j"></span> joules, at <span id="cir3-v"></span> volts, with <span id="cir3-a"></span> amps?</p><input style="display: none;" id="cir3-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-a-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir3-s"> <span class="input-group-label">Time</span> <input class="input-group-field" type="number" id="cir3-s-num"/> <div class="input-group-button"> <select id="cir3-s-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">s</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 4:
                    //j a s = v
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Coulomb*Volt / Joule Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation and the Coulomb*Volt/Joule Relation.</h5><br /><input style="display: none;" id="cir3-var" value="4" disabled type="number"/> <p>How many Volts did we have if we measured <span id="cir3-j"></span> joules, with <span id="cir3-a"></span> amps, over <span id="cir3-s"></span> seconds?</p><input style="display: none;" id="cir3-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir3-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir3-v"> <span class="input-group-label">EMF</span> <input class="input-group-field" type="number" id="cir3-v-num"/> <div class="input-group-button"> <select id="cir3-v-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">V</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
        case "4":
            document.getElementById('cir-value').value = 4;
            var varation = randomWholeNumber(1, 3);
            switch (varation) {
                case 1:
                    //v = a * r
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Ohm\'s Law Relation</h2><h5>Provides problems where you find values based on the relation between EMF, current, and resistance.</h5><br /><input style="display: none;" id="cir4-var" value="1" disabled type="number"/> <p>What was the potential differential if we had <span id="cir4-a"></span> amps with <span id="cir4-r"></span> ohms?</p><input style="display: none;" id="cir4-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-r-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir4-v"> <span class="input-group-label">EMF</span> <input class="input-group-field" type="number" id="cir4-v-num"/> <div class="input-group-button"> <select id="cir4-v-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">V</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //a = v/r
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Ohm\'s Law Relation</h2><h5>Provides problems where you find values based on the relation between EMF, current, and resistance.</h5><br /><input style="display: none;" id="cir4-var" value="2" disabled type="number"/> <p>What was the current if we measured <span id="cir4-v"></span> volts and <span id="cir4-r"></span> ohms?</p><input style="display: none;" id="cir4-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-r-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir4-a"> <span class="input-group-label">Current</span> <input class="input-group-field" type="number" id="cir4-a-num"/> <div class="input-group-button"> <select id="cir4-a-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">A</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //r = v/a
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Ohm\'s Law Relation</h2><h5>Provides problems where you find values based on the relation between EMF, current, and resistance.</h5><br /><input style="display: none;" id="cir4-var" value="3" disabled type="number"/> <p>How much resistance was in the circuit if we had <span id="cir4-v"></span> volts with <span id="cir4-a"></span> amps?</p><input style="display: none;" id="cir4-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir4-a-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir4-r"> <span class="input-group-label">Resistance</span> <input class="input-group-field" type="number" id="cir4-r-num"/> <div class="input-group-button"> <select id="cir4-r-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">&#937;</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
         case "5":
            document.getElementById('cir-value').value = 5;
            var varation = randomWholeNumber(1, 6);
            switch (varation) {
                case 1:
                    //c = i r j
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Ohm\'s Law Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, and Ohm\'s Law Relation.</h5><br /><input style="display: none;" id="cir5-var" value="1" disabled type="number"/> <p>How much of a charge did we have with a resistance of <span id="cir5-r"></span> ohms, at <span id="cir5-a"></span> amps, using <span id="cir5-j"></span> joules of energy?</p><input style="display: none;" id="cir5-r-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-j-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir5-c"> <span class="input-group-label">Charge</span> <input class="input-group-field" type="number" id="cir5-c-num"/> <div class="input-group-button"> <select id="cir5-c-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">C</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //a = j c r
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Ohm\'s Law Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, and Ohm\'s Law Relation.</h5><br /><input style="display: none;" id="cir5-var" value="2" disabled type="number"/> <p>How much of a current would we expect with a resistance of <span id="cir5-r"></span> ohms, with a charge of <span id="cir5-c"></span>C, using <span id="cir5-j"></span> joules of energy?</p><input style="display: none;" id="cir5-r-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-c-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-j-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir5-a"> <span class="input-group-label">Current</span> <input class="input-group-field" type="number" id="cir5-a-num"/> <div class="input-group-button"> <select id="cir5-a-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">A</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //j = v r s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Ohm\'s Law Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, and Ohm\'s Law Relation.</h5><br /><input style="display: none;" id="cir5-var" value="3" disabled type="number"/> <p>How much energy did we use with a resistance of <span id="cir5-r"></span> ohms and <span id="cir5-v"></span> volts, over a period of <span id="cir5-s"></span> seconds?</p><input style="display: none;" id="cir5-r-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir5-j"> <span class="input-group-label">Energy</span> <input class="input-group-field" type="number" id="cir5-j-num"/> <div class="input-group-button"> <select id="cir5-j-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">J</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 4:
                    //s = v r j
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Ohm\'s Law Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, and Ohm\'s Law Relation.</h5><br /><input style="display: none;" id="cir5-var" value="4" disabled type="number"/> <p>How long it it take for us to use <span id="cir5-j"></span> joules of energy with a resistance of <span id="cir5-r"></span> ohms and <span id="cir5-v"></span> volts?</p><input style="display: none;" id="cir5-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-r-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-v-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir5-s"> <span class="input-group-label">Time</span> <input class="input-group-field" type="number" id="cir5-s-num"/> <div class="input-group-button"> <select id="cir5-s-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">s</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 5:
                    //v = c s r
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Ohm\'s Law Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, and Ohm\'s Law Relation.</h5><br /><input style="display: none;" id="cir5-var" value="5" disabled type="number"/> <p>How much a potential differential was present if we had a charge of <span id="cir5-c"></span>C with a resistance of <span id="cir5-r"></span> ohms over <span id="cir5-s"></span> seconds?</p><input style="display: none;" id="cir5-c-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-r-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir5-v"> <span class="input-group-label">EMF</span> <input class="input-group-field" type="number" id="cir5-v-num"/> <div class="input-group-button"> <select id="cir5-v-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">V</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 6:
                    //r = a s j
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Ohm\'s Law Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, and Ohm\'s Law Relation.</h5><br /><input style="display: none;" id="cir5-var" value="6" disabled type="number"/> <p>How much resistance exists if we used <span id="cir5-j"></span> joules of energy with a current of <span id="cir5-a"></span> amps over <span id="cir5-s"></span> seconds?</p><input style="display: none;" id="cir5-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir5-r"> <span class="input-group-label">Resistance</span> <input class="input-group-field" type="number" id="cir5-r-num"/> <div class="input-group-button"> <select id="cir5-r-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">R</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
		case "6":
			document.getElementById('cir-value').value = 6;
            var varation = randomWholeNumber(1, 3);
            switch (varation) {
                case 1:
                    //j = w * s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Joule / Watt*Second Relation</h2><h5>Provides problems where you find values based on the relation between energy, power, and time passed.</h5><br /><input style="display: none;" id="cir6-var" value="1" disabled type="number"/> <p>How much energy was utilized if we had <span id="cir6-p"></span> watts over <span id="cir6-s"></span> seconds?</p><input style="display: none;" id="cir6-p-num" value="" disabled type="number"/> <input style="display: none;" id="cir6-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir6-j"> <span class="input-group-label">Energy</span> <input class="input-group-field" type="number" id="cir6-j-num"/> <div class="input-group-button"> <select id="cir6-j-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">J</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //w = j/s
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Joule / Watt*Second Relation</h2><h5>Provides problems where you find values based on the relation between energy, power, and time passed.</h5><br /><input style="display: none;" id="cir6-var" value="2" disabled type="number"/> <p>How power was applied if we utilized <span id="cir6-j"></span> joules over <span id="cir6-s"></span> seconds?</p><input style="display: none;" id="cir6-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir6-s-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir6-p"> <span class="input-group-label">Power</span> <input class="input-group-field" type="number" id="cir6-p-num"/> <div class="input-group-button"> <select id="cir6-p-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">W</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //s = j/w
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Joule / Watt*Second Relation</h2><h5>Provides problems where you find values based on the relation between energy, power, and time passed.</h5><br /><input style="display: none;" id="cir6-var" value="3" disabled type="number"/> <p>How much time passed if we utilized <span id="cir6-j"></span> joules with <span id="cir6-p"></span> watts applied?</p><input style="display: none;" id="cir6-j-num" value="" disabled type="number"/> <input style="display: none;" id="cir6-p-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir6-s"> <span class="input-group-label">Time</span> <input class="input-group-field" type="number" id="cir6-s-num"/> <div class="input-group-button"> <select id="cir6-s-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">s</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
			}
			break;
		case "7":
			document.getElementById('cir-value').value = 7;
            var varation = randomWholeNumber(1, 3);
            switch (varation) {
                case 1:
                    //p = v * i
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Watt\'s Law Relation</h2><h5>Provides problems where you find values based on the relation between power, EMF, and current.</h5><br /><input style="display: none;" id="cir7-var" value="1" disabled type="number"/> <p>How much power was created with a potential differential of <span id="cir7-v"></span> volts driving a current of <span id="cir7-a"></span> amps?</p><input style="display: none;" id="cir7-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir7-a-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir7-p"> <span class="input-group-label">Power</span> <input class="input-group-field" type="number" id="cir7-p-num"/> <div class="input-group-button"> <select id="cir7-p-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">W</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //v = p/i
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Watt\'s Law Relation</h2><h5>Provides problems where you find values based on the relation between power, EMF, and current.</h5><br /><input style="display: none;" id="cir7-var" value="2" disabled type="number"/> <p>How strong was the electromagnetic force if we had <span id="cir7-p"></span> watts of work with <span id="cir7-a"></span> ampere?</p><input style="display: none;" id="cir7-p-num" value="" disabled type="number"/> <input style="display: none;" id="cir7-a-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir7-v"> <span class="input-group-label">EMF</span> <input class="input-group-field" type="number" id="cir7-v-num"/> <div class="input-group-button"> <select id="cir7-v-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">V</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //i = p/v
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Watt\'s Law Relation</h2><h5>Provides problems where you find values based on the relation between power, EMF, and current.</h5><br /><input style="display: none;" id="cir7-var" value="3" disabled type="number"/> <p>How manys amps were present with a potential differential of <span id="cir7-v"></span> volts driving <span id="cir7-p"></span> watts of power?</p><input style="display: none;" id="cir7-v-num" value="" disabled type="number"/> <input style="display: none;" id="cir7-p-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir7-a"> <span class="input-group-label">Current</span> <input class="input-group-field" type="number" id="cir7-a-num"/> <div class="input-group-button"> <select id="cir7-a-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">A</span> </div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
			}
			break;
		case "8":
			document.getElementById('cir-value').value = 8;
            var varation = randomWholeNumber(1, 13);
            switch (varation) {
				case 1:
					//v = c s r
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"> <div class="small-12 cell"> <h2>Integrated Watt\'s Law Relation</h2><h5>Provides problems where you find values utilizing the Coulomb/Ampere Relation, Coulomb*Volt/Joule Relation, Ohm\'s Law Relation, Joule/Watt*Second, and Watt\'s Law Relation.</h5><br /><input style="display: none;" id="cir8-var" value="1" disabled type="number"/> <p>How much of a charge did we have with a resistance of <span id="cir5-r"></span> ohms, at <span id="cir5-a"></span> amps, using <span id="cir5-j"></span> joules of energy?</p><input style="display: none;" id="cir5-r-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-a-num" value="" disabled type="number"/> <input style="display: none;" id="cir5-j-num" value="" disabled type="number"/> <div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir5-c"> <span class="input-group-label">Charge</span> <input class="input-group-field" type="number" id="cir5-c-num"/> <div class="input-group-button"> <select id="cir5-c-not"> <option value="T">T</option> <option value="G">G</option> <option value="M">M</option> <option value="k">k</option> <option value="." selected>.</option> <option value="m">m</option> <option value="mu">μ</option> <option value="n">n</option> <option value="p">p</option> </select> </div><span class="input-group-label">C</span> </div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 2:
					//v = p s c
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 3:
					//r = p s c
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 4:	
					//a = j v s
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 5:	
					//a = j c r
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 6:	
					//p = v c s
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 7:	
					//p = c v s
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 8:	
					//c = a j p
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 9:	
					//c = p s v
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 10:	
					//j = c a r
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 11:	
					//j = p c a
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 12:	
					//s = j v a
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 13:	
					//s = j v r
					
					generate_cir[document.getElementById('cir-value').value]();
					break;
                default:
			}
			break;
		case "9":
			document.getElementById('cir-value').value = 9;
            var varation = randomWholeNumber(1, 4);
			switch (varation) {
				case 1:
					//3 band
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Through-hole Color Code</h2><h5></h5><br /><input style="display:none;" id="cir9-var" value="1" disabled type="number"><input style="display:none;" id="cir9-ring0" value="" disabled type="number"><input style="display:none;" id="cir9-ring1" value="" disabled type="number"><input style="display:none;" id="cir9-ring2" value="" disabled type="number"><input style="display:none;" id="cir9-ring3" value="" disabled type="number"><input style="display:none;" id="cir9-ring4" value="" disabled type="number"><input style="display:none;" id="cir9-ring5" value="" disabled type="number"><div class="resitor"><div id="resistor" title="Resistor"><div id="ring0" class="ring"></div><div id="ring1" class="ring"></div><div id="ring2" class="ring"></div><div id="ring3" class="ring"></div><div id="ring4" class="ring"></div><div id="ring5" class="ring"></div></div></div><br /><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-r"><span class="input-group-label">Resistance</span><input class="input-group-field" type="number" id="cir9-r-num"><div class="input-group-button"><select id="cir9-r-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected="">.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-t"><span class="input-group-label">Tolerance</span><input class="input-group-field" type="number" id="cir9-t-num"><span class="input-group-label">%</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-tcr"><span class="input-group-label">TCR</span><input class="input-group-field" type="number" id="cir9-tcr-num"><span class="input-group-label">ppm/K</span></div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 2:
					//4 band
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Through-hole Color Code</h2><h5></h5><br /><input style="display:none;" id="cir9-var" value="2" disabled type="number"><input style="display:none;" id="cir9-ring0" value="" disabled type="number"><input style="display:none;" id="cir9-ring1" value="" disabled type="number"><input style="display:none;" id="cir9-ring2" value="" disabled type="number"><input style="display:none;" id="cir9-ring3" value="" disabled type="number"><input style="display:none;" id="cir9-ring4" value="" disabled type="number"><input style="display:none;" id="cir9-ring5" value="" disabled type="number"><div class="resitor"><div id="resistor" title="Resistor"><div id="ring0" class="ring"></div><div id="ring1" class="ring"></div><div id="ring2" class="ring"></div><div id="ring3" class="ring"></div><div id="ring4" class="ring"></div><div id="ring5" class="ring"></div></div></div><br /><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-r"><span class="input-group-label">Resistance</span><input class="input-group-field" type="number" id="cir9-r-num"><div class="input-group-button"><select id="cir9-r-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected="">.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-t"><span class="input-group-label">Tolerance</span><input class="input-group-field" type="number" id="cir9-t-num"><span class="input-group-label">%</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-tcr"><span class="input-group-label">TCR</span><input class="input-group-field" type="number" id="cir9-tcr-num"><span class="input-group-label">ppm/K</span></div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 3:
					//5 band
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Through-hole Color Code</h2><h5></h5><br /><input style="display:none;" id="cir9-var" value="3" disabled type="number"><input style="display:none;" id="cir9-ring0" value="" disabled type="number"><input style="display:none;" id="cir9-ring1" value="" disabled type="number"><input style="display:none;" id="cir9-ring2" value="" disabled type="number"><input style="display:none;" id="cir9-ring3" value="" disabled type="number"><input style="display:none;" id="cir9-ring4" value="" disabled type="number"><input style="display:none;" id="cir9-ring5" value="" disabled type="number"><div class="resitor"><div id="resistor" title="Resistor"><div id="ring0" class="ring"></div><div id="ring1" class="ring"></div><div id="ring2" class="ring"></div><div id="ring3" class="ring"></div><div id="ring4" class="ring"></div><div id="ring5" class="ring"></div></div></div><br /><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-r"><span class="input-group-label">Resistance</span><input class="input-group-field" type="number" id="cir9-r-num"><div class="input-group-button"><select id="cir9-r-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected="">.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-t"><span class="input-group-label">Tolerance</span><input class="input-group-field" type="number" id="cir9-t-num"><span class="input-group-label">%</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-tcr"><span class="input-group-label">TCR</span><input class="input-group-field" type="number" id="cir9-tcr-num"><span class="input-group-label">ppm/K</span></div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 4:
					//6 band
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Through-hole Color Code</h2><h5></h5><br /><input style="display:none;" id="cir9-var" value="4" disabled type="number"><input style="display:none;" id="cir9-ring0" value="" disabled type="number"><input style="display:none;" id="cir9-ring1" value="" disabled type="number"><input style="display:none;" id="cir9-ring2" value="" disabled type="number"><input style="display:none;" id="cir9-ring3" value="" disabled type="number"><input style="display:none;" id="cir9-ring4" value="" disabled type="number"><input style="display:none;" id="cir9-ring5" value="" disabled type="number"><div class="resitor"><div id="resistor" title="Resistor"><div id="ring0" class="ring"></div><div id="ring1" class="ring"></div><div id="ring2" class="ring"></div><div id="ring3" class="ring"></div><div id="ring4" class="ring"></div><div id="ring5" class="ring"></div></div></div><br /><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-r"><span class="input-group-label">Resistance</span><input class="input-group-field" type="number" id="cir9-r-num"><div class="input-group-button"><select id="cir9-r-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected="">.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-t"><span class="input-group-label">Tolerance</span><input class="input-group-field" type="number" id="cir9-t-num"><span class="input-group-label">%</span></div></div></div><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir9-tcr"><span class="input-group-label">TCR</span><input class="input-group-field" type="number" id="cir9-tcr-num"><span class="input-group-label">ppm/K</span></div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				default:
				
			}
			break;
		case "10":
			document.getElementById('cir-value').value = 10;
            var varation = randomWholeNumber(1, 3);
			switch (varation) {
				case 1:
					//3 digit
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>SMD Number Codes</h2><h5></h5><br /><input style="display:none;" id="cir10-var" value="1" disabled type="number"><input style="display:none;" id="cir10-digit1" value="" disabled type="number"><input style="display:none;" id="cir10-digit2" value="" disabled type="number"><input style="display:none;" id="cir10-digit3" value="" disabled type="number"><input style="display:none;" id="cir10-digit4" value="" disabled type="number"><div class="smd"><div id="smd" title="Resistor"><div id="SMDtext"></div></div></div><br /><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir10-r"><span class="input-group-label">Resistance</span><input class="input-group-field" type="number" id="cir10-r-num"><div class="input-group-button"><select id="cir10-r-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected="">.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 2:
					//4 digit
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>SMD Number Codes</h2><h5></h5><br /><input style="display:none;" id="cir10-var" value="2" disabled type="number"><input style="display:none;" id="cir10-digit1" value="" disabled type="number"><input style="display:none;" id="cir10-digit2" value="" disabled type="number"><input style="display:none;" id="cir10-digit3" value="" disabled type="number"><input style="display:none;" id="cir10-digit4" value="" disabled type="number"><div class="smd"><div id="smd" title="Resistor"><div id="SMDtext"></div></div></div><br /><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir10-r"><span class="input-group-label">Resistance</span><input class="input-group-field" type="number" id="cir10-r-num"><div class="input-group-button"><select id="cir10-r-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected="">.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				case 3:
					//EIA 96
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>SMD Number Codes</h2><h5></h5><br /><input style="display:none;" id="cir10-var" value="3" disabled type="number"><input style="display:none;" id="cir10-digit1" value="" disabled type="number"><input style="display:none;" id="cir10-digit2" value="" disabled type="number"><input style="display:none;" id="cir10-digit3" value="" disabled type="number"><input style="display:none;" id="cir10-digit4" value="" disabled type="number"><div class="smd"><div id="smd" title="Resistor"><div id="SMDtext"></div></div></div><br /><div class="grid-x"><div class="small-4 cell"><div class="input-group" id="cir10-r"><span class="input-group-label">Resistance</span><input class="input-group-field" type="number" id="cir10-r-num"><div class="input-group-button"><select id="cir10-r-not"><option value="T">T</option><option value="G">G</option><option value="M">M</option><option value="k">k</option><option value="." selected="">.</option><option value="m">m</option><option value="mu">μ</option><option value="n">n</option><option value="p">p</option></select></div><span class="input-group-label">Ω</span></div></div></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				default:
				
			}
			break;
		case "11":
			document.getElementById('cir-value').value = 11;
            var varation = randomWholeNumber(1, 1);
			switch (varation) {
				case 1:
					//auto-adjusted
					document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Auto-Adjusted Display Oscilloscope</h2><h5></h5><br /><input style="display:none;" id="cir11-var" value="1" disabled type="number"><div id="display" class=""></div><div id="timings"></div><div id="voltages"></div></div></div>';
					generate_cir[document.getElementById('cir-value').value]();
					break;
				default:
				
			}
			break;
		 case "12":
            document.getElementById('cir-value').value = 12;
            var varation = randomWholeNumber(1, 4);
            switch (varation) {
                case 1:
                    //bin to dec
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Binary Conversion</h2><h5>Provides problems where you convert between binary and decimal or hexadecimal.</h5><br /><input style="display:none;" id="cir12-var" value="1" disabled type="number"> <p>Convert <span id="cir12-BIN"></span> BIN to DEC.</p><input style="display:none;" id="cir12-BIN-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir12-DEC"> <span class="input-group-label">DEC</span> <input class="input-group-field" type="text" id="cir12-DEC-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //dec to bin
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Binary Conversion</h2><h5>Provides problems where you convert between binary and decimal or hexadecimal.</h5><br /><input style="display:none;" id="cir12-var" value="2" disabled type="number"> <p>Convert <span id="cir12-DEC"></span> DEC to BIN.</p><input style="display:none;" id="cir12-DEC-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir12-BIN"> <span class="input-group-label">BIN</span> <input class="input-group-field" type="text" id="cir12-BIN-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //bin to hex
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Binary Conversion</h2><h5>Provides problems where you convert between binary and decimal or hexadecimal.</h5><br /><input style="display:none;" id="cir12-var" value="3" disabled type="number"> <p>Convert <span id="cir12-BIN"></span> BIN to HEX.</p><input style="display:none;" id="cir12-BIN-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir12-HEX"> <span class="input-group-label">HEX</span> <input class="input-group-field" type="text" id="cir12-HEX-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
				case 4:
                    //hex to bin
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Binary Conversion</h2><h5>Provides problems where you convert between binary and decimal or hexadecimal.</h5><br /><input style="display:none;" id="cir12-var" value="4" disabled type="number"> <p>Convert <span id="cir12-HEX"></span> HEX to BIN.</p><input style="display:none;" id="cir12-HEX-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir12-BIN"> <span class="input-group-label">BIN</span> <input class="input-group-field" type="text" id="cir12-BIN-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
		case "13":
            document.getElementById('cir-value').value = 13;
            var varation = randomWholeNumber(1, 2);
            switch (varation) {
                case 1:
                    //oct to dec
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Octal Conversion</h2><h5>Provides problems where you convert between octal and decimal.</h5><br /><input style="display:none;" id="cir13-var" value="1" disabled type="number"> <p>Convert <span id="cir13-OCT"></span> OCT to DEC.</p><input style="display:none;" id="cir13-OCT-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir13-DEC"> <span class="input-group-label">DEC</span> <input class="input-group-field" type="text" id="cir13-DEC-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //dec to oct
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Octal Conversion</h2><h5>Provides problems where you convert between octal and decimal.</h5><br /><input style="display:none;" id="cir13-var" value="2" disabled type="number"> <p>Convert <span id="cir13-DEC"></span> DEC to OCT.</p><input style="display:none;" id="cir13-DEC-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir13-OCT"> <span class="input-group-label">OCT</span> <input class="input-group-field" type="text" id="cir13-OCT-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
		 case "14":
            document.getElementById('cir-value').value = 14;
            var varation = randomWholeNumber(1, 4);
            switch (varation) {
                case 1:
                    //hex to dec
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Hexadecimal Conversion</h2><h5>Provides problems where you convert between hexadecimal and decimal or binary.</h5><br /><input style="display:none;" id="cir14-var" value="1" disabled type="number"> <p>Convert <span id="cir14-HEX"></span> HEX to DEC.</p><input style="display:none;" id="cir14-HEX-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir14-DEC"> <span class="input-group-label">DEC</span> <input class="input-group-field" type="text" id="cir14-DEC-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 2:
                    //dec to hex
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Hexadecimal Conversion</h2><h5>Provides problems where you convert between hexadecimal and decimal or binary.</h5><br /><input style="display:none;" id="cir14-var" value="2" disabled type="number"> <p>Convert <span id="cir14-DEC"></span> DEC to HEX.</p><input style="display:none;" id="cir14-DEC-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir14-HEX"> <span class="input-group-label">HEX</span> <input class="input-group-field" type="text" id="cir14-HEX-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                case 3:
                    //bin to hex
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Hexadecimal Conversion</h2><h5>Provides problems where you convert between hexadecimal and decimal or binary.</h5><br /><input style="display:none;" id="cir14-var" value="3" disabled type="number"> <p>Convert <span id="cir14-BIN"></span> BIN to HEX.</p><input style="display:none;" id="cir14-BIN-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir14-HEX"> <span class="input-group-label">HEX</span> <input class="input-group-field" type="text" id="cir14-HEX-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
				case 4:
                    //hex to bin
                    document.getElementById('main-grid').innerHTML = '<div class="grid-x"><div class="small-12 cell"><h2>Hexadecimal Conversion</h2><h5>Provides problems where you convert between hexadecimal and decimal or binary.</h5><br /><input style="display:none;" id="cir14-var" value="4" disabled type="number"> <p>Convert <span id="cir14-HEX"></span> HEX to BIN.</p><input style="display:none;" id="cir14-HEX-num" value="" disabled type="text"><div class="grid-x"> <div class="small-4 cell"> <div class="input-group" id="cir14-BIN"> <span class="input-group-label">BIN</span> <input class="input-group-field" type="text" id="cir14-BIN-num"></div></div></div></div></div>';
                    generate_cir[document.getElementById('cir-value').value]();
                    break;
                default:
                    
            }
            break;
		default:
			restart();
	}
};

function check() {
  check_cir[document.getElementById('cir-value').value]();  
};

function show() {
  show_cir[document.getElementById('cir-value').value]();  
};


// Circuit Functions

var generate_cir = [];
var check_cir = [];
var show_cir = [];

//Coulomb/Ampere Relation
generate_cir[1] = function() {
    switch (document.getElementById('cir1-var').value) {
        case "1":
            document.getElementById('cir1-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir1-a').innerHTML = random_metric(document.getElementById('cir1-a-num').value);
            document.getElementById('cir1-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir1-s').innerHTML = random_metric(document.getElementById('cir1-s-num').value);
            break;
        case "2":
            document.getElementById('cir1-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir1-c').innerHTML = random_metric(document.getElementById('cir1-c-num').value);
            document.getElementById('cir1-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir1-s').innerHTML = random_metric(document.getElementById('cir1-s-num').value);
            break;
        case "3":
            document.getElementById('cir1-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir1-c').innerHTML = random_metric(document.getElementById('cir1-c-num').value);
            document.getElementById('cir1-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir1-a').innerHTML = random_metric(document.getElementById('cir1-a-num').value);
            break;
        default:
            
    }
};
check_cir[1] = function() {
    switch (document.getElementById('cir1-var').value) {
        case "1":
            var solution = document.getElementById('cir1-a-num').value * document.getElementById('cir1-s-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir1-c-num').value, document.getElementById('cir1-c-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir1-c').classList.remove('alert');
				document.getElementById('cir1-c').classList.remove('success2');
				document.getElementById('cir1-c').classList.remove('success10');
                document.getElementById('cir1-c').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir1-c').classList.remove('alert');
				document.getElementById('cir1-c').classList.remove('success');
				document.getElementById('cir1-c').classList.remove('success10');
                document.getElementById('cir1-c').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir1-c').classList.remove('alert');
				document.getElementById('cir1-c').classList.remove('success2');
				document.getElementById('cir1-c').classList.remove('success');
                document.getElementById('cir1-c').classList.add('success10');
			}
            else {
                document.getElementById('cir1-c').classList.remove('success');
				document.getElementById('cir1-c').classList.remove('success2');
				document.getElementById('cir1-c').classList.remove('success10');
                document.getElementById('cir1-c').classList.add('alert');
            }
            break;
        case "2":
            var solution = document.getElementById('cir1-c-num').value / document.getElementById('cir1-s-num').value;
            solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir1-a-num').value, document.getElementById('cir1-a-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir1-a').classList.remove('alert');
				document.getElementById('cir1-a').classList.remove('success2');
				document.getElementById('cir1-a').classList.remove('success10');
                document.getElementById('cir1-a').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir1-a').classList.remove('alert');
				document.getElementById('cir1-a').classList.remove('success');
				document.getElementById('cir1-a').classList.remove('success10');
                document.getElementById('cir1-a').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir1-a').classList.remove('alert');
				document.getElementById('cir1-a').classList.remove('success2');
				document.getElementById('cir1-a').classList.remove('success');
                document.getElementById('cir1-a').classList.add('success10');
			}
            else {
                document.getElementById('cir1-a').classList.remove('success');
				document.getElementById('cir1-a').classList.remove('success2');
				document.getElementById('cir1-a').classList.remove('success10');
                document.getElementById('cir1-a').classList.add('alert');
            }
            break;
        case "3":
            var solution = document.getElementById('cir1-c-num').value / document.getElementById('cir1-a-num').value;
            solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir1-s-num').value, document.getElementById('cir1-s-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir1-s').classList.remove('alert');
				document.getElementById('cir1-s').classList.remove('success2');
				document.getElementById('cir1-s').classList.remove('success10');
                document.getElementById('cir1-s').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir1-s').classList.remove('alert');
				document.getElementById('cir1-s').classList.remove('success');
				document.getElementById('cir1-s').classList.remove('success10');
                document.getElementById('cir1-s').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir1-s').classList.remove('alert');
				document.getElementById('cir1-s').classList.remove('success2');
				document.getElementById('cir1-s').classList.remove('success');
                document.getElementById('cir1-s').classList.add('success10');
			}
            else {
                document.getElementById('cir1-s').classList.remove('success');
				document.getElementById('cir1-s').classList.remove('success2');
				document.getElementById('cir1-s').classList.remove('success10');
                document.getElementById('cir1-s').classList.add('alert');
            }
            break;
        default:
            
    }
};
show_cir[1] = function() {
    switch (document.getElementById('cir1-var').value) {
        case "1":
            var solution = document.getElementById('cir1-a-num').value * document.getElementById('cir1-s-num').value;
            solution = rounding(solution);
            document.getElementById('cir1-c-num').value = solution;
            document.getElementById('cir1-c').classList.remove('alert');
            document.getElementById('cir1-c').classList.remove('success');
			document.getElementById('cir1-c').classList.remove('success2');
			document.getElementById('cir1-c').classList.remove('success10');
            document.getElementById('cir1-c').classList.add('info');
            document.getElementById('cir1-c-num').disabled = true;
            document.getElementById('cir1-c-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var solution = document.getElementById('cir1-c-num').value / document.getElementById('cir1-s-num').value;
            solution = rounding(solution);
            document.getElementById('cir1-a-num').value = solution;
            document.getElementById('cir1-a').classList.remove('alert');
            document.getElementById('cir1-a').classList.remove('success');
			document.getElementById('cir1-a').classList.remove('success2');
			document.getElementById('cir1-a').classList.remove('success10');
            document.getElementById('cir1-a').classList.add('info');
            document.getElementById('cir1-a-num').disabled = true;
            document.getElementById('cir1-a-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var solution = document.getElementById('cir1-c-num').value / document.getElementById('cir1-a-num').value;
            solution = rounding(solution);
            document.getElementById('cir1-s-num').value = solution;
            document.getElementById('cir1-s').classList.remove('alert');
            document.getElementById('cir1-s').classList.remove('success');
			document.getElementById('cir1-s').classList.remove('success2');
			document.getElementById('cir1-s').classList.remove('success10');
            document.getElementById('cir1-s').classList.add('info');
            document.getElementById('cir1-s-num').disabled = true;
            document.getElementById('cir1-s-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};


//Coulomb*Volt/Joule Relation
generate_cir[2] = function() {
    switch (document.getElementById('cir2-var').value) {
        case "1":
            document.getElementById('cir2-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir2-c').innerHTML = random_metric(document.getElementById('cir2-c-num').value);
            document.getElementById('cir2-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir2-v').innerHTML = random_metric(document.getElementById('cir2-v-num').value);
            break;
        case "2":
            document.getElementById('cir2-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir2-j').innerHTML = random_metric(document.getElementById('cir2-j-num').value);
            document.getElementById('cir2-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir2-v').innerHTML = random_metric(document.getElementById('cir2-v-num').value);
            break;
        case "3":
            document.getElementById('cir2-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir2-j').innerHTML = random_metric(document.getElementById('cir2-j-num').value);
            document.getElementById('cir2-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir2-c').innerHTML = random_metric(document.getElementById('cir2-c-num').value);
            break;
        default:
            
    }
};
check_cir[2] = function() {
    switch (document.getElementById('cir2-var').value) {
        case "1":
            var solution = document.getElementById('cir2-c-num').value * document.getElementById('cir2-v-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir2-j-num').value, document.getElementById('cir2-j-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir2-j').classList.remove('alert');
				document.getElementById('cir2-j').classList.remove('success2');
				document.getElementById('cir2-j').classList.remove('success10');
                document.getElementById('cir2-j').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir2-j').classList.remove('alert');
				document.getElementById('cir2-j').classList.remove('success');
				document.getElementById('cir2-j').classList.remove('success10');
                document.getElementById('cir2-j').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir2-j').classList.remove('alert');
				document.getElementById('cir2-j').classList.remove('success');
				document.getElementById('cir2-j').classList.remove('success2');
                document.getElementById('cir2-j').classList.add('success10');
			}
            else {
                document.getElementById('cir2-j').classList.remove('success');
				document.getElementById('cir2-j').classList.remove('success2');
				document.getElementById('cir2-j').classList.remove('success10');
                document.getElementById('cir2-j').classList.add('alert');
            }
            break;
        case "2":
            var solution = document.getElementById('cir2-j-num').value / document.getElementById('cir2-v-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir2-c-num').value, document.getElementById('cir2-c-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir2-c').classList.remove('alert');
				document.getElementById('cir2-c').classList.remove('success2');
				document.getElementById('cir2-c').classList.remove('success10');
                document.getElementById('cir2-c').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir2-c').classList.remove('alert');
				document.getElementById('cir2-c').classList.remove('success');
				document.getElementById('cir2-c').classList.remove('success10');
                document.getElementById('cir2-c').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir2-c').classList.remove('alert');
				document.getElementById('cir2-c').classList.remove('success');
				document.getElementById('cir2-c').classList.remove('success2');
                document.getElementById('cir2-c').classList.add('success10');
			}
            else {
                document.getElementById('cir2-c').classList.remove('success');
				document.getElementById('cir2-c').classList.remove('success2');
				document.getElementById('cir2-c').classList.remove('success10');
                document.getElementById('cir2-c').classList.add('alert');
            }
            break;
        case "3":
            var solution = document.getElementById('cir2-j-num').value / document.getElementById('cir2-c-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir2-v-num').value, document.getElementById('cir2-v-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir2-v').classList.remove('alert');
				document.getElementById('cir2-v').classList.remove('success2');
				document.getElementById('cir2-v').classList.remove('success10');
                document.getElementById('cir2-v').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir2-v').classList.remove('alert');
				document.getElementById('cir2-v').classList.remove('success');
				document.getElementById('cir2-v').classList.remove('success10');
                document.getElementById('cir2-v').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir2-v').classList.remove('alert');
				document.getElementById('cir2-v').classList.remove('success');
				document.getElementById('cir2-v').classList.remove('success2');
                document.getElementById('cir2-v').classList.add('success10');
			}
            else {
                document.getElementById('cir2-v').classList.remove('success');
				document.getElementById('cir2-v').classList.remove('success2');
				document.getElementById('cir2-v').classList.remove('success10');
                document.getElementById('cir2-v').classList.add('alert');
            }
            break;
        default:
            
    }
};
show_cir[2] = function() {
    switch (document.getElementById('cir2-var').value) {
        case "1":
            var solution = document.getElementById('cir2-c-num').value * document.getElementById('cir2-v-num').value;
			solution = rounding(solution);
            document.getElementById('cir2-j-num').value = solution;
            document.getElementById('cir2-j').classList.remove('alert');
            document.getElementById('cir2-j').classList.remove('success');
			document.getElementById('cir2-j').classList.remove('success2');
			document.getElementById('cir2-j').classList.remove('success10');
            document.getElementById('cir2-j').classList.add('info');
            document.getElementById('cir2-j-num').disabled = true;
            document.getElementById('cir2-j-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var solution = document.getElementById('cir2-j-num').value / document.getElementById('cir2-v-num').value;
			solution = rounding(solution);
            document.getElementById('cir2-c-num').value = solution;
            document.getElementById('cir2-c').classList.remove('alert');
            document.getElementById('cir2-c').classList.remove('success');
			document.getElementById('cir2-c').classList.remove('success2');
			document.getElementById('cir2-c').classList.remove('success10');
            document.getElementById('cir2-c').classList.add('info');
            document.getElementById('cir2-c-num').disabled = true;
            document.getElementById('cir2-c-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":

            var solution = document.getElementById('cir2-j-num').value / document.getElementById('cir2-c-num').value;
			solution = rounding(solution);
            document.getElementById('cir2-v-num').value = solution;
            document.getElementById('cir2-v').classList.remove('alert');
            document.getElementById('cir2-v').classList.remove('success');
			document.getElementById('cir2-v').classList.remove('success2');
			document.getElementById('cir2-v').classList.remove('success10');
            document.getElementById('cir2-v').classList.add('info');
            document.getElementById('cir2-v-num').disabled = true;
            document.getElementById('cir2-v-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};


//Integrated Coulomb*Volt/Joule Relation
generate_cir[3] = function() {
    switch (document.getElementById('cir3-var').value) {
        case "1":
            document.getElementById('cir3-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir3-a').innerHTML = random_metric(document.getElementById('cir3-a-num').value);
            document.getElementById('cir3-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir3-s').innerHTML = random_metric(document.getElementById('cir3-s-num').value);
            document.getElementById('cir3-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir3-v').innerHTML = random_metric(document.getElementById('cir3-v-num').value);
            break;
        case "2":
            document.getElementById('cir3-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir3-j').innerHTML = random_metric(document.getElementById('cir3-j-num').value);
            document.getElementById('cir3-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir3-v').innerHTML = random_metric(document.getElementById('cir3-v-num').value);
            document.getElementById('cir3-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir3-s').innerHTML = random_metric(document.getElementById('cir3-s-num').value);
            break;
        case "3":
            document.getElementById('cir3-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir3-j').innerHTML = random_metric(document.getElementById('cir3-j-num').value);
            document.getElementById('cir3-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir3-v').innerHTML = random_metric(document.getElementById('cir3-v-num').value);
            document.getElementById('cir3-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir3-a').innerHTML = random_metric(document.getElementById('cir3-a-num').value);
            break;
        case "4":
            document.getElementById('cir3-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir3-j').innerHTML = random_metric(document.getElementById('cir3-j-num').value);
            document.getElementById('cir3-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir3-a').innerHTML = random_metric(document.getElementById('cir3-a-num').value);
            document.getElementById('cir3-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir3-s').innerHTML = random_metric(document.getElementById('cir3-s-num').value);
            break;
        default:
            
    }
};
check_cir[3] = function() {
    switch (document.getElementById('cir3-var').value) {
        case "1":
            var solution = (document.getElementById('cir3-a-num').value * document.getElementById('cir3-s-num').value) * document.getElementById('cir3-v-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir3-j-num').value, document.getElementById('cir3-j-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir3-j').classList.remove('alert');
				document.getElementById('cir3-j').classList.remove('success2');
				document.getElementById('cir3-j').classList.remove('success10');
                document.getElementById('cir3-j').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir3-j').classList.remove('alert');
				document.getElementById('cir3-j').classList.remove('success');
				document.getElementById('cir3-j').classList.remove('success10');
                document.getElementById('cir3-j').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir3-j').classList.remove('alert');
				document.getElementById('cir3-j').classList.remove('success');
				document.getElementById('cir3-j').classList.remove('success2');
                document.getElementById('cir3-j').classList.add('success10');
			}
            else {
                document.getElementById('cir3-j').classList.remove('success');
				document.getElementById('cir3-j').classList.remove('success2');
				document.getElementById('cir3-j').classList.remove('success10');
                document.getElementById('cir3-j').classList.add('alert');
            }
            break;
        case "2":
            var solution = (document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value) / document.getElementById('cir3-s-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir3-a-num').value, document.getElementById('cir3-a-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir3-a').classList.remove('alert');
				document.getElementById('cir3-a').classList.remove('success2');
				document.getElementById('cir3-a').classList.remove('success10');
                document.getElementById('cir3-a').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir3-a').classList.remove('alert');
				document.getElementById('cir3-a').classList.remove('success');
				document.getElementById('cir3-a').classList.remove('success10');
                document.getElementById('cir3-a').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir3-a').classList.remove('alert');
				document.getElementById('cir3-a').classList.remove('success');
				document.getElementById('cir3-a').classList.remove('success2');
                document.getElementById('cir3-a').classList.add('success10');
			}
            else {
                document.getElementById('cir3-a').classList.remove('success');
				document.getElementById('cir3-a').classList.remove('success2');
				document.getElementById('cir3-a').classList.remove('success10');
                document.getElementById('cir3-a').classList.add('alert');
            }
            break;
        case "3":
            var solution = (document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value) / document.getElementById('cir3-a-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir3-s-num').value, document.getElementById('cir3-s-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir3-s').classList.remove('alert');
				document.getElementById('cir3-s').classList.remove('success2');
				document.getElementById('cir3-s').classList.remove('success10');
                document.getElementById('cir3-s').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir3-s').classList.remove('alert');
				document.getElementById('cir3-s').classList.remove('success');
				document.getElementById('cir3-s').classList.remove('success10');
                document.getElementById('cir3-s').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir3-s').classList.remove('alert');
				document.getElementById('cir3-s').classList.remove('success');
				document.getElementById('cir3-s').classList.remove('success2');
                document.getElementById('cir3-s').classList.add('success10');
			}
            else {
                document.getElementById('cir3-s').classList.remove('success');
				document.getElementById('cir3-s').classList.remove('success2');
				document.getElementById('cir3-s').classList.remove('success10');
                document.getElementById('cir3-s').classList.add('alert');
            }
            break;
        case "4":
            var solution = document.getElementById('cir3-j-num').value / (document.getElementById('cir3-a-num').value * document.getElementById('cir3-s-num').value);
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir3-v-num').value, document.getElementById('cir3-v-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir3-v').classList.remove('alert');
				document.getElementById('cir3-v').classList.remove('success2');
				document.getElementById('cir3-v').classList.remove('success10');
                document.getElementById('cir3-v').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir3-v').classList.remove('alert');
				document.getElementById('cir3-v').classList.remove('success');
				document.getElementById('cir3-v').classList.remove('success10');
                document.getElementById('cir3-v').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir3-v').classList.remove('alert');
				document.getElementById('cir3-v').classList.remove('success');
				document.getElementById('cir3-v').classList.remove('success2');
                document.getElementById('cir3-v').classList.add('success10');
			}
            else {
                document.getElementById('cir3-v').classList.remove('success');
				document.getElementById('cir3-v').classList.remove('success2');
				document.getElementById('cir3-v').classList.remove('success10');
                document.getElementById('cir3-v').classList.add('alert');
            }
            break;
        default:
            
    }
};
show_cir[3] = function() {
    switch (document.getElementById('cir3-var').value) {
        case "1":
            var solution = (document.getElementById('cir3-a-num').value * document.getElementById('cir3-s-num').value) * document.getElementById('cir3-v-num').value;
			solution = rounding(solution);
            document.getElementById('cir3-j-num').value = solution;
            document.getElementById('cir3-j').classList.remove('alert');
            document.getElementById('cir3-j').classList.remove('success');
			document.getElementById('cir3-j').classList.remove('success2');
			document.getElementById('cir3-j').classList.remove('success10');
            document.getElementById('cir3-j').classList.add('info');
            document.getElementById('cir3-j-num').disabled = true;
            document.getElementById('cir3-j-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var solution = (document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value) / document.getElementById('cir3-s-num').value;
			solution = rounding(solution);
            document.getElementById('cir3-a-num').value = solution;
            document.getElementById('cir3-a').classList.remove('alert');
            document.getElementById('cir3-a').classList.remove('success');
			document.getElementById('cir3-a').classList.remove('success2');
			document.getElementById('cir3-a').classList.remove('success10');
            document.getElementById('cir3-a').classList.add('info');
            document.getElementById('cir3-a-num').disabled = true;
            document.getElementById('cir3-a-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var solution = (document.getElementById('cir3-j-num').value / document.getElementById('cir3-v-num').value) / document.getElementById('cir3-a-num').value;
			solution = rounding(solution);
            document.getElementById('cir3-s-num').value = solution;
            document.getElementById('cir3-s').classList.remove('alert');
            document.getElementById('cir3-s').classList.remove('success');
			document.getElementById('cir3-s').classList.remove('success2');
			document.getElementById('cir3-s').classList.remove('success10');
            document.getElementById('cir3-s').classList.add('info');
            document.getElementById('cir3-s-num').disabled = true;
            document.getElementById('cir3-s-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "4":
            var solution = document.getElementById('cir3-j-num').value / (document.getElementById('cir3-a-num').value * document.getElementById('cir3-s-num').value);
			solution = rounding(solution);
            document.getElementById('cir3-v-num').value = solution;
            document.getElementById('cir3-v').classList.remove('alert');
            document.getElementById('cir3-v').classList.remove('success');
			document.getElementById('cir3-v').classList.remove('success2');
			document.getElementById('cir3-v').classList.remove('success10');
            document.getElementById('cir3-v').classList.add('info');
            document.getElementById('cir3-v-num').disabled = true;
            document.getElementById('cir3-v-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};


//Ohm's Law Relation
generate_cir[4] = function() {
    switch (document.getElementById('cir4-var').value) {
        case "1":
            document.getElementById('cir4-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir4-a').innerHTML = random_metric(document.getElementById('cir4-a-num').value);
            document.getElementById('cir4-r-num').value = randomWholeNumber(230, 50000);
            document.getElementById('cir4-r').innerHTML = random_metric(document.getElementById('cir4-r-num').value);
            break;
        case "2":
            document.getElementById('cir4-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir4-v').innerHTML = numberWithCommas(document.getElementById('cir4-v-num').value);
            document.getElementById('cir4-r-num').value = randomWholeNumber(230, 50000);
            document.getElementById('cir4-r').innerHTML = random_metric(document.getElementById('cir4-r-num').value);
            break;
        case "3":
            document.getElementById('cir4-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir4-v').innerHTML = random_metric(document.getElementById('cir4-v-num').value);
            document.getElementById('cir4-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir4-a').innerHTML = random_metric(document.getElementById('cir4-a-num').value);
            break;
        default:
            
    }
};
check_cir[4] = function() {
    switch (document.getElementById('cir4-var').value) {
        case "1":
            var solution = document.getElementById('cir4-a-num').value * document.getElementById('cir4-r-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir4-v-num').value, document.getElementById('cir4-v-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir4-v').classList.remove('alert');
				document.getElementById('cir4-v').classList.remove('success2');
				document.getElementById('cir4-v').classList.remove('success10');
                document.getElementById('cir4-v').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir4-v').classList.remove('alert');
				document.getElementById('cir4-v').classList.remove('success');
				document.getElementById('cir4-v').classList.remove('success10');
                document.getElementById('cir4-v').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir4-v').classList.remove('alert');
				document.getElementById('cir4-v').classList.remove('success');
				document.getElementById('cir4-v').classList.remove('success2');
                document.getElementById('cir4-v').classList.add('success10');
			}
            else {
                document.getElementById('cir4-v').classList.remove('success');
				document.getElementById('cir4-v').classList.remove('success2');
				document.getElementById('cir4-v').classList.remove('success10');
                document.getElementById('cir4-v').classList.add('alert');
            }
            break;
        case "2":
            var solution = document.getElementById('cir4-v-num').value / document.getElementById('cir4-r-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir4-a-num').value, document.getElementById('cir4-a-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir4-a').classList.remove('alert');
				document.getElementById('cir4-a').classList.remove('success2');
				document.getElementById('cir4-a').classList.remove('success10');
                document.getElementById('cir4-a').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir4-a').classList.remove('alert');
				document.getElementById('cir4-a').classList.remove('success');
				document.getElementById('cir4-a').classList.remove('success10');
                document.getElementById('cir4-a').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir4-a').classList.remove('alert');
				document.getElementById('cir4-a').classList.remove('success');
				document.getElementById('cir4-a').classList.remove('success2');
                document.getElementById('cir4-a').classList.add('success10');
			}
            else {
                document.getElementById('cir4-a').classList.remove('success');
				document.getElementById('cir4-a').classList.remove('success2');
				document.getElementById('cir4-a').classList.remove('success10');
                document.getElementById('cir4-a').classList.add('alert');
            }
            break;
        case "3":
            var solution = document.getElementById('cir4-v-num').value / document.getElementById('cir4-a-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir4-r-num').value, document.getElementById('cir4-r-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir4-r').classList.remove('alert');
				document.getElementById('cir4-r').classList.remove('success2');
				document.getElementById('cir4-r').classList.remove('success10');
                document.getElementById('cir4-r').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir4-r').classList.remove('alert');
				document.getElementById('cir4-r').classList.remove('success');
				document.getElementById('cir4-r').classList.remove('success10');
                document.getElementById('cir4-r').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir4-r').classList.remove('alert');
				document.getElementById('cir4-r').classList.remove('success');
				document.getElementById('cir4-r').classList.remove('success2');
                document.getElementById('cir4-r').classList.add('success10');
			}
            else {
                document.getElementById('cir4-r').classList.remove('success');
				document.getElementById('cir4-r').classList.remove('success2');
				document.getElementById('cir4-r').classList.remove('success10');
                document.getElementById('cir4-r').classList.add('alert');
            }
            break;
        default:
            
    }
};
show_cir[4] = function() {
    switch (document.getElementById('cir4-var').value) {
        case "1":
            var solution = document.getElementById('cir4-a-num').value * document.getElementById('cir4-r-num').value;
			solution = rounding(solution);
            document.getElementById('cir4-v-num').value = solution;
            document.getElementById('cir4-v').classList.remove('alert');
            document.getElementById('cir4-v').classList.remove('success');
			document.getElementById('cir4-v').classList.remove('success2');
			document.getElementById('cir4-v').classList.remove('success10');
            document.getElementById('cir4-v').classList.add('info');
            document.getElementById('cir4-v-num').disabled = true;
            document.getElementById('cir4-v-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var solution = document.getElementById('cir4-v-num').value / document.getElementById('cir4-r-num').value;
			solution = rounding(solution);
            document.getElementById('cir4-a-num').value = solution;
            document.getElementById('cir4-a').classList.remove('alert');
            document.getElementById('cir4-a').classList.remove('success');
			document.getElementById('cir4-a').classList.remove('success2');
			document.getElementById('cir4-a').classList.remove('success10');
            document.getElementById('cir4-a').classList.add('info');
            document.getElementById('cir4-a-num').disabled = true;
            document.getElementById('cir4-a-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var solution = document.getElementById('cir4-v-num').value / document.getElementById('cir4-a-num').value;
			solution = rounding(solution);
            document.getElementById('cir4-r-num').value = solution;
            document.getElementById('cir4-r').classList.remove('alert');
            document.getElementById('cir4-r').classList.remove('success');
			document.getElementById('cir4-r').classList.remove('success2');
			document.getElementById('cir4-r').classList.remove('success10');
            document.getElementById('cir4-r').classList.add('info');
            document.getElementById('cir4-r-num').disabled = true;
            document.getElementById('cir4-r-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};


//Integrated Ohm's Law Relation
generate_cir[5] = function() {
    switch (document.getElementById('cir5-var').value) {
        case "1":
            document.getElementById('cir5-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir5-a').innerHTML = random_metric(document.getElementById('cir5-a-num').value);
            document.getElementById('cir5-r-num').value = randomWholeNumber(230, 50000);
            document.getElementById('cir5-r').innerHTML = random_metric(document.getElementById('cir5-r-num').value);
            document.getElementById('cir5-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir5-j').innerHTML = random_metric(document.getElementById('cir5-j-num').value);
            break;
        case "2":
            document.getElementById('cir5-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir5-j').innerHTML = random_metric(document.getElementById('cir5-j-num').value);
            document.getElementById('cir5-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir5-c').innerHTML = random_metric(document.getElementById('cir5-c-num').value);
            document.getElementById('cir5-r-num').value = randomWholeNumber(230, 50000);
            document.getElementById('cir5-r').innerHTML = random_metric(document.getElementById('cir5-r-num').value);
            break;
        case "3":
            document.getElementById('cir5-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir5-v').innerHTML = random_metric(document.getElementById('cir5-v-num').value);
            document.getElementById('cir5-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir5-s').innerHTML = random_metric(document.getElementById('cir5-s-num').value);
            document.getElementById('cir5-r-num').value = randomWholeNumber(230, 50000);
            document.getElementById('cir5-r').innerHTML = random_metric(document.getElementById('cir5-r-num').value);
            break;
        case "4":
            document.getElementById('cir5-v-num').value = randomWholeNumber(2, 24);
            document.getElementById('cir5-v').innerHTML = random_metric(document.getElementById('cir5-v-num').value);
            document.getElementById('cir5-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir5-j').innerHTML = random_metric(document.getElementById('cir5-j-num').value);
            document.getElementById('cir5-r-num').value = randomWholeNumber(230, 50000);
            document.getElementById('cir5-r').innerHTML = random_metric(document.getElementById('cir5-r-num').value);
            break;
        case "5":
            document.getElementById('cir5-c-num').value = randomDecimal(1, 50);
            document.getElementById('cir5-c').innerHTML = random_metric(document.getElementById('cir5-c-num').value);
            document.getElementById('cir5-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir5-s').innerHTML = random_metric(document.getElementById('cir5-s-num').value);
            document.getElementById('cir5-r-num').value = randomWholeNumber(230, 50000);
            document.getElementById('cir5-r').innerHTML = random_metric(document.getElementById('cir5-r-num').value);
            break;
         case "6":
            document.getElementById('cir5-a-num').value = randomDecimal(1, 50);
            document.getElementById('cir5-a').innerHTML = random_metric(document.getElementById('cir5-a-num').value);
            document.getElementById('cir5-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir5-s').innerHTML = random_metric(document.getElementById('cir5-s-num').value);
            document.getElementById('cir5-j-num').value = randomDecimal(10, 250);
            document.getElementById('cir5-j').innerHTML = random_metric(document.getElementById('cir5-j-num').value);
            break;
        default:
            
    }
};
check_cir[5] = function() {
    switch (document.getElementById('cir5-var').value) {
        case "1":
            var solution = document.getElementById('cir5-j-num').value / (document.getElementById('cir5-a-num').value * document.getElementById('cir5-r-num').value);
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir5-c-num').value, document.getElementById('cir5-c-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir5-c').classList.remove('alert');
				document.getElementById('cir5-c').classList.remove('success2');
				document.getElementById('cir5-c').classList.remove('success10');
                document.getElementById('cir5-c').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir5-c').classList.remove('alert');
				document.getElementById('cir5-c').classList.remove('success');
				document.getElementById('cir5-c').classList.remove('success10');
                document.getElementById('cir5-c').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir5-c').classList.remove('alert');
				document.getElementById('cir5-c').classList.remove('success');
				document.getElementById('cir5-c').classList.remove('success2');
                document.getElementById('cir5-c').classList.add('success10');
			}
            else {
                document.getElementById('cir5-c').classList.remove('success');
				document.getElementById('cir5-c').classList.remove('success2');
				document.getElementById('cir5-c').classList.remove('success10');
                document.getElementById('cir5-c').classList.add('alert');
            }
            break;
        case "2":
            var solution = (document.getElementById('cir5-j-num').value / document.getElementById('cir5-c-num').value) / document.getElementById('cir5-r-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir5-a-num').value, document.getElementById('cir5-a-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir5-a').classList.remove('alert');
				document.getElementById('cir5-a').classList.remove('success2');
				document.getElementById('cir5-a').classList.remove('success10');
                document.getElementById('cir5-a').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir5-a').classList.remove('alert');
				document.getElementById('cir5-a').classList.remove('success');
				document.getElementById('cir5-a').classList.remove('success10');
                document.getElementById('cir5-a').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir5-a').classList.remove('alert');
				document.getElementById('cir5-a').classList.remove('success');
				document.getElementById('cir5-a').classList.remove('success2');
                document.getElementById('cir5-a').classList.add('success10');
			}
            else {
                document.getElementById('cir5-a').classList.remove('success');
				document.getElementById('cir5-a').classList.remove('success2');
				document.getElementById('cir5-a').classList.remove('success10');
                document.getElementById('cir5-a').classList.add('alert');
            }
            break;
        case "3":
            var solution = ((document.getElementById('cir5-v-num').value / document.getElementById('cir5-r-num').value) * document.getElementById('cir5-s-num').value) * document.getElementById('cir5-v-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir5-j-num').value, document.getElementById('cir5-j-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir5-j').classList.remove('alert');
				document.getElementById('cir5-j').classList.remove('success2');
				document.getElementById('cir5-j').classList.remove('success10');
                document.getElementById('cir5-j').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir5-j').classList.remove('alert');
				document.getElementById('cir5-j').classList.remove('success');
				document.getElementById('cir5-j').classList.remove('success10');
                document.getElementById('cir5-j').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir5-j').classList.remove('alert');
				document.getElementById('cir5-j').classList.remove('success');
				document.getElementById('cir5-j').classList.remove('success2');
                document.getElementById('cir5-j').classList.add('success10');
			}
            else {
                document.getElementById('cir5-j').classList.remove('success');
				document.getElementById('cir5-j').classList.remove('success2');
				document.getElementById('cir5-j').classList.remove('success10');
                document.getElementById('cir5-j').classList.add('alert');
            }
            break;
        case "4":
            var solution = (document.getElementById('cir5-j-num').value / document.getElementById('cir5-v-num').value) / (document.getElementById('cir5-v-num').value / document.getElementById('cir5-r-num').value);
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir5-s-num').value, document.getElementById('cir5-s-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir5-s').classList.remove('alert');
				document.getElementById('cir5-s').classList.remove('success2');
				document.getElementById('cir5-s').classList.remove('success10');
                document.getElementById('cir5-s').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir5-s').classList.remove('alert');
				document.getElementById('cir5-s').classList.remove('success');
				document.getElementById('cir5-s').classList.remove('success10');
                document.getElementById('cir5-s').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir5-s').classList.remove('alert');
				document.getElementById('cir5-s').classList.remove('success');
				document.getElementById('cir5-s').classList.remove('success2');
                document.getElementById('cir5-s').classList.add('success10');
			}
            else {
                document.getElementById('cir5-s').classList.remove('success');
				document.getElementById('cir5-s').classList.remove('success2');
				document.getElementById('cir5-s').classList.remove('success10');
                document.getElementById('cir5-s').classList.add('alert');
            }
            break;
        case "5":
            var solution = (document.getElementById('cir5-c-num').value / document.getElementById('cir5-s-num').value) * document.getElementById('cir5-r-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir5-v-num').value, document.getElementById('cir5-v-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir5-v').classList.remove('alert');
				document.getElementById('cir5-v').classList.remove('success2');
				document.getElementById('cir5-v').classList.remove('success10');
                document.getElementById('cir5-v').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir5-v').classList.remove('alert');
				document.getElementById('cir5-v').classList.remove('success');
				document.getElementById('cir5-v').classList.remove('success10');
                document.getElementById('cir5-v').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir5-v').classList.remove('alert');
				document.getElementById('cir5-v').classList.remove('success');
				document.getElementById('cir5-v').classList.remove('success2');
                document.getElementById('cir5-v').classList.add('success10');
			}
            else {
                document.getElementById('cir5-v').classList.remove('success');
				document.getElementById('cir5-v').classList.remove('success2');
				document.getElementById('cir5-v').classList.remove('success10');
                document.getElementById('cir5-v').classList.add('alert');
            }
            break;
        case "6":
            var solution = (document.getElementById('cir5-j-num').value / (document.getElementById('cir5-a-num').value * document.getElementById('cir5-s-num').value)) / document.getElementById('cir5-a-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir5-r-num').value, document.getElementById('cir5-r-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir5-r').classList.remove('alert');
				document.getElementById('cir5-r').classList.remove('success2');
				document.getElementById('cir5-r').classList.remove('success10');
                document.getElementById('cir5-r').classList.add('success');
            }
			else if (per2Check(solution, answer)) {
				document.getElementById('cir5-r').classList.remove('alert');
				document.getElementById('cir5-r').classList.remove('success');
				document.getElementById('cir5-r').classList.remove('success10');
                document.getElementById('cir5-r').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir5-r').classList.remove('alert');
				document.getElementById('cir5-r').classList.remove('success');
				document.getElementById('cir5-r').classList.remove('success2');
                document.getElementById('cir5-r').classList.add('success10');
			}
            else {
                document.getElementById('cir5-r').classList.remove('success');
				document.getElementById('cir5-r').classList.remove('success2');
				document.getElementById('cir5-r').classList.remove('success10');
                document.getElementById('cir5-r').classList.add('alert');
            }
            break;
        default:
            
    }
};
show_cir[5] = function() {
    switch (document.getElementById('cir5-var').value) {
        case "1":
            var solution = document.getElementById('cir5-j-num').value / (document.getElementById('cir5-a-num').value * document.getElementById('cir5-r-num').value);
			solution = rounding(solution);
            document.getElementById('cir5-c-num').value = solution;
            document.getElementById('cir5-c').classList.remove('alert');
            document.getElementById('cir5-c').classList.remove('success');
			document.getElementById('cir5-c').classList.remove('success2');
			document.getElementById('cir5-c').classList.remove('success10');
            document.getElementById('cir5-c').classList.add('info');
            document.getElementById('cir5-c-num').disabled = true;
            document.getElementById('cir5-c-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var solution = (document.getElementById('cir5-j-num').value / document.getElementById('cir5-c-num').value) / document.getElementById('cir5-r-num').value;
			solution = rounding(solution);
            document.getElementById('cir5-a-num').value = solution;
            document.getElementById('cir5-a').classList.remove('alert');
            document.getElementById('cir5-a').classList.remove('success');
			document.getElementById('cir5-a').classList.remove('success2');
			document.getElementById('cir5-a').classList.remove('success10');
            document.getElementById('cir5-a').classList.add('info');
            document.getElementById('cir5-a-num').disabled = true;
            document.getElementById('cir5-a-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var solution = ((document.getElementById('cir5-v-num').value / document.getElementById('cir5-r-num').value) * document.getElementById('cir5-s-num').value) * document.getElementById('cir5-v-num').value;
			solution = rounding(solution);
            document.getElementById('cir5-j-num').value = solution;
            document.getElementById('cir5-j').classList.remove('alert');
            document.getElementById('cir5-j').classList.remove('success');
			document.getElementById('cir5-j').classList.remove('success2');
			document.getElementById('cir5-j').classList.remove('success10');
            document.getElementById('cir5-j').classList.add('info');
            document.getElementById('cir5-j-num').disabled = true;
            document.getElementById('cir5-j-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "4":
            var solution = (document.getElementById('cir5-j-num').value / document.getElementById('cir5-v-num').value) / (document.getElementById('cir5-v-num').value / document.getElementById('cir5-r-num').value);
			solution = rounding(solution);
            document.getElementById('cir5-s-num').value = solution;
            document.getElementById('cir5-s').classList.remove('alert');
            document.getElementById('cir5-s').classList.remove('success');
			document.getElementById('cir5-s').classList.remove('success2');
			document.getElementById('cir5-s').classList.remove('success10');
            document.getElementById('cir5-s').classList.add('info');
            document.getElementById('cir5-s-num').disabled = true;
            document.getElementById('cir5-s-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "5":
            var solution = (document.getElementById('cir5-c-num').value / document.getElementById('cir5-s-num').value) * document.getElementById('cir5-r-num').value;
			solution = rounding(solution);
            document.getElementById('cir5-v-num').value = solution;
            document.getElementById('cir5-v').classList.remove('alert');
            document.getElementById('cir5-v').classList.remove('success');
			document.getElementById('cir5-v').classList.remove('success2');
			document.getElementById('cir5-v').classList.remove('success10');
            document.getElementById('cir5-v').classList.add('info');
            document.getElementById('cir5-v-num').disabled = true;
            document.getElementById('cir5-v-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "6":
            var solution = (document.getElementById('cir5-j-num').value / (document.getElementById('cir5-a-num').value * document.getElementById('cir5-s-num').value)) / document.getElementById('cir5-a-num').value;
			solution = rounding(solution);
            document.getElementById('cir5-r-num').value = solution;
            document.getElementById('cir5-r').classList.remove('alert');
            document.getElementById('cir5-r').classList.remove('success');
			document.getElementById('cir5-r').classList.remove('success2');
			document.getElementById('cir5-r').classList.remove('success10');
            document.getElementById('cir5-r').classList.add('info');
            document.getElementById('cir5-r-num').disabled = true;
            document.getElementById('cir5-r-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};



//Joule/Watt*Second Relation
generate_cir[6] = function() {
    switch (document.getElementById('cir6-var').value) {
        case "1":
            document.getElementById('cir6-p-num').value = randomDecimal(1, 50);
            document.getElementById('cir6-p').innerHTML = random_metric(document.getElementById('cir6-p-num').value);
            document.getElementById('cir6-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir6-s').innerHTML = random_metric(document.getElementById('cir6-s-num').value);
            break;
        case "2":
            document.getElementById('cir6-j-num').value = randomDecimal(1, 50);
            document.getElementById('cir6-j').innerHTML = random_metric(document.getElementById('cir6-j-num').value);
            document.getElementById('cir6-s-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir6-s').innerHTML = random_metric(document.getElementById('cir6-s-num').value);
            break;
        case "3":
            document.getElementById('cir6-j-num').value = randomDecimal(1, 50);
            document.getElementById('cir6-j').innerHTML = random_metric(document.getElementById('cir6-j-num').value);
            document.getElementById('cir6-p-num').value = randomDecimal(1, 50);
            document.getElementById('cir6-p').innerHTML = random_metric(document.getElementById('cir6-p-num').value);
            break;
        default:
            
    }
};
check_cir[6] = function() {
    switch (document.getElementById('cir6-var').value) {
        case "1":
            var solution = document.getElementById('cir6-p-num').value * document.getElementById('cir6-s-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir6-j-num').value, document.getElementById('cir6-j-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir6-j').classList.remove('alert');
				document.getElementById('cir6-j').classList.remove('success2');
				document.getElementById('cir6-j').classList.remove('success10');
                document.getElementById('cir6-j').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir6-j').classList.remove('alert');
				document.getElementById('cir6-j').classList.remove('success');
				document.getElementById('cir6-j').classList.remove('success10');
                document.getElementById('cir6-j').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir6-j').classList.remove('alert');
				document.getElementById('cir6-j').classList.remove('success2');
				document.getElementById('cir6-j').classList.remove('success');
                document.getElementById('cir6-j').classList.add('success10');
			}
            else {
                document.getElementById('cir6-j').classList.remove('success');
				document.getElementById('cir6-j').classList.remove('success2');
				document.getElementById('cir6-j').classList.remove('success10');
                document.getElementById('cir6-j').classList.add('alert');
            }
            break;
        case "2":
            var solution = document.getElementById('cir6-j-num').value / document.getElementById('cir6-s-num').value;
            solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir6-p-num').value, document.getElementById('cir6-p-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir6-p').classList.remove('alert');
				document.getElementById('cir6-p').classList.remove('success2');
				document.getElementById('cir6-p').classList.remove('success10');
                document.getElementById('cir6-p').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir6-p').classList.remove('alert');
				document.getElementById('cir6-p').classList.remove('success');
				document.getElementById('cir6-p').classList.remove('success10');
                document.getElementById('cir6-p').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir6-p').classList.remove('alert');
				document.getElementById('cir6-p').classList.remove('success2');
				document.getElementById('cir6-p').classList.remove('success');
                document.getElementById('cir6-p').classList.add('success10');
			}
            else {
                document.getElementById('cir6-p').classList.remove('success');
				document.getElementById('cir6-p').classList.remove('success2');
				document.getElementById('cir6-p').classList.remove('success10');
                document.getElementById('cir6-p').classList.add('alert');
            }
            break;
        case "3":
            var solution = document.getElementById('cir6-j-num').value / document.getElementById('cir6-p-num').value;
            solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir6-s-num').value, document.getElementById('cir6-s-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir6-s').classList.remove('alert');
				document.getElementById('cir6-s').classList.remove('success2');
				document.getElementById('cir6-s').classList.remove('success10');
                document.getElementById('cir6-s').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir6-s').classList.remove('alert');
				document.getElementById('cir6-s').classList.remove('success');
				document.getElementById('cir6-s').classList.remove('success10');
                document.getElementById('cir6-s').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir6-s').classList.remove('alert');
				document.getElementById('cir6-s').classList.remove('success2');
				document.getElementById('cir6-s').classList.remove('success');
                document.getElementById('cir6-s').classList.add('success10');
			}
            else {
                document.getElementById('cir6-s').classList.remove('success');
				document.getElementById('cir6-s').classList.remove('success2');
				document.getElementById('cir6-s').classList.remove('success10');
                document.getElementById('cir6-s').classList.add('alert');
            }
            break;
        default:
            
    }
};
show_cir[6] = function() {
    switch (document.getElementById('cir6-var').value) {
        case "1":
            var solution = document.getElementById('cir6-p-num').value * document.getElementById('cir6-s-num').value;
            solution = rounding(solution);
            document.getElementById('cir6-j-num').value = solution;
            document.getElementById('cir6-j').classList.remove('alert');
            document.getElementById('cir6-j').classList.remove('success');
			document.getElementById('cir6-j').classList.remove('success2');
			document.getElementById('cir6-j').classList.remove('success10');
            document.getElementById('cir6-j').classList.add('info');
            document.getElementById('cir6-j-num').disabled = true;
            document.getElementById('cir6-j-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var solution = document.getElementById('cir6-j-num').value / document.getElementById('cir6-s-num').value;
            solution = rounding(solution);
            document.getElementById('cir6-p-num').value = solution;
            document.getElementById('cir6-p').classList.remove('alert');
            document.getElementById('cir6-p').classList.remove('success');
			document.getElementById('cir6-p').classList.remove('success2');
			document.getElementById('cir6-p').classList.remove('success10');
            document.getElementById('cir6-p').classList.add('info');
            document.getElementById('cir6-p-num').disabled = true;
            document.getElementById('cir6-p-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var solution = document.getElementById('cir6-j-num').value / document.getElementById('cir6-p-num').value;
            solution = rounding(solution);
            document.getElementById('cir6-s-num').value = solution;
            document.getElementById('cir6-s').classList.remove('alert');
            document.getElementById('cir6-s').classList.remove('success');
			document.getElementById('cir6-s').classList.remove('success2');
			document.getElementById('cir6-s').classList.remove('success10');
            document.getElementById('cir6-s').classList.add('info');
            document.getElementById('cir6-s-num').disabled = true;
            document.getElementById('cir6-s-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};

//Watts Law Relation
generate_cir[7] = function() {
    switch (document.getElementById('cir7-var').value) {
        case "1":
            document.getElementById('cir7-v-num').value = randomDecimal(1, 50);
            document.getElementById('cir7-v').innerHTML = random_metric(document.getElementById('cir7-v-num').value);
            document.getElementById('cir7-a-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir7-a').innerHTML = random_metric(document.getElementById('cir7-a-num').value);
            break;
        case "2":
            document.getElementById('cir7-p-num').value = randomDecimal(1, 50);
            document.getElementById('cir7-p').innerHTML = random_metric(document.getElementById('cir7-p-num').value);
            document.getElementById('cir7-a-num').value = randomWholeNumber(10, 120);
            document.getElementById('cir7-a').innerHTML = random_metric(document.getElementById('cir7-a-num').value);
            break;
        case "3":
            document.getElementById('cir7-p-num').value = randomDecimal(1, 50);
            document.getElementById('cir7-p').innerHTML = random_metric(document.getElementById('cir7-p-num').value);
            document.getElementById('cir7-v-num').value = randomDecimal(1, 50);
            document.getElementById('cir7-v').innerHTML = random_metric(document.getElementById('cir7-v-num').value);
            break;
        default:
            
    }
};
check_cir[7] = function() {
    switch (document.getElementById('cir7-var').value) {
        case "1":
            var solution = document.getElementById('cir7-v-num').value * document.getElementById('cir7-a-num').value;
			solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir7-p-num').value, document.getElementById('cir7-p-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir7-p').classList.remove('alert');
				document.getElementById('cir7-p').classList.remove('success2');
				document.getElementById('cir7-p').classList.remove('success10');
                document.getElementById('cir7-p').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir7-p').classList.remove('alert');
				document.getElementById('cir7-p').classList.remove('success');
				document.getElementById('cir7-p').classList.remove('success10');
                document.getElementById('cir7-p').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir7-p').classList.remove('alert');
				document.getElementById('cir7-p').classList.remove('success2');
				document.getElementById('cir7-p').classList.remove('success');
                document.getElementById('cir7-p').classList.add('success10');
			}
            else {
                document.getElementById('cir7-p').classList.remove('success');
				document.getElementById('cir7-p').classList.remove('success2');
				document.getElementById('cir7-p').classList.remove('success10');
                document.getElementById('cir7-p').classList.add('alert');
            }
            break;
        case "2":
            var solution = document.getElementById('cir7-p-num').value / document.getElementById('cir7-a-num').value;
            solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir7-v-num').value, document.getElementById('cir7-v-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir7-v').classList.remove('alert');
				document.getElementById('cir7-v').classList.remove('success2');
				document.getElementById('cir7-v').classList.remove('success10');
                document.getElementById('cir7-v').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir7-v').classList.remove('alert');
				document.getElementById('cir7-v').classList.remove('success');
				document.getElementById('cir7-v').classList.remove('success10');
                document.getElementById('cir7-v').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir7-v').classList.remove('alert');
				document.getElementById('cir7-v').classList.remove('success2');
				document.getElementById('cir7-v').classList.remove('success');
                document.getElementById('cir7-v').classList.add('success10');
			}
            else {
                document.getElementById('cir7-v').classList.remove('success');
				document.getElementById('cir7-v').classList.remove('success2');
				document.getElementById('cir7-v').classList.remove('success10');
                document.getElementById('cir7-v').classList.add('alert');
            }
            break;
        case "3":
            var solution = document.getElementById('cir7-p-num').value / document.getElementById('cir7-v-num').value;
            solution = rounding(solution);
            var answer = metric_not(document.getElementById('cir7-a-num').value, document.getElementById('cir7-a-not').value);
			answer = rounding(answer);
            if (solution == answer) {
                document.getElementById('cir7-a').classList.remove('alert');
				document.getElementById('cir7-a').classList.remove('success2');
				document.getElementById('cir7-a').classList.remove('success10');
                document.getElementById('cir7-a').classList.add('success');
			}
			else if (per2Check(solution, answer)) {
				document.getElementById('cir7-a').classList.remove('alert');
				document.getElementById('cir7-a').classList.remove('success');
				document.getElementById('cir7-a').classList.remove('success10');
                document.getElementById('cir7-a').classList.add('success2');
			}
			else if (per10Check(solution, answer)) {
				document.getElementById('cir7-a').classList.remove('alert');
				document.getElementById('cir7-a').classList.remove('success2');
				document.getElementById('cir7-a').classList.remove('success');
                document.getElementById('cir7-a').classList.add('success10');
			}
            else {
                document.getElementById('cir7-a').classList.remove('success');
				document.getElementById('cir7-a').classList.remove('success2');
				document.getElementById('cir7-a').classList.remove('success10');
                document.getElementById('cir7-a').classList.add('alert');
            }
            break;
        default:
            
    }
};
show_cir[7] = function() {
    switch (document.getElementById('cir7-var').value) {
        case "1":
            var solution = document.getElementById('cir7-v-num').value * document.getElementById('cir7-a-num').value;
            solution = rounding(solution);
            document.getElementById('cir7-p-num').value = solution;
            document.getElementById('cir7-p').classList.remove('alert');
            document.getElementById('cir7-p').classList.remove('success');
			document.getElementById('cir7-p').classList.remove('success2');
			document.getElementById('cir7-p').classList.remove('success10');
            document.getElementById('cir7-p').classList.add('info');
            document.getElementById('cir7-p-num').disabled = true;
            document.getElementById('cir7-p-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "2":
            var solution = document.getElementById('cir7-p-num').value / document.getElementById('cir7-a-num').value;
            solution = rounding(solution);
            document.getElementById('cir7-v-num').value = solution;
            document.getElementById('cir7-v').classList.remove('alert');
            document.getElementById('cir7-v').classList.remove('success');
			document.getElementById('cir7-v').classList.remove('success2');
			document.getElementById('cir7-v').classList.remove('success10');
            document.getElementById('cir7-v').classList.add('info');
            document.getElementById('cir7-v-num').disabled = true;
            document.getElementById('cir7-v-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        case "3":
            var solution = document.getElementById('cir7-p-num').value / document.getElementById('cir7-v-num').value;
            solution = rounding(solution);
            document.getElementById('cir7-a-num').value = solution;
            document.getElementById('cir7-a').classList.remove('alert');
            document.getElementById('cir7-a').classList.remove('success');
			document.getElementById('cir7-a').classList.remove('success2');
			document.getElementById('cir7-a').classList.remove('success10');
            document.getElementById('cir7-a').classList.add('info');
            document.getElementById('cir7-a-num').disabled = true;
            document.getElementById('cir7-a-not').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
        default:
            
    }
};


//Through Hole Color Code
var ctable = [
  '#000000',
  '#8b4900',
  '#ff0000',
  '#eb9944',
  '#ffff00',
  '#00d200',
  '#0000d9',
  '#d900db',
  '#666666',
  '#ffffff'
];

var ntable = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

var cetable = [
  '#000000',
  '#8b4900',
  '#ff0000',
  '#eb9944',
  '#ffff00',
  '#00d200',
  '#0000d9',
  '#d900db',
  '#666666',
  '#ffffff',
  '#Ffd700',
  '#C0C0C0'
];

var netable = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
  'gold',
  'silver'
];

var ttable = [
	1,
	2,
	3,
	4,
	0.5,
	0.25,
	0.1,
	0.05,
	5,
	10
];

var tctable = [
  '#8b4900',
  '#ff0000',
  '#eb9944',
  '#ffff00',
  '#00d200',
  '#0000d9',
  '#d900db',
  '#666666',
  '#Ffd700',
  '#C0C0C0'
];

var tntable = [
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'gold',
  'silver'
];

var tcrtable = [
	250,
	100,
	50,
	15,
	25,
	20,
	10,
	5,
	1
];

var tcrctable = [
  '#000000',
  '#8b4900',
  '#ff0000',
  '#eb9944',
  '#ffff00',
  '#00d200',
  '#0000d9',
  '#d900db',
  '#666666'
];

var tcrntable = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey'
];

generate_cir[9] = function() {
	switch (document.getElementById('cir9-var').value) {
		case "1":
			document.getElementById('ring3').style.display = "none";
			document.getElementById('ring4').style.display = "none";
			document.getElementById('ring5').style.display = "none";
			document.getElementById('cir9-tcr').style.display = "none";
			var digit1 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring0').value = digit1;
			var digit2 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring1').value = digit2;
			var mult = randomWholeNumber(1, 3);
			if (mult < 3) {
				mult = randomWholeNumber(0, 9);
				document.getElementById('ring2').style.backgroundColor = ctable[mult];
				document.getElementById('ring2').title = ntable[mult];
				document.getElementById('ring2').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 11);
				document.getElementById('ring2').style.backgroundColor = cetable[mult];
				document.getElementById('ring2').title = netable[mult];
				document.getElementById('ring2').innerHTML = netable[mult];
			}
			document.getElementById('cir9-ring2').value = mult;
			document.getElementById('ring0').style.backgroundColor = ctable[digit1];
			document.getElementById('ring0').title = ntable[digit1];
			document.getElementById('ring0').innerHTML = ntable[digit1];
			document.getElementById('ring1').style.backgroundColor = ctable[digit2];
			document.getElementById('ring1').title = ntable[digit2];
			document.getElementById('ring1').innerHTML = ntable[digit2];
			break;
		case "2":
			document.getElementById('ring4').style.display = "none";
			document.getElementById('ring5').style.display = "none";
			document.getElementById('cir9-tcr').style.display = "none";
			var digit1 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring0').value = digit1;
			var digit2 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring1').value = digit2;
			var mult = randomWholeNumber(1, 3);
			if (mult < 3) {
				mult = randomWholeNumber(0, 9);
				document.getElementById('ring2').style.backgroundColor = ctable[mult];
				document.getElementById('ring2').title = ntable[mult];
				document.getElementById('ring2').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 11);
				document.getElementById('ring2').style.backgroundColor = cetable[mult];
				document.getElementById('ring2').title = netable[mult];
				document.getElementById('ring2').innerHTML = netable[mult];
			}
			document.getElementById('cir9-ring2').value = mult;
			document.getElementById('ring0').style.backgroundColor = ctable[digit1];
			document.getElementById('ring0').title = ntable[digit1];
			document.getElementById('ring0').innerHTML = ntable[digit1];
			document.getElementById('ring1').style.backgroundColor = ctable[digit2];
			document.getElementById('ring1').title = ntable[digit2];
			document.getElementById('ring1').innerHTML = ntable[digit2];
			var tol = randomWholeNumber(1, 3);
			if (tol == 1) {
				tol = 6;
			}
			else if (tol == 2) {
				tol = 7;
			}
			else {
				tol = randomWholeNumber(0, 9);
			}
			document.getElementById('cir9-ring3').value = tol;
			document.getElementById('ring3').style.backgroundColor = tctable[tol];
			document.getElementById('ring3').title = tntable[tol];
			document.getElementById('ring3').innerHTML = tntable[tol];
			break;
		case "3":
			document.getElementById('ring5').style.display = "none";
			document.getElementById('cir9-tcr').style.display = "none";
			var digit1 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring0').value = digit1;
			var digit2 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring1').value = digit2;
			var digit3 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring2').value = digit3;
			var mult = randomWholeNumber(1, 3);
			if (mult < 3) {
				mult = randomWholeNumber(0, 9);
				document.getElementById('ring3').style.backgroundColor = ctable[mult];
				document.getElementById('ring3').title = ntable[mult];
				document.getElementById('ring3').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 11);
				document.getElementById('ring3').style.backgroundColor = cetable[mult];
				document.getElementById('ring3').title = netable[mult];
				document.getElementById('ring3').innerHTML = netable[mult];
			}
			document.getElementById('cir9-ring3').value = mult;
			document.getElementById('ring0').style.backgroundColor = ctable[digit1];
			document.getElementById('ring0').title = ntable[digit1];
			document.getElementById('ring0').innerHTML = ntable[digit1];
			document.getElementById('ring1').style.backgroundColor = ctable[digit2];
			document.getElementById('ring1').title = ntable[digit2];
			document.getElementById('ring1').innerHTML = ntable[digit2];
			document.getElementById('ring2').style.backgroundColor = ctable[digit3];
			document.getElementById('ring2').title = ntable[digit3];
			document.getElementById('ring2').innerHTML = ntable[digit3];
			var tol = randomWholeNumber(1, 3);
			if (tol == 1) {
				tol = 8;
			}
			else if (tol == 2) {
				tol = 9;
			}
			else {
				tol = randomWholeNumber(0, 9);
			}
			document.getElementById('cir9-ring4').value = tol;
			document.getElementById('ring4').style.backgroundColor = tctable[tol];
			document.getElementById('ring4').title = tntable[tol];
			document.getElementById('ring4').innerHTML = tntable[tol];
			break;
		case "4":
			var digit1 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring0').value = digit1;
			var digit2 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring1').value = digit2;
			var digit3 = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring2').value = digit3;
			var mult = randomWholeNumber(1, 3);
			if (mult < 3) {
				mult = randomWholeNumber(0, 9);
				document.getElementById('ring3').style.backgroundColor = ctable[mult];
				document.getElementById('ring3').title = ntable[mult];
				document.getElementById('ring3').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 11);
				document.getElementById('ring3').style.backgroundColor = cetable[mult];
				document.getElementById('ring3').title = netable[mult];
				document.getElementById('ring3').innerHTML = netable[mult];
			}
			document.getElementById('cir9-ring3').value = mult;
			document.getElementById('ring0').style.backgroundColor = ctable[digit1];
			document.getElementById('ring0').title = ntable[digit1];
			document.getElementById('ring0').innerHTML = ntable[digit1];
			document.getElementById('ring1').style.backgroundColor = ctable[digit2];
			document.getElementById('ring1').title = ntable[digit2];
			document.getElementById('ring1').innerHTML = ntable[digit2];
			document.getElementById('ring2').style.backgroundColor = ctable[digit3];
			document.getElementById('ring2').title = ntable[digit3];
			document.getElementById('ring2').innerHTML = ntable[digit3];
			var tol = randomWholeNumber(1, 3);
			if (tol == 1) {
				tol = 8;
			}
			else if (tol == 2) {
				tol = 9;
			}
			else {
				tol = randomWholeNumber(0, 9);
			}
			document.getElementById('cir9-ring4').value = tol;
			document.getElementById('ring4').style.backgroundColor = tctable[tol];
			document.getElementById('ring4').title = tntable[tol];
			document.getElementById('ring4').innerHTML = tntable[tol];
			var tcr = randomWholeNumber(0, 8);
			document.getElementById('cir9-ring5').value = tcr;
			document.getElementById('ring5').style.backgroundColor = tcrctable[tcr];
			document.getElementById('ring5').title = tcrntable[tcr];
			document.getElementById('ring5').innerHTML = tcrntable[tcr];
			break;
		default:
		
	}
};
check_cir[9] = function() {
	switch (document.getElementById('cir9-var').value) {
		case "1":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring1').value));
			var temp = parseInt(document.getElementById('cir9-ring2').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring2').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 11) {
				value = value * 0.01;
			}
			value = rounding(value);
			var tol = 20;
			var ranswer = metric_not(document.getElementById('cir9-r-num').value, document.getElementById('cir9-r-not').value);
			ranswer = rounding(ranswer);
            if (value == ranswer) {
                document.getElementById('cir9-r').classList.remove('alert');
                document.getElementById('cir9-r').classList.add('success');
            }
            else {
                document.getElementById('cir9-r').classList.remove('success');
                document.getElementById('cir9-r').classList.add('alert');
            }
			if (tol == document.getElementById('cir9-t-num').value) {
                document.getElementById('cir9-t').classList.remove('alert');
                document.getElementById('cir9-t').classList.add('success');
            }
            else {
                document.getElementById('cir9-t').classList.remove('success');
                document.getElementById('cir9-t').classList.add('alert');
            }
			break;
		case "2":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring1').value));
			var temp = parseInt(document.getElementById('cir9-ring2').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring2').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 11) {
				value = value * 0.01;
			}
			value = rounding(value);
			var tol = ttable[parseInt(document.getElementById('cir9-ring3').value)];
			var ranswer = metric_not(document.getElementById('cir9-r-num').value, document.getElementById('cir9-r-not').value);
			ranswer = rounding(ranswer);
            if (value == ranswer) {
                document.getElementById('cir9-r').classList.remove('alert');
                document.getElementById('cir9-r').classList.add('success');
            }
            else {
                document.getElementById('cir9-r').classList.remove('success');
                document.getElementById('cir9-r').classList.add('alert');
            }
			if (tol == document.getElementById('cir9-t-num').value) {
                document.getElementById('cir9-t').classList.remove('alert');
                document.getElementById('cir9-t').classList.add('success');
            }
            else {
                document.getElementById('cir9-t').classList.remove('success');
                document.getElementById('cir9-t').classList.add('alert');
            }
			break;
		case "3":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 100;
			value += (parseInt(document.getElementById('cir9-ring1').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring2').value));
			var temp = parseInt(document.getElementById('cir9-ring3').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring3').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 11) {
				value = value * 0.01;
			}
			value = rounding(value);
			var tol = ttable[parseInt(document.getElementById('cir9-ring4').value)];
			var ranswer = metric_not(document.getElementById('cir9-r-num').value, document.getElementById('cir9-r-not').value);
			ranswer = rounding(ranswer);
            if (value == ranswer) {
                document.getElementById('cir9-r').classList.remove('alert');
                document.getElementById('cir9-r').classList.add('success');
            }
            else {
                document.getElementById('cir9-r').classList.remove('success');
                document.getElementById('cir9-r').classList.add('alert');
            }
			if (tol == document.getElementById('cir9-t-num').value) {
                document.getElementById('cir9-t').classList.remove('alert');
                document.getElementById('cir9-t').classList.add('success');
            }
            else {
                document.getElementById('cir9-t').classList.remove('success');
                document.getElementById('cir9-t').classList.add('alert');
            }
			break;
		case "4":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 100;
			value += (parseInt(document.getElementById('cir9-ring1').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring2').value));
			var temp = parseInt(document.getElementById('cir9-ring3').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring3').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 11) {
				value = value * 0.01;
			}
			value = rounding(value);
			var tol = ttable[parseInt(document.getElementById('cir9-ring4').value)];
			var tcr = tcrtable[parseInt(document.getElementById('cir9-ring5').value)];
			var ranswer = metric_not(document.getElementById('cir9-r-num').value, document.getElementById('cir9-r-not').value);
			ranswer = rounding(ranswer);
            if (value == ranswer) {
                document.getElementById('cir9-r').classList.remove('alert');
                document.getElementById('cir9-r').classList.add('success');
            }
            else {
                document.getElementById('cir9-r').classList.remove('success');
                document.getElementById('cir9-r').classList.add('alert');
            }
			if (tol == document.getElementById('cir9-t-num').value) {
                document.getElementById('cir9-t').classList.remove('alert');
                document.getElementById('cir9-t').classList.add('success');
            }
            else {
                document.getElementById('cir9-t').classList.remove('success');
                document.getElementById('cir9-t').classList.add('alert');
            }
			if (tcr == document.getElementById('cir9-tcr-num').value) {
                document.getElementById('cir9-tcr').classList.remove('alert');
                document.getElementById('cir9-tcr').classList.add('success');
            }
            else {
                document.getElementById('cir9-tcr').classList.remove('success');
                document.getElementById('cir9-tcr').classList.add('alert');
            }
			break;
		default:
		
	}	
};
show_cir[9] = function() {
	switch (document.getElementById('cir9-var').value) {
		case "1":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring1').value));
			var temp = parseInt(document.getElementById('cir9-ring2').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring2').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 11) {
				value = value * 0.01;
			}
			var tol = 20;
			document.getElementById('cir9-r-num').value = rounding(value);
            document.getElementById('cir9-r').classList.remove('alert');
            document.getElementById('cir9-r').classList.remove('success');
            document.getElementById('cir9-r').classList.add('info');
            document.getElementById('cir9-r-num').disabled = true;
            document.getElementById('cir9-r-not').disabled = true;
			document.getElementById('cir9-t-num').value = tol;
            document.getElementById('cir9-t').classList.remove('alert');
            document.getElementById('cir9-t').classList.remove('success');
            document.getElementById('cir9-t').classList.add('info');
            document.getElementById('cir9-t-num').disabled = true;
            document.getElementById('check_but').disabled = true;
			break;
		case "2":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring1').value));
			var temp = parseInt(document.getElementById('cir9-ring2').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring2').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 11) {
				value = value * 0.01;
			}
			var tol = ttable[parseInt(document.getElementById('cir9-ring3').value)];
			document.getElementById('cir9-r-num').value = rounding(value);
            document.getElementById('cir9-r').classList.remove('alert');
            document.getElementById('cir9-r').classList.remove('success');
            document.getElementById('cir9-r').classList.add('info');
            document.getElementById('cir9-r-num').disabled = true;
            document.getElementById('cir9-r-not').disabled = true;
			document.getElementById('cir9-t-num').value = tol;
            document.getElementById('cir9-t').classList.remove('alert');
            document.getElementById('cir9-t').classList.remove('success');
            document.getElementById('cir9-t').classList.add('info');
            document.getElementById('cir9-t-num').disabled = true;
            document.getElementById('check_but').disabled = true;
			break;
		case "3":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 100;
			value += (parseInt(document.getElementById('cir9-ring1').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring2').value));
			var temp = parseInt(document.getElementById('cir9-ring3').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring3').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 11) {
				value = value * 0.01;
			}
			var tol = ttable[parseInt(document.getElementById('cir9-ring4').value)];
			document.getElementById('cir9-r-num').value = rounding(value);
            document.getElementById('cir9-r').classList.remove('alert');
            document.getElementById('cir9-r').classList.remove('success');
            document.getElementById('cir9-r').classList.add('info');
            document.getElementById('cir9-r-num').disabled = true;
            document.getElementById('cir9-r-not').disabled = true;
			document.getElementById('cir9-t-num').value = tol;
            document.getElementById('cir9-t').classList.remove('alert');
            document.getElementById('cir9-t').classList.remove('success');
            document.getElementById('cir9-t').classList.add('info');
            document.getElementById('cir9-t-num').disabled = true;
            document.getElementById('check_but').disabled = true;
			break;
		case "4":
			var value = (parseInt(document.getElementById('cir9-ring0').value)) * 100;
			value += (parseInt(document.getElementById('cir9-ring1').value)) * 10;
			value += (parseInt(document.getElementById('cir9-ring2').value));
			var temp = parseInt(document.getElementById('cir9-ring3').value);
			temp = Math.pow(10, temp); 
			if (parseInt(document.getElementById('cir9-ring3').value) < 10) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 11) {
				value = value * 0.01;
			}
			var tol = ttable[parseInt(document.getElementById('cir9-ring4').value)];
			var tcr = tcrtable[parseInt(document.getElementById('cir9-ring5').value)];
			document.getElementById('cir9-r-num').value = rounding(value);
            document.getElementById('cir9-r').classList.remove('alert');
            document.getElementById('cir9-r').classList.remove('success');
            document.getElementById('cir9-r').classList.add('info');
            document.getElementById('cir9-r-num').disabled = true;
            document.getElementById('cir9-r-not').disabled = true;
			document.getElementById('cir9-t-num').value = tol;
            document.getElementById('cir9-t').classList.remove('alert');
            document.getElementById('cir9-t').classList.remove('success');
            document.getElementById('cir9-t').classList.add('info');
            document.getElementById('cir9-t-num').disabled = true;
			document.getElementById('cir9-tcr-num').value = tcr;
            document.getElementById('cir9-tcr').classList.remove('alert');
            document.getElementById('cir9-tcr').classList.remove('success');
            document.getElementById('cir9-tcr').classList.add('info');
            document.getElementById('cir9-tcr-num').disabled = true;
            document.getElementById('check_but').disabled = true;
			break;
		default:
		
	}	
};


//SMD Number Code
eiactable = [
	'Z',
	'Y',
	'R',
	'X',
	'S',
	'A',
	'B',
	'H',
	'C',
	'D',
	'E',
	'F'
];

eiamtable = [
	0.001,
	0.01,
	0.01,
	0.1,
	0.1,
	1,
	10,
	10,
	100,
	1000,
	10000,
	100000
];

eiavtable = [
	100,
	102,
	105,
	107,
	110,
	113,
	115,
	118,
	121,
	124,
	127,
	130,
	133,
	137,
	140,
	143,
	147,
	150,
	154,
	158,
	162,
	165,
	169,
	174,
	178,
	182,
	187,
	191,
	196,
	200,
	205,
	210,
	215,
	221,
	226,
	232,
	237,
	243,
	249,
	255,
	261,
	267,
	274,
	280,
	287,
	294,
	301,
	309,
	316,
	324,
	332,
	340,
	348,
	357,
	365,
	374,
	383,
	392,
	402,
	412,
	422,
	432,
	442,
	453,
	464,
	475,
	487,
	499,
	511,
	523,
	536,
	549,
	562,
	576,
	590,
	604,
	619,
	634,
	649,
	665,
	681,
	698,
	715,
	732,
	750,
	768,
	787,
	806,
	825,
	845,
	866,
	887,
	909,
	931,
	953,
	976
];


generate_cir[10] = function() {
	switch (document.getElementById('cir10-var').value) {
		case "1":
			if (randomWholeNumber(1, 3) == 3) {
				var chance = true;
			}
			else {
				var chance = false;
			}
			var rPresent = false;
			var stringValue = '';
			if (chance && !rPresent && randomWholeNumber(0, 1) == 1) {
				var digit1 = 'R';
				stringValue += digit1;
				rPresent = true;
				document.getElementById('cir10-digit1').value = "";
			}
			else {
				var digit1 = randomWholeNumber(0, 9);
				document.getElementById('cir10-digit1').value = digit1;
				stringValue += String(digit1);
			}
			
			if (chance && !rPresent && randomWholeNumber(0, 1) == 1) {
				var digit2 = 'R';
				stringValue += digit2;
				rPresent = true;
				document.getElementById('cir10-digit2').value = "";
			}
			else {
				var digit2 = randomWholeNumber(0, 9);
				document.getElementById('cir10-digit2').value = digit2;
				stringValue += String(digit2);
			}
			
			if (chance && !rPresent && randomWholeNumber(0, 1) == 1) {
				var digit3 = 'R';
				stringValue += digit3;
				rPresent = true;
				document.getElementById('cir10-digit3').value = "";
			}
			else {
				var digit3 = randomWholeNumber(0, 9);
				document.getElementById('cir10-digit3').value = digit3;
				stringValue += String(digit3);
			}
			document.getElementById('SMDtext').innerHTML = stringValue;
			
			
			break;
		case "2":
			if (randomWholeNumber(1, 3) == 3) {
				var chance = true;
			}
			else {
				var chance = false;
			}
			var rPresent = false;
			var stringValue = '';
			if (chance && !rPresent && randomWholeNumber(0, 1) == 1) {
				var digit1 = 'R';
				stringValue += digit1;
				rPresent = true;
				document.getElementById('cir10-digit1').value = "";
			}
			else {
				var digit1 = randomWholeNumber(0, 9);
				document.getElementById('cir10-digit1').value = digit1;
				stringValue += String(digit1);
			}
			
			if (chance && !rPresent && randomWholeNumber(0, 1) == 1) {
				var digit2 = 'R';
				stringValue += digit2;
				rPresent = true;
				document.getElementById('cir10-digit2').value = "";
			}
			else {
				var digit2 = randomWholeNumber(0, 9);
				document.getElementById('cir10-digit2').value = digit2;
				stringValue += String(digit2);
			}
			
			if (chance && !rPresent && randomWholeNumber(0, 1) == 1) {
				var digit3 = 'R';
				stringValue += digit3;
				rPresent = true;
				document.getElementById('cir10-digit3').value = "";
			}
			else {
				var digit3 = randomWholeNumber(0, 9);
				document.getElementById('cir10-digit3').value = digit3;
				stringValue += String(digit3);
			}
			
			if (chance && !rPresent && randomWholeNumber(0, 1) == 1) {
				var digit4 = 'R';
				stringValue += digit4;
				rPresent = true;
				document.getElementById('cir10-digit4').value = "";
			}
			else {
				var digit4 = randomWholeNumber(0, 9);
				document.getElementById('cir10-digit4').value = digit4;
				stringValue += String(digit4);
			}
			document.getElementById('SMDtext').innerHTML = stringValue;
			break;
		case "3":
			var stringValue = '';
			var digit1 = randomWholeNumber(1, 96);
			document.getElementById('cir10-digit1').value = digit1;
			if (digit1 < 10) {
				stringValue += "0";
			}
			stringValue += String(digit1);
			var digit2 = randomWholeNumber(0, 11);
			document.getElementById('cir10-digit2').value = digit2;
			stringValue += String(eiactable[digit2]);
			document.getElementById('SMDtext').innerHTML = stringValue;
			break;
		default:
	}
};
check_cir[10] = function() {
	switch (document.getElementById('cir10-var').value) {
		case "1":
			var value = 0;
			if (document.getElementById('cir10-digit1').value == "") {
				value += (parseInt(document.getElementById('cir10-digit2').value) * 10);
				value += parseInt(document.getElementById('cir10-digit3').value);
				value *= 0.01;
			}
			else if (document.getElementById('cir10-digit2').value == "") {
				value += parseInt(document.getElementById('cir10-digit3').value);
				value *= 0.1;
				value += parseInt(document.getElementById('cir10-digit1').value);
			}
			else if (document.getElementById('cir10-digit3').value == "") {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
			}
			else {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
				var temp = Math.pow(10, parseInt(document.getElementById('cir10-digit3').value));
				value = value * temp;
			}
			value = rounding(value);
			var ranswer = metric_not(document.getElementById('cir10-r-num').value, document.getElementById('cir10-r-not').value);
			ranswer = rounding(ranswer);
            if (value == ranswer) {
                document.getElementById('cir10-r').classList.remove('alert');
                document.getElementById('cir10-r').classList.add('success');
            }
            else {
                document.getElementById('cir10-r').classList.remove('success');
                document.getElementById('cir10-r').classList.add('alert');
            }
			break;
		case "2":
			var value = 0;
			if (document.getElementById('cir10-digit1').value == "") {
				value += (parseInt(document.getElementById('cir10-digit2').value) * 100);
				value += (parseInt(document.getElementById('cir10-digit3').value) * 10);
				value += parseInt(document.getElementById('cir10-digit4').value);
				value *= 0.001;
			}
			else if (document.getElementById('cir10-digit2').value == "") {
				value += (parseInt(document.getElementById('cir10-digit3').value) * 10);
				value += parseInt(document.getElementById('cir10-digit4').value);
				value *= 0.01;
				value += parseInt(document.getElementById('cir10-digit1').value);
			}
			else if (document.getElementById('cir10-digit3').value == "") {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
				value += (parseInt(document.getElementById('cir10-digit4').value) * 0.1)
			}
			else if (document.getElementById('cir10-digit4').value == "") {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
				value += (parseInt(document.getElementById('cir10-digit4').value) * 0.1)
			}
			else {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 100);
				value += (parseInt(document.getElementById('cir10-digit2').value) * 10);
				value += parseInt(document.getElementById('cir10-digit3').value);
				var temp = Math.pow(10, parseInt(document.getElementById('cir10-digit4').value));
				value = value * temp;
			}
			value = rounding(value);
			var ranswer = metric_not(document.getElementById('cir10-r-num').value, document.getElementById('cir10-r-not').value);
			ranswer = rounding(ranswer);
            if (value == ranswer) {
                document.getElementById('cir10-r').classList.remove('alert');
                document.getElementById('cir10-r').classList.add('success');
            }
            else {
                document.getElementById('cir10-r').classList.remove('success');
                document.getElementById('cir10-r').classList.add('alert');
            }
			break;
		case "3":
			var value = 0;
			value += eiavtable[parseInt(document.getElementById('cir10-digit1').value) - 1];
			value *= eiamtable[parseInt(document.getElementById('cir10-digit2').value)];
			value = rounding(value);
			var ranswer = metric_not(document.getElementById('cir10-r-num').value, document.getElementById('cir10-r-not').value);
			ranswer = rounding(ranswer);
            if (value == ranswer) {
                document.getElementById('cir10-r').classList.remove('alert');
                document.getElementById('cir10-r').classList.add('success');
            }
            else {
                document.getElementById('cir10-r').classList.remove('success');
                document.getElementById('cir10-r').classList.add('alert');
            }
		default:
	}
};
show_cir[10] = function() {
	switch (document.getElementById('cir10-var').value) {
		case "1":
			var value = 0;
			if (document.getElementById('cir10-digit1').value == "") {
				value += (parseInt(document.getElementById('cir10-digit2').value) * 10);
				value += parseInt(document.getElementById('cir10-digit3').value);
				value *= 0.01;
			}
			else if (document.getElementById('cir10-digit2').value == "") {
				value += parseInt(document.getElementById('cir10-digit3').value);
				value *= 0.1;
				value += parseInt(document.getElementById('cir10-digit1').value);
			}
			else if (document.getElementById('cir10-digit3').value == "") {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
			}
			else {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
				var temp = Math.pow(10, parseInt(document.getElementById('cir10-digit3').value));
				value = value * temp;
			}
			value = rounding(value);
			document.getElementById('cir10-r-num').value = value;
            document.getElementById('cir10-r').classList.remove('alert');
            document.getElementById('cir10-r').classList.remove('success');
            document.getElementById('cir10-r').classList.add('info');
            document.getElementById('cir10-r-num').disabled = true;
            document.getElementById('cir10-r-not').disabled = true;
			document.getElementById('cir10-t-num').value = tol;
            document.getElementById('cir10-t').classList.remove('alert');
            document.getElementById('cir10-t').classList.remove('success');
            document.getElementById('cir10-t').classList.add('info');
            document.getElementById('cir10-t-num').disabled = true;
            document.getElementById('check_but').disabled = true;
			break;
		case "2":
			var value = 0;
			if (document.getElementById('cir10-digit1').value == "") {
				value += (parseInt(document.getElementById('cir10-digit2').value) * 100);
				value += (parseInt(document.getElementById('cir10-digit3').value) * 10);
				value += parseInt(document.getElementById('cir10-digit4').value);
				value *= 0.001;
			}
			else if (document.getElementById('cir10-digit2').value == "") {
				value += (parseInt(document.getElementById('cir10-digit3').value) * 10);
				value += parseInt(document.getElementById('cir10-digit4').value);
				value *= 0.01;
				value += parseInt(document.getElementById('cir10-digit1').value);
			}
			else if (document.getElementById('cir10-digit3').value == "") {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
				value += (parseInt(document.getElementById('cir10-digit4').value) * 0.1)
			}
			else if (document.getElementById('cir10-digit4').value == "") {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 10);
				value += parseInt(document.getElementById('cir10-digit2').value);
				value += (parseInt(document.getElementById('cir10-digit4').value) * 0.1)
			}
			else {
				value += (parseInt(document.getElementById('cir10-digit1').value) * 100);
				value += (parseInt(document.getElementById('cir10-digit2').value) * 10);
				value += parseInt(document.getElementById('cir10-digit3').value);
				var temp = Math.pow(10, parseInt(document.getElementById('cir10-digit4').value));
				value = value * temp;
			}
			value = rounding(value);
			document.getElementById('cir10-r-num').value = value;
            document.getElementById('cir10-r').classList.remove('alert');
            document.getElementById('cir10-r').classList.remove('success');
            document.getElementById('cir10-r').classList.add('info');
            document.getElementById('cir10-r-num').disabled = true;
            document.getElementById('cir10-r-not').disabled = true;
			document.getElementById('cir10-t-num').value = tol;
            document.getElementById('cir10-t').classList.remove('alert');
            document.getElementById('cir10-t').classList.remove('success');
            document.getElementById('cir10-t').classList.add('info');
            document.getElementById('cir10-t-num').disabled = true;
            document.getElementById('check_but').disabled = true;
			break;
		case "3":
			var value = 0;
			value += eiavtable[parseInt(document.getElementById('cir10-digit1').value) - 1];
			value *= eiamtable[parseInt(document.getElementById('cir10-digit2').value)];
			value = rounding(value);
			document.getElementById('cir10-r-num').value = value;
            document.getElementById('cir10-r').classList.remove('alert');
            document.getElementById('cir10-r').classList.remove('success');
            document.getElementById('cir10-r').classList.add('info');
            document.getElementById('cir10-r-num').disabled = true;
            document.getElementById('cir10-r-not').disabled = true;
			document.getElementById('cir10-t-num').value = tol;
            document.getElementById('cir10-t').classList.remove('alert');
            document.getElementById('cir10-t').classList.remove('success');
            document.getElementById('cir10-t').classList.add('info');
            document.getElementById('cir10-t-num').disabled = true;
            document.getElementById('check_but').disabled = true;
			break;
		default:
	}
};


function createGrid(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, midPoint.y);
    ctx.lineTo(c.width, midPoint.y);
    ctx.moveTo(midPoint.x, 0);
    ctx.lineTo(midPoint.x, c.height);
    if (displaySettings.displayType == 1) {
		ctx.strokeStyle = "#196156";
		ctx.lineWidth = "2";
	}
	else {
		ctx.strokeStyle = "#ffffff";
		ctx.lineWidth = "0.5";
	}
    ctx.globalCompositeOperation = "source-over";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    gridLineX = midPoint.x - 80;
    while (gridLineX >= 0) {
        ctx.moveTo(gridLineX, 0);
        ctx.lineTo(gridLineX, c.height);
        gridLineX -= 80;
    }
    gridLineX = midPoint.x + 80;
    while (gridLineX <= c.width) {
        ctx.moveTo(gridLineX, 0);
        ctx.lineTo(gridLineX, c.height);
        gridLineX += 80;
    }
    gridLineY = midPoint.y - 80;
    while (gridLineY >= 0) {
        ctx.moveTo(0, gridLineY);
        ctx.lineTo(c.width, gridLineY);
        gridLineY -= 80;
    }
    gridLineY = midPoint.y + 80;
    while (gridLineY <= c.height) {
        ctx.moveTo(0, gridLineY);
        ctx.lineTo(c.width, gridLineY);
        gridLineY += 80;
    }
    dashesX = midPoint.x - 16;
    while (dashesX >= 0) {
        ctx.moveTo(dashesX, midPoint.y - 4);
        ctx.lineTo(dashesX, midPoint.y + 4);
        dashesX -= 16;
    }
    while (dashesX <= c.width) {
        ctx.moveTo(dashesX, midPoint.y - 4);
        ctx.lineTo(dashesX, midPoint.y + 4);
        dashesX += 16;
    }
    dashesY = midPoint.y - 16;
    while (dashesY >= 0) {
        ctx.moveTo(midPoint.x - 4, dashesY);
        ctx.lineTo(midPoint.x + 4, dashesY);
        dashesY -= 16;
    }
    dashesY = midPoint.y + 16;
    while (dashesY <= c.height) {
        ctx.moveTo(midPoint.x - 4, dashesY);
        ctx.lineTo(midPoint.x + 4, dashesY);
        dashesY += 16;
    }
    ctx.stroke();
};

var previousTranslate = { x: 0, y: 0 };
var mapRange = function (from, to, s) {
    return to[0] + ((s - from[0]) * (to[1] - to[0])) / (from[1] - from[0]);
};

timings = [
	["0.1 µs", 0.0001],
	["0.2 µs", 0.0002],
	["0.5 µs", 0.0005],
	["1 µs", 0.001],
	["2 µs", 0.002],
	["5 µs", 0.005],
	["10 µs", 0.01],
	["20 µs", 0.02],
	["50 µs", 0.05],
	["0.1 ms", 0.1],
	["0.2 ms", 0.2],
	["0.5 ms", 0.5],
	["1 ms", 1],
	["2 ms", 2],
	["5 ms", 5],
	["10 ms", 10],
	["20 ms", 20],
	["50 ms", 50],
	["0.1 s", 100],
	["0.2 s", 200],
	["0.5 s", 500],
	["1 s", 1000],
	["2 s", 2000]
];

voltages = [
	["5 mV", 0.001],
	["10 mV", 0.004],
	["20 mV", 0.002],
	["50 mV", 0.01],
	["0.1 V", 0.02],
	["0.2 V", 0.04],
	["0.5 V", 0.1],
	["1 V", 0.2],
	["2 V", 0.4],
	["5 V", 1]
];

var displaySettings = {
    displayType: 1, //1 = analog, 2 = digital
	inputType: 1, //1 = sine, 2 = square
    freq: 250, 
    gain: 1, 
    timing: 1, 
    volts: 1,
    horizOffset: 0, //{ title: "Horizontal Offset", value: 0, range: [-100, 100], resolution: 1, input: "hidden" },
    vertOffset: 0, //{ title: "Vertical Offset", value: 0, range: [-100, 100], resolution: 1, input: "hidden" },
	frequencyBinCount: 512,
};

function createDisplay() {
	display = document.getElementById("display");
	c = document.createElement("canvas");
	c2 = document.createElement("canvas");
	var w = window;
	screenHeight = w.innerHeight;
	screenWidth = w.innerWidth;
	c.width = display.clientWidth * 0.8;
	c.height = document.body.clientHeight;
	c.height = c.width * 0.8;
	c2.width = display.clientWidth* 0.8;
	c2.height = document.body.clientHeight;
	c2.height = c.height;
	$("#display").height(c.height + 20);
	if (displaySettings.displayType == 1) {
		c.style.backgroundColor = "#5db1a2";
	}
	else {
		c.style.backgroundColor = "#000000";
	}
	display.appendChild(c);
	display.appendChild(c2);
	midPoint = { x: c.width / 2, y: c.height / 2 };
	ctx = c.getContext("2d");
	ctx2 = c2.getContext("2d");
	createGrid(ctx);
};

function drawData() {
    ctx2.translate(-previousTranslate.x, -previousTranslate.y);
    ctx2.clearRect(0, 0, c.width, c.height);
    ctx2.translate(displaySettings.horizOffset, displaySettings.vertOffset);
    ctx2.beginPath();
	if (displaySettings.displayType == 1) {
		ctx2.strokeStyle = "#befde5";
	}
	else {
		lineColor = randomWholeNumber(1,5);
		switch (lineColor) {
			case 1:
				ctx2.strokeStyle = "#008cff";
				break;
			case 2:
				ctx2.strokeStyle = "#f6ff00";
				break;
			case 3:
				ctx2.strokeStyle = "#9500ff";
				break;
			case 4:
				ctx2.strokeStyle = "#ff9100";
				break;
			case 5:
			default:
				ctx2.strokeStyle = "#08a300";
				break;
		}
	}
    ctx2.lineWidth = 5;
    for (var i = -displaySettings.frequencyBinCount / 2; i <= displaySettings.frequencyBinCount / 2; i++) {
        index = i + displaySettings.frequencyBinCount / 2;
		var xc = i * (c.width / displaySettings.frequencyBinCount);
		scaledRangeValue = mapRange([1, 2], [1, 3], timings[displaySettings.timing][1]);
		var amplitude = 100 / voltages[displaySettings.volts][1];
		var yc = -amplitude * Math.sin(2 * Math.PI * xc * displaySettings.freq * 0.00001 * timings[displaySettings.timing][1]);
		if (displaySettings.inputType == 2) {
			if (yc > 0) {
				yc = amplitude;
			}
			else {
				yc = -amplitude;
			}
		}
		yc *= displaySettings.gain;
		yc = c.height / 2 + yc;
		xc += c.width / 2;
		ctx2.lineTo(xc, yc);
        previousTranslate = { x: displaySettings.horizOffset, y: displaySettings.vertOffset };
    }
    ctx2.stroke();

};

//auto-adjusted oscilloscope
generate_cir[11] = function() {
	switch (document.getElementById('cir11-var').value) {
		case "1":
			displaySettings.displayType = randomWholeNumber(1,2);
			displaySettings.inputType = randomWholeNumber(1,2);
			displaySettings.timing = randomWholeNumber(0,22);
			switch (displaySettings.timing) {
				case 22:
					displaySettings.freq = randomWholeNumber(20, 40);
					displaySettings.freq *= 0.00001;
					break;
				case 21:
					displaySettings.freq = randomWholeNumber(40, 80);
					displaySettings.freq *= 0.00001;
					break;
				case 20:
					displaySettings.freq = randomWholeNumber(10, 20);
					displaySettings.freq *= 0.0001;
					break;
				case 19:
					displaySettings.freq = randomWholeNumber(20, 40);
					displaySettings.freq *= 0.0001;
					break;	
				case 18:
					displaySettings.freq = randomWholeNumber(40, 80);
					displaySettings.freq *= 0.0001;
					break;
				case 17:
					displaySettings.freq = randomWholeNumber(10, 20);
					displaySettings.freq *= 0.001;
					break;
				case 16:
					displaySettings.freq = randomWholeNumber(20, 40);
					displaySettings.freq *= 0.001;
					break;
				case 15:
					displaySettings.freq = randomWholeNumber(40, 80);
					displaySettings.freq *= 0.001;
					break;
				case 14:
					displaySettings.freq = randomWholeNumber(10, 20);
					displaySettings.freq *= 0.01;
					break;
				case 13:
					displaySettings.freq = randomWholeNumber(20, 40);
					displaySettings.freq *= 0.01;
					break;
				case 12:
					displaySettings.freq = randomWholeNumber(40, 80);
					displaySettings.freq *= 0.01;
					break;
				case 11:
					displaySettings.freq = randomWholeNumber(10, 20);
					displaySettings.freq *= 0.1;
					break;
				case 10:
					displaySettings.freq = randomWholeNumber(20, 40);
					displaySettings.freq *= 0.1;
					break;
				case 9:
					displaySettings.freq = randomWholeNumber(40, 80);
					displaySettings.freq *= 0.1;
					break;
				case 8:
					displaySettings.freq = randomWholeNumber(10, 20);
					break;
				case 7:
					displaySettings.freq = randomWholeNumber(20, 40);
					break;
				case 6:
					displaySettings.freq = randomWholeNumber(40, 80);
					break;
				case 5:
					displaySettings.freq = randomWholeNumber(100, 200);
					break;
				case 4:
					displaySettings.freq = randomWholeNumber(200, 400);
					break;
				case 3:
					displaySettings.freq = randomWholeNumber(400, 800);
					break;
				case 2:
					displaySettings.freq = randomWholeNumber(1000, 2000);
					break;
				case 1:
					displaySettings.freq = randomWholeNumber(2000, 4000);
					break;
				case 0:
				default:
					displaySettings.freq = randomWholeNumber(4000, 8000);
					break;
			}
			factor = randomDecimal(1.5,3.25);
			displaySettings.freq = displaySettings.freq / factor * 1000;
			
			displaySettings.volts = randomWholeNumber(0, 9);
			switch (displaySettings.volts) {
				case 9:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.1;
					break;
				case 8:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.03;
					break;
				case 7:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.02;
					break;
				case 6:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.01;
					break;
				case 5:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.003;
					break;
				case 4:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.002;
					break;
				case 3:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.001;
					break;
				case 2:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.0003;
					break;
				case 1:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.0002;
					break;
				case 0:
				default:
					displaySettings.gain = randomWholeNumber(10, 20);
					displaySettings.gain *= 0.0001;
					break; 
			}
			
			createDisplay();
			drawData();
			document.getElementById('timings').innerHTML = timings[displaySettings.timing][0];
			document.getElementById('voltages').innerHTML = voltages[displaySettings.volts][0];
			break;
		default:
	}
};
check_cir[11] = function() {
	switch (document.getElementById('cir11-var').value) {
		case "1":
		
			break;
		default:
	}	
};
show_cir[11] = function() {
	switch (document.getElementById('cir11-var').value) {
		case "1":
		
			break;
		default:
	}	
};

//number system conversions
convert_DECtoBIN = function(dec) {
	var bin = parseInt(dec).toString(2);
	while (bin.length%4 > 0) {
		bin = '0' + bin;
	}
    return bin;
};
convert_BINtoDEC = function(bin) {
	var dec = parseInt(bin, 2);
	return dec;
};
convert_DECtoOCT = function(dec) {
	var oct = parseInt(dec).toString(8);
    return oct;
};
convert_OCTtoDEC = function(oct) {
	var dec = parseInt(oct, 8);
	return dec;
};
convert_DECtoHEX = function(dec) {
	var hex = parseInt(dec).toString(16);
    return hex;
};
convert_HEXtoDEC = function(hex) {
	var dec = parseInt(hex, 16);
	return dec;
};


generate_cir[12] = function() {
	switch (document.getElementById('cir12-var').value) {
		case "1":
			document.getElementById('cir12-BIN-num').value = convert_DECtoBIN(randomWholeNumber(0, 255));
            document.getElementById('cir12-BIN').innerHTML = document.getElementById('cir12-BIN-num').value.toString().replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
			break;
		case "2":
			document.getElementById('cir12-DEC-num').value = randomWholeNumber(0, 255);
            document.getElementById('cir12-DEC').innerHTML = document.getElementById('cir12-DEC-num').value.toString();
			break;
		case "3":
			document.getElementById('cir12-BIN-num').value = convert_DECtoBIN(randomWholeNumber(0, 999999));
            document.getElementById('cir12-BIN').innerHTML = document.getElementById('cir12-BIN-num').value.toString().replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
			break;
		case "4":
			document.getElementById('cir12-HEX-num').value = convert_DECtoHEX(randomWholeNumber(0, 999999));
            document.getElementById('cir12-HEX').innerHTML = document.getElementById('cir12-HEX-num').value.toString().toUpperCase();
			break;
		default:
	}
};
check_cir[12] = function() {
	switch (document.getElementById('cir12-var').value) {
		case "1":
            if (convert_BINtoDEC(document.getElementById('cir12-BIN-num').value) == document.getElementById('cir12-DEC-num').value) {
                document.getElementById('cir12-DEC').classList.remove('alert');
                document.getElementById('cir12-DEC').classList.add('success');
			}
            else {
                document.getElementById('cir12-DEC').classList.remove('success');
                document.getElementById('cir12-DEC').classList.add('alert');
            }
			break;
		case "2":
            if (convert_BINtoDEC(document.getElementById('cir12-BIN-num').value) == document.getElementById('cir12-DEC-num').value) {
                document.getElementById('cir12-BIN').classList.remove('alert');
                document.getElementById('cir12-BIN').classList.add('success');
			}
            else {
                document.getElementById('cir12-BIN').classList.remove('success');
                document.getElementById('cir12-BIN').classList.add('alert');
            }
			break;
		case "3":
            if (convert_BINtoDEC(document.getElementById('cir12-BIN-num').value) == convert_HEXtoDEC(document.getElementById('cir12-HEX-num').value)) {
                document.getElementById('cir12-HEX').classList.remove('alert');
                document.getElementById('cir12-HEX').classList.add('success');
			}
            else {
                document.getElementById('cir12-HEX').classList.remove('success');
                document.getElementById('cir12-HEX').classList.add('alert');
            }
			break;
		case "4":
            if (convert_BINtoDEC(document.getElementById('cir12-BIN-num').value) == convert_HEXtoDEC(document.getElementById('cir12-HEX-num').value)) {
                document.getElementById('cir12-BIN').classList.remove('alert');
                document.getElementById('cir12-BIN').classList.add('success');
			}
            else {
                document.getElementById('cir12-BIN').classList.remove('success');
                document.getElementById('cir12-BIN').classList.add('alert');
            }
			break;
		default:
	}	
};
show_cir[12] = function() {
	switch (document.getElementById('cir12-var').value) {
		case "1":
            document.getElementById('cir12-DEC-num').value = convert_BINtoDEC(document.getElementById('cir12-BIN-num').value);
            document.getElementById('cir12-DEC').classList.remove('alert');
            document.getElementById('cir12-DEC').classList.remove('success');
            document.getElementById('cir12-DEC').classList.add('info');
            document.getElementById('cir12-DEC-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		case "2":
            document.getElementById('cir12-BIN-num').value = convert_DECtoBIN(document.getElementById('cir12-DEC-num').value).toString().replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
            document.getElementById('cir12-BIN').classList.remove('alert');
            document.getElementById('cir12-BIN').classList.remove('success');
            document.getElementById('cir12-BIN').classList.add('info');
            document.getElementById('cir12-BIN-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		case "3":
            document.getElementById('cir12-HEX-num').value = convert_DECtoHEX(convert_BINtoDEC(document.getElementById('cir12-BIN-num').value)).toString().toUpperCase();
            document.getElementById('cir12-HEX').classList.remove('alert');
            document.getElementById('cir12-HEX').classList.remove('success');
            document.getElementById('cir12-HEX').classList.add('info');
            document.getElementById('cir12-HEX-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		case "4":
            document.getElementById('cir12-BIN-num').value = convert_DECtoBIN(convert_HEXtoDEC(document.getElementById('cir12-HEX-num').value)).toString().replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
            document.getElementById('cir12-BIN').classList.remove('alert');
            document.getElementById('cir12-BIN').classList.remove('success');
            document.getElementById('cir12-BIN').classList.add('info');
            document.getElementById('cir12-BIN-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		default:
	}	
};

generate_cir[13] = function() {
	switch (document.getElementById('cir13-var').value) {
		case "1":
			document.getElementById('cir13-OCT-num').value = convert_DECtoOCT(randomWholeNumber(0, 255));
            document.getElementById('cir13-OCT').innerHTML = document.getElementById('cir13-OCT-num').value.toString();
			break;
		case "2":
			document.getElementById('cir13-DEC-num').value = randomWholeNumber(0, 255);
            document.getElementById('cir13-DEC').innerHTML = document.getElementById('cir13-DEC-num').value.toString();
			break;
		default:
	}
};
check_cir[13] = function() {
	switch (document.getElementById('cir13-var').value) {
		case "1":
            if (convert_OCTtoDEC(document.getElementById('cir13-OCT-num').value) == document.getElementById('cir13-DEC-num').value) {
                document.getElementById('cir13-DEC').classList.remove('alert');
                document.getElementById('cir13-DEC').classList.add('success');
			}
            else {
                document.getElementById('cir13-DEC').classList.remove('success');
                document.getElementById('cir13-DEC').classList.add('alert');
            }
			break;
		case "2":
            if (convert_OCTtoDEC(document.getElementById('cir13-OCT-num').value) == document.getElementById('cir13-DEC-num').value) {
                document.getElementById('cir13-OCT').classList.remove('alert');
                document.getElementById('cir13-OCT').classList.add('success');
			}
            else {
                document.getElementById('cir13-OCT').classList.remove('success');
                document.getElementById('cir13-OCT').classList.add('alert');
            }
			break;
		default:
	}	
};
show_cir[13] = function() {
	switch (document.getElementById('cir13-var').value) {
		case "1":
            document.getElementById('cir13-DEC-num').value = convert_OCTtoDEC(document.getElementById('cir13-OCT-num').value);
            document.getElementById('cir13-DEC').classList.remove('alert');
            document.getElementById('cir13-DEC').classList.remove('success');
            document.getElementById('cir13-DEC').classList.add('info');
            document.getElementById('cir13-DEC-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		case "2":
            document.getElementById('cir13-OCT-num').value = convert_DECtoOCT(document.getElementById('cir13-DEC-num').value).toString();
            document.getElementById('cir13-OCT').classList.remove('alert');
            document.getElementById('cir13-OCT').classList.remove('success');
            document.getElementById('cir13-OCT').classList.add('info');
            document.getElementById('cir13-OCT-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		default:
	}	
};

generate_cir[14] = function() {
	switch (document.getElementById('cir14-var').value) {
		case "1":
			document.getElementById('cir14-HEX-num').value = convert_DECtoHEX(randomWholeNumber(0, 255));
            document.getElementById('cir14-HEX').innerHTML = document.getElementById('cir14-HEX-num').value.toString().toUpperCase();
			break;
		case "2":
			document.getElementById('cir14-DEC-num').value = randomWholeNumber(0, 255);
            document.getElementById('cir14-DEC').innerHTML = document.getElementById('cir14-DEC-num').value.toString();
			break;
		case "3":
			document.getElementById('cir14-BIN-num').value = convert_DECtoBIN(randomWholeNumber(0, 999999));
            document.getElementById('cir14-BIN').innerHTML = document.getElementById('cir14-BIN-num').value.toString().replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
			break;
		case "4":
			document.getElementById('cir14-HEX-num').value = convert_DECtoHEX(randomWholeNumber(0, 999999));
            document.getElementById('cir14-HEX').innerHTML = document.getElementById('cir14-HEX-num').value.toString().toUpperCase();
			break;
		default:
	}
};
check_cir[14] = function() {
	switch (document.getElementById('cir14-var').value) {
		case "1":
            if (convert_HEXtoDEC(document.getElementById('cir14-HEX-num').value) == document.getElementById('cir14-DEC-num').value) {
                document.getElementById('cir14-DEC').classList.remove('alert');
                document.getElementById('cir14-DEC').classList.add('success');
			}
            else {
                document.getElementById('cir14-DEC').classList.remove('success');
                document.getElementById('cir14-DEC').classList.add('alert');
            }
			break;
		case "2":
            if (convert_HEXtoDEC(document.getElementById('cir14-HEX-num').value) == document.getElementById('cir14-DEC-num').value) {
                document.getElementById('cir14-HEX').classList.remove('alert');
                document.getElementById('cir14-HEX').classList.add('success');
			}
            else {
                document.getElementById('cir14-HEX').classList.remove('success');
                document.getElementById('cir14-HEX').classList.add('alert');
            }
			break;
		case "3":
            if (convert_BINtoDEC(document.getElementById('cir14-BIN-num').value) == convert_HEXtoDEC(document.getElementById('cir14-HEX-num').value)) {
                document.getElementById('cir14-HEX').classList.remove('alert');
                document.getElementById('cir14-HEX').classList.add('success');
			}
            else {
                document.getElementById('cir14-HEX').classList.remove('success');
                document.getElementById('cir14-HEX').classList.add('alert');
            }
			break;
		case "4":
            if (convert_BINtoDEC(document.getElementById('cir14-BIN-num').value) == convert_HEXtoDEC(document.getElementById('cir14-HEX-num').value)) {
                document.getElementById('cir14-BIN').classList.remove('alert');
                document.getElementById('cir14-BIN').classList.add('success');
			}
            else {
                document.getElementById('cir14-BIN').classList.remove('success');
                document.getElementById('cir14-BIN').classList.add('alert');
            }
			break;
		default:
	}	
};
show_cir[14] = function() {
	switch (document.getElementById('cir14-var').value) {
		case "1":
            document.getElementById('cir14-DEC-num').value = convert_HEXtoDEC(document.getElementById('cir14-HEX-num').value);
            document.getElementById('cir14-DEC').classList.remove('alert');
            document.getElementById('cir14-DEC').classList.remove('success');
            document.getElementById('cir14-DEC').classList.add('info');
            document.getElementById('cir14-DEC-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		case "2":
            document.getElementById('cir14-HEX-num').value = convert_DECtoHEX(document.getElementById('cir14-DEC-num').value).toString().toUpperCase();
            document.getElementById('cir14-HEX').classList.remove('alert');
            document.getElementById('cir14-HEX').classList.remove('success');
            document.getElementById('cir14-HEX').classList.add('info');
            document.getElementById('cir14-HEX-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		case "3":
            document.getElementById('cir14-HEX-num').value = convert_DECtoHEX(convert_BINtoDEC(document.getElementById('cir14-BIN-num').value)).toString().toUpperCase();
            document.getElementById('cir14-HEX').classList.remove('alert');
            document.getElementById('cir14-HEX').classList.remove('success');
            document.getElementById('cir14-HEX').classList.add('info');
            document.getElementById('cir14-HEX-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		case "4":
            document.getElementById('cir14-BIN-num').value = convert_DECtoBIN(convert_HEXtoDEC(document.getElementById('cir14-HEX-num').value)).toString().replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
            document.getElementById('cir14-BIN').classList.remove('alert');
            document.getElementById('cir14-BIN').classList.remove('success');
            document.getElementById('cir14-BIN').classList.add('info');
            document.getElementById('cir14-BIN-num').disabled = true;
            document.getElementById('check_but').disabled = true;
            break;
		default:
	}	
};