/*
1- devuelve el valor de las funciones respectivas en este caso es 70 y 180 

2- esto da error ya que age no esta definido si pone personAge pero si en cambio pones 
   solo age devuelve la edad que en este caso seria 30

3- destructuracion
*/

//-2
const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'music', 'sports']
}
          
const { age: age } = person
console.log(age)