import { type } from '@jslib-book/type'; // 使用我们前面写的类型库
import { clone } from '@jslib-book/clone';

// Object.create(null) 的对象，没有hasOwnProperty方法
function hasOwnProp(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

export function extend(defaultOpt, customOpt) {
    defaultOpt = clone(defaultOpt); // 拷贝一份defaultOpt，隔离数据
    
    for (let name in customOpt) {
        const src = defaultOpt[name];
        const copy = customOpt[name];
        
        // 非可枚举属性，例如原型链上的属性
        if (!hasOwnProp(customOpt, name)) {
            continue;
        }
        
        // 对于对象需要递归处理
        if (copy && type(copy) === 'object') {
            // 如果default上不存在值时，会自动创建空对象
            const clone = src && type(src) === 'object' ? src : {};
            // 递归合并
            defaultOpt[name] = extend(clone, copy);
        } else if (typeof copy !== 'undefined'){
            // 非对象且值不为undefined
            defaultOpt[name] = copy;
        }
    }

    return defaultOpt;
}