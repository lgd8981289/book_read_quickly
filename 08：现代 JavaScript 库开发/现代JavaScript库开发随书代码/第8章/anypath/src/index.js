function parseKey(key) {
    return key.replace("[]", "");
}
// get(obj, 'a.b.c') => obj.a.b.c
export function getany(obj, key) {
    return key.split(".").reduce((prev, subkey) => {
        // a.b[].c b是数组
        return prev == null ? prev : prev[parseKey(subkey)];
    }, obj);
}

// set(obj, 'a.b.c', 1) => obj.a.b.c = 1
export function setany(obj, key, val) {
    const keys = key.split(".");

    const root = keys.slice(0, -1).reduce((parent, subkey) => {
        const realkey = parseKey(subkey);
        // a.b[].c b是数组
        // eslint-disable-next-line no-param-reassign
        return (parent[realkey] = parent[realkey]
            ? parent[realkey]
            : subkey.includes("[]")
            ? []
            : {});
    }, obj);

    root[keys[keys.length - 1]] = val;
}
