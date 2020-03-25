const indexController = {
    home: (req, res) => {
        let titulo = 'Home - Devs media';

        let portfoleo = [
            {
                img: '/images/portfoleo-1.png',
                titulo: 'Ipsum, lorem dolor',
                active: true,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

            },
            {
                img: '/images/portfoleo-2.jpg',
                titulo: 'Ipsum, lorem dolor',
                active: false,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

            },
            {
                img: '/images/portfoleo-3.jpg',
                titulo: 'Lorem, ipsum dolor',
                active: false,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

            }
        ]


        res.render('index', {title: titulo, listPortfoleo: portfoleo});
    }

}

module.exports = indexController;