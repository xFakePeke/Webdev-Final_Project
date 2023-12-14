var x = document.getElementById("Linkss");

        function burger() {
            var state = 1;
            if (x.style.display === "flex") {
                x.style.display = "none";
            } 
            else {
                x.style.display = "flex";
            }
        }

        function myFunction(y) {
            if (y.matches) { // If media query matches
                x.style.display = "none";
            } else {
            x.style.display = "flex";
            }
        }

        // Create a MediaQueryList object
        var y = window.matchMedia("(max-width: 767px)")

        // Call listener function at run time
        myFunction(y);

        // Attach listener function on state changes
        y.addEventListener("change", function() {
        myFunction(y);
        });
        