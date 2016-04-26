    Array.prototype.contains = function(iAmLookingForDatString) {
        var temp;
        (this.indexOf(iAmLookingForDatString) != -1) ? temp = true: temp = false;
        return temp;
    };

    String.prototype.contains = function(iAmLookingForDatString) {
        var temp;
        (this.indexOf(iAmLookingForDatString) != -1) ? temp = true: temp = false;
        return temp;
    };
