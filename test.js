 

//    function getTime(opt){


//     let t =Date.now();
//     let t2 = new Date();
//     let month =t2.getMonth();
//     let date =t2.getDate();
//     let year =t2.getFullYear();
//     let hours =t2.getHours()-12;
//     let minutes = t2.getMinutes();
//     let seconds = (t2.getSeconds());
//     let lastDay =t -(86400); 
//     let lastWeek =t - (86400*7);
//     let last2Weeks =t - (lastWeek*2);
//     let lastMonth =t - (lastWeek*4);

//     if(hours <=0){

//       hours+=12;      

//     }
    
//     if(opt === 'p'){/// print format 
//     return (`${month}-${date}-${year} ${hours}:${minutes}:${seconds} `);

//     }else if(opt === 'pdate'){/// print format 
//         return (`${month}-${date}-${year}`);

//     }else if(opt === 'pLastDay'){/// print format last day starting from 
//         return (`${month}-${date}-${year}`);

//     }else if(opt === 'pLastWeek'){/// print date past week
        
//         return (`${month}-${date}-${year}`);
//     }else if(opt === 'pLast2Week'){/// print date last 2 weeks
//         return (`${month}-${date}-${year}`);
//     }else if(opt === 'pLastMoth'){/// print date last month
//         return (`${month}-${date}-${year}`);

//     }else if(opt === 'pd'){/// print format 
//         return (`${month}-${date}-${year}`);

//     }else if(opt == 't'){
//     return (t)
//     }
    
//     else{

        
        
//         t2 = new Date(opt);
//         let month =t2.getMonth();
//         let date =t2.getDate();
//         let year =t2.getFullYear();
//         let hours =t2.getHours()-12;
//         let minutes = t2.getMinutes();
//         let seconds = (t2.getSeconds());

//         if(hours <=0){

//             hours+=12;      
      
//           }
         

//         return (`${month}-${date}-${year} ${hours}:${minutes}:${seconds} `);
//     }




// }

// let opt1 = 'p';
// let opt2 = 't';
// let time = getTime('t');
 
// console.log(getTime(opt1));
// console.log(getTime(opt2));
// console.log (getTime(15281266575055));


// class Time{

//  private month;
//  private day;
//  private years;
//  private hours;
//  private minutes;
//  private seconds;
//  private weeks;
//  private months;

// constructor(){

// let currentTime = Date.now();
// let time = new Date();

 

// this.month  = time.getMonth()+1;        // get month 0-11 , month off by one    
// this.day= time.getDate();             //get day  1 - 31
// this.years = time.getFullYear();     //get year  yyyy
// this.hours = time.getHours()-12;        // get hours 0-24
// this.minutes = time.getMinutes();    // get minues 0-60
// this.seconds = time.getSeconds();   // get seconds  0-60
// this.weeks =  86400000*7;  // get timestamp of a week
// this.months =  this.weeks * 4;  // get the timestamp of a month 


//     }




// getMonth(){ return this.month};
// getDay(){ return this.day};
// getYears(){ return this.years};
// getHours(){ 
            
//     if(this.hours <=0){

//     this.hours+=12;      
              
//     }
                 
    
//     return this.hours
// };
// getMinutes(){ return this.minutes};
// getSeconds(){ return this.seconds};

// getWeeks(){ return this.weeks};    //get timestamp of one week from now 
// getMonths(){ return this.months};   //get timestapm of one month from now 
// // getMultipleMonths(w){ return w*this.weeks}; // get timestamp of the past amount of weeks specified in input  
// // getMultipleWeeks(m) {return m*this.months } // get timestamp of the past amount of month specified in input  
// getPastWeek(w){ // get timestamp of the past amount of weeks specified in input  

// return (this.getCurrentTime() - (w*this.weeks))

// }
// getPastMonths(m){ // get timestamp of the past amount of month specified in input 

//     return (this.getCurrentTime() - (m*this.months))

// }

// getCurrentTime(){ //it will return current timestamp  
//     let currentTime = Date.now();
//     return currentTime;

// }

// getCurrentTimePrinted(){ //it will return current timestamp  01-1-1111 11:11:11  
    
//     return this.getPrintedTimeStamp(this.getCurrentTime()) ;
// }

// getPrintedTimeStamp(time){


//         let t2 = new Date(time);
         
//         let month =t2.getMonth()+1;
//         let date =t2.getDate();
//         let year =t2.getFullYear();
//         let hours =t2.getHours()-12;
//         let minutes = t2.getMinutes();
//         let seconds = (t2.getSeconds());

//         if(hours <=0){

//             hours+=12;      
      
//           }
          
//         // console.log(t2.getMonth());
//          return (`${month}-${date}-${year} ${hours}:${minutes}:${seconds} `);
//     }







// }
 

//  let t = new Time();
// console.log(t.getCurrentTime());
// console.log(t.getCurrentTimePrinted());

// console.log('****************************');
// console.log(t.getHours());
// console.log(t.getMinutes());
// console.log(t.getSeconds());

// console.log('****************************');
// console.log(t.getDay());
// console.log(t.getMonth());
// console.log(t.getYears());

// console.log('****************************');
// console.log(t.getPastWeek(1));
// console.log(t.getPrintedTimeStamp(t.getPastWeek(1)));
// console.log(t.getPastMonths(1));
// console.log(t.getPrintedTimeStamp(t.getPastMonths(1)));

// console.log(t.getCurrentTime() );
// console.log(t.getPrintedTimeStamp( t.getCurrentTime() ));
 
 //label.active input
 
// let approvedDenied = $('#approveDenied label.active input').val();
//console.log(approvedDenied);

// $(document).on('change', ('#approveDenied label.active input', function(){
    //console.log('clicked');
   
  //   $('#answer').append =`<span>${approvedDenied}</span>`;
  // }));
 
// let answer = document.getElementById('answer');

//  .children('.active');

// console.log(answer);

// $('#answer').append = `${approvedDenied}`;
 
 
 
// $('.header').click(function(){

//   $(this).nextUntil('tr.header').slideToggle(1000);
//   });

// $('.header').click(function(){
//   $(this).find('span').text(function(_, value){return value=='-'?'+':'-'});
//    $(this).nextUntil('tr.header').slideToggle(100, function(){
//    });
// });

// $('.header').click(function(){
//   $(this).toggleClass('expand').nextUntil('tr.header').slideToggle(100);
// });

$('tr.header').click(function(){
  $(this).nextUntil('tr.header').css('display', function(i,v){
      return this.style.display === 'table-row' ? 'none' : 'table-row';
  });
});