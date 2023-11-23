function checkWin() {
    let winOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let currentOrder = Array.from(document.getElementById("board").children).map(tile => tile.src.split("/").pop().split(".")[0]);

    if (currentOrder.join("") === winOrder.join("")) {
      displayPromotionalCode();
    }
  }

  function displayPromotionalCode() {
    let promoCode = generatePromoCode();
    alert("Congratulations! You win! Your promotional code is: " + promoCode);
  }

  function generatePromoCode() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  let rows = 3;
  let columns = 3;

  let currTile;
  let otherTile;

  let turns = 0;
  let imgOrder = ["4", "1", "5", "7", "9", "3", "2", "8", "6"];

  window.onload = function () {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        let tile = document.createElement("img");
        tile.id = r.toString() + "-" + c.toString();
        tile.src = "/yeltoresanzharmaga/assets/" + imgOrder.shift() + ".jpg";
        //Drag functionality

        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);
        document.getElementById("board").append(tile);

      }
    }
  };
  function dragStart() {
    currTile = this; //this refers to the img tile being dragged
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {

  }

  function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
  }

  function dragEnd() {
      if (!otherTile.src.includes("9.jpg")) {
          return;
      }

      let currCoords = currTile.id.split("-");
      let r = parseInt(currCoords[0]);
      let c = parseInt(currCoords[1]);

      let otherCoords = otherTile.id.split("-");
      let r2 = parseInt(otherCoords[0]);
      let c2 = parseInt(otherCoords[1]);

      if ((r === r2 && (c2 === c - 1 || c2 === c + 1)) || (c === c2 && (r2 === r - 1 || r2 === r + 1))) {
          let currImg = currTile.src;
          let otherImg = otherTile.src;

          currTile.src = otherImg;
          otherTile.src = currImg;

          turns += 1;
          document.getElementById("turns").innerText = turns;

          checkWin();
      }
  }

  var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}