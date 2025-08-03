// Solution 1 - BFS
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let rows = image.length;
    let cols = image[0].length;
    const currColor = image[sr][sc];
    if(currColor === color) return image;
    let directions = [[-1,0], [1,0], [0,-1], [0,1]]; // Up, down, left, right
    const queue = [[sr, sc]];
    
    while(queue.length) {
        const [row, col] = queue.shift();
        if(image[row][col] === currColor) {
            image[row][col] = color
			if(row-1 >= 0) queue.push([row-1, col]);  //up
            if(row+1 < image.length) queue.push([row+1, col]);  //down
            if(col+1 < image[0].length) queue.push([row, col+1]);  //right
            if(col-1 >= 0) queue.push([row, col-1]);  //left
        }
    }
    
    return image;
};