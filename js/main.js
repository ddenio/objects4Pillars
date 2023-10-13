// //object literal syntax
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw circle');
//     }
// };

// //dot notation

// circle.draw();

// //Factories / constructor function
//     //Factory Function
// function createCircle(radius) {
//     return {
//         //with ES6 if we have radius = radius, we can drop the value and just keep the property
//         radius,
//         draw: function() {
//             console.log('draw circle');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();


// Constructor Function
   //first letter of assignment should be uppercase
function Circle(radius) {
    // 'this' is a reference to the object that will execute this code
    this.radius = radius;
    this.draw = function() {
        console.log('draw circle');
    }
}

const another = new Circle(1);

another.draw()