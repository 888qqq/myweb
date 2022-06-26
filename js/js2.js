// JavaScript Document
	var list1 = document.getElementById('list1')
	var list2 = document.getElementById('list2')
	var list3 = document.getElementById('list3')

	var show1 = true
	var show2 = true
	var show3 = true

	list1.addEventListener('click', function () {
		if (show1) {
			show1 = false
			this.style.background = '#6e2222'
			this.style.color = '#fff'
		} else {
			show1 = true
			this.style.background = '#f2f2f2'
			this.style.color = '#000'
		}
	})

	list2.addEventListener('click', function () {
		if (show2) {
			show2 = false
			this.style.background = '#6e2222'
			this.style.color = '#fff'
		} else {
			show2 = true
			this.style.background = '#f2f2f2'
			this.style.color = '#000'
		}
	})

	list3.addEventListener('click', function () {
		if (show3) {
			show3 = false
			this.style.background = '#6e2222'
			this.style.color = '#fff'
		} else {
			show3 = true
			this.style.background = '#f2f2f2'
			this.style.color = '#000'
		}
	})