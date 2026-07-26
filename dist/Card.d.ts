export declare class Card {
    parent: HTMLElement | null;
    title: string;
    subtitle: string;
    sections: string[];
    pictures: string[];
    time: string;
    tail: HTMLElement;
    constructor(parent: HTMLElement | null);
    setParent(parent: HTMLElement): void;
    setTitle(title: string): void;
    setSubtitle(subtitle: string): void;
    addSection(section: string): void;
    addPicture(picture: string): void;
    setTime(time: string): void;
    addToTail(element: HTMLElement): void;
    surrondInnerHtmlVal(element_type: string, innerHtmlVal: string): HTMLElement;
    surrondInnerHtml(element_type: string, my_element: HTMLElement): HTMLElement;
    render(parent?: HTMLElement | null): HTMLElement | undefined;
}
//# sourceMappingURL=Card.d.ts.map