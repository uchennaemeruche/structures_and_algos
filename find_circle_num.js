/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
Example 2:


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

*/

const marked = Symbol()

const markedProvince = (matrix=[], city, visited)=>{
    visited[city] = true
    for (let edge = 0; edge < matrix.length; edge ++){
        if(!visited[edge] && matrix[city][edge]){
            matrix[city][edge] = marked
            markedProvince(matrix, edge, visited)
        }
    }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let provinceCount = 0;
    let visited = []

    for (let city= 0; city< isConnected.length; city++){
        if(!visited[city]){
            provinceCount ++
            markedProvince(isConnected, city, visited )
        }
    }

    return provinceCount
};

// console.log('FIndCircleNum', findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum2 = function(isConnected) {
    let provinceCount = 0;
    let visited = []

    for (const startCity in isConnected){
        if(!visited[startCity]){
            provinceCount++
            deepFirstSearch(isConnected, startCity, visited )
        }
    }

    return provinceCount
};

/**
 * @param {number[][]} cities
 * @param {string} startCity
 * @param {number[]} visited
 */
const deepFirstSearch = (cities, startCity, visited)=>{
    visited[startCity] = true;

    for(const endCity in cities){
        if(cities[startCity][endCity] && !visited[endCity]){
            deepFirstSearch(cities, endCity, visited)
        }
    }
}

console.log('FIndCircleNum', findCircleNum2([[1,0,0],[0,1,0],[0,0,1]]))





