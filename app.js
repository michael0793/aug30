import React, { Component } from "react";
import firebase from "firebase";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"

    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

  }
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value

    });

  }
  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption, powvalue)

  }
  render() {

    return (
      <form onSubmit={this.formSubmit}>

        <div className="radio">
          <label>
            <input
              name="Vote"
              type="radio"
              value="THOR"
              checked={this.state.selectedOption === "THOR"}
              onChange={this.onValueChange}
            />
            THOR
          </label>
        </div>

        <div className="radio">

          <label>
            <input
              name="Vote"
              type="radio"
              value="ZEUS"
              checked={this.state.selectedOption === "ZEUS"}
              onChange={this.onValueChange}
            />
            ZEUS
          </label>

        </div>
        <div className="radio">
          <label>
            <input
               name="Vote"
              type="radio"
              value="LOKI"
              checked={this.state.selectedOption === "LOKI"}
              onChange={this.onValueChange}
            />
            LOKI
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );

  }

}


export default App;


const SHA256 = require('crypto-js/sha256');
  
class Block{
    constructor (index, timestamp, data, previousHash = '')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty+ 1).join("0")){
          this.nonce++;
          this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }
}


 class Blockchain {
     constructor(){
         this.chain = [this.createGenesisBlock()];
         this.difficulty = 2;
     }
     createGenesisBlock (){
           return new Block(0, "07/02/1993", "Genesis Block", "0");
     }

     getLatestBlock(){
         return this.chain[this.chain.length - 1];
     }

     addBlock(newBlock){
         newBlock.previousHash = this.getLatestBlock().hash;
         newBlock.mineBlock(this.difficulty);
         this.chain.push(newBlock);
     }
     
     isChainValid(){
         for(let i = 1; i<this.chain.length; i++){
             const currentBlock = this.chain[i];
             const previousBlock = this.chain[i-1];

             if(currentBlock.hash !== currentBlock.calculateHash()){
                 return false;
             }
             if(currentBlock.previousHash !== previousBlock.hash){
                 return false;
             }
         }
         return true;
     }
 }

 let pow = new Blockchain();
 let timestamp = Date.now();
 let votevalue= document.getElementsByClassName('radio').value;
 //let votevalue = document.getElementsByName('input[Name="Vote"].value');
 let powvalue = ( JSON.stringify(pow, null, 4));
                 pow.addBlock(new Block(1, timestamp, votevalue));
                 ( JSON.stringify(pow, null, 4));
                 pow.addBlock(new Block(2,  timestamp, votevalue));


 