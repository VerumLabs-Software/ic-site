module.exports = blockName => `
const {$} = window;

export function ${blockName} () {
  console.log('${blockName} Works!');
}

`;
