/**                 for each */
  
  
  let arr = [1,2,3,4,5];
arr.forEach(function (v,i) {
    console.log(v,i);
    
})

           /*     map */

let arrr = [1,2,3,4,5];
let newarrr = arrr.map(function (s,b) {
  
    return s * 10
});
console.log(newarrr);



                      /*     reduce   */
 let arrrr = [1,2,3,4,5];
 let total = arrrr.reduce(function (v,i) {
 console.log(v,i);
            return v + i              
 });
 console.log(total);
 


     /*     filter   */
     let arrrrr = [1,2,3,4,5,9];
     let totalr = arrrrr.filter(function (v,i) {
 
                return v > 4          
     });
     console.log(totalr);



       /** concat merging ka lia */    
       
       
       let arrg1 = ['wwww' , 'eeee']          
       let arrg2 = ['fff' , 'gggg']   
       let f = arrg1.concat(arrg2)  
       console.log(f);
           
         /**           arrow funtion */
let abc = (a,b)=>{
return a + b
}         
console.log(abc(2,7));

      /**           arrow funtion */
      let abc1 = (a,b) => a + b      
        console.log(abc(2,7));

  /**           arrow funtion */
        hello = () => {
            return "Hello World!";
          };
          console.log(hello());
          