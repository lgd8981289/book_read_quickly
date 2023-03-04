export function type(x) {
    const t = typeof x;

    if(x === null){
        return 'null';
    }

    if (t !== 'object') {
        return t;
    }

    const toString = Object.prototype.toString;
    const innerType = toString.call(x).slice(8, -1); 
    const innerLowType =  innerType.toLowerCase();

    // 区分 String() 和 new String()
    if (['String', 'Boolean', 'Number'].includes(innerType)) {
        return innerType;
    }
    
    // function A() {}; new A
    if (typeof x?.constructor?.name === 'string') {
        return x.constructor.name;
    }
    
    return innerLowType;
}