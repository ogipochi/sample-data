import React,{Component} from "react";

// stateでinputに入力されたテキストとテキストのリストを管理。
// inputにテキストが入力されるたびにstateのinputTextをupdateしていく。
// 『追加』を押すとtextListに現在のstateのinputTextが追加されinputTextを初期化する
// How to use
//     <InputList/>


class InputList extends Component {
    constructor(props){
        // インスタンスの作成時に一度だけ呼ばれる
        super(props)
        // stateの初期化
        this.state={
            textList:[],
            inputText:""

        }
    }
    updateTextList = (e) =>{
        // 
        console.log("update text list")
        let text = this.state.inputText
        this.setState(
            {
                textList:[...this.state.textList,text],
                inputText:""
            }
        )
    }
    updateInputText = (e) =>{
        console.log("update input text");
        this.setState({
            textList:this.state.textList,
            inputText:e.target.value
        })
    }
    
    render(){
        return(
            <div>
                <input value={this.state.inputText} onChange={this.updateInputText}/>
                <div onClick={this.updateTextList}>追加</div>
                <div style={{border:"2px solid rgb(0,0,0)"}}>
                    <div>入力テキストリスト</div>
                    {this.state.textList.map((text,i)=>{
                        // 引数を２つ指定した場合繰り返しの数が取得できる
                        return(
                            <div>
                                No.{i}:{text}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default InputList;