import React from 'react'
import './message.css'

class Message extends React.Component{
    render(){

        if(this.props.header){
            return(
                <section className="section">
                    <div className="container">
                        <div className="header">
                            <h1>Hello</h1>
                            <button>x</button>
                        </div>
                        <div className="head-p">
                            <p>Whatever you want in here ash hlsd hasdfh absdl bhsg alghl hdfgjh hdfgh hsdjl naleuin iaeurngli dnlijv naliehr liuaehg iuher lgiuhdflih alriugh laeign ladkjfn akjn rgluaher giuandf glkjnd fgkljae</p>
                        </div>
                    </div>
                </section>
            )
        }else{
            return(
                <section>
                    <div className="container new-header">
                        <div className="head-p">
                            <p>Whatever you want in here ash hlsd hasdfh absdl bhsg alghl hdfgjh hdfgh hsdjl naleuin iaeurngli dnlijv naliehr liuaehg iuher lgiuhdflih alriugh laeign ladkjfn akjn rgluaher giuandf glkjnd fgkljae</p>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default Message;