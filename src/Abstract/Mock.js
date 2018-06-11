import Event from './Event'
import Info from './Info'
import User from './User'
import Content from './Content'

var pictureList1 = ["/users/luzh/1.png","/users/luzh/2.png","/users/luzh/3.png","/users/luzh/4.png"]
var pictureList2 = ["/users/lady/1.png","/users/lady/2.png","/users/lady/3.png","/users/lady/4.png","/users/lady/5.png"]
var pictureList3 = []

var content1 = new Content("Mr. Kim is Drinking Tea",[],"He likes to drink tea so much. Normally people won't be able to drink so much tea as him. Because of that, he won a great drinking competition against all other presidents in the world")
var content2 = new Content("Garena is the best company in the world",[],"There is a superb company in the island of Singapore. Its office is full of the smartest people, and with these manpower, the company gets to produce the best softward in the region.")
var content3 = new Content("An interesting Event", [], "Because of where this event comes from, it is a very interesting event. The details must be obliterated due to overwhelming demand. However, if you want to know more, please contact the president of the United States as he is the main sponsor for this weird and fun arrangement. His phone number is 88888888")

var info1 = new Info("leonard's private channel", "2018/10/22", ["2018/12/20","2018/12/21"],"Marina Bay Sands, Singapore")
var info2 = new Info("The best channel","2017/5/8",["1982/7/11","1983/7/11"],"The Golden Gate Bridge, San Francisco")
var info3 = new Info("Trump Tower", "2009/10/10",["2018/11/20", "2019/2/2"],"99 Sunset Blvd, Houston, Tx, 77005")

var user1 = new User("luzh","12345678",[],[])
var user2 = new User("lady","98765432",[],[])
var user3 = new User("Leonard","987654321",[],[])

var event1 = new Event(info1,content1,user1,pictureList1)
var event2 = new Event(info2,content2,user2,pictureList2)
var event3 = new Event(info3, content3,user3,pictureList3)

//console.log(info1.Channel_name);
export {event1}
export {event2}
export {event3}
export {user1}
export {user2}
export {user3}