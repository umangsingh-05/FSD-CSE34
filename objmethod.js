let person ={
    name : 'umang',
    age : 20,
};
person.greet=function my(){
    console.log('hello , my name is '+this.name);
}
person.greet();