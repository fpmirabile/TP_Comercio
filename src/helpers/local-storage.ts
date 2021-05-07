export function getItem(key: string): string | null {
    try {
        return localStorage && localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

export function setItem(key: string, value: string): boolean {
    try {
        localStorage && localStorage.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
}

export function clear(): boolean {
    try {
        localStorage && localStorage.clear();
        return true;
    } catch (e) {
        return false;
    }
}

export function removeItem(key: string): boolean {
    try {
        localStorage && localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}