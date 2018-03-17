var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //i need the index but i really dont know where's the index in this case!
        var checkkey = false
        if(this._storage(key) === undefined){
          this._storage(key,[])
        }
        //
        var bucket = this._storage(key)
        for(var i = 0; i<bucket.length; i++){
          if(bucket[i][0]===key){
             bucket [i][1] = value
             checkkey = true
          }
          if (checkkey === false){
            bucket.push([key,value])
          }
        }

        }
        
        this._storage[hashFn(key, max)] = value;
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};