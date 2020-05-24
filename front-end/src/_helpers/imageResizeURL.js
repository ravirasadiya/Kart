export function imageResizeURL(imageName, imagePath, height, width) {
    const URLPATH = 'http://localhost:9000/api/media/image-resize?'
    const heightM = height ? height : 100;
    const widthM = width ? width : 100;
    const imageURL = URLPATH + `path=` + imagePath + `&name=` + imageName + `&width=` + widthM + `&height=` + heightM;
    // api/media/image-resize?path=banner/&name=Img_1564664546510.jpeg&width=10000&height=400
    return imageURL;
}