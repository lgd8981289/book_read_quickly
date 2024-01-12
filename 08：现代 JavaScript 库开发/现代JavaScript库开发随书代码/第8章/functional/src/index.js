export function once(fn) {
    let count = 0;
    return function (...args) {
        if (count === 0) {
            count += 1;
            return fn(...args);
        }
    }
}

export function curry(func) {
    const len = func.length;
    function partial(func, argsList, argsLen) {
        // 传入参数满足时，返回执行结果
        if (argsList.length >= argsLen) {
            return func(...argsList);
        }

        // 传入参数不足时，继续返回函数
        return function (...args) {
            return partial(func, [...argsList, ...args], argsLen);
        };
    }

    return partial(func, [], len);
}

export function pipe(...fns) {
    return function (...args) {
        // 将前一个函数的输出 prevResult 传递给下一函数的参数，第一个函数的参数是用户传入的参数 args
        return fns.reduce((prevResult, fn) => fn(...prevResult), args);
    };
}

export function compose(...fns) {
    return function (...args) {
        // 将前一个函数的输出 prevResult 传递给下一函数的参数，第一个函数的参数是用户传入的参数 args
        return fns.reduceRight((prevResult, fn) => fn(...prevResult), args);
    };
}