class Person {
    contructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
        this.type = 'just a person';
    }

sayHello() {
    console.log('Hello my name is ' + this.name);

}

}
var person = new Person('Gonzalo', 'Bahamondez');
var person2 = new Person('Alonso','Olate');

