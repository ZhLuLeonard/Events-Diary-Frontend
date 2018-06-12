import Event from './Event'
import Info from './Info'
import User from './User'
import Content from './Content'
import {fromJS} from 'immutable'

var pictureList1 = ["/users/luzh/1.png","/users/luzh/2.png","/users/luzh/3.png","/users/luzh/4.png"]
var pictureList2 = ["/users/lady/1.png","/users/lady/2.png","/users/lady/3.png","/users/lady/4.png","/users/lady/5.png"]
var pictureList3 = []

pictureList1 = fromJS(pictureList1)
pictureList1 = fromJS(pictureList2)
pictureList1 = fromJS(pictureList3)

var content1 = {"Title":"Mr. Kim is Drinking Tea","Images":[],"Text":"He likes to drink tea so much. Normally people won't be able to drink so much tea as him. Because of that, he won a great drinking competition against all other presidents in the world"}
var content2 = {"Title":"Garena is the best company in the world","Images":[],"Text":"There is a superb company in the island of Singapore. Its office is full of the smartest people, and with these manpower, the company gets to produce the best softward in the region."}
var content3 = {"Title":"An interesting Event", "Images":[], "Text":"Because of where this event comes from, it is a very interesting event. The details must be obliterated due to overwhelming demand. However, if you want to know more, please contact the president of the United States as he is the main sponsor for this weird and fun arrangement. His phone number is 88888888"}

//const content1 = fromJS(content1)

var info1 = {"Channel_name":"leonard's private channel", "Pubtime":"2018/10/22", "When":["2018/12/20","2018/12/21"],"Where":"Marina Bay Sands, Singapore"}
var info2 ={"Channel_name":"The best channel","Pubtime":"2017/5/8","When":["1982/7/11","1983/7/11"],"Where":"The Golden Gate Bridge, San Francisco"}
var info3 = {"Channel_name":"Trump Tower", "Pubtime":"2009/10/10","When":["2018/11/20", "2019/2/2"],"Where":"99 Sunset Blvd, Houston, Tx, 77005"}

var user1 = {"userName":"luzh","passWord":"12345678","goings":[],"likes":[]}
var user2 = {"userName":"lady","passWord":"98765432","goings":[],"likes":[]}
var user3 = {"userName":"Leonard","passWord":"987654321","goings":[],"likes":[]}

var event0 = {"Info":info1,"Content":content1,"User":user1,"pictureList":pictureList2,"likes":[],"goings":[],"comments":[]}
var event2 = {"Info":info2,"Content":content2,"User":user2,"pictureList":pictureList2,"likes":[],"goings":[],"comments":[]}
var event3 = {"Info":info3,"Content":content3,"User":user3,"pictureList":pictureList3,"likes":[],"goings":[],"comments":[]}

const immEvent1 = fromJS(event0)
const immEvent2 = fromJS(event2)
const immEvent3 = fromJS(event3)

//console.log(event0.pictureList)

//console.log(immEvent1.getIn(["Info","When"]))

//console.log(info1.Channel_name);
export {event0}
export {event2}
export {event3}
export {user1}
export {user2}
export {user3}