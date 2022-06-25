type tNumber = number | string;
enum enumSeprator {
  PUNTO= '.',
  ESPACIO= ' ',
}
/**
 * Formatear numero entero con sepracion de miles para valores . | 'espacio'
 * Si es numero formatea
 * Si es string quita el formato al numero 
 * 
 * @param number valor a formatear 
 * @param separator separador del numero
 * @return tNumber string | number
 */
function formatNumber(number:number, separator:enumSeprator): string; 
function formatNumber(number:string, separator:enumSeprator): number; 
function formatNumber(number:tNumber = 0, separator:enumSeprator = enumSeprator.PUNTO): tNumber 
{  
  if(typeof number === 'number'){
    if(isNaN(number)){
      return '';
    }
    number = number.toFixed(0);
    number = `${number}`;
    let format = '';
    let cont = 1;
    for (let i = number.length - 1; i >= 0; i--) { 
      format = `${number[i]}${format}`;
      if ((cont % 3) == 0 && number[i-1]) {
        format = `${separator}${format}`;
      }
      cont ++;
    }
    return format;
  }    
  else{
    switch (separator) {
      case enumSeprator.ESPACIO:
        number = number.replace(/\s/g, '');    
        break;
      case enumSeprator.PUNTO:
        number = number.replace(/\./g, '');
        break;
      default:
        break;
    }
    return parseInt(number);
  }
}

export default formatNumber;