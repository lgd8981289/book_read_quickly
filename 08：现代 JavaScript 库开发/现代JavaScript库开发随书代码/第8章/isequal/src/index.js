import { type } from "@jslib-book/type";

function equalArray(value, other, enhancer) {
    if (value.length !== other.length) {
        return false;
    }

    for (let i = 0; i < value.length; i++) {
        if (!isEqual(value[i], other[i], enhancer)) {
            return false;
        }
    }

    return true;
}

function equalObject(value, other, enhancer) {
    const vKeys = Object.keys(value);
    const oKeys = Object.keys(other);

    if (vKeys.length !== oKeys.length) {
        return false;
    }

    for (let i = 0; i < vKeys.length; i++) {
        const v = value[vKeys[i]];
        const o = other[vKeys[i]];
        if (!isEqual(v, o, enhancer)) {
            return false;
        }
    }

    return true;
}

export function isEqual(value, other, enhancer) {
    const next = () => {
        // 全等
        if (value === other) {
            return true;
        }
    
        const vType = type(value);
        const oType = type(other);
    
        // 类型不同
        if (vType !== oType) {
            return false;
        }
    
        if (vType === "array") {
            // 数组判断
            return equalArray(value, other, enhancer);
        }
        if (vType === "object") {
            // 对象判断
            return equalObject(value, other, enhancer);
        }
        return value === other;
    }

    if(type(enhancer) === 'function') {
        return enhancer(next)(value, other);
    }

    return next();
}
