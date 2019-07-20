class XStorage {
    constructor() {
        this.eggs = JSON.parse(
            localStorage.getItem('eggs')
        ) || 0;
        this.multiplier = 1;
    }

    incrementEggs() {
        localStorage.setItem('eggs', this.eggs += this.multiplier);
        return this.eggs;
    }
}