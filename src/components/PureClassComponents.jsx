import React, { Component,PureComponent } from 'react';

/* exteds pureComponent to make class coponent pure coponent */
class PureClassComponents extends PureComponent {
    state={
        userName:'',
        age:10,
        address:{
            state:'karnataka'
        }
    }

    updateName=()=>{
        console.log("update name exicuted");
        this.setState({
            userName:'guru'
        })
    }

    updateAddress=()=>{
        this.setState({
            address:{
                state:"Tamil nadu"
            }
        })
    }

    componentDidUpdate(){
        console.log("component did update will exicuted");
    }
    /* if we extends pureComponent react will do a shallow comparision of the previous state and next state
    we should not write shouldComponentUpdate when extending pureComponent because react will write
    the logic of comparision in shouldComponetUpdate
    
    shouldComponent(nextProps,nextState{
        console.log("shouldComponentUpdate exicuted")
        console.log(nextState)
        console.log(this.state)

        if(nextstate.userName!==this.state.userName){
            return true
        }else{
            return false
        }
    })*/
    render() {
        console.log("render exicuted");
        return (
            <div>
                <p>user name={this.state.userName}</p>
                <p>address-{this.state.address.state}</p>
                <button onClick={()=>{this.updateName()}}>updateName</button>
                <button onClick={()=>{this.updateAddress()}}>updateAddress</button>
            </div>
        );
    }
}

export default PureClassComponents;
