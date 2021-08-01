class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            show: false
        };
    }
    handleToggleVisibility (){
        this.setState((prevState) =>{
            return {
                show: !prevState.show
            };
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.show ? 'Hide detail' : 'Show detail'}
                </button>
                {this.state.show && <p>Hey. These are some details you can see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let show = false;
// const onToggle = () => {
//     show = !show  //show = (show ? false : true)
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>
//                 {show ? 'Hide detail' : 'Show detail'}
//             </button>
//             {show && <p>Hey. These are some details you can see!</p>}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// };
// render();