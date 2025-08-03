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

    function DFS(sr, sc){
        image[sr][sc] = color;
        for(let [dr,dc] of directions){
            let nr = sr+dr, nc = sc+dc;
            if(nr>=0 && nr<rows && nc>=0 && nc<cols && image[nr][nc] === currColor){
                DFS(nr, nc);
            }
        }
    }

    DFS(sr, sc);
    
    return image;
};