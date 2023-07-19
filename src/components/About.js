export default function About({image="https://via.placeholder.com/215",paragraph="About this blog"}) {
    console.log(paragraph)
    return(<>
    <aside>
        <img src={image} alt="blog logo"></img>
        <p>{paragraph}</p>
    </aside>
    </>)    
}