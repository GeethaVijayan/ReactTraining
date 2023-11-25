const heading = React.createElement("h1", {id:"ne"},"welcome to Namastae React");
console.log(heading);

/*
   <div id="parent">
      <div id="child1">
         <h1></h1>
         <h2></h2>
      </div>
      <div id="child2">
         <h1></h1>
         <h2></h2>
      </div>
   </div>

*/ 
const div1 = React.createElement("div",{id:"parent" },
             React.createElement("div",{id:"child" },
             [
                React.createElement("h1",{id:"h1" },"Welcome to h1 tag"),
                React.createElement("h2",{id:"h2" },"Welcome to h2 tag")
             ]
             
             ),
             React.createElement("div",{id:"child2" },
             [
                React.createElement("h1",{id:"h1" },"Welcome to h1 tag"),
                React.createElement("h2",{id:"h2" },"Welcome to h2 tag")
             ]
             
             ),
)
console.log(div1);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(div1);


