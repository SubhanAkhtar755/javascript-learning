//                              find max and min number 

// var arr = [2,3,5,6,4,1,8,9,10,24]      
// var min = arr[0]  

// for( var i=0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i]   
//     }
// }               
// console.log(min)


//                                    same tasks 

// var arr = [["subhan", "akhtar"],["sufyan", "zain"]];    
// for (var i=0; i < arr.length; i++) {
//    for (var j=0; j < arr[i].length; j++){
//     console.log(arr[i][j]);
//    }
// }                    


//                          find means searching any words 

// var text = "Telegram users can exchange text messages, hold voice calls, share files, join groups of up to 200,000 members, and subscribe to public broadcast channels. The service can be accessed via smartphones, personal computers, and web browsers, with users' conversations syncing between devices."                   
// for (var i = 0; i < text.length; i++){
//     console.log(text.slice(i, i + 5) === "users")

// }






                                //    find any word with prompt

// var text = "Telegram users can exchange text messages, hold voice calls, share files, join groups of up to 200,000 members"
// var user = prompt("enter searching word")
// var new1 = "no"
// for (i = 0; i < text.length; i++){
//     if(text.slice(i, i + user.length).toLowerCase() === user.toLowerCase()){
// new1 = "yes"

//     }
// }     
// if(new1 === 'yes'){
//     console.log( "this word is found ====>" , user)
// }else(
//     console.log(  "this word is not found ====>" , user)
// ) 







// var text = "Telegram users can exchange text messages, hold voice calls, share files, join groups users of up to 200,000 members"
// console.log(text.indexOf("users")) starting index number btata ha search ka  . ya start sy kaam krta ha shuru
// console.log(text.lastIndexOf("users"))                                          . ya akhir sy search krna start kry ga     






                            //  even odd number finds 
// var num = prompt("enter number" )
//  if (num % 2 === 0){
//     console.log("even ===>" , num)
//  }
//  else(console.log("odd ===>" , num)       )  






// .toLowerCase
// .toUpperCase
// .charAt ya phir [ya]