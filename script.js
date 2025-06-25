function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const status = document.getElementById("status");

  db.collection("voyagers").where("username", "==", user).get()
    .then(snapshot => {
      if (snapshot.empty) {
        status.textContent = "User not found.";
        return;
      }

      const voyager = snapshot.docs[0].data();
      if (voyager.password === pass) {
        status.textContent = `Welcome, ${user}!`;
        // redirect to dashboard page
      } else {
        status.textContent = "Incorrect password.";
      }
    })
    .catch(err => {
      status.textContent = "Error: " + err.message;
    });
}
