import fuenteCorsair from '../assets/products/fuentes/corsair_rm_750.jpg'
import fuenteSeasonic from '../assets/products/fuentes/seasonic_focus_gx850.jpg'
import gabineteAzzaApollo from '../assets/products/gabinetes/azza_apollo-430.jpg'
import gabineteAzzaPyramid from '../assets/products/gabinetes/azza_pyramid_2.png'
import gpuAourus3080 from '../assets/products/gpu/aorus_xtreme_3080.jpg'
import gpuRog3070 from '../assets/products/gpu/rog_3070_2.jpg'
import ramTrident from '../assets/products/ram/trident_z_royale.jpg'
import ssdCorsair from '../assets/products/ssd/corsair_mp510.jpg'
import waterCollingNzxt from '../assets/products/waterColling/kraken_z63.jpg'


const products = [

    { id: '1', brand: 'Corsair', model: 'RM 750', price: 15000, photo: fuenteCorsair, category: "fuentes"},

    { id: '2', brand: 'Seasonic', model: 'Focus gx850', price: 15000, photo: fuenteSeasonic, category: "fuentes"},
    
    { id: '3', brand: 'Azza', model: 'Apollo-430', price: 15000, photo: gabineteAzzaApollo, category: "case"},
    
    { id: '4', brand: 'Azza', model: 'Pyramid', price: 15000, photo: gabineteAzzaPyramid, category: "case"},

    { id: '5', brand: 'Gigabyte', model: 'Aorus xtreme 3080', price: 15000, photo: gpuAourus3080, category: "gpu"},

    { id: '6', brand: 'Asus', model: 'ROG 3070', price: 15000, photo: gpuRog3070, category: "gpu"},

    { id: '7', brand: 'G-skill', model: 'Trident-z royale', price: 15000, photo: ramTrident, category: "ram"},

    { id: '8', brand: 'Corsair', model: 'MP510', price: 15000, photo: ssdCorsair, category: "ssd"},

    { id: '9', brand: 'NZXT', model: 'Kraken Z63', price: 15000, photo: waterCollingNzxt, category: "waterColling"},

];


export const getFetch = new Promise ((resolve, reject) => {

    let condition = true;

    if(condition){
        setTimeout(()=>{
            resolve(products)
        }, 2000)

    }else{
        reject('Error')
    }
})

