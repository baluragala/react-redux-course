/**
 * Created by baluteju on 3/1/2017.
 */
const Immutable = require('immutable');
//empty list
const emptyList = Immutable.List();
console.log(emptyList);

const fruits = Immutable.List.of({name: 'Zoe', speciality: 'training'}); //use for non-iterable data
console.dir(fruits.toJS());

const chars = Immutable.List('Apple'); //use for iterable data
console.log(chars.toJS());

const products = ['electronics', //[0]
  ['mobiles', //[1][0]
    ['samsung', //[1][1][0]
      ['galaxy s7 edge'] //[1][1][1][0]
    ]
  ]
];
const productsList = Immutable.fromJS(products);
console.log(productsList.getIn([1]));