export class Card {
    constructor(parent) {
        this.parent = parent;
        this.title = '';
        this.subtitle = '';
        this.sections = [];
        this.pictures = [];
        this.time = '';
        this.tail = document.createElement('div');
    }
    setParent(parent) {
        this.parent = parent;
    }
    setTitle(title) {
        this.title = title;
    }
    setSubtitle(subtitle) {
        this.subtitle = subtitle;
    }
    addSection(section) {
        this.sections.push(section);
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
    setTime(time) {
        this.time = time;
    }
    addToTail(element) {
        this.tail.appendChild(element);
    }
    surrondInnerHtmlVal(element_type, innerHtmlVal) {
        const element = document.createElement(element_type);
        element.innerHTML = innerHtmlVal;
        return element;
    }
    surrondInnerHtml(element_type, my_element) {
        const element = document.createElement(element_type);
        element.appendChild(my_element);
        return element;
    }
    render(parent = null) {
        // Resolve parent
        if (!this.parent) {
            if (!parent) {
                alert('No parent added');
                return;
            }
            this.parent = parent;
        }
        // Main card
        const card = document.createElement('article');
        card.classList.add('card');
        // Card header
        const header = document.createElement('div');
        header.classList.add('card-header');
        // Title
        if (this.title) {
            const title = this.surrondInnerHtmlVal('h2', this.title);
            title.classList.add('card-title');
            header.appendChild(title);
        }
        // Subtitle
        if (this.subtitle) {
            const subtitle = this.surrondInnerHtmlVal('h3', this.subtitle);
            subtitle.classList.add('card-subtitle');
            header.appendChild(subtitle);
        }
        // Time
        if (this.time) {
            const time = this.surrondInnerHtmlVal('span', this.time);
            time.classList.add('card-time');
            header.appendChild(time);
        }
        card.appendChild(header);
        // Sections
        if (this.sections.length > 0) {
            const sectionsContainer = document.createElement('div');
            sectionsContainer.classList.add('card-sections');
            this.sections.forEach(section => {
                const sectionElement = this.surrondInnerHtmlVal('p', section);
                sectionsContainer.appendChild(sectionElement);
            });
            card.appendChild(sectionsContainer);
        }
        // Pictures
        if (this.pictures.length > 0) {
            const picturesContainer = document.createElement('div');
            picturesContainer.classList.add('card-pictures');
            this.pictures.forEach(picture => {
                const image = document.createElement('img');
                image.src = picture;
                image.alt =
                    this.title ||
                        'Portfolio image';
                picturesContainer.appendChild(image);
            });
            card.appendChild(picturesContainer);
        }
        /*
        ========================================
        TAIL
        ========================================
        */
        this.tail.classList.add('tail');
        card.appendChild(this.tail);
        /*
        ========================================
        APPEND CARD TO PARENT
        ========================================
        */
        this.parent.appendChild(card);
        return card;
    }
}
//# sourceMappingURL=Card.js.map