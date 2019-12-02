import { Injectable } from '@angular/core';
import { Account } from '../models';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private accounts: Account[] = [

        new Account({
            id: 1,
            name: 'Paloma',
            email: 'paloma.pineda@improving',
            isEmployee: true,
            departmentId: 0,
            phoneNumbers: []
        }),
        new Account({
            id: 2,
            name: 'Kim',
            email: 'kim.pineda@improving',
            isEmployee: true,
            departmentId: 0,
            phoneNumbers: []
        }),
        new Account({
            id: 3,
            name: 'Stacy',
            email: 'stacy.pineda@improving',
            isEmployee: true,
            departmentId: 0,
            phoneNumbers: []
        }),
    ];

    getAll(): Account[] {
        return this.accounts;
    }

    get(id: number): Account {
        for (let ii = 0, len = this.accounts.length; ii < len; ii++) {
            if(this.accounts[ii].id === id) {
                return this.accounts[ii];
            }
        }
        return null;   
    }
}