import project01 from './../image/projects/01.jpg'
import project01Big from './../image/projects/01-big.jpg'

import project02 from './../image/projects/02.jpg'
import project02Big from './../image/projects/02-big.jpg'

import project03 from './../image/projects/cswpf.png'
import project03Big from './../image/projects/cswpfbig.png'

const projects = [
    {
        id: '1',
        title: 'Gaming streaming portal',
        skills: 'React, Node.js, MongoDB',
        img: project01,
        imgBig: project01Big,
    },
    {
        id: '2',
        title: 'Video service',
        skills: 'React, PHP, MySQL',
        img: project02,
        imgBig: project02Big,
    },
    {
        id: '3',
        title: 'Bots for any game',
        skills: 'WPF, C#',
        img: project03,
        imgBig: project03Big,
        gitHubLink: 'https://github.com/Enchu/CSWPF'
    }
];

export {projects}