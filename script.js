// This will be set by the JSONP callback
      let userIp = null;

      // JSONP callback used by ipify
      function getIP(json) {
        userIp = json.ip;
      }

      document.addEventListener("DOMContentLoaded", () => {
        const nameInput = document.getElementById("nameInput");
        const nameDisplay = document.getElementById("nameDisplay");
        const ageP = document.getElementById("age");
        const errorMessage = document.getElementById("errorMessage");
        const btn = document.getElementById("searchBtn");

        btn.addEventListener("click", () => {
          const name = nameInput.value.trim();

          if (!name) {
            errorMessage.textContent = "Please enter your name.";
            nameDisplay.textContent = "";
            ageP.textContent = "";
            return;
          }

          errorMessage.textContent = "";
          nameDisplay.textContent = `Welcome, ${name}!`;

          if (userIp) {
            ageP.textContent = `Your IP is: ${userIp}`;
          } else {
            ageP.textContent =
              "Getting your IP, please wait a moment and try again.";
          }
        });
      });