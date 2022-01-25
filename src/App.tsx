import React, {useState, useRef, Component, ReactNode, Fragment} from "react"

function Button(props: any) {
    let { className, action, title } = props;

    return <button className={className} onClick={action}>{title}</button>;
}


class Title extends Component {
    render(): ReactNode {
        return (
            <hgroup>
                <h1>Hello world!</h1>
                <h2>from React</h2>
            </hgroup>
        )
    }
}

class Counter extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {
            count: 0
        }
    }

    get count(): number {
        // @ts-ignore
        return this.state.count
    }

    render(): ReactNode {
        const subEvent = () => this.setState({ count: this.count - 1 })
        const addEvent = () => this.setState({ count: this.count + 1 })

        return (
            <article>
                <p><b>Count:</b> {this.count}</p>
                <progress value={this.count} max="100"></progress>
                <div className="grid">
                    <div><Button title={"-"} action={subEvent} className="secondary"/></div>
                    <div><Button title={"+"} action={addEvent}/></div>
                </div>
            </article>
        )
    }
}

export default function App() {
    document.title = "Counter"

    return (
        <Fragment>
            <header className="container">
                <Title/>
            </header>
            <main className="container">           
                <Counter/>
            </main>
        </Fragment>
    )
}