export function Button(props){
  // 整個 Button component 共用的 class
  let btnClassName = 'inline-block rounded mr-6 cursor-pointer mb-4 '
  let iconClassName = 'inline h-4 w-4 mr-1 align-sub '
  let textClassName = 'inline '
  // 參數名字傳錯的錯誤訊息
  let alert = ""


  // 傳入 size 參數，加相對應的 btnClassName
  switch (props.size){
    case "14":
      btnClassName += "text-sm leading-8 px-2.5 "
      break
    case "12":
      btnClassName += "text-xs leading-6 px-2 "
      break
    default:
      btnClassName = ''
      alert += "wrong size props (12, 14)" 
  }
  
  // 傳入 level 參數，加相對應的 btnClassName
  switch (props.level){
    case "primary":
      btnClassName += "text-white bg-primary hover:bg-opacity-80 "
      break
    case "secondary":
      btnClassName += "text-primary bg-primary bg-opacity-20 hover:bg-opacity-40 "
      break
    case "tertiary":
      btnClassName += "text-primary hover:bg-primary hover:bg-opacity-10 "
      break
    default:
      btnClassName = ''
      iconClassName += 'hidden '
      alert += "wrong level props (primary, secondary, tertiary) " 
  }

  // 傳入 level 參數，加相對應的 btnClassName
  switch (props.icon){
    case "true":
      break
    case "false":
      iconClassName += "hidden "
      break
    default:
      iconClassName += "hidden "
      alert += 'wrong icon props(true, false)'
  }

  return(
    <div className={btnClassName}>
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div className={textClassName}>{alert}{props.text}</div>
    </div>

  );
}

