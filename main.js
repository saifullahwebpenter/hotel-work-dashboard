
  // side bar drop down
  document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown-btn");
    dropdowns.forEach(function (dropdown) {
      // Initially hide the dropdown content
      var dropdownContent = dropdown.nextElementSibling;
      dropdownContent.style.maxHeight = "0";
  
      dropdown.addEventListener("click", function () {
        // Close all other dropdowns
        dropdowns.forEach(function (otherDropdown) {
          var otherContent = otherDropdown.nextElementSibling;
          if (otherDropdown !== dropdown) {
            otherContent.style.maxHeight = "0";
            otherContent.classList.remove("show");
          }
        });
  
        // Toggle the clicked dropdown
        if (dropdownContent.style.maxHeight === "0px") {
          dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
          dropdownContent.classList.add("show");
        } else {
          dropdownContent.style.maxHeight = "0";
          dropdownContent.classList.remove("show");
        }
      });
    });
  });

  // 
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-control");
    const searchButton = document.querySelector(".search-btn");
  
    searchButton.addEventListener("click", function () {
      searchInput.style.width = "200px";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-control");
    const searchButton = document.querySelector(".clear-btn");
  
    searchButton.addEventListener("click", function () {
      searchInput.style.width = "0";
    });
  });

// profile btn dropdown
  document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.querySelector(".profile");
    const profileDropdown = document.querySelector(".profile-dropdown");
  
    profileButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up
      if (profileDropdown.style.display === "block") {
        profileDropdown.style.display = "none";
      } else {
        profileDropdown.style.display = "block";
      }
    });
  
    // Optional: Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.style.display = "none";
      }
    });
  });


//   screen zoom
document.querySelector('.zoom button').addEventListener('click', function() {
    const icon = this.querySelector('i'); // Select the <i> tag inside the button
    
    if (!document.fullscreenElement) {
        // Enter full-screen mode
        const chartContainer = document.documentElement; // You can replace this with a specific element if needed
        
        if (chartContainer.requestFullscreen) {
            chartContainer.requestFullscreen();
        } else if (chartContainer.mozRequestFullScreen) { // Firefox
            chartContainer.mozRequestFullScreen();
        } else if (chartContainer.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            chartContainer.webkitRequestFullscreen();
        } else if (chartContainer.msRequestFullscreen) { // IE/Edge
            chartContainer.msRequestFullscreen();
        }
        
        // Change icon to "minimize" when entering full-screen
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-arrows-maximize');
        
    } else {
        // Exit full-screen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        
        // Change icon back to "maximize" when exiting full-screen
        icon.classList.remove('fa-arrows-maximize');
        icon.classList.add('fa-expand');
    }
});

// EDIT FORM DROPDOWN

   // Get the buttons and the form
   const editBtn = document.getElementById('edit-btn');
   const editForm = document.getElementById('edit-form');
   const cancelBtn = document.getElementById('edit-cancel-btn');
   const closeBtn = document.getElementById('edit-close-btn');
 
   // Show the form when the "Edit" button is clicked
   editBtn.addEventListener('click', function() {
     editForm.style.display = 'block';
   });
 
   // Hide the form when the "Cancel" button is clicked
   cancelBtn.addEventListener('click', function() {
     editForm.style.display = 'none';
   });
 
   // Hide the form when the "X" mark is clicked
   closeBtn.addEventListener('click', function() {
     editForm.style.display = 'none';
   });


 
  // INCREASE

   // Get the buttons and the form
   const sidBtn = document.getElementById('system-increase-decrease-btn');
   const sidForm = document.getElementById('system-increase-decrease');
   const cancelsidBtn = document.getElementById('sid-cancel-btn');
   const closesidBtn = document.getElementById('sid-close-btn');
 
   // Show the form when the "Edit" button is clicked
   sidBtn.addEventListener('click', function() {
     sidForm.style.display = 'block';
   });
 
   // Hide the form when the "Cancel" button is clicked
   cancelsidBtn.addEventListener('click', function() {
     sidForm.style.display = 'none';
   });
 
   // Hide the form when the "X" mark is clicked
   closesidBtn.addEventListener('click', function() {
     sidForm.style.display = 'none';
   });


  //  withdrawl popup form
  // Get the buttons and the form
  const withdrawlBtn = document.getElementById('withdrawl-method-btn');
  const withdrawlForm = document.getElementById('withdrawl-method');
  const cancelwithdrawlBtn = document.getElementById('withdrawl-cancel-btn');
  const closewithdrawlBtn = document.getElementById('withdrawl-close-btn');

  // Show the form when the "Edit" button is clicked
  withdrawlBtn.addEventListener('click', function() {
   withdrawlForm.style.display = 'block';

  });

  // Hide the form when the "Cancel" button is clicked
  cancelwithdrawlBtn.addEventListener('click', function() {
   withdrawlForm.style.display = 'none';
  });

  // Hide the form when the "X" mark is clicked
  closewithdrawlBtn.addEventListener('click', function() {
   withdrawlForm.style.display = 'none';
  });


// CONFIRM DELETE
 // Get the buttons and the form
 const deleteBtn = document.getElementById('confirm-delete-btn');
 const deleteForm = document.getElementById('confirm-delete');
 const canceldeleteBtn = document.getElementById('delete-cancel-btn');

 // Show the form when the "Edit" button is clicked
 deleteBtn.addEventListener('click', function() {
  deleteForm.style.display = 'block';

 });

 // Hide the form when the "Cancel" button is clicked
 canceldeleteBtn.addEventListener('click', function() {
  deleteForm.style.display = 'none';
 });


//  RESET TRANSACTION COUNT
 // Get the buttons and the form
 const resetBtn = document.getElementById('reset-transaction-count-btn');
 const resetForm = document.getElementById('reset-transaction-count');
 const cancelresetBtn = document.getElementById('reset-transaction-count-cancel-btn');

 // Show the form when the "Edit" button is clicked
 resetBtn.addEventListener('click', function() {
  resetForm.style.display = 'block';

 });

 // Hide the form when the "Cancel" button is clicked
 cancelresetBtn.addEventListener('click', function() {
  resetForm.style.display = 'none';
 });


 document.getElementById('fail-withdraw-btn').addEventListener('click', function() {
  document.getElementById('fail-withdraw').style.display = 'block'; // Show the div
});

document.getElementById('fail-withdraw-cancel-btn').addEventListener('click', function() {
  document.getElementById('fail-withdraw').style.display = 'none'; // Hide the div
});


