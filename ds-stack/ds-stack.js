var Stack = function() {

    this._storage =[]
    this.counter = 0
    this.popcounter=0
    this.add = function(value){
      this._storage.push(value)
      
    };
    //last in first out
    this.remove = function() {  
    this._storage.splice(-1)
     		
     
    
    };
  };