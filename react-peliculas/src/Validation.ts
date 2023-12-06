//Esta area siver para crear validaciones comunes
//se ejecutara en el app.tsx


import * as Yup from 'yup'

export default function configurarValidaciones() {
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function () {
        return this.test('primeraLetraMayuscula', 'La primera letra debe ser mayùscula',
            function (valor) {
                if (valor && valor.length > 0) {
                    const primeraLetra = valor.substring(0, 1);
                    return primeraLetra === primeraLetra.toUpperCase();
                }

                return true;
            })
    })
}