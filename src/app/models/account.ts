import { iaccount, IPhoneNumber } from './iaccount';

export class Account implements iaccount {
    id: number;
    name: string;
    email: string;
    isEmployee: boolean;
    departmentId: number;
    phoneNumbers: IPhoneNumber[];

    constructor(account: iaccount) {
        if (account) {
        this.id = account.id;
        this.name = account.name;
        this.email = account.email;
        this.isEmployee = account.isEmployee;
        this.departmentId = account.departmentId;
        this.phoneNumbers = account.phoneNumbers;
        }
    }
}
