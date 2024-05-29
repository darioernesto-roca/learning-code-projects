let { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {

    constructor() {
        if (existsSync('localStorage.json')) {
            console.log('Loading items from localStorage.json');
            let txt = readFileSync('localStorage.json');
            try {
                this.items = JSON.parse(txt);
            } catch (e) {
                console.error('Error parsing JSON, initializing with empty storage:', e);
                this.items = {};
            }
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile('localStorage.json', JSON.stringify(this.items, null, 2), error => {
            if (error) {
                console.error(error);
            }
        });
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log('localStorage.json removed');
        });
    }
}

module.exports = new LocalStorage();