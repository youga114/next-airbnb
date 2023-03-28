export const cookieStringToObject = (cookieString: string | undefined) => {
    const cookies: { [key: string]: string } = {};
    if (cookieString) {
        const itemString = cookieString?.split(/\s*;\s*/);
        itemString.forEach((pairs) => {
            const pair = pairs.split(/\s*=\s*/);
            cookies[pair[0]] = pair.splice(1).join("=");
        });
    }
    return cookies;
};

export const getNumber = (string: string) => {
    const numbers = string.match(/\d/g)?.join("");
    if (numbers) {
        return Number(numbers);
    }
    return null;
};

export const makeMoneyString = (string: string) => {
    return string.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};

export const makeQueryString = (
    baseUrl: string,
    queriesObject: Object & { [key: string]: any }
) => {
    const keys = Object.keys(queriesObject);
    const values = Object.values(queriesObject);
    if (keys.length === 0) {
        return baseUrl;
    }
    let queryString = `${baseUrl}?`;
    keys.forEach((key, i) => {
        if (queriesObject[key]) {
            queryString += `${keys[i]}=${values[i]}&`;
        }
    });
    return queryString.slice(0, -1);
};
