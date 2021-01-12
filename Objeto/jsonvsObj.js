  const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
  console.log(JSON.stringify(obj))
  // convertendo objeto para json

  //console.log(JSON.parse( "{a: 1, b: 2, c: 2}"))
  //console.log(JSON.parse("{'a: 1, 'b':2, 'c': 3'}"))
  console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
  console.log(JSON.parse('{ "a": 1, "b": 2, "c": true, "d": {}, "e": [] }'))