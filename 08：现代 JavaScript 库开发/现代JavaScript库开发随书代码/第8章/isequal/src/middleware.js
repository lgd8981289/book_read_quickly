import { type } from '@jsmini/type';

export function functionMiddleware() {
    return next => (value, other) => {
        if (type(value) === 'function' && type(other) === 'function') {
            return value.toString() === other.toString();
        }
        
        return next(value, other);
    };
}

export function nanMiddleware() {
    return next => (value, other) => {
        if (typeof value === 'number' && typeof other === 'number') {
            if (isNaN(value) && isNaN(other)) {
                return true
            }
        }
        
        return next(value, other);
    };
}
