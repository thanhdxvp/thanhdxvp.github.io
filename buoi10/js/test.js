var array = [
    {
        name: 'abc',
        age: 18,
        gender: 'male'
    },
    {
        name: 'Thanh',
        age: 18,
        gender: 'male'
    },
    {
        name: 'Vy',
        age: 19,
        gender: 'male'
    },
    {
        name: 'Dung',
        age: 20,
        gender: 'male'
    }
]
var array2 = [];
for (let index = 0; index < array.length; index++) {
    if (array[index].age == 18) {
        array2.push(array[index]);
    }
}
console.log(array2);

