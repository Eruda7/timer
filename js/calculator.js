let container = document.createElement('div')
container.classList.add('container')
let result = ''
const display = document.createElement('input')
display.type = 'text'
display.disabled = true
display.value = result
const btnsWrapper = document.createElement('div')
btnsWrapper.classList.add('btns_div')

// append
document.body.append(container)
container.append(display, btnsWrapper)

const arr = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'+',
	'-',
	'*',
	'/',
	'C',
	'AC',
	'=',
]

const getNum = e => {
	// console.log(e.target.innerHTML)
	let btnValue = e.target.innerHTML

	if (btnValue == 'AC') {
		result = ''
	} else if (btnValue == 'C') {
		result = result.substring(0, result.length - 1)
	} else if (btnValue == '=') {
		result = `${eval(result)}`
	} else {
		result += btnValue
	}

	display.value = result
	console.log(display.value)
}

arr.forEach(el => {
	const btn = document.createElement('button')
	btn.innerHTML = el
	btnsWrapper.append(btn)
	btn.addEventListener('click', getNum)
})
