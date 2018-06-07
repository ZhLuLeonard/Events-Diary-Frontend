class Info {

    constructor(Channel_name, Pubtime,When,Where){
        this.Channel_name=Channel_name;
        this.Pubtime = Pubtime;
        this.When = When;
        this.Where = Where;
    }

    get Channel_name() {
        return this.Channel_name;
    }

    get Pubtime(){
        return this.Pubtime;
    }

    get When(){
        return this.When;
    }
    
    get Where(){
        return this.Where;
    }
}