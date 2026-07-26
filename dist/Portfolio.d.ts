import { Card } from "./Card.js";
export declare class Portfolio {
    cards: Card[];
    parent: HTMLElement;
    constructor(parent: HTMLElement);
    addCard(card: Card): void;
    render(): void;
    tailRender(): void;
    gitterTailRender(): void;
}
//# sourceMappingURL=Portfolio.d.ts.map