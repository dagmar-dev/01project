import React from 'react'

function Content() {
    const handleNameChange = () => {
        const names = ['dark', 'bark', 'lark']
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }
    const handleClick = () => {
        console.log('you clicked it')
    }
    const handleClick2 = (name) => {
        console.log(`${name}you clicked it`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <h1>Dagmar Lewis</h1>
            <p>Hello {handleNameChange()}</p>
            <button onClick={(handleClick)}>Click it</button>
            <button onClick={(()=> handleClick2('Dagmar'))}>Click it</button>
            <button onClick={((e)=> handleClick3(e))}>Click it</button>
        </main>
    )
}

export default Content
