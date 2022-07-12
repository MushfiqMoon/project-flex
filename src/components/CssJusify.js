import React, { useState } from 'react'


function CssJusify() {
    const [justify, setJustify] = useState("center")

    return (
        <>
            <fieldset>
                <legend>CSS justify:</legend>
                <div className="jusify-area" style={{justifyContent:`${justify}`}}>
                    <img src="./assets/cow.jpg" alt="cow.jpg" />
                    <img src="./assets/giraffe.jpg" alt="giraffe.jpg" />
                    <img src="./assets/sheep.jpg" alt="sheep.jpg" />
                </div>
            </fieldset>

            <p className="css-selector">.css-jusify &#123;</p>
            <p className="css-prop">display: flex;</p>
            <form>
                <label htmlFor="justify-content">justify-content:</label>
                <select id="cars" name="cars" onChange={(e)=>{
                     const getProp = e.target.value;
                     setJustify(getProp)
                     }}>
                    <option value="center">center;</option>
                    <option value="flex-end">flex-end;</option>
                    <option value="flex-start">flex-start;</option>
                    <option value="space-around">space-around;</option>
                    <option value="space-between">space-between;</option>
                    <option value="space-evenly">space-evenly;</option>
                </select>

            </form>

            <p className="css-selector">&#125;</p>
        </>
    )
}

export default CssJusify