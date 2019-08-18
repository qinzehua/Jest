import axios from 'axios'
export class Counter {
    constructor(){
        this.number = 0
    }
    addone(){
        this.number += 1
    }
    addtwo(){
        this.number += 2
    }
    minusone(){
        this.number -= 1
    }
    minustwo(){
        this.number -= 2
    }
}

export const fetchDataPomise = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json');
}