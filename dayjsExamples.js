const dayjs = require('dayjs')


// "Now" -- Essentially the same as calling: dayjs(new Date())
var now = dayjs()



// Converting ISO strings to dayjs object
dayjs('2018-04-04T16:00:00.000Z')
dayjs('2018-04-13 19:18:17.040+02:00')
dayjs('2018-04-13 19:18')




// Add a value to an existing object for comparison
// Might be helpful if a repeating reminder is set up
const a = dayjs
const b = dayjs().add(7, 'day')
// a -> the original value and will not change
// b -> the manipulation result

let c = dayjs
c = dayjs().add(7, 'day') // This DOES change the original value of c



// Multiple ways of displaying dates at this link: https://day.js.org/docs/en/display/format