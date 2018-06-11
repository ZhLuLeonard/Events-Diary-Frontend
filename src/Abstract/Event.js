import React from 'react'

class Event {
    constructor(Info, Content, User, pictureList){
        this.Info = Info;
        this.Content = Content;
        this.User = User;
        this.pictureList = pictureList;
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
}

export default Event;