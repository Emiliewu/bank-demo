$(function () {
  $("#add-account").on("submit", function (event) {
    event.preventDefault();
    const username = $("#username").val();
    console.log(username);
    if (username.trim()) {
      const URL = `http://localhost:3000/api/accounts`;

      const addAccount = async (username) => {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        });

        const data = await response.json();
        console.log(data);
        return data;
      };
      addAccount(username);
      $("#username").val("");
    } else {
      alert("Please enter a username");
    }
  });

  // show all accounts

  $("#all-accounts").on("click", function () {
    const URL = `http://localhost:3000/api/accounts`;
    const getAccounts = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      return data;
    };
    getAccounts();
  });
});
