function get() {}

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, "a.b.c[3]"));

// Output:
// [1,2,3]
// 1
// 2
// undefined

export default {};
