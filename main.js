function changeChannel(channelNumber) {
   let tv = document.getElementById('tv-image');
    let imageUrl = '';

    if (channelNumber === 1) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
    } else if (channelNumber === 2) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
    } else if (channelNumber === 3) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
    } else if (channelNumber === 4) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
    } else if (channelNumber === 5) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
    } else if (channelNumber === 6) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
    } else if (channelNumber === 7) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
    } else if (channelNumber === 8) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
    } else if (channelNumber === 9) {
      imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
    } else {
      imageUrl = '';
    }

    tv.src = imageUrl;
  }

//without onditionals
  /*function changeChannel(channelNumber) {
    let tv = document.getElementById('tv-image');
    
    const images = [
        '',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg',
        'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg'
    ];
    
    tv.src = images[channelNumber] || ''; // Fallback to empty string if channel number is out of range
}
*/