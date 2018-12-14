import React,{Component} from "react";

// stateでinputに入力されたテキストを管理しそれをそのまま表示するComponent
// updateのタイミングはinputに入力れたテキストの変更時
// How to use:
//     <Input/>


class Input extends Component {
    constructor(props){
        // インスタンスの作成時に一度だけ呼ばれる
        super(props)
        // stateの初期化
        this.state={
            inputText:""
        }
    }
    
    updateInputText = (e)=>{
        // inputの更新処理
        console.log("update input text");
        this.setState({
            inputText:e.target.value
        })

    }
    render(){
        return(
            <div>
                <input value={this.state.inputText} onChange={this.updateInputText}/>
                入力されたテキストは{this.state.inputText}です。
            </div>
        )
    }
}

export default Input;