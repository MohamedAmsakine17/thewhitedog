const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      if (e.target.classList.contains("hidden-left")) {
        e.target.classList.add("show-left");
      } else if (e.target.classList.contains("hidden-right")) {
        e.target.classList.add("show-right");
      } else if (e.target.classList.contains("hidden-top")) {
        e.target.classList.add("show-top");
      } else if (e.target.classList.contains("hidden-bottom")) {
        e.target.classList.add("show-bottom");
      } else {
        e.target.classList.add("show");
      }
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".hidden, .hidden-left, .hidden-right, .hidden-top, .hidden-bottom"
);
hiddenElements.forEach((el) => observer.observe(el));

document.querySelectorAll(".faq-header").forEach((e) => {
  e.addEventListener("click", function () {
    const content = this.nextElementSibling;
    // Toggle accordion state
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse the content
    } else {
      // Expand the content
      content.style.maxHeight = content.scrollHeight + "px"; // Set max-height to the scroll height of the content
    }
  });
});

const copyContent = () => {
  // Create a temporary textarea element
  var tempTextarea = document.createElement("textarea");
  // Set its value to the text you want to copy
  tempTextarea.value = document.getElementById("address").textContent;
  // Append it to the body
  document.body.appendChild(tempTextarea);
  // Select the text
  tempTextarea.select();
  // Copy the text
  document.execCommand("copy");
  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Get the button element
  var copyButton = document.getElementById("address");
  // Save the original text
  var originalText = copyButton.textContent;
  // Change the button text
  copyButton.textContent = "Copied!";

  // Set a timeout to change the text back after 2 seconds (2000 milliseconds)
  setTimeout(function () {
    copyButton.textContent = originalText;
  }, 500);
};
