export interface BrandJson {
    name: string
}

export class Brand{
    constructor(private _name: string){}

    static fromJSON(json : BrandJson): Brand{
        const brand = new Brand(json.name);
        return brand;
    }

    toJSON(): BrandJson{
        return {name : this.name};
    }

    get name(){
        return this._name;
    }
}