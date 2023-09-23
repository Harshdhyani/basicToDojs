const arr=[{
    act:'',
    dueDate:''
}];
function activity(){
    const a=document.querySelector('.task');
    const v=a.value;

    const d=document.querySelector('.ddate');
    const v1=d.value;
    arr.push({act:v,dueDate:v1});
    a.value='';
    displayList();
    }

    function displayList(){
        let tList='';
    
        for(let i=0;i<arr.length;i++){
            
            const obj=arr[i];
            const n=obj.act;
            const dd=obj.dueDate;
            const html=`<div>${n}</div>
                        <div>${dd}</div>  
                        <button class="del"onclick="deleteActivity(${i})">delete</button>` ;
            tList+=html;
            console.log(html)
        }
        document.querySelector('.disp').innerHTML=tList;
    }

function deleteActivity(ind){
arr.splice(ind,1);
displayList();
}