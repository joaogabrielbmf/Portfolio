import Container from "./Container"
function Main({children}) {
    return(
        <>
            <div className="flex-1 bg-mainbg flex">
                <Container>
                   {children} 
                </Container>
            </div>           
        </>
    )
}export default Main