export default function omitKey(keys = [], sampleObject = {}) {
    if (keys.length) {
        const { [keys]: omittedKey, ...newObject } = sampleObject;
        return newObject;
    } else {
        const newObject = {};
        for (const [key, value] of Object.entries(sampleObject))
            if (!keys.includes(key)) newObject[key] = value;
        return newObject;
    }
}

//TODO
