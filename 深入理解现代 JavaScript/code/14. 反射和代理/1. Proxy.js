const person = {
	name: '张三',
	age: 30
}

const p = new Proxy(person, {
	/**
	 * 代理 person 的 setter 行为
	 * @param {*} target person 被代理对象
	 * @param {*} key 修改时的 key
	 * @param {*} value 修改的 value
	 * @param {*} receiver proxy 实例 p，被代理对象
	 */
	set(target, key, value, receiver) {
		console.log(target, key, value, receiver)
		// 修改被代理对象
		target[key] = value
		// 标记修改成功
		return true
	},

	/**
	 * 代理 person 的 getter 行为
	 * @param {*} target person 被代理对象
	 * @param {*} key 修改时的 key
	 * @param {*} receiver proxy 实例 p，被代理对象
	 * @returns
	 */
	get(target, key, receiver) {
		return target[key]
	}
})

p.name = '李四' // 触发 set。注意：只有修改 proxy 实例才会触发 set

console.log(p.name) // 触发 get。注意：只有通过 proxy 实例才会触发 get
