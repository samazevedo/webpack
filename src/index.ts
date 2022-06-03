const age: number = 99

const obj = {
    one: {
        two: {
            three: 'awooo',
        },
    },
}

function woof(noise: any) {
    console.log(noise && noise.one && noise.one.two && noise.one.two.three)
}

woof(null)
