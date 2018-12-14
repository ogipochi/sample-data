import React ,{Component} from "react";

// stateでnumberと取得データを管理
// inputの数字が変化するたびにstateのinputNumberをupdateしていく
// 『取得』を押すとサーバーからデータを取得してうまく取得できたらstateのdataを更新する
// サーバーはサンプルのサーバーでサンプルのデータが入っている
// How to use:
//     <FetchJson/>

class FetchJson extends Component {
    constructor(props){
        // インスタンスの作成時に一度だけ呼ばれる
        super(props)
        // stateの初期化
        this.state={
            data:{
                title:""
            },
            inputNumber:0
        }
    }
    fetchData = (e) =>{
        // サーバーからデータを取得しinputTextを初期化
        let url = `https://jsonplaceholder.typicode.com/todos/${this.state.inputNumber}`;
        fetch(url
        ).then(response=>{
            console.log(response);
            return response.json()
        }).then(jsonData=>{
            this.setState(
                {data:{
                    title:jsonData["title"],
                }}
            )
        })
    }
    updateInputNumber = (e)=>{
        // inputの更新処理
        console.log("update input number");
        this.setState({
            inputNumber:e.target.value
        })
    }
    render(){
        return(
            <div>
            <input type="number" value={this.state.inputNumber} onChange={this.updateInputNumber}></input>
            <div onClick={this.fetchData}>取得</div>
            <div style={{border:"solid 2px rgb(0,0,0)"}}>
            <div>title:{this.state.data.title}</div>
            </div>
            </div>
        )
    }
}

export default FetchJson;