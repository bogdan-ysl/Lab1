import { saveData, loadData } from './localStorageUtils';

export function initializeData<T>(key: string, initialData: T): void {
    const existingData = loadData<T>(key);
    if (!existingData) {
        saveData<T>(key, initialData);
    }
}
