/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(arr){
        this.sideLength = arr;
    }

    perimeter() {
        var p = 0;
        for(var i=0; i<this.sideLength.length; i++) {
            p = p+this.sideLength[i]
        }
        return p;    
    }
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);
