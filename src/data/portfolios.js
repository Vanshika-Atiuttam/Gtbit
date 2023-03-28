import uuid from "react-uuid"
import { eye, git } from "../utils/Icons"
import snippet from '../img/portImages/snippet.png'
import js from '../img/portImages/js.png'
import tabs from '../img/portImages/tabs.png'
import figma from '../img/portImages/figma.png'

export const portfolios = [
    {
        id: uuid(),
        category: "Educational Event",
        title: "Lets Learn Together",
        image: "https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg",
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Vocational Event",
        title: "Dance pe Chance",
        image: "https://static.toiimg.com/thumb/msid-87999706,width-400,resizemode-4/87999706.jpg",
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Health Drive",
        title: "Health is Wealth",
        image: "https://www.taskforce.org/wp-content/uploads/2022/05/photo-darrie%CC%80re-plan-7-1024x683.jpg",
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Awareness Drives",
        title: "Save Trees",
        image: "https://files.globalgiving.org/pfil/3419/ph_3419_37469.jpg?m=1519120445000",
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
]