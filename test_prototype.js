function Person(first, last) {
    // create "constructor"
    this.first = first;
    // public variables -- reference current object
    this.last = last;

    var privateFn = function(first, last){
    // private function
    }

    this.setName = function(first, last){
        // public function
        this.first = first;
        this.last = last;
    }

}

var bob = new Person('Hi', 'World');
console.log(betty.reverse());

Person.prototype.fullName = function() {
    // extend prototype
    return this.first + ' ' + this.last;
    // even at runtime!

    //this.fullNameReverse :  function() {
    //	return this.last + ' ' + this.first;
    };

 Person.prototype.reverse = function() {
 		return this.last + ' ' + this.first;
 }

console.log(bob.fullName());

var betty = new Person("Betty", "Boop");
console.log(betty.fullName());
console.log(betty.reverse());

//Person.prototype.fullName = {
    // extend prototype
//    return this.first + ' ' + this.last;
  //  // even at runtime!

    //this.fullNameReverse :  function() {
    	//return this.last + ' ' + this.first;
   // }
//}
