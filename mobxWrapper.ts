import { makeAutoObservable } from 'mobx';
import { saveData, loadData } from './localStorageUtils';

class MobXLocalStorageWrapper<T> {
    data: T | null = null;

    constructor(private key: string, private initialData: T) {
        makeAutoObservable(this);
        this.loadData();
    }

    private loadData(): void {
        const data = loadData<T>(this.key);
        this.data = data !== null ? data : this.initialData;
    }

    setData(data: T): void {
        this.data = data;
        saveData<T>(this.key, data);
    }
}

export default MobXLocalStorageWrapper;
