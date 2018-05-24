import EventEmitter from 'eventemitter2'

const ee = new EventEmitter()
export default ee;

const Timeline = {
  1500: [ 'logo.hide' ],
  2400: [ 'robot.show' ],
  2800: [
    {'speech.show': { text: 'Hi there! I am Bolt'} },
  ],
  4000: ['speech.hide'],

  4500: () => fireTimeline(MeasureTimeline),
}

const MeasureTimeline = {
  0: [
    {'speech.show': { text: 'I can measure your battery'} },
  ],
  500: [
    {'button.show': { text: 'Measure', onPress: () => { fireTimeline(UfoTimeline) } }}
  ]
}


const UfoTimeline = {
  0: ['speech.hide', 'button.hide'],
  200: ['ufo.show'],
  5000: [
    {'speech.show': { text: 'You have 54% battery!'} },
  ],
  5500: [
    {'button.show': { text: 'Thank you', onPress: () => { fireTimeline(AskPizzaTimeline) } }}
  ]
}

const AskPizzaTimeline = {
  0: [ 'button.hide', 'speech.hide' ],
  500: [
    {'speech.show': { text: 'Uhmm...'} },
  ],
  2500: [ 'speech.hide' ],
  3000: [
    {'speech.show': { text: 'Do you think I can have some Pizza now?'} },
  ],
  5000: [ 'speech.hide' ],
  5500: [
    {'speech.show': { text: 'I love Pizza! Could you give me some?'} },
  ],
  6000: [
    {'button.show': {
      text: 'Give Bolt a slice',
      onPress: () => { fireTimeline(PizzaTimeLine) },
      reset: true,
      onResetPress: () => { fireTimeline(MeasureTimeline) }
    }}
  ],
}

const PizzaTimeLine = {
  0: ['speech.hide', 'pizza.show'],
  1: [ 'pizza.drop' ],
  600: ['robot.heart']
}

function fireTimeline(tl){
  Object.keys(tl).forEach((timestamp) => {
    setTimeout(() => fireEvents(tl[timestamp]), parseInt(timestamp, 10))
  })
}

fireTimeline(Timeline)


function fireEvents(events){
  if(typeof events === 'function'){
    events()
    return
  }


  events.forEach(event => {
    let eventName, props = {}
    if(typeof event === 'string'){ eventName = event }
    else{
      eventName = Object.keys(event)[0]
      props = event[eventName]
    }

    console.log({eventName, props})

    ee.emit(eventName, props)
  })
}

// export default {
//   0: {
//     speech: { text: 'Hi there! I am Bolt' },
//   },
//   700: {
//     speech: { text: 'I can measure your battery!' },
//     button: { text: 'Measure', onPressEvent: ['button.hide', 'ufo.play'] }
//   },
//
//   // Show percentage bubble
//   {
//     speech: { text: 'I love Pizza! Can i have some?' },
//     button: { text: 'Give Bolt a slice', restart: true },
//   }
//
// }
