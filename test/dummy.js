import test from 'ava'

test('dummy' , async t => {
   t.is(3, await add(1, 2))
})

function add(a, b) {
   return a + b
}
