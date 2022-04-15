import React from 'react'

function Content() {
    const handleNameChange = () => {
        const names = ['dark', 'bark', 'lark']
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }
    return (
        <main>
            <p>Hello {handleNameChange()}</p>
        </main>
    )
}

export default Content
