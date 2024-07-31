import Image from 'next/image';
export default function Header(){
    return (
        <header className='header'>
            <a href="#">
                <Image
                    src="/logoSon.png" // resmin yolu, "public" klasörüne göre ayarlanır
                    alt="Logo"
                    width={360} 
                    height={100}
                    className='logo'
                    />
            </a>
            <Image
                className='hamburger desktop-hidden'
                src="/hamburgerMenu.png" // resmin yolu, "public" klasörüne göre ayarlanır
                alt="Logo"
                width={30} // resmin genişliği
                height={30} // resmin yüksekliği
             />
            <ul className='header-list mobile-hidden' >
                <li>Projects</li>
                <li>About</li>
                <li>Say Hi!!</li>
            </ul>
        </header>
    )
}