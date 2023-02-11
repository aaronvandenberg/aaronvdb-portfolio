const about = document.querySelector('#about')
const portfolio = document.querySelector('#portfolio')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const portfolioContent = document.querySelector('#portfolio-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
    title: 'About me',
    background: '#00E4FF',
    width: '500px',
    height:'500px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    })
})

portfolio.addEventListener('click', () => {
    const portfolioBox = new WinBox({
    title: 'Projects',
    background: '#00E4FF',
    width: '500px',
    height:'500px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: portfolioContent,
    })
})