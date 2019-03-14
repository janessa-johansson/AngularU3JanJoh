export class UserFull {
    constructor(
        public id: string,
        public username: string,
        public name: string,
        public address: Address
    ) { }
}

export class Address {
    constructor(
        public city: string,
        public street: string,
        public zipcode: number,
    ) { }
}