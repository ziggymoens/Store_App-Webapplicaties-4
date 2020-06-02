export interface StockJson{
    amount: number;
    size: number;
  }
  
  export class Stock{
    constructor(
    private _size: number,
    private _amount:number
    ){}
  
    static fromJSON(json: StockJson[]): Stock[]{
      const stock = json.map(s => new Stock(s.size, s.amount));
      return stock;
    }

    toJSON(): StockJson{
        return <StockJson>{
            amount: this._amount,
            size: this._size
          };
    }

    get amount(): number{
        return this._amount;
    }
    get size(): number{
        return this._size;
    }
  }
  