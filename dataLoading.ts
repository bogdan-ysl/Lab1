// dataLoading.ts
import { loadData } from './localStorageUtils';

export async function fetchData<T>(key: string): Promise<T> {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = loadData<T>(key);
            resolve(data as T);
        }, 2000); // Așteaptă 2 secunde pentru a simula încărcarea datelor
    });
}
