export const setCookie = (name, value, options) => {
    options = options || {};

    const { expires } = options;

    if (typeof expires == "number" && expires) {
        const d = new Date();
        d.setTime(d.getTime() + expires * 1000);

        expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = `${name}=${value}`;

    for (let propName in options) {
        updatedCookie += `; ${propName}`;
        const propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += `=${propValue}`;
        }
    }

    document.cookie = updatedCookie;
}

export const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : null;
}

export const deleteCookie = (name) => {
    setCookie(name, "", {
        expires: -1
    })
}