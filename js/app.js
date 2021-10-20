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
				mult = randomWholeNumber(0, 8);
				document.getElementById('ring2').style.backgroundColor = ctable[mult];
				document.getElementById('ring2').title = ntable[mult];
				document.getElementById('ring2').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 10);
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
				mult = randomWholeNumber(0, 8);
				document.getElementById('ring2').style.backgroundColor = ctable[mult];
				document.getElementById('ring2').title = ntable[mult];
				document.getElementById('ring2').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 10);
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
				mult = randomWholeNumber(0, 8);
				document.getElementById('ring3').style.backgroundColor = ctable[mult];
				document.getElementById('ring3').title = ntable[mult];
				document.getElementById('ring3').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 10);
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
				mult = randomWholeNumber(0, 8);
				document.getElementById('ring3').style.backgroundColor = ctable[mult];
				document.getElementById('ring3').title = ntable[mult];
				document.getElementById('ring3').innerHTML = ntable[mult];
			}
			else {
				mult = randomWholeNumber(0, 10);
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
			if (parseInt(document.getElementById('cir9-ring2').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.01;
			}
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
			if (parseInt(document.getElementById('cir9-ring2').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.01;
			}
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
			if (parseInt(document.getElementById('cir9-ring3').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.01;
			}
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
			if (parseInt(document.getElementById('cir9-ring3').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.01;
			}
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
			if (parseInt(document.getElementById('cir9-ring2').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.01;
			}
			var tol = 20;
			document.getElementById('cir9-r-num').value = value;
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
			if (parseInt(document.getElementById('cir9-ring2').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring2').value) == 10) {
				value = value * 0.01;
			}
			var tol = ttable[parseInt(document.getElementById('cir9-ring3').value)];
			document.getElementById('cir9-r-num').value = value;
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
			if (parseInt(document.getElementById('cir9-ring3').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.01;
			}
			var tol = ttable[parseInt(document.getElementById('cir9-ring4').value)];
			document.getElementById('cir9-r-num').value = value;
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
			if (parseInt(document.getElementById('cir9-ring3').value) < 9) {
				value = value * temp;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 9) {
				value = value * 0.1;
			}
			else if (parseInt(document.getElementById('cir9-ring3').value) == 10) {
				value = value * 0.01;
			}
			var tol = ttable[parseInt(document.getElementById('cir9-ring4').value)];
			var tcr = tcrtable[parseInt(document.getElementById('cir9-ring5').value)];
			document.getElementById('cir9-r-num').value = value;
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