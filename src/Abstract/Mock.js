import Event from './Event'
import Info from './Info'
import User from './User'
import Content from './Content'

var content1 = new Content("Mr. Kim is Drinking Tea",[],"He likes to drink tea so much. Normally people won't be able to drink so much tea as him. Because of that, he won a great drinking competition against all other presidents in the world")
var content2 = new Content("Garena is the best company in the world",[],"There is a superb company in the island of Singapore. Its office is full of the smartest people, and with these manpower, the company gets to produce the best softward in the region.")

var info1 = new Info("leonard's private channel", "2018/10/22", ["2018/12/20","2018/12/21"],"Marina Bay Sands, Singapore")
var info2 = new Info("The best channel","2017/5/8",["1982/7/11","1983/7/11"],"The Golden Gate Bridge, San Francisco")

var user1 = new User("luzh","12345678")
var user2 = new User("lady","98765432")

var event1 = new Event(info1,content1,user1)
var event2 = new Event(info2,content2,user2)

//console.log(info1.Channel_name);
export {event1}
export {event2}
export {user1}
export {user2}