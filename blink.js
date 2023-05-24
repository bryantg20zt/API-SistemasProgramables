import pkg from 'johnny-five'

const { Board, Led } = pkg

const board = new Board({ port: 'COM5' })

board.on('ready', function () {
  const led = new Led(13)
  led.blink(500)
})
