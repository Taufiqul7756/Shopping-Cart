//phone section plus
minusPlusEvent("phonePlusBtn", 1);
minusPlusEvent("phoneMinusBtn", -1);

function minusPlusEvent(id, plusMinus) {
  const phonePlusBtn = document.getElementById(id);
  phonePlusBtn.addEventListener("click", function () {
    let currentValue = document.getElementById("currentInput").value;
    const currentNumber = parseFloat(currentValue);

    const phoneCurrentNumberUpdate = parseFloat(currentNumber + plusMinus);

    if (phoneCurrentNumberUpdate < 0) {
      document.getElementById("currentInput").value = 00;
      document.getElementById("phone1Price").innerText = 00;
    } else {
      document.getElementById("currentInput").value = phoneCurrentNumberUpdate;
      document.getElementById("phone1Price").innerText =
        phoneCurrentNumberUpdate * 1219;
    }
    subtotalFunc();
  });
}

// phone section remove button
const phoneRemoveBtn = document.getElementById("phoneRemoveBtn");
phoneRemoveBtn.addEventListener("click", function () {
  document.getElementById("currentInput").value = 00;
  document.getElementById("phone1Price").innerText = "00";
  subtotalFunc();
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
      document.getElementById("caseInput").value = 00;
      document.getElementById("case1Price").innerText = 00;
    } else {
      document.getElementById("caseInput").value = caseCurrentNumberUpdate;
      document.getElementById("case1Price").innerText =
        caseCurrentNumberUpdate * 59;
    }
    subtotalFunc();
  });
}

const caseRemoveBtn = document.getElementById("caseRemoveBtn");
caseRemoveBtn.addEventListener("click", function () {
  document.getElementById("caseInput").value = 00;
  document.getElementById("case1Price").innerText = "00";
  subtotalFunc();
});

//subtotal tax total
const subtotalFunc = () => {
  const subTotalValue =
    parseFloat(document.getElementById("phone1Price").innerText) +
    parseFloat(document.getElementById("case1Price").innerText);
  console.log({ subTotalValue });

  document.getElementById("inputSubtotal").innerText = subTotalValue;

  const percentage = (5 * subTotalValue) / 100;
  document.getElementById("inputTax").innerText = percentage;

  document.getElementById("inputTotal").innerText = percentage + subTotalValue;
};
