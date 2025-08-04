/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
class Node1 {
    constructor(r, c, d){
        this.r = r;
        this.c = c;
        this.d = d;
    }
} 

var updateMatrix = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let vis = Array.from({ length: rows}, () => new Array(cols).fill(0));
    let dist = Array.from({ length: rows}, () => new Array(cols).fill(0));
    let q = [];

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(mat[i][j] === 0){
                q.push(new Node1(i, j, 0));
                vis[i][j] = 1;
            }
        }
    }
    
    let directions = [[-1,0], [1,0], [0,-1], [0,1]];
    
    while(q.length){
        let r = q[0].r;
        let c = q[0].c;
        let steps = q[0].d;
        q.shift();
        dist[r][c] = steps;
        for(let [dr,dc] of directions){
            let nr = r+dr;
            let nc = c+dc;
            if(nr>=0 && nr<rows && nc>=0 && nc<cols && vis[nr][nc] === 0){
                vis[nr][nc] = 1;
                q.push(new Node1(nr, nc, steps+1));
            }
        }
    }
    
    return dist; 
};