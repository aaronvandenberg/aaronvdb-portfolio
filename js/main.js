const about = document.querySelector('#about')
const portfolio = document.querySelector('#portfolio')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const portfolioContent = document.querySelector('#portfolio-content')



console.log("iVGhpcyBpcyB0aGUga2V5IHRvIEFhcm9uJ3MgbWFpbmZyYW1lLCB1c2UgaXQgd2lzZWx5IQ==")

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



contact.addEventListerner('click', () => {
	const contactBox = new Winbox({
		title: 'Contact',
		background: '#00E4FF',
		width: '500px',
		height: '500px',
		top: 50,
		right: 50,
		bottom: 50,
		left: 50,
		mount contactContent,


	})


})
