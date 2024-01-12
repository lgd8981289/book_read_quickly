const person = {
	lastName: '张',
	firstName: '三',
	// 通过 get 标识符标记，可以让方法的调用像属性的调用一样
	get fullName() {
		return this.lastName + this.firstName
	}
}

const proxy = new Proxy(person, {
	get(target, key, receiver) {
		console.log('触发了 getter')
		// getter 行为本应触发三次，但是只触发了一次。这是因为 fullName 中的 this 指向了 target（person），而不是 proxy 实例
		// return target[key]

		// 正常触发三次
		return Reflect.get(target, key, receiver)
	}
})

console.log(proxy.fullName)
