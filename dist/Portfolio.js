import { Card } from "./Card.js";
export class Portfolio {
    constructor(parent) {
        this.cards = [];
        this.parent = parent;
    }
    addCard(card) {
        this.cards.push(card);
    }
    render() {
        this.cards.forEach(card => {
            card.render(this.parent);
        });
    }
    tailRender() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (i > 0) {
                const prev_card = this.cards[i - 1];
                card?.render(prev_card?.tail);
            }
            else {
                card?.render(this.parent);
            }
        }
    }
    gitterTailRender() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (i > 0 && i % 2 == 1) {
                const prev_card = this.cards[i - 1];
                card?.render(prev_card?.tail);
            }
            else {
                card?.render(this.parent);
            }
        }
    }
}
//# sourceMappingURL=Portfolio.js.map