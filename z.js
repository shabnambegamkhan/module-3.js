const input=require("readline-sync")
let n=input.questionInt("Enter the size of array:")
let arr=[]
for(i=0;i<n;i++)
{
    arr[i]=input.questionInt(`Enter the elements [${i}]`)
}
console.log(arr);

let s=1;

i=0;
while(i<n)
{
    j=i+1
    while(j<n)
    {
        if(arr[i]==arr[j])
        {
            s+=1
            k=j
            while(k<n-1)
            {
                arr[k]=arr[k+1]
                k++
            }
            n=n-1
        }
        j++
    }
    if(s>1)
    {
        console.log(arr[i]);
    }
    i++
    s=1
}