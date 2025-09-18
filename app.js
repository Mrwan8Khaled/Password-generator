      const lengthInput = document.getElementById("num");
      const capCase = document.getElementById("CapCase");
      const smlCase = document.getElementById("SmlCase");
      const numbers = document.getElementById("Numbers");
      const symbols = document.getElementById("Symbols");
      const createBtn = document.getElementById("create");
      const passField = document.getElementById("pass");

      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const num = "0123456789";
      const sym = "!@#$%^&*()_+[]{}<>?/|";

      function generatePassword() {
        let length = parseInt(lengthInput.value) || 12;
        let chars = "";

        if (capCase.checked) chars += upper;
        if (smlCase.checked) chars += lower;
        if (numbers.checked) chars += num;
        if (symbols.checked) chars += sym;

        if (!chars) {
          passField.textContent = "⚠️ Please select at least one option!";
          return;
        }

        let password = "";
        for (let i = 0; i < length; i++) {
          password += chars[Math.floor(Math.random() * chars.length)];
        }

        passField.textContent = password;
      }

      createBtn.addEventListener("click", generatePassword);
