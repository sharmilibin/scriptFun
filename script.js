//Function returning Function
 function interviewQuestion(job){
     if(job === 'designer'){
         return function(name)
         {
             console.log(name+ ' design questions');
         }
        }
         else if(job === 'teacher'){
             return function(name){
                 console.log('what subject u r intrested  ' +name);
             }
            }
             else{
                 return function(name)
                 {
                    console.log(name+  ' hello Welcome');
                 }
             }
            }

         var designjob = interviewQuestion('designer');
         designjob('sharmi');
         var teacherjob =interviewQuestion('teacher');
         teacherjob('Melba');
         designjob('libin');
         teacherjob('Michael');
         designjob('milton');
         teacherjob('Mary');
         interviewQuestion('bussinessMan')('milton');
     
