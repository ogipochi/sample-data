import React, { Component } from "react";

// stateで現在時刻の秒を取得してそれをアナログの時計として描画するコンポーネント
// updateのタイミングは1000ミリ秒ごと
// How to use:
//     <ClockAnalog/>



class ClockAnalog extends Component {
    constructor(props) {
        // インスタンスの作成時に一度だけ呼ばれる
        super(props)
        // stateの初期化


        let currentSecond = (new Date()).getSeconds();  //秒数の取得
        let angle = (currentSecond / 60) * 360 - 90;  //rotateのための角度.0秒をのとき-90degになる

        this.state = {
            angle: angle
        }
        // 定期実行の定義
        setInterval(() => {
            console.log("Update Second");
            // stateの更新
            let currentSecond = (new Date()).getSeconds();  //秒数の取得
            let angle = (currentSecond / 60) * 360 - 90;  //rotateのための角度.0秒をのとき-90degになる
            this.setState(
                {
                    angle: angle
                }
            )
        }, 1000);

    }

    render() {
        return (
            <div style={{ width: "10rem", height: "10rem", border: "1px solid rgb(0,0,0)", borderRadius: "50%" ,display:"flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
                <div style={{ width: "0", height: "2px", borderRight: "5rem solid rgb(0, 0, 0)",borderLeft:"5rem solid rgba(0,0,0,0)",transform:`rotate(${this.state.angle}deg)` }}></div>
            </div>
        )
    }
}

export default ClockAnalog;