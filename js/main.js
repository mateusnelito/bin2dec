function mainScript() {
  const binInput = document.querySelector("#bin-input");
  const decimalOutput = document.querySelector("#decimal");

  binInput.addEventListener("input", (e) => {
    const bin = binInput.value;
    const binReg = /^[0-1]{1,}$/g;
    if (binReg.test(bin)) {
      decimalOutput.value = bin2dec(bin);
    } else if (bin === "") {
      decimalOutput.value = "";
      return;
    } else {
      console.log("Binário inválido!");
      decimalOutput.value = "";
    }
  });

  function bin2dec(bin) {
    let decimal = 0;
    const binLength = bin.length - 1;
    for (let i = 0; i <= binLength; i++) {
      decimal += bin[i] * parseInt(Math.pow(2, binLength - i));
    }
    return decimal;
  }
}
mainScript();
