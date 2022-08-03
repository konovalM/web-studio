export default function convertToSlide(screen = 'desktop', data){
    const casesArray = []
    switch (screen) {
        case 'desktop':
            for (let i = 0; i < Math.ceil(data.length / 2); i++){
                casesArray.push(
                    {
                        case1: {
                            title: data[i * 2].title,
                            img: data[i * 2].img
                        },
                        case2: {
                            title: data[i * 2 + 1].title,
                            img: data[i * 2 + 1].img
                        }
                    }
                )
            }
            return (
                casesArray
            )
        case 'mobile':
            for (let i = 0; i < Math.ceil(data.length / 3); i++){
                casesArray.push(
                    {
                        case1: {
                            title: data[i * 3].title,
                            img: data[i * 3].img
                        },
                        case2: {
                            title: data[i * 3 + 1].title,
                            img: data[i * 3 + 1].img
                        },
                        case3: {
                            title: data[i * 3 + 2].title,
                            img: data[i * 3 + 2].img
                        },
                    }
                )
            }
            return (
                casesArray
            )
    }
}