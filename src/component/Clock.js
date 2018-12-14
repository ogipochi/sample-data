import React,{Component} from "react";

//stateで現在時刻を管理してそれをそのまま表示するコンポーネント
//updateのタイミングは1000ミリ秒ごと
//How to use:
//    <Clock/>



class Clock extends Component {
    constructor(props){
        // インスタンスの作成時に一度だけ呼ばれる
        super(props)
        // stateの初期化
        this.state={
            currentTime:(new Date()).toLocaleString()
        }
        // 定期実行の定義
        setInterval(()=>{
            console.log("Update Time");
            // stateの更新
            this.setState(
                {
                    currentTime:(new Date()).toLocaleString()
                }
            )
        },1000);

    }
    
    render(){
        return(
            <div>
                {this.state.currentTime}
            </div>
        )
    }
}

export default Clock;