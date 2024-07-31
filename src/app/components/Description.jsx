import Image from 'next/image';

export default function Description(){
    return (
        <div className="description-bar">
            <div className='description' style={{textAlign:"center"}}>
                <div className="description-content" >
                    <p style={{color: "#c9913c"}}>{"MERHABA :)"}</p>
                    <p >Ben Rukiye</p>
                    <p style={{color: "#c9913c"}}>Yazılım Mühendiyim</p>
                    <p style={{color: "#94380d"}}>Kullanıcı dostu ve etkili web tasarımları geliştirmeye odaklanıyorum.</p>
                </div>
                <Image
                    src="/portfolyoFoto.jpg" 
                    alt="Logo"
                    width={300}
                    height={300} 
                    style={{border:"4px solid #c9913c", borderRadius:"50%"}}
                />
            </div>
            <div className='viewDesign' style={{marginTop: "80px", fontSize:"18px", cursor:"pointer"}}>
                <a href='#' style={{color: "#c9913c"}}>Tasarımlara Gözat</a>
            </div>
        </div>
    )
}    