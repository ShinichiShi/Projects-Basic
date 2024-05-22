let inp=document.querySelector('input');

        function clr(){
            inp.value='';
        }    

        function erase(){
            let x=inp.value;
            let n=x.length;
            if(n===0) {return x;}
            inp.value= x.slice(0,n-1);            
        }

        function disp(val){
            inp.value+=val;
        }   

        function toggle(){
            let x=inp.value;
            console.log('hello');
            if(x.startsWith('-')){
                inp.value=x.slice(1);
                inp.value= inp.value;
            }
            else {
                // inp.val=x.slice(1);
                inp.value='-' + inp.value;
            }
        }
        
        function percent(){
            // inp.value=inp.value+"% of ";
            // let btn = document.getElementById('equals');
            // btn.addEventListener('click',rest);
            // let rem = inp.value
            inp.value=math.evaluate(inp.value * 0.01);
        }
//         function rest(){
//             let input=inp.value;
//             let n=inp.value;
//             let first = '',second='';
//             let ind=0;
//             console.log("heyo");
//             let i=0;
//             while(input[i]!='%')
//             {
//                 first+=input[i];
//                 i++;
//                 ind++;
//             }
//             console.log(ind);
//             ind+=5;
//             console.log(ind);
// // 9% of 100
//             for(let i=ind;i<n;i++){
//                 second+=input[i];
//             }
//             console.log(second);
//             second = math.evaluate(second * 0.01);
//             inp.value = math.evaluate(first * second);
//         }

        function equal() {
        try {
        inp.value = math.evaluate(inp.value);
        } catch (a) {
            a.message="Syntax error";
            inp.value="Syntax Error :<"
        console.error('An error occurred in equal() function:', a.message);
         // Additional error handling or fallback behavior can be added here
        }
        }