export default function omitKey(keys = [], sampleObject = {}) {
    //TODO: maybe transform keys to a map or a set to avoid using .includes (better perf)
    if (keys.length === 1) {
        if (!sampleObject.hasOwnProperty(keys[0])) return sampleObject; // nu exista
        const { [keys]: omittedKey, ...newObject } = sampleObject;
        return newObject;
    } else {
        return Object.entries(sampleObject).reduce((newObject, [key, value]) => {
            if (!keys.includes(key)) newObject[key] = value;

            return newObject;
        }, {});
    }
}
