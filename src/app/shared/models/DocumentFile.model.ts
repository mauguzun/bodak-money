export class DocumentFile {

    public id: any = <any>new Date() / 1;

    constructor(
        public file: File,
        public src?: string
    ) { }
}