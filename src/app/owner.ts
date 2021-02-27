export class Owner
{

    ownerId: number;
    ownerName: string;
    vehicleType: string;
    vehicleNumber : string;
    noOfSeats : number;
    startingPoint : string;
    endPoint : string;
    fairAmount : number;

    constructor(id:number, name:string, vtype:string, vnum: string, seats: number, start: string, end: string, amt: number)
    {
        this.ownerId = id;
        this.ownerName = name;
        this.vehicleType = vtype;
        this.vehicleNumber = vnum;
        this.noOfSeats = seats;
        this.startingPoint = start;
        this.endPoint = end;
        this.fairAmount = amt;        
    }
}