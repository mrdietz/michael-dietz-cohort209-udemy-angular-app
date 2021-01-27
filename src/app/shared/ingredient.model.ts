// export class Ingredient {
//     public name: string;
//     public amount: number;

import { TmplAstBoundEvent } from "@angular/compiler"

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// Here is a shorter version of the above code

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}