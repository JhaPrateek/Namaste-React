// const heading=React.createElement("h1",{id:"heading"},"Kya haal hae")

// console.log(heading);     //object

//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading); 



    // <div id="parent">
    //     <div id="chiild">
    //         <h1>I am h1 tag</h1>
    //         <h2>I am h2 tag</h2>
    //     </div>
    // </div>
    
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I am h1 tag"
    ),React.createElement("h2",{},"I am h2 tag"
    )]))

    const root=ReactDOM.createRoot(document.getElementById("root"));
         root.render(parent); 