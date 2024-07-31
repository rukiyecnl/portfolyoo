import Image from 'next/image';
export default function Projects(){
    return (
        <div className="projects" style={{marginTop:"120px"}}>
            <h2 className='projects-title' style={{color: "#94380d",borderBottom:"2px solid", borderBottomColor:"#94380d"}}>PROJELERİM</h2>
            <div className="projects-content">
                <div className="project" style={{position:"relative"}}>
                    <Image
                        src="/trelloProje.png" 
                        alt="Logo"
                        width={1100} 
                        height={600}
                        className='project-img'
                    />
                    <div className="project-desc project-desc-trello" style={{position:"absolute", bottom: "0"}}>
                        <h2>TRELLO</h2>
                        <p>İş akışı sırasında yapılacak görevlerin takip edilmesine yardımcı olan bir arayüz</p>
                    </div>
                </div>
                <div className="project" style={{position:"relative"}}>
                    <Image
                        src="/todoProje.png" 
                        alt="Logo"
                        width={1100} 
                        height={600}
                        className='project-img'
                    />
                    <div className="project-desc project-desc-todo" style={{position:"absolute", bottom: "0"}}>
                        <h2>TODO REACT</h2>
                        <p>Yapılması gereken işlerin listelenmesi için tasarlanmıştır</p>
                    </div>
                </div>
                <div className="project" style={{position:"relative"}}>
                    <Image
                        src="/todoJsProje.png" 
                        alt="Logo"
                        width={1100} 
                        height={600}
                        className='project-img'
                    />
                    <div className="project-desc project-desc-todoJs" style={{position:"absolute", bottom: "0"}}>
                        <h2>TODO JS</h2>
                        <p>Yapılması gereken işlerin listelenmesi için tasarlanmıştır</p>
                    </div>
                </div>
                <div className="project" style={{position:"relative"}}>
                    <Image
                        src="/tictactoe.png" 
                        alt="Logo"
                        width={1100} 
                        height={600}
                        className='project-img'
                    />
                    <div className="project-desc project-desc-tictactoe" style={{position:"absolute", bottom: "0"}}>
                        <h2>TIC TAC TOE</h2>
                        <p>Küçük bir web oyunudur</p>
                    </div>
                </div>
            </div>
        </div>
    )
}