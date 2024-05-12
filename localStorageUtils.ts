export function saveData<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
}

export function loadData<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
