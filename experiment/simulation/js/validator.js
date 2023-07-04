import { getBoxOrder } from "./main.js";

function convertToLowerCase(inputString) {
    return inputString.toLowerCase();
  }

export function isFilled() {
    // checking verilog module
    let fileName = document.getElementById("file-name");
    let VolSrcName = document.getElementById("voltage-source-name");
    let volPos = document.getElementById("voltage-positive-terminal-selector");
    let volNeg = document.getElementById("voltage-negative-terminal-selector");
    let subcktName = document.getElementById("subckt-name");
    let subcktIn = document.getElementById("subckt-in-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let pmosName = document.getElementById("pmos-name");
    let pmosDrain = document.getElementById("pmos-drain-terminal");
    let pmosGate = document.getElementById("pmos-gate-terminal");
    let pmosSource = document.getElementById("pmos-source-terminal");
    let pmosBody = document.getElementById("pmos-body-terminal");
    let nmosName = document.getElementById("nmos-name");
    let nmosDrain = document.getElementById("nmos-drain-terminal");
    let nmosGate = document.getElementById("nmos-gate-terminal");
    let nmosSource = document.getElementById("nmos-source-terminal");
    let nmosBody = document.getElementById("nmos-body-terminal");
    let endSubckt = document.getElementById("end-subckt-name");
    let invCallInstance = document.getElementById("inverter-call-instance-name");
    let invCallIn = document.getElementById("inverter-call-input");
    let invCallOut = document.getElementById("inverter-call-output");
    let invCallSubckt = document.getElementById("inverter-call-subckt-name");

    let error = "Highlighted part of the code is incomplete."
    if (fileName.value.trim() == '') {
        printErrors(error, fileName);
        return false;
    }
    if (VolSrcName.value.trim() == '') {
        printErrors(error, VolSrcName);
        return false;
    }
    if (volPos.value === "") {
        printErrors(error, volPos);
        return false;
    }
    if (volNeg.value === "") {
        printErrors(error, volNeg);
        return false;
    }
    if (subcktName.value.trim() == '') {
        printErrors(error, subcktName);
        return false;
    }
    if (subcktOut.value.trim() == '') {
        printErrors(error, subcktOut);
        return false;
    }
    if (subcktIn.value.trim() == '') {
        printErrors(error, subcktIn);
        return false;
    }
    if (pmosName.value.trim() == '') {
        printErrors(error, pmosName);
        return false;
    }
    if (pmosDrain.value.trim() == '') {
        printErrors(error, pmosDrain);
        return false;
    }
    if (pmosGate.value.trim() == '') {
        printErrors(error, pmosGate);
        return false;
    }
    if (pmosSource.value.trim() == '') {
        printErrors(error, pmosSource);
        return false;
    }
    if (pmosBody.value.trim() == '') {
        printErrors(error, pmosBody);
        return false;
    }
    if (nmosName.value.trim() == '') {
        printErrors(error, nmosName);
        return false;
    }
    if (nmosDrain.value.trim() == '') {
        printErrors(error, nmosDrain);
        return false;
    }
    if (nmosGate.value.trim() == '') {
        printErrors(error, nmosGate);
        return false;
    }
    if (nmosSource.value.trim() == '') {
        printErrors(error, nmosSource);
        return false;
    }
    if (nmosBody.value.trim() == '') {
        printErrors(error, nmosBody);
        return false;
    }
    if (endSubckt.value.trim() == '') {
        printErrors(error, endSubckt);
        return false;
    }
    if (invCallInstance.value.trim() == '') {
        printErrors(error, invCallInstance);
        return false;
    }
    if (invCallIn.value.trim() == '') {
        printErrors(error, invCallIn);
        return false;
    }
    if (invCallOut.value.trim() == '') {
        printErrors(error, invCallOut);
        return false;
    }
    if (invCallSubckt.value.trim() == '') {
        printErrors(error, invCallSubckt);
        return false;
    }
    return true;
}

export function printErrors(errorMsg, errorID) {
    document.getElementById('result').innerHTML = errorMsg;
    document.getElementById('result').classList.remove('text-success');
    document.getElementById('result').classList.add('text-danger');
    if (errorID) {
        errorID.classList.add('highlight');
        setTimeout(function () {
            errorID.classList.remove('highlight');
        }, 3000);
    }
}

export function isValid() {

    // checking the order of the codeblocks
    const boxOrder1 = getBoxOrder('spice-code');
    let container = document.getElementById("container");
    if (boxOrder1[0] !== "1" || boxOrder1[1] !== "2" || boxOrder1[2] !== "3" || boxOrder1[3] !== "4" || boxOrder1[4] !== "5" || boxOrder1[5] !== "6" || boxOrder1[6] !== "7") {
        let msg = "Please rearrange the code blocks in the correct order."
        printErrors(msg, container);
        return false;
    }

    // Checking if the node and variable names are valid
    let fileName = document.getElementById("file-name");
    let VolSrcName = document.getElementById("voltage-source-name");
    let subcktName = document.getElementById("subckt-name");
    let subcktIn = document.getElementById("subckt-in-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let pmosName = document.getElementById("pmos-name");
    let pmosDrain = document.getElementById("pmos-drain-terminal");
    let pmosGate = document.getElementById("pmos-gate-terminal");
    let pmosSource = document.getElementById("pmos-source-terminal");
    let pmosBody = document.getElementById("pmos-body-terminal");
    let nmosName = document.getElementById("nmos-name");
    let nmosDrain = document.getElementById("nmos-drain-terminal");
    let nmosGate = document.getElementById("nmos-gate-terminal");
    let nmosSource = document.getElementById("nmos-source-terminal");
    let nmosBody = document.getElementById("nmos-body-terminal");
    let endSubckt = document.getElementById("end-subckt-name");
    let invCallInstance = document.getElementById("inverter-call-instance-name");
    let invCallIn = document.getElementById("inverter-call-input");
    let invCallOut = document.getElementById("inverter-call-output");
    let invCallSubckt = document.getElementById("inverter-call-subckt-name");
    var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;
    if (!regex.test(VolSrcName.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, VolSrcName);
        return false;
    }
    if (!regex.test(subcktName.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, subcktName);
        return false;
    }
    if (!regex.test(subcktIn.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktIn);
        return false;
    }
    if (!regex.test(subcktOut.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktOut);
        return false;
    }
    if (!regex.test(pmosName.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, pmosName);
        return false;
    }
    if (!regex.test(nmosName.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, nmosName);
        return false;
    }
    if (!regex.test(endSubckt.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, endSubckt);
        return false;
    }
    if (!regex.test(invCallInstance.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, invCallInstance);
        return false;
    }
    if (!regex.test(invCallSubckt.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, invCallSubckt);
        return false;
    }
    // mapping variables
    const variableMap = new Map();
    const variableSubcktMap = new Map();
    let variableList = ["ptm_45nm.txt", "supply", "lmin", "wmin", "wp", convertToLowerCase(VolSrcName.value.trim()), convertToLowerCase(subcktName.value.trim()), convertToLowerCase(invCallInstance.value.trim()), "a", "out", "V1", "vdd", "gnd"];
    let variableSubcktList = [convertToLowerCase(subcktName.value.trim()), convertToLowerCase(subcktIn.value.trim()), convertToLowerCase(subcktOut.value.trim()), convertToLowerCase(pmosName.value.trim()), convertToLowerCase(nmosName.value.trim()), "vdd", "gnd", "wmin", "lmin"];
    let variables_regular = [VolSrcName, subcktName, invCallInstance];
    let subcktVars = [subcktName, subcktIn, subcktOut, pmosName, nmosName];

    // Iterate over the variable list
    for (let variable in variableList) {
        // Check if the variable already exists in the Map
        if (variableMap.has(variableList[variable])) {
            // If it exists, increment the count by 1
            let count = variableMap.get(variableList[variable]);
            variableMap.set(variableList[variable], count + 1);
        } else {
            // If it doesn't exist, set the count to 1
            variableMap.set(variableList[variable], 1);
        }

    }
    // Iterate over the variable list subckt
    for (let variable in variableSubcktList) {
        // Check if the variable already exists in the Map
        if (variableSubcktMap.has(variableSubcktList[variable])) {
            // If it exists, increment the count by 1
            let count = variableSubcktMap.get(variableSubcktList[variable]);
            variableSubcktMap.set(variableSubcktList[variable], count + 1);
        } else {
            // If it doesn't exist, set the count to 1
            variableSubcktMap.set(variableSubcktList[variable], 1);
        }
    }
    // checking if variables names declared more than once
    for (let variable in variables_regular) {
        if (variableMap.get(convertToLowerCase(variables_regular[variable].value.trim())) > 1) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, variables_regular[variable]);
            return false;
        }
    }
    for (let variable in subcktVars) {
        if (variableSubcktMap.get(convertToLowerCase(subcktVars[variable].value.trim())) > 1) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, subcktVars[variable]);
            return false;
        }
    }
    // checking if file name matches
    if (fileName.value.trim() !== 'PTM_45nm.txt') {
        let msg = "There is no file defined with the name " + fileName.value.trim();
        printErrors(msg, fileName);
        return false;
    }

    // checking if voltage source name is not equal to vdd
    if (convertToLowerCase(VolSrcName.value.trim()) === "vdd") {
        let msg = "Name of the voltage source cannot be vdd as this variable already in use";
        printErrors(msg, VolSrcName);
        return false;
    }

    return true;
}

export function printObsTable() {
    let correct = true;
    let subcktName = document.getElementById("subckt-name");
    let subcktIn = document.getElementById("subckt-in-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let pmosDrain = document.getElementById("pmos-drain-terminal");
    let pmosGate = document.getElementById("pmos-gate-terminal");
    let pmosSource = document.getElementById("pmos-source-terminal");
    let pmosBody = document.getElementById("pmos-body-terminal");
    let nmosDrain = document.getElementById("nmos-drain-terminal");
    let nmosGate = document.getElementById("nmos-gate-terminal");
    let nmosSource = document.getElementById("nmos-source-terminal");
    let nmosBody = document.getElementById("nmos-body-terminal");
    let endSubckt = document.getElementById("end-subckt-name");
    let invCallIn = document.getElementById("inverter-call-input");
    let invCallOut = document.getElementById("inverter-call-output");
    let invCallSubckt = document.getElementById("inverter-call-subckt-name");
    // checking if voltage source declared correctly
    let volPos = document.getElementById("voltage-positive-terminal-selector");
    let volNeg = document.getElementById("voltage-negative-terminal-selector");
    if (volPos.value !== "vdd") {
        correct = false;
    }
    if (volNeg.value === "vdd" || volNeg.value === "1.1") {
        correct = false;
    }

    // checking subckt connection
    if (convertToLowerCase(pmosDrain.value.trim()) !== convertToLowerCase(subcktOut.value.trim())) {
        correct = false;
    }
    if (convertToLowerCase(pmosGate.value.trim()) !== convertToLowerCase(subcktIn.value.trim())) {
        correct = false;
    }
    if (convertToLowerCase(pmosSource.value.trim()) !== "vdd") {
        correct = false;
    }
    if (convertToLowerCase(pmosBody.value.trim()) !== "vdd") {
        correct = false;
    }
    if (convertToLowerCase(nmosDrain.value.trim()) !== convertToLowerCase(subcktOut.value.trim())) {
        correct = false;
    }
    if (convertToLowerCase(nmosGate.value.trim()) !== convertToLowerCase(subcktIn.value.trim())) {
        correct = false;
    }
    if (convertToLowerCase(nmosSource.value.trim()) !== "gnd" && convertToLowerCase(nmosSource.value.trim()) !== "0") {
        correct = false;
    }
    if (convertToLowerCase(nmosBody.value.trim()) !== "gnd" && convertToLowerCase(nmosBody.value.trim()) !== "0") {
        correct = false;
    }
    if (convertToLowerCase(endSubckt.value.trim()) !== convertToLowerCase(subcktName.value.trim())) {
        correct = false;
    }

    // checking the subcircuit calling
    if (convertToLowerCase(invCallIn.value.trim()) !== "a") {
        correct = false;
    }
    if (convertToLowerCase(invCallOut.value.trim()) !== "out") {
        correct = false;
    }
    if (convertToLowerCase(invCallSubckt.value.trim()) !== convertToLowerCase(subcktName.value.trim())) {
        correct = false;
    }

    if (correct === true) {
        document.getElementById("obs-table").innerHTML = `<div>
    <div class="is-size-4">Report</div>
    <pre>
        Circuit: *inverter*

        Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

        Warning: v1: no DC value, transient time 0 value used

        Initial Transient Solution
        --------------------------

        Node                                   Voltage
        ----                                   -------
        vdd                                        1.1
        out                                        1.1
        a                                            0
        v1#branch                          1.10888e-12
        vvdd#branch                       -3.15131e-12


        No. of Data Rows : 8361
    </pre>
    <div class="is-size-4">Input graph</div>
    <img src='images/not-input.png' alt='image of not input graph'>
    <div class="is-size-4">Output graph</div>
    <img src='images/not-output.png' alt='image of not output graph'>
</div>`;
        document.getElementById("result").innerHTML = "<span>&#10003;</span> Success"
        document.getElementById("result").className = "text-success";
    }
    else {
        document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
        document.getElementById("result").className = "text-danger";
    }
    return;
}

