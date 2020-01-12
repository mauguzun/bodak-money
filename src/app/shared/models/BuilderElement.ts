
export enum ElementType {
    input = 'input',
    inputNumber = 'inputNumber', textarea = 'textarea', date = 'date', select = 'select'
}

export class BuilderElement {

    public id: any =  new Date() as any / 1;
    public type: ElementType;
    public required = true;
    public name?: string = null;
    public placeholder = 'Placeholder';
    public value?: string = null;
    public options: Map<string, string> = new Map<string, string>();
    public disabled = false;


    constructor(type: ElementType, placehloder?: string) {
        this.type = type;
        this.placeholder = placehloder;

        this.options.set('value', 'some text');
        this.options.set('other value', 'other text');
        this.options.set('one more  value', 'one more text');
    }
}
