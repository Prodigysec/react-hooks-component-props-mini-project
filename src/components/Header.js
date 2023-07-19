export default function Header({heading="Underreacted"}) {
    console.log(heading)
    return (
        <>
         <header>
            <h1>{heading}</h1>
         </header>
        </>
    )    
}