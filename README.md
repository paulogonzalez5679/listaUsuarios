# Listado de usuarios
## Pantalla Login
Para el login se utiliza una lista local para realizar la consulta del objeto y leer los datos para verificar en el ingreso de un usuario, además se guarda la informacion en localstorage para hacer una lectura mas rapida
NOTA: Hay un bug para validar si un usuario no existe, en caso de no exisitir no hará nada la aplicación, no muestra el mensaje de "usuario no existente"
## Pantalla Home
Para la la pantalla home se utiliza localstorage para obtner la informacion del usuario logeado y muestra su informacion
## Pantalla List
Para mostrar el listado de usuarios se creo un servicio REST para realizar una consulta directa al API de informacion, se usa un servicio y se obtiene la informacion. 
