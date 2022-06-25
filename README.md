# capd_functions

## Table of Contents

- [Acerca de](#about)
- [Empezando](#getting_started)
- [Uso](#usage)
    - [formatNumber](#formatNumber)

## Acerca de <a name = "about"></a>
Paquete npm de funciones

## Empezando <a name = "getting_started"></a>
Revisar los prerequisitos y las instrucciones.

### Prerequistos
```shell
npm
```

### Instrucciones
- Ejecutar 
```shell
npm run build
```

## Uso <a name = "usage"></a>

Para hacer uso del paquete: 

- Anexar lo siguiente
```js
const capdFunctions = require("./dist/main");
// Ejemplo
capdFunctions.formatNumber(123123, '.'); //salida 123.123
```

Funciones implementadas: 

-   `formatNumber` <a name="formatNumber"></a>  
    * Formatear número entero con sepración de miles para valores `.` | `'espacio'`
    * Si es número formatea
    * Si es string quita el formato al número 
    
    * @param number valor a formatear 
    * @param separator separador del número
    * @return tNumber string | number
    
    ```js
    capdFunctions.formatNumber(23123, '.') //salida: 23.123
    capdFunctions.formatNumber(23123, ' ') //salida: 23 123
    capdFunctions.formatNumber("23.123", '.') //salida: 23123
    ```
