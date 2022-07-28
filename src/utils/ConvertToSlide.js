export default function convertToSlide(screen = 'desktop', data){
    const casesArray = []
    let key = 1
    switch (screen) {
        case 'desktop':
            for (let i = 0; i < Math.floor(data.length / 2); i++){
                casesArray.push(
                    {
                        case1: {
                            title: data[key].title,
                            img: data[key].img
                        },
                        case2: {
                            title: data[key + 1].title,
                            img: data[key + 1].img
                        }
                    }
                )
            }
            return (
                casesArray
            )
        case 'mobile':
            for (let i = 0; i < Math.floor(data.length / 3); i++){
                casesArray.push(
                    {
                        case1: {
                            title: data[key].title,
                            img: data[key].img
                        },
                        case2: {
                            title: data[key + 1].title,
                            img: data[key + 1].img
                        },
                        case3: {
                            title: data[key + 2].title,
                            img: data[key + 2].img
                        },
                    }
                )
            }
            return (
                casesArray
            )
    }
}