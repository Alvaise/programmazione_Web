# Cat Walk

This is a simple web page that displays a cat walking across the screen.

## Usage

To view the cat walking, open the `index.html` file in a web browser.

## Code Explanation

The code consists of an HTML file (`index.html`) and a JavaScript file (`main.js`).

### HTML

The HTML file defines the structure of the web page. It includes an image tag that displays the cat walking GIF.

### JavaScript

The JavaScript file (`main.js`) contains the logic for the cat's movement and behavior.

#### Cat Walk Function

The `catWalk()` function is responsible for moving the cat. It takes an argument `i` which represents the cat's current position.

#### Variants

The code includes different variants of the `catWalk()` function to handle different behaviors:

1. **Variant 1**: The cat restarts from the left side of the screen when it reaches the right side.

2. **Variant 2**: The cat moves backward when it reaches the right side, and moves forward when it reaches the left side.

3. **Variant 3**: When the cat reaches the middle of the screen, the image is replaced with a different cat image. The new image stays in the middle for 10 seconds, and then it is replaced with the original image, continuing the walk as in Variant 2.


