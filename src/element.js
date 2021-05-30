export function Divider(){
  return (
    <div className="border-b border-line border-solid my-6"></div>
  );
}

export function Item(props){
  return (
    <div>
      <h3 className="text-2xl font-bold my-3">{props.title}</h3>
      <p className="text-base font-regular text-medium mb-4">{props.comment}</p>
    </div>
  );
}

export function Code (props){
  return(
    <code className="text-code-text bg-code-bgc rounded p-3 block mb-8">{props.code}</code>
  );
}