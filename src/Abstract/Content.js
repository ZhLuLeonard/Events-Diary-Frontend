class Content {
    constructor(Title, Images, Text){
        this.Title = Title;
        this.Images = Images;
        this.Text = Text;
    }
    get Text() {
        return this.Text;
    }

    get Images() {
        return this.Images;
    }

    get Title() {
        return this.Title;
    }
}

export default Content;