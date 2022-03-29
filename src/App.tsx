import React, {useState} from 'react';
import './App.css';

function App() {
    return (
        <div className={"flex-container"}>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">Flexbox</div>
                    <ul className="nav">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="header">
                <div className="container">
                    <div>
                        <h1>Flexbox Crash Course</h1>
                        <p>
                            This crash course was created by Brad Traversy to help you learn the
                            basics of flexbox. Flexbox is a very important and useful tool in
                            CSS.
                        </p>
                    </div>
                    <img src="https://traversymedia.com/images/grid.svg" alt=""/>
                </div>
            </header>

            <section className="boxes">
                <div className="container">
                    <div className="box">
                        <h2><i className="fas fa-arrows-alt-v"></i> Alignment & Space</h2>
                        <p>
                            A more efficient way to lay out, align and distribute space among
                            items in a container
                        </p>
                    </div>

                    <div className="box">
                        <h2><i className="fas fa-arrows-alt"></i>Tricky Positioning</h2>
                        <p>
                            Flexbox usually solves tricky problems including how to position or
                            dynamically resize elements on a page
                        </p>
                    </div>

                    <div className="box">
                        <h2><i className="fas fa-mobile"></i>Responsive Design</h2>
                        <p>
                            Flexbox makes building a website layout (and making it responsive!)
                            much, much easier
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;

/*import React, {useState} from 'react';
import './App.css';

function App() {
    const [count, setCount]=useState<number>(0)

    let maxCount = 15
    let minCount = -15

    const addition = () => {
        if(count < maxCount){
            setCount(Hz => Hz + 1)
        }
        return
    }
    const subtraction = () => {
        if(count > minCount){
            setCount(Hz => Hz - 1)
        }
        return
    }

    const resetBtn = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div style={{border:"5px green solid",
                margin:"auto",
                width:"200px",
                height:"400px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <div style={{border:"solid", borderRadius:"20px", padding:"10px"}}>
                    <div style={{display:"flex",justifyContent:"center"}}>{count}</div>
                    <div>
             <span><button disabled={count===maxCount} onClick={addition}>+</button>
             <button disabled={count===minCount} onClick={subtraction}>-</button></span>
                    </div>

                </div>
                <div style={{display:"flex", alignItems:"flex-end"}}>
                    <button onClick={resetBtn}>Reset</button>
                </div>


            </div>
        </div>
    );
}

export default App;*/

