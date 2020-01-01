
export enum ElementType {
    input = 'input', textarea = 'textarea'
}

export class BuilderElement {

    public type: ElementType;
    public required: boolean = true;
    public name?: string = null;
    public placeholder?: string = 'Placeholder';
    public value?: string = null;
    public max?: string = null;
    public min?: string = null;
    public disabled?: boolean = false;

    constructor(type: ElementType) {
        this.type = type;
    }
}