import Button from "./Button"
import Card from "./Card"

function Test(){
    return(
        <>
            <Button text="Register"/>
            <Button text="Login"/>
            <Button text="Logout"/>
            <Card title="Test Page" text="Text in Test Page" bColor="blue"/>
        </>
    )
}

export default Test