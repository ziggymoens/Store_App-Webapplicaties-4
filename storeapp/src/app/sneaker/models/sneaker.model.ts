import { BrandJson, Brand } from './brand.model';
import { StockJson, Stock } from './stock.model';


interface SneakerJson {
    id: number;
    name: string;
    price: number;
    color: string;
    brand: BrandJson;
    releaseDate: string;
    stock: StockJson[];
    barcode: string;
    onlineImg: string;
}

export class Sneaker {
    private _id: number;
    private _stock: Stock[];
    private _onlineImg: string;

    constructor(
        private _name: string,
        private _price: number,
        private _color: string,
        private _brand: Brand,
        private _releaseDate: Date,
        private _barcode: string,
    ) { }

    static fromJSON(json: SneakerJson): Sneaker {
        const sneak = new Sneaker(json.name, json.price, json.color, Brand.fromJSON(json.brand), new Date(json.releaseDate), json.barcode);
        sneak._id = json.id;
        sneak._stock = Stock.fromJSON(json.stock);
        sneak._barcode = json.barcode;
        sneak._onlineImg = json.onlineImg;
        return sneak;
    }

    toJSON(): SneakerJson {
        return <SneakerJson>{
            id: this.id,
            name: this.name,
            price: this.price,
            color: this.color,
            brand: this.brand.toJSON(),
            releaseDate: this.releaseDate.toDateString(),
            barcode: this.barcode,
            onlineImg: this._onlineImg
        };
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
    get brand(): Brand {
        return this._brand;
    }
    get price() {
        return this._price;
    }
    get releaseDate() {
        return this._releaseDate;
    }
    get color() {
        return this._color;
    }
    get stock() {
        return this._stock;
    }

    get barcode(){
        return this._barcode;
    }

    get onlineImg(){
        return this._onlineImg;
    }
}
