import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import EventBinding from './components/EventBinding';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from './components/MethodsAsPropsParents';
// import RenderingLists from './components/RenderingLists';
// import Clock from './components/Clock';
// import LifeCyclesCDM from './components/LifeCyclesCDM';
// import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCwu';

/* 
  Functional component
  as we've only got one 'root' div index.html, going to use this as the
  parent component 
*/
function App() {
  return (
    <div className="App">
      {/*
      as this component is independent and won't have any other content except
      what it renders itself, it doesn't need a closing tag, just a self-closing 
      if components wrap other components, close them with a </> tag 
      */}
      {/* <FunctionalGreeting /> */}
      {/* greeting= is a prop */}
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component" name="Mike" /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component with callback"/> */}
      {/* <StatefulGreetingWithPrevState greeting="I'm a stateful class with a previous state" /> */}
      {/* <EventsClass />
      <EventsFunctional /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional connected={true}/> */}
      {/* <NestingComponents /> */}
      {/* < MethodsAsPropsParent /> */}
      {/* <RenderingLists /> */}
      {/* <Clock /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      <LifeCyclesCWU />
    </div>
  );
}

export default App;
