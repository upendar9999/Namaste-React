const heading = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child1",xyz:"abc"},
    [React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am an h3 tag")
    ]),
    React.createElement("div",
        {id:"child2",xyz:"abc"},
    [React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am an h3 tag")
    ])]

);

    console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);