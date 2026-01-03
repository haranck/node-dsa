
//Graph implementation

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2])this.addVertex(vertex2)
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex])return
        for(let adj of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adj)
        }
        delete this.adjacencyList[vertex]
    }
    print(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,' -> '+[...this.adjacencyList[vertex]])
        }
    }
    dfs(start,visited = new Set()){
        if(visited.has(start))return
        visited.add(start)
        console.log(start)
        for(let neighbour of this.adjacencyList[start]){
            if(!visited.has(neighbour)){
                this.dfs(neighbour,visited)
            }
        }
    }
    // bfs(start){
    //     let visited = new Set()
    //     let queue = [start]
    //     while(queue.length){
    //         let vertex = queue.shift()
    //         if(!visited.has(vertex)){
    //             console.log(vertex)
    //             visited.add(vertex)
    //             queue.push(...this.adjacencyList[vertex])
    //         }
    //     }
    // }
    bfs(start){ //this is good and use queue so neighbours add in queue but first one is pop
        let visited = new Set()
        let queue = [start]
        visited.add(start)
        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }
    clone(){
        let clone = new Graph()
        let visited = new Set()
        const dfs = (vertex) =>{
            if(visited.has(vertex))return
            visited.add(vertex)
            clone.addVertex(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                clone.addVertex(neighbour)
                clone.addEdge(vertex,neighbour)
                if(!visited.has(neighbour)){
                    dfs(neighbour)
                }
            }
        }
        for(let vertex  in this.adjacencyList){
            if(!visited.has(vertex)){
                dfs(vertex)
            }
        }
        return clone
    }
    detectCycle(vertex,visited,parent){
        visited.add(vertex)
        for(let neighbour of this.adjacencyList[vertex]){
            if(!visited.has(neighbour)){
                if(this.detectCycle(neighbour,visited,vertex)){
                    return true
                }
            }else if (neighbour !== parent){
                return true
            }
        }
        return false
    }

    hasCycle(){
        let visited = new Set()
        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(this.detectCycle(vertex,visited,null)){
                    return true
                }
            }
        }
        return false
    }
}
// A  -> B,D
// B  -> A,C
// C  -> B,A
const g  = new Graph()
g.addEdge('A','B')
g.addEdge('B','C')
g.addEdge('C','A')
// g.addEdge('C','D')
// g.addEdge('D','A')

g.print()
console.log('dfs')
g.dfs('A')
console.log('bfs')
g.bfs('A')
console.log('its cyclic ? : ',g.hasCycle())
const cloneGraph  = g.clone()
console.log('cloned Graph : ')
cloneGraph.print()

////////////////////////////////////////////////////////////////////////////

//shortest path

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1])this.addVertex(vertex1)
//         if(!this.adjacencyList[vertex2])this.addVertex(vertex2)
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex])return
//         for(let adj of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adj)
//         }
//         delete this.adjacencyList[vertex]
//     }
//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex,' -> '+[...this.adjacencyList[vertex]])
//         }
//     }
//     dfs(start,visited = new Set()){
//         if(visited.has(start))return
//         visited.add(start)
//         console.log(start)
//         for(let neighbour of this.adjacencyList[start]){
//             if(!visited.has(neighbour)){
//                 this.dfs(neighbour,visited)
//             }
//         }
//     }

//     // bfs(start){
//     //     let visited = new Set()
//     //     let queue = [start]
//     //     while(queue.length){
//     //         let vertex = queue.shift()
//     //         if(!visited.has(vertex)){
//     //             console.log(vertex)
//     //             visited.add(vertex)
//     //             queue.push(...this.adjacencyList[vertex])
//     //         }
//     //     }
//     // }

//     clone(){
//         let clone = new Graph()
//         let visited = new Set()
//         const dfs = (vertex) =>{
//             if(visited.has(vertex))return
//             visited.add(vertex)
//             clone.addVertex(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 clone.addVertex(neighbour)
//                 clone.addEdge(vertex,neighbour)
//                 if(!visited.has(neighbour)){
//                     dfs(neighbour)
//                 }
//             }
//         }
//         for(let vertex  in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 dfs(vertex)
//             }
//         }
//         return clone
//     }
//     detectCycle(vertex,visited,parent){
//         visited.add(vertex)
//         for(let neighbour of this.adjacencyList[vertex]){
//             if(!visited.has(neighbour)){
//                 if(this.detectCycle(neighbour,visited,parent)){
//                     return true
//                 }
//             }else if (neighbour !== parent){
//                 return true
//             }
//         }
//         return false
//     }
//     hasCycle(){
//         let visited = new Set()
//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 if(this.detectCycle(vertex,visited,null)){
//                     return true
//                 }
//             }
//         }
//         return false
//     }
//     bfs(start, target) {
//         let visited = new Set()
//         let queue = [[start,[start]]]
//         while(queue.length){
//             let [vertex,path] = queue.shift()
//             if(vertex === target){
//                 return path
//             }
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     queue.push([neighbour,[...path,neighbour]])
//                     visited.add(neighbour)
//                 }
//             }
//         }
//     }
// }

// const g  = new Graph()
// g.addEdge('A','B')
// g.addEdge('A','C')
// g.addEdge('B','D')
// g.addEdge('D','C')
// // g.addEdge('D','A')

// g.print()
// console.log('dfs')
// g.dfs('A')
// console.log('bfs')
// console.log("shortest path", g.bfs("A", "D").length)
// console.log('its cyclic ? : ',g.hasCycle())
// const cloneGraph  = g.clone()
// console.log('cloned Graph : ')
// cloneGraph.print()