class Option {
    value: string;
    counter: number;
}

export class Poll {
    constructor(public question: string, public options: Array<Option>) {

    }
}