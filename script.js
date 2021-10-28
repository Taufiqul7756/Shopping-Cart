//phone section plus
minusPlusEvent("phonePlusBtn", 1);
minusPlusEvent("phoneMinusBtn", -1);

function minusPlusEvent(id, plusMinus) {
  const phonePlusBtn = document.getElementById(id);
  phonePlusBtn.addEventListener("click", function () {
    let currentValue = document.getElementById("currentInput").value;
    const currentNumber = parseFloat(currentValue);

    const currentNumberUpdate = parseFloat(currentNumber + plusMinus);

    if (currentNumberUpdate < 0) {
      document.getElementById("currentInput").value = 0;
      document.getElementById("phone1Price").innerText = 0;
    } else {
      document.getElementById("currentInput").value = currentNumberUpdate;
      document.getElementById("phone1Price").innerText =
        currentNumberUpdate * 1219;
    }
  });
}

// phone section remove button
const phoneRemoveBtn = document.getElementById("phoneRemoveBtn");
phoneRemoveBtn.addEventListener("click", function () {
  document.getElementById("currentInput").value = 0;
  document.getElementById("phone1Price").innerText = "0";
});

//case section

caseMinusPlusEvent("casePlusBtn", 1);
caseMinusPlusEvent("caseMinusBtn", -1);

function caseMinusPlusEvent(id, plusMinus) {
  const casePlusBtn = document.getElementById(id);
  casePlusBtn.addEventListener("click", function () {
    let currentValue = document.getElementById("caseInput").value;
    const currentNumber = parseFloat(currentValue);

    const caseCurrentNumberUpdate = parseFloat(currentNumber + plusMinus);

    if (caseCurrentNumberUpdate < 0) {
      document.getElementById("caseInput").value = 0;
      document.getElementById("case1Price").innerText = 0;
    } else {
      document.getElementById("caseInput").value = caseCurrentNumberUpdate;
      document.getElementById("case1Price").innerText =
        caseCurrentNumberUpdate * 59;
    }
  });
}

const caseRemoveBtn = document.getElementById("caseRemoveBtn");
caseRemoveBtn.addEventListener("click", function () {
  document.getElementById("caseInput").value = 0;
  document.getElementById("case1Price").innerText = "0";
});
