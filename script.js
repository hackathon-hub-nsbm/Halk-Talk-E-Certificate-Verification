let certificateData = [];

fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    certificateData = data;
  });

const form = document.getElementById("certForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const certificateId = document.getElementById("certificateId").value;
  const certificateFound = certificateData.some(
    (cert) => cert.id === certificateId,
  );

  confirmationMessage.style.display = certificateFound ? "block" : "none";

  if (certificateFound) {
    console.log("Certificate is authentic");
    const certificate = certificateData.find(
      (cert) => cert.id === certificateId,
    );

    confirmationMessage.textContent =
      "Valid certificate. Certificate holder: " +
      certificate.firstName +
      " " +
      certificate.lastName;
  } else {
    confirmationMessage.textContent =
      "Invalid certificate. Please enter the correct code.";
  }
});
