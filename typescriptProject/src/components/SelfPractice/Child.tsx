


export default function Child(): JSX.Element {
  const arr : number[] = [34, 56, 65, 76];

    const res = arr.reduce((preVal, curVal) => {
        return preVal + curVal
    })

    console.log(res);
    
  
  

  
  
  


  return <div>childzzzzzz</div>;
}
