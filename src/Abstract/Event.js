import React from 'react'

class Event {
    constructor(Info, Content, User){
        this.Info = Info;
        this.Content = Content;
        this.User = User;
    }
    likes = [];
    goings = [];
    comments = [];
    setLike(User) {
        this.likes.push(User);
    }
    setGoing(User) {
        this.goings.push(User)
    }
    setComment(Comment){
        this.comments.push(Comment);
    }
    get channel_name(){
        return this.Info.Channel_name;
    }
    get title(){
        return this.Content.Title;
    }
    get pubtime() {
        return this.Info.Pubtime;
    }
    get images() {
        return this.Content.Images;
    }
    get text(){
        return this.Content.Text;
    }
    get when(){
        return this.Info.When;
    }
    get where(){
        return this.Info.Where;
    }
    get likes(){
        return this.likes;
    }
    get goings(){
        return this.goings;
    }
    get comments(){
        return this.comments;
    }
}

export default Event;