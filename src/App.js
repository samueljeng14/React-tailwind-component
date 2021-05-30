import logo from './logo.svg';
import reactLogo from "./react-logo.png";
import tailwindLogo from "./tailwind-logo.svg";
import './App.css';
import * as element from "./element.js"
import * as component from "./component.js"

function App() {
  return (
    <div className="App">
      <div className="container pt-12 text-high mx-auto text-left w-11/12">
        <h1 className="text-5xl text-high font-bold pb-6">OakMega component library</h1>
        <h2 className="text-2xl font-medium pb-4"><img className="w-auto h-8 inline align-middle" src={reactLogo} alt="react logo"/> <span className='font-normal'> × </span><img className="w-auto h-4 inline align-middle" src={tailwindLogo} alt="react logo"/> tailwind</h2>
        <h5 className="text-base">By <a className="underline duration-200 hover:text-samuel" href="https://www.linkedin.com/in/samuel-jeng-product-designer/" target="_blank">Samuel Jeng </a></h5>
        <element.Divider></element.Divider>
        <section id="button" className="">
          <element.Item title="Button" comment="按鈕是元件的基礎，也是使用者與介面互動的開端。按鈕可用選項為 size, level, icon 三個，可以調整搭配使用。"></element.Item>
          <element.Code code='&lt;Button text="內容文字" size="按鈕大小" level="按鈕層級" icon="有無圖標"&gt;&lt;/Button&gt;'></element.Code>
          <p className="text-xl font-medium mt-4 mb-2">Size</p>
          <div className="flex items-center flex-wrap">
            <component.Button text="size: 14" size="14" level="primary" icon="false"></component.Button>
            <component.Button text="size: 12" size="12" level="primary" icon="false"></component.Button>
          </div>
          <p className="text-xl font-medium mt-4 mb-2">Level</p>
          <div className="flex items-center flex-wrap">
            <component.Button text="Primary" size="14" level="primary" icon="false"></component.Button>
            <component.Button text="Secondary" size="14" level="secondary" icon="false"></component.Button>
            <component.Button text="Tertiary" size="14" level="tertiary" icon="false"></component.Button>
          </div>
          <p className="text-xl font-medium mt-4 mb-2">Icon</p>
          <div className="flex items-center flex-wrap">
            <component.Button text="with icon" size="14" level="primary" icon="true"></component.Button>
            <component.Button text="with icon" size="14" level="secondary" icon="true"></component.Button>
            <component.Button text="with icon" size="14" level="tertiary" icon="true"></component.Button>
          </div>          
        </section>
        <element.Divider></element.Divider>
      </div>
    </div>
  );
}

export default App;
