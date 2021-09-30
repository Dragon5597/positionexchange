const formatAddress = (str) => `${str.substring(0, 5)}...${str.substring(str.length - 5)}`;

const numberWithCommas = (x) => {
  if (!x) return 0;
  x = Math.floor(x * 100) / 100;
  let addVal = '';
  if (x >= 1000000000) {
    addVal = 'B';
    if (Math.floor(x / 1000000000) < 1000) {
      x = Math.floor((x / 1000000000) * 100) / 100;
    } else {
      x = Math.floor(x / 1000000000);
    }
  } else if (x >= 1000000) {
    addVal = 'M';
    if (Math.floor(x / 1000000) < 1000) {
      x = Math.floor((x / 1000000) * 100) / 100;
    } else {
      x = Math.floor(x / 1000000);
    }
  } else if (x >= 1000) {
    addVal = 'K';
    if (Math.floor(x / 1000) < 1000) {
      x = Math.floor((x / 1000) * 100) / 100;
    } else {
      x = Math.floor(x / 1000);
    }
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + addVal;
};

module.exports = {
  formatAddress, numberWithCommas
}