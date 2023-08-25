// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const likeButton = document.querySelector(".like");
  const likeGlyph = document.querySelector(".like-glyph");

  // Simulate a server call
  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      // Simulate a response with a 50% chance of success
      setTimeout(() => {
        const isSuccess = Math.random() < 0.5;
        if (isSuccess) {
          resolve("Success");
        } else {
          reject("Server error occurred");
        }
      }, 1000);
    });
  }

  likeButton.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Successful server response
        likeGlyph.textContent = "♥";
        likeGlyph.classList.add("activated-heart");
      })
      .catch((error) => {
        // Server error response
        modalMessage.textContent = error;
        errorModal.classList.remove("hidden");
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });

  likeGlyph.addEventListener("click", () => {
    likeGlyph.textContent = "♡";
    likeGlyph.classList.remove("activated-heart");
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
