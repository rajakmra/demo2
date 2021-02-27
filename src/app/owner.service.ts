import {Owner} from './owner';

export class OwnerService
{
    owners: Owner[] = [
        new Owner(1,'Vinith','Bike','TN57-A1234',1,'Bala Krishna Puram','PSNA',50),
        new Owner(2,'Vijay','Bike','TN57-B2345',1,'Round Road','RVS',150),
        new Owner(3,'Raja','Bike','TN57-C4533',1,'Begampur','SSM',200)
    ]

    getOwners()
    {
        return this.owners;

    }
}