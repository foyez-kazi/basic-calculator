;(function () {
  let total = Infinity
  let lastVal = 0
  let nextOp

  function getElement(id) {
    return document.getElementById(id)
  }

  function add(val) {
    total += val
  }

  function subtract(val) {
    total -= val
  }

  function multiply(val) {
    total *= val
  }

  function divide(val) {
    if (val !== 0) total /= val
  }

  function handleNumber(val) {
    const num = parseInt(val)
    lastVal = lastVal * 10 + num
    updateResult(lastVal)
  }

  function calculate() {
    if (total !== Infinity && lastVal !== 0) {
      nextOp(lastVal)
      updateResult(total)
    } else if (lastVal !== 0) {
      total = lastVal
    }

    lastVal = 0
  }

  function updateResult(val) {
    getElement('display').textContent = val === Infinity ? 0 : val
  }

  function input(val) {
    if (val === 'c') {
      total = Infinity
      lastVal = 0
      updateResult(total)
    } else if (val === '=' && nextOp) {
      calculate()
    } else if (val === '+') {
      calculate()
      nextOp = add
    } else if (val === '-') {
      calculate()
      nextOp = subtract
    } else if (val === 'x') {
      calculate()
      nextOp = multiply
    } else if (val === '/') {
      calculate()
      nextOp = divide
    } else {
      handleNumber(val)
    }
  }

  document.addEventListener('click', (e) => {
    const clicked = e.target
    const isButton = clicked.className === 'btn'

    if (isButton) {
      const val = e.target.textContent
      input(val)
    }
  })
})()
